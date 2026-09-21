window.EXAM_CATALOG = window.EXAM_CATALOG || { defaultExam: "ab-731", exams: {} };
window.EXAM_CATALOG.exams["ab-731"] = {
      id: "ab-731",
      version: "2.0.0",
      code: "AB-731",
      title: "AI Transformation Leader",
      heroTitle: "Lead the<br><em>AI shift.</em>",
      description: "A scenario-led simulator for leaders who must connect AI capabilities to business value, choose Microsoft services, and govern adoption responsibly.",
      durationMinutes: 45,
      source: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-731",
      domains: {
        value: "Business value of generative AI",
        apps: "Microsoft AI apps and services",
        adoption: "Implementation, responsible AI, and adoption"
      },
      caseStudies: {
        contoso: {
          title: "Contoso Insurance policy assistant",
          body: `<p>Contoso Insurance plans an employee assistant that answers questions about underwriting policies. Policies are stored in SharePoint, change weekly, and have access restrictions by region. Answers must cite the policy used. The company wants to minimize ongoing model maintenance.</p><p>A pilot will begin with 300 underwriters. The risk team requires evidence that responses are grounded, permissions are preserved, and unsupported claims are detected before expansion.</p>`
        },
        fabrikam: {
          title: "Fabrikam global expansion program",
          body: `<p>Fabrikam is preparing to enter three new markets. Strategy teams must research regulation and competitors, finance must analyze several large workbooks, and employees need an agent that can answer launch questions and initiate approved onboarding workflows.</p><p>Fabrikam already uses Microsoft 365. Leaders prefer supported Microsoft capabilities and configuration over custom development when requirements can be met.</p>`
        }
      },
      questions: [
        {
          id:"v01",domain:"value",type:"single",
          prompt:"A marketing team needs to produce several on-brand campaign drafts from a product brief. Which capability best fits the requirement?",
          options:[{id:"a",text:"Anomaly detection"},{id:"b",text:"Forecasting"},{id:"c",text:"Generative AI"},{id:"d",text:"Clustering"}],answer:"c",
          rationale:"Generative AI is designed to create new content from instructions and supplied context. The other options identify patterns or predict values rather than draft text."
        },
        {
          id:"v02",domain:"value",type:"single",
          prompt:"An internal assistant must answer from policies that change every week. Retraining after each change is not acceptable. What should you recommend?",
          options:[{id:"a",text:"Fine-tune a model whenever a policy changes"},{id:"b",text:"Ground a pretrained model by using retrieval-augmented generation"},{id:"c",text:"Increase the model temperature"},{id:"d",text:"Train a foundation model from scratch"}],answer:"b",
          rationale:"RAG retrieves current policy content at response time. It separates frequently changing knowledge from model training and can provide citations."
        },
        {
          id:"v03",domain:"value",type:"single",
          prompt:"A summarization workload exceeds its monthly budget. Most requests include entire 200-page manuals even when only one section is relevant. Which action is most likely to reduce inference cost without changing the business outcome?",
          options:[{id:"a",text:"Fine-tune the model with the same manuals"},{id:"b",text:"Increase the maximum response length"},{id:"c",text:"Send each request to two models"},{id:"d",text:"Retrieve only relevant passages before generating the summary"}],answer:"d",
          rationale:"Reducing irrelevant input lowers token consumption. Retrieval can supply only the passages needed for a response while preserving the requested outcome."
        },
        {
          id:"v04",domain:"value",type:"single",
          prompt:"A service assistant sometimes presents invented refund rules as facts. The solution must reduce unsupported responses and allow reviewers to verify the source. What should you prioritize?",
          options:[{id:"a",text:"Ground responses in approved content and require citations"},{id:"b",text:"Use a larger model with no grounding"},{id:"c",text:"Increase response creativity"},{id:"d",text:"Remove the evaluation set"}],answer:"a",
          rationale:"Grounding and citations directly address fabrications by connecting answers to approved evidence and making that evidence reviewable."
        },
        {
          id:"v05",domain:"value",type:"multi",
          prompt:"You are designing an assistant that processes confidential employee records. Which two controls most directly protect access to the records?",
          options:[{id:"a",text:"Use a larger context window"},{id:"b",text:"Encrypt data in transit and at rest"},{id:"c",text:"Increase the output token limit"},{id:"d",text:"Enforce identity-based authorization"}],answer:["b","d"],
          rationale:"Encryption protects the data from unauthorized disclosure in storage and transit; authorization restricts who may access it. Context and token limits do not provide access control."
        },
        {
          id:"v06",domain:"value",type:"single",
          prompt:"A legal team needs current case guidance in answers and also wants every response written in a highly specialized, stable house style. Which approach best addresses both requirements?",
          options:[{id:"a",text:"Use prompt engineering only"},{id:"b",text:"Use fine-tuning only"},{id:"c",text:"Use RAG for current guidance and evaluate fine-tuning for the specialized behavior"},{id:"d",text:"Retrain a foundation model whenever guidance changes"}],answer:"c",
          rationale:"RAG handles changing knowledge; fine-tuning may help establish specialized behavior or style after simpler prompt techniques have been evaluated."
        },
        {
          id:"v07",domain:"value",type:"single",
          prompt:"Responses from a non-reasoning model vary widely even though users ask for the same deliverable. Which prompt revision is the best first step?",
          options:[{id:"a",text:"Add unrelated examples to increase prompt length"},{id:"b",text:"Specify the role, source context, constraints, and output format"},{id:"c",text:"Remove success criteria"},{id:"d",text:"Replace business language with technical jargon"}],answer:"b",
          rationale:"Explicit context, constraints, expectations, and structure reduce ambiguity and make output more consistent."
        },
        {
          id:"v08",domain:"value",type:"single",
          prompt:"A sponsor claims success because employees generated 50,000 prompts. Which additional measure would provide the strongest evidence of business value?",
          options:[{id:"a",text:"The number of model parameters"},{id:"b",text:"The number of available prompt templates"},{id:"c",text:"The average prompt length"},{id:"d",text:"Change in an agreed business KPI compared with a baseline"}],answer:"d",
          rationale:"Activity is not the same as value. A baseline comparison against an outcome-oriented KPI connects the intervention to business performance."
        },
        {
          id:"v09",domain:"value",type:"multi",
          prompt:"A hiring model will be evaluated before deployment. Which two dataset characteristics are most important for identifying unfair performance differences?",
          options:[{id:"a",text:"Representation of the populations affected by the decision"},{id:"b",text:"A documented source, collection method, and known limitations"},{id:"c",text:"Storage in a single file format"},{id:"d",text:"The largest possible number of columns"}],answer:["a","b"],
          rationale:"Representative data and documented provenance make it possible to assess quality, limitations, and performance across relevant groups."
        },
        {
          id:"v10",domain:"value",type:"single",
          prompt:"A manufacturer wants to estimate whether a machine will fail in the next seven days from historical sensor readings. Which approach is most appropriate?",
          options:[{id:"a",text:"Text generation"},{id:"b",text:"Image synthesis"},{id:"c",text:"Predictive machine learning"},{id:"d",text:"Document summarization"}],answer:"c",
          rationale:"This is a prediction problem using patterns in historical sensor data, which is a conventional machine-learning use case."
        },
        {
          id:"v11",domain:"value",type:"single",
          prompt:"A deployed forecasting model becomes less accurate after customer behavior changes. Which lifecycle activity should identify this issue?",
          options:[{id:"a",text:"Monitoring production performance and data drift"},{id:"b",text:"Increasing every user's permissions"},{id:"c",text:"Deleting the original success criteria"},{id:"d",text:"Disabling evaluation after deployment"}],answer:"a",
          rationale:"Ongoing monitoring should detect performance degradation and distribution changes so the team can investigate and retrain or redesign as needed."
        },
        {
          id:"v12",domain:"value",type:"order",
          prompt:"Arrange the activities into a sensible machine-learning lifecycle.",
          options:[{id:"define",text:"Define the business problem and success measures"},{id:"data",text:"Prepare representative data"},{id:"train",text:"Train and evaluate candidate models"},{id:"operate",text:"Deploy, monitor, and improve the selected model"}],answer:["define","data","train","operate"],
          rationale:"A sound lifecycle begins with the business problem, proceeds through data and model development, and continues after deployment with monitoring and improvement."
        },
        {
          id:"v13",domain:"value",type:"single",
          prompt:"An attacker hides instructions inside a document that tells an assistant to reveal confidential system information. Which risk does this illustrate?",
          options:[{id:"a",text:"Data compression"},{id:"b",text:"Prompt injection"},{id:"c",text:"Model quantization"},{id:"d",text:"Semantic ranking"}],answer:"b",
          rationale:"Prompt injection attempts to override intended instructions through malicious user or retrieved content. Secure AI design must treat external content as untrusted."
        },
        {
          id:"v14",domain:"value",type:"single",caseStudy:"contoso",
          prompt:"Which architecture should Contoso use for the policy knowledge requirement?",
          options:[{id:"a",text:"A pretrained model grounded by retrieval from the policy repository"},{id:"b",text:"A model retrained from scratch each week"},{id:"c",text:"A public search engine with no access controls"},{id:"d",text:"A forecasting model trained on claim totals"}],answer:"a",
          rationale:"Grounded retrieval supplies current policy content without continual retraining and supports evidence-backed answers."
        },
        {
          id:"v15",domain:"value",type:"single",caseStudy:"contoso",
          prompt:"Testing shows that an underwriter can retrieve a policy restricted to another region. What should Contoso correct before expansion?",
          options:[{id:"a",text:"The response temperature"},{id:"b",text:"The model parameter count"},{id:"c",text:"The source permission and authorization enforcement"},{id:"d",text:"The number of pilot users"}],answer:"c",
          rationale:"The retrieval layer must preserve source permissions and enforce the requesting user's authorization. This is a data-security failure, not a generation-quality issue."
        },
        {
          id:"v16",domain:"value",type:"multi",caseStudy:"contoso",
          prompt:"Which two evaluation measures best address the risk team's requirements before expansion?",
          options:[{id:"a",text:"Grounded-answer accuracy against approved policies"},{id:"b",text:"The total number of prompts submitted"},{id:"c",text:"Permission-boundary tests for regional content"},{id:"d",text:"The length of the model name"}],answer:["a","c"],
          rationale:"Contoso must evaluate whether answers are supported by approved policies and whether access boundaries are preserved. Usage volume does not demonstrate either property."
        },
        {
          id:"v17",domain:"value",type:"single",
          prompt:"A writing assistant repeatedly suggests language that excludes people with disabilities. Retraining would be costly and the company needs an immediate safeguard. What should it implement first?",
          options:[{id:"a",text:"A higher token quota"},{id:"b",text:"A newer user interface"},{id:"c",text:"A larger context window"},{id:"d",text:"A content-safety filter with monitoring and escalation"}],answer:"d",
          rationale:"A content-safety control can reduce harmful outputs quickly and should be paired with monitoring. Longer-term work may still be needed to address underlying data or model behavior."
        },

        {
          id:"a01",domain:"apps",type:"single",
          prompt:"Employees want assistance drafting Word documents, summarizing Teams meetings, and analyzing workbooks while using their existing Microsoft 365 permissions. What should you evaluate first?",
          options:[{id:"a",text:"Azure AI Search by itself"},{id:"b",text:"Microsoft 365 Copilot"},{id:"c",text:"A custom vision model"},{id:"d",text:"A foundation model trained from scratch"}],answer:"b",
          rationale:"Microsoft 365 Copilot provides AI assistance within Microsoft 365 work experiences and uses organizational context subject to existing permissions."
        },
        {
          id:"a02",domain:"apps",type:"single",
          prompt:"A company needs an employee-facing agent that answers HR questions and can initiate approved leave workflows. Business users must maintain it with minimal custom code. What should you recommend?",
          options:[{id:"a",text:"Microsoft Copilot Studio"},{id:"b",text:"Azure Vision"},{id:"c",text:"Microsoft Graph alone"},{id:"d",text:"A custom foundation model"}],answer:"a",
          rationale:"Copilot Studio supports low-code creation, orchestration, knowledge grounding, and actions for organization-specific agents."
        },
        {
          id:"a03",domain:"apps",type:"multi",
          prompt:"An agent uses Microsoft Graph. Which two types of organizational context can Graph provide, subject to the caller's permissions?",
          options:[{id:"a",text:"Users and organizational relationships"},{id:"b",text:"A guarantee that generated answers are correct"},{id:"c",text:"Files, messages, meetings, and calendars"},{id:"d",text:"Unlimited access that bypasses source permissions"}],answer:["a","c"],
          rationale:"Microsoft Graph connects Microsoft 365 entities and content while respecting authorization. It does not guarantee model accuracy or bypass access controls."
        },
        {
          id:"a04",domain:"apps",type:"single",
          prompt:"An executive needs a sourced briefing that synthesizes information from several internal and external references. Which Microsoft 365 Copilot capability is the best fit?",
          options:[{id:"a",text:"Analyst"},{id:"b",text:"Azure Vision"},{id:"c",text:"Researcher"},{id:"d",text:"Image Creator"}],answer:"c",
          rationale:"Researcher is suited to multi-source investigation and synthesis. Analyst is oriented toward data analysis."
        },
        {
          id:"a05",domain:"apps",type:"single",
          prompt:"A finance manager wants to examine several datasets, identify trends, and develop data-driven insights. Which capability should the manager use?",
          options:[{id:"a",text:"Researcher"},{id:"b",text:"Analyst"},{id:"c",text:"Azure Vision"},{id:"d",text:"A translation service"}],answer:"b",
          rationale:"Analyst is designed for analytical reasoning over data and the production of data-driven insights."
        },
        {
          id:"a06",domain:"apps",type:"single",caseStudy:"fabrikam",
          prompt:"Which capability should the strategy team use for the regulatory and competitor briefing?",
          options:[{id:"a",text:"Analyst"},{id:"b",text:"Azure Vision"},{id:"c",text:"Microsoft Graph Explorer"},{id:"d",text:"Researcher"}],answer:"d",
          rationale:"Researcher is the best match for finding, synthesizing, and citing information across sources."
        },
        {
          id:"a07",domain:"apps",type:"single",caseStudy:"fabrikam",
          prompt:"Which capability should the finance team use to find patterns across the workbooks?",
          options:[{id:"a",text:"Researcher"},{id:"b",text:"Analyst"},{id:"c",text:"Azure Vision"},{id:"d",text:"A web search connector only"}],answer:"b",
          rationale:"Analyst is the closer fit for investigating structured data and producing analytical insights."
        },
        {
          id:"a08",domain:"apps",type:"single",caseStudy:"fabrikam",
          prompt:"Which product best meets the employee agent and workflow requirement while honoring Fabrikam's preference for configuration over custom development?",
          options:[{id:"a",text:"Microsoft Copilot Studio"},{id:"b",text:"Azure AI Search alone"},{id:"c",text:"A model trained from scratch"},{id:"d",text:"Azure Vision"}],answer:"a",
          rationale:"Copilot Studio provides a supported low-code path for an organization-specific agent that can use knowledge and invoke workflows."
        },
        {
          id:"a09",domain:"apps",type:"single",
          prompt:"A custom RAG solution needs hybrid, vector, and semantic retrieval over millions of enterprise documents. Which Foundry Tool should you select?",
          options:[{id:"a",text:"Microsoft Forms"},{id:"b",text:"Microsoft Planner"},{id:"c",text:"Azure AI Search"},{id:"d",text:"Azure Vision"}],answer:"c",
          rationale:"Azure AI Search supplies enterprise indexing and retrieval capabilities commonly used to ground RAG solutions."
        },
        {
          id:"a10",domain:"apps",type:"order",
          prompt:"Arrange the activities for selecting and introducing a model into a custom business solution.",
          options:[{id:"requirements",text:"Define workload, quality, safety, latency, and cost requirements"},{id:"shortlist",text:"Shortlist models that satisfy the required modalities and deployment constraints"},{id:"evaluate",text:"Evaluate candidates with representative business and safety tests"},{id:"operate",text:"Deploy the selected model and monitor production outcomes"}],answer:["requirements","shortlist","evaluate","operate"],
          rationale:"Model choice begins with requirements, proceeds through a constrained shortlist and representative evaluation, and continues with monitored operation."
        },
        {
          id:"a11",domain:"apps",type:"single",
          prompt:"A production line must read labels and identify visible defects in product images. Which capability is most relevant?",
          options:[{id:"a",text:"Microsoft Graph calendar APIs"},{id:"b",text:"Azure Vision in Foundry Tools"},{id:"c",text:"Researcher"},{id:"d",text:"A text-only summarization model"}],answer:"b",
          rationale:"Azure Vision capabilities are designed to analyze visual content, including extracting information and detecting image features."
        },
        {
          id:"a12",domain:"apps",type:"multi",
          prompt:"A team is considering Microsoft Foundry for a custom AI workload. Which two benefits are most relevant to the decision?",
          options:[{id:"a",text:"Tools to evaluate, deploy, monitor, and govern models"},{id:"b",text:"A guarantee that all model outputs are factual"},{id:"c",text:"Scalable enterprise integration and security capabilities"},{id:"d",text:"Removal of the need for identity controls"}],answer:["a","c"],
          rationale:"Foundry supports the AI solution lifecycle and enterprise deployment concerns. No platform eliminates the need for evaluation, identity, or governance."
        },
        {
          id:"a13",domain:"apps",type:"single",
          prompt:"A supported Microsoft Copilot product meets 90% of a standard productivity requirement. The remaining requirement can be addressed through a supported extension. What should you recommend?",
          options:[{id:"a",text:"Train a foundation model from scratch"},{id:"b",text:"Replace Microsoft 365"},{id:"c",text:"Build a duplicate product independently"},{id:"d",text:"Buy the existing capability and extend it"}],answer:"d",
          rationale:"When a supported product covers the core need, buying and extending usually reduces time, cost, and operational burden compared with a full custom build."
        },
        {
          id:"a14",domain:"apps",type:"single",
          prompt:"Two candidate models meet the required quality threshold. Model X is faster and cheaper; Model Y has capabilities the workload will not use. Which model should you select?",
          options:[{id:"a",text:"Model Y because it has more capabilities"},{id:"b",text:"Model X because it meets requirements with better latency and cost"},{id:"c",text:"Both models for every request"},{id:"d",text:"Neither until a larger model is released"}],answer:"b",
          rationale:"Model selection is a requirements-based tradeoff. Unused capabilities do not justify additional latency and cost when the quality threshold is already met."
        },
        {
          id:"a15",domain:"apps",type:"single",
          prompt:"Why can an integrated Microsoft AI solution reduce information-access risk compared with an isolated assistant?",
          options:[{id:"a",text:"It can apply established identity, permission, compliance, and security controls"},{id:"b",text:"It automatically makes all organizational data public"},{id:"c",text:"It transfers accountability to the model provider"},{id:"d",text:"It removes the need for monitoring"}],answer:"a",
          rationale:"Integration can preserve existing identity, authorization, compliance, and security boundaries. It does not eliminate organizational accountability."
        },
        {
          id:"a16",domain:"apps",type:"order",
          prompt:"Arrange the simplified RAG flow from a user's question to a grounded answer.",
          options:[{id:"query",text:"Receive the user's question under the user's identity"},{id:"retrieve",text:"Retrieve permitted, relevant passages from the index"},{id:"augment",text:"Add the passages and instructions to the model context"},{id:"generate",text:"Generate the answer and return supporting citations"}],answer:["query","retrieve","augment","generate"],
          rationale:"A RAG solution receives the request, retrieves authorized relevant content, augments the model context, and generates an evidence-backed response."
        },
        {
          id:"a17",domain:"apps",type:"multi",
          prompt:"A sales team wants to extend Microsoft 365 Copilot with an internal pricing service. Which two considerations should guide the extension?",
          options:[{id:"a",text:"The action must enforce the requesting user's authorization"},{id:"b",text:"The service should expose all pricing records to simplify retrieval"},{id:"c",text:"The extension should have a defined business use case and measurable outcome"},{id:"d",text:"The extension removes the need to validate returned data"}],answer:["a","c"],
          rationale:"Extensions should be tied to a justified use case and must preserve authorization. Their data and actions still require validation and governance."
        },

        {
          id:"g01",domain:"adoption",type:"single",
          prompt:"Several departments are buying AI tools independently, creating duplicated cost and inconsistent risk decisions. What should leadership establish first?",
          options:[{id:"a",text:"An AI council with cross-functional decision rights and oversight"},{id:"b",text:"A policy allowing every team to approve its own high-risk use cases"},{id:"c",text:"A single prompt template"},{id:"d",text:"A requirement to choose the largest model"}],answer:"a",
          rationale:"A cross-functional AI council can align strategy, prioritization, standards, risk oversight, and accountability across departments."
        },
        {
          id:"g02",domain:"adoption",type:"single",
          prompt:"An automated screening tool has a substantially higher false-rejection rate for applicants with disabilities. Which responsible AI principle is most directly affected?",
          options:[{id:"a",text:"Transparency"},{id:"b",text:"Fairness"},{id:"c",text:"Scalability"},{id:"d",text:"Token efficiency"}],answer:"b",
          rationale:"Materially different outcomes across affected groups are principally a fairness concern, though other principles may also apply."
        },
        {
          id:"g03",domain:"adoption",type:"multi",
          prompt:"A customer receives an AI-assisted credit decision but cannot tell AI was used or request human review. Which two responsible AI principles most directly address the problem?",
          options:[{id:"a",text:"Reliability"},{id:"b",text:"Transparency"},{id:"c",text:"Accountability"},{id:"d",text:"Scalability"}],answer:["b","c"],
          rationale:"Transparency makes AI involvement understandable; accountability establishes ownership, review, and recourse for consequential outcomes."
        },
        {
          id:"g04",domain:"adoption",type:"single",
          prompt:"A technically successful Copilot pilot has low usage because employees do not know which tasks are approved or useful. What should the adoption team do next?",
          options:[{id:"a",text:"Expand to every employee immediately"},{id:"b",text:"Remove usage guidance to encourage experimentation"},{id:"c",text:"Replace the adoption team with the security team"},{id:"d",text:"Provide role-based scenarios, clear guidance, training, and feedback channels"}],answer:"d",
          rationale:"Role-relevant use cases, acceptable-use guidance, skills development, and feedback address practical barriers without forcing an unmanaged rollout."
        },
        {
          id:"g05",domain:"adoption",type:"single",
          prompt:"What is the primary purpose of an AI champions program?",
          options:[{id:"a",text:"Replace formal governance and risk review"},{id:"b",text:"Approve access to confidential data"},{id:"c",text:"Build peer advocacy, share working practices, and surface frontline feedback"},{id:"d",text:"Eliminate the need for role-based training"}],answer:"c",
          rationale:"Champions help colleagues adopt useful practices, provide local support, and relay practical feedback. They complement rather than replace governance and training."
        },
        {
          id:"g06",domain:"adoption",type:"multi",
          prompt:"A company is defining success measures for an AI customer-service pilot. Which two measures best support a responsible scale decision?",
          options:[{id:"a",text:"Change in resolution time and customer satisfaction versus the baseline"},{id:"b",text:"The number of features announced by the model vendor"},{id:"c",text:"Rates of unsupported, harmful, or incorrectly authorized responses"},{id:"d",text:"The total number of words generated"}],answer:["a","c"],
          rationale:"A scale decision needs both business outcomes and risk/quality measures. Vendor announcements and raw output volume do not demonstrate success."
        },
        {
          id:"g07",domain:"adoption",type:"single",
          prompt:"An experimental workload has unpredictable monthly demand. Finance wants costs to rise and fall with actual consumption. Which model is the best starting point?",
          options:[{id:"a",text:"A commitment tier sized for the maximum possible demand"},{id:"b",text:"Pay-as-you-go"},{id:"c",text:"A perpetual desktop license"},{id:"d",text:"An assumption of unlimited free usage"}],answer:"b",
          rationale:"Pay-as-you-go aligns spend with actual consumption and is often appropriate while variable demand is being understood."
        },
        {
          id:"g08",domain:"adoption",type:"order",
          prompt:"Arrange the activities into a responsible adoption sequence.",
          options:[{id:"prioritize",text:"Prioritize a valuable, feasible use case and define success criteria"},{id:"assess",text:"Assess data, privacy, security, safety, and cost risks"},{id:"pilot",text:"Run a controlled pilot with training and measurement"},{id:"scale",text:"Use pilot evidence to improve and scale in stages"}],answer:["prioritize","assess","pilot","scale"],
          rationale:"Responsible adoption begins with a justified use case, assesses risks before exposure, tests under control, and scales based on evidence."
        },
        {
          id:"g09",domain:"adoption",type:"single",
          prompt:"A project team proposes sending customer records to an AI service before confirming where data is stored or how it is retained. What should the governance team require first?",
          options:[{id:"a",text:"A higher output-token quota"},{id:"b",text:"A larger pilot group"},{id:"c",text:"A data-protection assessment covering classification, location, retention, access, and contractual requirements"},{id:"d",text:"A public demonstration"}],answer:"c",
          rationale:"Data classification, residency, retention, access, and contractual obligations must be understood before sensitive information is processed by a service."
        },
        {
          id:"g10",domain:"adoption",type:"single",
          prompt:"A voice agent works well for most users but cannot be operated by employees who use text-based assistive technology. Which principle should drive the redesign?",
          options:[{id:"a",text:"Inclusiveness"},{id:"b",text:"Model compression"},{id:"c",text:"Commitment pricing"},{id:"d",text:"Semantic ranking"}],answer:"a",
          rationale:"Inclusiveness requires designing AI experiences so people with varied abilities and circumstances can use and benefit from them."
        },
        {
          id:"g11",domain:"adoption",type:"single",
          prompt:"A mature production workload has stable, consistently high consumption. Forecasts show that a Foundry Tools commitment tier will reduce unit cost without exceeding the budget. What should the organization do?",
          options:[{id:"a",text:"Continue pay-as-you-go in every circumstance"},{id:"b",text:"Purchase a commitment before validating the forecast"},{id:"c",text:"Stop monitoring consumption after purchase"},{id:"d",text:"Evaluate the commitment tier against the validated usage forecast and flexibility needs"}],answer:"d",
          rationale:"Stable, predictable consumption can favor a commitment tier, but the decision should still account for forecast confidence, term, flexibility, and total cost."
        }
      ]
};
