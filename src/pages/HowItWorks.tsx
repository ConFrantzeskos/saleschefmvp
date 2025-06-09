
import React from 'react';
import HowItWorksHeader from '@/components/HowItWorksHeader';
import HowItWorksSteps from '@/components/HowItWorksSteps';
import HowItWorksAgents from '@/components/HowItWorksAgents';
import HowItWorksFAQs from '@/components/HowItWorksFAQs';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <HowItWorksHeader />
      <HowItWorksSteps />
      <HowItWorksAgents />
      <HowItWorksFAQs />
    </div>
  );
};

export default HowItWorks;
