
import React, { memo } from 'react';
import EmailCTA from '@/components/EmailCTA';

const CTASection = memo(() => {
  return (
    <EmailCTA
      headline="Transform your content"
      subtitle="See how SalesChef can revolutionize your content pipeline with a personalized demo"
      placeholder="Enter your work email"
      buttonText="Book a Demo"
      variant="card"
      size="md"
    />
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;
