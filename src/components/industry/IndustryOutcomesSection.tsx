
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
          <div key={index} className="card-content text-center group hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
            <div className="icon-container bg-primary/10 text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div className="text-2xl font-bold text-primary mb-3">{outcome.metric}</div>
            <p className="text-body text-muted-foreground leading-relaxed">{outcome.description}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default IndustryOutcomesSection;
