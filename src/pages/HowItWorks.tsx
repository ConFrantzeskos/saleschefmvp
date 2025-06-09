
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
        {/* How One SKU Becomes a Sales Machine Section */}
        <HowItWorksSteps />

        {/* Agent Sections */}
        <HowItWorksAgents />

        {/* FAQs */}
        <HowItWorksFAQs />
      </div>
    </div>
  );
};

export default HowItWorks;
