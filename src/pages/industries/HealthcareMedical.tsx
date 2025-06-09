
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import Footer from '@/components/Footer';
import { CheckCircle, X, TrendingUp } from 'lucide-react';

const HealthcareMedical = () => {
  const contentProblems = [
    '📋 Highly technical, regulated products — with complex attributes, variant SKUs, and rapidly evolving specs',
    '📁 Content spread across regulatory filings, clinical data, internal documents, supplier feeds, marketing teams',
    '❌ Lack of a true single source of truth for product content',
    '⚖️ Regulatory and legal risk → penalties for inaccurate or non-compliant content',
    '🔄 Constant updates driven by new clinical evidence, approvals, market regulations',
    '👥 Multiple audiences → clinicians, healthcare professionals, patients, procurement officers, regulators — all require tailored messaging',
    '🤖 No structured data to support next-gen channels (AI assistants, voice, chatbots, LLM-driven search)',
    '🌍 High fragmentation across global markets → localisation and translation pain',
    '📦 Burdensome manual effort to prepare content for marketplaces (e.g. Amazon Health, hospital group portals, B2B procurement networks)'
  ];

  const chaosConsequences = [
    '⚖️ Compliance risk → regulatory penalties, legal exposure',
    '📉 Outdated product data across websites, distributor portals, hospital formularies',
    '🔍 Poor discoverability → low SEO & AI surfacing → patients and HCPs can\'t find accurate info',
    '💸 Massive manual cost to update product specs across global sites',
    '🌐 Translation/localisation bottlenecks → limits international growth',
    '💰 Lost revenue → slow time-to-market for new products & indications',
    '🔄 Inconsistent CX → erodes trust with clinicians & patients',
    '🚫 Inability to support new sales channels (marketplaces, AI agents, e-commerce platforms)'
  ];

  const realityPoints = [
    '📦 Multiple product versions across markets',
    '📋 Constant regulatory updates → US FDA, EMA, TGA, MHRA, NMPA, PMDA',
    '📊 Content scattered across Regulatory, Medical Affairs, Marketing, eCommerce, Partners',
    '🌍 Local market nuances → translation, compliance differences',
    '🏷️ No consistent taxonomy → hard to drive ecommerce & AI experiences',
    '📤 Every channel wants content packaged differently → distributors, hospital groups, B2B marketplaces, consumer sites'
  ];

  const ingestSources = [
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
  ];

  const cleaningFeatures = [
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
  ];

  const enrichmentFeatures = [
    'Competitive product positioning (based on public data & content gaps)',
    'Market trend signals (emerging therapeutic needs, search trends)',
    'Dynamic FAQ generation (based on patient questions, clinician inquiries, call centre logs)',
    'LLM surfacing readiness checks',
    'Alerting for regulatory change triggers (impacting content)',
    'Translation & localisation tuning based on market feedback',
    'Harmonisation of global variants → ensuring consistency across markets'
  ];

  const outputChannels = [
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
  ];

  const businessOutcomes = [
    { icon: TrendingUp, metric: '⚖️ Reduced', description: 'compliance risk → audit-ready content with full traceability' },
    { icon: TrendingUp, metric: '⚡ Faster', description: 'market entry for new products → weeks to days' },
    { icon: TrendingUp, metric: '🔍 Stronger', description: 'SEO & AI discoverability → increased inbound traffic from HCPs & patients' },
    { icon: TrendingUp, metric: '🌍 Lower', description: 'translation & localisation costs → scalable multilingual content' },
    { icon: TrendingUp, metric: '🔄 Consistent', description: 'CX across channels & markets → builds clinician & patient trust' },
    { icon: TrendingUp, metric: '📈 Higher', description: 'revenue via better partner enablement (distributors, marketplaces, hospital groups)' }
  ];

  const useCases = [
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
  ];

  const integrations = [
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
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageSection background="gradient" padding="lg">
        <SectionHeader
          title={
            <span>
              🏥 SalesChef for Healthcare & Medical
            </span>
          }
          subtitle={
            <span>
              Transform complex, regulated healthcare product data into <span className="font-semibold text-primary">consistent, compliant, conversion-driving content</span> — at scale.
              <br />
              <span className="text-gradient-brand font-medium">
                Scattered clinical documents in. Governed, omnichannel-ready healthcare content out.
              </span>
            </span>
          }
          size="lg"
        />
      </PageSection>

      {/* Why healthcare content is broken */}
      <PageSection>
        <SectionHeader
          title="Why healthcare product content is broken — and why SalesChef fixes it"
        />
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-lg font-medium mb-2">Healthcare content is one of the most complex, regulated, fragmented domains in the world:</p>
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
              👉 Healthcare product content is mission-critical, but dangerously fragmented — until SalesChef.
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
          title="SalesChef: Built for the complexity of healthcare product content"
        />
        <div className="space-y-8">
          <p className="text-lg text-center text-muted-foreground">
            SalesChef is purpose-built for industries where compliance meets content complexity meets multi-channel distribution.
          </p>
          
          <div className="text-center">
            <p className="text-lg font-semibold text-primary mb-4">
              Healthcare & medical is the perfect fit:
            </p>
            <p className="text-lg text-muted-foreground">
              👉 Life sciences → Medical devices → Pharma → MedTech → Hospital & aged care supply → Consumer health
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
              <p className="text-foreground font-medium">SalesChef automates this transformation with audit-grade precision.</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* How SalesChef Works */}
      <PageSection background="muted">
        <SectionHeader
          title="How SalesChef works for Healthcare & Medical"
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
              <p className="text-sm">👉 Breaks down content silos between regulatory, clinical, marketing & commercial</p>
              <p className="text-sm">👉 Structures & validates product data for omnichannel use</p>
            </div>
          </div>

          {/* Step 2: Clean */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-semibold">Clean & structure with healthcare-specific intelligence</h3>
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
              <h3 className="text-xl font-semibold">Generate & deploy across healthcare channels</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef outputs structured, compliant content to:</p>
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
          title="Business outcomes for healthcare companies"
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
          title="Why leading healthcare brands are moving to SalesChef"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Automates the hardest content challenges in healthcare',
            'Delivers audit-grade, regulator-ready content governance',
            'Connects regulatory, medical affairs, marketing & commercial',
            'Harmonises content across global markets & local nuances',
            'Structures content for modern buying journeys → AI, marketplaces, self-serve B2B',
            'Drives faster market access & greater revenue velocity',
            'Stateless architecture → no rip-and-replace of existing systems',
            'Future-proofs content ops → AI-native, agentic architecture',
            'Lowers manual content ops burden dramatically → scalable, global content governance'
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
            Ready to transform your <span className="text-primary">healthcare product content operations</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Custom-tailored for your business: medtech, pharma, life sciences, consumer health, hospital supply, distributor, or healthcare marketplace.
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

export default HealthcareMedical;
