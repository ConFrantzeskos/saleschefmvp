
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

interface IndustryHeroProps {
  industry: {
    name: string;
    emoji: string;
  };
}

const IndustryHero = ({ industry }: IndustryHeroProps) => {
  return (
    <PageSection background="gradient" padding="lg">
      <SectionHeader
        title={
          <span>
            {industry.emoji} {industry.name} + SalesChef
          </span>
        }
        subtitle={
          <span>
            Transform your <span className="font-semibold text-primary">{industry.name.toLowerCase()}</span> content — faster, smarter, at scale.
            <br />
            <span className="text-gradient-brand font-medium">
              One messy dataset in. A feast of sales-ready content out.
            </span>
          </span>
        }
        size="lg"
      />
    </PageSection>
  );
};

export default IndustryHero;
