
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

interface IndustryConsequencesSectionProps {
  title: string;
  consequences: string[];
}

const IndustryConsequencesSection = ({ title, consequences }: IndustryConsequencesSectionProps) => {
  return (
    <PageSection background="muted">
      <SectionHeader title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {consequences.map((consequence, index) => (
          <div key={index} className="card-content group hover:shadow-medium transition-all duration-300">
            <div className="text-destructive text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">💸</div>
            <p className="text-body text-foreground font-medium leading-relaxed">{consequence}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default IndustryConsequencesSection;
