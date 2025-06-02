
import React from 'react';
import { Check } from 'lucide-react';

const TrustSection = () => {
  const features = [
    'Built for enterprise scale, loved by lean teams',
    'Works with your existing stack—no rip & replace',
    'Zero-storage, orchestration-led, agentic architecture',
    'Secure, compliant, enterprise-ready',
    'Transforms content in minutes—not months'
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 group">
              <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-base text-foreground group-hover:text-primary transition-colors">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
