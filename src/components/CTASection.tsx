
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
    <section className="px-4 sm:px-6 py-8 lg:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl p-6 lg:p-8 border border-border shadow-medium">
            <h3 className="text-xl lg:text-2xl font-display font-bold mb-4 text-balance">
              Ready to turn your product specs into revenue?
            </h3>
            <form onSubmit={handleSubmitWithRedirect} className="max-w-md mx-auto mb-4">
              <div className="form-container">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={tryItEmail}
                  onChange={(e) => setTryItEmail(e.target.value)}
                  className="h-12 text-sm border-0 bg-transparent focus-visible:ring-0 flex-1"
                  required
                />
                <Button 
                  type="submit" 
                  className="h-12 px-6 font-semibold btn-accent mt-3 w-full text-sm" 
                  disabled={!tryItEmail}
                >
                  Try it free — Get instant access <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </form>
            <p className="text-xs text-muted-foreground">
              Book a Demo - watch SalesChef transform your content in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
