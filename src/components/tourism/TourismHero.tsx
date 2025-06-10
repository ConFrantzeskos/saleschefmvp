
import React from 'react';
import PageSection from '@/components/layout/PageSection';
import SectionHeader from '@/components/layout/SectionHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';

const TourismHero = () => {
  const { email, setEmail, handleSubmit } = useEmailSubmission();

  return (
    <PageSection background="gradient" padding="lg">
      <div className="content-width space-elements-md">
        <SectionHeader
          title={
            <span className="text-hero">
              ✈️ SalesChef for Tourism & Travel
            </span>
          }
          subtitle={
            <span className="text-body-large">
              Turn fragmented supplier chaos into a <span className="font-semibold text-primary">revenue-generating content engine</span>.
              <br />
              <span className="text-gradient-brand font-medium">
                One messy operator spreadsheet in. A perfectly packaged, high-converting experience out.
              </span>
            </span>
          }
          size="lg"
        />
        
        <div className="max-w-md mx-auto mt-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-base"
              required
            />
            <Button 
              type="submit" 
              className="w-full h-12 text-base font-semibold"
              disabled={!email}
            >
              Book Tourism Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            See SalesChef transform tourism content operations
          </p>
        </div>
      </div>
    </PageSection>
  );
};

export default TourismHero;
