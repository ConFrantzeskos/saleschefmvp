
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import { TrendingUp } from 'lucide-react';

interface IndustryOutcomesSectionProps {
  title: string;
  outcomes: Array<{
    metric: string;
    description: string;
  }>;
}

const IndustryOutcomesSection = ({ title, outcomes }: IndustryOutcomesSectionProps) => {
  return (
    <PageSection>
      <SectionHeader title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {outcomes.map((outcome, index) => (
          <div key={index} className="bg-muted/20 rounded-xl p-6 border border-border/50 text-center hover:shadow-medium transition-shadow">
            <TrendingUp className="w-10 h-10 mx-auto text-primary mb-4" />
            <div className="text-2xl font-bold text-primary mb-2">{outcome.metric}</div>
            <p className="text-sm text-muted-foreground">{outcome.description}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default IndustryOutcomesSection;
