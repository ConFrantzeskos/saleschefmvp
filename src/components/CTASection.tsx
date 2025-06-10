
import React, { memo } from 'react';
import EmailCTA from '@/components/EmailCTA';

const CTASection = memo(() => {
  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      <div className="content-width">
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-xl sm:max-w-2xl mx-auto border border-border shadow-medium">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold mb-4 sm:mb-6 text-balance">Transform your content</h3>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
              See how SalesChef can revolutionize your content pipeline with a personalized demo
            </p>
            <EmailCTA
              headline=""
              placeholder="Enter your work email"
              buttonText="Book a Demo"
              variant="default"
              size="md"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;
