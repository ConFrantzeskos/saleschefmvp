
import React from 'react';
import PricingHeader from '@/components/PricingHeader';
import PricingContent from '@/components/PricingContent';
import PricingFAQ from '@/components/PricingFAQ';
import PricingCTA from '@/components/PricingCTA';
import Footer from '@/components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <PricingHeader />
      <PricingContent />
      <PricingFAQ />
      <PricingCTA />
      <Footer />
    </div>
  );
};

export default Pricing;
