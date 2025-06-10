
import React, { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';

const CTASection = memo(() => {
  const { email, setEmail, handleSubmit } = useEmailSubmission();

  return (
    <section className="section-spacing-lg content-padding">
      <div className="content-width">
        <div className="text-center animate-fade-in">
          <div className="card-feature max-w-2xl mx-auto space-elements-md">
            <h3 className="text-subsection-title text-balance">Transform your content</h3>
            <p className="text-body text-muted-foreground leading-relaxed">
              See how SalesChef can revolutionize your content pipeline with a personalized demo
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="form-container space-elements-sm">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input h-12"
                  required
                  autoComplete="email"
                />
                <Button 
                  type="submit" 
                  className="btn-accent w-full h-12" 
                  disabled={!email}
                >
                  Book a Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

CTASection.displayName = 'CTASection';

export default CTASection;
