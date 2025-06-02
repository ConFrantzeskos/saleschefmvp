
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  tryItEmail: string;
  setTryItEmail: (email: string) => void;
  handleSubmitWithRedirect: (e: React.FormEvent) => void;
}

const CTASection = ({ tryItEmail, setTryItEmail, handleSubmitWithRedirect }: CTASectionProps) => {
  return (
    <div className="mt-24 text-center">
      <div className="bg-gradient-to-br from-muted to-muted/50 rounded-3xl p-10 max-w-2xl mx-auto border border-border">
        <h3 className="text-2xl font-display font-bold mb-4 text-balance">Ready to Transform Your Product Data?</h3>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Upload your product CSV and see the magic happen in real-time
        </p>
        <form onSubmit={handleSubmitWithRedirect} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
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
  );
};

export default CTASection;
