
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
    <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 text-center bg-gradient-to-br from-muted/30 via-background to-muted/20 animate-fade-in">
      <div className="content-width">
        <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-6 sm:mb-8 animate-scale-in">
          <img 
            src="/lovable-uploads/0b8c5ffe-edc7-4ea5-af28-bc947207ee19.png" 
            alt="SalesChef Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold tracking-tight mb-4 sm:mb-6 text-balance animate-slide-up leading-tight">
          Turn Product Specs Into <span className="text-gradient-brand">Revenue</span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl lg:max-w-3xl mx-auto animate-slide-up leading-relaxed">
          Lift conversion. Cut SEM waste. Accelerate SKU launches. At scale.<br className="hidden sm:block" />
          SalesChef transforms raw, messy product data into a feast of sales-ready content — for every channel, in minutes, not months.
        </p>
        
        <div className="animate-slide-up">
          <form onSubmit={handleSubmit} className="max-w-sm sm:max-w-md mx-auto mb-4 sm:mb-6">
            <div className="form-container">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-10 sm:h-12 lg:h-14 text-sm sm:text-base border-0 bg-transparent focus-visible:ring-0 flex-1"
                required
              />
              <Button 
                type="submit" 
                className="h-10 sm:h-12 lg:h-14 px-4 sm:px-6 lg:px-8 btn-primary font-semibold mt-3 w-full text-sm sm:text-base" 
                disabled={!email}
              >
                Try it free — Book a Demo <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </Button>
            </div>
          </form>
          
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            Upload a CSV. Watch your data transform into content magic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
