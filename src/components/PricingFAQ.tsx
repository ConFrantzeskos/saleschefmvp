
import React from 'react';
import { PageSection } from '@/components/layout/PageSection';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PricingFAQ = () => {
  const faqs = [
    {
      question: "Why can't I just see a price list?",
      answer: "SalesChef is not priced like a generic SaaS tool or a PIM. It's an AI-native agentic system tailored to your business. Pricing reflects the value we help you unlock — and that varies greatly across industries and use cases."
    },
    {
      question: "What industries does SalesChef serve?",
      answer: (
        <div>
          <p className="mb-4">While we work extensively in retail and ecommerce, SalesChef also powers:</p>
          <ul className="space-y-2 text-sm">
            {[
              'Travel & tourism content automation',
              'Media asset optimisation',
              'Financial services disclosures and marketing',
              'Manufacturing & industrial product data management',
              'Healthcare content compliance',
              'Automotive dealer networks',
              'Real estate content pipelines',
              'And more.'
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">Anywhere you have complex, high-volume, content-driven product or service information — SalesChef can help.</p>
        </div>
      )
    },
    {
      question: "Is there a minimum contract or commitment?",
      answer: "We'll scope this with you — most clients see rapid ROI and choose to expand usage once they experience the gains."
    }
  ];

  return (
    <PageSection background="muted">
      <div className="w-16 h-0.5 bg-border mx-auto mb-6" />
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center mb-8">
        FAQ
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {typeof faq.answer === 'string' ? (
                  <p className="text-muted-foreground">{faq.answer}</p>
                ) : (
                  <div className="text-muted-foreground">{faq.answer}</div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </PageSection>
  );
};

export default PricingFAQ;
