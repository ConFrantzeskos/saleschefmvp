
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

interface IndustryFeaturesProps {
  industryName: string;
}

const IndustryFeatures = ({ industryName }: IndustryFeaturesProps) => {
  const features = [
    { icon: '🤖', title: 'AI-native automation', desc: 'Reduces manual effort significantly' },
    { icon: '📈', title: 'Continuous learning', desc: 'Improves content performance over time' },
    { icon: '📋', title: 'Full audit trail', desc: 'Supports compliance requirements' },
    { icon: '🎯', title: 'Industry-specific tuning', desc: 'Brand tone, legal requirements, market nuance' },
    { icon: '📱', title: 'Multi-channel output', desc: 'Web, mobile, social, print, in-app' },
    { icon: '🌍', title: 'Multi-market support', desc: 'Language, region, format variants' },
    { icon: '🔗', title: 'Full API support', desc: 'Connects to your existing stack' },
    { icon: '☁️', title: 'No storage lock-in', desc: 'Stateless, not another system of record' },
    { icon: '🔄', title: 'Continuous optimisation', desc: 'Enriches based on market feedback' }
  ];

  return (
    <PageSection>
      <SectionHeader
        title={`Key SalesChef Features for ${industryName}`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-muted/20 rounded-xl p-6 border border-border/50 hover:shadow-medium transition-shadow">
            <div className="text-2xl mb-3">{feature.icon}</div>
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.desc}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default IndustryFeatures;
