
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import Footer from '@/components/Footer';
import { CheckCircle, X, TrendingUp } from 'lucide-react';

const RealEstate = () => {
  const contentProblems = [
    '🏠 Listing data chaos — property data fragmented across CRM, agent CMS, portals, manual inputs',
    '📁 No consistent taxonomy — location hierarchies, features, tags vary wildly between sources',
    '📸 Images inconsistently sized, labelled, optimised',
    '✍️ Agent-generated copy highly variable → typos, non-compliant claims, inconsistent tone',
    '⚖️ Compliance risk (eg. pricing disclaimers, misleading claims, regulatory requirements)',
    '🏷️ Property attributes (energy ratings, compliance tags, zoning, fitout) missing or unstructured',
    '📊 No structured data → can\'t drive advanced search, personalisation, or feed AI/LLM discovery',
    '🤖 No readiness for next-gen channels — voice search, AI agents, programmatic property ads',
    '📤 Massive manual effort to syndicate listings across portals, franchise networks, marketplaces, proptech partners'
  ];

  const chaosConsequences = [
    '⏰ Slow listing time-to-market → agents miss the golden first impression window',
    '📉 Low conversion due to poor-quality or incomplete listings',
    '🔍 SEO gaps → poor organic discovery',
    '💸 High SEM spend to compensate for poor listings',
    '📋 Manual cost to syndicate & maintain consistency across multiple channels',
    '⚖️ Compliance risk → penalties for misleading claims or outdated content',
    '😤 Frustrated consumers → high bounce rates, abandoned property journeys',
    '🤖 Missed AI/LLM traffic opportunities → no structured content ready for new discovery paths'
  ];

  const realityPoints = [
    '🏢 Multiple agency CRMs feeding listings → Rex, VaultRE, Box+Dice, AgentBox, Campaigntrack, RiTA, Propic',
    '🏛️ Franchise & multi-brand networks → variations in brand voice & listing standards',
    '📁 Property data scattered — agency CMS, franchise portals, CRM, MLS (in some markets), council/property records',
    '📷 Unstructured images & video → slowing down AI-driven recommendations',
    '📱 Channel complexity → portals (REA, Domain, Homely, realestateview), marketplaces (Facebook, Google), proptech partners, programmatic ad feeds',
    '🤖 No AI/LLM readiness → can\'t feed property journeys emerging on next-gen platforms'
  ];

  const ingestSources = [
    'Agency CRMs: VaultRE, Rex, Box+Dice, AgentBox, Campaigntrack, RiTA, Propic',
    'Franchise network portals',
    'Council/property databases (title, zoning, valuation)',
    'Media libraries (photos, videos, floorplans)',
    'External data feeds (energy ratings, building certifications, planning overlays)',
    'Consumer-facing listing pages (scraped for validation)',
    'SEO & search trend data',
    'Social content (Instagram, TikTok, Facebook property campaigns)'
  ];

  const cleaningFeatures = [
    'Standardisation of location hierarchy → state, region, suburb, micro-location',
    'Structuring of key attributes → bedrooms, bathrooms, car spaces, floor area, land area, zoning, energy rating, accessibility features',
    'Detection of missing mandatory attributes (eg. for compliance or listing eligibility)',
    'Removal of non-compliant copy (eg. "best in class", unsubstantiated superlatives)',
    'Application of brand-specific tone & style → for franchise networks',
    'Accessibility & readability optimisation (for consumer-facing listings)',
    'SEO optimisation → schema.org markup for property listings, SEO copy tuning',
    'Auto-tagging for personalisation (eg. suitable for families, investors, first home buyers, downsizers)',
    'Readiness for AI & voice interfaces → structuring for next-gen search',
    'Image validation & optimisation (resolution, compression, licensing)',
    'Video optimisation & alt tagging'
  ];

  const enrichmentFeatures = [
    'Competitor benchmarking (listing quality vs competing properties)',
    'Local market trend signals (emerging buyer search behaviour, hot suburbs)',
    'Buyer intent data (from portal & CRM interactions) → to drive personalised content',
    'Automated FAQ generation (based on buyer & renter inquiries)',
    'Dynamic updates based on market triggers (eg. price changes, listing status updates)',
    'LLM surfacing readiness checks → ensuring listings are optimised for emerging discovery paths'
  ];

  const outputChannels = [
    'Major property portals (REA, Domain, Homely, realestateview, Soho)',
    'Franchise network portals',
    'Agency websites (direct CMS integration)',
    'Google property feeds',
    'Social platforms (Instagram, Facebook, TikTok, LinkedIn)',
    'Programmatic ad feeds (Google Ads, Meta Ads)',
    'Voice & AI assistants (Google, Alexa, Meta AI)',
    'Property email marketing (personalised campaigns)',
    'Partner proptech platforms',
    'AI/LLM channels → preparing listings for next-gen property search experiences'
  ];

  const businessOutcomes = [
    { icon: TrendingUp, metric: '⚡ Faster', description: 'listing time-to-market → agents win early engagement' },
    { icon: TrendingUp, metric: '📈 Higher', description: 'listing conversion → more enquiries, inspections, offers' },
    { icon: TrendingUp, metric: '🔍 Better', description: 'SEO & AI visibility → drive organic buyer & renter acquisition' },
    { icon: TrendingUp, metric: '💰 Lower', description: 'manual content ops cost → scale networks without scaling headcount' },
    { icon: TrendingUp, metric: '🎯 Consistent', description: 'brand & compliance across multi-brand, multi-market networks' },
    { icon: TrendingUp, metric: '🚀 Stronger', description: 'partner syndication performance → drive network-level revenue' },
    { icon: TrendingUp, metric: '🤖 AI', description: 'readiness → future-proof content for voice & LLM-driven discovery' },
    { icon: TrendingUp, metric: '⚖️ Lower', description: 'compliance risk → governed, validated listing content at every step' }
  ];

  const useCases = [
    {
      useCase: 'Automated listing cleansing & compliance validation',
      agents: 'Diligence, QA Validator',
      value: 'Lower legal risk, improved brand reputation'
    },
    {
      useCase: 'SEO & AI-optimised property pages',
      agents: 'Discover.Search, Draft',
      value: 'Drive high-value organic traffic & new buyer/renter leads'
    },
    {
      useCase: 'Automated image & video optimisation',
      agents: 'Draw, Director, QA',
      value: 'Improved listing performance & cross-channel engagement'
    },
    {
      useCase: 'Personalised property content at scale',
      agents: 'Define, Draft, Deploy',
      value: 'Better engagement across audience segments'
    },
    {
      useCase: 'Syndication to partners & marketplaces',
      agents: 'Deploy',
      value: 'Higher consistency, faster time-to-market'
    },
    {
      useCase: 'AI/LLM surfacing readiness',
      agents: 'Document, Discover, Draft',
      value: 'Stay competitive in emerging search channels'
    }
  ];

  const integrations = [
    'Real estate CRMs: VaultRE, Rex, Box+Dice, AgentBox, Campaigntrack, RiTA, Propic',
    'CMS: WordPress, Drupal, Contentful, Adobe AEM, custom CMS',
    'SEO platforms: Conductor, Botify, BrightEdge',
    'Digital marketing platforms: Google Ads, Meta Ads, TikTok Ads',
    'Programmatic ad platforms',
    'Major property portals: REA, Domain, Homely, realestateview, Soho',
    'Franchise network portals',
    'Voice & AI surfaces',
    'Data platforms: Snowflake, BigQuery, Redshift',
    'DAMs & media hubs',
    'Proptech integrations → marketplace & partner feeds'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageSection background="gradient" padding="lg">
        <SectionHeader
          title={
            <span>
              🏠 SalesChef for Real Estate
            </span>
          }
          subtitle={
            <span>
              Transform fragmented property data into <span className="font-semibold text-primary">high-conversion, omni-channel-ready listings</span> — at scale.
              <br />
              <span className="text-gradient-brand font-medium">
                Messy agency CMS inputs in. High-performance listings, optimised for every channel, out.
              </span>
            </span>
          }
          size="lg"
        />
      </PageSection>

      {/* Why real estate content is broken */}
      <PageSection>
        <SectionHeader
          title="Why real estate content is broken — and why SalesChef fixes it"
        />
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-lg font-medium mb-2">Real estate portals and marketplaces live or die by content quality and speed.</p>
            <p className="text-lg text-muted-foreground mb-6">But today's reality:</p>
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
              👉 Real estate is a content race — and today's processes are too slow, inconsistent, and fragile.
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
          title="SalesChef: Built for the complexity of real estate content"
        />
        <div className="space-y-8">
          <p className="text-lg text-center text-muted-foreground">
            SalesChef is purpose-built for industries where fragmented, inconsistent, high-volume content must be transformed into governed, scalable, revenue-driving assets.
          </p>
          
          <div className="text-center">
            <p className="text-lg font-semibold text-primary mb-4">
              Real estate is ground zero:
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
              <p className="text-foreground font-medium">SalesChef automates this entire transformation layer — and turns it into a competitive advantage.</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* How SalesChef Works */}
      <PageSection background="muted">
        <SectionHeader
          title="How SalesChef works for Real Estate"
        />
        
        <div className="space-y-12">
          {/* Step 1: Ingest */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-semibold">Ingest & unify fragmented property data</h3>
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
              <p className="text-sm">👉 Breaks down CRM and channel silos</p>
              <p className="text-sm">👉 Validates and harmonises property attributes</p>
              <p className="text-sm">👉 Eliminates need for manual rekeying & reconciliation across channels</p>
            </div>
          </div>

          {/* Step 2: Clean */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-semibold">Clean & structure with real estate-specific intelligence</h3>
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
              <h3 className="text-xl font-semibold">Generate & deploy across property channels</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef outputs high-performance, governed property content to:</p>
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
          title="Business outcomes for real estate networks & marketplaces"
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
          title="Why leading property networks & marketplaces are moving to SalesChef"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Solves the "messy property data" problem across large-scale networks',
            'Harmonises multi-agency, multi-brand, multi-market content',
            'Automates compliance → essential for regulated markets',
            'Feeds next-gen channels → AI, voice, programmatic, personalisation',
            'Powers SEO and AI-first property search',
            'Dramatically reduces manual content overhead → faster, more scalable growth',
            'Stateless, agentic → no need to rip-and-replace CRM or CMS',
            'Future-proofs real estate content for the next decade of buyer and renter journeys'
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
            Ready to make your <span className="text-primary">property listings perform across every channel</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Custom-tailored for your business: real estate portal, franchise network, large agency, property marketplace, or proptech innovator.
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

export default RealEstate;
