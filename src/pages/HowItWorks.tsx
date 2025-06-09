
import React from 'react';
import HowItWorksHeader from '@/components/HowItWorksHeader';
import HowItWorksSteps from '@/components/HowItWorksSteps';
import HowItWorksAgents from '@/components/HowItWorksAgents';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <HowItWorksHeader />
      <HowItWorksSteps />
      <HowItWorksAgents />
    </div>
  );
};

export default HowItWorks;
