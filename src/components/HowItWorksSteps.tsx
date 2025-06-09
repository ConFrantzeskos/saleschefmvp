
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Mail, Upload, Search, Edit, Palette, Rocket, BarChart3 } from 'lucide-react';
import StepCard from './StepCard';

const HowItWorksSteps = () => {
  const [tryItEmail, setTryItEmail] = useState('');
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
    { step: '1', title: 'Register', desc: '', icon: Mail, color: 'bg-gradient-brand', hasEmailInput: true },
    { 
      step: '2', 
      title: 'Upload', 
      desc: '', 
      icon: Upload, 
      color: 'bg-gradient-accent',
      hasLogos: true,
      logoType: 'fileTypes'
    },
    { 
      step: '3', 
      title: 'SalesChef Cleans', 
      desc: '', 
      icon: Search, 
      color: 'bg-secondary',
      hasLogos: true,
      logoType: 'cleaningActions'
    },
    { 
      step: '4', 
      title: 'SalesChef Enriches', 
      desc: '', 
      icon: Edit, 
      color: 'bg-gradient-brand',
      hasLogos: true,
      logoType: 'sources'
    },
    { 
      step: '5', 
      title: 'SalesChef Creates', 
      desc: '', 
      icon: Palette, 
      color: 'bg-gradient-accent',
      hasLogos: true,
      logoType: 'contentTypes'
    },
    { 
      step: '6', 
      title: 'SalesChef Publishes', 
      desc: '', 
      icon: Rocket, 
      color: 'bg-secondary',
      hasLogos: true,
      logoType: 'integrations'
    },
    { 
      step: '7', 
      title: 'SalesChef Optimises', 
      desc: '', 
      icon: BarChart3, 
      color: 'bg-gradient-brand',
      hasLogos: true,
      logoType: 'analytics'
    }
  ];

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight mb-3">
            How to turn a SKU into a sales machine
          </h2>
        </div>
        
        <div className="relative">
          {/* Enhanced progress line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-border via-primary/20 to-border hidden lg:block opacity-30" />
          
          <div className="space-y-3 sm:space-y-4">
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
      </div>
    </section>
  );
};

export default HowItWorksSteps;
