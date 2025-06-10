export interface DetailedIndustryData {
  name: string;
  emoji: string;
  title: string;
  subtitle: string;
  
  // Problems section
  problems: string[];
  problemsTitle?: string;
  problemsDescription?: string;
  
  // Consequences section
  consequences: string[];
  consequencesTitle?: string;
  
  // Reality/complexity section
  realityPoints?: string[];
  realityTitle?: string;
  realityDescription?: string;
  
  // Process steps
  ingestSources: string[];
  cleaningFeatures: string[];
  enrichmentFeatures: string[];
  outputChannels: string[];
  
  // Business outcomes
  businessOutcomes: Array<{
    metric: string;
    description: string;
  }>;
  
  // Why choose section
  whyChooseReasons: string[];
  whyChooseTitle?: string;
  
  // Use cases
  useCases: Array<{
    useCase: string;
    agents: string;
    value: string;
  }>;
  
  // Integrations
  integrations: string[];
  
  // Custom sections for flexibility
  customSections?: Array<{
    title: string;
    content: React.ReactNode;
    background?: 'default' | 'muted';
  }>;
}

export const detailedIndustryData: Record<string, DetailedIndustryData> = {
  investorCommunications: {
    name: "Investor Communications",
    emoji: "📊",
    title: "📊 SalesChef for Investor Communications",
    subtitle: "Transform scattered, unstructured investment data into clear, consistent, compliant communications — at scale. Messy portfolio updates, internal reports, emails, and scraps in. Professional-grade investor content out.",
    
    problemsTitle: "Why investor communications content is broken — and why SalesChef fixes it",
    problemsDescription: "For IR and investor comms teams — whether in public companies or private investment firms — the reality today is brutal:",
    problems: [
      '📊 Content chaos → data scattered across emails, spreadsheets, board decks, internal reports, portfolio company updates, news clippings',
      '📁 No consistent taxonomy across portfolio firms, geographies, asset classes, investment stages',
      '📋 Incomplete data flows — not every portfolio company is listed or has formal reporting',
      '⏰ Constant manual chasing of inputs → huge time sink',
      '⚖️ Complex regulatory overlays — public disclosures, LP reporting, internal governance',
      '📝 Inconsistent tone and structure → weakens trust with investors and the market',
      '🔍 Zero structured data → can\'t drive next-gen channels like AI-powered investor experiences',
      '🔄 Huge duplication of effort — same data repackaged for annual reports, investor decks, quarterly updates',
      '⏳ Always behind the curve → last-minute scrambles ahead of earnings, AGMs, investor days'
    ],
    
    consequencesTitle: "The cost of chaos",
    consequences: [
      'Slower time-to-market for investor updates → damages transparency & trust',
      'Inconsistent messaging across channels → weakens market position',
      'Compliance & legal risk → missing disclaimers, outdated figures',
      'Opportunity cost → more time wrangling data, less time crafting strategic narratives',
      'Investor fatigue → poor quality comms erode credibility',
      'Lagging ESG & thematic reporting → out of step with modern investor expectations',
      'No readiness for AI-powered investor experiences → falling behind the market',
      'Poor content reuse → manual rework drains team capacity'
    ],
    
    realityTitle: "SalesChef: Built for the complexity of investor communications",
    realityDescription: "SalesChef was designed for industries where fragmented, sensitive, regulated content must be transformed into strategic, trusted outputs — at scale and under pressure.",
    realityPoints: [
      '🏢 Multiple internal & external data sources → across IR, finance, legal, marketing, portfolio firms',
      '📈 Complex mix of listed & unlisted assets',
      '🏭 Portfolio companies at different maturity stages → varying data quality',
      '👥 Multiple audiences → public markets, LPs, boards, internal executives, regulators, analysts',
      '🔗 No unified content pipeline → massive duplication of effort',
      '⏰ Huge time sensitivity → quarterly cycles, earnings, LP reports, AGM prep',
      '🤖 Emerging demand for AI-powered investor experiences → and no structured content to power them'
    ],
    
    ingestSources: [
      'Internal finance systems (ERP, accounting, fund admin systems)',
      'Investor relations platforms (Q4, Notified, Irwin, Nasdaq IR Insight)',
      'CRM (Salesforce, DealCloud, HubSpot)',
      'Portfolio company updates → board decks, investor memos, email updates, raw data',
      'ESG data platforms (Workiva, Novisto, Datamaran, Persefoni, PulsESG)',
      'Regulatory filings (SEC EDGAR, ASX, SEDAR, FCA, European Transparency Directive filings)',
      'Press clippings & media monitoring tools',
      'Analyst reports',
      'Investor Q&A databases',
      'Market data feeds (Bloomberg, Refinitiv, FactSet)',
      'Internal SharePoint, Google Drive, Confluence',
      'Call centre / investor relations inquiry transcripts',
      'Video & webinar content'
    ],
    
    cleaningFeatures: [
      'Entity mapping → listed company, portfolio company, fund, geography, asset class, sector',
      'Time-series structuring → ensures consistency across quarters & reporting cycles',
      'Dynamic tagging of key metrics → financial KPIs, operational KPIs, ESG metrics',
      'Auto-detection of material changes → flags for IR/legal review',
      'Tone & style alignment → corporate voice, regulatory alignment',
      'Compliance validation → disclaimers, forward-looking statements, regional regulatory nuances',
      'Structured content output → schema.org financial markup, AI-ready structures',
      'Personalisation tagging → segment-specific content for public markets, LPs, analysts, internal stakeholders',
      'Multilingual/localised content support',
      'Audit trail → full version history and change tracking'
    ],
    
    enrichmentFeatures: [
      'Market positioning insights → how portfolio or listed company narrative compares to peers',
      'Competitor intelligence → public disclosures, sentiment analysis',
      'ESG benchmarking → relative position vs market',
      'Investor sentiment tracking → Q&A trends, social listening, analyst commentary',
      'Dynamic FAQ generation → based on investor inquiries & analyst coverage',
      'LLM readiness → prepares structured content for AI-powered investor experiences (coming fast)'
    ],
    
    outputChannels: [
      'Earnings releases',
      'Regulatory filings (EDGAR, ASX, etc.)',
      'Annual reports',
      'Quarterly updates',
      'Investor decks',
      'LP reports',
      'ESG reports',
      'Board packs',
      'Internal dashboards',
      'IR websites',
      'CRM',
      'Press releases',
      'Investor FAQs',
      'Investor relations call scripts',
      'Webinars',
      'AI & voice surfaces → future-proofing for AI-first investor experiences'
    ],
    
    businessOutcomes: [
      { metric: '⚡ Faster', description: 'time-to-market → aligned to earnings & board cycles' },
      { metric: '⚖️ Lower', description: 'compliance risk → audit-grade content governance' },
      { metric: '📢 Consistent', description: 'messaging across all investor channels' },
      { metric: '📉 Reduced', description: 'manual effort → less data wrangling, more strategy' },
      { metric: '📈 Higher', description: 'investor trust → clearer, more transparent communications' },
      { metric: '🔄 Better', description: 'content reuse → less duplication across IR, ESG, LP reporting' },
      { metric: '🤖 AI-ready', description: 'investor content → positioning for next-gen investor experiences' },
      { metric: '🎯 More effective', description: 'internal stakeholder alignment → faster, more consistent internal narratives' }
    ],
    
    whyChooseTitle: "Why leading IR teams, investment firms & asset managers are moving to SalesChef",
    whyChooseReasons: [
      'Solves the "data wrangling" problem → frees IR/comms teams to focus on strategy',
      'Harmonises internal & external content flows → across mixed asset classes & portfolios',
      'Automates compliance validation & governance',
      'Prepares content for AI-first investor engagement',
      'Enables scalable investor comms → global teams, multi-market complexity',
      'Stateless, agentic → integrates with existing IR & comms stack',
      'Speeds up delivery for fast-moving investor cycles',
      'Unlocks new capabilities → AI agents, personalisation, next-gen investor experiences'
    ],
    
    useCases: [
      {
        useCase: 'Automated ingestion & normalisation of portfolio data',
        agents: 'Drop, Clean, Define',
        value: 'Reduced manual effort, unified data layer'
      },
      {
        useCase: 'Automated generation of quarterly updates & LP reports',
        agents: 'Draft, Deploy',
        value: 'Faster, more consistent investor updates'
      },
      {
        useCase: 'SEO & AI-optimised IR website content',
        agents: 'Discover.Search, Draft',
        value: 'Increased discoverability & investor engagement'
      },
      {
        useCase: 'Automated compliance validation',
        agents: 'Diligence, QA Validator',
        value: 'Lower legal & regulatory risk'
      },
      {
        useCase: 'Syndication to internal & external channels',
        agents: 'Deploy',
        value: 'Consistent narratives across all stakeholders'
      },
      {
        useCase: 'AI/LLM surfacing readiness',
        agents: 'Document, Discover, Draft',
        value: 'Competitive advantage for emerging investor channels'
      }
    ],
    
    integrations: [
      'IR platforms: Q4, Notified, Nasdaq IR Insight, Irwin',
      'CRM: Salesforce, DealCloud, HubSpot',
      'Financial systems: ERP, fund admin systems',
      'ESG platforms: Workiva, Novisto, Datamaran, PulsESG',
      'Market data: Bloomberg, FactSet, Refinitiv',
      'Regulatory filing platforms',
      'Web CMS: WordPress, Sitecore, Adobe AEM',
      'DAMs & document hubs',
      'Investor Q&A databases',
      'Data lakes & CDPs',
      'Voice & AI platforms → preparing for AI-first investor comms'
    ]
  },

  retail: {
    name: "Retail",
    emoji: "🛍️",
    title: "🛍️ SalesChef for Retail",
    subtitle: "Transform scattered product data into compelling, conversion-optimized retail experiences. Messy inventory feeds in. Revenue-driving product content out.",
    
    problemsTitle: "Why retail product content is broken — and why SalesChef fixes it",
    problemsDescription: "Modern retail operates across dozens of channels, but most retailers are drowning in fragmented product data:",
    problems: [
      '📊 Product data scattered across suppliers, PLMs, ERPs, spreadsheets',
      '🏷️ Inconsistent categorization and tagging across channels',
      '📱 Manual effort to optimize for each marketplace and platform',
      '🔍 Poor SEO optimization → products don\'t get discovered',
      '📸 Inconsistent imagery and content quality',
      '⏰ Slow time-to-market for new products and seasonal updates',
      '🌐 Disconnected online and offline inventory data',
      '🤖 No AI-ready structured data for emerging shopping experiences'
    ],
    
    consequences: [
      'Lost sales due to poor product discoverability',
      'Higher return rates from inaccurate product descriptions',
      'Expensive manual content operations across channels',
      'Slow response to market trends and seasonal demands',
      'Inconsistent brand experience across touchpoints',
      'Missed opportunities in emerging retail channels',
      'Poor conversion rates from unoptimized product pages'
    ],
    
    realityTitle: "SalesChef: Built for omnichannel retail complexity",
    realityDescription: "SalesChef handles the reality of modern retail: multiple suppliers, countless SKUs, seasonal changes, and the need to be everywhere your customers shop.",
    realityPoints: [
      '🏪 Multiple sales channels → website, marketplaces, social commerce, physical stores',
      '📦 Thousands of products with seasonal variations',
      '🏭 Multiple suppliers with different data formats',
      '🎯 Different content needs per channel → Amazon vs Instagram vs in-store',
      '📈 Constant price and inventory updates',
      '🌍 Multi-region operations with localization needs'
    ],
    
    ingestSources: [
      'PIM systems (Akeneo, inRiver, Salsify)',
      'ERP and inventory management systems',
      'Supplier product feeds and catalogs',
      'E-commerce platforms (Shopify, Magento, BigCommerce)',
      'Marketplace seller tools',
      'DAM systems for imagery and media',
      'Social media content and user-generated content',
      'Customer review and rating platforms'
    ],
    
    cleaningFeatures: [
      'Product taxonomy standardization across categories',
      'Size, color, and variant normalization',
      'SEO-optimized product titles and descriptions',
      'Brand voice and tone consistency',
      'Marketplace-specific requirement compliance',
      'Image quality validation and optimization',
      'Inventory status synchronization',
      'Price formatting and currency conversion'
    ],
    
    enrichmentFeatures: [
      'Trend-based product positioning and styling advice',
      'Competitive pricing and feature analysis',
      'Customer review sentiment integration',
      'Seasonal and promotional content optimization',
      'Cross-sell and upsell recommendation content',
      'Social media trend incorporation'
    ],
    
    outputChannels: [
      'E-commerce websites and mobile apps',
      'Amazon, eBay, Etsy, and other marketplaces',
      'Social commerce (Instagram, Facebook, TikTok)',
      'Google Shopping and product ads',
      'In-store digital displays and kiosks',
      'Email marketing and newsletters',
      'Print catalogs and promotional materials',
      'Voice shopping assistants'
    ],
    
    businessOutcomes: [
      { metric: '📈 Higher', description: 'conversion rates → optimized product content drives sales' },
      { metric: '🔍 Better', description: 'discoverability → improved SEO and marketplace ranking' },
      { metric: '⚡ Faster', description: 'time-to-market → rapid product launches and updates' },
      { metric: '💰 Lower', description: 'content operations cost → automated multichannel publishing' },
      { metric: '🎯 Consistent', description: 'brand experience → unified messaging across channels' },
      { metric: '📊 Improved', description: 'inventory turnover → data-driven merchandising decisions' }
    ],
    
    whyChooseReasons: [
      'Handles the complexity of omnichannel retail operations',
      'Automates tedious product content optimization',
      'Scales with seasonal demands and product launches',
      'Integrates with existing retail technology stack',
      'Optimizes for both search engines and marketplaces',
      'Reduces manual effort while improving content quality',
      'Future-proofs content for emerging retail channels'
    ],
    
    useCases: [
      {
        useCase: 'Automated marketplace optimization',
        agents: 'Drop, Clean, Draft, Deploy',
        value: 'Higher marketplace rankings and sales'
      },
      {
        useCase: 'Seasonal content refresh',
        agents: 'Detect, Draft, Deploy',
        value: 'Faster response to market trends'
      },
      {
        useCase: 'Cross-platform product syndication',
        agents: 'Deploy',
        value: 'Consistent product experience everywhere'
      },
      {
        useCase: 'SEO-optimized product pages',
        agents: 'Discover.Search, Draft',
        value: 'Increased organic traffic and sales'
      }
    ],
    
    integrations: [
      'E-commerce: Shopify, Magento, WooCommerce, BigCommerce',
      'PIM: Akeneo, inRiver, Salsify, Riversand',
      'Marketplaces: Amazon Seller Central, eBay, Etsy',
      'ERP: SAP, Oracle, NetSuite, Dynamics',
      'Social platforms: Facebook, Instagram, TikTok',
      'Marketing: Klaviyo, Mailchimp, Omnisend',
      'Analytics: Google Analytics, Adobe Analytics',
      'DAM: Cloudinary, Bynder, Adobe AEM Assets'
    ]
  },

  finance: {
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
  },

  healthcare: {
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
  },

  media: {
    name: "Media & Entertainment",
    emoji: "🎬",
    title: "🎬 SalesChef for Media & Entertainment",
    subtitle: "Transform your fragmented media assets into revenue-driving, advertiser-ready intelligence. Unstructured archive in. Insight-rich, monetisable media out.",
    
    problemsTitle: "Why media content & metadata are broken — and why SalesChef fixes it",
    problemsDescription: "In today's media ecosystem, content alone is no longer enough. To drive advertising, subscriptions, syndication and licensing revenue, you need structured, searchable, monetisable metadata. But what do most media businesses have today?",
    problems: [
      '🗄️ Archives scattered across DAMs, NAS drives, legacy MAMs',
      '🏷️ Poorly tagged video & image content',
      '📋 Inconsistent rights & clearance records',
      '🔗 Disconnected text, image, audio and video assets',
      '📂 No unified taxonomy — every department tags differently',
      '📺 No ready-to-syndicate FAST/CTV/OTT feeds',
      '✋ Manual enrichment for new platforms → slow, costly, error-prone',
      '🤖 Inability to scale content packaging for AI agents & smart surfaces'
    ],
    
    consequences: [
      'Lost syndication and licensing revenue (archive not fully monetised)',
      'Manual, expensive packaging for advertisers & sponsors',
      'Delayed content onboarding → lost market opportunities',
      'Inconsistent audience targeting → lower CPMs',
      'Missed FAST/CTV monetisation windows',
      'Poor SEO → under-leveraged owned channels',
      'Legal & rights risk → incorrect or missing usage metadata',
      'Inability to feed AI agents / LLM search experiences'
    ],
    
    realityTitle: "SalesChef: Built for the complexity of modern media",
    realityDescription: "SalesChef was designed for industries where content complexity meets revenue pressure — and media is ground zero.",
    realityPoints: [
      '20 years of mixed-format archives',
      'No consistent metadata schema',
      'Rights data in a spreadsheet last updated 6 years ago',
      'New channels launching monthly — FAST, TikTok, Instagram Video, AI voice, CTV marketplaces',
      'Advertisers demanding rich context & brand-safety alignment',
      'AI search engines driving new audience discovery paths'
    ],
    
    ingestSources: [
      'Legacy MAMs (Dalet, Avid, Viz One, CatDV, IPV, Cantemo)',
      'DAM platforms (Bynder, Cloudinary, Adobe Experience Manager, FotoWare, Brandfolder)',
      'NAS & cold storage (S3, GCP, Azure, Glacier, on-prem drives)',
      'CMS & archives (Drupal, WordPress, headless CMSs)',
      'Raw video & image archives',
      'Rights & clearance databases (custom & vendor-provided)',
      'OTT packaging systems',
      'Third-party syndication partners',
      'Social platforms (YouTube, TikTok, Instagram)'
    ],
    
    cleaningFeatures: [
      'Taxonomy alignment across departments (news, sport, lifestyle, entertainment)',
      'Entity recognition (people, places, events, brands)',
      'Genre & mood classification',
      'Language & region tagging',
      'Rights & clearance metadata enrichment',
      'Image & video quality validation (resolution, duration, compliance)',
      'Contextual signals for brand safety & targeting',
      'SEO optimisation for text-based archives (headlines, captions, descriptions)',
      'Transcript generation for audio & video',
      'Multimodal linkage (text ↔ image ↔ video ↔ audio)',
      'Accessibility tagging (subtitles, alt-text, captions)'
    ],
    
    enrichmentFeatures: [
      'Social sentiment & trending topic correlation',
      'Competitive content benchmarking',
      'Audience engagement signals (CTR, completion, shareability)',
      'Advertiser & sponsor alignment signals (suitability for campaigns)',
      'Event-driven content packaging (Olympics, elections, festivals, seasonal)',
      'Multilingual auto-translation & localisation',
      'Emerging channel compliance (FAST metadata, AI/LLM surfacing)'
    ],
    
    outputChannels: [
      'FAST channels (Pluto TV, Samsung TV+, LG Channels, Roku)',
      'CTV apps',
      'OTT platforms (SVOD, AVOD, TVOD)',
      'Owned & operated web & mobile',
      'Social platforms (TikTok, YouTube, Meta, Snap)',
      'Affiliate & syndication partners',
      'Licensing & archive marketplaces',
      'Podcast & audio platforms',
      'Smart speaker & AI assistant surfaces (Google, Amazon, Meta AI)',
      'Programmatic ad platforms (contextual targeting feeds)'
    ],
    
    businessOutcomes: [
      { metric: '🔓 Unlock', description: 'new revenue from archives → faster packaging & syndication' },
      { metric: '💰 Higher', description: 'CPMs → better contextual & audience signals' },
      { metric: '🚀 Faster', description: 'advertiser onboarding → automated brand-suitable packaging' },
      { metric: '⚡ Faster', description: 'time-to-market for new channels' },
      { metric: '📉 Reduced', description: 'manual metadata ops cost' },
      { metric: '⚖️ Improved', description: 'legal & rights governance' },
      { metric: '🤖 More', description: 'content surfaced in AI & smart search' },
      { metric: '🔍 Better', description: 'SEO → higher organic audience reach' }
    ],
    
    whyChooseTitle: "Why leading media companies are moving to SalesChef",
    whyChooseReasons: [
      'Designed for the real-world mess of media archives',
      'Knows the modern stack: FAST, OTT, CTV, AI surfacing, programmatic',
      'Automates painful, high-cost manual enrichment',
      'Makes archives monetisable at scale',
      'Improves audience targeting and brand safety',
      'Unlocks SEO and AI discoverability',
      'Adapts to your taxonomy — doesn\'t force you into a new one',
      'Stateless architecture → works with your existing DAM/MAM ecosystem',
      'Continuous learning → gets smarter as your content evolves'
    ],
    
    useCases: [
      {
        useCase: 'Archive monetisation & syndication',
        agents: 'Drop, Clean, Define, Deploy',
        value: 'Drives new licensing & FAST revenue'
      },
      {
        useCase: 'Advertiser-ready contextual packaging',
        agents: 'Distil, Draft, Deploy',
        value: 'Higher CPMs and faster campaign activation'
      },
      {
        useCase: 'SEO-optimised publishing for owned channels',
        agents: 'Discover.Search, Draft',
        value: 'Organic traffic growth & audience acquisition'
      },
      {
        useCase: 'AI/LLM surfacing prep',
        agents: 'Document, Discover, Draft',
        value: 'Content ready for next-gen search surfaces'
      },
      {
        useCase: 'Rights & compliance validation',
        agents: 'Diligence, QA Validator',
        value: 'Lower legal exposure'
      },
      {
        useCase: 'Dynamic packaging for social & video',
        agents: 'Director, Draw, Draft',
        value: 'Increased engagement & monetisation'
      }
    ],
    
    integrations: [
      'MAM/DAM platforms: Dalet, Avid, VizRT, Bynder, Cloudinary, AEM, CatDV, etc.',
      'CMS: WordPress, Drupal, Contentful, Sanity, Prismic',
      'FAST/CTV packaging systems: Amagi, Wurl, Frequency, Gracenote',
      'OTT apps: Brightcove, JWPlayer, Vimeo OTT',
      'Ad platforms: Google Ad Manager, Xandr, Freewheel',
      'Programmatic platforms: Magnite, PubMatic, The Trade Desk',
      'SEO platforms: Conductor, Botify, BrightEdge',
      'Social APIs: TikTok, Meta, YouTube',
      'Rights management systems',
      'Data warehouses & CDPs'
    ]
  },

  industrial: {
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
  }
};
