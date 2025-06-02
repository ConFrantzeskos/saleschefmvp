
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
    <section className="section-spacing">
      <div className="content-width">
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-br from-muted to-muted/50 rounded-3xl p-12 max-w-2xl mx-auto border border-border shadow-medium">
            <h3 className="text-subsection-title mb-6 text-balance">Ready to Transform Your Product Data?</h3>
            <p className="text-body text-muted-foreground mb-10 leading-relaxed">
              Upload your product CSV and see the magic happen in real-time
            </p>
            <form onSubmit={handleSubmitWithRedirect} className="max-w-md mx-auto">
              <div className="form-container">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={tryItEmail}
                  onChange={(e) => setTryItEmail(e.target.value)}
                  className="h-14 text-base border-0 bg-transparent focus-visible:ring-0 flex-1"
                  required
                />
                <Button 
                  type="submit" 
                  className="h-14 px-8 font-semibold btn-accent mt-3 w-full" 
                  disabled={!tryItEmail}
                >
                  Try It Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </form>
            <p className="text-sm text-muted-foreground mt-6">
              Get instant access via magic link • No setup required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
