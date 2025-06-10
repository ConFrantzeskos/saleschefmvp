
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

interface IndustryConsequencesSectionProps {
  title: string;
  consequences: string[];
}

const IndustryConsequencesSection = ({ title, consequences }: IndustryConsequencesSectionProps) => {
  // Ensure the title has the flying dollar emoji if it doesn't already
  const displayTitle = title.startsWith('💸') ? title : `💸 ${title}`;

  return (
    <PageSection background="muted" padding="sm">
      <SectionHeader title={displayTitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {consequences.map((consequence, index) => (
          <div key={index} className="card-content group hover:shadow-medium transition-all duration-300 py-4">
            <p className="text-sm text-foreground font-medium leading-relaxed">{consequence}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default IndustryConsequencesSection;
