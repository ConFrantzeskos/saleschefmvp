
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

  const handleSubmitWithRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tryItEmail) return;
    
    toast.success("Welcome to SalesChef! Let's get started with your upload.");
    setTimeout(() => {
      navigate('/upload');
    }, 1000);
  };

  const steps = [
    { step: '1', title: 'Share', desc: 'your work email and we\'ll auto-detect your tech stack', icon: Mail, color: 'bg-gradient-brand', hasEmailInput: true },
    { 
      step: '2', 
      title: 'Upload', 
      desc: 'CSV with your product data', 
      icon: Upload, 
      color: 'bg-gradient-accent',
      hasLogos: true,
      logoType: 'fileTypes'
    },
    { 
      step: '3', 
      title: 'Clean', 
      desc: 'fix, format, and fill missing data', 
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
      color: 'bg-gradient-brand',
      hasLogos: true,
      logoType: 'sources'
    },
    { 
      step: '5', 
      title: 'Create', 
      desc: 'PDPs, emails, FAQs, training materials, social tiles', 
      icon: Palette, 
      color: 'bg-gradient-accent',
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
      desc: 'analyse performance, test variants, iterate', 
      icon: BarChart3, 
      color: 'bg-gradient-brand',
      hasLogos: true,
      logoType: 'analytics'
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-background to-muted/30">
      <div className="container-width">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-section-title mb-6 text-balance">
            How One SKU Becomes a Sales Machine
          </h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            SalesChef's AI agents instantly transform messy product specs into persuasive, multi-channel content that converts
          </p>
        </div>
        
        <div className="relative">
          {/* Enhanced progress line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-border via-primary/20 to-border hidden lg:block opacity-30" />
          
          <div className="space-y-8">
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
