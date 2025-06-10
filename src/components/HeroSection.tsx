
import React, { memo } from 'react';
import EmailCTA from '@/components/EmailCTA';

const HeroSection = memo(() => {
  return (
    <section className="section-hero section-spacing-xl content-padding text-center animate-fade-in">
      <div className="content-width space-elements-lg">
        <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto animate-scale-in">
          <img 
            src="/lovable-uploads/0b8c5ffe-edc7-4ea5-af28-bc947207ee19.png" 
            alt="SalesChef Logo" 
            className="w-full h-full object-contain"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        
        <div className="space-elements-md">
          <h1 className="text-hero text-balance animate-slide-up leading-none">
            From Raw Specs to a Feast of <br className="hidden sm:block" />
            <span className="text-gradient-chef">Sales-Ready Content</span>
          </h1>
          
          <p className="text-body-large text-muted-foreground content-width mx-auto animate-slide-up">
            SalesChef transforms messy product specs into persuasive, 
            high-converting content for every channel. See it in action.
          </p>
        </div>
        
        <div className="animate-slide-up">
          <EmailCTA
            headline=""
            placeholder="Enter your work email"
            buttonText="Book a Demo"
            variant="brand"
            size="lg"
            className="bg-transparent border-none shadow-none p-0"
          />
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
