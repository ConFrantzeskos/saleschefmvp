
import React from 'react';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
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
            ctaText="Ready to transform your content with SalesChef?"
          />
          
          <FAQSection 
            title="Retail & eCommerce" 
            faqs={retailerFAQs} 
            emoji="🛍️" 
            ctaText="Ready to transform your product content?"
          />
          
          <FAQSection 
            title="Travel & Tourism" 
            faqs={travelTourismFAQs} 
            emoji="✈️" 
            ctaText="Transform your tourism content at scale?"
          />
          
          <FAQSection 
            title="Media & Entertainment" 
            faqs={mediaEntertainmentFAQs} 
            emoji="🎬" 
            ctaText="Unlock your content's revenue potential?"
          />

          <FAQSection 
            title="Finance" 
            faqs={financeFAQs} 
            emoji="💰" 
            ctaText="Ready to streamline your financial communications?"
          />

          <FAQSection 
            title="Industrial & Manufacturing" 
            faqs={industrialManufacturingFAQs} 
            emoji="🏭" 
            ctaText="Transform your technical content pipeline?"
          />

          <FAQSection 
            title="Healthcare & Medical" 
            faqs={healthcareMedicalFAQs} 
            emoji="🏥" 
            ctaText="Ready to enhance your medical communications?"
          />

          <FAQSection 
            title="Real Estate" 
            faqs={realEstateFAQs} 
            emoji="🏠" 
            ctaText="Transform your property marketing content?"
          />

          <FAQSection 
            title="Automotive" 
            faqs={automotiveFAQs} 
            emoji="🚗" 
            ctaText="Ready to accelerate your vehicle content?"
          />

          <FAQSection 
            title="Investor Communications" 
            faqs={investorCommunicationsFAQs} 
            emoji="📈" 
            ctaText="Transform your investor communications?"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
