
import React from 'react';
import FAQSection from './FAQSection';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';
import { 
  retailerFAQs, 
  travelTourismFAQs, 
  mediaEntertainmentFAQs 
} from './constants/faqData';

const HowItWorksFAQs = () => {
  const retailSubmission = useEmailSubmission();
  const tourismSubmission = useEmailSubmission();
  const mediaSubmission = useEmailSubmission();

  return (
    <section className="py-8 sm:py-12 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
        </div>
        
        <FAQSection 
          title="Retail & eCommerce" 
          faqs={retailerFAQs} 
          emoji="🛍️" 
          email={retailSubmission.email}
          setEmail={retailSubmission.setEmail}
          handleSubmit={retailSubmission.handleSubmit}
          ctaText="Ready to transform your product content?"
        />
        
        <FAQSection 
          title="Travel & Tourism" 
          faqs={travelTourismFAQs} 
          emoji="✈️" 
          email={tourismSubmission.email}
          setEmail={tourismSubmission.setEmail}
          handleSubmit={tourismSubmission.handleSubmit}
          ctaText="Transform your tourism content at scale?"
        />
        
        <FAQSection 
          title="Media & Entertainment" 
          faqs={mediaEntertainmentFAQs} 
          emoji="🎬" 
          email={mediaSubmission.email}
          setEmail={mediaSubmission.setEmail}
          handleSubmit={mediaSubmission.handleSubmit}
          ctaText="Unlock your content's revenue potential?"
        />
      </div>
    </section>
  );
};

export default HowItWorksFAQs;
