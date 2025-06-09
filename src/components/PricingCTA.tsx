
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import PageSection from '@/components/layout/PageSection';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';

const PricingCTA = () => {
  const { email, setEmail, handleSubmit } = useEmailSubmission();

  return (
    <PageSection background="gradient" padding="lg">
      <div className="text-center">
        <div className="w-16 h-0.5 bg-border mx-auto mb-8" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6">
          Ready to explore? Let's tailor a value-driven plan for you.
        </h2>
        <div className="max-w-2xl mx-auto mb-8">
          <p className="text-lg text-muted-foreground mb-4">
            No obligation. Just a quick conversation.
          </p>
          <p className="text-base text-muted-foreground">
            We'll show you how SalesChef can transform your content operations — and scope the right pricing for your needs.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Your Business Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-base"
              required
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                type="text"
                placeholder="Your Role"
                className="h-12 text-base"
              />
              <Input
                type="text"
                placeholder="Company Name"
                className="h-12 text-base"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 text-base font-semibold"
              disabled={!email}
            >
              Get Pricing & Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </div>

        <div className="bg-card rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-medium border border-border">
          <h3 className="text-xl sm:text-2xl font-display font-bold mb-4">
            One messy dataset in. A feast of sales-ready content out.
          </h3>
          <p className="text-muted-foreground mb-6">
            Let's tailor SalesChef to your business.
          </p>
          <Button 
            onClick={handleSubmit}
            className="font-semibold"
            disabled={!email}
          >
            Get Pricing & Demo <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </PageSection>
  );
};

export default PricingCTA;
