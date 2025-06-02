
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
    <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center bg-gradient-to-br from-muted/30 via-background to-muted/20 animate-fade-in">
      <div className="content-width">
        <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mx-auto mb-8 sm:mb-10 animate-scale-in">
          <img 
            src="/lovable-uploads/0b8c5ffe-edc7-4ea5-af28-bc947207ee19.png" 
            alt="SalesChef Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight mb-6 sm:mb-8 text-balance animate-slide-up leading-tight">
          From Raw Specs to a Feast of <br className="hidden sm:block" />
          <span className="text-gradient-brand">Sales-Ready Content</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl lg:max-w-3xl mx-auto animate-slide-up leading-relaxed">
          SalesChef transforms messy product specs - no matter where they live - into persuasive, 
          high-converting content for every channel.
        </p>
        
        <div className="animate-slide-up">
          <form onSubmit={handleSubmit} className="max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8">
            <div className="form-container">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 sm:h-14 text-sm sm:text-base border-0 bg-transparent focus-visible:ring-0 flex-1"
                required
              />
              <Button 
                type="submit" 
                className="h-12 sm:h-14 px-6 sm:px-8 btn-primary font-semibold mt-3 w-full text-sm sm:text-base" 
                disabled={!email}
              >
                Watch it Cook <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
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
