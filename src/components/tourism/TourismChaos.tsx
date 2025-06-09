
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

const TourismChaos = () => {
  const chaosConsequences = [
    'Low conversion rates on marketplaces',
    'Expensive and slow operator onboarding',
    'Poor quality listings → SEM waste → declining ROI',
    'Manual maintenance overhead',
    'Stalled marketplace growth',
    'Legal risk (compliance gaps)',
    'Limited ability to scale globally (multi-language, multi-market)',
    'Rising customer service costs due to inaccurate or inconsistent listings'
  ];

  return (
    <PageSection background="muted">
      <SectionHeader
        title="💸 The Cost of Chaos"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chaosConsequences.map((consequence, index) => (
          <div key={index} className="bg-background rounded-xl p-6 border border-border/50 shadow-soft">
            <p className="text-foreground font-medium">{consequence}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-lg font-semibold text-foreground">
          Tourism is one of the hardest verticals in the world to structure and scale. <span className="text-primary">Until now.</span>
        </p>
      </div>
    </PageSection>
  );
};

export default TourismChaos;
