
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import Footer from '@/components/Footer';
import { CheckCircle, X, TrendingUp } from 'lucide-react';

const TravelTourism = () => {
  const supplierProblems = [
    '📄 PDFs and spreadsheets with errors',
    '🏷️ No consistent categories or product structure',
    '📸 Missing or low-quality imagery',
    '🔄 No version control — dates, times, prices constantly out of sync',
    '📊 Zero structured data for modern channels',
    '⚖️ Legal disclaimers and T&Cs missing or inconsistent',
    '📅 Seasonality and availability a moving target',
    '🌍 Translation and localisation painfully manual',
    '🔍 No scalable SEO — too slow, too inconsistent',
    '👥 Human-driven onboarding takes 6–12 weeks per product',
    '💰 Most marketplaces and OTAs leave massive revenue on the table because of this mess'
  ];

  const chaosConsequences = [
    '📉 Low conversion rates on marketplaces',
    '⏱️ Expensive and slow operator onboarding',
    '💸 Poor quality listings → SEM waste → declining ROI',
    '🔧 Manual maintenance overhead',
    '📈 Stalled marketplace growth',
    '⚖️ Legal risk (compliance gaps)',
    '🌍 Limited ability to scale globally (multi-language, multi-market)',
    '📞 Rising customer service costs due to inaccurate or inconsistent listings'
  ];

  const ingestSources = [
    'PDFs, DOCs, spreadsheets, Google Sheets',
    'Booking system exports: Rezdy, TourCMS, BookingKit, Ventrata, Tourplan, ResPax, Fareharbor, Livn, Bokun',
    'OTA marketplace listings (scraped & enriched): Viator, GetYourGuide, Booking.com, Klook, Expedia, Trip.com, Musement, Airbnb Experiences',
    'Google Business data',
    'API feeds from DMS or bespoke operator platforms',
    'Media libraries (Dropbox, Google Drive, DAMs)'
  ];

  const cleaningFeatures = [
    'Date/time consistency (UTC offsets, local TZ, seasonal availability)',
    'Product categorisation (mapped to OTA and Google Things To Do taxonomies)',
    'Pricing logic (child, senior, family rates)',
    'Cancellation policy consistency',
    'Safety & legal compliance inserts',
    'Accessibility tags',
    'Dietary / allergen tagging',
    'Equipment inclusions/exclusions',
    'Location enrichment (geo codes, map points)',
    'Image validation (min resolution, licensing checks, alt text)',
    'SEO optimisation (structured data, FAQ schema, meta fields)',
    'Tone of voice tuning (luxury, family, adventure, sustainable, budget)'
  ];

  const enrichmentFeatures = [
    'Review summaries (Google, TripAdvisor, OTA marketplaces)',
    'Social sentiment monitoring',
    'Dynamic FAQs based on customer questions',
    'Benchmarking against competitor listings',
    'Events & seasonality triggers (automatically adjusts content)',
    'Multi-language translations (FR, DE, ES, ZH, IT, JP, PT, AR…)',
    'Dynamic pricing and availability syncing',
    'Compliance checks against OTA acceptance rules'
  ];

  const outputChannels = [
    'Marketplaces (Viator, GetYourGuide, Klook, Booking.com, Expedia, Trip.com, Musement, Airbnb Experiences)',
    'Google Things To Do',
    'DMO portals (state & regional)',
    'Meta shops (Facebook, Instagram)',
    'OTA web and app CMS (headless or monolithic)',
    'Voice & chat agents (Google, Alexa, Meta AI)',
    'Email marketing',
    'Social (short-form video, image carousels, captions)',
    'Print-ready brochures, rack cards',
    'Internal training & support documentation'
  ];

  const businessOutcomes = [
    { icon: TrendingUp, metric: '🚀 5–10x', description: 'more products onboarded per month' },
    { icon: TrendingUp, metric: '📈 +20–50%', description: 'higher PDP conversion rates vs baseline' },
    { icon: TrendingUp, metric: '💰 90%', description: 'reduction in SEM waste' },
    { icon: TrendingUp, metric: '👥 90%', description: 'reduction in manual content ops headcount' },
    { icon: TrendingUp, metric: '🌍 Faster', description: 'multi-market & multi-language scaling' },
    { icon: TrendingUp, metric: '💵 Higher', description: 'net revenue per product listed' }
  ];

  const useCases = [
    {
      useCase: 'Automated operator onboarding',
      value: '80–90% reduction in manual effort'
    },
    {
      useCase: 'Multi-market PDP generation',
      value: 'Global reach with local compliance'
    },
    {
      useCase: 'Real-time seasonal updates',
      value: 'Always accurate content'
    },
    {
      useCase: 'Multi-OTA syndication',
      value: 'Maximised reach with minimal manual maintenance'
    },
    {
      useCase: 'Legal compliance validation',
      value: 'Lower legal & insurance risk'
    },
    {
      useCase: 'SEO-optimised experience content',
      value: 'Higher-margin organic bookings'
    }
  ];

  const integrations = [
    'Booking systems: Rezdy, Fareharbor, Tourplan, TourCMS, Ventrata, BookingKit, ResPax, Bokun, Livn',
    'Content platforms: WordPress, Contentful, Sanity, Prismic, Drupal',
    'Marketplaces: Viator, GYG, Booking.com, Expedia, Klook, Airbnb, Google Things To Do',
    'CRM: HubSpot, Salesforce, Pipedrive',
    'CDP & DAM platforms',
    'Email platforms: Klaviyo, Braze, Iterable',
    'Data lakes & BI tools'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PageSection background="gradient" padding="lg">
        <SectionHeader
          title={
            <span>
              ✈️ SalesChef for Tourism & Travel
            </span>
          }
          subtitle={
            <span>
              Turn fragmented supplier chaos into a <span className="font-semibold text-primary">revenue-generating content engine</span>.
              <br />
              <span className="text-gradient-brand font-medium">
                One messy operator spreadsheet in. A perfectly packaged, high-converting experience out.
              </span>
            </span>
          }
          size="lg"
        />
      </PageSection>

      {/* Why tourism content is broken */}
      <PageSection>
        <SectionHeader
          title="Why tourism content is broken — and why SalesChef fixes it"
        />
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-lg font-medium mb-2">Tourism runs on content.</p>
            <p className="text-lg text-muted-foreground mb-8">Content sells the experience — before a single dollar is booked.</p>
            <p className="text-lg font-medium text-foreground">But here's the reality:</p>
          </div>
          
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">Most supplier content is an operational nightmare:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {supplierProblems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{problem}</span>
                </div>
              ))}
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
        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-foreground">
            Tourism is one of the hardest verticals in the world to structure and scale. <span className="text-primary">Until now.</span>
          </p>
        </div>
      </PageSection>

      {/* SalesChef: Built to handle the hardest content */}
      <PageSection>
        <SectionHeader
          title="SalesChef: Built to handle the hardest content in travel"
        />
        <div className="space-y-8">
          <p className="text-lg text-center text-muted-foreground">
            SalesChef was designed specifically for industries where data chaos meets high customer expectation.
          </p>
          
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">In tourism, that's EVERYDAY REALITY:</h3>
            <div className="space-y-3">
              {[
                '1 operator sends a Word doc.',
                'Another sends PDFs of menus and itineraries.',
                'Another sends a URL to an outdated webpage.',
                'Another sends a Google Sheet in Spanish with no image files.',
                'Another sends an XML dump from an ancient booking system.'
              ].map((reality, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold">👉</span>
                  <span className="text-foreground">{reality}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-foreground font-medium">Your team is left trying to stitch it together — by hand.</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg font-semibold text-primary">
              SalesChef automates and governs this entire process.
            </p>
          </div>
        </div>
      </PageSection>

      {/* How SalesChef Works */}
      <PageSection background="muted">
        <SectionHeader
          title="How SalesChef works for Tourism & Travel"
        />
        
        <div className="space-y-12">
          {/* Step 1: Ingest */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-semibold">Ingest & normalise every supplier source</h3>
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
              <p className="font-medium text-foreground">No manual mapping. No "data cleansing projects". No weeks of human effort.</p>
            </div>
          </div>

          {/* Step 2: Clean */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-semibold">Clean & structure with tourism-specific logic</h3>
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
            <div className="mt-6 p-4 bg-accent/10 rounded-lg">
              <p className="font-medium text-foreground">Result: OTA-ready, compliant, high-converting product content.</p>
            </div>
          </div>

          {/* Step 3: Enrich */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-xl font-semibold">Enrich with dynamic intelligence</h3>
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
              <h3 className="text-xl font-semibold">Generate & deploy across channels</h3>
            </div>
            <p className="text-muted-foreground mb-6">SalesChef outputs optimised content to:</p>
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
          title="Business outcomes for marketplaces, aggregators & OTAs"
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
          title="Why leading tourism businesses are moving to SalesChef"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Designed for the brutal reality of travel & tourism data',
            'Works with the full stack of legacy and modern travel platforms',
            'Eliminates 90% of manual onboarding effort',
            'Speeds global expansion (multilingual, multi-market)',
            'Improves compliance & legal governance',
            'Unlocks true OTA scalability — no longer limited by content team capacity',
            'Agentic architecture continuously learns and improves over time',
            'Future-proof — feeds AI agents, voice search, structured data, next-gen search surfaces'
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
                <th className="text-left p-6 font-semibold">Value Delivered</th>
              </tr>
            </thead>
            <tbody>
              {useCases.map((useCase, index) => (
                <tr key={index} className="border-b border-border/30 last:border-0">
                  <td className="p-6 font-medium">{useCase.useCase}</td>
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
          <div className="text-center mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
            <p className="text-lg font-semibold text-foreground">
              No rip-and-replace. SalesChef is a stateless agentic layer — it connects to your world.
            </p>
          </div>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to transform your <span className="text-primary">marketplace content engine</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Custom-tailored for your OTA, marketplace, DMO or aggregator.
          </p>
          <Link to="/pricing">
            <Button size="lg" className="text-lg px-8 py-6">
              Book a Demo now
            </Button>
          </Link>
        </div>
      </PageSection>

      <Footer />
    </div>
  );
};

export default TravelTourism;
