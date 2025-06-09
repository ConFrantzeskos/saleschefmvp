
import React from 'react';
import StepCard from './StepCard';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';
import { stepsData } from '@/constants/stepsData';

const HowItWorksSteps = () => {
  const { email: tryItEmail, setEmail: setTryItEmail, handleSubmit: handleSubmitWithRedirect } = useEmailSubmission();

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight mb-3">
            How to turn your specs into a sales machine
          </h2>
        </div>
        
        <div className="relative">
          {/* Enhanced progress line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-border via-primary/20 to-border hidden lg:block opacity-30" />
          
          <div className="space-y-3 sm:space-y-4">
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
      </div>
    </section>
  );
};

export default HowItWorksSteps;
