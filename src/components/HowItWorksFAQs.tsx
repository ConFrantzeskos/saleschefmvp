
import React from 'react';
import FAQSection from './FAQSection';
import { 
  retailerFAQs, 
  travelTourismFAQs, 
  mediaEntertainmentFAQs 
} from './constants/faqData';

const HowItWorksFAQs = () => {
  return (
    <section className="content-padding section-spacing-md border-t">
      <div className="content-width space-elements-lg">
        <div className="text-center space-elements-sm">
          <h2 className="text-section-title text-balance">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-elements-lg">
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
        </div>
      </div>
    </section>
  );
};

export default HowItWorksFAQs;
