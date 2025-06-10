
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
    <PageSection background="muted">
      <SectionHeader title={displayTitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {consequences.map((consequence, index) => (
          <div key={index} className="card-content group hover:shadow-medium transition-all duration-300">
            <p className="text-body text-foreground font-medium leading-relaxed">{consequence}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default IndustryConsequencesSection;
