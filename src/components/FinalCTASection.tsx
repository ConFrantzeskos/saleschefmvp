
import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Play, Phone } from 'lucide-react';

interface FinalCTASectionProps {
  email: string;
  setEmail: (email: string) => void;
  onBookDemo: () => void;
  onTryFree: (e: React.FormEvent) => void;
}

const FinalCTASection = memo(({ email, setEmail, onBookDemo, onTryFree }: FinalCTASectionProps) => {
  const handleContactSales = () => {
    // In a real app, this would open a contact form or redirect
    console.log('Contact sales clicked');
  };

  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-8 text-balance">
          Ready to uncover what really sells — and scale it?
        </h2>
        
        <div className="flex flex-col gap-6 items-center">
          {/* Primary CTA */}
          <Button 
            onClick={onBookDemo}
            size="lg" 
            className="h-16 px-12 text-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-200"
          >
            <Play className="mr-3 w-6 h-6" />
            Book a Demo
          </Button>

          {/* Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <form onSubmit={onTryFree} className="flex gap-2 bg-card border border-border rounded-xl p-2 shadow-md">
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

            <Button 
              onClick={handleContactSales}
              variant="outline"
              size="lg"
              className="h-10 px-6 font-semibold"
            >
              <Phone className="mr-2 w-4 h-4" />
              Contact Sales
            </Button>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          Join enterprise retail teams already transforming their content strategy with SalesChef. 
          No long implementation cycles. No technical overhead.
        </p>
      </div>
    </section>
  );
});

FinalCTASection.displayName = 'FinalCTASection';

export default FinalCTASection;
