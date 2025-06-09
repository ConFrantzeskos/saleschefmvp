
import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

interface EnterpriseProblemSectionProps {
  onBookDemo: () => void;
}

const problems = [
  'Finding good product specs is difficult',
  'PDPs are bland, copied from suppliers',
  'SEM spend wasted on poor content',
  'SKU launches too slow',
  'No SEO differentiation',
  'Few insights into what drives conversion',
  'Content teams can\'t scale across regions & channels',
  'Never-ending flood of new products means it\'s impossible to keep up'
];

const EnterpriseProblemSection = memo(({ onBookDemo }: EnterpriseProblemSectionProps) => {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 bg-destructive/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-8 text-destructive">
          Most product content fails to convert - here's why:
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-3 mb-8 text-left">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-destructive/20">
              <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <span className="text-foreground font-medium">{problem}</span>
            </div>
          ))}
        </div>

        <Button 
          onClick={onBookDemo}
          size="lg" 
          className="h-12 px-8 font-semibold bg-primary hover:bg-primary/90"
        >
          Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
});

EnterpriseProblemSection.displayName = 'EnterpriseProblemSection';

export default EnterpriseProblemSection;
