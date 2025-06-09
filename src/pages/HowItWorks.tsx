
import React from 'react';
import HowItWorksHeader from '@/components/HowItWorksHeader';
import HowItWorksSteps from '@/components/HowItWorksSteps';
import HowItWorksAgents from '@/components/HowItWorksAgents';
import HowItWorksFAQs from '@/components/HowItWorksFAQs';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <HowItWorksHeader />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Section 1: How to turn a SKU into a sales machine */}
        <HowItWorksSteps />

        {/* Section 2: Meet the Chefs behind the Scenes */}
        <HowItWorksAgents />

        {/* Section 3: Frequently Asked Questions */}
        <HowItWorksFAQs />
      </div>
    </div>
  );
};

export default HowItWorks;
