
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Mail, Upload, Search, Edit, Palette, Rocket, BarChart3 } from 'lucide-react';
import AgentSection from '@/components/AgentSection';
import FAQSection from '@/components/FAQSection';
import StepCard from '@/components/StepCard';
import { coreAgents, inputAgents, strategyAgents, contentAgents, qualityAgents } from '@/components/constants/agentData';
import { retailerFAQs, tourismFAQs, mediaFAQs } from '@/components/constants/faqData';

const HowItWorks = () => {
  const [retailEmail, setRetailEmail] = useState('');
  const [tourismEmail, setTourismEmail] = useState('');
  const [mediaEmail, setMediaEmail] = useState('');
  const [tryItEmail, setTryItEmail] = useState('');
  const navigate = useNavigate();

  const handleRetailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!retailEmail) return;
    toast.success("Welcome to SalesChef! Let's get started with your upload.");
    setTimeout(() => {
      navigate('/upload');
    }, 1000);
  };

  const handleTourismSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tourismEmail) return;
    toast.success("Welcome to SalesChef! Let's get started with your upload.");
    setTimeout(() => {
      navigate('/upload');
    }, 1000);
  };

  const handleMediaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mediaEmail) return;
    toast.success("Welcome to SalesChef! Let's get started with your upload.");
    setTimeout(() => {
      navigate('/upload');
    }, 1000);
  };

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
    <div className="min-h-screen bg-background">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">How One SKU Becomes a Sales Machine</h1>
        <p className="text-xl text-muted-foreground">
          SalesChef's AI agents instantly transform messy product specs into persuasive, multi-channel content that converts
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* How One SKU Becomes a Sales Machine Section */}
        <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30 mb-16">
          <div className="container-width">
            <div className="text-center mb-8 sm:mb-12 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 sm:mb-6 text-balance">
                How SalesChef Works
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Meet the AI agents that transform your raw product data into sales-ready content
              </p>
            </div>
            
            <div className="relative">
              {/* Enhanced progress line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-border via-primary/20 to-border hidden lg:block opacity-30" />
              
              <div className="space-y-4 sm:space-y-6">
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

        {/* Core Always-On Agents */}
        <AgentSection 
          title="How SalesChef Works"
          description="Meet the AI agents that transform your raw product data into sales-ready content. These four are always-on agents, observing and steering. Everything else happens because they decide it must."
          agents={coreAgents}
          gridCols="md:grid-cols-2 lg:grid-cols-4"
        />

        {/* Input & Intelligence Agents */}
        <AgentSection 
          title="🛠️ Input & Intelligence Agents"
          agents={inputAgents}
        />

        {/* Understanding & Strategy Agents */}
        <AgentSection 
          title="🧠 Understanding & Strategy Agents"
          agents={strategyAgents}
        />

        {/* Content Transformation Agents */}
        <AgentSection 
          title="🎨 Content Transformation Agents"
          agents={contentAgents}
        />

        {/* Quality & Delivery Agents */}
        <AgentSection 
          title="✅ Quality & Delivery Agents"
          agents={qualityAgents}
          gridCols="md:grid-cols-2"
        />

        {/* FAQs */}
        <div className="border-t pt-16">
          <FAQSection 
            title="FAQs — For Retailers" 
            faqs={retailerFAQs} 
            emoji="🛍️" 
            email={retailEmail}
            setEmail={setRetailEmail}
            handleSubmit={handleRetailSubmit}
            ctaText="Ready to transform your product content?"
          />
          
          <FAQSection 
            title="FAQs — For Tourism Clients" 
            faqs={tourismFAQs} 
            emoji="🌍" 
            email={tourismEmail}
            setEmail={setTourismEmail}
            handleSubmit={handleTourismSubmit}
            ctaText="Transform your tourism content at scale?"
          />
          
          <FAQSection 
            title="FAQs — For Media Clients" 
            faqs={mediaFAQs} 
            emoji="🎥" 
            email={mediaEmail}
            setEmail={setMediaEmail}
            handleSubmit={handleMediaSubmit}
            ctaText="Unlock your content's revenue potential?"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
