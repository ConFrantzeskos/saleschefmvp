
import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Play } from 'lucide-react';

interface EnterpriseHeroSectionProps {
  email: string;
  setEmail: (email: string) => void;
  onBookDemo: () => void;
  onTryFree: (e: React.FormEvent) => void;
}

const EnterpriseHeroSection = memo(({ email, setEmail, onBookDemo, onTryFree }: EnterpriseHeroSectionProps) => {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 sm:mb-8 text-balance leading-tight">
          Stop Burning SEM Budget.<br />
          <span className="text-primary">Start Driving PDP Conversion.</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
          SalesChef turns raw specs into a feast of persuasive, revenue-driving content — for every channel. In minutes, not months.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            onClick={onBookDemo}
            size="lg" 
            className="h-14 px-8 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Play className="mr-2 w-5 h-5" />
            Book a Demo
          </Button>
          
          <form onSubmit={onTryFree} className="flex gap-2 bg-card border border-border rounded-xl p-2 shadow-sm hover:shadow-md transition-shadow">
            <Input
              type="email"
              placeholder="Enter work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-10 border-0 bg-transparent focus-visible:ring-0 min-w-[200px]"
              required
            />
            <Button 
              type="submit" 
              variant="secondary"
              className="h-10 px-6 font-semibold"
              disabled={!email}
            >
              Try Free <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>

        <p className="text-sm text-muted-foreground">
          Trusted by enterprise retail teams • No setup required
        </p>
      </div>
    </section>
  );
});

EnterpriseHeroSection.displayName = 'EnterpriseHeroSection';

export default EnterpriseHeroSection;
