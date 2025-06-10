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
  }
};
