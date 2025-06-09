
import React from 'react';
import StepCard from './StepCard';
import CTASection from './CTASection';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';
import { stepsData } from '@/constants/stepsData';

interface HowItWorksSectionProps {
  tryItEmail: string;
  setTryItEmail: (email: string) => void;
  handleTryItSubmit: (e: React.FormEvent) => void;
}

const HowItWorksSection = ({ tryItEmail, setTryItEmail, handleTryItSubmit }: HowItWorksSectionProps) => {
  const { handleSubmit: handleSubmitWithRedirect } = useEmailSubmission();

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container-width">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 sm:mb-6 text-balance">
            How One SKU Becomes a Sales Machine
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            SalesChef's AI agents instantly transform messy product specs into persuasive, multi-channel content that converts
          </p>
        </div>
        
        <div className="relative">
          {/* Enhanced progress line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-border via-primary/20 to-border hidden lg:block opacity-30" />
          
          <div className="space-y-4 sm:space-y-6">
            {stepsData.map((step, index) => (
              <StepCard 
                key={index}
                step={step}
                index={index}
                tryItEmail={tryItEmail}
                setTryItEmail={setTryItEmail}
                handleSubmitWithRedirect={handleSubmitWithRedirect}
              />
            ))}
          </div>
        </div>
        
        <CTASection 
          tryItEmail={tryItEmail}
          setTryItEmail={setTryItEmail}
          handleSubmitWithRedirect={handleSubmitWithRedirect}
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;
