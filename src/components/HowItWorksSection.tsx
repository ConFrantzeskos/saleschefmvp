
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Upload, Search, Edit, Palette, Rocket, BarChart3, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  tryItEmail: string;
  setTryItEmail: (email: string) => void;
  handleTryItSubmit: (e: React.FormEvent) => void;
}

const HowItWorksSection = ({ tryItEmail, setTryItEmail, handleTryItSubmit }: HowItWorksSectionProps) => {
  const steps = [
    { step: '1', title: 'Share', desc: 'your work email so we can understand your tech stack', icon: Mail, color: 'bg-primary', hasEmailInput: true },
    { step: '2', title: 'Upload', desc: 'CSV', icon: Upload, color: 'bg-emerald-500' },
    { step: '3', title: 'Clean', desc: 'fix, format, fill', icon: Search, color: 'bg-purple-500' },
    { step: '4', title: 'Enrich', desc: 'reviews, reasons to buy, consumer benefits, SEO, tags, images', icon: Edit, color: 'bg-blue-500' },
    { step: '5', title: 'Create', desc: 'PDPs, emails, FAQs, training, social tiles', icon: Palette, color: 'bg-pink-500' },
    { step: '6', title: 'Publish', desc: 'into CSV files, Shopify, CMS, DAM, PIM, marketplace', icon: Rocket, color: 'bg-indigo-500' },
    { step: '7', title: 'Optimise', desc: 'analyse, test, iterate', icon: BarChart3, color: 'bg-orange-500' }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-balance">
            How One SKU Becomes a Sales Machine
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform raw product data into high-converting content across every channel
          </p>
        </div>
        
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-primary/30 to-border hidden lg:block" />
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                  <div className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6 lg:justify-start justify-start">
                      <div className={`w-10 h-10 ${step.color} text-white rounded-xl flex items-center justify-center font-semibold text-sm shadow-soft group-hover:scale-105 transition-transform`}>
                        {step.step}
                      </div>
                      <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                        <step.icon className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{step.desc}</p>
                    
                    {step.hasEmailInput && (
                      <form onSubmit={handleTryItSubmit} className="flex gap-3">
                        <Input
                          type="email"
                          placeholder="Enter your work email"
                          value={tryItEmail}
                          onChange={(e) => setTryItEmail(e.target.value)}
                          className="flex-1 h-11"
                          required
                        />
                        <Button type="submit" size="default" className="h-11 px-6" disabled={!tryItEmail}>
                          Start
                        </Button>
                      </form>
                    )}
                  </div>
                </div>
                
                {/* Center circle for larger screens */}
                <div className="hidden lg:flex w-16 h-16 bg-card border-2 border-primary/20 rounded-2xl items-center justify-center relative z-10 shadow-soft">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-primary/5 rounded-3xl p-10 max-w-2xl mx-auto border border-primary/10">
            <h3 className="text-2xl font-display font-semibold mb-4 text-balance">Ready to Transform Your Product Data?</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Upload your product CSV and see the magic happen in real-time
            </p>
            <form onSubmit={handleTryItSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={tryItEmail}
                onChange={(e) => setTryItEmail(e.target.value)}
                className="h-12 text-base flex-1"
                required
              />
              <Button type="submit" size="lg" className="h-12 px-8 font-semibold" disabled={!tryItEmail}>
                Try It Free <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-4">
              Get instant access via magic link • No setup required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
