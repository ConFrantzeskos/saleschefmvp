
import React from 'react';
import { Check } from 'lucide-react';

const TrustSection = () => {
  const features = [
    'Works with your existing tech stack',
    'Secure, compliant, and scalable',
    'Transform content in minutes - not months'
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-balance text-foreground">
          Built for Enterprise Retail. Loved by Lean Teams.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 justify-center group">
              <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <span className="text-base text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
