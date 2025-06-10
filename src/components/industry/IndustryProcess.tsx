
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

interface IndustryProcessProps {
  industry: {
    name: string;
    dataSources: string[];
    cleaningExamples: string[];
    enrichmentExamples: string[];
    outputExamples: string[];
  };
}

const IndustryProcess = ({ industry }: IndustryProcessProps) => {
  return (
    <PageSection background="muted">
      <SectionHeader
        title={`How SalesChef works for ${industry.name}`}
      />
      
      <div className="space-y-12">
        {/* Step 1: Ingest */}
        <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
            <h3 className="text-xl font-semibold">Ingest & Understand Your Data</h3>
          </div>
          <p className="text-muted-foreground mb-6">SalesChef's Drop Agent can ingest:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {['CSVs, PDFs, JSON, XML', 'ERP, CRM, legacy PIMs', 'Unstructured documents', 'API feeds', 'Public web data (scraped)', 'Supplier & partner systems'].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                {item}
              </div>
            ))}
          </div>
          <div className="bg-primary/10 rounded-lg p-4">
            <p className="font-medium mb-2">For {industry.name}, this means:</p>
            <div className="space-y-1">
              {industry.dataSources.map((source, index) => (
                <p key={index} className="text-sm">👉 {source}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Step 2: Clean */}
        <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
            <h3 className="text-xl font-semibold">Clean & Structure Content</h3>
          </div>
          <p className="text-muted-foreground mb-6">SalesChef auto-cleans, deduplicates, normalises, validates and enriches:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {['Units, currencies, dates', 'Legal compliance fields', 'SEO metadata', 'Accessibility', 'Multi-language', 'Brand voice alignment'].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                {item}
              </div>
            ))}
          </div>
          <div className="bg-accent/10 rounded-lg p-4">
            <p className="font-medium mb-2">For {industry.name}:</p>
            <div className="space-y-1">
              {industry.cleaningExamples.map((example, index) => (
                <p key={index} className="text-sm">👉 {example}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Step 3: Enrich */}
        <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">3</div>
            <h3 className="text-xl font-semibold">Enrich & Optimise</h3>
          </div>
          <p className="text-muted-foreground mb-6">SalesChef's agents enrich with:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {['Market insights', 'Competitor benchmarks', 'Social sentiment', 'Reviews', 'Dynamic FAQs', 'Training content', 'SEO metadata', 'Compliance disclaimers', 'Cross-channel formatting'].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                {item}
              </div>
            ))}
          </div>
          <div className="bg-secondary/10 rounded-lg p-4">
            <p className="font-medium mb-2">For {industry.name}:</p>
            <div className="space-y-1">
              {industry.enrichmentExamples.map((example, index) => (
                <p key={index} className="text-sm">👉 {example}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Step 4: Generate */}
        <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
            <h3 className="text-xl font-semibold">Generate & Publish</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-4">SalesChef auto-generates:</p>
              <div className="space-y-2">
                {['Web pages & landing pages', 'Marketplace feeds', 'Video & social content', 'Training modules', 'Sales support decks', 'Email content', 'Print-ready outputs'].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-muted-foreground mb-4">And deploys to:</p>
              <div className="space-y-2">
                {['Web CMS & marketplaces', 'CRM & sales platforms', 'Partner portals', 'Internal systems', 'AI assistants', 'Mobile apps'].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-primary/10 rounded-lg p-4 mt-6">
            <p className="font-medium mb-2">For {industry.name}:</p>
            <div className="space-y-1">
              {industry.outputExamples.map((example, index) => (
                <p key={index} className="text-sm">👉 {example}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default IndustryProcess;
