
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
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
    <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container-width">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 sm:mb-6 text-balance">
            How SalesChef works — One messy SKU in → Sales-ready content out.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SalesChef is not another system to manage. It's a team of specialised AI agents — like chefs — each trained to transform raw product specs into a content banquet that sells.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300 group hover:border-primary/20">
                <div className={`w-16 h-16 ${step.color} text-white rounded-3xl flex items-center justify-center mx-auto mb-4 font-display font-bold text-xl shadow-soft group-hover:scale-105 transition-transform`}>
                  {step.step}
                </div>
                <step.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
