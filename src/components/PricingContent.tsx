
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, TrendingUp, TrendingDown, Zap, Target, DollarSign } from 'lucide-react';

const PricingContent = () => {
  const pricingFactors = [
    'Asset / product volume',
    'Content types and channels — product pages, marketplaces, video, print, training, social media, AR/VR, and more',
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
      color: 'text-green-600',
      bgGradient: 'from-green-50 to-green-100/50'
    },
    {
      icon: TrendingDown,
      metric: '–40–60%',
      description: 'SEM & SEO waste',
      color: 'text-primary',
      bgGradient: 'from-primary/10 to-primary/5'
    },
    {
      icon: Zap,
      metric: '4–8×',
      description: 'faster content production velocity',
      color: 'text-accent',
      bgGradient: 'from-accent/10 to-accent/5'
    },
    {
      icon: Target,
      metric: 'Higher',
      description: 'content accuracy, compliance, and brand alignment',
      color: 'text-secondary',
      bgGradient: 'from-secondary/10 to-secondary/5'
    },
    {
      icon: DollarSign,
      metric: '3 months',
      description: 'Payback typically within first 3 months of deployment',
      color: 'text-green-600',
      bgGradient: 'from-green-50 to-green-100/50'
    }
  ];

  return (
    <PageSection padding="lg">
      <div className="space-y-16 sm:space-y-20">
        {/* Why no pricing table */}
        <div className="text-center">
          <div className="w-16 h-1 bg-gradient-brand mx-auto mb-8 rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-8">
            Why no <span className="text-gradient-brand">pricing table</span>?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 font-medium">
              Every client operates differently:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                'Some ingest 10,000 assets a month; others, 250,000+.',
                'Some focus on product pages; others need SEO, training, social, marketplaces, print, video, even voice.',
                'Some require real-time market enrichment; others focus on compliance-ready outputs.',
                'Some migrate from legacy systems; others start from raw, unstructured data.'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-muted/30 to-transparent rounded-xl border border-border/30 hover:border-primary/20 transition-all duration-300 group">
                  <div className="w-6 h-6 bg-gradient-brand rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-xs font-bold">•</span>
                  </div>
                  <span className="text-muted-foreground text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-primary/10">
              <p className="text-lg sm:text-xl text-foreground font-semibold">
                That's why we scope pricing <span className="text-gradient-brand">collaboratively</span> — ensuring you only pay for what drives value for your business.
              </p>
            </div>
          </div>
        </div>

        {/* How pricing is tailored */}
        <div>
          <div className="w-16 h-1 bg-gradient-brand mx-auto mb-8 rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-8">
            How SalesChef pricing is <span className="text-gradient-brand">tailored</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground text-center mb-10 font-medium">
            We consider factors such as:
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pricingFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-gradient-to-r from-card to-muted/20 rounded-xl shadow-soft border border-border/50 hover:shadow-medium hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-foreground leading-relaxed font-medium">{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What clients achieve */}
        <div>
          <div className="w-16 h-1 bg-gradient-brand mx-auto mb-8 rounded-full"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-12">
            What our clients <span className="text-gradient-brand">achieve</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className={`text-center p-6 bg-gradient-to-br ${achievement.bgGradient} border-border/50 hover:shadow-large hover:border-primary/20 transition-all duration-300 group hover:-translate-y-2`}>
                <CardContent className="p-0">
                  <div className="mb-4">
                    <achievement.icon className={`w-10 h-10 mx-auto ${achievement.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className={`text-2xl sm:text-3xl font-bold mb-3 ${achievement.color} group-hover:scale-105 transition-transform duration-300`}>
                    {achievement.metric}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
