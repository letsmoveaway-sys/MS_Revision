window.EXAM_CATALOG = window.EXAM_CATALOG || { defaultExam: "ab-900", exams: {} };
window.EXAM_CATALOG.exams["ab-900"] = {
  id: "ab-900",
  version: "3.0.0",
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
    },

    /* ---- v3.0 additions: core services and security ---- */
    {
      id:"c16",domain:"core",type:"single",
      prompt:"A company must give administrators a sign-in method that resists phishing, because attackers have been relaying one-time codes through fake sign-in pages. Which method should be required?",
      options:[{id:"a",text:"SMS one-time passcode"},{id:"b",text:"Voice call verification"},{id:"c",text:"A FIDO2 security key or passkey"},{id:"d",text:"Microsoft Authenticator push notification with no number matching"}],answer:"c",
      rationale:"FIDO2 security keys and passkeys are bound to the genuine sign-in origin, so a relayed or fake page cannot reuse the credential. SMS and voice codes can be intercepted or relayed, and a simple push approval is vulnerable to MFA fatigue. Windows Hello for Business and certificate-based authentication are the other phishing-resistant options."
    },
    {
      id:"c17",domain:"core",type:"yesno",
      prompt:"You are reviewing authentication methods in Microsoft Entra ID.",
      options:[{id:"s1",text:"SMS-based verification is classified as a phishing-resistant authentication method."},{id:"s2",text:"Windows Hello for Business can provide passwordless sign-in on a Windows device."},{id:"s3",text:"Microsoft Authenticator can be used both as a second factor and for passwordless sign-in."}],
      answer:{s1:"no",s2:"yes",s3:"yes"},
      rationale:"Box 1: No. SMS is a weaker method because codes can be intercepted, SIM-swapped, or relayed. Box 2: Yes. Windows Hello for Business uses a device-bound key unlocked by a PIN or biometric and is phishing-resistant. Box 3: Yes. Authenticator supports push or code MFA as well as passwordless phone sign-in and passkeys."
    },
    {
      id:"c18",domain:"core",type:"single",
      prompt:"Users receive emails containing links that were safe when delivered but later redirect to a credential-harvesting site. The organization needs links checked at the moment a user clicks them in email and Office apps. Which capability should be configured?",
      options:[{id:"a",text:"Safe Attachments in Microsoft Defender for Office 365"},{id:"b",text:"Safe Links in Microsoft Defender for Office 365"},{id:"c",text:"A Microsoft Purview DLP policy for Exchange"},{id:"d",text:"Communication Compliance for email"}],answer:"b",
      rationale:"Safe Links rewrites and checks URLs at time of click, so a link that becomes malicious after delivery can still be blocked. Safe Attachments detonates attachments in a sandbox. DLP and Communication Compliance address sensitive data and policy violations, not malicious URLs."
    },
    {
      id:"c19",domain:"core",type:"match",label:"DRAG DROP",
      prompt:"You need to identify which Microsoft Defender XDR component primarily detects each threat. Match each threat to the appropriate component.",
      options:[{id:"t1",text:"A malicious macro arrives as an email attachment"},{id:"t2",text:"Ransomware begins encrypting files on a corporate laptop"},{id:"t3",text:"Employees use an unsanctioned generative-AI SaaS app"},{id:"t4",text:"An attacker attempts pass-the-hash against on-premises Active Directory"}],
      choices:[{id:"office",text:"Microsoft Defender for Office 365"},{id:"endpoint",text:"Microsoft Defender for Endpoint"},{id:"apps",text:"Microsoft Defender for Cloud Apps"},{id:"identity",text:"Microsoft Defender for Identity"},{id:"purview",text:"Microsoft Purview Insider Risk Management"}],
      answer:{t1:"office",t2:"endpoint",t3:"apps",t4:"identity"},
      rationale:"Defender for Office 365 protects email and collaboration content. Defender for Endpoint detects and responds to device threats such as ransomware. Defender for Cloud Apps discovers and governs SaaS usage, including shadow AI. Defender for Identity monitors on-premises Active Directory signals for attacks such as pass-the-hash. Insider Risk Management is a Purview data-risk solution, not a threat-detection component of Defender XDR."
    },
    {
      id:"c20",domain:"core",type:"single",
      prompt:"A security lead wants expert-written reports on an active ransomware campaign, including the techniques used and whether the organization's own devices and mailboxes are exposed. Which capability should the lead use?",
      options:[{id:"a",text:"Identity Secure Score"},{id:"b",text:"Microsoft Purview Compliance Manager"},{id:"c",text:"Microsoft Entra audit logs"},{id:"d",text:"Threat analytics in the Microsoft Defender portal"}],answer:"d",
      rationale:"Threat analytics combines Microsoft threat intelligence reports with the tenant's own exposure, related incidents, and recommended mitigations. Secure Score measures posture against recommendations, Compliance Manager covers regulatory controls, and audit logs record configuration changes."
    },
    {
      id:"c21",domain:"core",type:"single",
      prompt:"A user's sign-in is flagged for atypical travel and an anonymous IP address. The organization wants such sign-ins to be challenged for MFA automatically instead of being reviewed manually each time. What should be configured?",
      options:[{id:"a",text:"A sign-in risk–based Conditional Access policy that uses Microsoft Entra ID Protection signals"},{id:"b",text:"A dynamic security group based on usage location"},{id:"c",text:"A Microsoft Purview Insider Risk Management policy"},{id:"d",text:"A Teams meeting policy"}],answer:"a",
      rationale:"Microsoft Entra ID Protection calculates sign-in and user risk. Conditional Access can use sign-in risk as a condition and require MFA, or block access, automatically. Risky sign-ins can still be reviewed in the ID Protection reports. Insider Risk Management focuses on data-related user activity, not authentication risk."
    },
    {
      id:"c22",domain:"core",type:"multi",
      prompt:"A user reports being blocked when signing in from a hotel. The administrator must determine which policy caused the block and test how policies would apply to that sign-in. Which two tools should the administrator use?",
      options:[{id:"a",text:"The Microsoft Entra sign-in log entry, including its failure reason and Conditional Access tab"},{id:"b",text:"The Conditional Access What If tool"},{id:"c",text:"Identity Secure Score improvement actions"},{id:"d",text:"Microsoft Purview Content search"},{id:"e",text:"The Microsoft 365 Copilot usage report"}],answer:["a","b"],
      rationale:"The sign-in log shows the error code, failure reason, and which Conditional Access policies applied, with their result. The What If tool simulates a sign-in with chosen conditions to show which policies would apply. Secure Score, Content search, and Copilot reports do not explain an individual sign-in decision."
    },
    {
      id:"c23",domain:"core",type:"single",
      prompt:"An investigator needs to find out who deleted a document from a SharePoint site last week and who later accessed a related mailbox. Which tool provides searchable records of user activity across these workloads?",
      options:[{id:"a",text:"Microsoft Entra audit logs"},{id:"b",text:"Exchange message trace"},{id:"c",text:"Audit (the unified audit log) in Microsoft Purview"},{id:"d",text:"The SharePoint data access governance report"}],answer:"c",
      rationale:"Microsoft Purview Audit searches the unified audit log, which records user and admin activity across SharePoint, OneDrive, Exchange, Teams, and other services. Entra audit logs focus on directory changes, message trace tracks mail delivery, and data access governance reports describe permissions and sharing rather than individual actions."
    },
    {
      id:"c24",domain:"core",type:"single",
      prompt:"The organization-level external sharing setting in the SharePoint admin center is \"New and existing guests\". A marketing site owner needs \"Anyone\" links for a public press kit. What must happen before the site can allow Anyone links?",
      options:[{id:"a",text:"The site owner changes the library's permissions to Everyone"},{id:"b",text:"The organization-level setting is changed to allow Anyone; the site-level setting can then be raised"},{id:"c",text:"The press kit is moved to a Teams private channel"},{id:"d",text:"A retention label is applied to the press kit"}],answer:"b",
      rationale:"In the SharePoint admin center, a site's sharing setting can be the same as or more restrictive than the organization-level setting, never more permissive. To use Anyone links on one site, the organization level must allow Anyone first. The site can then be set to Anyone while other sites stay restricted."
    },
    {
      id:"c25",domain:"core",type:"yesno",
      prompt:"You are planning SharePoint and Teams storage for a project.",
      options:[{id:"s1",text:"A document library can be given unique permissions that differ from the rest of its site."},{id:"s2",text:"Each standard channel in a team gets its own separate SharePoint site."},{id:"s3",text:"When manual storage management is enabled, an administrator can set a storage limit for an individual site in the SharePoint admin center."}],
      answer:{s1:"yes",s2:"no",s3:"yes"},
      rationale:"Box 1: Yes. Libraries, folders, and items can break permission inheritance, although group-based site permissions are easier to manage. Box 2: No. Standard channels use a folder in the team's SharePoint site; private and shared channels get their own sites. Box 3: Yes. With manual storage management, per-site limits are set from Active sites in the SharePoint admin center."
    },
    {
      id:"c26",domain:"core",type:"single",
      prompt:"Five hundred frontline workers receive Microsoft 365 E3 through a group. They must not get Viva Engage, but every other service in the licence must remain available. What is the most efficient approach?",
      options:[{id:"a",text:"Remove the E3 licence and assign each individual service separately"},{id:"b",text:"Block the users with a Conditional Access policy for every Microsoft 365 app"},{id:"c",text:"In the group-based licence assignment, turn off the Viva Engage service plan"},{id:"d",text:"Create a shared mailbox for frontline workers"}],answer:"c",
      rationale:"Licences contain service plans that can be switched off individually when the licence is assigned, including through group-based licensing. This keeps the rest of E3 and applies automatically to new group members. Conditional Access controls sign-in conditions, not licence entitlement."
    },

    /* ---- v3.0 additions: data protection and governance ---- */
    {
      id:"g18",domain:"governance",type:"single",
      prompt:"Only signed contracts in a large document library must be kept for seven years, and users should decide which individual documents are contracts. Other content in the library should keep its existing lifecycle. What should be used?",
      options:[{id:"a",text:"A retention policy applied to the entire SharePoint site"},{id:"b",text:"A sensitivity label with encryption"},{id:"c",text:"A Communication Compliance policy"},{id:"d",text:"A retention label published to the site so users can apply it to individual items"}],answer:"d",
      rationale:"Retention labels apply retention settings at item level and can be published for users to apply, or applied automatically. A retention policy applies the same settings to everything in the selected locations. Sensitivity labels protect content but do not retain it."
    },
    {
      id:"g19",domain:"governance",type:"yesno",
      prompt:"Several Microsoft Purview retention settings apply to the same SharePoint content.",
      options:[{id:"s1",text:"If one setting retains an item and another would delete it, the item is retained until the retention period ends."},{id:"s2",text:"When a user deletes a file from a site under a retention policy, a copy is preserved in the Preservation Hold library."},{id:"s3",text:"When two retention periods apply, the shorter retention period wins."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. Retention wins over deletion. Box 2: Yes. SharePoint and OneDrive keep retained content in the Preservation Hold library when users edit or delete it. Box 3: No. The longest retention period wins. Explicit labels take precedence over implicit policies for deletion, and the shortest deletion period applies when deletion settings conflict."
    },
    {
      id:"g20",domain:"governance",type:"single",
      prompt:"Finalised board minutes must not be edited or deleted by anyone, including their author, until the retention period ends. Which configuration meets the requirement?",
      options:[{id:"a",text:"A retention label configured to mark items as a record"},{id:"b",text:"A sensitivity label that adds a watermark"},{id:"c",text:"A DLP policy that blocks external sharing"},{id:"d",text:"Restricted content discovery on the site"}],answer:"a",
      rationale:"When a retention label marks an item as a record, editing and deletion are restricted in line with records-management rules, beyond basic retention. Watermarks and DLP do not stop deletion, and restricted content discovery only affects search and Copilot discovery."
    },
    {
      id:"g21",domain:"governance",type:"single",
      prompt:"The organization wants Purview to recognise CVs and source-code files. These documents have no consistent numeric pattern, but plenty of example files exist. Which classification method fits best?",
      options:[{id:"a",text:"A keyword dictionary sensitive information type"},{id:"b",text:"Exact data match"},{id:"c",text:"A trainable classifier"},{id:"d",text:"A Conditional Access authentication context"}],answer:"c",
      rationale:"Trainable classifiers recognise categories of content from examples rather than from patterns, and Microsoft provides pre-trained classifiers such as Resumes and Source code. Exact data match compares content with known values from a sensitive table. A dictionary only matches listed keywords."
    },
    {
      id:"g22",domain:"governance",type:"single",
      prompt:"A DLP policy that detects generic 10-digit numbers produces many false positives. The organization wants to detect only the account numbers that actually exist in its customer database. Which classification method should be used?",
      options:[{id:"a",text:"Exact data match (EDM) sensitive information type"},{id:"b",text:"A trainable classifier"},{id:"c",text:"A retention label"},{id:"d",text:"Identity Secure Score"}],answer:"a",
      rationale:"EDM-based classification matches content against hashed values from an uploaded sensitive-information table, so only real customer values trigger a match. This sharply reduces false positives compared with generic patterns."
    },
    {
      id:"g23",domain:"governance",type:"match",label:"DRAG DROP",
      prompt:"You need to recommend a Microsoft Purview solution for each requirement. Match each requirement to the correct solution.",
      options:[{id:"r1",text:"Classify documents and encrypt them so protection follows the file"},{id:"r2",text:"Prevent users from emailing credit card numbers to external recipients"},{id:"r3",text:"Keep content for a set period and then delete it automatically"},{id:"r4",text:"Detect harassment in Teams messages for reviewer investigation"},{id:"r5",text:"Detect a departing employee exfiltrating confidential files"}],
      choices:[{id:"mip",text:"Information Protection"},{id:"dlp",text:"Data Loss Prevention"},{id:"dlm",text:"Data Lifecycle Management"},{id:"cc",text:"Communication Compliance"},{id:"irm",text:"Insider Risk Management"},{id:"cm",text:"Compliance Manager"}],
      answer:{r1:"mip",r2:"dlp",r3:"dlm",r4:"cc",r5:"irm"},
      rationale:"Information Protection uses sensitivity labels to classify and encrypt content. DLP detects and restricts sensitive data in motion. Data Lifecycle Management applies retention and deletion. Communication Compliance detects policy violations in messages. Insider Risk Management correlates risky user activity such as data theft before departure. Compliance Manager assesses regulatory posture and does not perform these actions."
    },
    {
      id:"g24",domain:"governance",type:"match",label:"DRAG DROP",
      prompt:"Match each scenario to the Microsoft responsible AI principle it most directly supports.",
      options:[{id:"p1",text:"Testing an agent's loan recommendations for similar outcomes across demographic groups"},{id:"p2",text:"Validating that an agent behaves predictably and fails safely under unexpected input"},{id:"p3",text:"Ensuring an agent only processes personal data that users are permitted to access"},{id:"p4",text:"Designing an agent that works with screen readers and supports multiple languages"}],
      choices:[{id:"fair",text:"Fairness"},{id:"rel",text:"Reliability and safety"},{id:"priv",text:"Privacy and security"},{id:"inc",text:"Inclusiveness"},{id:"tra",text:"Transparency"}],
      answer:{p1:"fair",p2:"rel",p3:"priv",p4:"inc"},
      rationale:"Microsoft's six principles are fairness, reliability and safety, privacy and security, inclusiveness, transparency, and accountability. Equal treatment across groups is fairness. Predictable, safe behaviour is reliability and safety. Protecting data and respecting access is privacy and security. Designing for people of all abilities is inclusiveness."
    },
    {
      id:"g25",domain:"governance",type:"single",
      prompt:"Security wants a list of every generative-AI SaaS app that employees use, with a risk score for each, and wants to block unapproved apps on managed devices. Which solution should be used?",
      options:[{id:"a",text:"Microsoft Purview Compliance Manager"},{id:"b",text:"Microsoft Defender for Cloud Apps, by marking apps as unsanctioned"},{id:"c",text:"A SharePoint data access governance report"},{id:"d",text:"Microsoft Entra Privileged Identity Management"}],answer:"b",
      rationale:"Defender for Cloud Apps discovers cloud apps, including generative-AI apps, scores them in its cloud app catalog, and can block unsanctioned apps on devices onboarded to Defender for Endpoint. DSPM for AI complements this by showing sensitive-data risk in AI interactions."
    },
    {
      id:"g26",domain:"governance",type:"yesno",
      prompt:"You are explaining Microsoft 365 Copilot data handling to a governance board.",
      options:[{id:"s1",text:"Copilot surfaces only organisational content that the signed-in user already has permission to access."},{id:"s2",text:"Prompts and responses from Microsoft 365 Copilot are used to train the underlying foundation models."},{id:"s3",text:"Copilot respects sensitivity-label encryption and usage rights when it accesses labelled content."}],
      answer:{s1:"yes",s2:"no",s3:"yes"},
      rationale:"Box 1: Yes. Copilot uses the requesting user's existing permissions through Microsoft Graph. Box 2: No. Microsoft states that prompts, responses, and Graph data are not used to train foundation models. Box 3: Yes. Copilot honours label encryption and needs the appropriate usage rights, such as VIEW and EXTRACT, to use the content."
    },
    {
      id:"g27",domain:"governance",type:"single",
      prompt:"During an early Copilot pilot, a company wants organisation-wide search and Copilot to draw only on a curated list of reviewed SharePoint sites while a broad oversharing review is completed. Users must keep their existing access to all other sites. What should be configured?",
      options:[{id:"a",text:"Restricted access control on every site"},{id:"b",text:"A tenant-wide retention policy"},{id:"c",text:"Restricted SharePoint Search with an allowed list of sites"},{id:"d",text:"A Teams app permission policy"}],answer:"c",
      rationale:"Restricted SharePoint Search is a temporary, tenant-level measure that limits organisation-wide search and Copilot to an allowed list of up to 100 sites, plus content users own or have recently used. It does not change permissions. Restricted access control limits access to specific sites, and restricted content discovery excludes individual sites."
    },
    {
      id:"g28",domain:"governance",type:"single",
      prompt:"A data access governance report identifies 40 sites with content shared with \"Everyone except external users\". The central IT team wants each site owner to review and fix access on their own site. What should the administrator do?",
      options:[{id:"a",text:"Initiate a site access review from the report, using SharePoint Advanced Management"},{id:"b",text:"Delete the 40 sites and ask owners to recreate them"},{id:"c",text:"Assign every site owner the SharePoint Administrator role"},{id:"d",text:"Create a Communication Compliance policy for the site owners"}],answer:"a",
      rationale:"SharePoint Advanced Management can start site access reviews from data access governance reports. Site owners receive the review and remediate access, and admins track progress centrally. This delegates the work without granting tenant-wide admin rights."
    },
    {
      id:"g29",domain:"governance",type:"yesno",
      prompt:"You are configuring Microsoft Purview Data Security Posture Management (DSPM) for AI.",
      options:[{id:"s1",text:"DSPM for AI can report on users' interactions with Microsoft 365 Copilot."},{id:"s2",text:"Detecting sensitive data pasted into third-party AI websites requires devices to be onboarded to Microsoft Purview."},{id:"s3",text:"DSPM for AI automatically deletes Copilot interactions that contain sensitive information."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. DSPM for AI provides reports and activity for Copilot and other AI apps. Box 2: Yes. Visibility of browser-based AI sites depends on device onboarding (endpoint DLP) and, for supported browsers, the Purview browser extension. Box 3: No. DSPM for AI discovers risk and recommends policies such as DLP, Insider Risk, and retention. It does not delete interactions itself."
    },
    {
      id:"g30",domain:"governance",type:"single",
      prompt:"Legal requires Microsoft 365 Copilot prompts and responses to be kept for one year and to remain discoverable for investigations. What should the administrator create?",
      options:[{id:"a",text:"A retention label applied to the user's OneDrive"},{id:"b",text:"A retention policy for the Microsoft Copilot experiences location"},{id:"c",text:"A sensitivity label for all prompts"},{id:"d",text:"A Copilot pay-as-you-go billing policy"}],answer:"b",
      rationale:"Newly created retention policies use the Microsoft Copilot experiences location for Microsoft 365 Copilot and Copilot Chat interactions. The data is stored in hidden mailbox folders and can be searched with eDiscovery tools. Retention labels on OneDrive files do not cover Copilot interactions."
    },

    /* ---- v3.0 additions: Copilot and agent administration ---- */
    {
      id:"a14",domain:"administration",type:"single",
      prompt:"Two hundred sales staff need Microsoft 365 Copilot licences, and new sales hires must receive one automatically. What should the administrator do with the least ongoing effort?",
      options:[{id:"a",text:"Assign the licence to each user manually every week"},{id:"b",text:"Grant the sales staff the License Administrator role"},{id:"c",text:"Configure a pay-as-you-go billing policy for the sales team"},{id:"d",text:"Assign the Copilot licence to a dynamic group based on the Sales department"}],answer:"d",
      rationale:"Group-based licensing, available from the Microsoft 365 admin center or Microsoft Entra, assigns the licence to everyone in the group. A dynamic group adds new hires automatically. Admin roles grant management rights, not product entitlement, and pay-as-you-go does not replace a per-user Microsoft 365 Copilot licence."
    },
    {
      id:"a15",domain:"administration",type:"yesno",
      prompt:"You are preparing to license Microsoft 365 Copilot.",
      options:[{id:"s1",text:"A user needs a qualifying Microsoft 365 or Office 365 base licence before a Microsoft 365 Copilot licence can be used."},{id:"s2",text:"Microsoft 365 Copilot Chat requires the Microsoft 365 Copilot add-on licence."},{id:"s3",text:"Only a Global Administrator can assign Microsoft 365 Copilot licences."}],
      answer:{s1:"yes",s2:"no",s3:"no"},
      rationale:"Box 1: Yes. The Microsoft 365 Copilot add-on requires an eligible base plan. Box 2: No. Web-grounded Copilot Chat is included for eligible Entra ID users at no extra cost; the add-on adds work grounding and in-app experiences. Box 3: No. Roles such as License Administrator and User Administrator can assign licences, in line with least privilege."
    },
    {
      id:"a16",domain:"administration",type:"order",
      prompt:"You need to enable pay-as-you-go billing for Copilot Chat agent usage for a finance pilot group. Arrange the actions in the correct order.",
      options:[{id:"azure",text:"Make sure an Azure subscription and resource group are available for billing"},{id:"policy",text:"In the Microsoft 365 admin center, create a billing policy linked to that subscription and resource group"},{id:"scope",text:"Scope the billing policy to the finance pilot group and set a budget alert"},{id:"connect",text:"Connect the billing policy to the Copilot Chat service and monitor usage"}],answer:["azure","policy","scope","connect"],
      rationale:"Pay-as-you-go uses an Azure subscription for metered charges. The billing policy, created in the Microsoft 365 admin center, links that subscription and resource group, defines which users it covers, and can carry a budget for alerts. The policy is then connected to a service such as Copilot Chat, and usage is monitored under Billing & usage."
    },
    {
      id:"a17",domain:"administration",type:"single",
      prompt:"Users without a Microsoft 365 Copilot licence use an agent in Copilot Chat that answers from SharePoint content. Licensed users use the same agent. Which statement about billing is correct?",
      options:[{id:"a",text:"Both groups are free because Copilot Chat is included"},{id:"b",text:"Unlicensed users' agent interactions that use work data are metered and billed through pay-as-you-go or prepaid capacity; licensed users' use is included"},{id:"c",text:"Licensed users are billed per message, but unlicensed users are not"},{id:"d",text:"The agent is blocked for unlicensed users regardless of billing configuration"}],answer:"b",
      rationale:"Copilot Chat is included, but agents that ground on tenant data such as SharePoint use metered consumption for users without a Microsoft 365 Copilot licence. That usage is billed through a pay-as-you-go billing policy or prepaid Copilot capacity. Usage by Microsoft 365 Copilot–licensed users is covered by their licence."
    },
    {
      id:"a18",domain:"administration",type:"match",label:"DRAG DROP",
      prompt:"Your organisation needs several agents. Match each requirement to the most appropriate authoring tool.",
      options:[{id:"n1",text:"A business user quickly creates a no-code agent inside Microsoft 365 Copilot that answers from a few files and sites"},{id:"n2",text:"A team builds an agent with custom connectors, multi-step topics, and autonomous triggers"},{id:"n3",text:"A site owner creates an agent scoped to the content of one SharePoint site"}],
      choices:[{id:"lite",text:"Copilot Studio Lite (formerly Agent Builder)"},{id:"studio",text:"Microsoft Copilot Studio (full experience)"},{id:"sp",text:"SharePoint agent"},{id:"entra",text:"Microsoft Entra app registration"}],
      answer:{n1:"lite",n2:"studio",n3:"sp"},
      rationale:"Copilot Studio Lite, inside Microsoft 365 Copilot, is for quick declarative agents built from instructions and knowledge. Full Copilot Studio supports connectors, complex topics, workflows, and autonomous agents. SharePoint agents are created from a site or library and grounded in that content. An app registration is an identity object, not an agent-authoring tool."
    },
    {
      id:"a19",domain:"administration",type:"single",
      prompt:"Makers in the Sales environment must not be able to connect Copilot Studio agents to a consumer social-media connector. Where should the administrator enforce this?",
      options:[{id:"a",text:"A data policy (connector DLP policy) in the Power Platform admin center"},{id:"b",text:"A Microsoft Purview retention policy"},{id:"c",text:"A Teams app setup policy"},{id:"d",text:"The Microsoft 365 admin center domain settings"}],answer:"a",
      rationale:"Power Platform data policies classify connectors as business, non-business, or blocked for each environment. They govern which connectors Copilot Studio agents and Power Platform apps can use. Purview retention and Teams policies do not control connector use."
    },
    {
      id:"a20",domain:"administration",type:"yesno",
      prompt:"You are monitoring agents across the organisation.",
      options:[{id:"s1",text:"Copilot Studio capacity consumption can be reviewed per environment in the Power Platform admin center."},{id:"s2",text:"The Agents page in the Microsoft 365 admin center provides an agent inventory and lets an admin block an agent for users."},{id:"s3",text:"Blocking an agent in the Microsoft 365 admin center permanently deletes the agent from Copilot Studio."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. The Power Platform admin center shows licensing and capacity consumption, such as Copilot Credits, by environment, along with agent analytics. Box 2: Yes. The Microsoft 365 admin center lists agents and supports actions such as deploy, block, and owner management. Box 3: No. Blocking stops users from using the agent; it does not delete the agent's definition."
    },
    {
      id:"a21",domain:"administration",type:"single",
      prompt:"Users currently share agents they build with Copilot Studio Lite with the entire organisation. Only the Champions group should be able to share broadly; other users may still share with specific colleagues. Where should this be configured?",
      options:[{id:"a",text:"Microsoft Entra Conditional Access"},{id:"b",text:"The Sharing setting under Agents > Settings in the Microsoft 365 admin center"},{id:"c",text:"A SharePoint site sharing setting"},{id:"d",text:"A Purview Communication Compliance policy"}],answer:"b",
      rationale:"The agent Sharing setting can allow all users, no users, or specific groups to share agents with everyone in the organisation, while direct sharing with individuals remains possible. User access, on the same page, controls who can use agents, and allowed agent types controls which publishers' agents appear."
    },
    {
      id:"a22",domain:"administration",type:"yesno",
      prompt:"A team is standardising how it reuses Copilot prompts.",
      options:[{id:"s1",text:"Users can save a prompt so they can reuse it later from their saved prompts."},{id:"s2",text:"Saving a prompt also stores Copilot's response so that the same output is returned next time."},{id:"s3",text:"A scheduled prompt runs at the configured recurrence without the user starting it manually."}],
      answer:{s1:"yes",s2:"no",s3:"yes"},
      rationale:"Box 1: Yes. Saved prompts can be reused and shared with a team. Box 2: No. Only the prompt is saved; Copilot generates a new response each time from current data. Box 3: Yes. Scheduled prompts run automatically on the chosen schedule, and users can edit, pause, or delete them."
    },
    {
      id:"a23",domain:"administration",type:"match",label:"HOTSPOT",
      prompt:"You need to control specific Copilot capabilities. Select the admin center where each setting is configured.",
      options:[{id:"x1",text:"Allow Copilot in Teams meetings only when a transcript is saved"},{id:"x2",text:"Prevent users from installing agents built by external publishers"},{id:"x3",text:"Prevent one high-risk site's content from appearing in Copilot responses"}],
      choices:[{id:"teams",text:"Teams admin center"},{id:"m365",text:"Microsoft 365 admin center"},{id:"spo",text:"SharePoint admin center"},{id:"entra",text:"Microsoft Entra admin center"}],
      answer:{x1:"teams",x2:"m365",x3:"spo"},
      rationale:"The Copilot setting in a Teams meeting policy (Meetings > Meeting policies), for example \"On with saved transcript required\", is in the Teams admin center. Allowed agent types, under Agents > Settings, is in the Microsoft 365 admin center. Restricted content discovery for a site is configured in the SharePoint admin center, using SharePoint Advanced Management."
    },
    {
      id:"a24",domain:"administration",type:"yesno",
      prompt:"You are comparing built-in Copilot capabilities with agents.",
      options:[{id:"s1",text:"Researcher and Analyst are prebuilt reasoning agents available to Microsoft 365 Copilot users."},{id:"s2",text:"Agents can perform actions such as creating a record through a connector, not just retrieve information."},{id:"s3",text:"A declarative agent runs with elevated permissions that bypass the user's access to SharePoint content."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. Researcher handles multistep research and Analyst handles data analysis. Box 2: Yes. Agents can include actions through connectors, APIs, or flows. Box 3: No. Declarative agents use Copilot's orchestrator and security model, so knowledge is limited to what the user can access."
    }

  ]
};
