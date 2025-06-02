
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const HeroSection = ({ email, setEmail, handleSubmit }: HeroSectionProps) => {
  return (
    <section className="section-spacing text-center bg-gradient-to-br from-muted/30 via-background to-muted/20 animate-fade-in">
      <div className="content-width">
        <div className="w-20 h-20 mx-auto mb-10 animate-scale-in">
          <img 
            src="/lovable-uploads/0b8c5ffe-edc7-4ea5-af28-bc947207ee19.png" 
            alt="SalesChef Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-hero mb-8 text-balance animate-slide-up">
          From Raw Specs to a Feast of <br />
          <span className="text-gradient-brand">Sales-Ready Content</span>
        </h1>
        <p className="text-body-large text-muted-foreground mb-10 max-w-3xl mx-auto animate-slide-up">
          SalesChef transforms messy product specs - no matter where they live - into persuasive, 
          high-converting content for every channel.
        </p>
        
        <div className="animate-slide-up">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="form-container">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 text-base border-0 bg-transparent focus-visible:ring-0 flex-1"
                required
              />
              <Button 
                type="submit" 
                className="h-14 px-8 btn-primary font-semibold mt-3 w-full" 
                disabled={!email}
              >
                Watch it Cook <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-muted-foreground">
            Upload a CSV. Watch your data transform into content magic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
