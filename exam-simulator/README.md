# Certification Mission Control

A dependency-free, reusable certification-practice engine for AB-731, AB-900, SC-500, AI-103, and AI-901. Open `index.html` directly in a browser; no build step or web server is required. Choose an exam on the home screen before starting a practice or timed run. Each exam keeps its own saved session.

## Publish to GitHub Pages

This repository includes `.github/workflows/pages.yml`, which validates every question bank and publishes only the `exam-simulator` folder. Its `index.html` becomes the site home page, so visitors can choose any exam from one URL.

1. Put this whole repository on GitHub with the site files and workflow on the `main` branch. If using GitHub's **Add file > Upload files**, include the hidden `.github` folder; otherwise the workflow will not be uploaded.
2. In the GitHub repository, open **Settings > Pages** and set **Build and deployment > Source** to **GitHub Actions**.
3. Open the **Actions** tab and run **Publish exam simulator** using **Run workflow**. Later pushes to `main` that change the simulator or workflow will republish it automatically.
4. Find the live URL in **Settings > Pages** or the successful deployment run. For a project repository it is usually `https://<account>.github.io/<repository>/`.

No API keys or server are needed. Practice progress is stored in the visitor's browser and does not sync across devices. If the default branch is not `main`, change the workflow's `branches` entry to match it.

## What is separated

- `index.html` contains the generic interface.
- `styles.css` contains the visual system.
- `app.js` contains the exam engine, scoring, persistence, question formats, case-study grouping, and enforced choice randomization.
- `exams/*.js` contains exam-specific metadata and question content.
- `scripts/validate-exams.js` checks an exam definition before it is published.

The engine never displays choice answers in source order. It creates and saves a randomized option order for every run, so the position of a correct answer cannot become a learnable pattern. Case-study questions remain grouped when question order is shuffled.

