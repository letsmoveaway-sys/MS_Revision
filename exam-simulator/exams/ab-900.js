window.EXAM_CATALOG = window.EXAM_CATALOG || { defaultExam: "ab-900", exams: {} };
window.EXAM_CATALOG.exams["ab-900"] = {
  id: "ab-900",
  version: "2.0.0",
  code: "AB-900",
  title: "Copilot and Agent Administration Fundamentals",
  heroTitle: "Secure the<br><em>AI workplace.</em>",
  description: "A scenario-led simulator for administrators supporting, securing, and governing Microsoft 365 Copilot and agents.",
  durationMinutes: 45,
  source: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ab-900",
  domains: {
    core: "Core Microsoft 365 services and security",
    governance: "Data protection and governance for Microsoft 365 and Copilot",
    administration: "Copilot and agent administration"
  },
  caseStudies: {
    northwind: {
      title: "Northwind identity and collaboration rollout",
      body: `<p>Northwind Traders is onboarding 300 seasonal employees. Their accounts are synchronized to Microsoft Entra ID and placed in a group that should receive Microsoft 365 licenses automatically. Twelve employees can sign in but cannot open Exchange Online. The license assignment report shows errors for those users.</p><p>Northwind also introduces a contractor portal in SharePoint. Contractors need read-only access to published documents, while internal project staff must edit documents. Administrators want to avoid assigning permissions directly to individuals.</p>`
    },
    fabrikam: {
      title: "Fabrikam Copilot readiness review",
      body: `<p>Fabrikam plans a phased Microsoft 365 Copilot rollout. A review finds confidential merger documents in SharePoint sites that use organization-wide sharing groups. Some files have a Confidential sensitivity label, but the label does not apply encryption. The legal team requires merger content to be retained for seven years.</p><p>Security also discovers that employees paste customer data into several external generative-AI websites. The team needs visibility into AI activity, a way to reduce inappropriate disclosure, and a temporary control that prevents high-risk SharePoint sites from appearing in Copilot while site owners correct permissions.</p>`
    },
    litware: {
      title: "Litware support agent rollout",
      body: `<p>Litware builds a support agent that uses approved SharePoint knowledge and an action that creates tickets in a service-management system. The maker submits the agent for approval. Only the Support-Pilot group should be able to install it during the first month.</p><p>The administrator must review the agent's data sources, actions, and requested permissions before release. After rollout, Litware wants adoption data, visibility into failed conversations or actions, and a defined response if the original owner leaves the company.</p>`
    }
  },
  questions: [
    {
      id:"c01",domain:"core",type:"single",caseStudy:"northwind",
      prompt:"What should the administrator examine first for the 12 users who did not receive Exchange Online?",
      options:[{id:"a",text:"The Errors & Issues details for the group-based license assignment"},{id:"b",text:"The Exchange message trace for each user"},{id:"c",text:"The users' SharePoint site permissions"},{id:"d",text:"The Microsoft 365 service health history"}],answer:"a",
      rationale:"The users can authenticate, but their intended group-based license assignment has failed. Errors & Issues identifies causes such as an invalid usage location, unavailable licenses, or conflicting service plans. Message trace is useful only after a mailbox and Exchange entitlement exist."
    },
    {
      id:"c02",domain:"core",type:"multi",caseStudy:"northwind",
      prompt:"Which two group assignments best meet the contractor-portal requirements?",
      options:[{id:"a",text:"Add the contractor security group to the site's Visitors group"},{id:"b",text:"Add the internal project Microsoft 365 group to the site's Members group"},{id:"c",text:"Add all contractors directly as site owners"},{id:"d",text:"Add the internal project group to a distribution group"},{id:"e",text:"Grant every contractor Edit permission on the document library"}],answer:["a","b"],
      rationale:"SharePoint Visitors normally provide read access, while Members normally provide edit access. Assigning groups instead of individuals reduces administration. Site Owner and Edit permissions exceed the contractors' requirement, and a distribution group is primarily for email distribution."
    },
    {
      id:"c03",domain:"core",type:"single",
      prompt:"A support department needs support@contoso.com. Five agents must read the same message history and send replies that appear to come from the support address. Which Exchange object should be created?",
      options:[{id:"a",text:"A distribution group"},{id:"b",text:"A shared mailbox"},{id:"c",text:"A mail-enabled security group"},{id:"d",text:"A Microsoft 365 group"}],answer:"b",
      rationale:"A shared mailbox gives multiple delegates a common mailbox and calendar and can allow Send As or Send on Behalf. A distribution group delivers separate copies to members and does not provide one shared message history."
    },
    {
      id:"c04",domain:"core",type:"single",
      prompt:"A company must change its default release preferences for new Microsoft 365 features and verify its accepted internet domains. Where should an administrator perform both tasks?",
      options:[{id:"b",text:"Microsoft Entra admin center"},{id:"c",text:"Exchange admin center"},{id:"a",text:"Microsoft 365 admin center"},{id:"d",text:"Microsoft Defender portal"}],answer:"a",
      rationale:"Microsoft 365 organization settings and domain management are tenant-level tasks in the Microsoft 365 admin center. Entra manages identity and access, while the workload-specific portals do not provide both requested settings."
    },
    {
      id:"c05",domain:"core",type:"single",
      prompt:"All retail employees need the same Teams app pinned, but only store managers should be allowed to create private channels. Which configuration is most appropriate?",
      options:[{id:"b",text:"Create a SharePoint site for managers and assign the app there"},{id:"c",text:"Use an Exchange distribution group to configure both settings"},{id:"d",text:"Grant store managers the Teams Administrator role"},{id:"a",text:"Use one Teams app setup policy for all retail employees and a separate Teams policy for store managers"}],answer:"a",
      rationale:"Teams policies control user experiences and capabilities. App setup and channel-creation requirements can be scoped with the relevant policies and group assignments. An admin role would grant management authority rather than only the requested user capability."
    },
    {
      id:"c06",domain:"core",type:"multi",
      prompt:"A Zero Trust review finds that users on the corporate network bypass MFA and hold broad access indefinitely. Which two changes align most directly with Zero Trust?",
      options:[{id:"a",text:"Evaluate every access request with identity, device, location, and risk signals"},{id:"b",text:"Treat the internal network as trusted after the first successful sign-in"},{id:"c",text:"Replace standing broad access with least-privilege, time-bound access"},{id:"d",text:"Disable logging for successfully authenticated sessions"},{id:"e",text:"Allow shared administrator accounts from managed devices"}],answer:["a","c"],
      rationale:"Zero Trust requires explicit verification using available signals and least-privilege access while assuming breach. Network location alone is not a trust boundary, and monitoring remains important after authentication."
    },
    {
      id:"c07",domain:"core",type:"single",
      prompt:"A user completes passwordless authentication successfully but still cannot open a finance site. Sign-in logs show success, and the site permits only members of Finance-Security. Which statement explains the result?",
      options:[{id:"a",text:"Authentication succeeded, but authorization failed because the user lacks the required group membership"},{id:"b",text:"Authorization succeeded, but authentication failed because no password was entered"},{id:"c",text:"Single sign-on failed because security groups cannot control SharePoint access"},{id:"d",text:"The finance site must be registered as an enterprise application"}],answer:"a",
      rationale:"Authentication verifies the identity; authorization decides what that identity may access. Passwordless authentication can be successful even though the user is not authorized through the required security group."
    },
    {
      id:"c08",domain:"core",type:"multi",
      prompt:"An analyst opens a Microsoft Defender XDR incident containing a suspicious email alert, a risky identity alert, and a compromised-device alert. Which two statements correctly describe the value of the incident?",
      options:[{id:"a",text:"It correlates related signals into a broader attack story"},{id:"b",text:"It replaces the source products' protections and policies"},{id:"c",text:"It supports cross-domain investigation and response from a unified experience"},{id:"d",text:"It proves every included alert is a confirmed compromise"},{id:"e",text:"It assigns Microsoft 365 licenses to affected users"}],answer:["a","c"],
      rationale:"Defender XDR correlates related alerts from supported security domains and provides a unified investigation and response experience. Correlation does not make every alert a confirmed attack or replace the underlying protections."
    },
    {
      id:"c09",domain:"core",type:"single",
      prompt:"An administrator plans a Conditional Access policy that requires MFA for off-network access. The administrator wants to estimate its effect without blocking anyone. What should be done?",
      options:[{id:"b",text:"Enable the policy and review Microsoft 365 audit logs after users are blocked"},{id:"a",text:"Enable the policy in report-only mode and review its results in sign-in logs"},{id:"c",text:"Create a DLP policy in test mode"},{id:"d",text:"Configure the policy as a sensitivity label"}],answer:"a",
      rationale:"Report-only mode evaluates most Conditional Access policies without enforcing them. The resulting policy status is available in sign-in details, allowing the administrator to assess impact before enabling enforcement."
    },
    {
      id:"c10",domain:"core",type:"single",
      prompt:"A Conditional Access policy began blocking more users after an administrator changed it. The security team must identify who made the change and compare the previous and new policy values. Which evidence is most useful?",
      options:[{id:"b",text:"The Conditional Access tab for one event in Entra sign-in logs"},{id:"a",text:"The change history for Identity Secure Score"},{id:"c",text:"Entra audit logs filtered for Conditional Access, including Modified properties"},{id:"d",text:"The Defender XDR device inventory"}],answer:"c",
      rationale:"Entra audit logs record who created, updated, or deleted a Conditional Access policy, and Modified properties exposes the changed values. Sign-in logs show how policies evaluated for a sign-in but do not provide the requested configuration-change history."
    },
    {
      id:"c11",domain:"core",type:"single",
      prompt:"Users sign in once to Microsoft Entra ID and then open several authorized SaaS applications without entering credentials again. The applications still evaluate each user's assigned permissions. Which capability provides the sign-in experience?",
      options:[{id:"b",text:"Privileged Identity Management"},{id:"c",text:"Self-service password reset"},{id:"d",text:"Data Loss Prevention"},{id:"a",text:"Single sign-on"}],answer:"a",
      rationale:"Single sign-on reuses the authenticated session across authorized applications. It reduces repeated credential prompts but does not bypass each application's authorization decisions."
    },
    {
      id:"c12",domain:"core",type:"single",
      prompt:"Membership must update automatically when a user's department attribute becomes Sales. The same object will grant access to a sales SharePoint site; it does not need an email address. What should be configured?",
      options:[{id:"a",text:"A dynamic security group"},{id:"b",text:"A dynamic distribution group"},{id:"c",text:"A shared mailbox"},{id:"d",text:"A SharePoint folder with anonymous links"}],answer:"a",
      rationale:"A dynamic security group can calculate membership from user attributes and grant resource access. A dynamic distribution group recalculates recipients when email is sent and is intended for mail distribution, not authorization."
    },
    {
      id:"c13",domain:"core",type:"multi",
      prompt:"The Identity Secure Score rises from 52% to 68% after an MFA rollout. Which two conclusions are valid?",
      options:[{id:"a",text:"The tenant is more aligned with Microsoft's scored identity-security recommendations"},{id:"b",text:"The tenant now has a 32% probability of being breached"},{id:"c",text:"Relevant high-impact improvement actions should still be reviewed"},{id:"d",text:"Every user and application is now protected from identity attacks"},{id:"e",text:"The score replaces sign-in risk investigation"}],answer:["a","c"],
      rationale:"Identity Secure Score is a posture indicator based on recommended controls. It supports prioritization, but it is neither a breach-probability measure nor proof of complete protection, and it does not replace event investigation."
    },
    {
      id:"c14",domain:"core",type:"single",
      prompt:"Security administrators should have no permanent privileged role assignment. They must request activation, complete MFA, provide justification, and lose the role after two hours. Which capability meets the requirement?",
      options:[{id:"b",text:"Conditional Access report-only mode"},{id:"a",text:"Microsoft Entra Privileged Identity Management"},{id:"c",text:"Microsoft Purview Communication Compliance"},{id:"d",text:"A mail-enabled security group"}],answer:"a",
      rationale:"PIM supports eligible assignments and controlled, time-bound activation with requirements such as MFA, justification, and approval. Conditional Access can impose sign-in controls but does not manage the role's activation lifecycle."
    },
    {
      id:"c15",domain:"core",type:"single",
      prompt:"Contoso has consented to a multitenant expense application. An administrator needs to review the application's tenant-specific permissions, user assignments, and sign-in activity. Which Entra object and page should be used?",
      options:[{id:"b",text:"The application object under App registrations in the developer's home tenant"},{id:"c",text:"A managed identity under Microsoft 365 admin center"},{id:"a",text:"The service principal under Enterprise applications"},{id:"d",text:"A distribution group under Exchange admin center"}],answer:"a",
      rationale:"The enterprise application is the local service-principal instance in Contoso's tenant. It records tenant-specific access, assignments, consent, and sign-ins. The app registration is the application's blueprint in its home tenant."
    },

    {
      id:"g01",domain:"governance",type:"single",
      prompt:"A document contains a customer number that follows a company-specific pattern not covered by Microsoft's built-in definitions. The organization wants Purview policies to recognize that pattern across content. What should be created first?",
      options:[{id:"b",text:"A retention label"},{id:"c",text:"A Conditional Access named location"},{id:"d",text:"A SharePoint restricted access control policy"},{id:"a",text:"A custom sensitive information type"}],answer:"a",
      rationale:"A custom sensitive information type defines how Purview detects organization-specific sensitive data. Labels and DLP policies can then use that classification; retention and access controls solve different requirements."
    },
    {
      id:"g02",domain:"governance",type:"single",caseStudy:"fabrikam",
      prompt:"Fabrikam wants the Confidential label on merger files to continue restricting who can open the files after they are downloaded or emailed. What change is required?",
      options:[{id:"a",text:"Configure encryption and usage rights in the sensitivity label"},{id:"b",text:"Convert the sensitivity label into a retention label"},{id:"c",text:"Add the files to a Content search"},{id:"d",text:"Raise Fabrikam's Compliance Manager score"}],answer:"a",
      rationale:"Sensitivity-label encryption provides persistent protection and usage rights that travel with supported files. A label that only marks content does not itself restrict access after the file leaves SharePoint."
    },
    {
      id:"g03",domain:"governance",type:"multi",caseStudy:"fabrikam",
      prompt:"Which two controls together best address employees pasting customer data into external AI websites?",
      options:[{id:"a",text:"Use DSPM for AI to discover AI usage and assess related data risks"},{id:"b",text:"Use an appropriate DLP policy to detect and restrict sensitive data movement to supported AI sites"},{id:"c",text:"Use a retention policy to prevent every browser upload"},{id:"d",text:"Use Identity Secure Score to classify customer data"},{id:"e",text:"Use a data access governance report to block all external websites"}],answer:["a","b"],
      rationale:"DSPM for AI provides visibility and recommendations for AI-related data risk, while DLP can detect sensitive information and enforce supported restrictions. Retention, Secure Score, and SharePoint access reports do not provide this combination."
    },
    {
      id:"g04",domain:"governance",type:"single",caseStudy:"fabrikam",
      prompt:"Which SharePoint Advanced Management capability should Fabrikam use as the temporary control while owners remediate the high-risk sites?",
      options:[{id:"b",text:"Restricted access control"},{id:"a",text:"Restricted content discovery"},{id:"c",text:"A retention label"},{id:"d",text:"A Communication Compliance policy"}],answer:"a",
      rationale:"Restricted content discovery is intended as a temporary measure to keep high-risk sites and content from surfacing in organization-wide search and Copilot experiences during remediation. Restricted access control instead limits site access to designated groups."
    },
    {
      id:"g05",domain:"governance",type:"multi",caseStudy:"fabrikam",
      prompt:"Which two actions address the stated SharePoint access and legal-retention requirements?",
      options:[{id:"a",text:"Run data access governance reports to locate broad permissions and sharing"},{id:"b",text:"Apply an appropriate seven-year retention policy or retention label to the merger content"},{id:"c",text:"Delete all broadly shared sites before reviewing business need"},{id:"d",text:"Use Researcher to identify files that must be retained"},{id:"e",text:"Replace sensitivity labels with Teams app policies"}],answer:["a","b"],
      rationale:"Data access governance reports expose potential oversharing for remediation, while retention controls preserve content for the required period. Neither control substitutes for the other. Immediate deletion could violate both business and legal requirements."
    },
    {
      id:"g06",domain:"governance",type:"single",
      prompt:"A DLP alert shows that a user shared a file containing passport numbers. The business says approved travel staff may share this data with the travel agency. What should the investigator do first?",
      options:[{id:"b",text:"Delete the DLP policy so approved sharing can continue"},{id:"c",text:"Immediately disable the user's account without validating the event"},{id:"a",text:"Review the matched rule, content context, user, destination, and any recorded justification"},{id:"d",text:"Create a retention label for all passports"}],answer:"a",
      rationale:"An alert is a signal requiring validation. The investigator should first establish which rule matched and whether the event is an approved exception, false positive, or policy violation before choosing proportionate remediation."
    },
    {
      id:"g07",domain:"governance",type:"multi",
      prompt:"A manager reports two concerns: an employee downloaded an unusual volume of confidential files before resigning, and another employee sent threatening language in Teams. Which two mappings are correct?",
      options:[{id:"a",text:"Use Insider Risk Management for the unusual download and departure signals"},{id:"b",text:"Use Communication Compliance for the potentially threatening messages"},{id:"c",text:"Use Data Lifecycle Management to determine the sign-in risk"},{id:"d",text:"Use Content search as the policy that automatically blocks both behaviors"},{id:"e",text:"Use Identity Secure Score to review message language"}],answer:["a","b"],
      rationale:"Insider Risk Management correlates relevant user and data signals for potential insider risk. Communication Compliance detects and supports review of policy violations in supported communications. The other tools have different purposes."
    },
    {
      id:"g08",domain:"governance",type:"single",
      prompt:"An analyst knows the organization has files containing national identification numbers but needs to find where the classified data is stored and inspect the findings. Which Purview experience is the best fit?",
      options:[{id:"b",text:"Activity explorer"},{id:"c",text:"Compliance Manager"},{id:"d",text:"Communication Compliance"},{id:"a",text:"Data Explorer"}],answer:"a",
      rationale:"Data Explorer is content-centric and helps locate and examine classified sensitive data. Activity explorer is activity-centric and is better for reviewing actions such as label changes or DLP rule matches."
    },
    {
      id:"g09",domain:"governance",type:"single",
      prompt:"A compliance lead needs assessments mapped to a regulation, improvement actions, owners, and a posture score. The lead does not need to investigate individual file events. Which solution should be used?",
      options:[{id:"a",text:"Microsoft Purview Compliance Manager"},{id:"b",text:"Microsoft Purview Activity explorer"},{id:"c",text:"Microsoft Entra sign-in logs"},{id:"d",text:"Microsoft Defender XDR incidents"}],answer:"a",
      rationale:"Compliance Manager organizes regulatory assessments and improvement actions and calculates a compliance score. Activity explorer and event logs supply operational evidence, not the requested assessment workflow."
    },
    {
      id:"g10",domain:"governance",type:"single",
      prompt:"Legal provides keywords, custodians, and a date range for a case. Investigators must find responsive email and SharePoint files without changing user permissions. What should they use?",
      options:[{id:"b",text:"A SharePoint data access governance report"},{id:"a",text:"Content search in Microsoft Purview eDiscovery"},{id:"c",text:"Microsoft Entra access reviews"},{id:"d",text:"Copilot Analytics"}],answer:"a",
      rationale:"Content search searches supported Microsoft 365 locations using case-relevant criteria. It does not grant end users new access. Data access governance reports permissions and oversharing rather than finding case content by query."
    },
    {
      id:"g11",domain:"governance",type:"multi",
      prompt:"Which two statements correctly describe Microsoft 365 Copilot grounding and permissions?",
      options:[{id:"a",text:"Microsoft Graph can supply work context such as accessible mail, files, meetings, and relationships"},{id:"b",text:"Copilot grants temporary read permission to inaccessible items when they are highly relevant"},{id:"c",text:"The requesting user's existing permissions constrain organizational content used in responses"},{id:"d",text:"A Copilot license converts private SharePoint sites to organization-wide sites"},{id:"e",text:"Web grounding automatically bypasses tenant DLP policies"}],answer:["a","c"],
      rationale:"Graph helps assemble relevant work context, and Copilot operates within the requesting user's authorization. It does not expand SharePoint permissions or grant access because an item is relevant."
    },
    {
      id:"g12",domain:"governance",type:"single",
      prompt:"A user can open an encrypted spreadsheet, but Copilot cannot summarize it. The sensitivity label grants the user VIEW permission but not permission to extract content. What is the best explanation?",
      options:[{id:"b",text:"Copilot ignores label encryption and the failure must be a service outage"},{id:"c",text:"The file must be made accessible to Everyone except external users"},{id:"a",text:"Copilot must honor the label's usage rights and cannot extract the content"},{id:"d",text:"A second Copilot license is required for encrypted files"}],answer:"a",
      rationale:"Copilot honors sensitivity-label encryption and usage rights. Being able to view a file does not necessarily give Copilot the rights needed to extract and reason over its contents. Broadening SharePoint access would not fix the rights requirement safely."
    },
    {
      id:"g13",domain:"governance",type:"single",
      prompt:"A departing executive's replacement must know every SharePoint and OneDrive site the executive can access, including access inherited through groups. Which report best supports the review?",
      options:[{id:"b",text:"The Microsoft 365 Copilot usage report"},{id:"c",text:"The Entra risky users report"},{id:"d",text:"The Exchange mail flow report"},{id:"a",text:"The data access governance Site permissions for users report"}],answer:"a",
      rationale:"The Site permissions for users snapshot identifies sites a selected user can access and whether access is direct or inherited. It is designed for access reviews such as role changes, departures, and Copilot readiness."
    },
    {
      id:"g14",domain:"governance",type:"single",
      prompt:"A confidential research site must remain discoverable to its approved team, but access must be denied to anyone outside two designated Entra security groups even if an old sharing link exists. Which control should be configured?",
      options:[{id:"a",text:"Restricted access control for the SharePoint site"},{id:"b",text:"Restricted content discovery for the SharePoint site"},{id:"c",text:"A tenant-wide retention policy"},{id:"d",text:"A Content search query"}],answer:"a",
      rationale:"Restricted access control adds a group-membership gate to the site; users outside the designated groups cannot open content even if they otherwise have a permission or link. Restricted content discovery limits discovery but does not revoke access."
    },
    {
      id:"g15",domain:"governance",type:"multi",
      prompt:"A governance board evaluates an employee-screening agent. Which two actions most directly support the responsible AI principles of transparency and accountability?",
      options:[{id:"a",text:"Tell candidates when AI assists the process and explain the role it plays"},{id:"b",text:"Assign a named owner and maintain human review and an escalation path"},{id:"c",text:"Hide limitations so users will trust the output"},{id:"d",text:"Allow the agent to make every final decision without review"},{id:"e",text:"Use the largest available model regardless of the business need"}],answer:["a","b"],
      rationale:"Transparency calls for clear disclosure and understandable information about the system. Accountability requires ownership, oversight, and mechanisms to review or challenge outcomes. Concealing limitations and removing human responsibility conflict with those principles."
    },
    {
      id:"g16",domain:"governance",type:"single",
      prompt:"After deploying sensitivity labels and DLP, an administrator must determine who downgraded labels, which files matched a DLP rule, and what action users took. Which experience should the administrator review?",
      options:[{id:"b",text:"Data Explorer"},{id:"a",text:"Activity explorer"},{id:"c",text:"Compliance Manager"},{id:"d",text:"Identity Secure Score"}],answer:"a",
      rationale:"Activity explorer provides an activity-focused view of label, DLP, and related user events. Data Explorer focuses on where sensitive content exists rather than the sequence of user actions."
    },
    {
      id:"g17",domain:"governance",type:"order",
      prompt:"Arrange the actions for a defensible response to a new DLP alert.",
      options:[{id:"triage",text:"Review the alert, matched rule, content context, user, and destination"},{id:"validate",text:"Determine whether the event is authorized, a false positive, or a policy violation"},{id:"respond",text:"Apply proportionate remediation or escalation"},{id:"improve",text:"Record the outcome and tune the policy if evidence supports a change"}],answer:["triage","validate","respond","improve"],
      rationale:"A sound alert workflow gathers evidence, validates what occurred, responds proportionately, and then documents and improves the control. Acting before validation can disrupt legitimate work or obscure the investigation."
    },

    {
      id:"a01",domain:"administration",type:"single",
      prompt:"A company has an eligible Microsoft 365 subscription. Occasional users need web-grounded Copilot Chat, while frequent users need automatic grounding in work data and Copilot inside Word, Excel, Outlook, and Teams. Which plan is most appropriate?",
      options:[{id:"b",text:"Assign a Microsoft 365 Copilot add-on license to every user because Copilot Chat is never included"},{id:"c",text:"Configure SharePoint pay-as-you-go for embedded Copilot in every Microsoft 365 app"},{id:"a",text:"Use included Copilot Chat for occasional users and assign Microsoft 365 Copilot add-on licenses to frequent users"},{id:"d",text:"Give frequent users the Global Administrator role"}],answer:"a",
      rationale:"Eligible subscriptions include web-grounded Copilot Chat, while the Microsoft 365 Copilot add-on provides work grounding and embedded app experiences. Administrative roles do not grant product entitlement, and pay-as-you-go is not a substitute for every licensed app capability."
    },
    {
      id:"a02",domain:"administration",type:"single",
      prompt:"An administrator sets a GBP 2,000 budget on a Copilot pay-as-you-go billing policy. Usage reaches GBP 2,000 halfway through the month. What should the administrator expect?",
      options:[{id:"b",text:"All metered Copilot services stop immediately"},{id:"c",text:"The billing policy automatically becomes a monthly user license"},{id:"d",text:"The Azure subscription and resource group are deleted"},{id:"a",text:"Budget notifications are sent, but usage can continue and exceed the amount"}],answer:"a",
      rationale:"A pay-as-you-go budget is a monitoring and notification mechanism, not a hard spending cap. Administrators must monitor usage and take management action if spending should be curtailed."
    },
    {
      id:"a03",domain:"administration",type:"multi",
      prompt:"A pilot should allow Copilot Chat but must prevent web grounding and user access to nonapproved agents. Which two administrative controls address the requirements most directly?",
      options:[{id:"a",text:"Configure the policy that controls web search in Copilot"},{id:"b",text:"Restrict agent availability or installation for the pilot through Copilot and agent controls"},{id:"c",text:"Disable Microsoft Entra ID for pilot users"},{id:"d",text:"Remove all SharePoint permissions from pilot users"},{id:"e",text:"Create an Exchange transport rule"}],answer:["a","b"],
      rationale:"Copilot management controls can govern web search grounding and agent availability separately. Disabling identity or removing all content access would break unrelated work and does not target the two stated capabilities."
    },
    {
      id:"a04",domain:"administration",type:"single",
      prompt:"A strategist needs a structured, source-cited report that synthesizes market information from the web with internal documents. The task can take longer than a normal chat response. Which experience should be used?",
      options:[{id:"a",text:"Researcher"},{id:"b",text:"Analyst"},{id:"c",text:"Activity explorer"},{id:"d",text:"Compliance Manager"}],answer:"a",
      rationale:"Researcher is designed for complex, multistep research across permitted work and web sources and produces structured, cited reports. Analyst is optimized for analysis of datasets, trends, statistics, and outliers."
    },
    {
      id:"a05",domain:"administration",type:"single",
      prompt:"A sales leader supplies several CSV and Excel files and asks for statistical comparisons, outliers, trends, and charts. Which Microsoft Copilot experience best fits?",
      options:[{id:"b",text:"Researcher"},{id:"a",text:"Analyst"},{id:"c",text:"Communication Compliance"},{id:"d",text:"Microsoft Defender XDR"}],answer:"a",
      rationale:"Analyst specializes in reasoning over structured data from one or more files and producing calculations, trends, outliers, tables, and visualizations. Researcher is the closer alternative but is aimed at multi-source research and synthesis."
    },
    {
      id:"a06",domain:"administration",type:"multi",
      prompt:"A standard Copilot response can summarize a policy, but the organization also needs to query a curated knowledge set and create a ticket through a line-of-business API. Which two capabilities justify using a custom agent?",
      options:[{id:"a",text:"Grounding the experience in specialized approved knowledge"},{id:"b",text:"Invoking an action that creates the ticket"},{id:"c",text:"Increasing every user's SharePoint permissions"},{id:"d",text:"Replacing Microsoft Entra authentication"},{id:"e",text:"Bypassing DLP for automated tasks"}],answer:["a","b"],
      rationale:"Custom agents extend Copilot with specialized instructions and knowledge plus actions or workflows. They remain subject to identity, permissions, security, and compliance controls; they do not bypass them."
    },
    {
      id:"a07",domain:"administration",type:"multi",
      prompt:"An adoption lead needs a basic tenant-wide count of active Copilot users and deeper analysis of how adoption relates to work patterns and business outcomes. Which two sources should be used?",
      options:[{id:"a",text:"Microsoft 365 admin center Copilot usage reports for basic adoption metrics"},{id:"b",text:"Copilot Analytics in Viva Insights for deeper adoption and impact analysis"},{id:"c",text:"Microsoft Entra app registrations for prompt counts"},{id:"d",text:"SharePoint version history for business outcomes"},{id:"e",text:"Exchange message trace for agent usage"}],answer:["a","b"],
      rationale:"Microsoft 365 admin reports provide readiness and core usage measures. Copilot Analytics adds richer organizational adoption and impact insights where licensed and configured. Identity and workload logs do not substitute for these reporting experiences."
    },
    {
      id:"a08",domain:"administration",type:"multi",
      prompt:"A team has a carefully tested prompt. Members must be able to reuse it, while the author wants a recurring run at the start of each week. Which two prompt actions meet the requirements?",
      options:[{id:"a",text:"Share the prompt with the team through the supported prompt-sharing experience"},{id:"b",text:"Schedule the prompt with the required recurrence"},{id:"c",text:"Share the author's Microsoft 365 account credentials"},{id:"d",text:"Publish the prompt anonymously on a public website"},{id:"e",text:"Convert the prompt into a retention policy"}],answer:["a","b"],
      rationale:"Prompt Gallery supports reuse through sharing, and supported prompt scheduling handles recurring execution. Sharing an identity or publishing potentially sensitive prompt content publicly is unnecessary and unsafe."
    },
    {
      id:"a09",domain:"administration",type:"single",caseStudy:"litware",
      prompt:"What should the administrator do before publishing the support agent to the pilot?",
      options:[{id:"b",text:"Grant tenant-wide consent to every requested permission and publish it to everyone"},{id:"c",text:"Remove the SharePoint knowledge source so no review is required"},{id:"a",text:"Review its definition, data sources, actions, and requested permissions, then scope publication to Support-Pilot"},{id:"d",text:"Assign all support staff the Global Administrator role"}],answer:"a",
      rationale:"The approval workflow exposes the agent's capabilities, data, actions, and permissions for review. The publishing process can then limit availability or installation to selected users or groups, supporting a controlled pilot."
    },
    {
      id:"a10",domain:"administration",type:"single",caseStudy:"litware",
      prompt:"Which reporting combination best meets Litware's post-rollout requirements?",
      options:[{id:"b",text:"Use Identity Secure Score for adoption and Exchange message trace for action failures"},{id:"c",text:"Use Content search for adoption and Compliance Manager for conversation latency"},{id:"d",text:"Use the domain settings page for both requirements"},{id:"a",text:"Use Microsoft 365 agent usage reporting for adoption and operational insights for failures and action performance"}],answer:"a",
      rationale:"Agent usage reporting measures adoption, while operational insights and agent analytics help identify conversation or tool failures. The other sources address security posture, mail flow, discovery, or tenant configuration rather than agent operation."
    },
    {
      id:"a11",domain:"administration",type:"multi",caseStudy:"litware",
      prompt:"The support agent's only owner leaves Litware. Which two actions are appropriate while the agent is assessed?",
      options:[{id:"a",text:"Use the agent registry to identify the ownerless agent and assign a suitable new owner"},{id:"b",text:"Block the agent temporarily if continued operation presents an unreviewed risk"},{id:"c",text:"Give every support user ownership automatically"},{id:"d",text:"Delete all SharePoint source sites"},{id:"e",text:"Ignore ownership because published agents no longer need lifecycle management"}],answer:["a","b"],
      rationale:"The agent registry surfaces ownerless agents and supports ownership and lifecycle actions. Reassigning accountable ownership is the durable fix; temporary blocking is appropriate when risk requires use to stop during review."
    },
    {
      id:"a12",domain:"administration",type:"single",
      prompt:"An operations administrator must approve agent requests, assign owners, install agents, and change tenant-wide agent configurations. Which role follows least privilege for these tasks?",
      options:[{id:"a",text:"AI Administrator"},{id:"b",text:"AI Reader"},{id:"c",text:"Reports Reader"},{id:"d",text:"Global Reader"}],answer:"a",
      rationale:"AI Administrator can perform tenant-wide agent governance and configuration. Reader roles can inspect relevant information but cannot approve, install, or modify agents. Global Administrator would also work but is more privileged than necessary."
    },
    {
      id:"a13",domain:"administration",type:"order",
      prompt:"Arrange the activities into a governed rollout for a new custom agent.",
      options:[{id:"build",text:"Create the agent with defined instructions, approved knowledge, and required actions"},{id:"test",text:"Test answers, permissions, safety behavior, and action outcomes"},{id:"review",text:"Submit for administrative review of data, tools, permissions, and audience"},{id:"operate",text:"Publish to the approved audience, monitor usage and failures, and manage retirement"}],answer:["build","test","review","operate"],
      rationale:"A governed lifecycle defines and builds the agent, validates it before release, obtains approval with an explicit audience, and then treats operation, monitoring, ownership, and retirement as continuing responsibilities."
    }
  ]
};
