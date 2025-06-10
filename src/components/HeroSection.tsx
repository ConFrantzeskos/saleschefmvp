
import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';

const HeroSection = memo(() => {
  const { email, setEmail, handleSubmit } = useEmailSubmission();

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
        
        <div className="animate-slide-up max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="form-container space-elements-sm">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input h-14 text-lg"
                required
                autoComplete="email"
              />
              <Button 
                type="submit" 
                className="btn-primary w-full h-14 text-lg" 
                disabled={!email}
              >
                Book a Demo <ArrowRight className="ml-3 w-5 h-5" />
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
