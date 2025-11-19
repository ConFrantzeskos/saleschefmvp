
import { DetailedIndustryData } from '../types/industryTypes';

export const healthcareData: DetailedIndustryData = {
  name: "Healthcare & Medical",
  emoji: "🏥",
  title: "🏥 SalesChef for Healthcare & Medical",
  subtitle: "Transform complex, regulated healthcare product data into consistent, compliant, conversion-driving content — at scale. Scattered clinical documents in. Governed, omnichannel-ready healthcare content out.",
  
  problemsTitle: "Why healthcare product content is broken — and why SalesChef fixes it",
  problemsDescription: "Healthcare content is one of the most complex, regulated, fragmented domains in the world:",
  problems: [
    '📋 Highly technical, regulated products — with complex attributes, variant SKUs, and rapidly evolving specs',
    '📁 Content spread across regulatory filings, clinical data, internal documents, supplier feeds, marketing teams',
    '❌ Lack of a true single source of truth for product content',
    '⚖️ Regulatory and legal risk → penalties for inaccurate or non-compliant content',
    '🔄 Constant updates driven by new clinical evidence, approvals, market regulations',
    '👥 Multiple audiences → clinicians, healthcare professionals, patients, procurement officers, regulators — all require tailored messaging',
    '🤖 No structured data to support next-gen channels (AI assistants, voice, chatbots, LLM-driven search)',
    '🌍 High fragmentation across global markets → localisation and translation pain',
    '📦 Burdensome manual effort to prepare content for marketplaces (e.g. Amazon Health, hospital group portals, B2B procurement networks)'
  ],
  
  consequences: [
    'Compliance risk → regulatory penalties, legal exposure',
    'Outdated product data across websites, distributor portals, hospital formularies',
    'Poor discoverability → low SEO & AI surfacing → patients and HCPs can\'t find accurate info',
    'Massive manual cost to update product specs across global sites',
    'Translation/localisation bottlenecks → limits international growth',
    'Lost revenue → slow time-to-market for new products & indications',
    'Inconsistent CX → erodes trust with clinicians & patients',
    'Inability to support new sales channels (marketplaces, AI agents, e-commerce platforms)'
  ],
  
  realityTitle: "SalesChef: Built for the complexity of healthcare product content",
  realityDescription: "SalesChef is purpose-built for industries where compliance meets content complexity meets multi-channel distribution.",
  realityPoints: [
    '📦 Multiple product versions across markets',
    '📋 Constant regulatory updates → US FDA, EMA, TGA, MHRA, NMPA, PMDA',
    '📊 Content scattered across Regulatory, Medical Affairs, Marketing, eCommerce, Partners',
    '🌍 Local market nuances → translation, compliance differences',
    '🏷️ No consistent taxonomy → hard to drive ecommerce & AI experiences',
    '📤 Every channel wants content packaged differently → distributors, hospital groups, B2B marketplaces, consumer sites'
  ],
  
  ingestSources: [
    'Regulatory filings (510(k), CE Mark, PMA, De Novo, TGA ARTG, MDR filings)',
    'Clinical trial registries & data',
    'Medical Affairs databases',
    'Supplier & manufacturer feeds (GS1, UDI, HL7 FHIR, EUDAMED)',
    'Marketing CMS content (Adobe Experience Manager, Sitecore, WordPress, Drupal)',
    'Ecommerce catalogues',
    'Distributor partner portals',
    'Hospital group procurement databases',
    'Global translation memory systems (TMS)',
    'PDFs, Excel, Word documents, SharePoint, DAMs',
    'Video, imagery, patient leaflets'
  ],
  
  // Recommended Persuasion Ladders for Healthcare
  recommendedLadders: [
    {
      id: 'asset-trust-ladder',
      name: 'Reliability & Trust Ladder',
      reason: 'Medical products must demonstrate clinical accuracy and consistent performance',
      example: 'Medical devices: "Clinical validation → 99.7% accuracy → FDA cleared → Trusted by 5,000+ hospitals"'
    },
    {
      id: 'risk-mitigation',
      name: 'Risk-Mitigation Ladder',
      reason: 'Healthcare decisions involve patient safety - showing risk reduction builds confidence',
      example: 'Surgical equipment: "Safety mechanisms → Reduced complication rate → Faster recovery → Better patient outcomes"'
    },
    {
      id: 'functional-emotional',
      name: 'Functional-Emotional Ladder',
      reason: 'Healthcare combines clinical efficacy with emotional reassurance',
      example: 'Diagnostic equipment: "Faster scan time → Earlier detection → Peace of mind → Confidence in diagnosis"'
    },
    {
      id: 'rtb',
      name: 'Reason-to-Believe with Clinical Proof',
      reason: 'Every healthcare claim needs clinical evidence backing',
      example: 'Pharmaceuticals: "Phase III trials (RTB) → Proven efficacy (promise) → Improved quality of life (payoff)"'
    },
    {
      id: 'component-performance',
      name: 'Component-Performance-Capability',
      reason: 'Technical medical products benefit from showing how components deliver superior clinical outcomes',
      example: 'Like advanced imaging: "Sensor resolution → Image clarity → Diagnostic accuracy → Treatment precision"'
    }
  ],

  cleaningFeatures: [
    'Alignment to GS1 GDSN, UDI, HL7 FHIR, EUDAMED data models',
    'Country-specific regulatory tagging → US, EU, AU, UK, China, Japan',
    'Clinical claims & substantiation tagging → tied to referenced literature',
    'Localisation of key regulatory language → per market',
    'ICD/CPT/HCPCS mapping',
    'Structured product attributes (dimensions, compatibility, indications, contraindications, warnings, IFU links, shelf life, storage conditions)',
    'Accessibility & readability compliance (WCAG, plain-language for patient content)',
    'SEO & discoverability optimisation → search-ready content for clinicians & patients',
    'Multi-audience content variants → clinician, patient, procurement, regulatory reviewers',
    'Audit trail for every content version → regulator-ready',
    'AI-readiness → structured content for emerging search agents'
  ],
  
  enrichmentFeatures: [
    'Competitive product positioning (based on public data & content gaps)',
    'Market trend signals (emerging therapeutic needs, search trends)',
    'Dynamic FAQ generation (based on patient questions, clinician inquiries, call centre logs)',
    'LLM surfacing readiness checks',
    'Alerting for regulatory change triggers (impacting content)',
    'Translation & localisation tuning based on market feedback',
    'Harmonisation of global variants → ensuring consistency across markets'
  ],
  
  outputChannels: [
    'Public websites (consumer health & HCP-focused)',
    'eCommerce platforms (Adobe Commerce, Salesforce B2B Commerce, Shopify Plus, BigCommerce)',
    'Marketplaces: Amazon Health, Alibaba Health, B2B hospital procurement networks',
    'Hospital formulary & contract catalogues',
    'Distributor portals & partner networks',
    'Patient & HCP education portals',
    'SEO-optimised product landing pages',
    'CRM (Salesforce Health Cloud, Veeva CRM, Dynamics Health)',
    'Regulatory submission documentation',
    'Printed collateral (IFUs, datasheets, marketing materials)',
    'AI & voice assistant surfaces (Google, Alexa, LLM agents)'
  ],
  
  businessOutcomes: [
    { metric: '⚖️ Reduced', description: 'compliance risk → audit-ready content with full traceability' },
    { metric: '⚡ Faster', description: 'market entry for new products → weeks to days' },
    { metric: '🔍 Stronger', description: 'SEO & AI discoverability → increased inbound traffic from HCPs & patients' },
    { metric: '🌍 Lower', description: 'translation & localisation costs → scalable multilingual content' },
    { metric: '🔄 Consistent', description: 'CX across channels & markets → builds clinician & patient trust' },
    { metric: '📈 Higher', description: 'revenue via better partner enablement (distributors, marketplaces, hospital groups)' }
  ],
  
  whyChooseTitle: "Why leading healthcare companies are moving to SalesChef",
  whyChooseReasons: [
    'Designed for the regulatory complexity of healthcare',
    'Automates compliance-aware content transformation',
    'Handles global regulatory variations seamlessly',
    'Integrates with healthcare-specific technology stacks',
    'Audit-trail ready for regulatory reviews',
    'Multi-audience content optimization',
    'Future-proofs content for AI-driven healthcare search',
    'Scales across product lines and global markets'
  ],
  
  useCases: [
    {
      useCase: 'Automated generation of compliant product pages',
      agents: 'Drop, Clean, Define, Draft, Deploy',
      value: 'Faster product launch, reduced compliance risk'
    },
    {
      useCase: 'SEO-optimised content for patient & HCP audiences',
      agents: 'Discover.Search, Draft',
      value: 'Increased organic traffic & trust'
    },
    {
      useCase: 'Audit-ready version-controlled content',
      agents: 'Diligence, QA Validator',
      value: 'Peace of mind for regulatory audits'
    },
    {
      useCase: 'Multilingual localisation of product content',
      agents: 'Draft, Translate, Deploy',
      value: 'Scalable international growth'
    },
    {
      useCase: 'Syndication to partner & marketplace channels',
      agents: 'Deploy',
      value: 'Greater reach, reduced manual effort'
    },
    {
      useCase: 'AI/LLM surfacing readiness',
      agents: 'Document, Discover, Draft',
      value: 'Future-proofed discoverability'
    }
  ],
  
  integrations: [
    'Regulatory systems: Veeva Vault, MasterControl, ArisGlobal, RimsNet',
    'PLM: Siemens, PTC, Dassault, Arena',
    'ERP: SAP, Oracle, Infor, Microsoft',
    'CRM: Salesforce Health Cloud, Veeva CRM, Dynamics Health',
    'PIM/DAM: Stibo, Akeneo, inRiver, Adobe AEM Assets',
    'CMS: Adobe Experience Manager, Sitecore, Drupal, WordPress',
    'eCommerce: Adobe Commerce, Salesforce Commerce Cloud, BigCommerce, Shopify Plus',
    'Marketplaces: Amazon Health, Alibaba Health, hospital group procurement networks',
    'SEO: Conductor, Botify, BrightEdge',
    'Voice/AI platforms',
    'TMS (Translation Management Systems)',
    'Data warehouses & CDPs'
  ]
};
