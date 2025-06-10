import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import Footer from '@/components/Footer';
import IndustryCTA from '@/components/industry/IndustryCTA';
import { CheckCircle, X, TrendingUp } from 'lucide-react';

const InvestorCommunications = () => {
  const contentProblems = [
    '📊 Content chaos → data scattered across emails, spreadsheets, board decks, internal reports, portfolio company updates, news clippings',
    '📁 No consistent taxonomy across portfolio firms, geographies, asset classes, investment stages',
    '📋 Incomplete data flows — not every portfolio company is listed or has formal reporting',
    '⏰ Constant manual chasing of inputs → huge time sink',
    '⚖️ Complex regulatory overlays — public disclosures, LP reporting, internal governance',
    '📝 Inconsistent tone and structure → weakens trust with investors and the market',
    '🔍 Zero structured data → can\'t drive next-gen channels like AI-powered investor experiences',
    '🔄 Huge duplication of effort — same data repackaged for annual reports, investor decks, quarterly updates',
    '⏳ Always behind the curve → last-minute scrambles ahead of earnings, AGMs, investor days'
  ];

  const chaosConsequences = [
    '📉 Slower time-to-market for investor updates → damages transparency & trust',
    '📢 Inconsistent messaging across channels → weakens market position',
    '⚖️ Compliance & legal risk → missing disclaimers, outdated figures',
    '💰 Opportunity cost → more time wrangling data, less time crafting strategic narratives',
    '😤 Investor fatigue → poor quality comms erode credibility',
    '🌱 Lagging ESG & thematic reporting → out of step with modern investor expectations',
    '🤖 No readiness for AI-powered investor experiences → falling behind the market',
    '🔄 Poor content reuse → manual rework drains team capacity'
  ];

  const realityPoints = [
    '🏢 Multiple internal & external data sources → across IR, finance, legal, marketing, portfolio firms',
    '📈 Complex mix of listed & unlisted assets',
    '🏭 Portfolio companies at different maturity stages → varying data quality',
    '👥 Multiple audiences → public markets, LPs, boards, internal executives, regulators, analysts',
    '🔗 No unified content pipeline → massive duplication of effort',
    '⏰ Huge time sensitivity → quarterly cycles, earnings, LP reports, AGM prep',
    '🤖 Emerging demand for AI-powered investor experiences → and no structured content to power them'
  ];

  const ingestSources = [
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
  ];

  const cleaningFeatures = [
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
  ];

  const enrichmentFeatures = [
    'Market positioning insights → how portfolio or listed company narrative compares to peers',
    'Competitor intelligence → public disclosures, sentiment analysis',
    'ESG benchmarking → relative position vs market',
    'Investor sentiment tracking → Q&A trends, social listening, analyst commentary',
    'Dynamic FAQ generation → based on investor inquiries & analyst coverage',
    'LLM readiness → prepares structured content for AI-powered investor experiences (coming fast)'
  ];

  const outputChannels = [
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
  ];

  const businessOutcomes = [
    { icon: TrendingUp, metric: '⚡ Faster', description: 'time-to-market → aligned to earnings & board cycles' },
    { icon: TrendingUp, metric: '⚖️ Lower', description: 'compliance risk → audit-grade content governance' },
    { icon: TrendingUp, metric: '📢 Consistent', description: 'messaging across all investor channels' },
    { icon: TrendingUp, metric: '📉 Reduced', description: 'manual effort → less data wrangling, more strategy' },
    { icon: TrendingUp, metric: '📈 Higher', description: 'investor trust → clearer, more transparent communications' },
    { icon: TrendingUp, metric: '🔄 Better', description: 'content reuse → less duplication across IR, ESG, LP reporting' },
    { icon: TrendingUp, metric: '🤖 AI-ready', description: 'investor content → positioning for next-gen investor experiences' },
    { icon: TrendingUp, metric: '🎯 More effective', description: 'internal stakeholder alignment → faster, more consistent internal narratives' }
  ];

  const useCases = [
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
  ];

  const integrations = [
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
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageSection background="gradient" padding="lg">
        <SectionHeader
          title={
            <span>
              📊 SalesChef for Investor Communications
            </span>
          }
          subtitle={
            <span>
              Transform scattered, unstructured investment data into <span className="font-semibold text-primary">clear, consistent, compliant communications</span> — at scale.
              <br />
              <span className="text-gradient-brand font-medium">
                Messy portfolio updates, internal reports, emails, and scraps in. Professional-grade investor content out.
              </span>
            </span>
          }
          size="lg"
        />
      </PageSection>

      {/* Why investor communications content is broken */}
      <PageSection>
        <SectionHeader
          title="Why investor communications content is broken — and why SalesChef fixes it"
        />
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-lg font-medium mb-2">For IR and investor comms teams — whether in public companies or private investment firms — the reality today is brutal:</p>
          </div>
          
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
            <div className="space-y-4">
              {contentProblems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{problem}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg font-semibold text-primary">
              👉 Investor communications is a strategic function — but content chaos is holding it back.
            </p>
          </div>
        </div>
      </PageSection>

      {/* The cost of the chaos */}
      <PageSection background="muted">
        <SectionHeader
          title="The cost of the chaos"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chaosConsequences.map((consequence, index) => (
            <div key={index} className="bg-background rounded-xl p-6 border border-border/50 shadow-soft">
              <div className="text-destructive text-2xl mb-3">💸</div>
              <p className="text-foreground font-medium">{consequence}</p>
            </div>
          ))}
        </div>
      </PageSection>

      {/* SalesChef: Built for complexity */}
      <PageSection>
        <SectionHeader
          title="SalesChef: Built for the complexity of investor communications"
        />
        <div className="space-y-8">
          <p className="text-lg text-center text-muted-foreground">
            SalesChef was designed for industries where fragmented, sensitive, regulated content must be transformed into strategic, trusted outputs — at scale and under pressure.
          </p>
          
          <div className="text-center">
            <p className="text-lg font-semibold text-primary mb-4">
              Investor comms is a perfect fit:
            </p>
          </div>
          
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">Your reality:</h3>
            <div className="space-y-3">
              {realityPoints.map((reality, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold">👉</span>
                  <span className="text-foreground">{reality}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-foreground font-medium">SalesChef automates this transformation with governance and precision — freeing IR & comms teams to focus on strategy, not data wrangling.</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* How SalesChef Works */}
      <PageSection background="muted">
        <SectionHeader
          title="How SalesChef works for Investor Communications"
        />
        
        <div className="space-y-12">
          {/* Step 1: Ingest */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-semibold">Ingest & unify fragmented investor data</h3>
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
              <p className="text-sm">👉 Unifies internal & external data flows → no more scattered sources</p>
              <p className="text-sm">👉 Normalises portfolio data → even across mixed listed/unlisted assets</p>
              <p className="text-sm">👉 Auto-tags and version-controls sensitive content</p>
            </div>
          </div>

          {/* Step 2: Clean */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-semibold">Clean & structure with investor comms intelligence</h3>
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
              <h3 className="text-xl font-semibold">Enrich with market intelligence & dynamic insights</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef's Discover Agents add:</p>
            <div className="space-y-2">
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
              <h3 className="text-xl font-semibold">Generate & deploy across investor communication channels</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef outputs trusted, consistent investor content to:</p>
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
          title="Business outcomes for investor relations & comms teams"
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
          title="Why leading IR teams, investment firms & asset managers are moving to SalesChef"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Solves the "data wrangling" problem → frees IR/comms teams to focus on strategy',
            'Harmonises internal & external content flows → across mixed asset classes & portfolios',
            'Automates compliance validation & governance',
            'Prepares content for AI-first investor engagement',
            'Enables scalable investor comms → global teams, multi-market complexity',
            'Stateless, agentic → integrates with existing IR & comms stack',
            'Speeds up delivery for fast-moving investor cycles',
            'Unlocks new capabilities → AI agents, personalisation, next-gen investor experiences'
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
                <th className="text-left p-6 font-semibold">SalesChef Agents Involved</th>
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
      <IndustryCTA industryName="investor communications" />

      <Footer />
    </div>
  );
};

export default InvestorCommunications;
