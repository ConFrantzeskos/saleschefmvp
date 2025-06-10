
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

const TourismChaos = () => {
  const chaosConsequences = [
    '📉 Low conversion rates on marketplaces',
    '⏱️ Expensive and slow operator onboarding',
    '💰 Poor quality listings → SEM waste → declining ROI',
    '🔧 Manual maintenance overhead',
    '📈 Stalled marketplace growth',
    '⚖️ Legal risk (compliance gaps)',
    '🌍 Limited ability to scale globally (multi-language, multi-market)',
    '📞 Rising customer service costs due to inaccurate or inconsistent listings'
  ];

  return (
    <section className="content-padding section-spacing-md bg-muted/20">
      <div className="content-width space-elements-md">
        <SectionHeader
          title={
            <span>
              💸 The Cost of Chaos
            </span>
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chaosConsequences.map((consequence, index) => (
            <div key={index} className="card-content">
              <p className="text-foreground font-medium leading-relaxed text-body">{consequence}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-body-large font-semibold text-foreground">
            Tourism is one of the hardest verticals in the world to structure and scale. <span className="text-primary">Until now.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TourismChaos;
