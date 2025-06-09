
import React from 'react';
import { Upload, Settings, Rocket } from 'lucide-react';

interface HowItWorksSectionProps {
  tryItEmail: string;
  setTryItEmail: (email: string) => void;
  handleTryItSubmit: (e: React.FormEvent) => void;
}

const HowItWorksSection = ({ tryItEmail, setTryItEmail, handleTryItSubmit }: HowItWorksSectionProps) => {
  const steps = [
    { 
      step: '1', 
      title: 'Upload your data', 
      desc: 'CSV, Excel, PDF, ERP, PIM, CMS, etc.', 
      icon: Upload, 
      color: 'bg-gradient-brand'
    },
    { 
      step: '2', 
      title: "SalesChef's agents clean, enrich, and transform it", 
      desc: 'AI agents work behind the scenes', 
      icon: Settings, 
      color: 'bg-gradient-accent'
    },
    { 
      step: '3', 
      title: 'Instantly get high-performance content for every channel', 
      desc: 'Ready to publish across all platforms', 
      icon: Rocket, 
      color: 'bg-secondary'
    }
  ];

  return (
    <section className="px-4 sm:px-6 py-8 lg:py-12 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold tracking-tight mb-3 text-balance">
            How SalesChef works — One messy SKU in → Sales-ready content out.
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SalesChef is not another system to manage. It's a team of specialised AI agents — like chefs — each trained to transform raw product specs into a content banquet that sells.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-xl p-4 shadow-soft border border-border hover:shadow-medium transition-all duration-300 group hover:border-primary/20">
                <div className={`w-12 h-12 ${step.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-3 font-display font-bold text-lg shadow-soft group-hover:scale-105 transition-transform`}>
                  {step.step}
                </div>
                <step.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
