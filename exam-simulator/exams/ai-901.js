window.EXAM_CATALOG = window.EXAM_CATALOG || { defaultExam: "ai-901", exams: {} };
window.EXAM_CATALOG.exams["ai-901"] = {
  id: "ai-901",
  version: "2.0.0",
  code: "AI-901",
  title: "Microsoft Azure AI Fundamentals",
  heroTitle: "Start building<br><em>with AI.</em>",
  description: "Exam-difficulty practice on AI concepts, responsible AI, and hands-on Microsoft Foundry tasks: prompts, models, SDK code, agents, speech, vision, and Content Understanding.",
  durationMinutes: 60,
  source: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-901",
  domains: {
    concepts: "Identify AI concepts and capabilities",
    foundry: "Implement AI solutions by using Microsoft Foundry"
  },
  caseStudies: {
    travel: {
      title: "Contoso Travel assistant",
      body: `<p>Contoso Travel is building a customer assistant in Microsoft Foundry. Requirements:</p><ul><li>Answer only travel questions, in British English, and decline anything else politely.</li><li>Remember what a customer said earlier in the same chat, such as their destination.</li><li>Answer from Contoso's 200 brochure PDFs and cite them.</li><li>The production web app runs in Azure App Service and must not store any keys.</li></ul><p>The model is deployed in the project with the deployment name <code>travel-chat</code>.</p>`
    },
    insurer: {
      title: "Fabrikam Insurance claims",
      body: `<p>Fabrikam Insurance receives garage repair invoices (PDF), its own claim forms with company-specific fields, photos of vehicle damage, dash-cam videos, and recorded customer phone calls.</p><p>Fabrikam wants one service that extracts a consistent set of fields from all of these inputs, including some values that are not written anywhere and must be inferred, such as damage severity. Developers want to write as little custom code as possible.</p>`
    }
  },
  questions: [
    /* ===== Identify AI concepts and capabilities: 34 / 80 = 42.5% ===== */

    // Responsible AI
    {
      id:"k01",domain:"concepts",type:"single",
      prompt:"A CV-screening model was trained mostly on applications from graduates of one university. It ranks equally experienced graduates from other universities lower. The team retrains it on a broader, balanced dataset. Which responsible AI principle does the retraining primarily address?",
      options:[{id:"a",text:"Inclusiveness"},{id:"b",text:"Fairness"},{id:"c",text:"Reliability and safety"},{id:"d",text:"Accountability"}],answer:"b",
      rationale:"Fairness is about the system treating similarly situated people in the same way. Here, equally qualified applicants get different outcomes depending on their group. Inclusiveness is the closest distractor, but it focuses on designing systems that people of all abilities and backgrounds can use and benefit from, rather than correcting biased outcomes."
    },
    {
      id:"k02",domain:"concepts",type:"single",
      prompt:"After an automated credit decision, customers can see the main factors that influenced the result and a plain-language explanation of how the system is used. Which principle does this most directly support?",
      options:[{id:"a",text:"Accountability"},{id:"b",text:"Fairness"},{id:"c",text:"Transparency"},{id:"d",text:"Privacy and security"}],answer:"c",
      rationale:"Transparency covers explaining how and why a system reaches its outputs, and being open about its use and limitations. Accountability is the closest distractor, but it is about which people are answerable for the system and how oversight works, not about explaining decisions to users."
    },
    {
      id:"k03",domain:"concepts",type:"single",
      prompt:"An organisation requires a named approver before any model is deployed, keeps an audit trail of model changes, and defines who responds when the system causes harm. Which principle is this?",
      options:[{id:"a",text:"Transparency"},{id:"b",text:"Reliability and safety"},{id:"c",text:"Inclusiveness"},{id:"d",text:"Accountability"}],answer:"d",
      rationale:"Accountability means people and organisations remain answerable for AI systems, through governance, approvals, auditability, and incident ownership. An audit trail can also help transparency, but the purpose described here is assigning responsibility."
    },
    {
      id:"k04",domain:"concepts",type:"single",
      prompt:"A team recruits people who use screen readers, people with limited mobility, and non-native speakers to test an AI app early in its design, and changes the design based on their feedback. Which principle does this demonstrate?",
      options:[{id:"a",text:"Fairness"},{id:"b",text:"Inclusiveness"},{id:"c",text:"Transparency"},{id:"d",text:"Reliability and safety"}],answer:"b",
      rationale:"Inclusiveness means designing AI that empowers and engages everyone, including people with disabilities and people from different backgrounds, ideally by involving them in the design. Fairness is about equitable outcomes between groups rather than accessible design."
    },
    {
      id:"k05",domain:"concepts",type:"single",
      prompt:"An autonomous delivery robot is tested at night, in fog, and on icy pavements. It is also designed to stop safely if a sensor fails. Which principle is being addressed?",
      options:[{id:"a",text:"Reliability and safety"},{id:"b",text:"Accountability"},{id:"c",text:"Fairness"},{id:"d",text:"Privacy and security"}],answer:"a",
      rationale:"Reliability and safety means systems perform consistently under expected and unexpected conditions and fail safely. Testing edge conditions and building in a safe stop are typical practices."
    },
    {
      id:"k06",domain:"concepts",type:"single",
      prompt:"A clinical note summariser must ensure developers cannot read raw patient notes, encrypt data at rest, and delete source data after 30 days. Which principle do these requirements address?",
      options:[{id:"a",text:"Transparency"},{id:"b",text:"Accountability"},{id:"c",text:"Privacy and security"},{id:"d",text:"Reliability and safety"}],answer:"c",
      rationale:"Privacy and security covers protecting personal data through access control, encryption, and retention or deletion rules. Accountability would cover who is answerable for the system, not how data is protected."
    },
    {
      id:"k07",domain:"concepts",type:"match",label:"DRAG DROP",
      prompt:"Match each practice to the responsible AI principle it most directly supports. Each principle may be used once or not at all.",
      options:[{id:"p1",text:"Publishing a model card that lists training data sources and known limitations"},{id:"p2",text:"Allowing a human reviewer to override an automated claim denial"},{id:"p3",text:"Alerting the team when the model's accuracy drops in production"},{id:"p4",text:"Aggregating results so that no individual can be identified in reports"},{id:"p5",text:"Measuring whether error rates differ between demographic groups"}],
      choices:[{id:"tra",text:"Transparency"},{id:"acc",text:"Accountability"},{id:"rel",text:"Reliability and safety"},{id:"priv",text:"Privacy and security"},{id:"fair",text:"Fairness"},{id:"inc",text:"Inclusiveness"}],
      answer:{p1:"tra",p2:"acc",p3:"rel",p4:"priv",p5:"fair"},
      rationale:"A model card documents how a system works and where it is limited (transparency). Human override keeps people responsible for outcomes (accountability). Production monitoring catches failures (reliability and safety). Aggregation protects individuals' data (privacy and security). Comparing error rates across groups tests for unfair outcomes (fairness)."
    },
    {
      id:"k08",domain:"concepts",type:"yesno",
      prompt:"You are reviewing statements about responsible AI.",
      options:[{id:"s1",text:"Telling users that content was generated by AI supports transparency."},{id:"s2",text:"If a model is highly accurate on average, it is fair."},{id:"s3",text:"Accountability means the AI system itself is responsible for its decisions."}],
      answer:{s1:"yes",s2:"no",s3:"no"},
      rationale:"Box 1: Yes. Disclosing AI use is a core transparency practice. Box 2: No. High average accuracy can hide much worse performance for some groups, so fairness has to be measured across groups. Box 3: No. Accountability means the people and organisations that design and deploy AI remain responsible, not the system."
    },

    // How generative models work, choosing models, configuration
    {
      id:"k09",domain:"concepts",type:"multi",
      prompt:"A deployed model has a 128,000-token context window. Which three items count towards this limit in a single request?",
      options:[{id:"a",text:"The system message"},{id:"b",text:"The previous conversation turns included in the request"},{id:"c",text:"The tokens the model generates in its response"},{id:"d",text:"The deployment name"},{id:"e",text:"The data the model was originally trained on"}],answer:["a","b","c"],
      rationale:"The context window covers everything the model processes in one request: instructions, history, the user's input, any grounding data, and the generated output. Training data is not part of the request, and the deployment name only routes the call."
    },
    {
      id:"k10",domain:"concepts",type:"single",
      prompt:"Which part of a transformer-based language model lets it weigh how relevant each token is to the other tokens in the input when it builds its understanding of the text?",
      options:[{id:"a",text:"The tokenizer"},{id:"b",text:"The temperature setting"},{id:"c",text:"The attention mechanism"},{id:"d",text:"The stop sequence"}],answer:"c",
      rationale:"Self-attention computes how strongly each token relates to every other token, which lets transformers capture context. The tokenizer only splits text into tokens, and temperature affects sampling at output time."
    },
    {
      id:"k11",domain:"concepts",type:"single",
      prompt:"Users searching for \"vehicle cover\" should find documents about \"car insurance\", even though the words differ. Which approach makes this possible?",
      options:[{id:"a",text:"Exact keyword matching on an inverted index"},{id:"b",text:"Comparing embedding vectors for similarity"},{id:"c",text:"Counting how many tokens each document contains"},{id:"d",text:"Running OCR on the documents"}],answer:"b",
      rationale:"Embeddings place semantically similar text close together in vector space, so similarity search (for example cosine similarity) finds matches by meaning. Keyword matching needs the same words, and token counts carry no meaning."
    },
    {
      id:"k12",domain:"concepts",type:"single",
      prompt:"A model confidently gives an incorrect answer about your company's leave policy. The policy is internal and was never in the model's training data. What is the most effective fix?",
      options:[{id:"a",text:"Lower the temperature"},{id:"b",text:"Deploy a model with more parameters"},{id:"c",text:"Increase the maximum output tokens"},{id:"d",text:"Retrieve the relevant policy text and include it in the prompt, instructing the model to answer from it"}],answer:"d",
      rationale:"The model cannot know information it never saw, so grounding (retrieval-augmented generation) supplies the facts at request time. Lowering temperature is the tempting distractor, but it only makes output less random; it cannot add missing knowledge."
    },
    {
      id:"k13",domain:"concepts",type:"single",
      prompt:"You need the cheapest model in the Foundry catalog that accepts image input and scores well on a reasoning benchmark. What is the most efficient way to shortlist candidates?",
      options:[{id:"a",text:"Deploy every model and test each one manually"},{id:"b",text:"Use the model catalog's capability filters, then compare candidates with the model leaderboards and benchmarks"},{id:"c",text:"Choose the model with the newest release date"},{id:"d",text:"Choose the model with the largest context window"}],answer:"b",
      rationale:"The catalog can filter by capabilities such as image input, and the leaderboards compare quality, cost, and throughput, so you can shortlist before deploying. Testing on your own data then confirms the choice."
    },
    {
      id:"k14",domain:"concepts",type:"match",label:"DRAG DROP",
      prompt:"Match each requirement to the most appropriate type of model. Each type may be used once or not at all.",
      options:[{id:"m1",text:"Produce a vector for each support ticket so similar tickets can be clustered"},{id:"m2",text:"Transcribe a recorded podcast"},{id:"m3",text:"Solve multistep logic problems where accuracy matters more than latency"},{id:"m4",text:"Summarise short notes offline on a laptop"},{id:"m5",text:"Explain a diagram shown in a scanned page"}],
      choices:[{id:"emb",text:"Embedding model"},{id:"stt",text:"Speech-to-text model"},{id:"rsn",text:"Reasoning model"},{id:"slm",text:"Small language model"},{id:"mm",text:"Multimodal model"},{id:"img",text:"Image-generation model"}],
      answer:{m1:"emb",m2:"stt",m3:"rsn",m4:"slm",m5:"mm"},
      rationale:"Embedding models output vectors for clustering and search. Speech-to-text models transcribe audio. Reasoning models spend extra computation on hard problems. Small language models suit local, low-resource tasks. Multimodal models interpret images such as diagrams. Image-generation models create images rather than interpreting them."
    },
    {
      id:"k15",domain:"concepts",type:"single",
      prompt:"In long answers, a model keeps repeating the same phrases. Which parameter change most directly reduces this?",
      options:[{id:"a",text:"Decrease temperature"},{id:"b",text:"Increase the frequency penalty"},{id:"c",text:"Increase the maximum output tokens"},{id:"d",text:"Add a stop sequence"}],answer:"b",
      rationale:"A frequency penalty lowers the probability of tokens in proportion to how often they have already appeared, which reduces repetition. Decreasing temperature tends to make output more deterministic and can increase repetition."
    },
    {
      id:"k16",domain:"concepts",type:"single",
      prompt:"An app asks a model for a list of items. Generation must end as soon as the model writes the marker ###. What should be configured?",
      options:[{id:"a",text:"A stop sequence"},{id:"b",text:"A lower maximum output token limit"},{id:"c",text:"A presence penalty"},{id:"d",text:"Top P set to 0"}],answer:"a",
      rationale:"A stop sequence tells the model to stop generating when that text appears. A token limit stops at a fixed length regardless of content."
    },
    {
      id:"k17",domain:"concepts",type:"yesno",
      prompt:"You are comparing Foundry model deployment types.",
      options:[{id:"s1",text:"A Global Standard deployment can process requests in any Azure region."},{id:"s2",text:"A Data Zone deployment keeps processing within a geographic zone, such as the EU or the US."},{id:"s3",text:"A Provisioned deployment is billed only for the tokens that are actually processed."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. Global deployments route traffic to available capacity worldwide. Box 2: Yes. Data Zone deployments restrict processing to the chosen zone. Box 3: No. Provisioned deployments reserve throughput units and are billed for the reserved capacity, whether or not it is used."
    },
    {
      id:"k18",domain:"concepts",type:"single",
      prompt:"A developer sets Top P to 0.1 for a deployment. What effect does this have?",
      options:[{id:"a",text:"The response is limited to 10% of the maximum output tokens"},{id:"b",text:"The model samples only from the smallest set of most likely tokens whose combined probability reaches 10%, making output more focused"},{id:"c",text:"The model repeats 10% fewer words"},{id:"d",text:"Only 10% of requests are processed"}],answer:"b",
      rationale:"Top P (nucleus sampling) limits choices to the most probable tokens whose cumulative probability reaches P. A low value narrows the choices, similar in effect to a low temperature. It is generally recommended to adjust either temperature or Top P, not both."
    },

    // AI workloads
    {
      id:"k19",domain:"concepts",type:"single",
      prompt:"For each product review, a retailer needs to know which features are mentioned, such as \"battery\" or \"screen\", and whether the customer's opinion of each feature is positive or negative. Which capability fits best?",
      options:[{id:"a",text:"Key phrase extraction"},{id:"b",text:"Document-level sentiment analysis"},{id:"c",text:"Sentiment analysis with opinion mining (aspect-based sentiment)"},{id:"d",text:"Named entity recognition"}],answer:"c",
      rationale:"Opinion mining links sentiment to specific targets (aspects) in the text. Key phrase extraction finds the features but not the opinion about each, and document-level sentiment gives only one overall score."
    },
    {
      id:"k20",domain:"concepts",type:"single",
      prompt:"Before emails are archived, a compliance team must find and mask credit card numbers, passport numbers, and phone numbers. Which text analysis capability is designed for this?",
      options:[{id:"a",text:"Named entity recognition"},{id:"b",text:"Key phrase extraction"},{id:"c",text:"Entity linking"},{id:"d",text:"PII detection"}],answer:"d",
      rationale:"PII detection identifies personal and sensitive information categories, such as card numbers and passport numbers, and can return redacted text. General named entity recognition finds people, places, and organisations, but it is not the feature designed for sensitive data categories and redaction."
    },
    {
      id:"k21",domain:"concepts",type:"single",
      prompt:"A research tool must work out whether \"Mercury\" in a document means the planet, the chemical element, or the record label, and link to the matching knowledge-base article. Which capability is required?",
      options:[{id:"a",text:"Entity linking"},{id:"b",text:"Named entity recognition"},{id:"c",text:"Language detection"},{id:"d",text:"Key phrase extraction"}],answer:"a",
      rationale:"Entity linking resolves which real-world entity a mention refers to and links it to a knowledge base. Named entity recognition can label \"Mercury\" as an entity, but it does not resolve the ambiguity or link it."
    },
    {
      id:"k22",domain:"concepts",type:"multi",
      prompt:"From call transcripts, a contact centre wants to know what customers talk about, how they feel, and which products and places they mention. Which three capabilities should be used?",
      options:[{id:"a",text:"Key phrase extraction"},{id:"b",text:"Sentiment analysis"},{id:"c",text:"Named entity recognition"},{id:"d",text:"Language detection"},{id:"e",text:"Text to speech"}],answer:["a","b","c"],
      rationale:"Key phrases capture topics, sentiment captures how customers feel, and NER identifies products and locations. Language detection is useful only if the language is unknown, which the scenario does not mention, and text to speech produces audio."
    },
    {
      id:"k23",domain:"concepts",type:"single",
      prompt:"For legal reasons, a summary of each contract must contain only sentences copied verbatim from the original. Which approach meets this requirement?",
      options:[{id:"a",text:"Abstractive summarisation"},{id:"b",text:"Extractive summarisation"},{id:"c",text:"Key phrase extraction"},{id:"d",text:"A generative model prompted to summarise in its own words"}],answer:"b",
      rationale:"Extractive summarisation selects the most important existing sentences. Abstractive summarisation and free-form generation write new sentences, which breaks the verbatim requirement."
    },
    {
      id:"k24",domain:"concepts",type:"single",
      prompt:"A meeting transcript must label which parts were spoken by Speaker 1, Speaker 2, and so on. The speakers do not need to be identified by name. Which speech feature provides this?",
      options:[{id:"a",text:"Speaker recognition (verification)"},{id:"b",text:"Language identification"},{id:"c",text:"Speaker diarisation"},{id:"d",text:"Speech synthesis"}],answer:"c",
      rationale:"Diarisation separates a transcript by speaker turns without needing to know who the speakers are. Speaker recognition verifies or identifies a known person from their voice profile, which is a different and more sensitive capability."
    },
    {
      id:"k25",domain:"concepts",type:"single",
      prompt:"A university needs English text from recorded French lectures. Which approach is correct?",
      options:[{id:"a",text:"Send the audio file directly to Azure Translator text translation"},{id:"b",text:"Use speech translation, with French as the source language and English as the target"},{id:"c",text:"Use English speech-to-text on the French audio"},{id:"d",text:"Use text to speech with an English voice"}],answer:"b",
      rationale:"Speech translation recognises French speech and returns English text, or alternatively you can transcribe and then translate. Text translation works on text, not audio, and recognising French audio with an English speech-to-text setting gives poor results."
    },
    {
      id:"k26",domain:"concepts",type:"yesno",
      prompt:"You are describing speech capabilities.",
      options:[{id:"s1",text:"Speech recognition can transcribe audio in real time or in batches from stored files."},{id:"s2",text:"A custom speech model is mainly used to make synthesised audio sound like a specific person."},{id:"s3",text:"SSML can add pauses and change the pitch of synthesised speech."}],
      answer:{s1:"yes",s2:"no",s3:"yes"},
      rationale:"Box 1: Yes. Real-time and batch transcription are both supported. Box 2: No. Custom speech improves recognition accuracy, for example for domain vocabulary or accents; custom voice is the synthesis feature. Box 3: Yes. SSML controls prosody, including pauses, pitch, and rate."
    },
    {
      id:"k27",domain:"concepts",type:"single",
      prompt:"A radiology tool must mark the exact pixel outline of each abnormal region in a scan, not just a rectangle around it. Which computer vision task is required?",
      options:[{id:"a",text:"Image classification"},{id:"b",text:"Object detection"},{id:"c",text:"Optical character recognition"},{id:"d",text:"Image segmentation"}],answer:"d",
      rationale:"Segmentation labels pixels, producing precise outlines. Object detection returns bounding boxes, which is the close distractor, and classification labels the whole image."
    },
    {
      id:"k28",domain:"concepts",type:"single",
      prompt:"An animal shelter wants each uploaded photo labelled as cat, dog, or rabbit. Each photo shows one animal, and the location of the animal in the photo is not needed. Which task fits best?",
      options:[{id:"a",text:"Image classification"},{id:"b",text:"Object detection"},{id:"c",text:"Image segmentation"},{id:"d",text:"Image generation"}],answer:"a",
      rationale:"Classification assigns one label to the whole image, which is all that is needed. Detection and segmentation also locate objects, which adds complexity the requirement does not ask for."
    },
    {
      id:"k29",domain:"concepts",type:"single",
      prompt:"A stadium wants to count how many people appear in crowd photos. Nobody may be identified. Which capability is appropriate?",
      options:[{id:"a",text:"Facial recognition to match each face against a database"},{id:"b",text:"Speaker recognition"},{id:"c",text:"Person detection, counting the detected people"},{id:"d",text:"OCR"}],answer:"c",
      rationale:"Detecting and counting people answers the question without identifying anyone. Facial recognition identifies individuals, raises privacy concerns, and is a restricted (Limited Access) capability in Azure."
    },
    {
      id:"k30",domain:"concepts",type:"single",
      prompt:"An online shop needs a short natural-language sentence describing each product photo so that customers can search by description. Which capability is the best fit?",
      options:[{id:"a",text:"OCR"},{id:"b",text:"Image captioning or description by a multimodal model"},{id:"c",text:"Image generation"},{id:"d",text:"Image classification into three fixed categories"}],answer:"b",
      rationale:"Captioning produces a sentence that describes the image content. OCR reads only text in the image, and fixed-category classification would not describe each photo."
    },
    {
      id:"k31",domain:"concepts",type:"single",
      prompt:"A designer wants several variations of the company's existing logo that keep its overall shape. Which approach is most suitable?",
      options:[{id:"a",text:"Text-to-image generation from a description only"},{id:"b",text:"OCR on the logo"},{id:"c",text:"Object detection on the logo"},{id:"d",text:"An image-generation model that accepts the existing logo as an input image for editing"}],answer:"d",
      rationale:"Image editing or image-to-image generation uses the supplied image as a reference, so the output keeps its structure. A text-only prompt cannot reliably reproduce the existing shape."
    },
    {
      id:"k32",domain:"concepts",type:"match",label:"DRAG DROP",
      prompt:"Match each requirement to the information-extraction technique that addresses it. Each technique may be used once or not at all.",
      options:[{id:"x1",text:"Read printed text from a scanned receipt"},{id:"x2",text:"Recognise the rows and columns of a table in a PDF"},{id:"x3",text:"Return \"Total\" and \"Merchant\" as named values"},{id:"x4",text:"Find the moment a product appears in a video"},{id:"x5",text:"Make a podcast's spoken content searchable"}],
      choices:[{id:"ocr",text:"OCR"},{id:"lay",text:"Layout analysis"},{id:"fld",text:"Field extraction"},{id:"vid",text:"Video analysis with time-stamped segments"},{id:"tr",text:"Speech transcription"},{id:"sent",text:"Sentiment analysis"}],
      answer:{x1:"ocr",x2:"lay",x3:"fld",x4:"vid",x5:"tr"},
      rationale:"OCR reads text, layout analysis recovers structure such as tables, and field extraction maps content to named values. Video analysis locates events in time, and transcription turns speech into searchable text."
    },
    {
      id:"k33",domain:"concepts",type:"single",
      prompt:"A shopping agent should remember a customer's preferred size and brand across separate visits on different days. Which agent component provides this?",
      options:[{id:"a",text:"The model's context window"},{id:"b",text:"The conversation for the current session"},{id:"c",text:"Long-term memory stored outside individual conversations"},{id:"d",text:"The agent's system instructions"}],answer:"c",
      rationale:"A conversation keeps context only within one session, and the context window is a per-request limit. Remembering facts across sessions needs a memory store that persists independently. Putting customer data in the shared instructions would apply it to every user."
    },
    {
      id:"k34",domain:"concepts",type:"single",
      prompt:"Which scenario is best described as agentic AI?",
      options:[{id:"a",text:"Summarising a document that a user pastes in"},{id:"b",text:"Generating an image from a prompt"},{id:"c",text:"Translating a paragraph into Spanish"},{id:"d",text:"Monitoring a shared inbox, looking up each order in the ERP system, issuing refunds under £50, and emailing the customer"}],answer:"d",
      rationale:"Agentic AI pursues a goal across several steps, deciding which tools to use and taking actions. The other options are single generative tasks with no tools or actions."
    },

    /* ===== Implement AI solutions by using Microsoft Foundry: 46 / 80 = 57.5% ===== */

    // Prompts, portal, and deployments
    {
      id:"f01",domain:"foundry",type:"single",caseStudy:"travel",
      prompt:"Contoso's system message says \"Focus on travel.\" During testing, the assistant still answers questions about cooking. Which change is most likely to fix this?",
      options:[{id:"a",text:"Move \"Focus on travel\" into each user message"},{id:"b",text:"Rewrite the system message to state the allowed scope explicitly, say what to do with out-of-scope requests, and include an example polite refusal"},{id:"c",text:"Increase the temperature"},{id:"d",text:"Increase the maximum output tokens"}],answer:"b",
      rationale:"Vague instructions are weakly followed. Explicit scope, an explicit fallback behaviour, and an example make the requirement clear. Users would not reliably add the rule themselves, and temperature or length settings do not affect scope."
    },
    {
      id:"f02",domain:"foundry",type:"multi",
      prompt:"An app parses a model's response as JSON, but the format varies between runs. Which two changes are most likely to make the output reliably parseable?",
      options:[{id:"a",text:"Request structured output by supplying a JSON schema"},{id:"b",text:"Include an example of the exact JSON expected"},{id:"c",text:"Increase the temperature"},{id:"d",text:"Remove the system message"},{id:"e",text:"Increase the presence penalty"}],answer:["a","b"],
      rationale:"A schema (structured outputs) constrains the shape, and an example shows it concretely. Higher temperature and presence penalty increase variation, which is the opposite of what is needed."
    },
    {
      id:"f03",domain:"foundry",type:"match",label:"DRAG DROP",
      prompt:"Match each prompt change to the prompt-engineering technique it uses. Each technique may be used once or not at all.",
      options:[{id:"t1",text:"Add three input-and-answer examples before the real question"},{id:"t2",text:"Start the system message with \"You are a UK tax adviser who writes for beginners\""},{id:"t3",text:"Add the retrieved policy text and say \"Answer only from the text above\""},{id:"t4",text:"Ask the model to work through the problem step by step before giving its final answer"},{id:"t5",text:"Split a complex task into a sequence of smaller prompts, passing each output to the next"}],
      choices:[{id:"few",text:"Few-shot prompting"},{id:"role",text:"Assigning a role or persona"},{id:"gr",text:"Grounding"},{id:"cot",text:"Chain-of-thought prompting"},{id:"chain",text:"Prompt chaining"},{id:"zero",text:"Zero-shot prompting"}],
      answer:{t1:"few",t2:"role",t3:"gr",t4:"cot",t5:"chain"},
      rationale:"Examples are few-shot prompting, and a persona sets role and tone. Supplying source text is grounding. Step-by-step reasoning is chain-of-thought. Breaking a task into linked prompts is prompt chaining. Zero-shot means no examples are given."
    },
    {
      id:"f04",domain:"foundry",type:"yesno",
      prompt:"You are reviewing prompt-design statements.",
      options:[{id:"s1",text:"Models generally prioritise system-message instructions, but the system message is not a security boundary."},{id:"s2",text:"Adding \"Do not make anything up\" to a prompt guarantees that the model will not fabricate information."},{id:"s3",text:"Clearly separating instructions from supplied content, for example with delimiters, helps the model tell them apart."}],
      answer:{s1:"yes",s2:"no",s3:"yes"},
      rationale:"Box 1: Yes. System messages steer behaviour, but determined users can sometimes override them, so they must be combined with other safeguards. Box 2: No. Instructions reduce but cannot eliminate fabrication; grounding and evaluation are still needed. Box 3: Yes. Delimiters reduce confusion between instructions and data."
    },
    {
      id:"f05",domain:"foundry",type:"single",
      prompt:"After a team deploys a model, the chat playground starts returning HTTP 429 (Too Many Requests) errors when several testers use it at once. What should be adjusted?",
      options:[{id:"a",text:"The deployment's tokens-per-minute (TPM) rate limit, within the available quota"},{id:"b",text:"The temperature"},{id:"c",text:"The system message length"},{id:"d",text:"The Top P value"}],answer:"a",
      rationale:"A 429 error means the deployment's rate limit has been exceeded. Raising the TPM allocation, if quota allows, or using a deployment type with more capacity addresses it. Sampling parameters do not change throughput limits."
    },
    {
      id:"f06",domain:"foundry",type:"order",
      prompt:"Arrange the steps to take a model from the Foundry catalog into a simple app.",
      options:[{id:"cmp",text:"Compare candidate models in the catalog and select one"},{id:"dep",text:"Deploy the model with a deployment name and type"},{id:"play",text:"Test prompts and parameters in the chat playground"},{id:"code",text:"Copy the endpoint and sample code, and call the deployment from the app"}],answer:["cmp","dep","play","code"],
      rationale:"Choose the model, create a deployment, iterate on prompts and settings in the playground, and then use the deployment's endpoint and name from code."
    },
    {
      id:"f07",domain:"foundry",type:"single",
      prompt:"In the playground, a developer tuned a system message and set temperature to 0.2. The app now calls the same deployment, but responses behave differently. What is the most likely reason?",
      options:[{id:"a",text:"Playground settings are saved into the deployment, so the app must be using a different region"},{id:"b",text:"The deployment needs to be redeployed after playground testing"},{id:"c",text:"The app must send the same system message and parameter values in its own requests; playground settings are not stored in the deployment"},{id:"d",text:"Apps cannot set temperature"}],answer:"c",
      rationale:"The playground is a client. Its system message and parameters are sent with each request, but they are not saved on the deployment. The app must send the same values to get the same behaviour."
    },
    {
      id:"f08",domain:"foundry",type:"single",
      prompt:"A student's app is used only occasionally for testing. They want to pay only for what they use, with no reserved capacity. Which deployment type should they choose?",
      options:[{id:"a",text:"Provisioned"},{id:"b",text:"Global Standard"},{id:"c",text:"Data Zone Provisioned"},{id:"d",text:"Global Provisioned"}],answer:"b",
      rationale:"Standard deployment types are pay-per-token with no reserved capacity, which suits light or variable use. Provisioned types reserve throughput and are billed for that capacity even when idle."
    },
    {
      id:"f09",domain:"foundry",type:"single",caseStudy:"travel",
      prompt:"Contoso's code calls responses.create(model=\"gpt-4.1\", ...) and fails with a \"deployment not found\" error, even though gpt-4.1 is deployed in the project. What is the fix?",
      options:[{id:"a",text:"Set model=\"travel-chat\""},{id:"b",text:"Redeploy gpt-4.1 in another region"},{id:"c",text:"Set model to the project name"},{id:"d",text:"Add an API key to the request"}],answer:"a",
      rationale:"Requests are routed by deployment name. Contoso deployed the model as travel-chat, so that name must be used, not the underlying model name."
    },

    // Foundry SDK chat client
    {
      id:"f10",domain:"foundry",type:"match",label:"HOTSPOT",
      prompt:"Complete the Python code so that it sends a prompt to the travel-chat deployment by using the Foundry SDK and prints the generated text. Select the correct option for each box.",
      code:`from azure.identity import DefaultAzureCredential
from azure.ai.projects import AIProjectClient

project = AIProjectClient(
    endpoint=PROJECT_ENDPOINT,
    credential=[ Box 1 ],
)
client = project.[ Box 2 ]
response = client.responses.create(
    model=[ Box 3 ],
    input="Suggest three day trips from Lisbon.",
)
print(response.[ Box 4 ])`,
      options:[{id:"b1",text:"Box 1"},{id:"b2",text:"Box 2"},{id:"b3",text:"Box 3"},{id:"b4",text:"Box 4"}],
      choices:[{id:"dac",text:"DefaultAzureCredential()"},{id:"akc",text:"AzureKeyCredential(API_KEY)"},{id:"goc",text:"get_openai_client()"},{id:"agt",text:"agents.get(\"travel-chat\")"},{id:"dep",text:"\"travel-chat\""},{id:"fam",text:"\"gpt-4.1\""},{id:"ot",text:"output_text"},{id:"cmc",text:"choices[0].message.content"}],
      answer:{b1:"dac",b2:"goc",b3:"dep",b4:"ot"},
      rationale:"The project client authenticates with a token credential such as DefaultAzureCredential; it does not accept an API key credential. get_openai_client() returns an authenticated OpenAI client. The model argument takes the deployment name. With the Responses API, response.output_text holds the generated text, whereas choices[0].message.content is the Chat Completions response shape."
    },
    {
      id:"f11",domain:"foundry",type:"single",
      prompt:"Which endpoint must you pass to AIProjectClient?",
      options:[{id:"a",text:"https://<resource>.openai.azure.com/openai/v1/"},{id:"b",text:"https://ai.azure.com/<project>"},{id:"c",text:"https://<resource>.cognitiveservices.azure.com/"},{id:"d",text:"https://<resource>.services.ai.azure.com/api/projects/<project>"}],answer:"d",
      rationale:"The project client needs the project endpoint, shown on the project's overview page. The /openai/v1/ URL is the OpenAI-compatible endpoint, which is used directly with the OpenAI library, not with AIProjectClient. The portal URL is not an API endpoint."
    },
    {
      id:"f12",domain:"foundry",type:"single",caseStudy:"travel",
      prompt:"Contoso's code uses DefaultAzureCredential. It works on a developer laptop after az login but fails with an authentication error in Azure App Service. Keys must not be stored. What should be done?",
      options:[{id:"a",text:"Add the resource key to the App Service settings and use it in code"},{id:"b",text:"Run az login on the App Service instance"},{id:"c",text:"Increase the request timeout"},{id:"d",text:"Enable a managed identity on the App Service and grant it an appropriate Foundry role on the project"}],answer:"d",
      rationale:"In Azure, DefaultAzureCredential can use a managed identity, but the identity must exist and must be granted a role, such as Foundry User, on the project. Storing a key breaks the requirement, and az login is an interactive developer sign-in."
    },
    {
      id:"f13",domain:"foundry",type:"single",
      prompt:"A developer is signed in with az login and holds the Contributor role on the Foundry resource. Calls to responses.create through the project return a permission error. Which role assignment fixes this with least privilege?",
      options:[{id:"a",text:"Owner on the subscription"},{id:"b",text:"Foundry User on the project"},{id:"c",text:"Reader on the resource group"},{id:"d",text:"Foundry Account Owner on the resource"}],answer:"b",
      rationale:"Contributor and Account Owner grant management-plane (control) permissions, not the data actions needed to call models and agents. Foundry User grants data actions for building and testing in the project. Reader is read-only, and Owner is excessive."
    },
    {
      id:"f14",domain:"foundry",type:"single",caseStudy:"travel",
      prompt:"Contoso's client sends each new message with responses.create, but the model has forgotten the destination the customer gave two turns earlier. Which change provides multi-turn context?",
      options:[{id:"a",text:"Create a conversation once and pass its ID with every responses.create call"},{id:"b",text:"Lower the temperature"},{id:"c",text:"Add the customer's destination to the shared system message for all customers"},{id:"d",text:"Create a new deployment for each customer"}],answer:"a",
      rationale:"Each model call is stateless. A conversation (or chaining with the previous response ID, or resending the history) carries earlier turns. Adding one customer's data to shared instructions would leak it to every other customer."
    },
    {
      id:"f15",domain:"foundry",type:"yesno",
      prompt:"You are writing a Python client with the Foundry SDK.",
      options:[{id:"s1",text:"With the Responses API, response.output_text contains the model's generated text."},{id:"s2",text:"AIProjectClient can authenticate by passing the resource's API key."},{id:"s3",text:"If the deployment is renamed, the model value in the code must also change."}],
      answer:{s1:"yes",s2:"no",s3:"yes"},
      rationale:"Box 1: Yes. output_text is a convenience property that holds the generated text. Box 2: No. The project client uses Microsoft Entra ID token credentials. Key-based calls go through the OpenAI-compatible endpoint with the OpenAI library instead. Box 3: Yes. The model argument is the deployment name."
    },
    {
      id:"f16",domain:"foundry",type:"single",
      prompt:"A developer wants to use the standard OpenAI Python library with an API key, without the Foundry SDK, to call a model deployed in a Foundry resource. Which base_url should the OpenAI client use?",
      options:[{id:"a",text:"https://<resource>.services.ai.azure.com/api/projects/<project>"},{id:"b",text:"https://api.openai.com/v1/"},{id:"c",text:"https://<resource>.openai.azure.com/openai/v1/"},{id:"d",text:"https://management.azure.com/"}],answer:"c",
      rationale:"The OpenAI-compatible v1 endpoint on the resource works with the standard OpenAI client and an API key or Entra token. The project endpoint is for AIProjectClient, and api.openai.com is OpenAI's own service, not your Azure deployment."
    },

    // Agents
    {
      id:"f17",domain:"foundry",type:"order",caseStudy:"travel",
      prompt:"Arrange the steps to create and test Contoso's brochure agent in the Foundry portal.",
      options:[{id:"new",text:"Create an agent and select the travel-chat deployment"},{id:"ins",text:"Write instructions covering scope, British English, and refusals"},{id:"fs",text:"Add the file search tool and upload the brochure PDFs"},{id:"pg",text:"Test in the agent playground, checking answers and citations"}],answer:["new","ins","fs","pg"],
      rationale:"An agent needs a model, then instructions, then tools and knowledge. Testing in the playground confirms that instructions and retrieval work together before the agent is used from code."
    },
    {
      id:"f18",domain:"foundry",type:"single",caseStudy:"travel",
      prompt:"Contoso's agent must answer from the 200 brochure PDFs and cite the brochure it used. What should be configured?",
      options:[{id:"a",text:"Paste all of the brochure text into the agent's instructions"},{id:"b",text:"Code Interpreter with the brochures uploaded"},{id:"c",text:"Grounding with Bing Search"},{id:"d",text:"The file search tool with the brochures uploaded to its vector store"}],answer:"d",
      rationale:"File search chunks, embeds, and retrieves passages from uploaded files and supports citations. 200 PDFs would not fit in instructions. Code Interpreter can open files, but it is for running code, not retrieval with citations. Bing searches the public web."
    },
    {
      id:"f19",domain:"foundry",type:"match",label:"DRAG DROP",
      prompt:"Match each requirement to the agent tool to add. Each tool may be used once or not at all.",
      options:[{id:"r1",text:"Create a chart from an uploaded CSV of monthly bookings"},{id:"r2",text:"Check live flight status through an airline API described by an OpenAPI 3.0 spec"},{id:"r3",text:"Find visa rules published on government websites today"},{id:"r4",text:"Answer from 200 uploaded hotel contracts"},{id:"r5",text:"Call a booking function that runs inside the client application"}],
      choices:[{id:"ci",text:"Code Interpreter"},{id:"oa",text:"OpenAPI tool"},{id:"bing",text:"Grounding with Bing Search"},{id:"fs",text:"File search"},{id:"fn",text:"Function calling"},{id:"ais",text:"Azure AI Search"}],
      answer:{r1:"ci",r2:"oa",r3:"bing",r4:"fs",r5:"fn"},
      rationale:"Code Interpreter runs Python for analysis and charts. The OpenAPI tool calls an API from its specification. Bing grounding retrieves current public web content. File search retrieves from uploaded files. Function calling asks the client to run its own function. Azure AI Search is for an existing search index, which none of these requirements mention."
    },
    {
      id:"f20",domain:"foundry",type:"single",
      prompt:"An agent uses function calling to book hotel rooms through a function defined in the client app. Who executes the booking function?",
      options:[{id:"a",text:"The model executes the function inside Foundry"},{id:"b",text:"Foundry runs the function in Code Interpreter"},{id:"c",text:"The client application executes it after the model returns a function call with arguments, and then sends the result back"},{id:"d",text:"Bing executes it"}],answer:"c",
      rationale:"With function calling, the model only decides that a function should be called and with which arguments. Your application runs the function and returns the output so the model can continue."
    },
    {
      id:"f21",domain:"foundry",type:"match",label:"HOTSPOT",caseStudy:"travel",
      prompt:"Complete the code that creates Contoso's agent and sends the first message in a multi-turn conversation. Select the correct option for each box.",
      code:`agent = project.agents.create_version(
    agent_name="travel-agent",
    definition=[ Box 1 ](
        model="travel-chat",
        [ Box 2 ]="Answer only travel questions, in British English.",
    ),
)
client = project.get_openai_client(agent_name="travel-agent")
conv = client.[ Box 3 ].create()
reply = client.responses.create(
    conversation=[ Box 4 ],
    input="Ideas for a weekend in Porto?",
)`,
      options:[{id:"b1",text:"Box 1"},{id:"b2",text:"Box 2"},{id:"b3",text:"Box 3"},{id:"b4",text:"Box 4"}],
      choices:[{id:"pad",text:"PromptAgentDefinition"},{id:"ins",text:"instructions"},{id:"sys",text:"system_prompt"},{id:"cnv",text:"conversations"},{id:"thr",text:"threads"},{id:"cid",text:"conv.id"},{id:"nm",text:"\"travel-agent\""}],
      answer:{b1:"pad",b2:"ins",b3:"cnv",b4:"cid"},
      rationale:"A prompt agent is defined with PromptAgentDefinition(model=..., instructions=...). After getting a client bound to the agent, conversations.create() starts a conversation, and each responses.create call passes conversation=conv.id to keep context."
    },
    {
      id:"f22",domain:"foundry",type:"yesno",
      prompt:"You are configuring tools for a Foundry agent.",
      options:[{id:"s1",text:"One agent can use several tools, such as file search and Code Interpreter."},{id:"s2",text:"Grounding with Bing Search sends data outside the Azure compliance boundary, so its terms should be reviewed before it is enabled."},{id:"s3",text:"The file search tool requires you to create and manage your own Azure AI Search index first."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. Agents can combine tools, and the model chooses which to use. Box 2: Yes. Bing grounding is governed by separate terms, and data flows outside the Azure compliance boundary. Box 3: No. File search manages its own vector store for uploaded files; the Azure AI Search tool is the option for an existing index."
    },
    {
      id:"f23",domain:"foundry",type:"single",
      prompt:"A web app only needs to send messages to an existing Foundry agent. It must not be able to create or modify agents or other project content. Which role should its identity receive?",
      options:[{id:"a",text:"Foundry Agent Consumer"},{id:"b",text:"Foundry User"},{id:"c",text:"Foundry Project Manager"},{id:"d",text:"Contributor"}],answer:"a",
      rationale:"Foundry Agent Consumer is the least-privilege role for principals that only interact with agents. Foundry User also allows building and changing content in the project, which this app does not need."
    },
    {
      id:"f24",domain:"foundry",type:"single",
      prompt:"Two teams share one Foundry resource. Each team needs its own agents, files, and evaluations, with separate access control. What should be created?",
      options:[{id:"a",text:"One project, with each team's name added to its agents' instructions"},{id:"b",text:"A separate project for each team within the same Foundry resource"},{id:"c",text:"A separate Azure subscription for each agent"},{id:"d",text:"Separate deployments of the same model in one project"}],answer:"b",
      rationale:"Projects are the unit of isolation for agents, files, and evaluations, and access can be granted per project. Separate deployments within one project do not separate agents or files."
    },

    // Text and speech
    {
      id:"f25",domain:"foundry",type:"single",
      prompt:"An app must redact personal data from support tickets with consistent, predefined entity categories and confidence scores, while keeping prompt engineering to a minimum. Which option fits best?",
      options:[{id:"a",text:"A chat model prompted to \"remove anything personal\""},{id:"b",text:"Image generation"},{id:"c",text:"Azure Language PII detection"},{id:"d",text:"Azure Translator"}],answer:"c",
      rationale:"Azure Language PII detection returns standard categories, offsets, confidence scores, and redacted text without prompt design. A prompted LLM can work, but its output categories and consistency depend on the prompt, which conflicts with the requirement."
    },
    {
      id:"f26",domain:"foundry",type:"match",label:"HOTSPOT",
      prompt:"Complete the Python code so that it speaks a boarding announcement in a British neural voice by using Azure Speech in Foundry Tools. Select the correct option for each box.",
      code:`import azure.cognitiveservices.speech as speechsdk

speech_config = speechsdk.SpeechConfig(subscription=KEY, endpoint=ENDPOINT)
speech_config.[ Box 1 ] = "en-GB-SoniaNeural"
synth = speechsdk.[ Box 2 ](speech_config=speech_config)
result = synth.[ Box 3 ]("Flight CT201 is now boarding.").get()
if result.reason == speechsdk.ResultReason.[ Box 4 ]:
    print("Announcement played")`,
      options:[{id:"b1",text:"Box 1"},{id:"b2",text:"Box 2"},{id:"b3",text:"Box 3"},{id:"b4",text:"Box 4"}],
      choices:[{id:"vn",text:"speech_synthesis_voice_name"},{id:"rl",text:"speech_recognition_language"},{id:"ss",text:"SpeechSynthesizer"},{id:"sr",text:"SpeechRecognizer"},{id:"sta",text:"speak_text_async"},{id:"roa",text:"recognize_once_async"},{id:"sac",text:"SynthesizingAudioCompleted"},{id:"rs",text:"RecognizedSpeech"}],
      answer:{b1:"vn",b2:"ss",b3:"sta",b4:"sac"},
      rationale:"speech_synthesis_voice_name selects the neural voice. A SpeechSynthesizer converts text to speech, speak_text_async starts synthesis (.get() waits for it), and the result reason SynthesizingAudioCompleted confirms success. The recognizer, recognize_once_async, and RecognizedSpeech belong to speech-to-text."
    },
    {
      id:"f27",domain:"foundry",type:"single",
      prompt:"An app uses recognize_once_async() to transcribe a 45-minute meeting from a microphone, but it stops after the first sentence. What should the developer use instead?",
      options:[{id:"a",text:"Continuous recognition, starting it and handling the recognized events until the meeting ends"},{id:"b",text:"A longer request timeout on recognize_once_async()"},{id:"c",text:"speak_text_async()"},{id:"d",text:"A higher temperature"}],answer:"a",
      rationale:"recognize_once_async() returns after a single utterance, ending at the first silence. Continuous recognition (start_continuous_recognition_async with event handlers) transcribes long audio."
    },
    {
      id:"f28",domain:"foundry",type:"single",
      prompt:"A speech-to-text app returns nonsense when French customers speak. The recognizer uses default settings. Which change most directly fixes this?",
      options:[{id:"a",text:"Set speech_synthesis_voice_name to a French voice"},{id:"b",text:"Use Azure Translator on the audio"},{id:"c",text:"Increase the microphone volume"},{id:"d",text:"Set speech_recognition_language to \"fr-FR\", or enable automatic language identification"}],answer:"d",
      rationale:"The recognizer defaults to en-US. Setting the recognition language, or using language identification when it varies, lets it decode French correctly. The synthesis voice affects only text-to-speech output."
    },
    {
      id:"f29",domain:"foundry",type:"multi",solution:"complete",
      prompt:"Users must be able to ask questions by voice and hear spoken answers. Which two designs each provide a complete solution?",
      options:[{id:"a",text:"Azure Speech speech-to-text, then a deployed text model, then Azure Speech text-to-speech"},{id:"b",text:"A real-time audio-capable model that accepts spoken input and returns spoken output"},{id:"c",text:"Azure Translator followed by an image-generation model"},{id:"d",text:"Azure Language sentiment analysis followed by text-to-speech"},{id:"e",text:"OCR followed by text-to-speech"}],answer:["a","b"],
      rationale:"Either a speech pipeline around a text model, or a single audio-in, audio-out model, meets the requirement on its own. The other options never understand the spoken question."
    },
    {
      id:"f30",domain:"foundry",type:"single",
      prompt:"An app must respond to a user's recorded spoken question by using a deployed model, without calling a separate speech service. What is required?",
      options:[{id:"a",text:"An embedding model deployment"},{id:"b",text:"A model deployment that supports audio input, with the audio sent in the request"},{id:"c",text:"An image-generation deployment"},{id:"d",text:"A text-only model, with the audio file name sent as text"}],answer:"b",
      rationale:"Only audio-capable multimodal models can interpret speech directly. A text-only model cannot process audio, and sending a file name gives it nothing to understand."
    },
    {
      id:"f31",domain:"foundry",type:"yesno",
      prompt:"You are building an app with the Azure Speech SDK.",
      options:[{id:"s1",text:"For best accuracy, the recognition language should match the spoken language, unless language identification is used."},{id:"s2",text:"A SpeechSynthesizer created without an audio config plays audio through the default speaker."},{id:"s3",text:"recognize_once_async() is designed for transcribing long recordings."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. The recognizer decodes using the configured locale. Box 2: Yes. Default output is the system speaker. Box 3: No. It returns after one utterance; continuous recognition or batch transcription handles long audio."
    },

    // Vision and image generation
    {
      id:"f32",domain:"foundry",type:"match",label:"HOTSPOT",
      prompt:"Complete the code so that it sends a local JPEG of a restaurant menu, together with a question, to the vision-chat deployment by using the Responses API. b64 holds the base64-encoded file bytes. Select the correct option for each box.",
      code:`response = client.responses.create(
    model="vision-chat",
    input=[{
        "role": "user",
        "content": [
            {"type": [ Box 1 ], "text": "List the vegetarian dishes."},
            {"type": [ Box 2 ], "image_url": [ Box 3 ]},
        ],
    }],
)`,
      options:[{id:"b1",text:"Box 1"},{id:"b2",text:"Box 2"},{id:"b3",text:"Box 3"}],
      choices:[{id:"it",text:"\"input_text\""},{id:"ii",text:"\"input_image\""},{id:"txt",text:"\"text\""},{id:"img",text:"\"image\""},{id:"data",text:"f\"data:image/jpeg;base64,{b64}\""},{id:"path",text:"\"C:/menus/menu.jpg\""},{id:"raw",text:"open(\"menu.jpg\", \"rb\").read()"}],
      answer:{b1:"it",b2:"ii",b3:"data"},
      rationale:"Responses API content items use the types input_text and input_image. A local image is sent as a data URL containing base64 data (or a public URL can be used). A local file path or raw bytes cannot be passed as image_url."
    },
    {
      id:"f33",domain:"foundry",type:"single",
      prompt:"An app sends an image to a deployment and receives an error saying that image input is not supported. The code is correct. What is the most likely fix?",
      options:[{id:"a",text:"Increase the maximum output tokens"},{id:"b",text:"Run OCR on the image first"},{id:"c",text:"Deploy a model that supports image input and send the request to that deployment"},{id:"d",text:"Lower the temperature"}],answer:"c",
      rationale:"Only multimodal models accept images. A text-only deployment rejects image content. OCR would capture text only and lose visual content."
    },
    {
      id:"f34",domain:"foundry",type:"single",
      prompt:"Compared with a request that generates a new image from a prompt, what must an image edit request also include?",
      options:[{id:"a",text:"The source image to edit, and optionally a mask that marks the area to change"},{id:"b",text:"An embedding of the prompt"},{id:"c",text:"A speech configuration"},{id:"d",text:"A stop sequence"}],answer:"a",
      rationale:"Editing operates on an existing image. A mask limits changes to a region (inpainting), and the rest of the image is preserved."
    },
    {
      id:"f35",domain:"foundry",type:"match",label:"DRAG DROP",
      prompt:"Match each requirement to the most appropriate Foundry capability. Each capability may be used once or not at all.",
      options:[{id:"v1",text:"Answer free-form questions about a photo in a chat"},{id:"v2",text:"Create a new illustration for a brochure cover"},{id:"v3",text:"Extract the same fixed set of fields from thousands of receipt photos"},{id:"v4",text:"Replace only the sky in a photo"}],
      choices:[{id:"mm",text:"A multimodal chat model"},{id:"gen",text:"An image-generation model"},{id:"cu",text:"A Content Understanding analyzer"},{id:"edit",text:"Image editing with a mask"},{id:"tts",text:"Azure Speech text to speech"}],
      answer:{v1:"mm",v2:"gen",v3:"cu",v4:"edit"},
      rationale:"Multimodal chat models handle open-ended visual questions. Image-generation models create new images. Content Understanding analyzers apply a consistent field schema at scale. Mask-based editing changes one region of an image."
    },
    {
      id:"f36",domain:"foundry",type:"multi",
      prompt:"An app accepts user-uploaded images and sends them to a multimodal model. Which two practices reduce risk?",
      options:[{id:"a",text:"Keep content filters on for image inputs and model outputs"},{id:"b",text:"Treat any text that appears inside images as untrusted content that cannot change the app's instructions"},{id:"c",text:"Turn off filtering to reduce latency"},{id:"d",text:"Follow instructions written inside uploaded images, because users supplied them"},{id:"e",text:"Store every uploaded image in a public container"}],answer:["a","b"],
      rationale:"Filters catch harmful inputs and outputs. Text inside images can carry indirect prompt-injection attacks, so it must be treated as data. Following embedded instructions or exposing images publicly increases risk."
    },
    {
      id:"f37",domain:"foundry",type:"yesno",
      prompt:"You are building vision features in Foundry.",
      options:[{id:"s1",text:"A multimodal model can read text that appears in an image without a separate OCR service."},{id:"s2",text:"An image-generation model can analyse an existing photo and count the objects in it."},{id:"s3",text:"Images generated by Azure OpenAI image models include C2PA content credentials."}],
      answer:{s1:"yes",s2:"no",s3:"yes"},
      rationale:"Box 1: Yes. Multimodal models interpret visible text as part of the image. Box 2: No. Generation models create images; analysis needs a multimodal or vision model. Box 3: Yes. Content credentials mark the images as AI-generated."
    },
    {
      id:"f38",domain:"foundry",type:"single",
      prompt:"An app must produce both a one-line caption and a detailed accessibility description for each image, as separate JSON fields, with minimal code. What is the simplest approach?",
      options:[{id:"a",text:"Call an image-generation model twice"},{id:"b",text:"Make one call to a multimodal model with instructions for both outputs and a JSON schema for the response"},{id:"c",text:"Run OCR, then translate the result"},{id:"d",text:"Use speech synthesis"}],answer:"b",
      rationale:"A single multimodal request can return several fields when the instructions and a structured-output schema define them. OCR captures only text in the image, not a description."
    },

    // Content Understanding
    {
      id:"f39",domain:"foundry",type:"single",caseStudy:"insurer",
      prompt:"Which service best meets Fabrikam's requirement for one consistent field schema across PDFs, photos, videos, and call recordings, with minimal custom code?",
      options:[{id:"a",text:"Azure Language, using custom named entity recognition"},{id:"b",text:"A multimodal chat model with a different prompt for each input type"},{id:"c",text:"Azure Content Understanding in Foundry Tools, using analyzers"},{id:"d",text:"Azure Translator"}],answer:"c",
      rationale:"Content Understanding handles documents, images, audio, and video, with analyzers that define a field schema, and returns structured results. A prompted chat model could be made to work, but it needs more custom code and gives less consistent output. Azure Language works on text only."
    },
    {
      id:"f40",domain:"foundry",type:"single",caseStudy:"insurer",
      prompt:"Fabrikam needs a \"Damage severity\" value of minor, moderate, or severe for each damage photo. The value is never written anywhere and must be judged from the image. How should the field be defined in a custom analyzer?",
      options:[{id:"a",text:"As an extract field that copies text from the photo"},{id:"b",text:"As a classify field with the allowed values minor, moderate, and severe"},{id:"c",text:"It cannot be defined; Content Understanding only returns text printed in the input"},{id:"d",text:"As a stop sequence"}],answer:"b",
      rationale:"Analyzer fields can extract values that are present, generate values such as summaries, or classify into a fixed set of categories. Severity must be inferred and constrained to three values, so a classify field fits."
    },
    {
      id:"f41",domain:"foundry",type:"order",caseStudy:"insurer",
      prompt:"Arrange the REST calls and actions an app performs to analyse a repair invoice with the prebuilt invoice analyzer.",
      options:[{id:"post",text:"POST to analyzers/prebuilt-invoice:analyze with the document URL in inputs"},{id:"loc",text:"Read the Operation-Location header from the 202 Accepted response"},{id:"poll",text:"GET the Operation-Location URL until the status is Succeeded"},{id:"read",text:"Read the fields and markdown from result.contents"}],answer:["post","loc","poll","read"],
      rationale:"Analysis is asynchronous. The POST returns 202 with an Operation-Location URL, the client polls it until the status is Succeeded, and then reads the structured fields and Markdown from the result."
    },
    {
      id:"f42",domain:"foundry",type:"yesno",
      prompt:"You are using Azure Content Understanding in Foundry Tools.",
      options:[{id:"s1",text:"Analysis requests are asynchronous; the client polls a URL for the result."},{id:"s2",text:"Before prebuilt analyzers can be used, the Foundry resource needs default model deployments configured for Content Understanding."},{id:"s3",text:"You must train a custom model on labelled samples before any field can be extracted."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. The analyze call returns an Operation-Location to poll. Box 2: Yes. Content Understanding uses Foundry model deployments, such as a chat model, a mini model, and an embeddings model, set as defaults for the resource. Box 3: No. Prebuilt analyzers work immediately, and custom analyzers are defined with a field schema rather than trained on labelled data."
    },
    {
      id:"f43",domain:"foundry",type:"single",caseStudy:"insurer",
      prompt:"For each dash-cam video, Fabrikam must find when the collision happens and get a description of that moment. Which Content Understanding output provides this?",
      options:[{id:"a",text:"A single transcript of the audio track only"},{id:"b",text:"Time-stamped segments with descriptions and key frames from a video analyzer"},{id:"c",text:"Synthesised speech"},{id:"d",text:"A list of key phrases from the file name"}],answer:"b",
      rationale:"Video analysis returns segments with start and end times, descriptions, and key-frame images, which locate events. An audio transcript alone misses visual events."
    },
    {
      id:"f44",domain:"foundry",type:"match",label:"DRAG DROP",caseStudy:"insurer",
      prompt:"Match each Fabrikam input to the output that Content Understanding returns for it. Each output may be used once or not at all.",
      options:[{id:"i1",text:"A scanned repair estimate (PDF)"},{id:"i2",text:"A photo of vehicle damage"},{id:"i3",text:"A recorded customer phone call"},{id:"i4",text:"A dash-cam video clip"}],
      choices:[{id:"doc",text:"Markdown, including tables, plus extracted fields"},{id:"img",text:"A description and fields about the image"},{id:"aud",text:"A transcript with speaker turns, plus a summary and fields"},{id:"vid",text:"Time-stamped segments with key-frame descriptions"},{id:"syn",text:"Synthesised speech audio"}],
      answer:{i1:"doc",i2:"img",i3:"aud",i4:"vid"},
      rationale:"Content Understanding returns modality-appropriate structure: Markdown and fields for documents, descriptions for images, transcripts for audio, and segments for video. It does not synthesise speech."
    },
    {
      id:"f45",domain:"foundry",type:"single",caseStudy:"insurer",
      prompt:"Fabrikam's own claim forms include company-specific fields such as \"Policy band\" and \"Garage approval code\" that no prebuilt analyzer returns. What should be done?",
      options:[{id:"a",text:"Use the prebuilt invoice analyzer unchanged"},{id:"b",text:"Run sentiment analysis on the forms"},{id:"c",text:"Ask a chat model to guess the fields from the file name"},{id:"d",text:"Create a custom analyzer whose field schema names and describes the fields to extract"}],answer:"d",
      rationale:"A custom analyzer's field schema tells Content Understanding exactly which organisation-specific values to return. Prebuilt analyzers return only their own predefined fields."
    },
    {
      id:"f46",domain:"foundry",type:"multi",solution:"complete",
      prompt:"Fabrikam's lightweight app must extract the total from each repair invoice. Which two approaches each provide a complete solution?",
      options:[{id:"a",text:"Call the Content Understanding prebuilt invoice analyzer through the REST API and poll for the result"},{id:"b",text:"Use the Content Understanding Python SDK to analyse the invoice with the prebuilt invoice analyzer"},{id:"c",text:"Send the invoice to Azure Speech text to speech"},{id:"d",text:"Run Azure Language key phrase extraction on the PDF file name"},{id:"e",text:"Deploy an image-generation model and prompt it with the invoice number"}],answer:["a","b"],
      rationale:"The REST API and the SDK are two ways to call the same analyzer. Each returns the structured invoice fields, including the total. The other options cannot read or extract data from the invoice."
    }
  ]
};
