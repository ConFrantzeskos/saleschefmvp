
import React from 'react';
import PricingHeader from '@/components/PricingHeader';
import PricingContent from '@/components/PricingContent';
import PricingFAQ from '@/components/PricingFAQ';
import EmailCTA from '@/components/EmailCTA';
import Footer from '@/components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <PricingHeader />
      <PricingContent />
      <PricingFAQ />
      <EmailCTA
        headline="Ready to transform your content operations?"
        subtitle="Start your journey with SalesChef today. Custom pricing for your business needs."
        variant="gradient"
        size="lg"
      />
      <Footer />
    </div>
  );
};

export default Pricing;
