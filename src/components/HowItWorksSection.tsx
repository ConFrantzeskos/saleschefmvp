
import React from 'react';
import StepCard from './StepCard';
import CTASection from './CTASection';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';
import { stepsData } from '@/constants/stepsData';

const HowItWorksSection = () => {
  const { email, setEmail, handleSubmit } = useEmailSubmission();

  return (
    <section className="content-padding section-spacing-lg bg-gradient-to-b from-background to-muted/30">
      <div className="container-width space-elements-lg">
        <div className="text-center space-elements-md animate-fade-in">
          <h2 className="text-hero text-balance">
            How One SKU Becomes a Sales Machine
          </h2>
          <p className="text-body-large text-muted-foreground content-width mx-auto">
            SalesChef's AI agents instantly transform messy product specs into persuasive, multi-channel content that converts
          </p>
        </div>
        
        <div className="relative">
          {/* Enhanced progress line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-border via-primary/20 to-border hidden lg:block opacity-30" />
          
          <div className="space-elements-md">
            {stepsData.map((step, index) => (
              <StepCard 
                key={index}
                step={step}
                index={index}
                tryItEmail={email}
                setTryItEmail={setEmail}
                handleSubmitWithRedirect={handleSubmit}
              />
            ))}
          </div>
        </div>
        
        <CTASection />
      </div>
    </section>
  );
};

export default HowItWorksSection;
