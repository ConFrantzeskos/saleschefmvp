
import React from 'react';
import { Check, Shield, Clock, Users, Zap, Star } from 'lucide-react';
import LiveTracker from './LiveTracker';

const TrustSection = () => {
  const features = [
    { 
      text: 'Built for enterprise scale, loved by lean teams',
      icon: Users,
      color: 'text-primary'
    },
    { 
      text: 'Works with your existing stack—no rip & replace',
      icon: Shield,
      color: 'text-secondary'
    },
    { 
      text: 'Zero-storage, orchestration-led, agentic architecture',
      icon: Zap,
      color: 'text-accent'
    },
    { 
      text: 'Secure, compliant, enterprise-ready',
      icon: Shield,
      color: 'text-primary'
    },
    { 
      text: 'Transforms content in minutes—not months',
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
            <span className="text-primary font-semibold">Enterprise Ready</span>
          </div>
          <h2 className="text-section-title mb-6 text-balance">
            Why Teams Choose SalesChef
          </h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built with enterprise needs in mind, designed for teams who demand results
          </p>
        </div>
        
        <div className="grid gap-6 max-w-4xl mx-auto animate-fade-in">
          {features.map((feature, index) => (
            <div key={index} className="group animate-slide-up hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-6 p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card hover:border-primary/20 transition-all duration-500 hover:shadow-brand">
                <div className={`icon-container bg-gradient-to-br from-muted/50 to-muted/30 ${feature.color} group-hover:scale-110 group-hover:shadow-soft`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-body text-foreground group-hover:text-primary transition-colors duration-300 font-medium leading-relaxed">{feature.text}</span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Check className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in">
          <LiveTracker />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
