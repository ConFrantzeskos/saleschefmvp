
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
      <div className="space-y-8">
        {description && (
          <p className="text-lg text-center text-muted-foreground">
            {description}
          </p>
        )}
        
        <div className="text-center">
          <p className="text-lg font-semibold text-primary mb-4">
            Investor comms is a perfect fit:
          </p>
        </div>
        
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 text-center">Your reality:</h3>
          <div className="space-y-3">
            {realityPoints.map((reality, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-primary font-bold">👉</span>
                <span className="text-foreground">{reality}</span>
              </div>
            ))}
          </div>
          {conclusionText && (
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-foreground font-medium">{conclusionText}</p>
            </div>
          )}
        </div>
      </div>
    </PageSection>
  );
};

export default IndustryRealitySection;
