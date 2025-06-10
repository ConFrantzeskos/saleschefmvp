
import React from 'react';
import { CheckCircle } from 'lucide-react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

const TourismSolution = () => {
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

  return (
    <>
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

      <PageSection background="muted">
        <div className="space-y-16">
          <SectionHeader
            title="How SalesChef works for Tourism & Travel"
          />
          
          {/* Step 1: Ingest */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
              <h3 className="text-2xl font-semibold">Ingest & normalise every supplier source</h3>
            </div>
            <p className="text-muted-foreground mb-8 text-lg">SalesChef's Drop Agent ingests from:</p>
            <div className="space-y-4 mb-8">
              {ingestSources.map((source, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">{source}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-primary/10 rounded-lg">
              <p className="font-medium text-foreground text-lg">No manual mapping. No "data cleansing projects". No weeks of human effort.</p>
            </div>
          </div>

          {/* Step 2: Clean */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
              <h3 className="text-2xl font-semibold">Clean & structure with tourism-specific logic</h3>
            </div>
            <p className="text-muted-foreground mb-8 text-lg">SalesChef automates:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {cleaningFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-accent/10 rounded-lg">
              <p className="font-medium text-foreground text-lg">Result: OTA-ready, compliant, high-converting product content.</p>
            </div>
          </div>

          {/* Step 3: Enrich */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
              <h3 className="text-2xl font-semibold">Enrich with dynamic intelligence</h3>
            </div>
            <p className="text-muted-foreground mb-8 text-lg">SalesChef's Discover Agents add:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {enrichmentFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 4: Generate */}
          <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
              <h3 className="text-2xl font-semibold">Generate & deploy across channels</h3>
            </div>
            <p className="text-muted-foreground mb-8 text-lg">SalesChef outputs optimised content to:</p>
            <div className="space-y-4">
              {outputChannels.map((channel, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">{channel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
};

export default TourismSolution;
