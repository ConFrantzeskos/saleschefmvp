
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

interface IndustryUseCasesProps {
  industry: {
    name: string;
    useCases: Array<{
      useCase: string;
      agents: string;
      value: string;
    }>;
  };
}

const IndustryUseCases = ({ industry }: IndustryUseCasesProps) => {
  return (
    <PageSection background="muted">
      <SectionHeader
        title={`Common Use Cases in ${industry.name}`}
      />
      <div className="overflow-x-auto">
        <table className="w-full bg-background rounded-xl shadow-soft border border-border/50">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-6 font-semibold">Use Case</th>
              <th className="text-left p-6 font-semibold">SalesChef Agents Involved</th>
              <th className="text-left p-6 font-semibold">Value Delivered</th>
            </tr>
          </thead>
          <tbody>
            {industry.useCases.map((useCase, index) => (
              <tr key={index} className="border-b border-border/30 last:border-0">
                <td className="p-6 font-medium">{useCase.useCase}</td>
                <td className="p-6 text-sm text-muted-foreground">{useCase.agents}</td>
                <td className="p-6 text-sm">{useCase.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageSection>
  );
};

export default IndustryUseCases;
