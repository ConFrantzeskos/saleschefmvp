
import { DetailedIndustryData } from '../types/industryTypes';

export const financeData: DetailedIndustryData = {
  name: "Financial Services",
  emoji: "💰",
  title: "💰 SalesChef for Financial Services",
  subtitle: "Transform complex, compliance-heavy product data into clear, consistent, revenue-driving content — at scale. Disconnected disclosures in. High-performing, compliant content out.",
  
  problemsTitle: "Why financial product content is broken — and why SalesChef fixes it",
  problemsDescription: "Financial services are some of the most content-intensive, compliance-constrained industries in the world:",
  problems: [
    '🏦 Complex product sets — across banking, credit, insurance, wealth, superannuation, investment',
    '📋 Constantly evolving regulatory and legal requirements',
    '🗂️ Fragmented source systems — product managers, compliance teams, marketing, legal all maintaining disconnected documents',
    '❌ No true "single source of truth" for product content',
    '✋ Manual rekeying of core product data into websites, disclosure documents, CRM, emails, apps',
    '⏱️ Long lag time for product updates to reach market',
    '📝 No consistent tone or structure across channels',
    '🔍 No SEO-optimised, discoverable product content',
    '🤖 Zero readiness for modern content channels (AI agents, LLM surfacing, voice, smart search)'
  ],
  
  consequences: [
    'Regulatory risk → non-compliant or out-of-date product disclosures',
    'Missed revenue → product updates and pricing changes delayed to market',
    'SEO gaps → poor organic discovery of core products',
    'Expensive manual content ops → large legal, compliance, and marketing teams tied up in low-value rework',
    'Inconsistent CX → product details vary across website, app, call centre, PDS/FSG, CRM',
    'Missed LLM/AI surface opportunities → poor readiness for new consumer discovery paths',
    'Inability to scale personalisation → static content too brittle to adapt to audiences'
  ],
  
  realityTitle: "SalesChef: Built for the complexity of financial product content",
  realityDescription: "SalesChef is designed for industries where product complexity + compliance + multi-channel demands = chaos. Finance is the perfect example.",
  realityPoints: [
    'Product data scattered across spreadsheets, SharePoint, CMS, PDS templates, legal docs',
    '5+ versions of the "official" product description in circulation',
    'Rate or fee change → takes weeks to flow through all content surfaces',
    'Regulatory updates triggering massive manual effort',
    'Complex product variants poorly handled in current CMS or CRM',
    'No structured metadata → no ability to personalise, segment, or feed AI surfaces',
    'High compliance overhead → legal & compliance teams bottlenecked'
  ],
  
  ingestSources: [
    'Product manager spreadsheets (common in banking & insurance)',
    'SharePoint, Confluence, and internal wikis',
    'CRM extracts (Salesforce, Dynamics)',
    'Existing CMS content (WordPress, Sitecore, Adobe Experience Manager)',
    'PDS, FSG and KFS documents (PDF, DOCX) — with advanced OCR and NLP',
    'Legacy core banking system exports',
    'Pricing engines',
    'Regulatory registers and updates',
    'Third-party data providers (rates, indexes, credit scores)'
  ],
  
  cleaningFeatures: [
    'Normalisation of rates, fees, terms, disclaimers',
    'Structuring of key product attributes (interest rate, LVR, terms, risk profile, coverage, eligibility, exclusions, fees & charges)',
    'Tagging by product taxonomy (aligned to ASIC, APRA, global regulatory frameworks)',
    'Dynamic compliance inserts (e.g. key warnings, disclaimers, TMD alignment, DDO suitability filters)',
    'Mapping of product variants → eg. gold vs platinum vs black cards, variable vs fixed home loans',
    'Consistent tone and readability → tuned for audience segment (retail, HNW, business, adviser)',
    'SEO optimisation — structured data, schema.org for FS products',
    'Generation of structured metadata for personalisation (eg. CRM segments)',
    'Accessibility compliance (WCAG tagging, reading level tuning)'
  ],
  
  enrichmentFeatures: [
    'Competitor benchmark data (rate comparisons, feature comparisons)',
    'Market trend signals (eg. trending search terms for mortgage products)',
    'LLM readiness checks — how products surface in AI-driven search',
    'Personalisation signals — enrich content variants for segment targeting',
    'Compliance rule validation — flag outdated or missing required inserts',
    'Dynamic FAQ generation (based on customer questions, call centre transcripts, chatbot data)'
  ],
  
  outputChannels: [
    'Public website (CMS)',
    'Mobile apps',
    'CRM (Salesforce, Dynamics)',
    'Call centre knowledge base (Zendesk, ServiceNow, custom platforms)',
    'Disclosure documents (PDS, FSG, KFS, TMD, Credit Guide — auto-generated & version-controlled)',
    'AI assistant & chat surfaces (Google, Meta AI, Amazon Alexa)',
    'SEO-optimised landing pages',
    'Partner portals & adviser extranets',
    'Affiliate and aggregator feeds (Finder, Canstar, RateCity, InfoChoice)',
    'Social & email content (segment-personalised)',
    'Regulatory reporting outputs'
  ],
  
  businessOutcomes: [
    { metric: '⚡ Faster', description: 'time-to-market for product changes → weeks to hours' },
    { metric: '✅ Improved', description: 'compliance posture → audit-ready, version-controlled, consistent' },
    { metric: '📉 Reduced', description: 'legal & compliance workload → 50–80% less manual review' },
    { metric: '🔍 Higher', description: 'SEO visibility → more organic customer acquisition' },
    { metric: '🔄 Consistent', description: 'CX across channels → builds trust and reduces complaints' },
    { metric: '🎯 Better', description: 'segment personalisation → higher product engagement' },
    { metric: '🤖 AI-ready', description: 'for AI-driven search → product content discoverable by new consumer agents' },
    { metric: '💰 Cost', description: 'reduction in content ops → fewer manual processes, scalable content governance' }
  ],
  
  whyChooseTitle: "Why leading banks, insurers and fintechs are moving to SalesChef",
  whyChooseReasons: [
    'Solves the "fragmented product content" problem',
    'Automates compliance-aware content transformation',
    'Designed for multi-variant, multi-regulatory product environments',
    'Integrates with modern and legacy banking & insurance stacks',
    'Audit-trail ready — built to satisfy internal & external audit',
    'Stateless architecture — no new system of record required',
    'AI-native — makes your product content ready for the next wave of search and customer interaction',
    'Unlocks personalisation at scale without manual rework'
  ],
  
  useCases: [
    {
      useCase: 'Automated PDS/FSG generation',
      agents: 'Drop, Clean, Define, Draft, Deploy',
      value: 'Audit-ready disclosures produced instantly'
    },
    {
      useCase: 'SEO-optimised product landing pages',
      agents: 'Discover.Search, Draft',
      value: 'Organic lead growth for core products'
    },
    {
      useCase: 'Dynamic product update propagation',
      agents: 'Detect, Deploy',
      value: 'Faster market responsiveness'
    },
    {
      useCase: 'Segment-personalised product content',
      agents: 'Draft, Deploy',
      value: 'Higher engagement & conversion'
    },
    {
      useCase: 'AI/LLM surfacing readiness',
      agents: 'Document, Discover, Draft',
      value: 'Future-proof product content'
    },
    {
      useCase: 'Consistent product data sync across CMS, CRM, call centre',
      agents: 'Deploy',
      value: 'Reduced CX inconsistencies & complaint risk'
    }
  ],
  
  integrations: [
    'Core banking systems: FIS, Temenos, Finacle, Oracle, legacy core',
    'Core insurance platforms: Duck Creek, Guidewire, Sapiens',
    'CRM: Salesforce, Dynamics, HubSpot',
    'CMS: WordPress, Sitecore, Adobe Experience Manager, Contentful',
    'Legal and compliance systems (GRC platforms)',
    'Document generation systems: SmartIQ, HotDocs',
    'Aggregator & affiliate feeds: Finder, Canstar, RateCity, InfoChoice',
    'SEO platforms: Conductor, Botify, BrightEdge',
    'Call centre knowledge platforms: Zendesk, ServiceNow, Genesys',
    'AI assistant APIs',
    'Data lakes, CDPs, data warehouses'
  ]
};
