
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

const TourismHero = () => {
  return (
    <PageSection background="gradient" padding="lg">
      <SectionHeader
        title={
          <span>
            ✈️ SalesChef for Tourism & Travel
          </span>
        }
        subtitle={
          <span>
            Turn fragmented supplier chaos into a <span className="font-semibold text-primary">revenue-generating content engine</span>.
            <br />
            <span className="text-gradient-brand font-medium">
              One messy operator spreadsheet in. A perfectly packaged, high-converting experience out.
            </span>
          </span>
        }
        size="lg"
      />
    </PageSection>
  );
};

export default TourismHero;
