window.EXAM_CATALOG = window.EXAM_CATALOG || { defaultExam: "sc-900", exams: {} };
window.EXAM_CATALOG.exams["sc-900"] = {
  id: "sc-900",
  version: "1.0.0",
  code: "SC-900",
  title: "Microsoft Security, Compliance, and Identity Fundamentals",
  heroTitle: "Secure the<br><em>whole estate.</em>",
  description: "Exam-difficulty practice on security concepts, Microsoft Entra, Azure and Defender security solutions, Microsoft Sentinel, and Microsoft Purview compliance.",
  durationMinutes: 60,
  source: "https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/sc-900",
  domains: {
    concepts: "Describe security, compliance, and identity concepts",
    entra: "Describe the capabilities of Microsoft Entra",
    security: "Describe the capabilities of Microsoft security solutions",
    compliance: "Describe the capabilities of Microsoft compliance solutions"
  },
  caseStudies: {},
  questions: [
    /* ===== Concepts: 10 / 80 = 12.5% ===== */
    {
      id:"c01",domain:"concepts",type:"multi",
      prompt:"Under the shared responsibility model, which three responsibilities always remain with the customer, whether workloads run on-premises or in IaaS, PaaS, or SaaS?",
      options:[{id:"a",text:"Information and data"},{id:"b",text:"Devices (mobile devices and PCs)"},{id:"c",text:"Accounts and identities"},{id:"d",text:"Physical hosts"},{id:"e",text:"Physical datacenter"}],answer:["a","b","c"],
      rationale:"In every model the customer owns their data, the endpoints that access it, and the accounts and identities used. Physical hosts, networks, and datacenters move to the cloud provider in IaaS, PaaS, and SaaS. Other responsibilities, such as operating systems and network controls, shift depending on the service model."
    },
    {
      id:"c02",domain:"concepts",type:"match",label:"DRAG DROP",
      prompt:"Match each task to the party responsible for it under the shared responsibility model. Each option may be used once, more than once, or not at all.",
      options:[{id:"t1",text:"Patching the guest operating system on an Azure virtual machine (IaaS)"},{id:"t2",text:"Physical security of the Azure datacenter"},{id:"t3",text:"Patching the operating system that runs Azure App Service (PaaS)"},{id:"t4",text:"Deciding who can open documents in SharePoint Online (SaaS)"}],
      choices:[{id:"cust",text:"Customer"},{id:"ms",text:"Microsoft"},{id:"isp",text:"The customer's internet service provider"}],
      answer:{t1:"cust",t2:"ms",t3:"ms",t4:"cust"},
      rationale:"In IaaS the customer manages the guest OS. Microsoft always owns physical security and manages the platform OS in PaaS. Access to SaaS content is a data and identity decision, so it stays with the customer."
    },
    {
      id:"c03",domain:"concepts",type:"single",
      prompt:"A company combines MFA, network security groups, disk encryption, and DDoS protection, so that if one control fails the others still protect its data. Which concept does this describe?",
      options:[{id:"a",text:"Zero Trust"},{id:"b",text:"Defence in depth"},{id:"c",text:"Shared responsibility"},{id:"d",text:"Governance, risk, and compliance"}],answer:"b",
      rationale:"Defence in depth layers several independent controls (identity, perimeter, network, compute, application, data) to slow an attacker. Zero Trust is the close distractor, but it is a strategy based on verifying explicitly, least privilege, and assuming breach, rather than the idea of stacking layers."
    },
    {
      id:"c04",domain:"concepts",type:"yesno",
      prompt:"You are explaining the Zero Trust model.",
      options:[{id:"s1",text:"\"Assume breach\" includes segmenting access to limit the blast radius."},{id:"s2",text:"Zero Trust trusts any device on the corporate network by default."},{id:"s3",text:"\"Verify explicitly\" means making access decisions from signals such as identity, location, and device health."}],
      answer:{s1:"yes",s2:"no",s3:"yes"},
      rationale:"Box 1: Yes. Assume breach means minimising impact through segmentation, encryption, and analytics. Box 2: No. Zero Trust removes implicit trust based on network location. Box 3: Yes. Every request is evaluated using all available signals."
    },
    {
      id:"c05",domain:"concepts",type:"single",
      prompt:"An app must store user passwords so that the original passwords cannot be recovered, even by administrators, but a password entered at sign-in can still be checked. What should be used?",
      options:[{id:"a",text:"Symmetric encryption with a key stored in Key Vault"},{id:"b",text:"Asymmetric encryption"},{id:"c",text:"Base64 encoding"},{id:"d",text:"Salted hashing"}],answer:"d",
      rationale:"Hashing is one-way: the entered password is hashed and compared with the stored hash. A salt defeats precomputed lookup tables. Any form of encryption is reversible by whoever holds the key, and Base64 is encoding, not security."
    },
    {
      id:"c06",domain:"concepts",type:"single",
      prompt:"A partner must send you files that only you can decrypt, without the two organisations ever sharing a secret key. How does asymmetric encryption achieve this?",
      options:[{id:"a",text:"The partner encrypts with your public key, and you decrypt with your private key"},{id:"b",text:"The partner encrypts with your private key, and you decrypt with your public key"},{id:"c",text:"Both parties use the same shared key"},{id:"d",text:"The partner hashes the files, and you reverse the hash"}],answer:"a",
      rationale:"Anyone can encrypt with a public key, but only the matching private key can decrypt. Your private key never leaves you. Signing works the other way round: the sender signs with their private key and others verify with the public key."
    },
    {
      id:"c07",domain:"concepts",type:"match",label:"DRAG DROP",
      prompt:"Match each activity to the part of governance, risk, and compliance (GRC) it represents.",
      options:[{id:"g1",text:"Keeping EU customers' personal data in the EU because a law requires it"},{id:"g2",text:"Identifying threats to the business and assessing their likelihood and impact"},{id:"g3",text:"Defining the policies and processes that control how the organisation operates"}],
      choices:[{id:"comp",text:"Compliance"},{id:"risk",text:"Risk"},{id:"gov",text:"Governance"},{id:"did",text:"Defence in depth"}],
      answer:{g1:"comp",g2:"risk",g3:"gov"},
      rationale:"Compliance is meeting external obligations such as laws and regulations. Risk management identifies and assesses threats. Governance is the internal system of rules and processes. Defence in depth is a security strategy, not part of GRC."
    },
    {
      id:"c08",domain:"concepts",type:"single",
      prompt:"After signing in successfully, a user can open a document but cannot edit it. Which concept determines what the user is allowed to do?",
      options:[{id:"a",text:"Authentication"},{id:"b",text:"Federation"},{id:"c",text:"Authorization"},{id:"d",text:"Encryption"}],answer:"c",
      rationale:"Authentication (AuthN) proves who the user is. Authorization (AuthZ) decides what that verified identity can do, such as read-only access."
    },
    {
      id:"c09",domain:"concepts",type:"single",
      prompt:"Users at a partner organisation must sign in to your application with their own organisation's credentials. Your application should trust the partner's identity provider instead of creating accounts for them. Which concept is this?",
      options:[{id:"a",text:"Directory synchronisation"},{id:"b",text:"Federation"},{id:"c",text:"Creating local accounts with shared passwords"},{id:"d",text:"Hashing"}],answer:"b",
      rationale:"Federation establishes trust between identity providers, so users authenticate with their home provider and access resources elsewhere. Directory synchronisation copies identities between directories, which is the close distractor."
    },
    {
      id:"c10",domain:"concepts",type:"yesno",
      prompt:"You are comparing identity concepts.",
      options:[{id:"s1",text:"Active Directory Domain Services and Microsoft Entra ID are the same service."},{id:"s2",text:"Modern identity providers commonly use protocols such as OAuth 2.0 and OpenID Connect."},{id:"s3",text:"A federation trust must always be bidirectional."}],
      answer:{s1:"no",s2:"yes",s3:"no"},
      rationale:"Box 1: No. AD DS is an on-premises directory that uses Kerberos and LDAP, while Entra ID is a cloud identity service that uses modern web protocols. Box 2: Yes. OAuth 2.0, OpenID Connect, and SAML are standard. Box 3: No. Federation trust can be one-way; for example, B trusts A without A trusting B."
    },

    /* ===== Microsoft Entra: 22 / 80 = 27.5% ===== */
    {
      id:"e01",domain:"entra",type:"single",
      prompt:"An app running on an Azure virtual machine must read secrets from Azure Key Vault. No credentials may be stored in code or configuration, and none should need rotating. What should the app use?",
      options:[{id:"a",text:"A service principal with a client secret"},{id:"b",text:"A managed identity"},{id:"c",text:"A dedicated user account with a strong password"},{id:"d",text:"A guest account"}],answer:"b",
      rationale:"Managed identities are workload identities whose credentials Azure creates, rotates, and protects. A service principal with a secret works, but the secret must be stored and rotated, which breaks the requirement."
    },
    {
      id:"e02",domain:"entra",type:"single",
      prompt:"Twenty Azure Functions must share one identity that has the same permissions. The identity must survive if any one function is deleted. Which identity type should be used?",
      options:[{id:"a",text:"A system-assigned managed identity on each function"},{id:"b",text:"A guest user"},{id:"c",text:"A user-assigned managed identity"},{id:"d",text:"A security group"}],answer:"c",
      rationale:"A user-assigned managed identity is a standalone resource that can be attached to many resources, and its lifecycle is independent of them. A system-assigned identity belongs to one resource and is deleted with it."
    },
    {
      id:"e03",domain:"entra",type:"match",label:"DRAG DROP",
      prompt:"Match each scenario to the type of identity it represents in Microsoft Entra ID. Each type may be used once or not at all.",
      options:[{id:"i1",text:"A consultant from a partner company is invited to collaborate in your Teams"},{id:"i2",text:"A third-party SaaS application's identity in your tenant"},{id:"i3",text:"An identity that Azure creates and manages automatically for a virtual machine"},{id:"i4",text:"A company-owned Windows laptop joined directly to Entra ID"}],
      choices:[{id:"guest",text:"Guest (B2B) user"},{id:"sp",text:"Service principal (enterprise application)"},{id:"mi",text:"Managed identity"},{id:"joined",text:"Microsoft Entra joined device"},{id:"reg",text:"Microsoft Entra registered device"},{id:"member",text:"Member user"}],
      answer:{i1:"guest",i2:"sp",i3:"mi",i4:"joined"},
      rationale:"External collaborators are guest users. An application's local identity in a tenant is a service principal. Managed identities are Azure-managed workload identities. Corporate devices that sign in with organisational accounts are Entra joined; registered devices are typically personal (bring your own device)."
    },
    {
      id:"e04",domain:"entra",type:"single",
      prompt:"Users must sign in to cloud apps with their on-premises password. Each sign-in must be validated against on-premises Active Directory in real time, and password hashes must not be stored in the cloud. The solution should need the least on-premises infrastructure. Which hybrid sign-in method fits?",
      options:[{id:"a",text:"Password hash synchronisation"},{id:"b",text:"Federation with AD FS"},{id:"c",text:"Pass-through authentication"},{id:"d",text:"Cloud-only accounts"}],answer:"c",
      rationale:"Pass-through authentication validates passwords on-premises using lightweight agents, and no hashes are stored in Entra ID. AD FS also authenticates on-premises, but it needs a server farm, so it does not meet the least-infrastructure requirement."
    },
    {
      id:"e05",domain:"entra",type:"single",
      prompt:"A company wants users to keep signing in to Microsoft 365 even if the on-premises datacenter goes offline. It also wants Microsoft Entra ID Protection to detect leaked credentials. Which hybrid sign-in method best meets both requirements?",
      options:[{id:"a",text:"Password hash synchronisation"},{id:"b",text:"Pass-through authentication only"},{id:"c",text:"Federation with AD FS only"},{id:"d",text:"Seamless SSO without synchronisation"}],answer:"a",
      rationale:"With password hash synchronisation, Entra ID authenticates directly, so sign-in does not depend on on-premises servers. The synced hashes also enable leaked-credential detection. PTA and AD FS both depend on on-premises availability."
    },
    {
      id:"e06",domain:"entra",type:"single",
      prompt:"Which authentication method is both passwordless and phishing-resistant?",
      options:[{id:"a",text:"SMS one-time passcode"},{id:"b",text:"A FIDO2 security key"},{id:"c",text:"Microsoft Authenticator push notification"},{id:"d",text:"An OATH hardware token used with a password"}],answer:"b",
      rationale:"FIDO2 security keys (passkeys) use origin-bound public-key cryptography and need no password. Windows Hello for Business and certificate-based authentication are also phishing-resistant. Push approvals can be abused through MFA fatigue, SMS codes can be relayed, and an OATH token is used alongside a password."
    },
    {
      id:"e07",domain:"entra",type:"yesno",
      prompt:"You are reviewing statements about multifactor authentication (MFA).",
      options:[{id:"s1",text:"MFA requires factors from at least two different categories: something you know, something you have, or something you are."},{id:"s2",text:"A password plus a security question is a form of MFA."},{id:"s3",text:"Security defaults can enforce MFA for all users without an additional licence."}],
      answer:{s1:"yes",s2:"no",s3:"yes"},
      rationale:"Box 1: Yes. MFA combines different factor types. Box 2: No. Both are something you know, so they count as one factor. Box 3: Yes. Security defaults are free and require MFA registration and use; Conditional Access gives finer control but needs Entra ID P1."
    },
    {
      id:"e08",domain:"entra",type:"single",
      prompt:"Users keep choosing passwords such as \"Contoso2026!\" that contain the company name. What should be configured to block these and common variations?",
      options:[{id:"a",text:"Smart lockout"},{id:"b",text:"A custom banned password list in Microsoft Entra Password Protection"},{id:"c",text:"Self-service password reset"},{id:"d",text:"A Conditional Access policy"}],answer:"b",
      rationale:"Password Protection checks new passwords against Microsoft's global banned list and your custom list of organisation-specific terms, including normalised variations. Smart lockout throttles password-guessing attempts rather than weak password choices."
    },
    {
      id:"e09",domain:"entra",type:"single",
      prompt:"Attackers are guessing passwords from many IP addresses. The company wants the attackers locked out while genuine users signing in from familiar locations can still get in. Which feature does this?",
      options:[{id:"a",text:"Smart lockout"},{id:"b",text:"A custom banned password list"},{id:"c",text:"Access reviews"},{id:"d",text:"Privileged Identity Management"}],answer:"a",
      rationale:"Smart lockout distinguishes familiar from unfamiliar sign-in locations and locks out suspected attackers sooner, while still allowing genuine users."
    },
    {
      id:"e10",domain:"entra",type:"single",
      prompt:"In a hybrid environment, users must reset forgotten passwords themselves from the web, and the new password must also work on-premises. What should be configured?",
      options:[{id:"a",text:"Self-service password reset with password writeback"},{id:"b",text:"Self-service password reset in cloud-only mode"},{id:"c",text:"A custom banned password list"},{id:"d",text:"Pass-through authentication without self-service password reset"}],answer:"a",
      rationale:"SSPR lets users reset their own passwords. Password writeback, through Entra Connect or Cloud Sync, writes the new password to on-premises AD so it works there too."
    },
    {
      id:"e11",domain:"entra",type:"single",
      prompt:"Access to a CRM SaaS app must be allowed only from devices that Intune marks as compliant; all other devices must be blocked. What should be configured?",
      options:[{id:"a",text:"A Privileged Identity Management role setting"},{id:"b",text:"A Conditional Access policy that targets the app and grants access only to compliant devices"},{id:"c",text:"A network security group"},{id:"d",text:"An access review"}],answer:"b",
      rationale:"Conditional Access evaluates signals, here the target app and device compliance, and makes the access decision. Requiring a compliant device is a grant control."
    },
    {
      id:"e12",domain:"entra",type:"match",label:"DRAG DROP",
      prompt:"Match each Conditional Access policy setting to the part of the policy it belongs to. Each option may be used once, more than once, or not at all.",
      options:[{id:"x1",text:"Users connecting from outside a named location"},{id:"x2",text:"Require multifactor authentication"},{id:"x3",text:"Browser-only access to SharePoint with no downloads on unmanaged devices"},{id:"x4",text:"Sign-in risk level is High"}],
      choices:[{id:"sig",text:"Assignment or condition (signal)"},{id:"grant",text:"Grant control"},{id:"sess",text:"Session control"}],
      answer:{x1:"sig",x2:"grant",x3:"sess",x4:"sig"},
      rationale:"Locations and risk levels are conditions (signals) that decide when a policy applies. MFA is a grant requirement. Limiting what a user can do during a session, such as app-enforced restrictions, is a session control."
    },
    {
      id:"e13",domain:"entra",type:"yesno",
      prompt:"You are reviewing statements about Microsoft Entra Conditional Access.",
      options:[{id:"s1",text:"Conditional Access policies are enforced after first-factor authentication is completed."},{id:"s2",text:"Conditional Access requires Microsoft Entra ID P1 or higher."},{id:"s3",text:"Conditional Access can mitigate a volumetric DDoS attack against a public website."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. Conditional Access is not a first line of defence against attacks such as password spray; it applies after the first factor. Box 2: Yes. It is a P1 feature. Box 3: No. DDoS mitigation is a network service (Azure DDoS Protection), not identity access control."
    },
    {
      id:"e14",domain:"entra",type:"single",
      prompt:"Helpdesk staff must reset passwords for non-administrator users only. Following least privilege, which Microsoft Entra role should they get?",
      options:[{id:"a",text:"Global Administrator"},{id:"b",text:"User Administrator"},{id:"c",text:"Security Administrator"},{id:"d",text:"Password Administrator"}],answer:"d",
      rationale:"Password Administrator can reset passwords for non-administrators and other Password Administrators, and nothing more. User Administrator can also create and manage users and groups, which is more than required."
    },
    {
      id:"e15",domain:"entra",type:"single",
      prompt:"An operations engineer must start, stop, and resize virtual machines in one Azure resource group, but nothing else. What should be assigned?",
      options:[{id:"a",text:"The Global Administrator role in Microsoft Entra ID"},{id:"b",text:"The User Administrator role in Microsoft Entra ID"},{id:"c",text:"The Virtual Machine Contributor Azure role, scoped to the resource group"},{id:"d",text:"The Security Reader role in Microsoft Entra ID"}],answer:"c",
      rationale:"Azure resources are governed by Azure RBAC roles assigned at a scope, such as a resource group. Microsoft Entra roles manage directory objects such as users and apps, not Azure resources."
    },
    {
      id:"e16",domain:"entra",type:"single",
      prompt:"The built-in Application Administrator role is too broad. A team needs only the permissions to update the credentials of app registrations. What should be created?",
      options:[{id:"a",text:"A Microsoft Entra custom role with only the required permissions"},{id:"b",text:"A new Microsoft Entra tenant"},{id:"c",text:"A guest account"},{id:"d",text:"A network security group"}],answer:"a",
      rationale:"Custom roles bundle selected permissions to meet least privilege when built-in roles are too broad. Custom roles require Entra ID P1."
    },
    {
      id:"e17",domain:"entra",type:"single",
      prompt:"Staff from a partner company must request access to a bundle of resources (a team, a SharePoint site, and an app). Requests need sponsor approval and access must expire after 90 days. Which feature fits?",
      options:[{id:"a",text:"Access reviews"},{id:"b",text:"Privileged Identity Management"},{id:"c",text:"A Conditional Access policy"},{id:"d",text:"Access packages in entitlement management"}],answer:"d",
      rationale:"Entitlement management bundles resources into access packages, with request, approval, and expiration policies, including for external users. Access reviews recertify existing access but do not handle requests."
    },
    {
      id:"e18",domain:"entra",type:"single",
      prompt:"Every quarter, managers must confirm whether each member of their team still needs membership of a sensitive group. Members who are not confirmed should be removed automatically. Which feature should be used?",
      options:[{id:"a",text:"Access reviews"},{id:"b",text:"Lifecycle workflows"},{id:"c",text:"Identity Secure Score"},{id:"d",text:"Smart lockout"}],answer:"a",
      rationale:"Access reviews run recurring recertification, with reviewers such as managers, and can automatically remove access that is denied or not reviewed."
    },
    {
      id:"e19",domain:"entra",type:"single",
      prompt:"On an employee's last day, recorded in the HR system, their account should be disabled and their group memberships removed automatically. Which Microsoft Entra ID Governance feature does this?",
      options:[{id:"a",text:"Access reviews"},{id:"b",text:"Lifecycle workflows"},{id:"c",text:"Privileged Identity Management"},{id:"d",text:"Self-service password reset"}],answer:"b",
      rationale:"Lifecycle workflows automate joiner, mover, and leaver tasks based on attributes such as employee leave date. Access reviews are periodic recertifications, not event-driven offboarding."
    },
    {
      id:"e20",domain:"entra",type:"match",label:"DRAG DROP",
      prompt:"Match each requirement to the Privileged Identity Management (PIM) capability that meets it.",
      options:[{id:"p1",text:"An administrator holds Global Administrator only when they activate it, for up to four hours"},{id:"p2",text:"Activation needs sign-off from the security manager"},{id:"p3",text:"Users must enter a reason when they activate a role"},{id:"p4",text:"A contractor's role assignment ends automatically on 31 March"}],
      choices:[{id:"jit",text:"Eligible (just-in-time) assignment"},{id:"appr",text:"Approval to activate"},{id:"just",text:"Justification on activation"},{id:"tb",text:"Time-bound assignment"},{id:"pkg",text:"Access package"}],
      answer:{p1:"jit",p2:"appr",p3:"just",p4:"tb"},
      rationale:"PIM provides eligible assignments activated just in time for a limited duration, optional approval, a required justification, and start and end dates for assignments. Access packages belong to entitlement management. PIM requires Entra ID P2 or Entra ID Governance."
    },
    {
      id:"e21",domain:"entra",type:"single",
      prompt:"Microsoft finds a user's credentials in a leak on the dark web. Which Microsoft Entra ID Protection risk and response is most appropriate?",
      options:[{id:"a",text:"Sign-in risk, with a policy that requires MFA for each sign-in"},{id:"b",text:"No risk, because the password has not been used"},{id:"c",text:"Device risk, with a policy that wipes the device"},{id:"d",text:"User risk, with a risk-based policy that requires a secure password change"}],answer:"d",
      rationale:"Leaked credentials raise user risk, meaning the account is likely compromised. The remedy is a secure password change, after MFA, enforced through a user-risk Conditional Access policy. Sign-in risk relates to a specific suspicious sign-in, such as an anonymous IP address."
    },
    {
      id:"e22",domain:"entra",type:"yesno",
      prompt:"You are reviewing statements about Microsoft Entra ID Protection.",
      options:[{id:"s1",text:"Atypical travel is an example of a sign-in risk detection."},{id:"s2",text:"ID Protection is included with Microsoft Entra ID Free."},{id:"s3",text:"Risky users and risky sign-ins reports help administrators investigate detections."}],
      answer:{s1:"yes",s2:"no",s3:"yes"},
      rationale:"Box 1: Yes. Atypical travel flags sign-ins from locations too far apart in the time between them. Box 2: No. The full ID Protection features require Entra ID P2. Box 3: Yes. These reports, along with risk detections, support investigation and remediation."
    },

    /* ===== Microsoft security solutions: 30 / 80 = 37.5% ===== */
    {
      id:"s01",domain:"security",type:"single",
      prompt:"A company's public IP addresses in a virtual network need adaptive tuning, attack analytics and alerts, and access to DDoS rapid response support during an attack. What should be enabled?",
      options:[{id:"a",text:"Only the default infrastructure-level DDoS protection"},{id:"b",text:"Azure Web Application Firewall"},{id:"c",text:"Azure DDoS Network Protection"},{id:"d",text:"Network security groups"}],answer:"c",
      rationale:"DDoS Network Protection adds per-resource adaptive tuning, telemetry and alerts, rapid response, and cost protection. Default infrastructure protection is always on, but it is not tuned to your resources and provides no telemetry."
    },
    {
      id:"s02",domain:"security",type:"single",
      prompt:"A public web app must be protected against SQL injection and cross-site scripting attacks. Which service is designed for this?",
      options:[{id:"a",text:"Azure Web Application Firewall on Application Gateway or Front Door"},{id:"b",text:"A network security group on the web subnet"},{id:"c",text:"Azure DDoS Network Protection"},{id:"d",text:"Azure Key Vault"}],answer:"a",
      rationale:"WAF inspects HTTP(S) traffic at layer 7 using managed rule sets for common exploits, such as the OWASP Top 10. NSGs filter on IP addresses, ports, and protocols at layers 3 and 4, and DDoS Protection handles traffic floods."
    },
    {
      id:"s03",domain:"security",type:"single",
      prompt:"Outbound internet traffic from many virtual networks must be controlled centrally by fully qualified domain name (FQDN), with traffic to known malicious IP addresses blocked using threat intelligence. Which service fits?",
      options:[{id:"a",text:"Network security groups"},{id:"b",text:"Azure Firewall"},{id:"c",text:"Azure Bastion"},{id:"d",text:"Azure Web Application Firewall"}],answer:"b",
      rationale:"Azure Firewall is a managed, stateful firewall service with FQDN filtering, threat intelligence-based filtering, and central policy across networks. NSGs cannot filter by FQDN, and WAF protects inbound web traffic."
    },
    {
      id:"s04",domain:"security",type:"match",label:"DRAG DROP",
      prompt:"Match each requirement to the Azure service that meets it. Each service may be used once or not at all.",
      options:[{id:"r1",text:"Administrators connect over RDP to VMs that have no public IP addresses, from the Azure portal"},{id:"r2",text:"Store, control access to, and rotate certificates and database connection strings"},{id:"r3",text:"Allow only TCP 443 from the internet into a subnet"},{id:"r4",text:"Inspect inbound HTTP requests for common web exploits"},{id:"r5",text:"Absorb a volumetric flood against a public IP address"}],
      choices:[{id:"bas",text:"Azure Bastion"},{id:"kv",text:"Azure Key Vault"},{id:"nsg",text:"Network security group"},{id:"waf",text:"Azure Web Application Firewall"},{id:"ddos",text:"Azure DDoS Protection"},{id:"fw",text:"Azure Firewall"}],
      answer:{r1:"bas",r2:"kv",r3:"nsg",r4:"waf",r5:"ddos"},
      rationale:"Bastion provides browser-based RDP and SSH over TLS without exposing VMs. Key Vault manages secrets, keys, and certificates. NSG rules allow or deny traffic by port and address. WAF inspects layer-7 requests. DDoS Protection mitigates floods. Azure Firewall would also work for basic port filtering, but an NSG is the simpler, purpose-built choice for one subnet."
    },
    {
      id:"s05",domain:"security",type:"yesno",
      prompt:"You are configuring network security groups (NSGs).",
      options:[{id:"s1",text:"An NSG can be associated with a subnet or with a network interface."},{id:"s2",text:"Rules with a lower priority number are processed before rules with a higher number."},{id:"s3",text:"NSG rules can filter outbound traffic by fully qualified domain name."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. NSGs can be applied at either level. Box 2: Yes. Processing stops at the first matching rule, starting with the lowest number. Box 3: No. NSGs use IP addresses, service tags, ports, and protocols; FQDN filtering needs Azure Firewall."
    },
    {
      id:"s06",domain:"security",type:"single",
      prompt:"Production and development workloads in Azure must not be able to communicate with each other unless traffic is explicitly allowed. Which approach provides this network segmentation?",
      options:[{id:"a",text:"Store both workloads' secrets in one Key Vault"},{id:"b",text:"Enable DDoS Network Protection"},{id:"c",text:"Place the workloads in separate virtual networks, and peer them only with explicit NSG or firewall rules if needed"},{id:"d",text:"Use one subnet with Azure Bastion"}],answer:"c",
      rationale:"Virtual networks are isolated by default, so separate networks, or subnets controlled by NSGs, segment workloads. Connectivity exists only when you add peering and allow it."
    },
    {
      id:"s07",domain:"security",type:"single",
      prompt:"Developers have hard-coded API keys in source code. The app should retrieve secrets at run time with its managed identity, and encryption keys should be protected by hardware security modules (HSMs). Which service should be used?",
      options:[{id:"a",text:"Azure Key Vault"},{id:"b",text:"Azure Bastion"},{id:"c",text:"Microsoft Sentinel"},{id:"d",text:"Azure Firewall"}],answer:"a",
      rationale:"Key Vault centrally stores secrets, keys, and certificates, with access control and auditing. Premium vaults and Managed HSM offer HSM-backed keys, and apps authenticate with managed identities."
    },
    {
      id:"s08",domain:"security",type:"single",
      prompt:"A company wants a secure score and hardening recommendations for its resources in Azure, AWS, and Google Cloud, from a single place. Which solution should it use?",
      options:[{id:"a",text:"Microsoft Purview Compliance Manager"},{id:"b",text:"Microsoft Defender for Cloud (cloud security posture management)"},{id:"c",text:"Microsoft Entra ID Protection"},{id:"d",text:"Microsoft Defender for Office 365"}],answer:"b",
      rationale:"Defender for Cloud's CSPM capabilities assess configurations against security standards, produce recommendations and a secure score, and connect to AWS and GCP. Compliance Manager covers regulatory controls across Microsoft 365 and more, not cloud resource hardening."
    },
    {
      id:"s09",domain:"security",type:"single",
      prompt:"Security wants to see how an internet-exposed VM with a vulnerability could be used to reach a storage account that holds sensitive data, and to prioritise fixes accordingly. Which capability provides this?",
      options:[{id:"a",text:"Foundational (free) CSPM recommendations"},{id:"b",text:"Network security group flow logs"},{id:"c",text:"Attack path analysis in the Defender CSPM plan"},{id:"d",text:"Azure DDoS Protection telemetry"}],answer:"c",
      rationale:"The paid Defender CSPM plan adds contextual capabilities such as attack path analysis and the cloud security explorer, which reveal exploitable chains. Foundational CSPM lists individual recommendations but does not map attack paths."
    },
    {
      id:"s10",domain:"security",type:"single",
      prompt:"Recommendations are already enabled in Defender for Cloud. The company now needs threat detection for running workloads, such as malware on servers and suspicious access to storage accounts. What should be enabled?",
      options:[{id:"a",text:"More policy initiatives in foundational CSPM"},{id:"b",text:"Workload protection plans, such as Defender for Servers and Defender for Storage"},{id:"c",text:"Microsoft Entra Password Protection"},{id:"d",text:"Self-service password reset"}],answer:"b",
      rationale:"Cloud workload protection (the Defender plans) adds runtime threat detection and enhanced security features for specific resource types. CSPM focuses on posture and misconfigurations, not active threats."
    },
    {
      id:"s11",domain:"security",type:"yesno",
      prompt:"You are reviewing statements about Microsoft Defender for Cloud.",
      options:[{id:"s1",text:"Foundational CSPM capabilities, such as secure score and recommendations, are available at no extra cost."},{id:"s2",text:"The Microsoft cloud security benchmark is the default security standard."},{id:"s3",text:"Defender for Cloud can protect only Azure resources."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. Foundational CSPM is free; Defender CSPM and the workload plans are paid. Box 2: Yes. The Microsoft cloud security benchmark is applied by default. Box 3: No. Defender for Cloud supports AWS, GCP, and on-premises machines through connectors and Azure Arc."
    },
    {
      id:"s12",domain:"security",type:"single",
      prompt:"An auditor asks how well the company's Azure environment aligns with PCI DSS. What does adding the PCI DSS standard to Defender for Cloud provide?",
      options:[{id:"a",text:"Automatic certification of the company by the PCI Council"},{id:"b",text:"Encryption of all cardholder data"},{id:"c",text:"Blocking of all non-compliant traffic"},{id:"d",text:"Mapping of the standard's controls to assessments and recommendations, with status shown in the regulatory compliance dashboard"}],answer:"d",
      rationale:"Standards are built from security policies. Defender for Cloud evaluates resources against them and reports compliance per control, which helps improve posture. It does not certify the organisation or enforce controls by itself."
    },
    {
      id:"s13",domain:"security",type:"single",
      prompt:"When a high-severity incident is created, a device should automatically be isolated, a ticket opened, and the on-call analyst notified. Which capability does this describe?",
      options:[{id:"a",text:"Security orchestration, automation, and response (SOAR)"},{id:"b",text:"Security information and event management (SIEM) data collection"},{id:"c",text:"Cloud security posture management"},{id:"d",text:"Data loss prevention"}],answer:"a",
      rationale:"SOAR automates response actions through playbooks and orchestrates tools. SIEM collects, correlates, and detects. Microsoft Sentinel provides both, with playbooks built on Azure Logic Apps."
    },
    {
      id:"s14",domain:"security",type:"match",label:"DRAG DROP",
      prompt:"Match each requirement to the Microsoft Sentinel capability that meets it. Each capability may be used once or not at all.",
      options:[{id:"q1",text:"Bring in logs from on-premises firewall appliances"},{id:"q2",text:"Show data in interactive dashboards"},{id:"q3",text:"Correlate events into alerts and incidents on a schedule"},{id:"q4",text:"Proactively search with KQL for threats that have not triggered alerts"},{id:"q5",text:"Run automated response actions built on Logic Apps"}],
      choices:[{id:"dc",text:"Data connectors"},{id:"wb",text:"Workbooks"},{id:"ar",text:"Analytics rules"},{id:"hunt",text:"Hunting"},{id:"pb",text:"Playbooks"},{id:"ss",text:"Secure Score"}],
      answer:{q1:"dc",q2:"wb",q3:"ar",q4:"hunt",q5:"pb"},
      rationale:"Data connectors ingest data. Workbooks visualise it. Analytics rules detect threats and create incidents. Hunting runs proactive KQL queries. Playbooks automate response. Secure Score is a posture measure, not a Sentinel capability."
    },
    {
      id:"s15",domain:"security",type:"yesno",
      prompt:"You are reviewing statements about Microsoft Sentinel.",
      options:[{id:"s1",text:"Microsoft Sentinel is a cloud-native SIEM and SOAR solution."},{id:"s2",text:"Microsoft Sentinel can ingest data only from Microsoft services."},{id:"s3",text:"Kusto Query Language (KQL) is used to query data in Microsoft Sentinel."}],
      answer:{s1:"yes",s2:"no",s3:"yes"},
      rationale:"Box 1: Yes. Sentinel combines SIEM and SOAR in the cloud. Box 2: No. Connectors cover third-party clouds, appliances (for example through Syslog or CEF), and custom sources. Box 3: Yes. Analytics rules and hunting use KQL."
    },
    {
      id:"s16",domain:"security",type:"single",
      prompt:"A security operations centre must correlate signals from Microsoft 365, on-premises firewalls, Linux servers, and a third-party cloud provider in one place, to detect threats across all of them. Which solution is designed for this?",
      options:[{id:"a",text:"Microsoft Defender for Office 365"},{id:"b",text:"Microsoft Sentinel"},{id:"c",text:"Microsoft Entra ID Protection"},{id:"d",text:"Microsoft Purview Compliance Manager"}],answer:"b",
      rationale:"A SIEM such as Sentinel aggregates and correlates data from Microsoft and non-Microsoft sources. Defender XDR focuses on Microsoft's own protection signals, and the other options are specific to email, identity risk, or compliance."
    },
    {
      id:"s17",domain:"security",type:"single",
      prompt:"Analysts want related alerts from email, endpoints, identities, and cloud apps grouped automatically into a single incident that shows the full attack story. Which solution provides this natively?",
      options:[{id:"a",text:"Microsoft Defender XDR, in the Microsoft Defender portal"},{id:"b",text:"Azure Firewall"},{id:"c",text:"Microsoft Purview Audit"},{id:"d",text:"Azure Key Vault"}],answer:"a",
      rationale:"Defender XDR correlates signals across its services (Office 365, Endpoint, Identity, Cloud Apps, and more) into unified incidents with automated investigation in the Defender portal."
    },
    {
      id:"s18",domain:"security",type:"single",
      prompt:"Security wants to send realistic but harmless phishing emails to employees and assign training to anyone who clicks. Which capability should be used?",
      options:[{id:"a",text:"Safe Links"},{id:"b",text:"Threat Explorer"},{id:"c",text:"Insider Risk Management"},{id:"d",text:"Attack simulation training in Microsoft Defender for Office 365 Plan 2"}],answer:"d",
      rationale:"Attack simulation training runs phishing simulations and assigns training. It is included in Defender for Office 365 Plan 2. Safe Links protects against malicious URLs, and Threat Explorer is for investigation."
    },
    {
      id:"s19",domain:"security",type:"single",
      prompt:"An organisation has only Exchange Online Protection (EOP). Which capability requires adding Microsoft Defender for Office 365?",
      options:[{id:"a",text:"Anti-spam filtering"},{id:"b",text:"Anti-malware scanning"},{id:"c",text:"Safe Links time-of-click URL protection"},{id:"d",text:"Connection filtering"}],answer:"c",
      rationale:"EOP provides baseline anti-spam, anti-malware, and connection filtering for every Exchange Online mailbox. Defender for Office 365 adds Safe Links, Safe Attachments, advanced anti-phishing, and, in Plan 2, investigation and simulation tools."
    },
    {
      id:"s20",domain:"security",type:"single",
      prompt:"Security wants to stop Office apps from creating child processes and to block obfuscated scripts on Windows devices, in order to reduce the attack surface. Which capability should be used?",
      options:[{id:"a",text:"Attack surface reduction rules in Microsoft Defender for Endpoint"},{id:"b",text:"Safe Attachments"},{id:"c",text:"Conditional Access"},{id:"d",text:"A DLP policy"}],answer:"a",
      rationale:"ASR rules in Defender for Endpoint block behaviours that malware commonly uses, such as Office spawning processes or obfuscated scripts."
    },
    {
      id:"s21",domain:"security",type:"single",
      prompt:"A file-less attack runs malicious PowerShell in memory on a laptop. Security needs behaviour-based detection and automatic investigation and remediation. Which solution provides this?",
      options:[{id:"a",text:"Microsoft Defender for Cloud Apps"},{id:"b",text:"Microsoft Defender for Endpoint (EDR with automated investigation and response)"},{id:"c",text:"Azure DDoS Protection"},{id:"d",text:"Microsoft Entra Password Protection"}],answer:"b",
      rationale:"Endpoint detection and response observes process behaviour, catching threats that signature-based antivirus misses. Automated investigation and response then investigates and remediates."
    },
    {
      id:"s22",domain:"security",type:"single",
      prompt:"The company needs to discover which unsanctioned cloud apps employees use (shadow IT), assess their risk, and mark risky apps as unsanctioned. Which solution provides this?",
      options:[{id:"a",text:"Microsoft Defender for Identity"},{id:"b",text:"Microsoft Defender Vulnerability Management"},{id:"c",text:"Microsoft Defender for Cloud Apps (Cloud Discovery and the cloud app catalog)"},{id:"d",text:"Azure Firewall"}],answer:"c",
      rationale:"Defender for Cloud Apps is a cloud access security broker (CASB). Cloud Discovery analyses traffic, including data from Defender for Endpoint, and scores apps in its catalog. Defender for Endpoint can enforce blocks on unsanctioned apps."
    },
    {
      id:"s23",domain:"security",type:"single",
      prompt:"Users may use a sanctioned SaaS app from unmanaged devices, but downloads of sensitive files must be blocked in real time during their sessions. Which capability provides this?",
      options:[{id:"a",text:"Conditional Access app control (session policies) with Microsoft Defender for Cloud Apps"},{id:"b",text:"A network security group"},{id:"c",text:"Attack surface reduction rules"},{id:"d",text:"A retention label"}],answer:"a",
      rationale:"Conditional Access routes the session through Defender for Cloud Apps, whose session policies can monitor or block actions such as downloads in real time."
    },
    {
      id:"s24",domain:"security",type:"single",
      prompt:"Security wants to detect reconnaissance, pass-the-ticket attacks, and lateral movement in on-premises Active Directory Domain Services. Which solution should be deployed?",
      options:[{id:"a",text:"Microsoft Entra ID Protection"},{id:"b",text:"Microsoft Defender for Identity"},{id:"c",text:"Microsoft Defender for Office 365"},{id:"d",text:"Azure Bastion"}],answer:"b",
      rationale:"Defender for Identity uses sensors on domain controllers to detect on-premises identity attacks. Entra ID Protection evaluates risk for cloud sign-ins to Entra ID."
    },
    {
      id:"s25",domain:"security",type:"match",label:"DRAG DROP",
      prompt:"Match each threat to the Microsoft Defender solution that primarily detects or addresses it. Each solution may be used once or not at all.",
      options:[{id:"t1",text:"A phishing link posted in a Teams chat"},{id:"t2",text:"Outdated software on laptops, prioritised by exploit risk"},{id:"t3",text:"A lateral movement path through on-premises admin accounts"},{id:"t4",text:"An OAuth app granted excessive permissions in Microsoft 365"},{id:"t5",text:"Ransomware behaviour on a file server"}],
      choices:[{id:"mdo",text:"Defender for Office 365"},{id:"dvm",text:"Defender Vulnerability Management"},{id:"mdi",text:"Defender for Identity"},{id:"mdca",text:"Defender for Cloud Apps"},{id:"mde",text:"Defender for Endpoint"},{id:"ddos",text:"Azure DDoS Protection"}],
      answer:{t1:"mdo",t2:"dvm",t3:"mdi",t4:"mdca",t5:"mde"},
      rationale:"Defender for Office 365 protects email and Teams links. Vulnerability Management discovers and prioritises weaknesses. Defender for Identity maps on-premises lateral movement paths. Defender for Cloud Apps, including app governance, governs OAuth apps. Defender for Endpoint stops ransomware on devices."
    },
    {
      id:"s26",domain:"security",type:"single",
      prompt:"IT needs continuous discovery of software and devices, risk-based prioritisation of vulnerabilities, and remediation tasks tracked with the IT team. Which solution provides this?",
      options:[{id:"a",text:"Microsoft Defender Vulnerability Management"},{id:"b",text:"Microsoft Purview Compliance Manager"},{id:"c",text:"Microsoft Entra access reviews"},{id:"d",text:"Azure Web Application Firewall"}],answer:"a",
      rationale:"Defender Vulnerability Management provides asset inventory, prioritisation based on threat context, security baseline assessment, and remediation tracking."
    },
    {
      id:"s27",domain:"security",type:"single",
      prompt:"An analyst has a suspicious IP address and wants to pivot to related domains, hosting history, known threat actors, and indicators of compromise from internet-wide data. Which capability fits best?",
      options:[{id:"a",text:"Microsoft Purview Activity explorer"},{id:"b",text:"Identity Secure Score"},{id:"c",text:"Azure Bastion"},{id:"d",text:"Microsoft Defender Threat Intelligence"}],answer:"d",
      rationale:"Defender Threat Intelligence provides intel profiles, articles, and internet-wide infrastructure data, such as passive DNS, for pivoting on indicators. Threat analytics in the Defender portal summarises threats and your exposure to them, but it is not a tool for pivoting across infrastructure."
    },
    {
      id:"s28",domain:"security",type:"yesno",
      prompt:"You are reviewing statements about the Microsoft Defender portal.",
      options:[{id:"s1",text:"The Defender portal brings together incidents and alerts from the Defender XDR services in one place."},{id:"s2",text:"Microsoft Sentinel can be used from within the Defender portal."},{id:"s3",text:"Defender for Identity requires on-premises domain controllers to be decommissioned first."}],
      answer:{s1:"yes",s2:"yes",s3:"no"},
      rationale:"Box 1: Yes. The Defender portal is the unified console for XDR. Box 2: Yes. Sentinel is available in the Defender portal as part of the unified security operations platform. Box 3: No. Defender for Identity monitors existing domain controllers with sensors."
    },
    {
      id:"s29",domain:"security",type:"single",
      prompt:"The CISO wants one measurement of security posture across Microsoft 365 identities, devices, and apps, with prioritised improvement actions. Which measurement should be used?",
      options:[{id:"a",text:"Compliance score in Compliance Manager"},{id:"b",text:"Microsoft Secure Score in the Defender portal"},{id:"c",text:"Defender for Cloud secure score only"},{id:"d",text:"The sign-in logs report"}],answer:"b",
      rationale:"Microsoft Secure Score measures posture across Microsoft 365 workloads, including identity, devices, and apps, with recommended actions. Compliance score tracks regulatory improvement actions, and the Defender for Cloud secure score covers cloud resources."
    },
    {
      id:"s30",domain:"security",type:"single",
      prompt:"Which statement correctly describes the difference between a SIEM and an XDR solution?",
      options:[{id:"a",text:"A SIEM can only prevent attacks, while XDR only collects logs"},{id:"b",text:"XDR is used only for compliance reporting"},{id:"c",text:"XDR delivers integrated detection and response across specific protected domains, such as endpoints, email, and identity, while a SIEM ingests and correlates data from almost any source"},{id:"d",text:"They are the same thing under different names"}],answer:"c",
      rationale:"XDR products such as Defender XDR deeply integrate their own protection signals and response actions. A SIEM such as Sentinel aggregates broad data from many vendors. Microsoft brings them together in the unified Defender portal."
    },

    /* ===== Microsoft compliance solutions: 18 / 80 = 22.5% ===== */
    {
      id:"p01",domain:"compliance",type:"single",
      prompt:"An external auditor asks for Microsoft's latest ISO/IEC 27001 and SOC 2 audit reports for Microsoft 365. Where should you get them?",
      options:[{id:"a",text:"Microsoft Purview Compliance Manager"},{id:"b",text:"The Microsoft Service Trust Portal"},{id:"c",text:"Microsoft Defender for Cloud"},{id:"d",text:"Microsoft Entra admin center"}],answer:"b",
      rationale:"The Service Trust Portal publishes Microsoft's independent audit reports, compliance guides, and trust documents. Compliance Manager tracks your own organisation's controls, which is the close distractor."
    },
    {
      id:"p02",domain:"compliance",type:"multi",
      prompt:"Which three of the following are Microsoft privacy principles?",
      options:[{id:"a",text:"Control"},{id:"b",text:"Transparency"},{id:"c",text:"No content-based targeting"},{id:"d",text:"Fairness"},{id:"e",text:"Inclusiveness"}],answer:["a","b","c"],
      rationale:"Microsoft's six privacy principles are control, transparency, security, strong legal protections, no content-based targeting, and benefits to you. Fairness and inclusiveness are responsible AI principles, which makes them tempting distractors."
    },
    {
      id:"p03",domain:"compliance",type:"single",
      prompt:"A compliance team wants to track progress towards GDPR, with improvement actions assigned to owners and evidence attached. What should it use?",
      options:[{id:"a",text:"An assessment in Microsoft Purview Compliance Manager"},{id:"b",text:"The Service Trust Portal"},{id:"c",text:"Microsoft Defender for Cloud regulatory compliance only"},{id:"d",text:"An eDiscovery case"}],answer:"a",
      rationale:"Compliance Manager assessments, built from regulatory templates, list controls and improvement actions that can be assigned, tested, and documented. Your compliance score reflects progress across them."
    },
    {
      id:"p04",domain:"compliance",type:"yesno",
      prompt:"You are reviewing statements about compliance score in Compliance Manager.",
      options:[{id:"s1",text:"Compliance score reflects progress in completing recommended improvement actions."},{id:"s2",text:"A high compliance score guarantees that the organisation complies with a regulation."},{id:"s3",text:"Actions managed by Microsoft contribute points to the compliance score."}],
      answer:{s1:"yes",s2:"no",s3:"yes"},
      rationale:"Box 1: Yes. Points are earned as actions are implemented and tested. Box 2: No. The score is a measure to help prioritise; it is not a certification of compliance. Box 3: Yes. The score includes both your actions and Microsoft-managed actions."
    },
    {
      id:"p05",domain:"compliance",type:"single",
      prompt:"Purview must detect UK passport numbers, which follow a known pattern, appear near keywords, and can be checked with a checksum. Which classification method fits best?",
      options:[{id:"a",text:"A trainable classifier"},{id:"b",text:"A retention label"},{id:"c",text:"A built-in sensitive information type"},{id:"d",text:"A sensitivity label policy"}],answer:"c",
      rationale:"Sensitive information types detect data by patterns, keywords, checksums, and proximity, and many built-in types exist. Trainable classifiers recognise document categories, such as contracts, from examples rather than patterns."
    },
    {
      id:"p06",domain:"compliance",type:"single",
      prompt:"A compliance officer wants to see which documents currently contain credit card numbers and where they are stored across SharePoint and OneDrive. Which tool should be used?",
      options:[{id:"a",text:"Activity explorer"},{id:"b",text:"Content explorer"},{id:"c",text:"Audit (Standard)"},{id:"d",text:"Compliance Manager"}],answer:"b",
      rationale:"Content explorer shows a current snapshot of items with sensitive information types or labels, and their locations. Viewing the content itself needs specific roles. Activity explorer shows the history of actions on content."
    },
    {
      id:"p07",domain:"compliance",type:"single",
      prompt:"An investigator needs to see who removed or downgraded sensitivity labels on files last month. Which tool shows this?",
      options:[{id:"a",text:"Activity explorer"},{id:"b",text:"Content explorer"},{id:"c",text:"The Service Trust Portal"},{id:"d",text:"Microsoft Secure Score"}],answer:"a",
      rationale:"Activity explorer reports activities on labelled and classified content, such as labels applied, changed, or removed, files copied to USB, and DLP rule matches. Content explorer shows what exists now, not what happened."
    },
    {
      id:"p08",domain:"compliance",type:"match",label:"DRAG DROP",
      prompt:"Match each requirement to the Microsoft Purview item to configure. Each item may be used once, more than once, or not at all.",
      options:[{id:"m1",text:"Encrypt documents so that only employees can open them"},{id:"m2",text:"Add a \"Confidential\" footer to documents"},{id:"m3",text:"Make labels available to the Finance group, with a default label and justification required for a downgrade"},{id:"m4",text:"Keep documents for seven years"},{id:"m5",text:"Block emailing credit card numbers to external recipients"}],
      choices:[{id:"lbl",text:"Sensitivity label settings"},{id:"pol",text:"Sensitivity label policy"},{id:"ret",text:"Retention label"},{id:"dlp",text:"DLP policy"},{id:"irm",text:"Insider risk policy"}],
      answer:{m1:"lbl",m2:"lbl",m3:"pol",m4:"ret",m5:"dlp"},
      rationale:"Encryption and content marking are configured on the sensitivity label. Label policies publish labels to users and set defaults, mandatory labelling, and justification for downgrades. Retention labels keep or delete content. DLP policies prevent sensitive data from being shared inappropriately."
    },
    {
      id:"p09",domain:"compliance",type:"yesno",
      prompt:"You are reviewing statements about sensitivity labels.",
      options:[{id:"s1",text:"A sensitivity label is stored in the file's metadata and stays with the file."},{id:"s2",text:"A document can have more than one sensitivity label at the same time."},{id:"s3",text:"Sensitivity labels can be applied automatically when sensitive information is detected."}],
      answer:{s1:"yes",s2:"no",s3:"yes"},
      rationale:"Box 1: Yes. The label persists with the content, even outside Microsoft 365. Box 2: No. Only one sensitivity label applies at a time (an item can have a sensitivity label and a retention label). Box 3: Yes. Client-side and service-side auto-labelling are supported."
    },
    {
      id:"p10",domain:"compliance",type:"single",
      prompt:"When users try to share documents that contain national insurance numbers externally, they should see a warning and be able to continue only after entering a business justification. What should be configured?",
      options:[{id:"a",text:"A DLP policy with a policy tip and \"block with override\""},{id:"b",text:"A sensitivity label with encryption"},{id:"c",text:"A retention policy"},{id:"d",text:"An access review"}],answer:"a",
      rationale:"DLP rules can show policy tips and either block, block with override (with justification), or audit. A label could encrypt the document, but it would not give in-the-moment warnings with an override."
    },
    {
      id:"p11",domain:"compliance",type:"single",
      prompt:"Files that contain sensitive information must not be copied to USB drives or uploaded to unapproved websites from Windows devices. What should be configured?",
      options:[{id:"a",text:"Endpoint data loss prevention for onboarded devices"},{id:"b",text:"A retention label"},{id:"c",text:"Azure Firewall"},{id:"d",text:"Microsoft Secure Score"}],answer:"a",
      rationale:"Endpoint DLP extends DLP policies to device activities such as copying to removable media, uploading in browsers, and printing. Devices must be onboarded to Purview."
    },
    {
      id:"p12",domain:"compliance",type:"single",
      prompt:"Certain trading records must be locked so that no one, including administrators, can edit them or remove or change their label for the retention period. Which option meets this requirement?",
      options:[{id:"a",text:"A retention label that marks items as a record"},{id:"b",text:"A retention policy"},{id:"c",text:"A retention label that marks items as a regulatory record"},{id:"d",text:"A sensitivity label"}],answer:"c",
      rationale:"A regulatory record imposes the strictest controls: the label cannot be removed or changed, even by administrators. A standard record restricts editing, but an administrator can remove the label, which makes it the close distractor."
    },
    {
      id:"p13",domain:"compliance",type:"single",
      prompt:"When the retention period ends, designated reviewers must confirm before any content is permanently deleted. What should be configured in the retention label?",
      options:[{id:"a",text:"Automatic deletion"},{id:"b",text:"Disposition review"},{id:"c",text:"An access review"},{id:"d",text:"A DLP override"}],answer:"b",
      rationale:"Disposition review sends items to reviewers at the end of retention, so they can approve deletion, relabel, or extend retention, and records proof of disposition."
    },
    {
      id:"p14",domain:"compliance",type:"yesno",
      prompt:"You are reviewing statements about retention in Microsoft Purview.",
      options:[{id:"s1",text:"A retention policy applies the same retention settings to the content in the locations it covers."},{id:"s2",text:"An item can have more than one retention label at a time."},{id:"s3",text:"Retention labels can be published to users through a retention label policy."}],
      answer:{s1:"yes",s2:"no",s3:"yes"},
      rationale:"Box 1: Yes. Retention policies work at container or location level. Box 2: No. Only one retention label can be applied to an item, although several policies can also apply. Box 3: Yes. Labels are published for manual use or auto-applied through policies."
    },
    {
      id:"p15",domain:"compliance",type:"single",
      prompt:"Security wants alerts when employees who have resigned download unusually large amounts of confidential data, using resignation dates from the HR system. What should be configured?",
      options:[{id:"a",text:"A DLP policy only"},{id:"b",text:"Communication Compliance"},{id:"c",text:"An eDiscovery hold"},{id:"d",text:"Insider risk management with an HR connector and the data theft by departing users policy template"}],answer:"d",
      rationale:"Insider risk management correlates activity with triggering events, such as a resignation date imported through the HR connector, using policy templates for scenarios like departing-user data theft."
    },
    {
      id:"p16",domain:"compliance",type:"single",
      prompt:"During the initial triage of insider risk alerts, analysts should not see users' real names, to reduce bias and protect privacy. Which feature provides this?",
      options:[{id:"a",text:"Pseudonymisation of user names, which is enabled by default"},{id:"b",text:"Sensitivity label encryption"},{id:"c",text:"Audit (Premium)"},{id:"d",text:"Restricted content discovery"}],answer:"a",
      rationale:"Insider risk management is built with privacy by design. User names are pseudonymised by default, and role-based access controls who can see identities."
    },
    {
      id:"p17",domain:"compliance",type:"single",
      prompt:"Legal must place custodians' mailboxes and OneDrive accounts on hold, send legal hold notifications, and review content with near-duplicate detection and email threading. Which solution provides all of this?",
      options:[{id:"a",text:"Content search only"},{id:"b",text:"eDiscovery (Standard) features only"},{id:"c",text:"eDiscovery with Premium features"},{id:"d",text:"Activity explorer"}],answer:"c",
      rationale:"Premium eDiscovery features add custodian management, legal hold notifications, review sets, and analytics such as near-duplicate detection and threading. Standard covers cases, holds, search, and export without those advanced capabilities."
    },
    {
      id:"p18",domain:"compliance",type:"single",
      prompt:"Investigators need audit records retained for one year by default, including high-value events such as MailItemsAccessed. Which audit solution meets this?",
      options:[{id:"a",text:"Audit (Standard)"},{id:"b",text:"Audit (Premium)"},{id:"c",text:"Microsoft Entra sign-in logs"},{id:"d",text:"Content explorer"}],answer:"b",
      rationale:"Audit (Premium) retains Exchange, SharePoint, and Entra ID records for one year by default, with longer retention available as an add-on, and includes intelligent insights events such as MailItemsAccessed. Audit (Standard) keeps records for 180 days."
    }
  ]
};
