
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import { CheckCircle } from 'lucide-react';

interface IndustryWhyChooseSectionProps {
  title: string;
  reasons: string[];
}

const IndustryWhyChooseSection = ({ title, reasons }: IndustryWhyChooseSectionProps) => {
  return (
    <PageSection background="muted" padding="sm">
      <SectionHeader title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {reasons.map((reason, index) => (
          <div key={index} className="card-content group hover:shadow-medium hover:-translate-y-1 transition-all duration-300 py-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium text-foreground leading-relaxed">{reason}</span>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default IndustryWhyChooseSection;
