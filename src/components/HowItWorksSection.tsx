import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Search, Edit, Palette, Rocket, BarChart3, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  tryItEmail: string;
  setTryItEmail: (email: string) => void;
  handleTryItSubmit: (e: React.FormEvent) => void;
}

const HowItWorksSection = ({ tryItEmail, setTryItEmail, handleTryItSubmit }: HowItWorksSectionProps) => {
  const steps = [
    { step: '1', title: 'Share', desc: 'your work email so we can understand your tech stack', icon: Mail, color: 'bg-blue-500' },
    { step: '2', title: 'Clean', desc: 'fix, format, fill', icon: Search, color: 'bg-green-500' },
    { step: '3', title: 'Enrich', desc: 'reviews, reasons to buy, consumer benefits, SEO, tags, images', icon: Edit, color: 'bg-purple-500' },
    { step: '4', title: 'Create', desc: 'PDPs, emails, FAQs, training, social tiles', icon: Palette, color: 'bg-orange-500' },
    { step: '5', title: 'Publish', desc: 'into CSV files, Shopify, CMS, DAM, PIM, marketplace', icon: Rocket, color: 'bg-red-500' },
    { step: '6', title: 'Optimise', desc: 'analyse, test, iterate', icon: BarChart3, color: 'bg-indigo-500' }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How One SKU Becomes a Sales Machine</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform raw product data into high-converting content across every channel
          </p>
        </div>
        
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 hidden lg:block" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                  <div className="bg-background rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3 lg:justify-start justify-start">
                      <div className={`w-8 h-8 ${step.color} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
                        {step.step}
                      </div>
                      <step.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
                
                {/* Center circle for larger screens */}
                <div className="hidden lg:flex w-16 h-16 bg-background border-4 border-primary/20 rounded-full items-center justify-center relative z-10">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Product Data?</h3>
            <p className="text-muted-foreground mb-6">
              Upload your product CSV and see the magic happen in real-time
            </p>
            <form onSubmit={handleTryItSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={tryItEmail}
                onChange={(e) => setTryItEmail(e.target.value)}
                className="h-12 text-base flex-1"
                required
              />
              <Button type="submit" size="lg" className="h-12 px-8" disabled={!tryItEmail}>
                Try It Free <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-3">
              Get instant access via magic link • No setup required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
