
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
    <PageSection padding="sm">
      <SectionHeader title={title} />
      <div className="space-y-6 mt-8">
        {description && (
          <p className="text-body text-center text-muted-foreground max-w-4xl mx-auto">
            {description}
          </p>
        )}
        
        <div className="text-center">
          <p className="text-body font-semibold text-primary mb-6">
            Investor comms is a perfect fit:
          </p>
        </div>
        
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 shadow-soft">
          <h3 className="text-lg font-semibold mb-6 text-center text-foreground">Your reality:</h3>
          <div className="space-y-3">
            {realityPoints.map((reality, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">👉</span>
                <span className="text-sm text-foreground leading-relaxed">{reality}</span>
              </div>
            ))}
          </div>
          {conclusionText && (
            <div className="mt-6 p-4 bg-muted/50 rounded-xl border border-border/50">
              <p className="text-sm text-foreground font-medium leading-relaxed">{conclusionText}</p>
            </div>
          )}
        </div>
      </div>
    </PageSection>
  );
};

export default IndustryRealitySection;
