
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

interface IndustryBenefitsProps {
  industryName: string;
}

const IndustryBenefits = ({ industryName }: IndustryBenefitsProps) => {
  const benefits = [
    { title: 'AI-first architecture', desc: 'Built for modern, multi-channel content demands' },
    { title: 'Modular, agentic approach', desc: 'Adapts to your specific business needs' },
    { title: 'No rip-and-replace', desc: 'SalesChef works alongside your existing stack' },
    { title: 'Measurable ROI', desc: 'Proven uplift in conversion, efficiency, and content quality' },
    { title: 'Trusted by leaders', desc: 'Forward-thinking teams across industries rely on SalesChef' }
  ];

  return (
    <PageSection background="muted">
      <SectionHeader
        title={`Why ${industryName} leaders choose SalesChef`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((item, index) => (
          <div key={index} className="bg-background rounded-xl p-6 shadow-soft border border-border/50">
            <h3 className="font-semibold mb-2 text-primary">{item.title}</h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default IndustryBenefits;
