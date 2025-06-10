
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import { CheckCircle } from 'lucide-react';

interface IndustryIntegrationsSectionProps {
  title: string;
  integrations: string[];
}

const IndustryIntegrationsSection = ({ title, integrations }: IndustryIntegrationsSectionProps) => {
  return (
    <PageSection padding="sm">
      <SectionHeader title={title} />
      <div className="space-y-4 mt-8">
        <p className="text-center text-body text-muted-foreground">
          SalesChef works seamlessly with:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {integrations.map((integration, index) => (
            <div key={index} className="flex items-start gap-2 bg-background rounded-lg p-3 border border-border/50 hover:shadow-soft transition-shadow duration-300">
              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-xs text-foreground leading-relaxed">{integration}</span>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default IndustryIntegrationsSection;
