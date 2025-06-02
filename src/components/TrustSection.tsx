
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
    <section className="section-spacing bg-gradient-subtle">
      <div className="content-width">
        <div className="grid gap-8 animate-fade-in">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <span className="text-body text-foreground group-hover:text-primary transition-colors duration-300 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
