
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
    <PageSection padding="sm">
      <SectionHeader title={title} />
      <div className="space-y-6 mt-8">
        {description && (
          <div className="text-center">
            <p className="text-body-large text-muted-foreground max-w-4xl mx-auto">
              {description}
            </p>
          </div>
        )}
        
        <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 shadow-soft">
          <div className="space-y-3">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-3">
                <X className="w-4 h-4 text-destructive mt-1 flex-shrink-0" />
                <span className="text-sm text-foreground leading-relaxed">{problem}</span>
              </div>
            ))}
          </div>
        </div>
        
        {conclusionText && (
          <div className="text-center">
            <p className="text-body font-semibold text-primary max-w-3xl mx-auto">
              {conclusionText}
            </p>
          </div>
        )}
      </div>
    </PageSection>
  );
};

export default IndustryProblemsSection;
