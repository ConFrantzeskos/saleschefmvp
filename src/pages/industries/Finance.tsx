import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import Footer from '@/components/Footer';
import EmailCTA from '@/components/EmailCTA';
import { CheckCircle, X, TrendingUp } from 'lucide-react';

const Finance = () => {
  const financeProblems = [
    '🏦 Complex product sets — across banking, credit, insurance, wealth, superannuation, investment',
    '📋 Constantly evolving regulatory and legal requirements',
    '🗂️ Fragmented source systems — product managers, compliance teams, marketing, legal all maintaining disconnected documents',
    '❌ No true "single source of truth" for product content',
    '✋ Manual rekeying of core product data into websites, disclosure documents, CRM, emails, apps',
    '⏱️ Long lag time for product updates to reach market',
    '📝 No consistent tone or structure across channels',
    '🔍 No SEO-optimised, discoverable product content',
    '🤖 Zero readiness for modern content channels (AI agents, LLM surfacing, voice, smart search)'
  ];

  const chaosConsequences = [
    '⚖️ Regulatory risk → non-compliant or out-of-date product disclosures',
    '💰 Missed revenue → product updates and pricing changes delayed to market',
    '🔍 SEO gaps → poor organic discovery of core products',
    '💸 Expensive manual content ops → large legal, compliance, and marketing teams tied up in low-value rework',
    '🔄 Inconsistent CX → product details vary across website, app, call centre, PDS/FSG, CRM',
    '🤖 Missed LLM/AI surface opportunities → poor readiness for new consumer discovery paths',
    '🎯 Inability to scale personalisation → static content too brittle to adapt to audiences'
  ];

  const ingestSources = [
    'Product manager spreadsheets (common in banking & insurance)',
    'SharePoint, Confluence, and internal wikis',
    'CRM extracts (Salesforce, Dynamics)',
    'Existing CMS content (WordPress, Sitecore, Adobe Experience Manager)',
    'PDS, FSG and KFS documents (PDF, DOCX) — with advanced OCR and NLP',
    'Legacy core banking system exports',
    'Pricing engines',
    'Regulatory registers and updates',
    'Third-party data providers (rates, indexes, credit scores)'
  ];

  const cleaningFeatures = [
    'Normalisation of rates, fees, terms, disclaimers',
    'Structuring of key product attributes (interest rate, LVR, terms, risk profile, coverage, eligibility, exclusions, fees & charges)',
    'Tagging by product taxonomy (aligned to ASIC, APRA, global regulatory frameworks)',
    'Dynamic compliance inserts (e.g. key warnings, disclaimers, TMD alignment, DDO suitability filters)',
    'Mapping of product variants → eg. gold vs platinum vs black cards, variable vs fixed home loans',
    'Consistent tone and readability → tuned for audience segment (retail, HNW, business, adviser)',
    'SEO optimisation — structured data, schema.org for FS products',
    'Generation of structured metadata for personalisation (eg. CRM segments)',
    'Accessibility compliance (WCAG tagging, reading level tuning)'
  ];

  const enrichmentFeatures = [
    'Competitor benchmark data (rate comparisons, feature comparisons)',
    'Market trend signals (eg. trending search terms for mortgage products)',
    'LLM readiness checks — how products surface in AI-driven search',
    'Personalisation signals — enrich content variants for segment targeting',
    'Compliance rule validation — flag outdated or missing required inserts',
    'Dynamic FAQ generation (based on customer questions, call centre transcripts, chatbot data)'
  ];

  const outputChannels = [
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
  ];

  const businessOutcomes = [
    { icon: TrendingUp, metric: '⚡ Faster', description: 'time-to-market for product changes → weeks to hours' },
    { icon: TrendingUp, metric: '✅ Improved', description: 'compliance posture → audit-ready, version-controlled, consistent' },
    { icon: TrendingUp, metric: '📉 Reduced', description: 'legal & compliance workload → 50–80% less manual review' },
    { icon: TrendingUp, metric: '🔍 Higher', description: 'SEO visibility → more organic customer acquisition' },
    { icon: TrendingUp, metric: '🔄 Consistent', description: 'CX across channels → builds trust and reduces complaints' },
    { icon: TrendingUp, metric: '🎯 Better', description: 'segment personalisation → higher product engagement' },
    { icon: TrendingUp, metric: '🤖 AI-ready', description: 'for AI-driven search → product content discoverable by new consumer agents' },
    { icon: TrendingUp, metric: '💰 Cost', description: 'reduction in content ops → fewer manual processes, scalable content governance' }
  ];

  const useCases = [
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
  ];

  const integrations = [
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
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageSection background="gradient" padding="lg">
        <SectionHeader
          title={
            <span>
              💰 SalesChef for Financial Services
            </span>
          }
          subtitle={
            <span>
              Transform complex, compliance-heavy product data into <span className="font-semibold text-primary">clear, consistent, revenue-driving content</span> — at scale.
              <br />
              <span className="text-gradient-brand font-medium">
                Disconnected disclosures in. High-performing, compliant content out.
              </span>
            </span>
          }
          size="lg"
        />
      </PageSection>

      {/* Why financial product content is broken */}
      <PageSection>
        <SectionHeader
          title="Why financial product content is broken — and why SalesChef fixes it"
        />
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-lg font-medium mb-2">Financial services are some of the most content-intensive, compliance-constrained industries in the world:</p>
            <p className="text-lg text-muted-foreground mb-8">Complex product sets — across banking, credit, insurance, wealth, superannuation, investment</p>
            <p className="text-lg font-medium text-foreground">But here's your reality:</p>
          </div>
          
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {financeProblems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{problem}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-foreground font-medium">👉 Financial product content is operationally fragile — and it's costing growth and trust.</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* The cost of the chaos */}
      <PageSection background="muted">
        <SectionHeader
          title="💸 The cost of the chaos"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chaosConsequences.map((consequence, index) => (
            <div key={index} className="bg-background rounded-xl p-6 border border-border/50 shadow-soft">
              <p className="text-foreground font-medium">{consequence}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* SalesChef: Built for the complexity of financial product content */}
      <PageSection>
        <SectionHeader
          title="SalesChef: Built for the complexity of financial product content"
        />
        <div className="space-y-8">
          <p className="text-lg text-center text-muted-foreground">
            SalesChef is designed for industries where product complexity + compliance + multi-channel demands = chaos. Finance is the perfect example.
          </p>
          
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">Your reality:</h3>
            <div className="space-y-3">
              {[
                'Product data scattered across spreadsheets, SharePoint, CMS, PDS templates, legal docs',
                '5+ versions of the "official" product description in circulation',
                'Rate or fee change → takes weeks to flow through all content surfaces',
                'Regulatory updates triggering massive manual effort',
                'Complex product variants poorly handled in current CMS or CRM',
                'No structured metadata → no ability to personalise, segment, or feed AI surfaces',
                'High compliance overhead → legal & compliance teams bottlenecked'
              ].map((reality, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold">👉</span>
                  <span className="text-foreground">{reality}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-foreground font-medium">SalesChef automates and governs this transformation — with audit-ready precision.</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* How SalesChef Works */}
      <PageSection background="muted">
        <SectionHeader
          title="How SalesChef works for Financial Services"
        />
        
        <div className="space-y-12">
          {/* Step 1: Ingest */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-semibold">Ingest & unify fragmented product data</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef's Drop Agent ingests from:</p>
            <div className="space-y-2">
              {ingestSources.map((source, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{source}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <p className="font-medium text-foreground mb-2">Key value:</p>
              <p className="text-sm">👉 Automatic consolidation of disconnected product content<br />
              👉 Full version tracking & governance — know when content last updated<br />
              👉 Eliminates rekeying across teams</p>
            </div>
          </div>

          {/* Step 2: Clean */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-semibold">Clean & structure with finance-specific intelligence</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef automates:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {cleaningFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Enrich */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-xl font-semibold">Enrich with regulatory & market intelligence</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef's Discover Agents add:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {enrichmentFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 4: Generate */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
              <h3 className="text-xl font-semibold">Generate & deploy across all content surfaces</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef outputs compliant, consistent product content to:</p>
            <div className="space-y-2">
              {outputChannels.map((channel, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{channel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      {/* Business Outcomes */}
      <PageSection>
        <SectionHeader
          title="Business outcomes for financial institutions"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessOutcomes.map((outcome, index) => (
            <div key={index} className="bg-muted/20 rounded-xl p-6 border border-border/50 text-center hover:shadow-medium transition-shadow">
              <outcome.icon className="w-10 h-10 mx-auto text-primary mb-4" />
              <div className="text-2xl font-bold text-primary mb-2">{outcome.metric}</div>
              <p className="text-sm text-muted-foreground">{outcome.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Why leaders choose SalesChef */}
      <PageSection background="muted">
        <SectionHeader
          title="Why leading banks, insurers and fintechs are moving to SalesChef"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Solves the "fragmented product content" problem',
            'Automates compliance-aware content transformation',
            'Designed for multi-variant, multi-regulatory product environments',
            'Integrates with modern and legacy banking & insurance stacks',
            'Audit-trail ready — built to satisfy internal & external audit',
            'Stateless architecture — no new system of record required',
            'AI-native — makes your product content ready for the next wave of search and customer interaction',
            'Unlocks personalisation at scale without manual rework'
          ].map((reason, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-soft border border-border/50">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="font-medium">{reason}</span>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      {/* Use Cases */}
      <PageSection>
        <SectionHeader
          title="Typical use cases"
        />
        <div className="overflow-x-auto">
          <table className="w-full bg-background rounded-xl shadow-soft border border-border/50">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-6 font-semibold">Use Case</th>
                <th className="text-left p-6 font-semibold">Agents Involved</th>
                <th className="text-left p-6 font-semibold">Value Delivered</th>
              </tr>
            </thead>
            <tbody>
              {useCases.map((useCase, index) => (
                <tr key={index} className="border-b border-border/30 last:border-0">
                  <td className="p-6 font-medium">{useCase.useCase}</td>
                  <td className="p-6 text-sm text-muted-foreground">{useCase.agents}</td>
                  <td className="p-6 text-sm">{useCase.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageSection>

      {/* Integrations */}
      <PageSection background="muted">
        <SectionHeader
          title="Key integrations & stack fit"
        />
        <div className="space-y-6">
          <p className="text-center text-muted-foreground">SalesChef works seamlessly with:</p>
          <div className="space-y-3">
            {integrations.map((integration, index) => (
              <div key={index} className="flex items-start gap-2 bg-background rounded-lg p-4 border border-border/50">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* CTA */}
      <EmailCTA
        headline="Ready to transform your financial product content operations?"
        subtitle="Custom-tailored for your institution: bank, insurer, super fund, fintech, or wealth manager."
        variant="default"
        size="lg"
      />

      <Footer />
    </div>
  );
};

export default Finance;
