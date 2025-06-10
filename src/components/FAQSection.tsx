
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  faqs: FAQ[];
  emoji: string;
  ctaText: string;
}

const FAQSection = ({ title, faqs, emoji, ctaText }: FAQSectionProps) => {
  const { email, setEmail, handleSubmit } = useEmailSubmission();

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-3xl">{emoji}</span>
        {title}
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-background rounded-lg p-6 border">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {index + 1}
              </span>
              {faq.question}
            </h3>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
      
      {/* Email Capture CTA */}
      <div className="mt-8 p-6 bg-primary/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">{ctaText}</h3>
        <p className="text-muted-foreground mb-4">
          See SalesChef in action with a personalized demo for your industry
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
          <Input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit" disabled={!email}>
            Book a Demo <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FAQSection;
