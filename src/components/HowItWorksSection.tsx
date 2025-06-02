
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, Search, Edit, Palette, Rocket, BarChart3, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  tryItEmail: string;
  setTryItEmail: (email: string) => void;
  handleTryItSubmit: (e: React.FormEvent) => void;
}

const HowItWorksSection = ({ tryItEmail, setTryItEmail, handleTryItSubmit }: HowItWorksSectionProps) => {
  const steps = [
    { step: '1', title: 'Upload', desc: 'CSV', icon: Upload },
    { step: '2', title: 'Clean', desc: 'fix, format, fill', icon: Search },
    { step: '3', title: 'Enrich', desc: 'reviews, reasons to buy, consumer benefits, SEO, tags, images', icon: Edit },
    { step: '4', title: 'Create', desc: 'PDPs, emails, FAQs, training, social tiles', icon: Palette },
    { step: '5', title: 'Publish', desc: 'into CSV files, Shopify, CMS, DAM, PIM, marketplace', icon: Rocket },
    { step: '6', title: 'Optimise', desc: 'analyse, test, iterate', icon: BarChart3 }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How One SKU Becomes a Sales Machine</h2>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-6 p-6 bg-muted/30 rounded-lg">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                {step.step}
              </div>
              <step.icon className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
              {index < 5 && <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto" />}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <form onSubmit={handleTryItSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={tryItEmail}
                onChange={(e) => setTryItEmail(e.target.value)}
                className="h-12 text-lg"
                required
              />
              <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90" disabled={!tryItEmail}>
                Try It Yourself <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Upload your product CSV via magic link
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
