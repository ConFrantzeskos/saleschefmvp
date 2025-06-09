
import React from 'react';
import SectionHeader from '@/components/layout/SectionHeader';
import PageSection from '@/components/layout/PageSection';

const PricingHeader = () => {
  return (
    <PageSection background="gradient" padding="lg">
      <SectionHeader
        title={
          <span>
            Pricing tailored to your business — because{' '}
            <span className="text-gradient-brand">no two are alike</span>
          </span>
        }
        subtitle={
          <span>
            SalesChef isn't a generic SaaS platform. It's an{' '}
            <span className="font-semibold text-primary">agentic AI content system</span>{' '}
            designed to transform how you create, optimise, and deploy product, service, and sales content — at scale.
          </span>
        }
        size="lg"
      />
      
      <div className="mt-12 sm:mt-16">
        <div className="text-center mb-8">
          <p className="text-lg sm:text-xl text-foreground font-medium mb-2">
            Whether you're managing:
          </p>
          <div className="w-16 h-1 bg-gradient-brand mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {[
            { text: '🛍️ Retail', gradient: 'from-primary/20 to-primary/5' },
            { text: '✈️ Travel & tourism assets', gradient: 'from-accent/20 to-accent/5' },
            { text: '🎬 Media & entertainment assets', gradient: 'from-secondary/20 to-secondary/5' },
            { text: '💰 Financial products', gradient: 'from-primary/20 to-primary/5' },
            { text: '🏭 Industrial & manufacturing catalogues', gradient: 'from-accent/20 to-accent/5' },
            { text: '🏥 Healthcare & medical devices', gradient: 'from-secondary/20 to-secondary/5' },
            { text: '🏠 Real estate listings', gradient: 'from-primary/20 to-primary/5' },
            { text: '🚗 Automotive', gradient: 'from-accent/20 to-accent/5' }
          ].map((item, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${item.gradient} rounded-xl p-4 sm:p-5 shadow-soft border border-border/50 hover:shadow-medium hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm sm:text-base font-medium text-foreground leading-relaxed">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-lg sm:text-xl text-foreground font-medium">
            …SalesChef adapts to your{' '}
            <span className="text-primary font-semibold">stack</span>, your{' '}
            <span className="text-accent font-semibold">channels</span>, your{' '}
            <span className="text-secondary font-semibold">content needs</span>, and your{' '}
            <span className="text-gradient-brand font-semibold">scale</span>.
          </p>
        </div>
      </div>
    </PageSection>
  );
};

export default PricingHeader;
