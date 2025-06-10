
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import PageSection from '@/components/layout/PageSection';
import EmailCTA from '@/components/EmailCTA';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';

const PricingCTA = () => {
  const { handleSubmit } = useEmailSubmission();

  return (
    <PageSection background="gradient" padding="lg">
      <div className="text-center">
        <div className="w-16 h-0.5 bg-border mx-auto mb-8" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
          Ready to explore? Let's tailor a value-driven plan for you.
        </h2>
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-lg text-muted-foreground mb-4">
            No obligation. Just a quick conversation about your content needs.
          </p>
          <p className="text-base text-muted-foreground">
            We'll show you how SalesChef can transform your content operations — and scope the right pricing for your needs.
          </p>
        </div>

        <EmailCTA
          headline=""
          placeholder="Your work email"
          buttonText="Book a Demo"
          variant="default"
          size="sm"
          className="bg-transparent border-none shadow-none p-0 mb-12"
        />

        <div className="bg-card rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-medium border border-border">
          <h3 className="text-xl sm:text-2xl font-display font-bold mb-4">
            One messy dataset in. A feast of sales-ready content out.
          </h3>
          <p className="text-muted-foreground mb-6">
            Let's tailor SalesChef to your business with a personalized demo.
          </p>
          <Button 
            onClick={handleSubmit}
            className="font-semibold"
          >
            Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </PageSection>
  );
};

export default PricingCTA;
