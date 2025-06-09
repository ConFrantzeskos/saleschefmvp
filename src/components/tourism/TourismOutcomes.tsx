
import React from 'react';
import { TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

const TourismOutcomes = () => {
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

  const whyChooseReasons = [
    'Designed for the brutal reality of travel & tourism data',
    'Works with the full stack of legacy and modern travel platforms',
    'Eliminates 90% of manual onboarding effort',
    'Speeds global expansion (multilingual, multi-market)',
    'Improves compliance & legal governance',
    'Unlocks true OTA scalability — no longer limited by content team capacity',
    'Agentic architecture continuously learns and improves over time',
    'Future-proof — feeds AI agents, voice search, structured data, next-gen search surfaces'
  ];

  return (
    <>
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
          {whyChooseReasons.map((reason, index) => (
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
    </>
  );
};

export default TourismOutcomes;
