
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
    <PageSection background="muted">
      <SectionHeader title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((reason, index) => (
          <div key={index} className="card-content group hover:shadow-medium hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-body font-medium text-foreground leading-relaxed">{reason}</span>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default IndustryWhyChooseSection;
