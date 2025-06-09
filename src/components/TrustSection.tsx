
import React from 'react';
import { Check, Star } from 'lucide-react';

const TrustSection = () => {
  const features = [
    { text: 'Not another system — no rip & replace' },
    { text: 'Zero-storage, orchestration-led, agentic architecture' },
    { text: 'Works with your existing stack' },
    { text: 'Enterprise scale, loved by lean teams' },
    { text: 'High-integrity outputs — brand-safe, compliant, on-tone' },
    { text: 'Real-time results — minutes, not months' }
  ];

  return (
    <section className="px-4 sm:px-6 py-8 lg:py-12 bg-gradient-warm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-4">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-primary font-semibold text-sm">Why SalesChef</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4 text-balance">
            Why teams choose SalesChef
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group animate-slide-up hover-lift" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/20 transition-all duration-500 hover:shadow-brand">
                <div className="w-5 h-5 text-accent flex-shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors duration-300 font-medium leading-snug">
                    {feature.text}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
