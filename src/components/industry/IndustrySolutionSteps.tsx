
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import IngestStep from './solution-steps/IngestStep';
import CleanStep from './solution-steps/CleanStep';
import EnrichStep from './solution-steps/EnrichStep';
import DeployStep from './solution-steps/DeployStep';

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
        <IngestStep ingestSources={ingestSources} />
        <CleanStep cleaningFeatures={cleaningFeatures} />
        <EnrichStep enrichmentFeatures={enrichmentFeatures} />
        <DeployStep outputChannels={outputChannels} />
      </div>
    </PageSection>
  );
};

export default IndustrySolutionSteps;
