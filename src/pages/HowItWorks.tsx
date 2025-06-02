
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import HowItWorksHeader from '@/components/HowItWorksHeader';
import AgentSection from '@/components/AgentSection';
import FAQSection from '@/components/FAQSection';
import { coreAgents, inputAgents, strategyAgents, contentAgents, qualityAgents } from '@/components/constants/agentData';
import { retailerFAQs, tourismFAQs, mediaFAQs } from '@/components/constants/faqData';

const HowItWorks = () => {
  const [retailEmail, setRetailEmail] = useState('');
  const [tourismEmail, setTourismEmail] = useState('');
  const [mediaEmail, setMediaEmail] = useState('');
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

  return (
    <div className="min-h-screen bg-background">
      <HowItWorksHeader />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Core Always-On Agents */}
        <AgentSection 
          title="Core Always-On Agents"
          description="These four are always-on agents, observing and steering. Everything else happens because they decide it must."
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
