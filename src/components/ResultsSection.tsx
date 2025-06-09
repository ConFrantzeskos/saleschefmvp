
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
    <section className="px-4 sm:px-6 py-8 lg:py-12 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4 text-balance">
            With SalesChef, you can achieve:
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-slide-up">
          {outcomes.map((outcome, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border hover:shadow-soft transition-all duration-300 group hover:border-primary/20" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-5 h-5 text-accent flex-shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium leading-snug text-foreground group-hover:text-primary transition-colors">
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
