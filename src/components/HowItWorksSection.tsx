
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Mail, Upload, Search, Edit, Palette, Rocket, BarChart3 } from 'lucide-react';
import StepCard from './StepCard';
import CTASection from './CTASection';

interface HowItWorksSectionProps {
  tryItEmail: string;
  setTryItEmail: (email: string) => void;
  handleTryItSubmit: (e: React.FormEvent) => void;
}

const HowItWorksSection = ({ tryItEmail, setTryItEmail, handleTryItSubmit }: HowItWorksSectionProps) => {
  const navigate = useNavigate();

  // Override the handleTryItSubmit to ensure redirect happens
  const handleSubmitWithRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tryItEmail) return;
    
    toast.success("Welcome to SalesChef! Let's get started with your upload.");
    setTimeout(() => {
      navigate('/upload');
    }, 1000);
  };

  const steps = [
    { step: '1', title: 'Share', desc: 'your work email and we\'ll auto-detect your tech stack', icon: Mail, color: 'bg-primary', hasEmailInput: true },
    { 
      step: '2', 
      title: 'Upload', 
      desc: 'CSV', 
      icon: Upload, 
      color: 'bg-accent',
      hasLogos: true,
      logoType: 'fileTypes'
    },
    { 
      step: '3', 
      title: 'Clean', 
      desc: 'fix, format, fill', 
      icon: Search, 
      color: 'bg-secondary',
      hasLogos: true,
      logoType: 'cleaningActions'
    },
    { 
      step: '4', 
      title: 'Enrich', 
      desc: 'reviews, reasons to buy, consumer benefits, SEO, tags, images', 
      icon: Edit, 
      color: 'bg-primary',
      hasLogos: true,
      logoType: 'sources'
    },
    { 
      step: '5', 
      title: 'Create', 
      desc: 'PDPs, emails, FAQs, training, social tiles', 
      icon: Palette, 
      color: 'bg-accent',
      hasLogos: true,
      logoType: 'contentTypes'
    },
    { 
      step: '6', 
      title: 'Publish', 
      desc: 'into CSV files, Shopify, CMS, DAM, PIM, marketplace', 
      icon: Rocket, 
      color: 'bg-secondary',
      hasLogos: true,
      logoType: 'integrations'
    },
    { 
      step: '7', 
      title: 'Optimise', 
      desc: 'analyse, test, iterate', 
      icon: BarChart3, 
      color: 'bg-primary',
      hasLogos: true,
      logoType: 'analytics'
    }
  ];

  return (
    <section className="py-8 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">
            How One SKU Becomes a Sales Machine
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            SalesChef's AI agents instantly transform messy product specs into persuasive, multi-channel content that converts
          </p>
        </div>
        
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-primary/30 to-border hidden lg:block" />
          
          <div className="space-y-2">
            {steps.map((step, index) => (
              <StepCard 
                key={index}
                step={step}
                index={index}
                tryItEmail={tryItEmail}
                setTryItEmail={setTryItEmail}
                handleSubmitWithRedirect={handleSubmitWithRedirect}
              />
            ))}
          </div>
        </div>
        
        <CTASection 
          tryItEmail={tryItEmail}
          setTryItEmail={setTryItEmail}
          handleSubmitWithRedirect={handleSubmitWithRedirect}
        />
      </div>
    </section>
  );
};

export default HowItWorksSection;
