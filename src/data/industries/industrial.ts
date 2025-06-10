
import { DetailedIndustryData } from '../types/industryTypes';

export const industrialData: DetailedIndustryData = {
  name: "Industrial & Manufacturing",
  emoji: "🏭",
  title: "🏭 SalesChef for Industrial & Manufacturing",
  subtitle: "Transform complex product data into a high-performance, multi-channel content engine. Engineering spec sheets in. Revenue-driving digital content out.",
  
  problemsTitle: "Why industrial product content is broken — and why SalesChef fixes it",
  problemsDescription: "Manufacturers and industrial distributors face some of the hardest product content challenges in commerce:",
  problems: [
    '📊 Huge, technically complex product catalogs — often 100,000+ SKUs',
    '🗂️ Source data fragmented across ERP, PIM (if present), Excel, legacy systems',
    '📄 Critical technical data buried in PDFs and datasheets',
    '📏 Inconsistent units of measure, naming conventions, language',
    '🏷️ Non-standardised attribute sets — can\'t power faceted search or guided selling',
    '🛒 No structured content for marketplaces (Amazon Business, Zoro, MSC Direct, Fastenal, Thomasnet, Grainger)',
    '✋ Manual effort required to publish across multiple B2B sales channels',
    '🔍 No SEO optimisation — low discoverability in key buying journeys',
    '🤖 No readiness for AI agents, voice interfaces, next-gen search surfaces',
    '💰 High cost and lag time for updating product content (eg. spec changes, compliance updates)'
  ],
  
  consequences: [
    'Lost sales due to poor search & discoverability',
    'High buyer abandonment on ecommerce platforms (can\'t find right product)',
    'Manual syndication to marketplaces → slow, error-prone',
    'Compliance & legal risk (wrong specs published, outdated regulatory info)',
    'Costly, unscalable content ops → constant human rework',
    'Delayed market entry for new SKUs and product variants',
    'Inability to support modern B2B buying journeys: AI assistants, configurators, CPQ, self-serve ecommerce'
  ],
  
  realityTitle: "SalesChef: Built for the complexity of industrial product content",
  realityDescription: "SalesChef is designed for industries where product complexity meets channel fragmentation and revenue urgency. Industrial & manufacturing is one of the toughest.",
  realityPoints: [
    '100k–1M SKUs',
    'No consistent product taxonomy',
    'ERP is not ecommerce-friendly',
    'PDFs are the "source of truth" (but unreadable to ecommerce systems)',
    'Units of measure all over the place',
    'Global variants → regional compliance headaches',
    'Channel partners all want different feeds & formats',
    'SEO is an afterthought (or non-existent)',
    'CPQ and guided selling not fully powered due to inconsistent attribute sets'
  ],
  
  ingestSources: [
    'ERP systems (SAP ECC/S4, Oracle EBS, Dynamics AX, Infor, Epicor, Netsuite, QAD, IFS)',
    'PLM systems (Siemens Teamcenter, PTC Windchill, Dassault ENOVIA)',
    'PIMs (Akeneo, inRiver, Riversand, Stibo, Salsify — where present)',
    'Engineering PDFs & spec sheets (OCR + NLP extraction)',
    'Supplier-provided spreadsheets',
    'Legacy databases & access files',
    'Partner / reseller data feeds',
    'Regulatory & compliance databases (eg. REACH, RoHS, UL, CE, ISO certifications)'
  ],
  
  cleaningFeatures: [
    'Normalisation of units of measure (metric/imperial)',
    'Standardisation of attribute names & values',
    'Taxonomy alignment to key marketplaces and buyers (Amazon Business, Zoro, Grainger, Thomasnet, eBay Business Supply, Alibaba)',
    'Facet-ready attribute structuring (powering guided selling, search filters, CPQ)',
    'Multilingual attribute and spec support',
    'Region-specific compliance tagging (eg. CE, UL, CSA, ISO, country-specific certifications)',
    'Dynamic image & media validation (resolution, format, licensing)',
    'SEO optimisation for long-tail industrial search',
    'Creation of structured data (schema.org, GS1, marketplace-specific specs)',
    'Accessibility compliance (WCAG)'
  ],
  
  enrichmentFeatures: [
    'Competitor benchmarking (pricing, spec gaps, positioning)',
    'Market trend signals (emerging search terms, new standards)',
    'Customer FAQ generation (based on search queries, support data, sales CRM notes)',
    'Dynamic compliance monitoring — alerting when published specs drift out of compliance',
    'LLM readiness checks — preparing products for AI-driven B2B buying journeys',
    'Variant & accessory mapping (eg. replacement parts, compatible accessories)'
  ],
  
  outputChannels: [
    'Owned ecommerce platforms (Magento, Shopify Plus, SAP Commerce Cloud/Hybris, Salesforce B2B Commerce, BigCommerce, Adobe Commerce)',
    'Marketplaces: Amazon Business, Zoro, Grainger, Thomasnet, Alibaba, eBay Business Supply, MSC Direct, Fastenal',
    'Partner & distributor portals',
    'PDF datasheets (automatically generated & version controlled)',
    'CPQ & configurator platforms',
    'Print catalogs (structured content ready for InDesign, XMPie, CHILI publish)',
    'CRM (Salesforce, Dynamics)',
    'SEO-optimised landing pages',
    'AI/voice search channels (Google, Alexa, Meta AI, Copilot)'
  ],
  
  businessOutcomes: [
    { metric: '📈 Higher', description: 'online revenue — better discoverability, higher conversion' },
    { metric: '⚡ Faster', description: 'new product introduction — weeks to days' },
    { metric: '💰 Lower', description: 'manual content ops costs — scale content without scaling headcount' },
    { metric: '✅ Better', description: 'compliance & risk posture — audit-ready content processes' },
    { metric: '🌐 Full', description: 'omnichannel readiness — marketplaces, partner portals, direct ecommerce' },
    { metric: '🔍 Stronger', description: 'SEO performance → long-tail industrial buying journeys' },
    { metric: '😊 Improved', description: 'customer experience → consistent specs across channels' },
    { metric: '🤖 AI-ready', description: 'for AI-powered B2B buying — future-proof your product data' }
  ],
  
  whyChooseTitle: "Why leading manufacturers and distributors are moving to SalesChef",
  whyChooseReasons: [
    'Solves the hardest product content problems in industrial commerce',
    'No rip-and-replace — works alongside your ERP/PIM/PLM stack',
    'Automates critical compliance and governance needs',
    'Structures product data to drive AI, CPQ, configurator, voice, next-gen buying',
    'Speeds up marketplace onboarding and syndication',
    'Designed to scale — 100k, 500k, 1M SKUs → no problem',
    'Future-proofs your commerce stack — AI-native, agentic architecture',
    'Unlocks new revenue from existing product data'
  ],
  
  useCases: [
    {
      useCase: 'Automated extraction & structuring from spec sheets',
      agents: 'Drop, Clean, Define',
      value: 'Unlocks engineering data for ecommerce use'
    },
    {
      useCase: 'Marketplace-ready content packaging',
      agents: 'Draft, Deploy',
      value: 'Faster time-to-market, broader reach'
    },
    {
      useCase: 'SEO-optimised industrial product pages',
      agents: 'Discover.Search, Draft',
      value: 'Higher inbound traffic & sales'
    },
    {
      useCase: 'Syndicated feeds for partners & distributors',
      agents: 'Deploy',
      value: 'Reduced manual feed maintenance'
    },
    {
      useCase: 'Automated product update propagation',
      agents: 'Detect, Deploy',
      value: 'Ensures accuracy & compliance'
    },
    {
      useCase: 'AI/LLM surfacing readiness',
      agents: 'Document, Discover, Draft',
      value: 'Prepares for AI-driven B2B buying trends'
    }
  ],
  
  integrations: [
    'ERP: SAP ECC/S4, Oracle, Dynamics, Infor, Epicor, QAD, IFS',
    'PLM: Siemens, PTC, Dassault, Arena PLM',
    'PIM: Akeneo, inRiver, Riversand, Stibo, Salsify',
    'Ecommerce: Magento, Shopify Plus, Salesforce B2B Commerce, SAP Commerce Cloud, BigCommerce',
    'Marketplaces: Amazon Business, Zoro, Grainger, Thomasnet, MSC, Fastenal, Alibaba, eBay Business Supply',
    'Print systems: InDesign, XMPie, CHILI publish',
    'CPQ: Salesforce CPQ, PROS, Apttus',
    'CRM: Salesforce, Dynamics',
    'SEO platforms: Conductor, Botify, BrightEdge',
    'Voice/AI channels',
    'DAMs, MAMs, Content Hubs'
  ]
};
