
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

interface IndustryChallengeProps {
  industryName: string;
}

const IndustryChallenge = ({ industryName }: IndustryChallengeProps) => {
  const challenges = [
    { icon: '📊', title: 'Fragmented data sources', desc: 'Multiple systems, formats, and vendors' },
    { icon: '🔄', title: 'Inconsistent formats', desc: 'Manual effort to standardize content' },
    { icon: '⚖️', title: 'Regulatory pressure', desc: 'Compliance requirements slow everything down' },
    { icon: '🎯', title: 'Demand for rich content', desc: 'Customers expect detailed, differentiated information' },
    { icon: '⚡', title: 'Shorter time-to-market', desc: 'Competition moves faster than ever' },
    { icon: '📱', title: 'Multi-channel expectations', desc: 'Web, mobile, marketplaces, partners, AI agents' }
  ];

  return (
    <PageSection>
      <SectionHeader
        title="The Challenge"
        subtitle={`${industryName} organisations are overwhelmed by content complexity`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {challenges.map((item, index) => (
          <div key={index} className="bg-muted/20 rounded-xl p-6 border border-border/50">
            <div className="text-2xl mb-3">{item.icon}</div>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-lg font-medium text-foreground">
          SalesChef transforms this chaos into structured, persuasive, high-performance content — <span className="text-primary">automatically</span>.
        </p>
      </div>
    </PageSection>
  );
};

export default IndustryChallenge;
