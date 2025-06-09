
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import FAQSection from '@/components/FAQSection';
import { 
  retailerFAQs, 
  travelTourismFAQs, 
  mediaEntertainmentFAQs,
  financeFAQs,
  industrialManufacturingFAQs,
  healthcareMedicalFAQs,
  realEstateFAQs,
  automotiveFAQs,
  investorCommunicationsFAQs
} from '@/components/constants/faqData';

const FAQ = () => {
  const [retailEmail, setRetailEmail] = useState('');
  const [travelEmail, setTravelEmail] = useState('');
  const [mediaEmail, setMediaEmail] = useState('');
  const [financeEmail, setFinanceEmail] = useState('');
  const [industrialEmail, setIndustrialEmail] = useState('');
  const [healthcareEmail, setHealthcareEmail] = useState('');
  const [realEstateEmail, setRealEstateEmail] = useState('');
  const [automotiveEmail, setAutomotiveEmail] = useState('');
  const [investorEmail, setInvestorEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (email: string) => (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
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
            handleSubmit={handleSubmit(retailEmail)}
            ctaText="Ready to transform your product content?"
          />
          
          <FAQSection 
            title="FAQs — For Travel & Tourism" 
            faqs={travelTourismFAQs} 
            emoji="✈️" 
            email={travelEmail}
            setEmail={setTravelEmail}
            handleSubmit={handleSubmit(travelEmail)}
            ctaText="Transform your tourism content at scale?"
          />
          
          <FAQSection 
            title="FAQs — For Media & Entertainment" 
            faqs={mediaEntertainmentFAQs} 
            emoji="🎬" 
            email={mediaEmail}
            setEmail={setMediaEmail}
            handleSubmit={handleSubmit(mediaEmail)}
            ctaText="Unlock your content's revenue potential?"
          />

          <FAQSection 
            title="FAQs — For Finance" 
            faqs={financeFAQs} 
            emoji="💰" 
            email={financeEmail}
            setEmail={setFinanceEmail}
            handleSubmit={handleSubmit(financeEmail)}
            ctaText="Ready to streamline your financial communications?"
          />

          <FAQSection 
            title="FAQs — For Industrial & Manufacturing" 
            faqs={industrialManufacturingFAQs} 
            emoji="🏭" 
            email={industrialEmail}
            setEmail={setIndustrialEmail}
            handleSubmit={handleSubmit(industrialEmail)}
            ctaText="Transform your technical content pipeline?"
          />

          <FAQSection 
            title="FAQs — For Healthcare & Medical" 
            faqs={healthcareMedicalFAQs} 
            emoji="🏥" 
            email={healthcareEmail}
            setEmail={setHealthcareEmail}
            handleSubmit={handleSubmit(healthcareEmail)}
            ctaText="Ready to enhance your medical communications?"
          />

          <FAQSection 
            title="FAQs — For Real Estate" 
            faqs={realEstateFAQs} 
            emoji="🏠" 
            email={realEstateEmail}
            setEmail={setRealEstateEmail}
            handleSubmit={handleSubmit(realEstateEmail)}
            ctaText="Transform your property marketing content?"
          />

          <FAQSection 
            title="FAQs — For Automotive" 
            faqs={automotiveFAQs} 
            emoji="🚗" 
            email={automotiveEmail}
            setEmail={setAutomotiveEmail}
            handleSubmit={handleSubmit(automotiveEmail)}
            ctaText="Ready to accelerate your vehicle content?"
          />

          <FAQSection 
            title="FAQs — For Investor Communications" 
            faqs={investorCommunicationsFAQs} 
            emoji="📊" 
            email={investorEmail}
            setEmail={setInvestorEmail}
            handleSubmit={handleSubmit(investorEmail)}
            ctaText="Transform your investor communications?"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
