
import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';

const HeroSection = memo(() => {
  const { email, setEmail, handleSubmit } = useEmailSubmission();

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
          <form onSubmit={handleSubmit} className="max-w-sm sm:max-w-md mx-auto">
            <div className="form-container">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 sm:h-12 lg:h-14 text-sm sm:text-base border-0 bg-transparent focus-visible:ring-0 flex-1"
                required
                autoComplete="email"
              />
              <Button 
                type="submit" 
                className="h-10 sm:h-12 lg:h-14 px-4 sm:px-6 lg:px-8 btn-primary font-semibold mt-3 w-full text-sm sm:text-base" 
                disabled={!email}
              >
                Book a Demo <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
