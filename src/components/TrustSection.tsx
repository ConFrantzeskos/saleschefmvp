
import React from 'react';
import { Check, Shield, Clock, Users, Zap, Star } from 'lucide-react';

const TrustSection = () => {
  const features = [
    { 
      text: 'Not another system — no rip & replace',
      icon: Shield,
      color: 'text-primary'
    },
    { 
      text: 'Zero-storage, orchestration-led, agentic architecture',
      icon: Zap,
      color: 'text-accent'
    },
    { 
      text: 'Works with your existing stack',
      icon: Shield,
      color: 'text-secondary'
    },
    { 
      text: 'Enterprise scale, loved by lean teams',
      icon: Users,
      color: 'text-primary'
    },
    { 
      text: 'High-integrity outputs — brand-safe, compliant, on-tone',
      icon: Check,
      color: 'text-accent'
    },
    { 
      text: 'Real-time results — minutes, not months',
      icon: Clock,
      color: 'text-secondary'
    }
  ];

  return (
    <section className="section-spacing bg-gradient-warm">
      <div className="content-width">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/5 rounded-full border border-primary/10 mb-8">
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="text-primary font-semibold">Why SalesChef</span>
          </div>
          <h2 className="text-section-title mb-6 text-balance">
            Why teams choose SalesChef
          </h2>
        </div>
        
        <div className="grid gap-6 max-w-4xl mx-auto animate-fade-in">
          {features.map((feature, index) => (
            <div key={index} className="group animate-slide-up hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-6 p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/20 transition-all duration-500 hover:shadow-brand">
                <div className="w-6 h-6 text-accent flex-shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-body text-foreground group-hover:text-primary transition-colors duration-300 font-medium leading-relaxed">{feature.text}</span>
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
