window.EXAM_CATALOG = window.EXAM_CATALOG || { defaultExam: "ab-900", exams: {} };
window.EXAM_CATALOG.exams["ab-900"] = {
  id: "ab-900",
  version: "1.0.0",
  code: "AB-900",
  title: "Copilot and Agent Administration Fundamentals",
  heroTitle: "Secure the<br><em>AI workplace.</em>",
  description: "A practical simulator for administrators supporting, securing, and governing Microsoft 365 Copilot and agents.",
  durationMinutes: 45,
  source: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-900",
  domains: {
    core: "Core Microsoft 365 services and security",
    governance: "Data protection and governance for Microsoft 365 and Copilot",
    administration: "Copilot and agent administration"
  },
  caseStudies: {
    tailspin: {
      title: "Tailspin Toys Copilot readiness",
      body: `<p>Tailspin Toys plans to deploy Microsoft 365 Copilot. A readiness review finds that several SharePoint sites use broad organization-wide links, confidential product files have no sensitivity labels, and administrators do not know which users are interacting with external AI sites.</p><p>The security team must reduce oversharing, prevent confidential data from leaving approved locations, and discover AI-related activity before licenses are assigned broadly.</p>`
    },
    adventure: {
      title: "Adventure Works service agent",
      body: `<p>Adventure Works is introducing a custom service agent for 200 support employees. The agent answers from approved SharePoint content and submits warranty requests through an action. Only support employees should use it. Makers must submit the agent for review before publication.</p><p>Administrators need to control access, monitor use and failures, and retire obsolete versions. The organization already uses Microsoft 365 and Power Platform administration tools.</p>`
    }
  },
  questions: [
    {
      id:"c01",domain:"core",type:"single",
      prompt:"A user can sign in to Microsoft 365 but cannot use a feature that coworkers can access. The feature requires a specific subscription. What should an administrator check first?",
      options:[{id:"b",text:"The organization's retention labels"},{id:"c",text:"The user's email signature"},{id:"d",text:"The SharePoint recycle bin"},{id:"a",text:"The user's assigned licenses and enabled service plans"}],answer:"a",
      rationale:"Licenses and their enabled service plans determine whether a user is entitled to many Microsoft 365 features. Successful authentication alone does not provide that entitlement."
    },
    {
      id:"c02",domain:"core",type:"single",
      prompt:"An administrator needs to review verified domain names and organization-wide settings. Which portal should the administrator use?",
      options:[{id:"a",text:"Microsoft Purview portal"},{id:"b",text:"Teams admin center"},{id:"c",text:"Microsoft 365 admin center"},{id:"d",text:"Exchange admin center"}],answer:"c",
      rationale:"The Microsoft 365 admin center provides tenant-level organization settings and domain management. Workload-specific centers manage their respective services."
    },
    {
      id:"c03",domain:"core",type:"single",
      prompt:"A department needs one email address that distributes incoming messages to all department members. Which object should be configured?",
      options:[{id:"a",text:"A SharePoint document library"},{id:"c",text:"A conditional access policy"},{id:"d",text:"An app registration"},{id:"b",text:"A distribution group in the Exchange admin center"}],answer:"b",
      rationale:"A distribution group distributes messages to its membership and is administered through Exchange. It does not provide a collaboration site or application identity."
    },
    {
      id:"c04",domain:"core",type:"single",
      prompt:"A project needs a collaboration location containing document libraries, lists, pages, and configurable membership. Which Microsoft 365 object is the best fit?",
      options:[{id:"a",text:"A distribution group"},{id:"b",text:"A risky sign-in"},{id:"c",text:"A retention event"},{id:"d",text:"A SharePoint site"}],answer:"d",
      rationale:"A SharePoint site is the collaboration and content container that can include libraries, lists, pages, permissions, and related resources."
    },
    {
      id:"c05",domain:"core",type:"multi",
      prompt:"Which two principles are central to a Zero Trust security model?",
      options:[{id:"a",text:"Verify explicitly"},{id:"b",text:"Trust all traffic originating on the corporate network"},{id:"c",text:"Use least-privilege access"},{id:"d",text:"Disable monitoring after authentication"}],answer:["a","c"],
      rationale:"Zero Trust emphasizes explicit verification, least privilege, and assuming breach. Network location alone is not a sufficient basis for trust."
    },
    {
      id:"c06",domain:"core",type:"single",
      prompt:"A user proves their identity with a password and an authenticator notification. Which security process occurred?",
      options:[{id:"a",text:"Authorization"},{id:"b",text:"Authentication"},{id:"c",text:"Data classification"},{id:"d",text:"Retention"}],answer:"b",
      rationale:"Authentication establishes who the user is. Authorization subsequently determines which resources and actions that identity may access."
    },
    {
      id:"c07",domain:"core",type:"single",
      prompt:"A policy requires MFA when administrators sign in from outside trusted locations. Which Microsoft Entra capability should enforce the requirement?",
      options:[{id:"b",text:"Data Lifecycle Management"},{id:"c",text:"Communication Compliance"},{id:"d",text:"A SharePoint retention label"},{id:"a",text:"Conditional Access"}],answer:"a",
      rationale:"Conditional Access evaluates signals such as identity, role, location, device, and risk to enforce access controls including MFA."
    },
    {
      id:"c08",domain:"core",type:"single",
      prompt:"Users want to sign in once and access several authorized cloud applications without entering credentials again. Which capability provides this experience?",
      options:[{id:"a",text:"Data Loss Prevention"},{id:"b",text:"Privileged Identity Management"},{id:"c",text:"Single sign-on"},{id:"d",text:"Content search"}],answer:"c",
      rationale:"Single sign-on lets an authenticated user access multiple authorized applications without repeatedly providing credentials."
    },
    {
      id:"c09",domain:"core",type:"single",
      prompt:"A help-desk analyst must determine why a user's sign-in was blocked and which Conditional Access policy applied. What should the analyst review?",
      options:[{id:"a",text:"SharePoint version history"},{id:"b",text:"Microsoft Entra sign-in logs"},{id:"c",text:"Exchange transport rules"},{id:"d",text:"A Copilot prompt gallery"}],answer:"b",
      rationale:"Entra sign-in logs show authentication details, risk information, and Conditional Access evaluation results used to troubleshoot access failures."
    },
    {
      id:"c10",domain:"core",type:"single",
      prompt:"An organization wants administrators to activate privileged roles only when needed, with approval and a time limit. Which capability should it use?",
      options:[{id:"a",text:"Microsoft Purview Data Explorer"},{id:"b",text:"A Teams channel policy"},{id:"c",text:"Microsoft Entra Privileged Identity Management"},{id:"d",text:"A distribution group"}],answer:"c",
      rationale:"PIM supports just-in-time, time-bound privileged role activation with controls such as approval, MFA, and audit history."
    },
    {
      id:"c11",domain:"core",type:"multi",
      prompt:"Which two capabilities are associated with Microsoft Defender XDR?",
      options:[{id:"a",text:"Correlating signals and incidents across supported security domains"},{id:"b",text:"Managing SharePoint document version numbers"},{id:"c",text:"Supporting investigation and response to threats"},{id:"d",text:"Assigning Microsoft 365 product licenses"}],answer:["a","c"],
      rationale:"Defender XDR correlates security signals into incidents and supports cross-domain investigation and response. Licensing and document versioning are managed elsewhere."
    },
    {
      id:"c12",domain:"core",type:"single",
      prompt:"A security lead reviews Identity Secure Score. What does the score primarily provide?",
      options:[{id:"a",text:"A guarantee that the tenant cannot be compromised"},{id:"b",text:"A measure and recommendations for improving identity security posture"},{id:"c",text:"A list of Copilot prompts"},{id:"d",text:"A replacement for audit logs"}],answer:"b",
      rationale:"Identity Secure Score assesses identity-security posture and recommends improvements. It is guidance, not a guarantee or a substitute for monitoring."
    },
    {
      id:"c13",domain:"core",type:"single",
      prompt:"An auditor needs to identify who changed a tenant setting yesterday. Which source should be reviewed?",
      options:[{id:"a",text:"Microsoft 365 audit logs"},{id:"b",text:"The user's OneDrive recycle bin"},{id:"c",text:"The prompt gallery"},{id:"d",text:"The service health dashboard only"}],answer:"a",
      rationale:"Audit logs record supported user and administrator activities and are the appropriate source for investigating who performed a configuration change."
    },
    {
      id:"c14",domain:"core",type:"single",
      prompt:"A developer creates an identity definition in Microsoft Entra for a new application, including redirect URIs and required API permissions. What is being configured?",
      options:[{id:"a",text:"A sensitivity label"},{id:"b",text:"A distribution group"},{id:"c",text:"A Teams channel"},{id:"d",text:"An app registration"}],answer:"d",
      rationale:"An app registration defines an application's identity and requested permissions. An enterprise application represents the service principal instance used in a tenant."
    },
    {
      id:"c15",domain:"core",type:"order",
      prompt:"Arrange these containers from the broad collaboration scope to the narrower content scope.",
      options:[{id:"site",text:"SharePoint site"},{id:"library",text:"Document library"},{id:"folder",text:"Folder"},{id:"file",text:"File"}],answer:["site","library","folder","file"],
      rationale:"A SharePoint site contains libraries; a library can contain folders; folders contain files. Permissions can be inherited or uniquely assigned at these scopes."
    },

    {
      id:"d01",domain:"governance",type:"single",
      prompt:"Documents marked Highly Confidential must remain encrypted and keep their protection when emailed to an authorized external recipient. What should an administrator configure?",
      options:[{id:"a",text:"A sensitivity label with encryption settings"},{id:"b",text:"A distribution group"},{id:"c",text:"An app registration"},{id:"d",text:"A Teams meeting policy"}],answer:"a",
      rationale:"Sensitivity labels can classify content and apply persistent protection such as encryption and usage restrictions."
    },
    {
      id:"d02",domain:"governance",type:"single",
      prompt:"The organization must prevent credit-card numbers from being posted in Teams or sent through Exchange unless a business exception applies. Which solution should it use?",
      options:[{id:"a",text:"Communication Compliance"},{id:"c",text:"Privileged Identity Management"},{id:"d",text:"Identity Secure Score"},{id:"b",text:"Data Loss Prevention"}],answer:"b",
      rationale:"Microsoft Purview DLP identifies sensitive information in supported locations and can warn, restrict, or block inappropriate sharing."
    },
    {
      id:"d03",domain:"governance",type:"single",
      prompt:"Security analysts need signals about unusual data downloads by an employee who may be preparing to leave the company. Which Purview solution is designed for this scenario?",
      options:[{id:"a",text:"Data Lifecycle Management"},{id:"b",text:"Content search"},{id:"c",text:"Insider Risk Management"},{id:"d",text:"Single sign-on"}],answer:"c",
      rationale:"Insider Risk Management correlates relevant signals to help identify and investigate potential insider risks while supporting privacy controls."
    },
    {
      id:"d04",domain:"governance",type:"single",
      prompt:"A compliance team must detect potentially threatening or inappropriate language in employee communications and route matches for review. What should it use?",
      options:[{id:"a",text:"Communication Compliance"},{id:"b",text:"Conditional Access"},{id:"c",text:"SharePoint Advanced Management"},{id:"d",text:"Copilot Analytics"}],answer:"a",
      rationale:"Communication Compliance detects policy violations in supported communications and provides a workflow for review and remediation."
    },
    {
      id:"d05",domain:"governance",type:"single",
      prompt:"Records must be retained for seven years and then disposed of according to policy. Which capability addresses this requirement?",
      options:[{id:"a",text:"Microsoft Defender XDR"},{id:"b",text:"Microsoft Entra ID"},{id:"c",text:"Copilot Analytics"},{id:"d",text:"Microsoft Purview Data Lifecycle Management"}],answer:"d",
      rationale:"Data Lifecycle Management uses retention policies and labels to retain or delete content according to organizational and regulatory requirements."
    },
    {
      id:"d06",domain:"governance",type:"multi",
      prompt:"Which two statements describe how Microsoft 365 Copilot uses organizational data?",
      options:[{id:"a",text:"Microsoft Graph helps surface relevant Microsoft 365 context"},{id:"b",text:"Copilot automatically grants users access to restricted content"},{id:"c",text:"Responses are grounded only in data the requesting user is authorized to access"},{id:"d",text:"Copilot requires every SharePoint site to be public"}],answer:["a","c"],
      rationale:"Microsoft Graph helps Copilot find relevant context, while Microsoft 365 permissions constrain what each user can access. Copilot does not create new content permissions."
    },
    {
      id:"d07",domain:"governance",type:"single",
      prompt:"An employee can obtain a confidential document through Copilot because the employee already has access to the document in SharePoint. What is the underlying issue?",
      options:[{id:"a",text:"Copilot bypassed Microsoft 365 permissions"},{id:"b",text:"The source permission is broader than intended"},{id:"c",text:"The employee needs a second Copilot license"},{id:"d",text:"The model requires fine-tuning"}],answer:"b",
      rationale:"Copilot respects the user's existing access. If it surfaces content the user should not see, the source permissions or sharing configuration must be corrected."
    },
    {
      id:"d08",domain:"governance",type:"single",
      prompt:"A compliance manager wants a posture score, improvement actions, and assessments mapped to regulatory requirements. Which solution should the manager use?",
      options:[{id:"a",text:"Microsoft Purview Compliance Manager"},{id:"b",text:"Exchange admin center"},{id:"c",text:"Microsoft Entra PIM"},{id:"d",text:"Copilot Studio"}],answer:"a",
      rationale:"Compliance Manager supplies assessments, improvement actions, and scoring to help manage compliance posture against standards and regulations."
    },
    {
      id:"d09",domain:"governance",type:"single",
      prompt:"An analyst needs to locate repositories containing sensitive information and examine the identified data. Which Purview capability should the analyst use?",
      options:[{id:"a",text:"Copilot Analytics"},{id:"b",text:"Microsoft Purview Data Explorer"},{id:"c",text:"Teams admin center"},{id:"d",text:"Identity Secure Score"}],answer:"b",
      rationale:"Data Explorer helps administrators inspect classified and sensitive data across supported data estates."
    },
    {
      id:"d10",domain:"governance",type:"single",
      prompt:"An investigator must search Microsoft 365 mailboxes and SharePoint sites for messages and files responsive to a legal matter. What should be used?",
      options:[{id:"a",text:"Microsoft Entra sign-in logs"},{id:"b",text:"Copilot prompt scheduling"},{id:"c",text:"Content search in Microsoft Purview eDiscovery"},{id:"d",text:"A Teams setup policy"}],answer:"c",
      rationale:"Content search in Purview eDiscovery searches supported Microsoft 365 locations for content relevant to investigations and legal matters."
    },
    {
      id:"d11",domain:"governance",type:"single",
      prompt:"An administrator must review user actions involving sensitivity labels and DLP policies. Which Purview tool provides this activity view?",
      options:[{id:"a",text:"Activity explorer"},{id:"b",text:"Microsoft 365 service health"},{id:"c",text:"Enterprise applications"},{id:"d",text:"Researcher"}],answer:"a",
      rationale:"Activity explorer shows supported user and administrator activities related to data classification and protection controls."
    },
    {
      id:"d12",domain:"governance",type:"single",
      prompt:"The security team wants to discover generative AI activity and assess data-security risks arising from AI use. Which capability should it evaluate?",
      options:[{id:"a",text:"Exchange mail flow rules only"},{id:"b",text:"Microsoft Purview DSPM for AI"},{id:"c",text:"A SharePoint recycle bin"},{id:"d",text:"Microsoft Forms"}],answer:"b",
      rationale:"Data Security Posture Management for AI helps discover AI use, assess related data risks, and support protective policy decisions."
    },
    {
      id:"d13",domain:"governance",type:"single",caseStudy:"tailspin",
      prompt:"Which report should Tailspin run to identify SharePoint sites and content with potentially excessive access?",
      options:[{id:"a",text:"A Copilot usage report"},{id:"b",text:"A mail flow report"},{id:"c",text:"A data access governance report"},{id:"d",text:"An Identity Secure Score report"}],answer:"c",
      rationale:"SharePoint data access governance reports help identify sharing and access patterns that may represent oversharing risk."
    },
    {
      id:"d14",domain:"governance",type:"multi",caseStudy:"tailspin",
      prompt:"Which two controls directly address Tailspin's confidential-data and external-sharing requirements?",
      options:[{id:"a",text:"Sensitivity labels for classification and persistent protection"},{id:"b",text:"A larger Copilot context window"},{id:"c",text:"DLP policies that detect and restrict inappropriate sharing"},{id:"d",text:"Additional distribution groups"}],answer:["a","c"],
      rationale:"Sensitivity labels classify and protect confidential content, while DLP can detect sensitive information and restrict inappropriate movement or sharing."
    },
    {
      id:"d15",domain:"governance",type:"single",caseStudy:"tailspin",
      prompt:"Which capability should Tailspin use to discover and manage the stated AI-activity risk?",
      options:[{id:"a",text:"Microsoft Purview DSPM for AI"},{id:"b",text:"Microsoft Entra PIM"},{id:"c",text:"SharePoint version history"},{id:"d",text:"Microsoft 365 Apps update channels"}],answer:"a",
      rationale:"DSPM for AI is designed to discover AI interactions and help administrators understand and manage associated data-security risks."
    },
    {
      id:"d16",domain:"governance",type:"single",
      prompt:"A sensitive SharePoint site should be accessible only to members of designated Microsoft 365 groups, even if content was previously shared more broadly. Which capability should be evaluated?",
      options:[{id:"a",text:"A retention label"},{id:"b",text:"Restricted access control in SharePoint Advanced Management"},{id:"c",text:"A distribution group"},{id:"d",text:"Copilot prompt sharing"}],answer:"b",
      rationale:"Restricted access control can constrain site access to specified groups, adding a control against oversharing beyond individual item links."
    },
    {
      id:"d17",domain:"governance",type:"order",
      prompt:"Arrange the response to a Microsoft Purview DLP alert into a sensible sequence.",
      options:[{id:"review",text:"Review the alert, matched policy, content context, and affected user"},{id:"validate",text:"Determine whether the activity is expected, a false positive, or a policy violation"},{id:"respond",text:"Apply the appropriate remediation or escalation"},{id:"improve",text:"Document the outcome and tune controls when justified"}],answer:["review","validate","respond","improve"],
      rationale:"A sound response gathers evidence first, validates the event, takes proportionate action, and then records and improves the control based on the outcome."
    },

    {
      id:"a01",domain:"administration",type:"single",
      prompt:"Employees need AI assistance in Microsoft 365 apps using their work context. The requirement does not include a custom workflow. What should an administrator evaluate first?",
      options:[{id:"a",text:"Microsoft 365 Copilot"},{id:"b",text:"A custom agent with an external action"},{id:"c",text:"Microsoft Defender XDR"},{id:"d",text:"A retention policy"}],answer:"a",
      rationale:"Built-in Microsoft 365 Copilot capabilities are the appropriate starting point for general AI assistance across Microsoft 365 apps without custom actions."
    },
    {
      id:"a02",domain:"administration",type:"single",
      prompt:"A finance user needs to reason over several datasets and produce analytical insights. Which Copilot capability best fits?",
      options:[{id:"a",text:"Researcher"},{id:"b",text:"Communication Compliance"},{id:"c",text:"Analyst"},{id:"d",text:"SharePoint Advanced Management"}],answer:"c",
      rationale:"Analyst is designed for data investigation and analytical reasoning. Researcher is more suited to multi-source research and synthesis."
    },
    {
      id:"a03",domain:"administration",type:"single",
      prompt:"A strategy user needs a sourced report that synthesizes internal material and web research. Which Copilot capability should the user choose?",
      options:[{id:"a",text:"Data Explorer"},{id:"b",text:"Researcher"},{id:"c",text:"Analyst"},{id:"d",text:"Insider Risk Management"}],answer:"b",
      rationale:"Researcher supports multi-step, multi-source research and produces synthesized, cited results."
    },
    {
      id:"a04",domain:"administration",type:"single",
      prompt:"An organization requires AI to answer from specialized knowledge and submit a request to a line-of-business system. What should it create?",
      options:[{id:"a",text:"A sensitivity label"},{id:"c",text:"A distribution list"},{id:"d",text:"A Conditional Access named location"},{id:"b",text:"A custom agent"}],answer:"b",
      rationale:"A custom agent can combine organization-specific instructions and knowledge with actions that interact with business processes."
    },
    {
      id:"a05",domain:"administration",type:"single",
      prompt:"An administrator has purchased monthly Microsoft 365 Copilot licenses for a pilot group. What must happen before pilot users receive licensed capabilities?",
      options:[{id:"a",text:"Assign the licenses directly or through a supported group"},{id:"b",text:"Make every SharePoint site public"},{id:"c",text:"Disable multifactor authentication"},{id:"d",text:"Register every user as an application"}],answer:"a",
      rationale:"Purchased licenses must be assigned to the intended users, directly or by supported group-based licensing, with the required service plans enabled."
    },
    {
      id:"a06",domain:"administration",type:"multi",
      prompt:"Which two activities help administrators evaluate Microsoft 365 Copilot adoption?",
      options:[{id:"a",text:"Review usage information in the Microsoft 365 admin center"},{id:"b",text:"Use Copilot Analytics for adoption and impact insights where available"},{id:"c",text:"Review only the number of Entra app registrations"},{id:"d",text:"Disable audit and usage reporting"}],answer:["a","b"],
      rationale:"Microsoft 365 administration reports and Copilot Analytics provide complementary adoption and usage insights. App registrations alone do not measure Copilot adoption."
    },
    {
      id:"a07",domain:"administration",type:"single",
      prompt:"A department uses metered Copilot capabilities and needs charges associated with the correct Azure subscription and resource group. What should an administrator manage?",
      options:[{id:"a",text:"A sensitivity label policy"},{id:"b",text:"A Teams meeting template"},{id:"c",text:"A Copilot pay-as-you-go billing policy"},{id:"d",text:"An eDiscovery case"}],answer:"c",
      rationale:"Pay-as-you-go billing policies connect supported metered Copilot use to Azure billing and define the relevant scope."
    },
    {
      id:"a08",domain:"administration",type:"single",
      prompt:"A user created a useful prompt and wants coworkers to reuse it. Which prompt-management action meets the requirement?",
      options:[{id:"a",text:"Share the saved prompt with the intended coworkers"},{id:"b",text:"Create an Entra risky-user record"},{id:"c",text:"Apply a retention hold to every mailbox"},{id:"d",text:"Register the prompt as an enterprise application"}],answer:"a",
      rationale:"Prompt-management capabilities include saving and sharing prompts for reuse, subject to the available product controls and permissions."
    },
    {
      id:"a09",domain:"administration",type:"single",caseStudy:"adventure",
      prompt:"What should Adventure Works configure to meet the agent access requirement?",
      options:[{id:"a",text:"Make the agent available to everyone in the tenant"},{id:"b",text:"Grant access only to the support user group"},{id:"c",text:"Publish the agent anonymously"},{id:"d",text:"Use a distribution group as the agent's knowledge source"}],answer:"b",
      rationale:"Agent access should be scoped to the intended support group, following least privilege and the stated business requirement."
    },
    {
      id:"a10",domain:"administration",type:"single",caseStudy:"adventure",
      prompt:"Which process should occur before the agent is made available to support employees?",
      options:[{id:"a",text:"The maker publishes directly with no review"},{id:"b",text:"All SharePoint permissions are removed"},{id:"c",text:"The agent is submitted through the organization's approval process"},{id:"d",text:"The action is granted tenant-wide administrator permissions"}],answer:"c",
      rationale:"An approval process allows the organization to review an agent's purpose, data, actions, security, and compliance before broad publication."
    },
    {
      id:"a11",domain:"administration",type:"multi",caseStudy:"adventure",
      prompt:"Which two administrative activities address the monitoring and lifecycle requirements?",
      options:[{id:"a",text:"Review agent usage and operational insights"},{id:"b",text:"Keep every obsolete agent version available indefinitely"},{id:"c",text:"Manage agent status and lifecycle through the relevant Microsoft 365 and Power Platform admin experiences"},{id:"d",text:"Disable failure telemetry"}],answer:["a","c"],
      rationale:"Usage and operational insights reveal adoption and failures, while lifecycle administration supports governance of active and obsolete agents."
    },
    {
      id:"a12",domain:"administration",type:"order",
      prompt:"Arrange the activities into a basic governed agent lifecycle.",
      options:[{id:"create",text:"Create and configure the agent with approved knowledge and actions"},{id:"test",text:"Test behavior, permissions, safety, and action outcomes"},{id:"approve",text:"Submit the agent for review and approval"},{id:"operate",text:"Publish to the intended users, monitor, and eventually retire it"}],answer:["create","test","approve","operate"],
      rationale:"A governed lifecycle builds and tests before approval, then publishes to a defined audience with continued monitoring and retirement."
    },
    {
      id:"a13",domain:"administration",type:"single",
      prompt:"An administrator wants to stop users from accessing a Copilot feature that the organization is not ready to support. What should the administrator do?",
      options:[{id:"a",text:"Delete the users' Microsoft 365 accounts"},{id:"b",text:"Make all users Global Administrators"},{id:"c",text:"Remove every SharePoint site"},{id:"d",text:"Use the available administrative control to disable the feature for the intended scope"}],answer:"d",
      rationale:"Where Microsoft provides a feature control, administrators should configure it for the relevant users or tenant scope rather than take disruptive unrelated actions."
    }
  ]
};
