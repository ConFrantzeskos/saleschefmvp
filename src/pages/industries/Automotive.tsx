
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import Footer from '@/components/Footer';
import { CheckCircle, X, TrendingUp } from 'lucide-react';

const Automotive = () => {
  const contentProblems = [
    '🚗 Fragmented data sources — DMS feeds, OEM systems, dealer CRM, Excel, PDFs',
    '📁 No consistent taxonomy — vehicle options, features, compliance tags vary wildly',
    '✍️ Dealer-generated listing copy highly inconsistent → errors, tone mismatch, legal exposure',
    '📸 Missing or inconsistent imagery → undermines consumer confidence',
    '⚖️ Compliance risk → incorrect fuel consumption, emissions, ANCAP safety ratings, on-road cost disclaimers',
    '📊 No structured data → can\'t power modern search, voice, or AI-driven journeys',
    '🤖 No readiness for AI/LLM-driven buyer journeys → next-gen search is coming fast',
    '📤 Manual effort to maintain listings across OEM, dealer sites, marketplaces, portals',
    '⏰ Delayed time-to-market for updated models, MY updates, dealer stock changes'
  ];

  const chaosConsequences = [
    '📉 Low listing conversion rates → abandoned buyer journeys',
    '🔍 SEO gaps → low organic discovery → higher paid media costs',
    '⚖️ Compliance risk → legal exposure for non-compliant claims',
    '😤 Dealer frustration → manual rework slows sales teams',
    '🚫 Marketplace partner friction → listings rejected or under-ranked',
    '📋 Inconsistent CX across franchise network → brand erosion',
    '⏳ Slow updates → stale stock → aged inventory',
    '🤖 Inability to power new AI-driven buying journeys'
  ];

  const realityPoints = [
    '🏢 DMS feeds + OEM systems + dealer-generated content = content chaos',
    '📱 Multiple channels → franchise dealer sites, OEM brand sites, third-party marketplaces, Google vehicle ads, Meta dynamic auto ads, programmatic channels',
    '⚡ Buyers demand real-time accuracy → stock, features, options, availability',
    '📁 No single source of truth for structured content',
    '🔍 SEO & structured data not fully leveraged → losing organic traffic to 3rd party marketplaces',
    '🤖 No readiness for emerging AI-driven automotive buyer journeys'
  ];

  const ingestSources = [
    'Dealer Management Systems (DMS): Pentana ERA, Auto-IT, Titan DMS, CDK Global, Reynolds & Reynolds',
    'OEM product & pricing systems',
    'OEM media banks (images, video, brochures)',
    'Dealer CRM (Salesforce, Dynamics, proprietary platforms)',
    'Dealer website CMS',
    'Marketplace listing exports',
    'Government compliance databases (fuel consumption, emissions, ANCAP, ADR compliance)',
    'Model year (MY) updates & variant lists',
    'Vehicle option codes, pack options',
    'Used vehicle stock sheets / trade-in data',
    'Live inventory APIs'
  ];

  const cleaningFeatures = [
    'Structuring of key vehicle attributes → make, model, variant, body style, transmission, fuel type, engine specs, options, colours, ANCAP rating, fuel economy',
    'Compliance tagging → ADR statements, disclaimers, T&Cs',
    'Pricing structure → base price, on-road costs, driveaway, promotional pricing',
    'Taxonomy alignment → aligned to Google Vehicle Ads, Meta Automotive Ads, CarGurus, Carsales, Autotrader, Facebook Marketplace',
    'SEO optimisation → schema.org vehicle markup',
    'Tone of voice alignment → dealer vs OEM brand standards',
    'Auto-detection & flagging of non-compliant copy',
    'Image optimisation → validation of correct hero image, angle coverage, resolution, compliance',
    'Video & multimedia tagging → ensuring readiness for modern buyer journeys',
    'Dynamic vehicle status tracking → in stock, incoming, demo, used',
    'Structured data for personalisation & segmentation → SUV buyers, fleet, first car buyers, luxury buyers'
  ];

  const enrichmentFeatures = [
    'Competitor benchmarking (pricing, feature set gaps, positioning)',
    'Local market demand signals (trending models, colours, powertrains)',
    'Buyer search behaviour (from Google, marketplaces, website analytics)',
    'Automated FAQ generation (based on buyer queries & CRM/call centre data)',
    'Dealer-specific & network-wide optimisation recommendations',
    'LLM surfacing readiness checks → preparing for AI-driven automotive search',
    'Dynamic adjustments for fast-changing segments → EVs, hybrids, new MY updates'
  ];

  const outputChannels = [
    'Dealer websites (direct CMS integration or API)',
    'Franchise network portals',
    'OEM brand sites',
    'Major marketplaces → Carsales, CarGuide, Autotrader, Drive, Facebook Marketplace',
    'Google Vehicle Ads feeds',
    'Meta dynamic automotive ads feeds',
    'Programmatic ad feeds (DV360, The Trade Desk)',
    'CRM → Salesforce, Dynamics, proprietary platforms',
    'Dealer window labels & showroom collateral',
    'SEO-optimised landing pages',
    'Voice & AI assistant surfaces (Google, Alexa, Meta AI)',
    'Next-gen auto marketplaces & proptech integrations'
  ];

  const businessOutcomes = [
    { icon: TrendingUp, metric: '⚡ Faster', description: 'listing time-to-market → new models, used stock updates live faster' },
    { icon: TrendingUp, metric: '📈 Higher', description: 'listing conversion → more enquiries, test drives, deals closed' },
    { icon: TrendingUp, metric: '🔍 Better', description: 'SEO & organic acquisition → reduce dependency on paid traffic' },
    { icon: TrendingUp, metric: '⚖️ Lower', description: 'compliance risk → governed, validated vehicle content' },
    { icon: TrendingUp, metric: '😊 Happier', description: 'dealers → less manual content work, more time selling' },
    { icon: TrendingUp, metric: '🎯 Network', description: 'consistency → brand-aligned content across OEM, franchise, dealer channels' },
    { icon: TrendingUp, metric: '🤖 AI', description: 'readiness → prepare for next-gen auto buying journeys' },
    { icon: TrendingUp, metric: '💰 Lower', description: 'SEM waste → higher-performing ads with accurate, structured data' }
  ];

  const useCases = [
    {
      useCase: 'Automated compliance validation across dealer network',
      agents: 'Diligence, QA Validator',
      value: 'Reduced legal risk, improved brand governance'
    },
    {
      useCase: 'SEO & AI-optimised vehicle pages',
      agents: 'Discover.Search, Draft',
      value: 'Drive more organic traffic & high-quality leads'
    },
    {
      useCase: 'Automated image & video optimisation',
      agents: 'Draw, Director, QA',
      value: 'Higher engagement & listing performance'
    },
    {
      useCase: 'Dealer-specific content personalisation',
      agents: 'Define, Draft, Deploy',
      value: 'Increased buyer engagement & trust'
    },
    {
      useCase: 'Syndication to marketplaces & ad platforms',
      agents: 'Deploy',
      value: 'Faster time-to-market, reduced manual work'
    },
    {
      useCase: 'AI/LLM surfacing readiness',
      agents: 'Document, Discover, Draft',
      value: 'Compete in emerging buyer channels'
    }
  ];

  const integrations = [
    'DMS: Pentana ERA, CDK Global, Titan DMS, Reynolds & Reynolds, Auto-IT',
    'CRM: Salesforce, Dynamics, proprietary dealer CRMs',
    'OEM systems & feeds',
    'Dealer & franchise network CMS: Adobe AEM, WordPress, Drupal, custom platforms',
    'Marketplaces: Carsales, CarGuide, Autotrader, Drive, Facebook Marketplace',
    'Ad platforms: Google Vehicle Ads, Meta Dynamic Ads',
    'Programmatic DSPs: DV360, The Trade Desk',
    'SEO: Conductor, BrightEdge, Botify',
    'Voice/AI: Google, Alexa, Meta AI',
    'DAMs & media hubs',
    'Dealer window labelling systems'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageSection background="gradient" padding="lg">
        <SectionHeader
          title={
            <span>
              🚗 SalesChef for Automotive
            </span>
          }
          subtitle={
            <span>
              Transform fragmented vehicle data into <span className="font-semibold text-primary">conversion-optimised, channel-ready listings</span> — at scale.
              <br />
              <span className="text-gradient-brand font-medium">
                Messy DMS feeds and dealer spreadsheets in. High-performance automotive content out.
              </span>
            </span>
          }
          size="lg"
        />
      </PageSection>

      {/* Why automotive content is broken */}
      <PageSection>
        <SectionHeader
          title="Why automotive product content is broken — and why SalesChef fixes it"
        />
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-lg font-medium mb-2">In today's automotive market, content quality is king — it drives consumer trust, conversion, and search visibility.</p>
            <p className="text-lg text-muted-foreground mb-6">But here's the current reality:</p>
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
              👉 Automotive content is a race — and manual, inconsistent processes lose that race every day.
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
          title="SalesChef: Built for the complexity of automotive content"
        />
        <div className="space-y-8">
          <p className="text-lg text-center text-muted-foreground">
            SalesChef is purpose-built for industries where high-SKU complexity + compliance + multi-channel demands = revenue-critical content operations.
          </p>
          
          <div className="text-center">
            <p className="text-lg font-semibold text-primary mb-4">
              Automotive fits this perfectly:
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
              <p className="text-foreground font-medium">SalesChef automates this entire transformation — and turns it into competitive advantage.</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* How SalesChef Works */}
      <PageSection background="muted">
        <SectionHeader
          title="How SalesChef works for Automotive"
        />
        
        <div className="space-y-12">
          {/* Step 1: Ingest */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-semibold">Ingest & unify fragmented vehicle data</h3>
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
              <p className="text-sm">👉 Harmonises OEM, dealer, marketplace, compliance & media content</p>
              <p className="text-sm">👉 Creates clean, unified, structured vehicle content across stock and model year variants</p>
            </div>
          </div>

          {/* Step 2: Clean */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-semibold">Clean & structure with automotive-specific intelligence</h3>
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
              <h3 className="text-xl font-semibold">Generate & deploy across automotive sales channels</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef outputs high-performance, governed vehicle content to:</p>
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
          title="Business outcomes for automotive dealers, networks & marketplaces"
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
          title="Why leading automotive brands, marketplaces & dealer networks are moving to SalesChef"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Solves the fragmented automotive content problem',
            'Harmonises OEM, DMS, dealer & compliance data',
            'Automates compliance validation → critical in regulated auto markets',
            'Speeds up dealer & network time-to-market',
            'Optimises for SEO, voice, AI-driven journeys → future-proof advantage',
            'Stateless architecture → integrates with existing DMS/CRM/CMS stack',
            'Powers franchise, dealer group & marketplace growth',
            'Unlocks AI-native auto buying experiences — first to market wins'
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
      <PageSection>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to turn your <span className="text-primary">automotive content into a revenue engine</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Custom-tailored for your business: OEM, dealer network, marketplace, or automotive marketing partner.
          </p>
          <Link to="/pricing">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Pricing & Demo
            </Button>
          </Link>
        </div>
      </PageSection>

      <Footer />
    </div>
  );
};

export default Automotive;
