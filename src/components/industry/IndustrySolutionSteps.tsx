
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
      
      <div className="space-elements-xl">
        {/* Step 1: Ingest */}
        <div className="card-content">
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-container-large bg-primary text-white font-bold text-xl">1</div>
            <h3 className="text-subsection-title font-semibold">Ingest & unify fragmented investor data</h3>
          </div>
          <p className="text-body text-muted-foreground mb-6">SalesChef's Drop Agent ingests from:</p>
          <div className="space-elements-sm">
            {ingestSources.map((source, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-body text-foreground leading-relaxed">{source}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
            <p className="font-semibold text-foreground mb-3">Key value:</p>
            <div className="space-elements-xs">
              <p className="text-body">👉 Unifies internal & external data flows → no more scattered sources</p>
              <p className="text-body">👉 Normalises portfolio data → even across mixed listed/unlisted assets</p>
              <p className="text-body">👉 Auto-tags and version-controls sensitive content</p>
            </div>
          </div>
        </div>

        {/* Step 2: Clean */}
        <div className="card-content">
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-container-large bg-accent text-white font-bold text-xl">2</div>
            <h3 className="text-subsection-title font-semibold">Clean & structure with investor comms intelligence</h3>
          </div>
          <p className="text-body text-muted-foreground mb-6">SalesChef automates:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {cleaningFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-body text-foreground leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 3: Enrich */}
        <div className="card-content">
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-container-large bg-secondary text-white font-bold text-xl">3</div>
            <h3 className="text-subsection-title font-semibold">Enrich with market intelligence & dynamic insights</h3>
          </div>
          <p className="text-body text-muted-foreground mb-6">SalesChef's Discover Agents add:</p>
          <div className="space-elements-sm">
            {enrichmentFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-body text-foreground leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 4: Generate */}
        <div className="card-content">
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-container-large bg-primary text-white font-bold text-xl">4</div>
            <h3 className="text-subsection-title font-semibold">Generate & deploy across investor communication channels</h3>
          </div>
          <p className="text-body text-muted-foreground mb-6">SalesChef outputs trusted, consistent investor content to:</p>
          <div className="space-elements-sm">
            {outputChannels.map((channel, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-body text-foreground leading-relaxed">{channel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default IndustrySolutionSteps;
