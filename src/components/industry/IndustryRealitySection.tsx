
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

interface IndustryRealitySectionProps {
  title: string;
  description?: string;
  realityPoints: string[];
  conclusionText?: string;
}

const IndustryRealitySection = ({ 
  title, 
  description, 
  realityPoints, 
  conclusionText 
}: IndustryRealitySectionProps) => {
  return (
    <PageSection>
      <SectionHeader title={title} />
      <div className="space-elements-lg">
        {description && (
          <p className="text-body-large text-center text-muted-foreground max-w-4xl mx-auto">
            {description}
          </p>
        )}
        
        <div className="text-center">
          <p className="text-body-large font-semibold text-primary mb-8">
            Investor comms is a perfect fit:
          </p>
        </div>
        
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 shadow-soft">
          <h3 className="text-subsection-title font-semibold mb-8 text-center text-foreground">Your reality:</h3>
          <div className="space-elements-md">
            {realityPoints.map((reality, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="text-primary font-bold text-xl">👉</span>
                <span className="text-body text-foreground leading-relaxed">{reality}</span>
              </div>
            ))}
          </div>
          {conclusionText && (
            <div className="mt-8 p-6 bg-muted/50 rounded-xl border border-border/50">
              <p className="text-body text-foreground font-medium leading-relaxed">{conclusionText}</p>
            </div>
          )}
        </div>
      </div>
    </PageSection>
  );
};

export default IndustryRealitySection;
