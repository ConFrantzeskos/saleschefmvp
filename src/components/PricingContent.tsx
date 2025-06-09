
import React from 'react';
import { PageSection } from '@/components/layout/PageSection';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, TrendingUp, TrendingDown, Zap, Target, DollarSign } from 'lucide-react';

const PricingContent = () => {
  const pricingFactors = [
    'SKU / item volume',
    'Content types and channels — PDPs, marketplaces, video, print, training, social media, AR/VR, and more',
    'Markets, languages, and localisations',
    'Level of automation and agent depth',
    'Existing data maturity — structured vs unstructured',
    'Migration and onboarding complexity',
    'Advanced or experimental agents (AI-driven asset discovery, multimodal content creation, etc.)'
  ];

  const achievements = [
    {
      icon: TrendingUp,
      metric: '+25–75%',
      description: 'conversion uplift on sales content',
      color: 'text-green-600'
    },
    {
      icon: TrendingDown,
      metric: '–40–60%',
      description: 'SEM & SEO waste',
      color: 'text-blue-600'
    },
    {
      icon: Zap,
      metric: '4–8×',
      description: 'faster content production velocity',
      color: 'text-purple-600'
    },
    {
      icon: Target,
      metric: 'Higher',
      description: 'content accuracy, compliance, and brand alignment',
      color: 'text-orange-600'
    },
    {
      icon: DollarSign,
      metric: '3 months',
      description: 'Payback typically within first 3 months of deployment',
      color: 'text-green-600'
    }
  ];

  return (
    <PageSection padding="lg">
      <div className="space-y-12 sm:space-y-16">
        {/* Why no pricing table */}
        <div className="text-center">
          <div className="w-16 h-0.5 bg-border mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
            Why no pricing table?
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              Every client operates differently:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {[
                'Some ingest 10,000 SKUs a month; others, 250,000+.',
                'Some focus on PDPs; others need SEO, training, social, marketplaces, print, video, even voice.',
                'Some require real-time market enrichment; others focus on compliance-ready outputs.',
                'Some migrate from legacy PIMs; others start from raw, unstructured data.'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-foreground mt-8 font-medium">
              That's why we scope pricing collaboratively — ensuring you only pay for what drives value for your business.
            </p>
          </div>
        </div>

        {/* How pricing is tailored */}
        <div>
          <div className="w-16 h-0.5 bg-border mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-8">
            How SalesChef pricing is tailored
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            We consider factors such as:
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pricingFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted/20 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What clients achieve */}
        <div>
          <div className="w-16 h-0.5 bg-border mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-8">
            What our clients achieve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <achievement.icon className={`w-8 h-8 mx-auto mb-4 ${achievement.color}`} />
                  <div className={`text-2xl sm:text-3xl font-bold mb-2 ${achievement.color}`}>
                    {achievement.metric}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default PricingContent;
