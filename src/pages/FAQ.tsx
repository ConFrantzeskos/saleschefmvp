
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import FAQSection from '@/components/FAQSection';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';
import { 
  generalFAQs,
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
  const { handleSubmit: handleEmailSubmit } = useEmailSubmission();
  
  // Individual email states for each section
  const [generalEmail, setGeneralEmail] = useState('');
  const [retailEmail, setRetailEmail] = useState('');
  const [travelEmail, setTravelEmail] = useState('');
  const [mediaEmail, setMediaEmail] = useState('');
  const [financeEmail, setFinanceEmail] = useState('');
  const [industrialEmail, setIndustrialEmail] = useState('');
  const [healthcareEmail, setHealthcareEmail] = useState('');
  const [realEstateEmail, setRealEstateEmail] = useState('');
  const [automotiveEmail, setAutomotiveEmail] = useState('');
  const [investorEmail, setInvestorEmail] = useState('');

  const createHandleSubmit = (email: string, setEmail: (email: string) => void) => async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Create a mock event with the email value
    const mockEvent = {
      preventDefault: () => {},
      target: { value: email }
    } as any;
    
    // Temporarily set the email in the hook and submit
    const emailSubmission = useEmailSubmission();
    emailSubmission.setEmail(email);
    await emailSubmission.handleSubmit(mockEvent);
    
    // Clear the local email state
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">
              SalesChef FAQ
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about SalesChef for different industries
            </p>
          </div>
          
          <FAQSection 
            title="General SalesChef FAQs" 
            faqs={generalFAQs} 
            emoji="🚀" 
            email={generalEmail}
            setEmail={setGeneralEmail}
            handleSubmit={createHandleSubmit(generalEmail, setGeneralEmail)}
            ctaText="Ready to transform your content with SalesChef?"
          />
          
          <FAQSection 
            title="Retail & eCommerce" 
            faqs={retailerFAQs} 
            emoji="🛍️" 
            email={retailEmail}
            setEmail={setRetailEmail}
            handleSubmit={createHandleSubmit(retailEmail, setRetailEmail)}
            ctaText="Ready to transform your product content?"
          />
          
          <FAQSection 
            title="Travel & Tourism" 
            faqs={travelTourismFAQs} 
            emoji="✈️" 
            email={travelEmail}
            setEmail={setTravelEmail}
            handleSubmit={createHandleSubmit(travelEmail, setTravelEmail)}
            ctaText="Transform your tourism content at scale?"
          />
          
          <FAQSection 
            title="Media & Entertainment" 
            faqs={mediaEntertainmentFAQs} 
            emoji="🎬" 
            email={mediaEmail}
            setEmail={setMediaEmail}
            handleSubmit={createHandleSubmit(mediaEmail, setMediaEmail)}
            ctaText="Unlock your content's revenue potential?"
          />

          <FAQSection 
            title="Finance" 
            faqs={financeFAQs} 
            emoji="💰" 
            email={financeEmail}
            setEmail={setFinanceEmail}
            handleSubmit={createHandleSubmit(financeEmail, setFinanceEmail)}
            ctaText="Ready to streamline your financial communications?"
          />

          <FAQSection 
            title="Industrial & Manufacturing" 
            faqs={industrialManufacturingFAQs} 
            emoji="🏭" 
            email={industrialEmail}
            setEmail={setIndustrialEmail}
            handleSubmit={createHandleSubmit(industrialEmail, setIndustrialEmail)}
            ctaText="Transform your technical content pipeline?"
          />

          <FAQSection 
            title="Healthcare & Medical" 
            faqs={healthcareMedicalFAQs} 
            emoji="🏥" 
            email={healthcareEmail}
            setEmail={setHealthcareEmail}
            handleSubmit={createHandleSubmit(healthcareEmail, setHealthcareEmail)}
            ctaText="Ready to enhance your medical communications?"
          />

          <FAQSection 
            title="Real Estate" 
            faqs={realEstateFAQs} 
            emoji="🏠" 
            email={realEstateEmail}
            setEmail={setRealEstateEmail}
            handleSubmit={createHandleSubmit(realEstateEmail, setRealEstateEmail)}
            ctaText="Transform your property marketing content?"
          />

          <FAQSection 
            title="Automotive" 
            faqs={automotiveFAQs} 
            emoji="🚗" 
            email={automotiveEmail}
            setEmail={setAutomotiveEmail}
            handleSubmit={createHandleSubmit(automotiveEmail, setAutomotiveEmail)}
            ctaText="Ready to accelerate your vehicle content?"
          />

          <FAQSection 
            title="Investor Communications" 
            faqs={investorCommunicationsFAQs} 
            emoji="📈" 
            email={investorEmail}
            setEmail={setInvestorEmail}
            handleSubmit={createHandleSubmit(investorEmail, setInvestorEmail)}
            ctaText="Transform your investor communications?"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
