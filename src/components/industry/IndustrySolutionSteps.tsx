
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
    <PageSection background="muted" padding="sm">
      <SectionHeader title={title} />
      
      <div className="space-y-8 mt-8">
        {/* Step 1: Ingest */}
        <div className="card-content py-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-primary text-white font-bold text-sm rounded-full flex items-center justify-center">1</div>
            <h3 className="text-lg font-semibold">Ingest & unify fragmented investor data</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">SalesChef's Drop Agent ingests from:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {ingestSources.slice(0, 8).map((source, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-xs text-foreground leading-relaxed">{source}</span>
              </div>
            ))}
          </div>
          {ingestSources.length > 8 && (
            <p className="text-xs text-muted-foreground mt-2">...and {ingestSources.length - 8} more sources</p>
          )}
        </div>

        {/* Step 2: Clean */}
        <div className="card-content py-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-accent text-white font-bold text-sm rounded-full flex items-center justify-center">2</div>
            <h3 className="text-lg font-semibold">Clean & structure with investor comms intelligence</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {cleaningFeatures.slice(0, 6).map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-xs text-foreground leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 3: Enrich */}
        <div className="card-content py-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-secondary text-white font-bold text-sm rounded-full flex items-center justify-center">3</div>
            <h3 className="text-lg font-semibold">Enrich with market intelligence</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {enrichmentFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-xs text-foreground leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 4: Generate */}
        <div className="card-content py-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-primary text-white font-bold text-sm rounded-full flex items-center justify-center">4</div>
            <h3 className="text-lg font-semibold">Generate & deploy across channels</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {outputChannels.slice(0, 8).map((channel, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-xs text-foreground leading-relaxed">{channel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default IndustrySolutionSteps;
