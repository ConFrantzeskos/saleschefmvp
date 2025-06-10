
import React from 'react';
import EmailCTA from '@/components/EmailCTA';

interface IndustryCTAProps {
  industryName: string;
}

const IndustryCTA = ({ industryName }: IndustryCTAProps) => {
  return (
    <EmailCTA
      headline={`See how SalesChef can transform your ${industryName} content`}
      subtitle="Custom-tailored for your business needs."
      variant="default"
      size="md"
    />
  );
};

export default IndustryCTA;
