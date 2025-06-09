import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import Footer from '@/components/Footer';
import { CheckCircle, X, TrendingUp } from 'lucide-react';

const IndustrialManufacturing = () => {
  const industrialProblems = [
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
  ];

  const chaosConsequences = [
    '💸 Lost sales due to poor search & discoverability',
    '🚪 High buyer abandonment on ecommerce platforms (can\'t find right product)',
    '✋ Manual syndication to marketplaces → slow, error-prone',
    '⚖️ Compliance & legal risk (wrong specs published, outdated regulatory info)',
    '💰 Costly, unscalable content ops → constant human rework',
    '⏱️ Delayed market entry for new SKUs and product variants',
    '🤖 Inability to support modern B2B buying journeys: AI assistants, configurators, CPQ, self-serve ecommerce'
  ];

  const ingestSources = [
    'ERP systems (SAP ECC/S4, Oracle EBS, Dynamics AX, Infor, Epicor, Netsuite, QAD, IFS)',
    'PLM systems (Siemens Teamcenter, PTC Windchill, Dassault ENOVIA)',
    'PIMs (Akeneo, inRiver, Riversand, Stibo, Salsify — where present)',
    'Engineering PDFs & spec sheets (OCR + NLP extraction)',
    'Supplier-provided spreadsheets',
    'Legacy databases & access files',
    'Partner / reseller data feeds',
    'Regulatory & compliance databases (eg. REACH, RoHS, UL, CE, ISO certifications)'
  ];

  const cleaningFeatures = [
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
  ];

  const enrichmentFeatures = [
    'Competitor benchmarking (pricing, spec gaps, positioning)',
    'Market trend signals (emerging search terms, new standards)',
    'Customer FAQ generation (based on search queries, support data, sales CRM notes)',
    'Dynamic compliance monitoring — alerting when published specs drift out of compliance',
    'LLM readiness checks — preparing products for AI-driven B2B buying journeys',
    'Variant & accessory mapping (eg. replacement parts, compatible accessories)'
  ];

  const outputChannels = [
    'Owned ecommerce platforms (Magento, Shopify Plus, SAP Commerce Cloud/Hybris, Salesforce B2B Commerce, BigCommerce, Adobe Commerce)',
    'Marketplaces: Amazon Business, Zoro, Grainger, Thomasnet, Alibaba, eBay Business Supply, MSC Direct, Fastenal',
    'Partner & distributor portals',
    'PDF datasheets (automatically generated & version controlled)',
    'CPQ & configurator platforms',
    'Print catalogs (structured content ready for InDesign, XMPie, CHILI publish)',
    'CRM (Salesforce, Dynamics)',
    'SEO-optimised landing pages',
    'AI/voice search channels (Google, Alexa, Meta AI, Copilot)'
  ];

  const businessOutcomes = [
    { icon: TrendingUp, metric: '📈 Higher', description: 'online revenue — better discoverability, higher conversion' },
    { icon: TrendingUp, metric: '⚡ Faster', description: 'new product introduction — weeks to days' },
    { icon: TrendingUp, metric: '💰 Lower', description: 'manual content ops costs — scale content without scaling headcount' },
    { icon: TrendingUp, metric: '✅ Better', description: 'compliance & risk posture — audit-ready content processes' },
    { icon: TrendingUp, metric: '🌐 Full', description: 'omnichannel readiness — marketplaces, partner portals, direct ecommerce' },
    { icon: TrendingUp, metric: '🔍 Stronger', description: 'SEO performance → long-tail industrial buying journeys' },
    { icon: TrendingUp, metric: '😊 Improved', description: 'customer experience → consistent specs across channels' },
    { icon: TrendingUp, metric: '🤖 AI-ready', description: 'for AI-powered B2B buying — future-proof your product data' }
  ];

  const useCases = [
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
  ];

  const integrations = [
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
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageSection background="gradient" padding="lg">
        <SectionHeader
          title={
            <span>
              🏭 SalesChef for Industrial & Manufacturing
            </span>
          }
          subtitle={
            <span>
              Transform complex product data into a <span className="font-semibold text-primary">high-performance, multi-channel content engine</span>.
              <br />
              <span className="text-gradient-brand font-medium">
                Engineering spec sheets in. Revenue-driving digital content out.
              </span>
            </span>
          }
          size="lg"
        />
      </PageSection>

      {/* Why industrial product content is broken */}
      <PageSection>
        <SectionHeader
          title="Why industrial product content is broken — and why SalesChef fixes it"
        />
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-lg font-medium mb-2">Manufacturers and industrial distributors face some of the hardest product content challenges in commerce:</p>
            <p className="text-lg text-muted-foreground mb-8">Complex catalogs, fragmented data, and legacy systems create massive barriers to modern commerce</p>
            <p className="text-lg font-medium text-foreground">But here's your reality:</p>
          </div>
          
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industrialProblems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{problem}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-foreground font-medium">👉 Industrial commerce is stuck in the past — and it's holding back revenue.</p>
            </div>
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

      {/* SalesChef: Built for the complexity of industrial product content */}
      <PageSection>
        <SectionHeader
          title="SalesChef: Built for the complexity of industrial product content"
        />
        <div className="space-y-8">
          <p className="text-lg text-center text-muted-foreground">
            SalesChef is designed for industries where product complexity meets channel fragmentation and revenue urgency. Industrial & manufacturing is one of the toughest.
          </p>
          
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">Your reality:</h3>
            <div className="space-y-3">
              {[
                '100k–1M SKUs',
                'No consistent product taxonomy',
                'ERP is not ecommerce-friendly',
                'PDFs are the "source of truth" (but unreadable to ecommerce systems)',
                'Units of measure all over the place',
                'Global variants → regional compliance headaches',
                'Channel partners all want different feeds & formats',
                'SEO is an afterthought (or non-existent)',
                'CPQ and guided selling not fully powered due to inconsistent attribute sets'
              ].map((reality, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold">👉</span>
                  <span className="text-foreground">{reality}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-foreground font-medium">SalesChef automates this transformation — and turns it into a revenue advantage.</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* How SalesChef Works */}
      <PageSection background="muted">
        <SectionHeader
          title="How SalesChef works for Industrial & Manufacturing"
        />
        
        <div className="space-y-12">
          {/* Step 1: Ingest */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-semibold">Ingest & unify your product data</h3>
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
              <p className="text-sm">👉 No need for expensive data "cleansing" projects — SalesChef ingests & structures on the fly<br />
              👉 Unlocks buried technical data from engineering documents</p>
            </div>
          </div>

          {/* Step 2: Clean */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-semibold">Clean & structure with industrial-specific intelligence</h3>
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
              <h3 className="text-xl font-semibold">Generate & deploy across B2B sales channels</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef outputs high-performance product content to:</p>
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
          title="Business outcomes for industrial & manufacturing firms"
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
          title="Why leading manufacturers and distributors are moving to SalesChef"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Solves the hardest product content problems in industrial commerce',
            'No rip-and-replace — works alongside your ERP/PIM/PLM stack',
            'Automates critical compliance and governance needs',
            'Structures product data to drive AI, CPQ, configurator, voice, next-gen buying',
            'Speeds up marketplace onboarding and syndication',
            'Designed to scale — 100k, 500k, 1M SKUs → no problem',
            'Future-proofs your commerce stack — AI-native, agentic architecture',
            'Unlocks new revenue from existing product data'
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
      <PageSection>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to turn your industrial product data into a <span className="text-primary">competitive advantage</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Custom-tailored for your manufacturing, distribution, or industrial commerce business.
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

export default IndustrialManufacturing;
