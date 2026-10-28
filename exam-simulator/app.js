(function () {
  "use strict";

  const catalog = window.EXAM_CATALOG || {};
  let exam = catalog.exams && catalog.exams[catalog.defaultExam];
  if (!exam) throw new Error("No default exam is registered in EXAM_CATALOG.");

  const $ = id => document.getElementById(id);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const GRID_TYPES = ["yesno", "match"];
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

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  }

  function storageGet(key) { try { return localStorage.getItem(key); } catch { return null; } }
  function storageSet(key, value) { try { localStorage.setItem(key, value); } catch { /* storage unavailable */ } }
  function storageRemove(key) { try { localStorage.removeItem(key); } catch { /* storage unavailable */ } }

  /* ---------- Shared question logic (session and bank) ---------- */

  function initialOrder(q) {
    if (q.type === "order") {
      let order = shuffle(q.options.map(o => o.id));
      if (sameArray(order, q.answer)) order = [...order.slice(1), order[0]];
      return order;
    }
    if (q.type === "yesno") return q.options.map(o => o.id);
    // For match questions the shuffled list is the dropdown choice order.
    if (q.type === "match") return shuffle(q.choices.map(c => c.id));
    // Choice order is intentionally randomized on every run. This is not optional:
    // correct answer positions must never become learnable from the source data.
    return shuffle(q.options.map(o => o.id));
  }

  function answeredWith(q, answer, touched) {
    if (q.type === "single") return typeof answer === "string";
    if (q.type === "multi") return Array.isArray(answer) && answer.length === q.answer.length;
    if (GRID_TYPES.includes(q.type)) return Boolean(answer) && q.options.every(o => Boolean(answer[o.id]));
    return Boolean(touched);
  }

  function correctWith(q, answer, order) {
    if (q.type === "single") return answer === q.answer;
    if (q.type === "multi") return sameArray([...(answer || [])].sort(), [...q.answer].sort());
    if (GRID_TYPES.includes(q.type)) return Boolean(answer) && q.options.every(o => answer[o.id] === q.answer[o.id]);
    return sameArray(answer || order, q.answer);
  }

  function optionMap(q) { return Object.fromEntries(q.options.map(option => [option.id, option])); }
  function choiceMap(q) { return Object.fromEntries((q.choices || []).map(choice => [choice.id, choice])); }

  function correctAnswerText(q) {
    const options = optionMap(q);
    if (q.type === "yesno") return q.options.map((o, i) => `Box ${i + 1}: ${q.answer[o.id] === "yes" ? "Yes" : "No"}`).join("; ");
    if (q.type === "match") { const choices = choiceMap(q); return q.options.map(o => `${o.text} → ${choices[q.answer[o.id]].text}`).join("; "); }
    const ids = Array.isArray(q.answer) ? q.answer : [q.answer];
    return ids.map(id => options[id].text).join(q.type === "order" ? " → " : "; ");
  }

  function typeLabel(q) {
    if (q.label) return q.label;
    if (q.type === "yesno") return "HOTSPOT";
    if (q.type === "match" || q.type === "order") return "DRAG DROP";
    return "";
  }

  function defaultInstruction(q) {
    if (q.instruction) return q.instruction;
    if (q.type === "multi") return `Select exactly ${q.answer.length} answers. Each correct answer presents part of the solution.`;
    if (q.type === "order") return "Arrange the items in the correct order.";
    if (q.type === "yesno") return "For each of the following statements, select Yes if the statement is true. Otherwise, select No.";
    if (q.type === "match") return "Select the appropriate option for each item. Each option may be used once, more than once, or not at all.";
    return "Select the best answer.";
  }

  /* ---------- Session (practice / timed) ---------- */

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

  function selectedMode() { return document.querySelector('input[name="mode"]:checked').value; }

  function createRun(subset) {
    const allIds = subset || exam.questions.map(q => q.id);
    const ids = buildSequence(allIds, $("shuffleQuestions").checked);
    const optionOrder = {};
    ids.forEach(id => { optionOrder[id] = initialOrder(questionById[id]); });
    const mode = selectedMode() === "exam" ? "exam" : "practice";
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
    $("resume").hidden = !storageGet(storageKey);
    updateStartLabel();
  }

  function updateStartLabel() {
    $("start").innerHTML = selectedMode() === "bank" ? "Open question bank <span>→</span>" : "Launch simulation <span>→</span>";
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
    $("bank").hidden = true;
    document.body.classList.remove("bank-open");
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
  function isAnswered(q) { return answeredWith(q, state.answers[q.id], state.touched[q.id]); }
  function isCorrect(q) { return correctWith(q, state.answers[q.id], state.optionOrder[q.id]); }
  function isLocked(q) { return state.reviewMode || (state.mode === "practice" && state.submitted[q.id]); }

  function render() {
    const q = currentQuestion();
    $("domain").textContent = exam.domains[q.domain];
    $("questionNumber").textContent = `QUESTION ${String(state.position + 1).padStart(2, "0")} / ${String(state.ids.length).padStart(2, "0")}`;
    $("questionType").textContent = q.type === "single" ? "SELECT ONE" : q.type === "multi" ? `SELECT ${q.answer.length}` : q.type === "yesno" ? "YES / NO" : q.type === "match" ? "MATCH" : "BUILD LIST";
    $("prompt").textContent = q.prompt;
    $("instruction").textContent = defaultInstruction(q);
    renderCase(q);
    renderAnswers(q);
    renderRationale(q);
    $("flag").classList.toggle("on", state.flags.includes(q.id));
    $("flag").innerHTML = `${state.flags.includes(q.id) ? "⚑" : "⚐"} <span>${state.flags.includes(q.id) ? "Flagged" : "Flag"}</span>`;
    $("previous").disabled = state.position === 0;
    $("next").textContent = state.position === state.ids.length - 1 ? (state.reviewMode ? "Results →" : "Finish →") : "Next →";
    const needsCheck = state.mode === "practice" && q.type !== "single" && !state.submitted[q.id] && !state.reviewMode;
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

  function renderAnswers(q) {
    const locked = isLocked(q);
    const reveal = locked;
    const options = optionMap(q);
    const answer = state.answers[q.id];

    if (q.type === "order") {
      const order = answer || state.optionOrder[q.id];
      $("answers").innerHTML = `<div class="order-list">${order.map((id, index) => `
        <div class="order-item">
          <span class="order-number">${index + 1}</span><span>${escapeHtml(options[id].text)}</span>
          <span class="order-controls">
            <button data-move="up" data-index="${index}" ${locked || index === 0 ? "disabled" : ""} aria-label="Move up">↑</button>
            <button data-move="down" data-index="${index}" ${locked || index === order.length - 1 ? "disabled" : ""} aria-label="Move down">↓</button>
          </span>
        </div>`).join("")}</div>`;
      $("answers").querySelectorAll("[data-move]").forEach(button => button.onclick = () => moveOrder(q, Number(button.dataset.index), button.dataset.move));
      return;
    }

    if (q.type === "yesno") {
      const current = answer || {};
      $("answers").innerHTML = `<div class="yn-table" role="table">
        <div class="yn-row yn-head" role="row"><span>Statement</span><span>Yes</span><span>No</span></div>
        ${q.options.map(o => {
          const chosen = current[o.id];
          const state = reveal ? (chosen === q.answer[o.id] ? " correct" : " wrong") : "";
          return `<div class="yn-row${state}" role="row"><span class="yn-text">${escapeHtml(o.text)}</span>
            ${["yes", "no"].map(value => {
              const isRight = reveal && q.answer[o.id] === value;
              return `<button class="yn-btn${chosen === value ? " selected" : ""}${isRight ? " right" : ""}" data-yn="${o.id}" data-value="${value}" ${locked ? "disabled" : ""} aria-label="${value === "yes" ? "Yes" : "No"}"><i></i></button>`;
            }).join("")}</div>`;
        }).join("")}</div>`;
      $("answers").querySelectorAll("[data-yn]").forEach(button => button.onclick = () => setGrid(q, button.dataset.yn, button.dataset.value));
      return;
    }

    if (q.type === "match") {
      const current = answer || {};
      const choices = choiceMap(q);
      $("answers").innerHTML = `<div class="match-list">${q.options.map(o => {
        const chosen = current[o.id] || "";
        const result = reveal ? (chosen === q.answer[o.id] ? " correct" : " wrong") : "";
        return `<label class="match-row${result}"><span class="match-text">${escapeHtml(o.text)}</span>
          <select data-match="${o.id}" ${locked ? "disabled" : ""}><option value="">Select…</option>${state.optionOrder[q.id].map(id => `<option value="${id}" ${chosen === id ? "selected" : ""}>${escapeHtml(choices[id].text)}</option>`).join("")}</select>
          ${reveal && chosen !== q.answer[o.id] ? `<small class="match-fix">Correct: ${escapeHtml(choices[q.answer[o.id]].text)}</small>` : ""}
        </label>`;
      }).join("")}</div>`;
      $("answers").querySelectorAll("[data-match]").forEach(select => select.onchange = () => setGrid(q, select.dataset.match, select.value));
      return;
    }

    const selected = q.type === "multi" ? (answer || []) : [answer];
    $("answers").innerHTML = state.optionOrder[q.id].map((id, index) => {
      const chosen = selected.includes(id);
      const correct = q.type === "multi" ? q.answer.includes(id) : q.answer === id;
      let classes = "answer" + (chosen ? " selected" : "");
      if (reveal && correct) classes += " correct";
      if (reveal && chosen && !correct) classes += " wrong";
      const mark = reveal && correct ? "✓" : reveal && chosen ? "×" : "";
      return `<button class="${classes}" data-option="${id}" ${locked ? "disabled" : ""}><span class="key">${letters[index]}</span><span>${escapeHtml(options[id].text)}</span><span class="mark">${mark}</span></button>`;
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
    answer.textContent = `Correct answer: ${correctAnswerText(q)}`;
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

  function setGrid(q, itemId, value) {
    if (isLocked(q)) return;
    const current = { ...(state.answers[q.id] || {}) };
    if (value) current[itemId] = value; else delete current[itemId];
    state.answers[q.id] = current;
    state.touched[q.id] = Object.keys(current).length > 0;
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
    storageRemove(storageKey);
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
      return `<div class="review-item" data-index="${index}"><span class="result-icon ${ok ? "ok" : ""}">${ok ? "✓" : "×"}</span><span class="review-text">${index + 1}. ${escapeHtml(q.prompt)}</span><span class="review-domain">${exam.domains[q.domain]}</span></div>`;
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
  function save() { if (state && !state.complete && !state.reviewMode) storageSet(storageKey, JSON.stringify(state)); }
  function toast(message) { clearTimeout(toastTimer); $("toast").textContent = message; $("toast").classList.add("show"); toastTimer = setTimeout(() => $("toast").classList.remove("show"), 1600); }

  /* ---------- Question bank (numbered list with Reveal Solution) ---------- */

  const bank = { order: {}, answers: {}, revealed: {}, page: 0, topic: "all", perPage: 10, number: {} };

  function bankKey() { return `cert-simulator:bank:${exam.id}:${exam.version}`; }

  function openBank() {
    bank.order = {}; bank.answers = {}; bank.revealed = {}; bank.number = {};
    exam.questions.forEach((q, index) => { bank.order[q.id] = initialOrder(q); bank.number[q.id] = index + 1; });
    let saved = {};
    try { saved = JSON.parse(storageGet(bankKey()) || "{}"); } catch { saved = {}; }
    bank.page = Number(saved.page) || 0;
    bank.topic = saved.topic && (saved.topic === "all" || exam.domains[saved.topic]) ? saved.topic : "all";
    $("bankShowAll").checked = false;

    document.title = `${exam.code} Question Bank`;
    $("bankTitle").textContent = `${exam.code}: ${exam.title}`;
    $("bankSubtitle").textContent = `${exam.questions.length} practice questions · Answers are hidden until you select Reveal Solution`;
    const domainKeys = Object.keys(exam.domains);
    $("bankTopic").innerHTML = `<option value="all">All topics</option>` + domainKeys.map((key, i) => `<option value="${key}">Topic ${i + 1}: ${escapeHtml(exam.domains[key])}</option>`).join("");
    $("bankTopic").value = bank.topic;
    $("bankLegend").innerHTML = domainKeys.map((key, i) => `<span><b>Topic ${i + 1}</b> ${escapeHtml(exam.domains[key])}</span>`).join("");

    state = null;
    clearInterval(ticker);
    $("home").hidden = true; $("session").hidden = true; $("results").hidden = true;
    $("bank").hidden = false;
    document.body.classList.add("bank-open");
    renderBank();
    window.scrollTo(0, 0);
  }

  function closeBank() {
    $("bank").hidden = true;
    document.body.classList.remove("bank-open");
    $("home").hidden = false;
    initHome();
    window.scrollTo(0, 0);
  }

  function bankQuestions() {
    return bank.topic === "all" ? exam.questions : exam.questions.filter(q => q.domain === bank.topic);
  }

  function renderBank() {
    const list = bankQuestions();
    const pages = Math.max(1, Math.ceil(list.length / bank.perPage));
    bank.page = Math.max(0, Math.min(pages - 1, bank.page));
    const slice = list.slice(bank.page * bank.perPage, (bank.page + 1) * bank.perPage);
    const first = list.length ? bank.page * bank.perPage + 1 : 0;
    $("bankCount").textContent = `Viewing questions ${first}–${bank.page * bank.perPage + slice.length} of ${list.length}`;
    let lastCase = null;
    $("bankList").innerHTML = slice.map(q => {
      const html = bankCard(q, q.caseStudy && q.caseStudy !== lastCase);
      lastCase = q.caseStudy || null;
      return html;
    }).join("") || `<p class="bq-empty">No questions in this topic.</p>`;
    renderPager(pages);
    storageSet(bankKey(), JSON.stringify({ page: bank.page, topic: bank.topic }));
  }

  function renderPager(pages) {
    const buttons = [];
    buttons.push(`<button data-page="${bank.page - 1}" ${bank.page === 0 ? "disabled" : ""}>« Previous</button>`);
    for (let i = 0; i < pages; i++) buttons.push(`<button data-page="${i}" class="${i === bank.page ? "current" : ""}" aria-label="Page ${i + 1}">${i + 1}</button>`);
    buttons.push(`<button data-page="${bank.page + 1}" ${bank.page >= pages - 1 ? "disabled" : ""}>Next »</button>`);
    $("bankPager").innerHTML = buttons.join("");
  }

  function topicNumber(q) { return Object.keys(exam.domains).indexOf(q.domain) + 1; }

  function bankCard(q, showCaseHeader) {
    const n = bank.number[q.id];
    const revealed = bank.revealed[q.id] || $("bankShowAll").checked;
    const label = typeLabel(q);
    const caseBox = q.caseStudy ? `<details class="bq-case" ${showCaseHeader ? "open" : ""}><summary>Case study: ${escapeHtml(exam.caseStudies[q.caseStudy].title)}</summary><div class="bq-case-body">${exam.caseStudies[q.caseStudy].body}</div></details>` : "";
    return `<article class="bq" id="bq-${q.id}" data-q="${q.id}">
      <header class="bq-head"><span class="bq-num">Question #${n}</span><span class="bq-topic" title="${escapeHtml(exam.domains[q.domain])}">Topic ${topicNumber(q)}</span></header>
      <div class="bq-body">
        ${caseBox}
        <p class="bq-prompt">${label ? `<b class="bq-label">${label} -</b><br>` : ""}${escapeHtml(q.prompt)}</p>
        ${bankNote(q)}
        ${bankAnswers(q, revealed)}
        <div class="bq-actions">
          <button class="bq-reveal" data-action="reveal">${revealed ? "Hide Solution" : "Reveal Solution"}</button>
          <button class="bq-reset" data-action="reset">Reset</button>
          ${bankResult(q)}
        </div>
        ${revealed ? bankSolution(q) : ""}
      </div>
    </article>`;
  }

  function bankNote(q) {
    if (q.type === "multi") return `<p class="bq-note">${q.instruction ? escapeHtml(q.instruction) + "<br>" : ""}Each correct answer presents part of the solution. Select ${q.answer.length}.<br><b>NOTE:</b> Each correct selection is worth one point.</p>`;
    if (q.type === "yesno") return `<p class="bq-note">For each of the following statements, select Yes if the statement is true. Otherwise, select No.<br><b>NOTE:</b> Each correct selection is worth one point.</p><p class="bq-hot">Hot Area:</p>`;
    if (q.type === "match") return `<p class="bq-note">${escapeHtml(defaultInstruction(q))}<br><b>NOTE:</b> Each correct selection is worth one point.</p><p class="bq-hot">Select and Place:</p>`;
    if (q.type === "order") return `<p class="bq-note">Move the actions into the answer area and arrange them in the correct order.</p><p class="bq-hot">Select and Place:</p>`;
    return "";
  }

  function bankAnswers(q, revealed) {
    const options = optionMap(q);
    const answer = bank.answers[q.id];
    if (q.type === "yesno") {
      const current = answer || {};
      return `<table class="bq-yn"><thead><tr><th>Statements</th><th>Yes</th><th>No</th></tr></thead><tbody>${q.options.map(o => `<tr><td>${escapeHtml(o.text)}</td>${["yes", "no"].map(value => {
        const right = revealed && q.answer[o.id] === value;
        return `<td class="${right ? "right" : ""}"><button class="bq-radio${current[o.id] === value ? " on" : ""}" data-yn="${o.id}" data-value="${value}" aria-label="${value}"></button></td>`;
      }).join("")}</tr>`).join("")}</tbody></table>`;
    }
    if (q.type === "match") {
      const current = answer || {};
      const choices = choiceMap(q);
      return `<div class="bq-match"><div class="bq-match-col"><h4>Options</h4>${bank.order[q.id].map(id => `<div class="bq-chip">${escapeHtml(choices[id].text)}</div>`).join("")}</div>
        <div class="bq-match-col"><h4>Answer Area</h4>${q.options.map(o => `<label class="bq-match-row"><span>${escapeHtml(o.text)}</span><select data-match="${o.id}"><option value="">Select…</option>${bank.order[q.id].map(id => `<option value="${id}" ${current[o.id] === id ? "selected" : ""}>${escapeHtml(choices[id].text)}</option>`).join("")}</select></label>`).join("")}</div></div>`;
    }
    if (q.type === "order") {
      const order = answer || bank.order[q.id];
      return `<ol class="bq-order">${order.map((id, i) => `<li><span>${escapeHtml(options[id].text)}</span><span class="bq-move"><button data-move="up" data-index="${i}" ${i === 0 ? "disabled" : ""} aria-label="Move up">▲</button><button data-move="down" data-index="${i}" ${i === order.length - 1 ? "disabled" : ""} aria-label="Move down">▼</button></span></li>`).join("")}</ol>`;
    }
    const selected = q.type === "multi" ? (answer || []) : [answer];
    return `<ul class="bq-choices">${bank.order[q.id].map((id, i) => {
      const correct = q.type === "multi" ? q.answer.includes(id) : q.answer === id;
      const chosen = selected.includes(id);
      let cls = "bq-choice";
      if (chosen) cls += " selected";
      if (revealed && correct) cls += " correct";
      if (revealed && chosen && !correct) cls += " wrong";
      return `<li class="${cls}" data-option="${id}" tabindex="0" role="button"><span class="bq-letter">${letters[i]}.</span> ${escapeHtml(options[id].text)}${revealed && correct ? ` <span class="bq-most">Correct</span>` : ""}</li>`;
    }).join("")}</ul>`;
  }

  function bankResult(q) {
    const answer = bank.answers[q.id];
    if (!answeredWith(q, answer, Boolean(answer))) return "";
    if (!(bank.revealed[q.id] || $("bankShowAll").checked)) return `<span class="bq-status">Answer selected</span>`;
    return correctWith(q, answer, bank.order[q.id]) ? `<span class="bq-status ok">✓ You answered correctly</span>` : `<span class="bq-status bad">✗ Your answer is incorrect</span>`;
  }

  function bankSolution(q) {
    let key;
    if (q.type === "single" || q.type === "multi") {
      const ids = Array.isArray(q.answer) ? q.answer : [q.answer];
      key = `<p class="bq-key"><b>Correct Answer:</b> <span>${ids.map(id => letters[bank.order[q.id].indexOf(id)]).sort().join("")}</span></p>`;
    } else if (q.type === "yesno") {
      key = `<p class="bq-key"><b>Correct Answer:</b></p><table class="bq-yn solved"><thead><tr><th>Statements</th><th>Yes</th><th>No</th></tr></thead><tbody>${q.options.map(o => `<tr><td>${escapeHtml(o.text)}</td><td>${q.answer[o.id] === "yes" ? '<span class="dot"></span>' : '<span class="ring"></span>'}</td><td>${q.answer[o.id] === "no" ? '<span class="dot"></span>' : '<span class="ring"></span>'}</td></tr>`).join("")}</tbody></table>`;
    } else if (q.type === "match") {
      const choices = choiceMap(q);
      key = `<p class="bq-key"><b>Correct Answer:</b></p><ul class="bq-boxes">${q.options.map((o, i) => `<li><b>Box ${i + 1}:</b> ${escapeHtml(o.text)} → <span>${escapeHtml(choices[q.answer[o.id]].text)}</span></li>`).join("")}</ul>`;
    } else {
      const options = optionMap(q);
      key = `<p class="bq-key"><b>Correct Answer:</b></p><ol class="bq-boxes">${q.answer.map(id => `<li>${escapeHtml(options[id].text)}</li>`).join("")}</ol>`;
    }
    const ref = exam.source ? `<p class="bq-ref">Reference:<br><a href="${exam.source}" target="_blank" rel="noopener noreferrer">${exam.source}</a></p>` : "";
    return `<div class="bq-solution">${key}<div class="bq-expl"><b>Explanation:</b><p>${escapeHtml(q.rationale)}</p>${ref}</div></div>`;
  }

  function rerenderCard(id) {
    const card = document.getElementById(`bq-${id}`);
    if (!card) return;
    const caseOpen = card.querySelector(".bq-case") ? card.querySelector(".bq-case").open : false;
    card.outerHTML = bankCard(questionById[id], caseOpen);
  }

  function bankChoose(q, optionId) {
    if (q.type === "single") bank.answers[q.id] = optionId;
    else {
      const selected = [...(bank.answers[q.id] || [])];
      const index = selected.indexOf(optionId);
      if (index >= 0) selected.splice(index, 1);
      else if (selected.length < q.answer.length) selected.push(optionId);
      else toast(`Select exactly ${q.answer.length}; remove one first.`);
      bank.answers[q.id] = selected;
    }
    rerenderCard(q.id);
  }

  $("bankList").addEventListener("click", event => {
    const card = event.target.closest(".bq");
    if (!card) return;
    const q = questionById[card.dataset.q];
    const option = event.target.closest("[data-option]");
    const yn = event.target.closest("[data-yn]");
    const move = event.target.closest("[data-move]");
    const action = event.target.closest("[data-action]");
    if (option) return bankChoose(q, option.dataset.option);
    if (yn) { bank.answers[q.id] = { ...(bank.answers[q.id] || {}), [yn.dataset.yn]: yn.dataset.value }; return rerenderCard(q.id); }
    if (move) {
      const order = [...(bank.answers[q.id] || bank.order[q.id])];
      const i = Number(move.dataset.index), t = move.dataset.move === "up" ? i - 1 : i + 1;
      if (t < 0 || t >= order.length) return;
      [order[i], order[t]] = [order[t], order[i]];
      bank.answers[q.id] = order;
      return rerenderCard(q.id);
    }
    if (action && action.dataset.action === "reveal") {
      const showing = bank.revealed[q.id] || $("bankShowAll").checked;
      if (showing && $("bankShowAll").checked) {
        // Hiding one card while "Show all" is on: switch to per-card reveals for everything else.
        $("bankShowAll").checked = false;
        exam.questions.forEach(item => { bank.revealed[item.id] = true; });
        bank.revealed[q.id] = false;
        return renderBank();
      }
      bank.revealed[q.id] = !showing;
      return rerenderCard(q.id);
    }
    if (action && action.dataset.action === "reset") { delete bank.answers[q.id]; bank.revealed[q.id] = false; bank.order[q.id] = initialOrder(q); return rerenderCard(q.id); }
  });
  $("bankList").addEventListener("keydown", event => {
    const option = event.target.closest("[data-option]");
    if (option && (event.key === "Enter" || event.key === " ")) { event.preventDefault(); option.click(); }
  });
  $("bankList").addEventListener("change", event => {
    const select = event.target.closest("[data-match]");
    if (!select) return;
    const q = questionById[select.closest(".bq").dataset.q];
    const current = { ...(bank.answers[q.id] || {}) };
    if (select.value) current[select.dataset.match] = select.value; else delete current[select.dataset.match];
    bank.answers[q.id] = current;
    rerenderCard(q.id);
  });
  $("bankPager").addEventListener("click", event => {
    const button = event.target.closest("[data-page]");
    if (!button || button.disabled) return;
    bank.page = Number(button.dataset.page);
    renderBank();
    $("bank").scrollIntoView({ behavior: "smooth" });
  });
  $("bankTopic").onchange = event => { bank.topic = event.target.value; bank.page = 0; renderBank(); };
  $("bankShowAll").onchange = () => { if (!$("bankShowAll").checked) bank.revealed = {}; renderBank(); };
  $("bankHome").onclick = closeBank;

  /* ---------- Wiring ---------- */

  $("start").onclick = () => selectedMode() === "bank" ? openBank() : launch(createRun());
  document.querySelectorAll('input[name="mode"]').forEach(input => input.addEventListener("change", updateStartLabel));
  $("resume").onclick = () => {
    try { launch(JSON.parse(storageGet(storageKey))); }
    catch { storageRemove(storageKey); initHome(); }
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
    if (!state || $("session").hidden || event.target.matches("input, button, select")) return;
    const q = currentQuestion();
    if (["1", "2", "3", "4"].includes(event.key) && ["single", "multi"].includes(q.type)) {
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
