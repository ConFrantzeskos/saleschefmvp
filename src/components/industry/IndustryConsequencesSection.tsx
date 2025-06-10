
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
          <div key={index} className="bg-background rounded-xl p-6 border border-border/50 shadow-soft">
            <div className="text-destructive text-2xl mb-3">💸</div>
            <p className="text-foreground font-medium">{consequence}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default IndustryConsequencesSection;
