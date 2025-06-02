
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
    <section className="px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
      <div className="content-width">
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-xl sm:max-w-2xl mx-auto border border-border shadow-medium">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold mb-4 sm:mb-6 text-balance">Ready to Transform Your Product Data?</h3>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
              Upload your product CSV and see the magic happen in real-time
            </p>
            <form onSubmit={handleSubmitWithRedirect} className="max-w-sm sm:max-w-md mx-auto">
              <div className="form-container">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={tryItEmail}
                  onChange={(e) => setTryItEmail(e.target.value)}
                  className="h-12 sm:h-14 text-sm sm:text-base border-0 bg-transparent focus-visible:ring-0 flex-1"
                  required
                />
                <Button 
                  type="submit" 
                  className="h-12 sm:h-14 px-6 sm:px-8 font-semibold btn-accent mt-3 w-full text-sm sm:text-base" 
                  disabled={!tryItEmail}
                >
                  Try It Free <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </form>
            <p className="text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">
              Get instant access via magic link • No setup required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
