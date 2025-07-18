
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

const TourismHero = () => {
  return (
    <PageSection background="gradient" padding="lg">
      <div className="content-width space-elements-md">
        <SectionHeader
          title={
            <span className="text-hero">
              ✈️ SalesChef for Tourism & Travel
            </span>
          }
          subtitle={
            <span className="text-body-large">
              Turn fragmented supplier chaos into a <span className="font-semibold text-primary">revenue-generating content engine</span>.
              <br />
              <span className="text-gradient-brand font-medium">
                One messy operator spreadsheet in. A perfectly packaged, high-converting experience out.
              </span>
            </span>
          }
          size="lg"
        />
      </div>
    </PageSection>
  );
};

export default TourismHero;
