
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import { CheckCircle } from 'lucide-react';

interface IndustrySolutionStepsProps {
  title: string;
  ingestSources: string[];
  cleaningFeatures: string[];
  enrichmentFeatures: string[];
  outputChannels: string[];
}

const IndustrySolutionSteps = ({ 
  title, 
  ingestSources, 
  cleaningFeatures, 
  enrichmentFeatures, 
  outputChannels 
}: IndustrySolutionStepsProps) => {
  return (
    <PageSection background="muted">
      <SectionHeader title={title} />
      
      <div className="space-y-12">
        {/* Step 1: Ingest */}
        <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
            <h3 className="text-xl font-semibold">Ingest & unify fragmented investor data</h3>
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
            <p className="text-sm">👉 Unifies internal & external data flows → no more scattered sources</p>
            <p className="text-sm">👉 Normalises portfolio data → even across mixed listed/unlisted assets</p>
            <p className="text-sm">👉 Auto-tags and version-controls sensitive content</p>
          </div>
        </div>

        {/* Step 2: Clean */}
        <div className="bg-background rounded-xl p-8 shadow-soft border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
            <h3 className="text-xl font-semibold">Clean & structure with investor comms intelligence</h3>
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
            <h3 className="text-xl font-semibold">Generate & deploy across investor communication channels</h3>
          </div>
          <p className="text-muted-foreground mb-6">SalesChef outputs trusted, consistent investor content to:</p>
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
  );
};

export default IndustrySolutionSteps;
