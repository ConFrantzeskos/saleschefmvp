
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
    <section className="px-4 sm:px-6 py-12 lg:py-16 text-center bg-gradient-to-br from-muted/30 via-background to-muted/20 animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-6 animate-scale-in">
          <img 
            src="/lovable-uploads/0b8c5ffe-edc7-4ea5-af28-bc947207ee19.png" 
            alt="SalesChef Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold tracking-tight mb-4 text-balance animate-slide-up leading-tight">
          Turn Product Specs Into <span className="text-gradient-brand">Revenue</span>
        </h1>
        <p className="text-sm lg:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto animate-slide-up leading-relaxed">
          Lift conversion. Cut SEM waste. Accelerate SKU launches. At scale.<br className="hidden sm:block" />
          SalesChef transforms raw, messy product data into a feast of sales-ready content — for every channel, in minutes, not months.
        </p>
        
        <div className="animate-slide-up">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4">
            <div className="form-container">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 lg:h-14 text-sm border-0 bg-transparent focus-visible:ring-0 flex-1"
                required
              />
              <Button 
                type="submit" 
                className="h-12 lg:h-14 px-6 lg:px-8 btn-primary font-semibold mt-3 w-full text-sm" 
                disabled={!email}
              >
                Try it free — Book a Demo <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
