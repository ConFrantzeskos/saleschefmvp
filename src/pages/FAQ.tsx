
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import FAQSection from '@/components/FAQSection';
import { retailerFAQs, tourismFAQs, mediaFAQs } from '@/components/constants/faqData';

const FAQ = () => {
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
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about SalesChef for different industries
            </p>
          </div>
          
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

export default FAQ;
