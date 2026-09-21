(function () {
  "use strict";

  const catalog = window.EXAM_CATALOG || {};
  let exam = catalog.exams && catalog.exams[catalog.defaultExam];
  if (!exam) throw new Error("No default exam is registered in EXAM_CATALOG.");

  const $ = id => document.getElementById(id);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let storageKey = `cert-simulator:${exam.id}:${exam.version}`;
  let questionById = Object.fromEntries(exam.questions.map(q => [q.id, q]));
  let state = null;
  let ticker = null;
  let toastTimer = null;

  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function sameArray(a, b) {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((v, i) => v === b[i]);
  }

  function buildSequence(questionIds, randomize) {
    if (!randomize) return [...questionIds];
    const units = [];
    const usedCases = new Set();
    questionIds.forEach(id => {
      const q = questionById[id];
      if (!q.caseStudy) return units.push([id]);
      if (usedCases.has(q.caseStudy)) return;
      usedCases.add(q.caseStudy);
      units.push(questionIds.filter(candidate => questionById[candidate].caseStudy === q.caseStudy));
    });
    return shuffle(units).flat();
  }

  function createRun(subset) {
    const allIds = subset || exam.questions.map(q => q.id);
    const ids = buildSequence(allIds, $("shuffleQuestions").checked);
    const optionOrder = {};
    ids.forEach(id => {
      const q = questionById[id];
      if (q.type === "order") {
        let order = shuffle(q.options.map(o => o.id));
        if (sameArray(order, q.answer)) order = [...order.slice(1), order[0]];
        optionOrder[id] = order;
      } else {
        // Choice order is intentionally randomized on every run. This is not optional:
        // correct answer positions must never become learnable from the source data.
        optionOrder[id] = shuffle(q.options.map(o => o.id));
      }
    });
    const mode = document.querySelector('input[name="mode"]:checked').value;
    return {
      examId: exam.id, version: exam.version, mode, ids, optionOrder,
      position: 0, answers: {}, submitted: {}, touched: {}, flags: [],
      elapsed: 0, remaining: mode === "exam" ? exam.durationMinutes * 60 : null,
      startedAt: Date.now(), complete: false, reviewMode: false
    };
  }

  function initHome() {
    document.title = `${exam.code} Mission Control`;
    $("examCode").textContent = `MICROSOFT CERTIFICATION // ${exam.code}`;
    $("heroTitle").innerHTML = exam.heroTitle;
    $("heroIntro").textContent = exam.description;
    $("brandMark").textContent = exam.code.split("-")[0];
    const types = new Set(exam.questions.map(q => q.type)).size;
    $("metrics").innerHTML = [
      [exam.questions.length, "Exam-style scenarios"],
      [Object.keys(exam.domains).length, "Skill domains"],
      [types, "Question formats"]
    ].map(([value, label]) => `<div class="metric"><b>${value}</b><small>${label}</small></div>`).join("");
    $("resume").hidden = !localStorage.getItem(storageKey);
  }

  function selectExam(examId) {
    const selected = catalog.exams[examId];
    if (!selected) throw new Error(`Unknown exam '${examId}'.`);
    exam = selected;
    storageKey = `cert-simulator:${exam.id}:${exam.version}`;
    questionById = Object.fromEntries(exam.questions.map(q => [q.id, q]));
    catalog.defaultExam = examId;
    initHome();
  }

  function launch(run) {
    state = run;
    $("home").hidden = true;
    $("results").hidden = true;
    $("session").hidden = false;
    buildNavigator();
    render();
    save();
    startClock();
    window.scrollTo(0, 0);
  }

  function startClock() {
    clearInterval(ticker);
    if (state.reviewMode) return;
    ticker = setInterval(() => {
      state.elapsed += 1;
      if (state.mode === "exam") {
        state.remaining -= 1;
        if (state.remaining <= 0) {
          state.remaining = 0;
          finish(true);
          return;
        }
      }
      renderClock();
      if (state.elapsed % 5 === 0) save();
    }, 1000);
  }

  function buildNavigator() {
    $("navigator").innerHTML = state.ids.map((id, index) =>
      `<button data-index="${index}" aria-label="Go to question ${index + 1}">${index + 1}</button>`
    ).join("");
    $("navigator").querySelectorAll("button").forEach(button => {
      button.addEventListener("click", () => goTo(Number(button.dataset.index)));
    });
  }

  function currentQuestion() { return questionById[state.ids[state.position]]; }

  function isAnswered(q) {
    const answer = state.answers[q.id];
    if (q.type === "single") return typeof answer === "string";
    if (q.type === "multi") return Array.isArray(answer) && answer.length === q.answer.length;
    return Boolean(state.touched[q.id]);
  }

  function isCorrect(q) {
    const answer = state.answers[q.id];
    if (q.type === "single") return answer === q.answer;
    if (q.type === "multi") return sameArray([...(answer || [])].sort(), [...q.answer].sort());
    return sameArray(answer || state.optionOrder[q.id], q.answer);
  }

  function isLocked(q) { return state.reviewMode || (state.mode === "practice" && state.submitted[q.id]); }

  function render() {
    const q = currentQuestion();
    $("domain").textContent = exam.domains[q.domain];
    $("questionNumber").textContent = `QUESTION ${String(state.position + 1).padStart(2, "0")} / ${String(state.ids.length).padStart(2, "0")}`;
    $("questionType").textContent = q.type === "single" ? "SELECT ONE" : q.type === "multi" ? `SELECT ${q.answer.length}` : "BUILD LIST";
    $("prompt").textContent = q.prompt;
    $("instruction").textContent = q.instruction || (q.type === "multi" ? `Select exactly ${q.answer.length} answers.` : q.type === "order" ? "Arrange the items in the correct order." : "Select the best answer.");
    renderCase(q);
    renderAnswers(q);
    renderRationale(q);
    $("flag").classList.toggle("on", state.flags.includes(q.id));
    $("flag").innerHTML = `${state.flags.includes(q.id) ? "⚑" : "⚐"} <span>${state.flags.includes(q.id) ? "Flagged" : "Flag"}</span>`;
    $("previous").disabled = state.position === 0;
    $("next").textContent = state.position === state.ids.length - 1 ? (state.reviewMode ? "Results →" : "Finish →") : "Next →";
    const needsCheck = state.mode === "practice" && ["multi", "order"].includes(q.type) && !state.submitted[q.id] && !state.reviewMode;
    $("check").hidden = !needsCheck;
    $("check").disabled = !isAnswered(q);
    updateProgress();
    renderClock();
  }

  function renderCase(q) {
    const panel = $("caseStudy");
    if (!q.caseStudy) { panel.hidden = true; return; }
    const c = exam.caseStudies[q.caseStudy];
    panel.hidden = false;
    $("caseTitle").textContent = c.title;
    $("caseBody").innerHTML = c.body;
  }

  function optionMap(q) { return Object.fromEntries(q.options.map(option => [option.id, option])); }

  function renderAnswers(q) {
    const locked = isLocked(q);
    const reveal = locked;
    const options = optionMap(q);
    if (q.type === "order") {
      const order = state.answers[q.id] || state.optionOrder[q.id];
      $("answers").innerHTML = `<div class="order-list">${order.map((id, index) => `
        <div class="order-item">
          <span class="order-number">${index + 1}</span><span>${options[id].text}</span>
          <span class="order-controls">
            <button data-move="up" data-index="${index}" ${locked || index === 0 ? "disabled" : ""} aria-label="Move up">↑</button>
            <button data-move="down" data-index="${index}" ${locked || index === order.length - 1 ? "disabled" : ""} aria-label="Move down">↓</button>
          </span>
        </div>`).join("")}</div>`;
      $("answers").querySelectorAll("[data-move]").forEach(button => button.onclick = () => moveOrder(q, Number(button.dataset.index), button.dataset.move));
      return;
    }

    const selected = q.type === "multi" ? (state.answers[q.id] || []) : [state.answers[q.id]];
    $("answers").innerHTML = state.optionOrder[q.id].map((id, index) => {
      const chosen = selected.includes(id);
      const correct = q.type === "multi" ? q.answer.includes(id) : q.answer === id;
      let classes = "answer" + (chosen ? " selected" : "");
      if (reveal && correct) classes += " correct";
      if (reveal && chosen && !correct) classes += " wrong";
      const mark = reveal && correct ? "✓" : reveal && chosen ? "×" : "";
      return `<button class="${classes}" data-option="${id}" ${locked ? "disabled" : ""}><span class="key">${letters[index]}</span><span>${options[id].text}</span><span class="mark">${mark}</span></button>`;
    }).join("");
    $("answers").querySelectorAll("[data-option]").forEach(button => button.onclick = () => selectOption(q, button.dataset.option));
  }

  function renderRationale(q) {
    const show = isLocked(q);
    $("rationale").hidden = !show;
    if (!show) return;
    const panel = $("rationale");
    panel.replaceChildren();
    const heading = document.createElement("b");
    heading.textContent = isCorrect(q) ? "WHY THIS WORKS" : "LEARN FROM THIS ONE";
    const answer = document.createElement("p");
    answer.className = "correct-answer";
    const optionText = optionMap(q);
    const correctIds = Array.isArray(q.answer) ? q.answer : [q.answer];
    answer.textContent = `Correct answer: ${correctIds.map(id => optionText[id].text).join(q.type === "order" ? " → " : "; ")}`;
    const explanation = document.createElement("p");
    explanation.textContent = q.rationale;
    panel.append(heading, answer, explanation);
    if (exam.source) {
      const link = document.createElement("a");
      link.href = exam.source;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = `Study ${exam.code} objectives on Microsoft Learn ↗`;
      panel.append(link);
    }
  }

  function selectOption(q, optionId) {
    if (isLocked(q)) return;
    if (q.type === "single") {
      state.answers[q.id] = optionId;
      state.touched[q.id] = true;
      if (state.mode === "practice") state.submitted[q.id] = true;
    } else {
      const selected = [...(state.answers[q.id] || [])];
      const index = selected.indexOf(optionId);
      if (index >= 0) selected.splice(index, 1);
      else if (selected.length < q.answer.length) selected.push(optionId);
      else toast(`Select exactly ${q.answer.length}; remove one first.`);
      state.answers[q.id] = selected;
      state.touched[q.id] = selected.length > 0;
    }
    render();
    save();
  }

  function moveOrder(q, index, direction) {
    const order = [...(state.answers[q.id] || state.optionOrder[q.id])];
    const target = direction === "up" ? index - 1 : index + 1;
    if (target < 0 || target >= order.length) return;
    [order[index], order[target]] = [order[target], order[index]];
    state.answers[q.id] = order;
    state.touched[q.id] = true;
    render();
    save();
  }

  function submitCurrent() {
    const q = currentQuestion();
    if (!isAnswered(q)) return toast("Complete the answer first.");
    state.submitted[q.id] = true;
    render();
    save();
  }

  function updateProgress() {
    const answered = state.ids.filter(id => isAnswered(questionById[id])).length;
    $("answeredCount").textContent = `${answered}/${state.ids.length}`;
    $("progressFill").style.width = `${answered / state.ids.length * 100}%`;
    $("navigator").querySelectorAll("button").forEach((button, index) => {
      const q = questionById[state.ids[index]];
      button.classList.toggle("active", index === state.position);
      button.classList.toggle("done", isAnswered(q));
      button.classList.toggle("flagged", state.flags.includes(q.id));
    });
  }

  function renderClock() {
    const seconds = state.mode === "exam" ? state.remaining : state.elapsed;
    const minutes = Math.floor(seconds / 60);
    $("clock").textContent = `${String(minutes).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
    $("clock").classList.toggle("urgent", state.mode === "exam" && seconds <= 300);
  }

  function goTo(position) {
    state.position = Math.max(0, Math.min(state.ids.length - 1, position));
    render();
    save();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleFlag() {
    const id = currentQuestion().id;
    const index = state.flags.indexOf(id);
    index < 0 ? state.flags.push(id) : state.flags.splice(index, 1);
    render(); save(); toast(index < 0 ? "Question flagged" : "Flag removed");
  }

  function finish(forced) {
    if (state.reviewMode) return showResults();
    const unanswered = state.ids.filter(id => !isAnswered(questionById[id])).length;
    if (!forced && unanswered && !confirm(`You have ${unanswered} unanswered question${unanswered === 1 ? "" : "s"}. Finish anyway?`)) return;
    clearInterval(ticker);
    state.complete = true;
    localStorage.removeItem(storageKey);
    showResults();
  }

  function showResults() {
    clearInterval(ticker);
    $("session").hidden = true;
    $("home").hidden = true;
    $("results").hidden = false;
    const correct = state.ids.filter(id => isCorrect(questionById[id])).length;
    const percent = Math.round(correct / state.ids.length * 100);
    $("scorePercent").textContent = `${percent}%`;
    $("scoreRing").style.setProperty("--score", percent);
    $("correctCount").textContent = correct;
    $("incorrectCount").textContent = state.ids.length - correct;
    $("timeUsed").textContent = formatTime(state.elapsed);
    const band = percent >= 90 ? ["Commanding performance.", "Your decisions are consistently strong. Review the few misses and validate your readiness with Microsoft's official assessment."] : percent >= 78 ? ["Strong trajectory.", "You have a solid foundation. Focus your next pass on the weakest domain and any flagged decisions."] : percent >= 63 ? ["Signal acquired.", "The core concepts are there, but the competing requirements still need work. Use the breakdown to target revision."] : ["Useful reconnaissance.", "Treat this attempt as a diagnostic. Review the rationales and revisit the official learning material before another run."];
    $("headline").textContent = band[0];
    $("summary").textContent = band[1];
    renderDomainResults();
    renderReview();
    const missed = state.ids.filter(id => !isCorrect(questionById[id]));
    $("retry").disabled = missed.length === 0;
    $("retry").textContent = missed.length ? `Retry ${missed.length} missed` : "Perfect run";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderDomainResults() {
    $("domainResults").innerHTML = Object.entries(exam.domains).map(([key, label]) => {
      const ids = state.ids.filter(id => questionById[id].domain === key);
      const right = ids.filter(id => isCorrect(questionById[id])).length;
      const percent = ids.length ? Math.round(right / ids.length * 100) : 0;
      return `<article class="domain-card"><small>${label}</small><div class="domain-line"><b>${percent}%</b><span>${right}/${ids.length}</span></div><div class="progress"><i style="width:${percent}%"></i></div></article>`;
    }).join("");
  }

  function renderReview() {
    $("review").innerHTML = state.ids.map((id, index) => {
      const q = questionById[id], ok = isCorrect(q);
      return `<div class="review-item" data-index="${index}"><span class="result-icon ${ok ? "ok" : ""}">${ok ? "✓" : "×"}</span><span class="review-text">${index + 1}. ${q.prompt}</span><span class="review-domain">${exam.domains[q.domain]}</span></div>`;
    }).join("");
    $("review").querySelectorAll(".review-item").forEach(item => item.onclick = () => {
      state.reviewMode = true;
      state.position = Number(item.dataset.index);
      $("results").hidden = true;
      $("session").hidden = false;
      buildNavigator();
      render();
      window.scrollTo(0, 0);
    });
  }

  function formatTime(seconds) { return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`; }
  function save() { if (state && !state.complete && !state.reviewMode) localStorage.setItem(storageKey, JSON.stringify(state)); }
  function toast(message) { clearTimeout(toastTimer); $("toast").textContent = message; $("toast").classList.add("show"); toastTimer = setTimeout(() => $("toast").classList.remove("show"), 1600); }

  $("start").onclick = () => launch(createRun());
  $("resume").onclick = () => {
    try { launch(JSON.parse(localStorage.getItem(storageKey))); }
    catch { localStorage.removeItem(storageKey); initHome(); }
  };
  $("flag").onclick = toggleFlag;
  $("finish").onclick = () => finish(false);
  $("check").onclick = submitCurrent;
  $("previous").onclick = () => goTo(state.position - 1);
  $("next").onclick = () => state.position === state.ids.length - 1 ? finish(false) : goTo(state.position + 1);
  $("caseToggle").onclick = () => $("caseStudy").classList.toggle("closed");
  $("newRun").onclick = () => { state = null; $("results").hidden = true; $("home").hidden = false; initHome(); window.scrollTo(0, 0); };
  $("retry").onclick = () => {
    const missed = state.ids.filter(id => !isCorrect(questionById[id]));
    if (!missed.length) return;
    document.querySelector('input[value="practice"]').checked = true;
    launch(createRun(missed));
  };

  document.addEventListener("keydown", event => {
    if (!state || $("session").hidden || event.target.matches("input, button")) return;
    const q = currentQuestion();
    if (["1", "2", "3", "4"].includes(event.key) && q.type !== "order") {
      const id = state.optionOrder[q.id][Number(event.key) - 1];
      if (id) selectOption(q, id);
    } else if (event.key === "ArrowRight") goTo(state.position + 1);
    else if (event.key === "ArrowLeft") goTo(state.position - 1);
    else if (event.key.toLowerCase() === "f") toggleFlag();
  });

  $("examSelect").innerHTML = Object.values(catalog.exams).map(item => `<option value="${item.id}">${item.code} — ${item.title}</option>`).join("");
  $("examSelect").value = exam.id;
  $("examSelect").onchange = event => selectExam(event.target.value);
  initHome();
})();
