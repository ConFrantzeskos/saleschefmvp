
import React, { memo } from 'react';
import EmailCTA from '@/components/EmailCTA';

const HeroSection = memo(() => {
  return (
    <section className="content-padding section-spacing-lg text-center bg-gradient-to-br from-muted/30 via-background to-muted/20 animate-fade-in">
      <div className="content-width space-elements-md">
        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto animate-scale-in">
          <img 
            src="/lovable-uploads/0b8c5ffe-edc7-4ea5-af28-bc947207ee19.png" 
            alt="SalesChef Logo" 
            className="w-full h-full object-contain"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <h1 className="text-hero text-balance animate-slide-up leading-tight">
          From Raw Specs to a Feast of <br className="hidden sm:block" />
          <span className="text-gradient-brand">Sales-Ready Content</span>
        </h1>
        <p className="text-body-large text-muted-foreground max-w-2xl lg:max-w-3xl mx-auto animate-slide-up">
          SalesChef transforms messy product specs into persuasive, 
          high-converting content for every channel. See it in action.
        </p>
        
        <div className="animate-slide-up">
          <EmailCTA
            headline="Book a Demo"
            placeholder="Enter your work email"
            buttonText="Book a Demo"
            variant="default"
            size="lg"
          />
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
