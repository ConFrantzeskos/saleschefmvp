
import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, TrendingDown, Zap, Target, Users, Star, Clock, CheckCircle } from 'lucide-react';

interface OutcomesSectionProps {
  onBookDemo: () => void;
}

const outcomes = [
  { text: '+127% PDP Conversion', icon: TrendingUp, color: 'text-green-600' },
  { text: '-65% SEM Costs', icon: TrendingDown, color: 'text-blue-600' },
  { text: '80% faster Time to Shelf', icon: Clock, color: 'text-purple-600' },
  { text: 'SEO lift and differentiation', icon: Star, color: 'text-yellow-600' },
  { text: 'Scale content without scaling headcount', icon: Users, color: 'text-green-600' },
  { text: 'Clearer "reasons to buy" in every asset', icon: Target, color: 'text-blue-600' },
  { text: 'More dynamic, reactive content across the retail calendar', icon: Zap, color: 'text-purple-600' }
];

const OutcomesSection = memo(({ onBookDemo }: OutcomesSectionProps) => {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-12 text-primary">
          With SalesChef:
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {outcomes.map((outcome, index) => (
            <div key={index} className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
              <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${outcome.color}`}>
                <outcome.icon className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{outcome.text}</span>
              </div>
            </div>
          ))}
        </div>

        <Button 
          onClick={onBookDemo}
          size="lg" 
          className="h-12 px-8 font-semibold bg-primary hover:bg-primary/90"
        >
          See how — Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
});

OutcomesSection.displayName = 'OutcomesSection';

export default OutcomesSection;
