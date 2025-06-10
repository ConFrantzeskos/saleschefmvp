
import React from 'react';
import StepCard from './StepCard';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';
import { stepsData } from '@/constants/stepsData';

const HowItWorksSteps = () => {
  const { email: tryItEmail, setEmail: setTryItEmail, handleSubmit: handleSubmitWithRedirect } = useEmailSubmission();

  return (
    <section className="content-padding section-spacing-md">
      <div className="content-width space-elements-lg">
        <div className="text-center space-elements-sm">
          <h2 className="text-section-title text-balance">
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
