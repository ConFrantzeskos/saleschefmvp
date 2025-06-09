import React from 'react';
import SectionHeader from '@/components/layout/SectionHeader';
import PageSection from '@/components/layout/PageSection';

const PricingHeader = () => {
  return (
    <PageSection background="gradient" padding="lg">
      <SectionHeader
        title="Pricing tailored to your business — because no two are alike"
        subtitle="SalesChef isn't a generic SaaS platform. It's an agentic AI content system designed to transform how you create, optimise, and deploy product, service, and sales content — at scale."
        size="lg"
      />
      
      <div className="mt-8 sm:mt-12">
        <p className="text-base sm:text-lg text-muted-foreground mb-6">
          Whether you're managing:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {[
            'Retail SKUs',
            'Travel & tourism experiences',
            'Media & entertainment assets',
            'Financial product disclosures',
            'Industrial & manufacturing catalogues',
            'Healthcare & medical device content',
            'Real estate listings',
            'Automotive inventories'
          ].map((item, index) => (
            <div key={index} className="bg-card rounded-lg p-3 sm:p-4 shadow-soft border border-border">
              <span className="text-sm sm:text-base font-medium text-foreground">• {item}</span>
            </div>
          ))}
        </div>
        
        <p className="text-base sm:text-lg text-muted-foreground mt-8 text-center">
          …SalesChef adapts to your stack, your channels, your content needs, and your scale.
        </p>
      </div>
    </PageSection>
  );
};

export default PricingHeader;
