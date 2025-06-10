
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import { X } from 'lucide-react';

interface IndustryProblemsSectionProps {
  title: string;
  description?: string;
  problems: string[];
  conclusionText?: string;
}

const IndustryProblemsSection = ({ 
  title, 
  description, 
  problems, 
  conclusionText 
}: IndustryProblemsSectionProps) => {
  return (
    <PageSection>
      <SectionHeader title={title} />
      <div className="space-y-8">
        {description && (
          <div className="text-center">
            <p className="text-lg font-medium mb-2">{description}</p>
          </div>
        )}
        
        <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground">{problem}</span>
              </div>
            ))}
          </div>
        </div>
        
        {conclusionText && (
          <div className="text-center">
            <p className="text-lg font-semibold text-primary">
              {conclusionText}
            </p>
          </div>
        )}
      </div>
    </PageSection>
  );
};

export default IndustryProblemsSection;