The banks use original scenario questions, select-one and select-multiple choices, build lists, and shared case studies. They are practice material, not copies of Microsoft exam items or a guarantee of the exact format on test day. Microsoft says exams can include other interaction types and does not publish a fixed question-type mix; use the [official exam sandbox](https://learn.microsoft.com/en-us/credentials/certifications/prepare-exam) to experience those interactions.

## Supported question formats

- `single`: one correct option; feedback is immediate in Practice mode.
- `multi`: a fixed number of correct options; the learner selects that number and checks the answer.
- `order`: a build-list question; the learner arranges items and checks the answer.
- `yesno`: a Yes/No statement set (shown as **HOTSPOT**). `options` holds the statements; `answer` is an object such as `{ s1: "no", s2: "yes" }`.
- `match`: a drag-and-drop style matching question (shown as **DRAG DROP**, or set `label: "HOTSPOT"`). `options` holds the items, `choices` holds the targets, and `answer` maps each item ID to a choice ID.
- Any question can reference a shared `caseStudy` entry.

Yes/No and match questions are marked all-or-nothing in the score, like build lists.

## Question bank view

Pick **Question bank** on the home screen to browse every question as a numbered list (Question #1, #2, …) on a light page, ten per page. Each question shows its topic (skill domain), lettered choices, and a **Reveal Solution** button that shows the correct answer, explanation, and Microsoft Learn reference. You can filter by topic, select an answer before revealing to check yourself, or turn on **Show all solutions** for quick revision. Choice letters are shuffled each time the bank is opened.

## Add another exam

1. Copy `exams/EXAM_TEMPLATE.js.example` and rename it for the exam code.
2. Give the exam a unique `id` and increment `version` whenever its content or scoring meaningfully changes. The version keeps incompatible saved sessions separate.
3. Match the official skills-outline weighting when deciding how many questions to assign to each domain.
4. Use plausible distractors. Each incorrect option should be reasonable until a requirement or constraint rules it out.
5. Include trade-off language such as *minimize cost*, *least administrative effort*, *preserve permissions*, or *meet the requirement* only when it materially determines the answer.
6. Mix single-select, multi-select, build-list, and shared case-study items when appropriate to the certification.
7. Register the new definition in `EXAM_CATALOG.exams`. The home screen's selector lists registered exams.
8. Load the new exam script before `app.js` in `index.html`.
9. Run `node scripts/validate-exams.js exams/your-exam.js`.

## Question-writing quality bar

- Test one documented objective, but require application rather than pure recall where possible.
- Keep the stem self-contained and state the business need before asking for a recommendation.
- Prefer one clearly best answer after all requirements are considered.
- Avoid joke distractors, giveaway wording, overlapping choices, and absolutes unless the product behavior truly is absolute.
- Explain why the correct choice satisfies the requirement and, when useful, why the closest alternative does not.
- Do not reproduce live or third-party exam-bank questions.
- Validate product names, licensing, and capabilities against current first-party documentation before publishing.

## Included exams

### AB-731

The bank has 45 independently written items:

- 17 questions: business value of generative AI (37.8%)
- 17 questions: Microsoft AI apps and services (37.8%)
- 11 questions: implementation and adoption (24.4%)

This matches the official domain ranges of 35–40%, 35–40%, and 20–25%. The bank includes two shared case studies, multi-select questions, and build-list questions.

### AB-900

The bank has 80 independently written items, following the [Microsoft AB-900 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-900) (skills measured as of 14 October 2026):

- 26 questions: core Microsoft 365 services and security (32.5%)
- 30 questions: data protection and governance (37.5%)
- 24 questions: Copilot and agent administration (30.0%)

This matches the official domain ranges of 30–35%, 35–40%, and 25–30%. Version 3.0.0 added 35 questions for objectives that were thin or missing: authentication methods, Defender for Office 365 and threat analytics, Entra ID Protection and sign-in troubleshooting, Purview Audit, SharePoint sharing and storage objects, service plans, retention labels and precedence, records, trainable classifiers and exact data match, all six responsible AI principles, Defender for Cloud Apps, Restricted SharePoint Search, site access reviews, DSPM for AI, Copilot interaction retention, Copilot licence assignment, pay-as-you-go setup and metering, Copilot Studio Lite vs Copilot Studio vs SharePoint agents, Power Platform data policies and monitoring, agent sharing and access settings, saved and scheduled prompts, and where each Copilot control is configured.

The bank has 48 single-answer, 15 multi-select, 3 build-list, 9 Yes/No, and 5 matching questions, with 9 questions grouped into three case studies.

### SC-500

The bank has 45 independently written items, following the [Microsoft SC-500 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-500):

- 11 questions: identity, access, and governance (24.4%)
- 12 questions: storage, databases, and networking (26.7%)
- 11 questions: compute and AI workloads (24.4%)
- 11 questions: security posture and monitoring (24.4%)

The four domains fall within the guide's 20–25%, 25–30%, 20–25%, and 20–25% ranges. The bank has 32 single-answer, 10 multi-select, and 3 build-list questions; 9 questions share case studies.

### AI-103

The bank has 75 independently written items, following the [Microsoft AI-103 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103) (skills measured as of 16 April 2026):

- 20 questions: plan and manage Azure AI solutions (26.7%)
- 25 questions: generative AI and agentic solutions (33.3%)
- 10 questions: computer vision (13.3%)
- 10 questions: text and speech analysis (13.3%)
- 10 questions: information extraction and grounding (13.3%)

The five domains fall within the guide's 25–30%, 30–35%, 10–15%, 10–15%, and 10–15% ranges. Version 2.0.0 added 30 questions on deployment types (Global, Data Zone, Provisioned, Batch), Foundry RBAC roles, keyless authentication, Prompt Shields and other content safety features, version-upgrade policy and continuous evaluation, tracing and provenance, the Foundry SDK (AIProjectClient, agents, conversations), generation parameters, agent tools (Code Interpreter, Bing grounding, Azure AI Search, OpenAPI, MCP), reflection loops, multi-agent orchestration, agent evaluators, hybrid LLM and rules engines, video generation, Content Understanding pro mode, custom speech, speech translation, real-time audio, semantic ranker, skillsets and custom skills, integrated vectorization, and connecting agents to an index. The bank has 48 single-answer, 13 multi-select, 5 build-list, 4 Yes/No, and 5 matching questions; 11 questions share case studies. The timed run is 100 minutes.

### AI-901

The bank has 60 independently written items, following the [Microsoft AI-901 study guide](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901) (skills measured as of 15 April 2026):

- 26 questions: identify AI concepts and capabilities (43.3%)
- 34 questions: implement AI solutions by using Microsoft Foundry (56.7%)

This matches the official ranges of 40–45% and 55–60%. Coverage includes all six responsible AI principles, how generative models work, model selection and deployment parameters, AI workload identification, text analysis, speech, computer vision and image generation, prompts, deploying and testing models in the Foundry portal, Foundry SDK chat and agent clients, single-agent tools, Azure Speech, multimodal image and audio input, and Content Understanding for documents, images, audio, and video. The bank has 38 single-answer, 5 multi-select, 4 build-list, 8 Yes/No, and 5 matching questions, with 9 questions in two case studies.

For every exam, Practice mode reveals the correct answer and explanation after a single-choice answer or after **Check answer** for multi-select and build-list questions. Exam simulation reveals them during results review. The explanation panel links to that exam's Microsoft Learn outline for further study. The new SC-500 and AI-103 rationales also explain why a tempting alternative does not meet the requirement.

Scores in this simulator are diagnostic percentages, not predictions of Microsoft's scaled exam score.
