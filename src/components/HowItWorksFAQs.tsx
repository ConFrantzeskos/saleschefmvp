
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import FAQSection from './FAQSection';
import { retailerFAQs, tourismFAQs, mediaFAQs } from './constants/faqData';

const HowItWorksFAQs = () => {
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
    <div className="border-t pt-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 sm:mb-6 text-balance">
          Frequently Asked Questions
        </h2>
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
  );
};

export default HowItWorksFAQs;
