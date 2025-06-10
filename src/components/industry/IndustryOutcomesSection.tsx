
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
    <PageSection padding="sm">
      <SectionHeader title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {outcomes.map((outcome, index) => (
          <div key={index} className="card-content text-center group hover:shadow-medium hover:-translate-y-1 transition-all duration-300 py-4">
            <div className="w-10 h-10 bg-primary/10 text-primary mx-auto mb-3 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-lg font-bold text-primary mb-2">{outcome.metric}</div>
            <p className="text-xs text-muted-foreground leading-relaxed">{outcome.description}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default IndustryOutcomesSection;
