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
    { step: '1', title: 'Share', desc: 'your work email and we\'ll auto-detect your tech stack', icon: Mail, color: 'bg-primary', hasEmailInput: true },
    { 
      step: '2', 
      title: 'Upload', 
      desc: 'CSV', 
      icon: Upload, 
      color: 'bg-accent',
      hasLogos: true,
      logoType: 'fileTypes'
    },
    { 
      step: '3', 
      title: 'Clean', 
      desc: 'fix, format, fill', 
      icon: Search, 
      color: 'bg-secondary',
      hasLogos: true,
      logoType: 'cleaningActions'
    },
    { 
      step: '4', 
      title: 'Enrich', 
      desc: 'reviews, reasons to buy, consumer benefits, SEO, tags, images', 
      icon: Edit, 
      color: 'bg-primary',
      hasLogos: true,
      logoType: 'sources'
    },
    { 
      step: '5', 
      title: 'Create', 
      desc: 'PDPs, emails, FAQs, training, social tiles', 
      icon: Palette, 
      color: 'bg-accent',
      hasLogos: true,
      logoType: 'contentTypes'
    },
    { 
      step: '6', 
      title: 'Publish', 
      desc: 'into CSV files, Shopify, CMS, DAM, PIM, marketplace', 
      icon: Rocket, 
      color: 'bg-secondary',
      hasLogos: true,
      logoType: 'integrations'
    },
    { 
      step: '7', 
      title: 'Optimise', 
      desc: 'analyse, test, iterate', 
      icon: BarChart3, 
      color: 'bg-primary',
      hasLogos: true,
      logoType: 'analytics'
    }
  ];

  const integrationLogos = [
    { name: 'Shopify', logo: '🛍️' },
    { name: 'Amazon', logo: '📦' },
    { name: 'CSV', logo: '📊' },
    { name: 'WordPress', logo: '📝' },
    { name: 'Magento', logo: '🏪' },
    { name: 'BigCommerce', logo: '🛒' }
  ];

  const sourceLogos = [
    { name: 'Google', logo: '🔍' },
    { name: 'Reviews', logo: '⭐' },
    { name: 'Social', logo: '📱' },
    { name: 'Amazon', logo: '📦' },
    { name: 'Images', logo: '🖼️' },
    { name: 'SEO Data', logo: '📈' }
  ];

  const fileTypeLogos = [
    { name: 'CSV', logo: '📊' },
    { name: 'Excel', logo: '📗' },
    { name: 'PDF', logo: '📄' },
    { name: 'Images', logo: '🖼️' },
    { name: 'XML', logo: '📋' },
    { name: 'JSON', logo: '📄' }
  ];

  const cleaningActionLogos = [
    { name: 'Dedupe', logo: '🔄' },
    { name: 'Format', logo: '✨' },
    { name: 'Validate', logo: '✅' },
    { name: 'Fill Gaps', logo: '🔧' },
    { name: 'Standardize', logo: '📏' },
    { name: 'Categorize', logo: '🏷️' }
  ];

  const contentTypeLogos = [
    { name: 'PDPs', logo: '🛒' },
    { name: 'Emails', logo: '📧' },
    { name: 'FAQs', logo: '❓' },
    { name: 'Social', logo: '📱' },
    { name: 'Training', logo: '🎓' },
    { name: 'Banners', logo: '🖼️' }
  ];

  const analyticsLogos = [
    { name: 'A/B Test', logo: '🧪' },
    { name: 'Analytics', logo: '📊' },
    { name: 'Insights', logo: '💡' },
    { name: 'Reports', logo: '📈' },
    { name: 'Monitor', logo: '👁️' },
    { name: 'Optimize', logo: '🎯' }
  ];

  const getLogosForType = (logoType: string) => {
    switch (logoType) {
      case 'integrations': return integrationLogos;
      case 'sources': return sourceLogos;
      case 'fileTypes': return fileTypeLogos;
      case 'cleaningActions': return cleaningActionLogos;
      case 'contentTypes': return contentTypeLogos;
      case 'analytics': return analyticsLogos;
      default: return [];
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-balance">
            How One SKU Becomes a Sales Machine
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            SalesChef's AI agents instantly transform messy product specs into persuasive, multi-channel content that converts
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
                  <div className="bg-card rounded-3xl p-8 shadow-soft border border-border hover:shadow-medium transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-6 lg:justify-start justify-start">
                      <div className={`w-12 h-12 ${step.color} text-white rounded-2xl flex items-center justify-center font-display font-bold text-sm shadow-soft group-hover:scale-105 transition-transform`}>
                        {step.step}
                      </div>
                      <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-xl mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{step.desc}</p>
                    
                    {step.hasLogos && (
                      <div className="mb-6">
                        <div className="grid grid-cols-3 gap-3">
                          {getLogosForType(step.logoType!).map((item, logoIndex) => (
                            <div key={logoIndex} className="flex flex-col items-center p-3 bg-background rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                              <span className="text-2xl mb-1">{item.logo}</span>
                              <span className="text-xs text-muted-foreground text-center">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {step.hasEmailInput && (
                      <form onSubmit={handleTryItSubmit} className="flex gap-3 p-2 bg-background rounded-2xl border border-border">
                        <Input
                          type="email"
                          placeholder="Enter your work email"
                          value={tryItEmail}
                          onChange={(e) => setTryItEmail(e.target.value)}
                          className="flex-1 h-11 border-0 bg-transparent focus-visible:ring-0"
                          required
                        />
                        <Button type="submit" size="default" className="h-11 px-6 bg-primary hover:bg-primary/90" disabled={!tryItEmail}>
                          Start
                        </Button>
                      </form>
                    )}
                  </div>
                </div>
                
                {/* Center circle for larger screens */}
                <div className="hidden lg:flex w-16 h-16 bg-card border-2 border-primary/20 rounded-3xl items-center justify-center relative z-10 shadow-soft">
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
          <div className="bg-gradient-to-br from-muted to-muted/50 rounded-3xl p-10 max-w-2xl mx-auto border border-border">
            <h3 className="text-2xl font-display font-bold mb-4 text-balance">Ready to Transform Your Product Data?</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Upload your product CSV and see the magic happen in real-time
            </p>
            <form onSubmit={handleTryItSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex gap-3 p-2 bg-card rounded-2xl border border-border flex-1">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={tryItEmail}
                  onChange={(e) => setTryItEmail(e.target.value)}
                  className="h-12 text-base border-0 bg-transparent focus-visible:ring-0 flex-1"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="h-12 px-8 font-semibold bg-gradient-accent hover:opacity-90 transition-opacity shadow-brand" 
                  disabled={!tryItEmail}
                >
                  Try It Free <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
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
