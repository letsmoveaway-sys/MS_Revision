/* Run: node scripts/validate-exams.js exams/ab-731.js */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const target = process.argv[2] || "exams/ab-731.js";
const absolute = path.resolve(process.cwd(), target);
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(absolute, "utf8"), sandbox, { filename: absolute });

const catalog = sandbox.window.EXAM_CATALOG;
if (!catalog || !catalog.exams) throw new Error("EXAM_CATALOG.exams was not found.");
const errors = [];

for (const [key, exam] of Object.entries(catalog.exams)) {
  const seen = new Set();
  const singlePositions = [];
  if (exam.id !== key) errors.push(`${key}: exam.id must match its catalog key.`);
  if (!exam.version) errors.push(`${key}: version is required.`);
  if (!exam.questions || !exam.questions.length) errors.push(`${key}: at least one question is required.`);

  for (const q of exam.questions || []) {
    const prefix = `${key}/${q.id || "missing-id"}`;
    if (!q.id || seen.has(q.id)) errors.push(`${prefix}: question IDs must be present and unique.`);
    seen.add(q.id);
    if (!exam.domains[q.domain]) errors.push(`${prefix}: unknown domain '${q.domain}'.`);
    if (!["single", "multi", "order"].includes(q.type)) errors.push(`${prefix}: unsupported type '${q.type}'.`);
    if (!q.prompt || !q.rationale) errors.push(`${prefix}: prompt and rationale are required.`);
    if (!Array.isArray(q.options) || q.options.length < 2) errors.push(`${prefix}: at least two options are required.`);
    const optionIds = (q.options || []).map(o => o.id);
    if (new Set(optionIds).size !== optionIds.length) errors.push(`${prefix}: option IDs must be unique.`);
    const answers = Array.isArray(q.answer) ? q.answer : [q.answer];
    answers.forEach(answer => { if (!optionIds.includes(answer)) errors.push(`${prefix}: answer '${answer}' is not an option.`); });
    if (q.type === "single" && Array.isArray(q.answer)) errors.push(`${prefix}: single questions require one answer ID.`);
    if (["multi", "order"].includes(q.type) && !Array.isArray(q.answer)) errors.push(`${prefix}: ${q.type} questions require an answer array.`);
    if (q.type === "order" && answers.length !== optionIds.length) errors.push(`${prefix}: an order answer must include every option.`);
    if (q.caseStudy && !exam.caseStudies[q.caseStudy]) errors.push(`${prefix}: unknown case study '${q.caseStudy}'.`);
    if (q.type === "single") singlePositions.push(optionIds.indexOf(q.answer));
  }

  const counts = Object.keys(exam.domains).map(domain => ({ domain, count: exam.questions.filter(q => q.domain === domain).length }));
  const positions = [0, 1, 2, 3].map(position => singlePositions.filter(p => p === position).length);
  console.log(`\n${exam.code} ${exam.title} — ${exam.questions.length} questions`);
  console.log("Domains:", counts.map(x => `${x.domain}=${x.count}`).join(", "));
  console.log("Single-answer source positions A-D:", positions.join(", "));
  console.log("Display choice order: randomized by app.js for every run");
}

if (errors.length) {
  console.error("\nValidation failed:");
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}
console.log("\nValidation passed.");
