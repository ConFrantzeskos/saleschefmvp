
import React from 'react';
import HowItWorksHeader from '@/components/HowItWorksHeader';
import HowItWorksSteps from '@/components/HowItWorksSteps';
import HowItWorksAgents from '@/components/HowItWorksAgents';
import EmailCTA from '@/components/EmailCTA';
import Footer from '@/components/Footer';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <HowItWorksHeader />
      <HowItWorksSteps />
      
      {/* CTA after steps explanation */}
      <EmailCTA
        headline="Ready to see how it works?"
        subtitle="Get a personalized demo of SalesChef in action"
        placeholder="Enter your work email"
        buttonText="Book Demo"
        variant="gradient"
        size="sm"
      />
      
      <HowItWorksAgents />
      
      {/* Final CTA after agents */}
      <EmailCTA
        headline="Start transforming your content operations"
        subtitle="Join teams already using AI agents to scale their content"
        placeholder="Enter your work email"
        buttonText="Get Started"
        variant="card"
        size="sm"
      />
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
