
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';

const IndustryCompliance = () => {
  const complianceFeatures = [
    { icon: '📊', title: 'Audit trails', desc: 'Complete content lineage tracking' },
    { icon: '✅', title: 'Approval workflows', desc: 'Custom review and sign-off processes' },
    { icon: '🏷️', title: 'Regulatory tagging', desc: 'Automatic compliance validation' },
    { icon: '⚙️', title: 'Custom rule engines', desc: 'Industry-specific business rules' },
    { icon: '🌍', title: 'Multi-regional compliance', desc: 'Configurable regulatory requirements' },
    { icon: '🔍', title: 'Full traceability', desc: 'From input to published content' }
  ];

  return (
    <PageSection>
      <SectionHeader
        title="Industry-Specific Compliance & Governance"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {complianceFeatures.map((item, index) => (
          <div key={index} className="bg-muted/20 rounded-xl p-6 border border-border/50">
            <div className="text-2xl mb-3">{item.icon}</div>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </PageSection>
  );
};

export default IndustryCompliance;
