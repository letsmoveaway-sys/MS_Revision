window.EXAM_CATALOG = window.EXAM_CATALOG || { defaultExam: "ai-901", exams: {} };
window.EXAM_CATALOG.exams["ai-901"] = {
  id: "ai-901",
  version: "1.0.0",
  code: "AI-901",
  title: "Microsoft Azure AI Fundamentals",
  heroTitle: "Start building<br><em>with AI.</em>",
  description: "Practise AI concepts, responsible AI, and hands-on Microsoft Foundry tasks: prompts, models, agents, speech, vision, and Content Understanding.",
  durationMinutes: 45,
  source: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901",
  domains: {
    concepts: "Identify AI concepts and capabilities",
    foundry: "Implement AI solutions by using Microsoft Foundry"
  },
  caseStudies: {
    travel: {
      title: "Contoso Travel assistant",
      body: `<p>Contoso Travel is building a chat assistant in Microsoft Foundry. It must answer only travel questions, reply in British English, and remember details a customer gave earlier in the same chat, such as their destination. Developers write a small Python client by using the Foundry SDK, and later convert the assistant into an agent that can search Contoso's uploaded brochures.</p>`
    },
    insurer: {
      title: "Fabrikam Insurance claims",
      body: `<p>Fabrikam Insurance receives repair invoices from garages, its own claim forms with company-specific fields, photos of vehicle damage, and recorded phone calls with customers. The team wants a lightweight app that extracts structured data from all of these inputs by using Azure Content Understanding in Foundry Tools.</p>`
    }
  },
  questions: [
    /* ===== Identify AI concepts and capabilities: 26 / 60 = 43.3% ===== */

    // Responsible AI
    {
      id:"k01",domain:"concepts",type:"single",
      prompt:"A loan-approval model approves fewer applicants from one postcode, even when their financial profiles are the same as applicants from other areas. Which responsible AI principle is most directly at risk?",
      options:[{id:"a",text:"Fairness"},{id:"b",text:"Inclusiveness"},{id:"c",text:"Transparency"},{id:"d",text:"Reliability and safety"}],answer:"a",
      rationale:"Fairness means AI systems should treat similar people in similar ways and avoid unjust differences between groups. Inclusiveness concerns designing for people with a wide range of abilities and backgrounds."
    },
    {
      id:"k02",domain:"concepts",type:"single",
      prompt:"Before launch, a medical triage chatbot is tested with unusual and ambiguous symptoms to make sure it behaves predictably and escalates to a clinician instead of guessing. Which principle does this testing support?",
      options:[{id:"a",text:"Accountability"},{id:"b",text:"Reliability and safety"},{id:"c",text:"Privacy and security"},{id:"d",text:"Fairness"}],answer:"b",
      rationale:"Reliability and safety means systems perform consistently, including in unexpected conditions, and fail safely. Testing edge cases and escalating to a person are typical safeguards."
    },
    {
      id:"k03",domain:"concepts",type:"single",
      prompt:"An app analyses customers' recorded phone calls. The company encrypts the recordings, restricts who can access them, and asks for consent before recording. Which principle do these measures address?",
      options:[{id:"a",text:"Transparency"},{id:"b",text:"Inclusiveness"},{id:"c",text:"Privacy and security"},{id:"d",text:"Fairness"}],answer:"c",
      rationale:"Privacy and security covers protecting personal data, controlling access, and respecting consent and data-use expectations."
    },
    {
      id:"k04",domain:"concepts",type:"single",
      prompt:"A team designs its AI app to work with screen readers, offer voice input, and support several languages so that more people can use it. Which principle is this?",
      options:[{id:"a",text:"Accountability"},{id:"b",text:"Reliability and safety"},{id:"c",text:"Transparency"},{id:"d",text:"Inclusiveness"}],answer:"d",
      rationale:"Inclusiveness means AI should empower everyone and engage people, including people with disabilities or different languages and backgrounds."
    },
    {
      id:"k05",domain:"concepts",type:"single",
      prompt:"A website clearly tells users they are chatting with an AI system, explains what it can and cannot do, and publishes how it was evaluated. Which principle does this demonstrate?",
      options:[{id:"a",text:"Transparency"},{id:"b",text:"Accountability"},{id:"c",text:"Fairness"},{id:"d",text:"Privacy and security"}],answer:"a",
      rationale:"Transparency means people should understand that they are using AI, what it is for, and its limitations. Documentation such as transparency notes supports this."
    },
    {
      id:"k06",domain:"concepts",type:"single",
      prompt:"An organisation names an owner for each AI system, sets up a review board that can pause a system, and keeps a human able to override decisions. Which principle is being applied?",
      options:[{id:"a",text:"Inclusiveness"},{id:"b",text:"Transparency"},{id:"c",text:"Accountability"},{id:"d",text:"Reliability and safety"}],answer:"c",
      rationale:"Accountability means people remain responsible for AI systems, through governance, oversight, and the ability to intervene."
    },
    {
      id:"k07",domain:"concepts",type:"match",label:"DRAG DROP",
      prompt:"Match each practice to the responsible AI principle it most directly supports.",
      options:[{id:"p1",text:"Red-teaming a chatbot to find harmful or unsafe responses before release"},{id:"p2",text:"Comparing error rates across age groups and fixing large differences"},{id:"p3",text:"Publishing a note that explains the system's intended uses and limitations"},{id:"p4",text:"Adding captions and keyboard navigation to an AI tool"}],
      choices:[{id:"rel",text:"Reliability and safety"},{id:"fair",text:"Fairness"},{id:"tra",text:"Transparency"},{id:"inc",text:"Inclusiveness"},{id:"acc",text:"Accountability"}],
      answer:{p1:"rel",p2:"fair",p3:"tra",p4:"inc"},
      rationale:"Red-teaming tests for unsafe behaviour (reliability and safety). Comparing outcomes across groups targets fairness. Explaining intended uses and limits is transparency. Accessibility features support inclusiveness."
    },

    // How generative AI works, models, and configuration
    {
      id:"k08",domain:"concepts",type:"single",
      prompt:"How does a large language model generate a response to a prompt?",
      options:[{id:"a",text:"It looks up a stored answer that exactly matches the prompt"},{id:"b",text:"It repeatedly predicts the most likely next token, based on patterns learned from its training data and the prompt so far"},{id:"c",text:"It searches the internet for every request by default"},{id:"d",text:"It runs a fixed set of if-then rules written by developers"}],answer:"b",
      rationale:"LLMs are transformer models that generate text one token at a time by predicting likely next tokens from the context. They do not retrieve stored answers or browse the web unless a tool or grounding is added."
    },
    {
      id:"k09",domain:"concepts",type:"yesno",
      prompt:"You are explaining how generative AI models work.",
      options:[{id:"s1",text:"Language models process text as tokens, which can be whole words or parts of words."},{id:"s2",text:"Embeddings represent text as vectors, so text with similar meaning has similar vectors."},{id:"s3",text:"If a prompt is clear, the model's response is always factually correct."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. Text is split into tokens before processing. Box 2: Yes. Embeddings place semantically similar text close together in vector space. Box 3: No. Models can produce plausible but incorrect content (fabrications), so grounding and evaluation are still needed."
    },
    {
      id:"k10",domain:"concepts",type:"single",
      prompt:"In a very long chat, the model starts ignoring details the user gave at the beginning. Which model characteristic most likely explains this?",
      options:[{id:"a",text:"The context window, the maximum number of tokens the model can consider at once"},{id:"b",text:"The model's temperature setting"},{id:"c",text:"The deployment's region"},{id:"d",text:"The model's training date"}],answer:"a",
      rationale:"Prompts, history, and output must fit within the context window. When a conversation exceeds it, earlier content must be dropped or summarised, so the model no longer sees it."
    },
    {
      id:"k11",domain:"concepts",type:"single",
      prompt:"A team needs a model to classify short text messages quickly and cheaply, possibly on edge devices. Accuracy tests show that a large model is not needed. Which type of model is the best fit?",
      options:[{id:"a",text:"A small language model"},{id:"b",text:"An image-generation model"},{id:"c",text:"A large reasoning model"},{id:"d",text:"A text-to-speech model"}],answer:"a",
      rationale:"Small language models, such as the Phi family, are efficient for focused tasks, with lower cost and latency, and some can run on devices. A reasoning model adds cost and latency that this simple task does not need."
    },
    {
      id:"k12",domain:"concepts",type:"match",label:"DRAG DROP",
      prompt:"Match each requirement to the most appropriate type of model.",
      options:[{id:"m1",text:"Answer questions about the contents of a photo"},{id:"m2",text:"Create a new illustration from a text description"},{id:"m3",text:"Convert documents into vectors for semantic search"},{id:"m4",text:"Work through a complex multi-step planning problem"}],
      choices:[{id:"mm",text:"Multimodal model"},{id:"img",text:"Image-generation model"},{id:"emb",text:"Embedding model"},{id:"rsn",text:"Reasoning model"},{id:"stt",text:"Speech-to-text model"}],
      answer:{m1:"mm",m2:"img",m3:"emb",m4:"rsn"},
      rationale:"Multimodal models accept images and text. Image-generation models create pictures. Embedding models produce vectors for search and similarity. Reasoning models spend extra computation on step-by-step problem solving."
    },
    {
      id:"k13",domain:"concepts",type:"single",
      prompt:"A marketing team uses a deployed model to brainstorm slogans and wants more varied, creative suggestions. Which parameter should they increase?",
      options:[{id:"a",text:"Maximum output tokens"},{id:"b",text:"Temperature"},{id:"c",text:"The number of stop sequences"},{id:"d",text:"The deployment's rate limit"}],answer:"b",
      rationale:"Higher temperature increases randomness in token selection, producing more varied output. Lower temperature is better for consistent, factual tasks."
    },
    {
      id:"k14",domain:"concepts",type:"yesno",
      prompt:"You are choosing model deployment options in Microsoft Foundry.",
      options:[{id:"s1",text:"A Standard (pay-as-you-go) deployment is billed based on the tokens processed."},{id:"s2",text:"A Provisioned deployment reserves processing capacity for predictable throughput."},{id:"s3",text:"The maximum output tokens setting controls how creative a response is."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. Standard deployments, including Global and Data Zone Standard, charge per token. Box 2: Yes. Provisioned deployments reserve throughput units. Box 3: No. Maximum output tokens limits response length; temperature and top_p affect creativity."
    },

    // AI workloads
    {
      id:"k15",domain:"concepts",type:"single",
      prompt:"A help desk wants to automatically prioritise emails written by frustrated or angry customers. Which AI workload is this?",
      options:[{id:"a",text:"Computer vision"},{id:"b",text:"Speech synthesis"},{id:"c",text:"Text analysis (sentiment analysis)"},{id:"d",text:"Image generation"}],answer:"c",
      rationale:"Sentiment analysis is a text analysis technique that scores whether text is positive, negative, neutral, or mixed, which can drive routing rules."
    },
    {
      id:"k16",domain:"concepts",type:"match",label:"DRAG DROP",
      prompt:"Match each scenario to the AI workload it represents.",
      options:[{id:"w1",text:"Pull totals and dates from scanned supplier invoices"},{id:"w2",text:"Write first drafts of product descriptions"},{id:"w3",text:"Display live captions while a presenter speaks"},{id:"w4",text:"Spot damaged items in images from a conveyor belt camera"},{id:"w5",text:"An assistant that checks calendars and books meeting rooms by using tools"}],
      choices:[{id:"ie",text:"Information extraction"},{id:"gen",text:"Generative AI"},{id:"sp",text:"Speech recognition"},{id:"cv",text:"Computer vision"},{id:"ag",text:"Agentic AI"},{id:"ta",text:"Text analysis"}],
      answer:{w1:"ie",w2:"gen",w3:"sp",w4:"cv",w5:"ag"},
      rationale:"Extracting fields from forms is information extraction. Drafting new text is generative AI. Live captions use speech recognition. Detecting damage in images is computer vision. Taking actions with tools towards a goal is agentic AI."
    },
    {
      id:"k17",domain:"concepts",type:"single",
      prompt:"What most clearly distinguishes an AI agent from a basic chat completion?",
      options:[{id:"a",text:"An agent always uses a larger model"},{id:"b",text:"An agent can follow instructions to reach a goal, use tools such as search or APIs, and take multistep actions"},{id:"c",text:"An agent never needs a model deployment"},{id:"d",text:"An agent can only answer yes or no questions"}],answer:"b",
      rationale:"Agents combine a model with instructions, tools, and memory or state so they can plan and act across several steps. A basic completion returns one generated response to a prompt."
    },
    {
      id:"k18",domain:"concepts",type:"single",
      prompt:"A product team wants to see the main talking points across thousands of reviews, such as \"battery life\" and \"screen glare\". Which text analysis technique should be used?",
      options:[{id:"a",text:"Language detection"},{id:"b",text:"Key phrase extraction"},{id:"c",text:"Speech synthesis"},{id:"d",text:"Optical character recognition"}],answer:"b",
      rationale:"Key phrase (keyword) extraction identifies the main concepts in text. Language detection identifies only which language the text is in."
    },
    {
      id:"k19",domain:"concepts",type:"single",
      prompt:"A news archive needs every mention of people, organisations, locations, and dates identified and labelled. Which technique fits?",
      options:[{id:"a",text:"Named entity recognition"},{id:"b",text:"Sentiment analysis"},{id:"c",text:"Summarisation"},{id:"d",text:"Text to speech"}],answer:"a",
      rationale:"Named entity recognition (entity detection) finds and categorises entities such as people, organisations, places, and dates."
    },
    {
      id:"k20",domain:"concepts",type:"multi",
      prompt:"A news app must show a short version of each article and label the language each article is written in. Which two text analysis capabilities are required?",
      options:[{id:"a",text:"Summarisation"},{id:"b",text:"Language detection"},{id:"c",text:"Object detection"},{id:"d",text:"Speech synthesis"},{id:"e",text:"Image generation"}],answer:["a","b"],
      rationale:"Summarisation condenses the article, and language detection identifies its language. The other options are vision, speech, or image workloads."
    },
    {
      id:"k21",domain:"concepts",type:"single",
      prompt:"Warehouse staff want to control an app with spoken commands such as \"show today's orders\". Which capability converts their speech into text that the app can act on?",
      options:[{id:"a",text:"Speech synthesis"},{id:"b",text:"Speech recognition (speech to text)"},{id:"c",text:"Key phrase extraction"},{id:"d",text:"Image classification"}],answer:"b",
      rationale:"Speech recognition transcribes spoken audio into text. Speech synthesis does the opposite, turning text into audio."
    },
    {
      id:"k22",domain:"concepts",type:"yesno",
      prompt:"You are describing speech capabilities.",
      options:[{id:"s1",text:"Speech synthesis converts text into spoken audio."},{id:"s2",text:"Speech Synthesis Markup Language (SSML) can control pronunciation, speaking rate, and voice."},{id:"s3",text:"Speech recognition only works after each speaker trains the model with their own voice."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. Text to speech produces audio, often with neural voices. Box 2: Yes. SSML fine-tunes how text is spoken. Box 3: No. Prebuilt speech recognition works for many speakers without enrolment; custom models are optional, for example for domain vocabulary."
    },
    {
      id:"k23",domain:"concepts",type:"single",
      prompt:"A shelf-monitoring system must find every product on a shelf photo and return where each one is located. Which computer vision capability is required?",
      options:[{id:"a",text:"Image classification"},{id:"b",text:"Object detection"},{id:"c",text:"Image generation"},{id:"d",text:"Speech recognition"}],answer:"b",
      rationale:"Object detection identifies multiple objects and their locations (bounding boxes). Image classification assigns a label to the whole image without locating items."
    },
    {
      id:"k24",domain:"concepts",type:"single",
      prompt:"A tourism app reads the words on photographed street signs and menus. Which capability is used?",
      options:[{id:"a",text:"Optical character recognition (OCR)"},{id:"b",text:"Sentiment analysis"},{id:"c",text:"Image generation"},{id:"d",text:"Speech synthesis"}],answer:"a",
      rationale:"OCR extracts printed or handwritten text from images. The text can then be translated or analysed."
    },
    {
      id:"k25",domain:"concepts",type:"single",
      prompt:"A designer types \"a watercolour lighthouse at sunrise\" and wants a brand-new picture. Which model capability is needed?",
      options:[{id:"a",text:"Image analysis"},{id:"b",text:"OCR"},{id:"c",text:"Image generation"},{id:"d",text:"Object detection"}],answer:"c",
      rationale:"Image-generation models create new images from text prompts, and some also accept reference images. Image analysis, OCR, and detection interpret existing images rather than creating new ones."
    },
    {
      id:"k26",domain:"concepts",type:"multi",
      prompt:"A company wants its recorded training videos to be searchable by what is said and what is shown. Which two extraction techniques should be applied?",
      options:[{id:"a",text:"Transcribe the audio track to text"},{id:"b",text:"Analyse key frames or scenes to describe what appears on screen"},{id:"c",text:"Convert the video title to speech"},{id:"d",text:"Generate new images from the video title"},{id:"e",text:"Run sentiment analysis on the file name"}],answer:["a","b"],
      rationale:"Transcription captures spoken content, and frame or scene analysis describes visual content with timestamps. Together they make video searchable. The other options add no information from the video itself."
    },

    /* ===== Implement AI solutions by using Microsoft Foundry: 34 / 60 = 56.7% ===== */

    // Generative AI apps and agents
    {
      id:"f01",domain:"foundry",type:"single",caseStudy:"travel",
      prompt:"Where should Contoso put the rules \"Only answer travel questions\" and \"Reply in British English\" so that they apply to every conversation?",
      options:[{id:"a",text:"In each user message, typed by the customer"},{id:"b",text:"In the system prompt (instructions)"},{id:"c",text:"In the deployment name"},{id:"d",text:"In the maximum output tokens setting"}],answer:"b",
      rationale:"The system prompt sets the assistant's role, tone, and constraints for the whole conversation. User prompts contain each individual request."
    },
    {
      id:"f02",domain:"foundry",type:"multi",
      prompt:"Responses from a deployed model are inconsistent in structure. Which two prompt changes are most likely to improve them?",
      options:[{id:"a",text:"Give clear, specific instructions, including the required output format"},{id:"b",text:"Include one or two examples of the desired output (few-shot prompting)"},{id:"c",text:"Make the prompt shorter and vaguer so the model has more freedom"},{id:"d",text:"Set temperature to the maximum value"},{id:"e",text:"Remove the system prompt"}],answer:["a","b"],
      rationale:"Specific instructions and examples are core prompt-engineering techniques that guide format and content. Vague prompts and maximum randomness make results less consistent."
    },
    {
      id:"f03",domain:"foundry",type:"yesno",
      prompt:"You are writing prompts for a generative AI app.",
      options:[{id:"s1",text:"Providing examples of the desired output in a prompt can improve consistency."},{id:"s2",text:"The system message is normally displayed to the end user in the chat window."},{id:"s3",text:"Adding relevant source data to a prompt (grounding) can reduce fabricated answers."}],
      answer:{s1:"yes",s2:"no",s3:"yes"},
      rationale:"Box 1: Yes. Few-shot examples show the model what good output looks like. Box 2: No. The system message is sent to the model but is not normally shown to users. Box 3: Yes. Grounding gives the model facts to base its answer on."
    },
    {
      id:"f04",domain:"foundry",type:"single",
      prompt:"A student opens a new Foundry project and wants to chat with a model in the playground. What must they do first?",
      options:[{id:"a",text:"Deploy a model from the model catalog to the project"},{id:"b",text:"Create an Azure AI Search index"},{id:"c",text:"Write a Python client app"},{id:"d",text:"Train a custom model on their own data"}],answer:"a",
      rationale:"The playground calls a model deployment. Choosing a model from the catalog and deploying it, with a deployment name and type, makes it available in the project."
    },
    {
      id:"f05",domain:"foundry",type:"order",
      prompt:"Arrange the steps to deploy and test a model in the Foundry portal.",
      options:[{id:"proj",text:"Create or open a Foundry project"},{id:"cat",text:"Choose a model from the model catalog"},{id:"dep",text:"Deploy the model, choosing a deployment name and type"},{id:"play",text:"Open the chat playground, add a system prompt, and test"}],answer:["proj","cat","dep","play"],
      rationale:"Work happens in a project. You pick a model, create a deployment for it, and then experiment with prompts and parameters in the playground."
    },
    {
      id:"f06",domain:"foundry",type:"single",
      prompt:"In the playground, long answers stop mid-sentence. Which setting should be increased?",
      options:[{id:"a",text:"Temperature"},{id:"b",text:"Top P"},{id:"c",text:"Maximum output tokens"},{id:"d",text:"Frequency penalty"}],answer:"c",
      rationale:"Generation stops when the maximum output token limit is reached. Raising it allows longer responses; temperature and top P affect randomness, not length."
    },
    {
      id:"f07",domain:"foundry",type:"single",caseStudy:"travel",
      prompt:"Contoso's Python client uses the Foundry SDK (azure-ai-projects) without storing an API key. What does it pass when creating the AIProjectClient?",
      options:[{id:"a",text:"The project endpoint and DefaultAzureCredential()"},{id:"b",text:"The model name and an API key"},{id:"c",text:"The subscription ID and a password"},{id:"d",text:"The deployment's region and a storage key"}],answer:"a",
      rationale:"AIProjectClient(endpoint=..., credential=DefaultAzureCredential()) authenticates with Microsoft Entra ID, using az login during development. project.get_openai_client() then returns a client for chatting with the model."
    },
    {
      id:"f08",domain:"foundry",type:"single",
      prompt:"A developer deployed gpt-5-mini in their project with the deployment name \"chat-prod\". In openai.responses.create(model=..., input=...), what value should model use?",
      options:[{id:"a",text:"The deployment name, \"chat-prod\""},{id:"b",text:"The project name"},{id:"c",text:"The resource group name"},{id:"d",text:"The Azure region"}],answer:"a",
      rationale:"Calls are routed to a deployment, so the model parameter takes the deployment name. In many quickstarts the deployment name happens to match the model name."
    },
    {
      id:"f09",domain:"foundry",type:"yesno",
      prompt:"You are building a chat client with the Foundry SDK for Python.",
      options:[{id:"s1",text:"DefaultAzureCredential can use your Azure CLI sign-in (az login) during local development."},{id:"s2",text:"A project endpoint has the format https://<resource>.services.ai.azure.com/api/projects/<project>."},{id:"s3",text:"The Foundry SDK requires you to hard-code an API key in your source code."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. DefaultAzureCredential tries developer sign-ins such as the Azure CLI. Box 2: Yes. That is the project endpoint format shown in the project overview. Box 3: No. Keyless Entra ID authentication is recommended, and keys should never be hard-coded."
    },
    {
      id:"f10",domain:"foundry",type:"single",caseStudy:"travel",
      prompt:"Contoso's client answers the first question correctly, but on the next turn it has forgotten the customer's destination. What should the client do?",
      options:[{id:"a",text:"Increase temperature"},{id:"b",text:"Send the earlier messages with each request, or keep the turns in a conversation and reference it in each request"},{id:"c",text:"Create a new deployment for every question"},{id:"d",text:"Shorten the system prompt"}],answer:"b",
      rationale:"Models are stateless between calls. Multi-turn context comes from resending the message history or from a conversation that the service stores and that each request references."
    },
    {
      id:"f11",domain:"foundry",type:"single",
      prompt:"When is creating an agent in Foundry more appropriate than calling a model deployment directly?",
      options:[{id:"a",text:"When you only need one completion and no tools"},{id:"b",text:"When you want saved instructions plus tools, such as file search or code interpreter, and managed conversation state"},{id:"c",text:"When you want to avoid choosing a model"},{id:"d",text:"When you need to train a new foundation model"}],answer:"b",
      rationale:"An agent packages a model with instructions and tools and works with conversations, so it can carry out multistep tasks. A single direct model call is simpler when none of that is required."
    },
    {
      id:"f12",domain:"foundry",type:"order",caseStudy:"travel",
      prompt:"Arrange the steps for Contoso to create and test a single brochure-searching agent in the Foundry portal.",
      options:[{id:"create",text:"Create an agent and select a model deployment"},{id:"instr",text:"Write the agent's instructions (travel-only, British English)"},{id:"tool",text:"Add knowledge by uploading the brochures for file search"},{id:"test",text:"Test the agent in the agent playground"}],answer:["create","instr","tool","test"],
      rationale:"An agent needs a model, then instructions that define its behaviour, then tools or knowledge such as file search over uploaded brochures. Testing in the playground confirms that the parts work together."
    },
    {
      id:"f13",domain:"foundry",type:"match",label:"DRAG DROP",
      prompt:"Match each requirement for a single agent to the tool to add.",
      options:[{id:"t1",text:"Answer questions from uploaded product manuals"},{id:"t2",text:"Calculate averages from an uploaded spreadsheet"},{id:"t3",text:"Answer questions about today's news"},{id:"t4",text:"Look up an order in the company's own order system"}],
      choices:[{id:"fs",text:"File search"},{id:"ci",text:"Code interpreter"},{id:"bing",text:"Grounding with Bing Search"},{id:"fn",text:"Function calling or an OpenAPI tool"},{id:"img",text:"Image generation"}],
      answer:{t1:"fs",t2:"ci",t3:"bing",t4:"fn"},
      rationale:"File search retrieves from uploaded documents. Code interpreter runs Python for calculations. Grounding with Bing Search brings in current web information. Function calling or an OpenAPI tool lets the agent call your own systems."
    },
    {
      id:"f14",domain:"foundry",type:"single",
      prompt:"An existing Foundry agent must be used from a small Python app that holds multi-turn chats. Which approach matches the Foundry SDK pattern?",
      options:[{id:"a",text:"Get an OpenAI client bound to the agent, create a conversation, and call responses.create with that conversation for each message"},{id:"b",text:"Re-create the agent before every message"},{id:"c",text:"Call the model deployment directly and paste the agent's instructions into every user message"},{id:"d",text:"Export the agent as a PDF"}],answer:"a",
      rationale:"project.get_openai_client(agent_name=...) returns a client bound to the agent. A conversation keeps context, and each responses.create call that references it continues the chat."
    },
    {
      id:"f15",domain:"foundry",type:"single",caseStudy:"travel",
      prompt:"During testing, the travel agent starts giving cooking recipes when asked. What should Contoso change first?",
      options:[{id:"a",text:"Refine the agent's instructions to restrict it to travel topics and say how to decline other requests"},{id:"b",text:"Increase maximum output tokens"},{id:"c",text:"Delete the uploaded brochures"},{id:"d",text:"Deploy a second model"}],answer:"a",
      rationale:"The agent's instructions define its scope and behaviour. Clear limits and a refusal pattern are the first fix; output length and extra deployments do not address scope."
    },
    {
      id:"f16",domain:"foundry",type:"single",
      prompt:"A developer must build and test agents in an existing Foundry project, but should not create projects, manage model deployments, or assign roles. Which built-in role fits?",
      options:[{id:"a",text:"Foundry Owner"},{id:"b",text:"Foundry User"},{id:"c",text:"Foundry Account Owner"},{id:"d",text:"Owner on the subscription"}],answer:"b",
      rationale:"Foundry User (formerly Azure AI User) is the least-privilege role for building and testing in a project. Owner-level roles can create resources and manage access."
    },
    {
      id:"f17",domain:"foundry",type:"single",
      prompt:"Two teams share a Foundry resource but need to keep their own agents, files, and deployments separate. What should be created?",
      options:[{id:"a",text:"Separate projects within the same Foundry resource"},{id:"b",text:"A separate Azure subscription for every agent"},{id:"c",text:"One project, with team names added to agent instructions"},{id:"d",text:"Separate system prompts in one playground"}],answer:"a",
      rationale:"A Foundry resource can contain multiple projects. Each project is a workspace for its own agents, files, and evaluations, while sharing the resource's governance and connections."
    },

    // Text and speech
    {
      id:"f18",domain:"foundry",type:"single",
      prompt:"A lightweight app must find and mask names, phone numbers, and email addresses in support tickets before storing them. Which Foundry Tools capability should it call?",
      options:[{id:"a",text:"Azure Language PII detection"},{id:"b",text:"Azure Speech text to speech"},{id:"c",text:"Image generation"},{id:"d",text:"Azure Translator"}],answer:"a",
      rationale:"PII detection in Azure Language identifies personal information and can return redacted text. The other services do not identify personal data."
    },
    {
      id:"f19",domain:"foundry",type:"single",
      prompt:"An app must turn each free-text complaint into JSON with the fields product, issue, and urgency. Which approach is simplest with a deployed language model?",
      options:[{id:"a",text:"Prompt the model with clear instructions and a JSON schema (structured output), then validate the result"},{id:"b",text:"Use speech synthesis"},{id:"c",text:"Use OCR on the complaint text"},{id:"d",text:"Ask for a long prose answer and copy fields manually"}],answer:"a",
      rationale:"Language models can extract fields when instructed, and structured outputs with a schema make the format reliable. Validating the JSON protects downstream code."
    },
    {
      id:"f20",domain:"foundry",type:"single",
      prompt:"Users record a spoken question in an app. The team wants a deployed model to respond without building a separate speech-to-text step. What should they use?",
      options:[{id:"a",text:"An audio-capable multimodal model, sending the audio as input"},{id:"b",text:"An image-generation model"},{id:"c",text:"An embedding model"},{id:"d",text:"Key phrase extraction"}],answer:"a",
      rationale:"Multimodal models that accept audio can reason over spoken input directly and, depending on the model, reply in text or audio. Embedding and image models cannot interpret speech."
    },
    {
      id:"f21",domain:"foundry",type:"single",
      prompt:"An app must read news headlines aloud in a specific neural voice by using Azure Speech in Foundry Tools. What should the code do?",
      options:[{id:"a",text:"Set the voice name in the speech configuration and use a speech synthesizer to speak the text"},{id:"b",text:"Use a speech recognizer on the headline text"},{id:"c",text:"Train a custom speech-recognition model"},{id:"d",text:"Call language detection"}],answer:"a",
      rationale:"Text to speech uses a synthesizer, and the speech configuration selects the neural voice. SSML can further adjust rate and pronunciation. A recognizer converts audio to text, the opposite direction."
    },
    {
      id:"f22",domain:"foundry",type:"order",
      prompt:"Arrange the steps for a simple voice assistant that uses Azure Speech and a text-only model.",
      options:[{id:"mic",text:"Capture audio from the microphone"},{id:"stt",text:"Recognise the speech as text"},{id:"llm",text:"Send the text to the deployed model and get a reply"},{id:"tts",text:"Synthesise the reply as speech and play it"}],answer:["mic","stt","llm","tts"],
      rationale:"Speech must be transcribed before a text-only model can use it. The model's text reply is then converted back to audio with text to speech."
    },
    {
      id:"f23",domain:"foundry",type:"yesno",
      prompt:"You are building an app with Azure Speech in Foundry Tools.",
      options:[{id:"s1",text:"The Speech SDK can recognise speech from a microphone or from an audio file."},{id:"s2",text:"Changing the synthesised voice requires training a custom voice model."},{id:"s3",text:"Speech translation can convert spoken audio into text in another language."}],
      answer:{s1:"yes",s2:"no",s3:"yes"},
      rationale:"Box 1: Yes. Audio input can come from a microphone, a file, or a stream. Box 2: No. You can choose from many prebuilt neural voices by name; custom voices are optional. Box 3: Yes. Speech translation outputs translated text and can also synthesise translated speech."
    },
    {
      id:"f24",domain:"foundry",type:"multi",
      prompt:"A customer-service app must turn each recorded call into a short written summary. Which two capabilities are needed if the model accepts only text?",
      options:[{id:"a",text:"Speech to text (transcription)"},{id:"b",text:"Summarisation by a language model or Azure Language"},{id:"c",text:"Text to speech"},{id:"d",text:"Object detection"},{id:"e",text:"Image generation"}],answer:["a","b"],
      rationale:"The audio must first be transcribed. The transcript can then be summarised by a language model or the Azure Language summarisation feature."
    },

    // Computer vision and image generation
    {
      id:"f25",domain:"foundry",type:"single",
      prompt:"A cooking app sends a photo of the inside of a fridge and asks a deployed multimodal model for a recipe. How should the request be built?",
      options:[{id:"a",text:"Include the image (as a URL or base64 data) together with the text question in the user message"},{id:"b",text:"Put the image file name in the system prompt"},{id:"c",text:"Run OCR first and send only the extracted text"},{id:"d",text:"Use an image-generation deployment"}],answer:"a",
      rationale:"Multimodal models accept image content items alongside text in the same input. OCR would capture only text in the image, not the food items shown."
    },
    {
      id:"f26",domain:"foundry",type:"yesno",
      prompt:"You are sending images to a deployed multimodal model.",
      options:[{id:"s1",text:"An image can be sent as a URL or as base64-encoded data."},{id:"s2",text:"The model can answer a question that combines the image's content with text instructions."},{id:"s3",text:"The image must be converted to text with OCR before the model can process it."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. Both are supported ways to supply image input. Box 2: Yes. Multimodal reasoning combines visual and text input. Box 3: No. The model interprets the image directly."
    },
    {
      id:"f27",domain:"foundry",type:"single",
      prompt:"A retailer wants an app that creates product mock-up images from text descriptions. What should the developer deploy and call?",
      options:[{id:"a",text:"An image-generation model, such as gpt-image-1, called with a prompt and options such as size and quality"},{id:"b",text:"An embedding model"},{id:"c",text:"Azure Speech"},{id:"d",text:"A Content Understanding document analyzer"}],answer:"a",
      rationale:"Image-generation models create images from prompts, with options for size, quality, and number of images. The other services analyse or transform other kinds of content."
    },
    {
      id:"f28",domain:"foundry",type:"single",
      prompt:"A designer wants to change only the background of a generated product image and keep the product exactly the same. Which technique should the app use?",
      options:[{id:"a",text:"Generate a completely new image from the same prompt"},{id:"b",text:"Edit the image with a mask that covers only the background (inpainting)"},{id:"c",text:"Crop the image"},{id:"d",text:"Lower the temperature of a text model"}],answer:"b",
      rationale:"Mask-based editing changes only the masked region and preserves the rest. Regenerating would probably change the product too."
    },
    {
      id:"f29",domain:"foundry",type:"multi",
      prompt:"Which two practices help an image-generation app follow responsible AI guidelines?",
      options:[{id:"a",text:"Keep content filters on for prompts and generated images"},{id:"b",text:"Tell users that images are AI-generated; supported models also embed content credentials"},{id:"c",text:"Turn off filtering to reduce latency"},{id:"d",text:"Publish images of real people without consent"},{id:"e",text:"Hide that the app uses AI"}],answer:["a","b"],
      rationale:"Content filters reduce harmful outputs, and disclosure, supported by C2PA content credentials on Azure OpenAI images, supports transparency. Removing safeguards or hiding AI use goes against responsible AI principles."
    },

    // Information extraction with Content Understanding
    {
      id:"f30",domain:"foundry",type:"single",caseStudy:"insurer",
      prompt:"Fabrikam needs vendor name, invoice total, and due date from garage repair invoices as quickly as possible. What should the app use?",
      options:[{id:"a",text:"A prebuilt invoice analyzer in Azure Content Understanding"},{id:"b",text:"An image-generation model"},{id:"c",text:"Text to speech"},{id:"d",text:"A custom speech model"}],answer:"a",
      rationale:"Content Understanding provides prebuilt analyzers for common documents such as invoices, returning structured fields without defining a schema yourself."
    },
    {
      id:"f31",domain:"foundry",type:"single",caseStudy:"insurer",
      prompt:"Fabrikam's own claim forms contain company-specific fields such as \"Policy band\" and \"Garage approval code\". How should the app extract them?",
      options:[{id:"a",text:"Create a custom analyzer with a field schema that describes the fields to extract"},{id:"b",text:"Use the prebuilt invoice analyzer unchanged"},{id:"c",text:"Run sentiment analysis on the forms"},{id:"d",text:"Generate images of the forms"}],answer:"a",
      rationale:"A custom analyzer defines the fields and their descriptions or types, so Content Understanding can extract organisation-specific data. A prebuilt invoice analyzer only returns the fields it was designed for."
    },
    {
      id:"f32",domain:"foundry",type:"match",label:"DRAG DROP",caseStudy:"insurer",
      prompt:"Match each Fabrikam input to the kind of output that Content Understanding can produce from it.",
      options:[{id:"i1",text:"A scanned repair estimate (PDF)"},{id:"i2",text:"A photo of vehicle damage"},{id:"i3",text:"A recorded phone call with a customer"},{id:"i4",text:"A dash-cam video clip"}],
      choices:[{id:"doc",text:"Markdown text and extracted fields, including tables"},{id:"img",text:"A description and fields about what the image shows"},{id:"aud",text:"A transcript with speakers, plus a summary and fields"},{id:"vid",text:"Time-stamped segments with key-frame descriptions"},{id:"syn",text:"Synthesised speech audio"}],
      answer:{i1:"doc",i2:"img",i3:"aud",i4:"vid"},
      rationale:"Content Understanding handles documents, images, audio, and video. It returns structured output appropriate to each modality, such as Markdown and fields for documents, descriptions for images, transcripts for audio, and segments for video. It does not synthesise speech."
    },
    {
      id:"f33",domain:"foundry",type:"yesno",
      prompt:"You are evaluating Azure Content Understanding in Foundry Tools.",
      options:[{id:"s1",text:"Content Understanding can process documents, images, audio, and video."},{id:"s2",text:"An analyzer defines how content is processed and which fields are extracted."},{id:"s3",text:"Content Understanding outputs plain text only, not structured fields."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. It is a multimodal extraction service. Box 2: Yes. Prebuilt and custom analyzers define processing and the field schema. Box 3: No. It returns structured fields, for example as JSON, as well as Markdown content."
    },
    {
      id:"f34",domain:"foundry",type:"order",caseStudy:"insurer",
      prompt:"Arrange the steps for Fabrikam's lightweight Content Understanding app.",
      options:[{id:"res",text:"Create a Foundry resource and set up the model deployments that Content Understanding uses"},{id:"ana",text:"Choose a prebuilt analyzer or create a custom analyzer with a field schema"},{id:"sub",text:"Submit a file for analysis and wait for the result"},{id:"use",text:"Use the returned fields and Markdown in the app"}],answer:["res","ana","sub","use"],
      rationale:"Content Understanding runs in a Foundry resource with supporting model deployments. An analyzer defines what to extract, analysis runs as an operation the client polls, and the app then consumes the structured result."
    }
  ]
};
