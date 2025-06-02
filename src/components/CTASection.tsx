
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface CTASectionProps {
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const CTASection = ({ email, setEmail, handleSubmit }: CTASectionProps) => {
  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">You already have the specs. Let's make them sell.</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Upload your product CSV. See what SalesChef can do with your real products.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 text-lg"
              required
            />
            <Button type="submit" className="h-12 px-6 bg-primary hover:bg-primary/90" disabled={!email}>
              Get Started
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CTASection;
