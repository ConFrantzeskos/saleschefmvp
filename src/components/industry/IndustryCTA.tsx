
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import PageSection from '@/components/layout/PageSection';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';

interface IndustryCTAProps {
  industryName: string;
}

const IndustryCTA = ({ industryName }: IndustryCTAProps) => {
  const { email, setEmail, handleSubmit } = useEmailSubmission();

  return (
    <PageSection>
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          See how SalesChef can transform your <span className="text-primary">{industryName}</span> content
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Custom-tailored for your business needs.
        </p>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-base"
              required
            />
            <Button 
              type="submit" 
              size="lg" 
              className="w-full h-12 text-lg px-8 py-6"
              disabled={!email}
            >
              Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </PageSection>
  );
};

export default IndustryCTA;
