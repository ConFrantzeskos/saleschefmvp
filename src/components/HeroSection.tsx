
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const HeroSection = ({ email, setEmail, handleSubmit }: HeroSectionProps) => {
  return (
    <section className="py-20 px-4 text-center bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="w-16 h-16 mx-auto mb-8">
          <img 
            src="/lovable-uploads/0b8c5ffe-edc7-4ea5-af28-bc947207ee19.png" 
            alt="SalesChef Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-6">
          From Raw Specs to a Feast of <br />
          <span className="text-gradient-brand">Sales-Ready Content</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          SalesChef transforms messy product data - no matter where it lives - into persuasive, 
          high-converting content for every channel.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
          <div className="flex gap-3 p-2 bg-card rounded-2xl shadow-soft border border-border">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-base border-0 bg-transparent focus-visible:ring-0 flex-1"
              required
            />
            <Button 
              type="submit" 
              className="h-12 px-6 bg-gradient-brand hover:opacity-90 transition-opacity shadow-brand" 
              disabled={!email}
            >
              Watch it Cook <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </form>
        
        <p className="text-sm text-muted-foreground">
          Upload a CSV. Watch your data transform into content magic.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
