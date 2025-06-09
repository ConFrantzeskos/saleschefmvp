
import React from 'react';
import { Check } from 'lucide-react';

const ResultsSection = () => {
  const outcomes = [
    { text: '+127% PDP conversion' },
    { text: '-65% SEM costs' },
    { text: '80% faster time to shelf' },
    { text: 'Stronger SEO rankings' },
    { text: 'Content that differentiates — not commoditises' },
    { text: 'Content teams scale without scaling headcount' }
  ];

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container-width">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 sm:mb-6 text-balance">
            With SalesChef, you can achieve:
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {outcomes.map((outcome, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-6 rounded-3xl bg-card border border-border hover:shadow-soft transition-all duration-300 group hover:border-primary/20" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-6 h-6 text-accent flex-shrink-0 mt-1">
                <Check className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <p className="text-base font-medium leading-relaxed text-foreground group-hover:text-primary transition-colors">
                  {outcome.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
