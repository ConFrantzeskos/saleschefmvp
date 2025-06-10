
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
    <PageSection background="muted">
      <SectionHeader title={title} />
      <div className="space-y-6">
        <p className="text-center text-muted-foreground">SalesChef works seamlessly with:</p>
        <div className="space-y-3">
          {integrations.map((integration, index) => (
            <div key={index} className="flex items-start gap-2 bg-background rounded-lg p-4 border border-border/50">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm">{integration}</span>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
};

export default IndustryIntegrationsSection;
