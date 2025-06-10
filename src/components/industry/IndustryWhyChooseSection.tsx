
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
          <div key={index} className="bg-background rounded-xl p-6 shadow-soft border border-border/50">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
              <span className="font-medium">{reason}</span>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default IndustryWhyChooseSection;
