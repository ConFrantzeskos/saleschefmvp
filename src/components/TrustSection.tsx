
import React from 'react';
import { Check } from 'lucide-react';

const TrustSection = () => {
  const features = [
    'Works with your existing tech stack',
    'Secure, compliant, and scalable',
    'Transform content in minutes - not months'
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Built for Enterprise Retail. Loved by Lean Teams.</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 justify-center">
              <Check className="w-5 h-5 text-green-600" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <p className="text-muted-foreground italic">
          (Future placeholder for client logos, case study links, testimonials)
        </p>
      </div>
    </section>
  );
};

export default TrustSection;
