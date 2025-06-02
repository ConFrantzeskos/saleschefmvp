
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Index = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitted(true);
    toast.success("Welcome to SalesChef! Let's transform your product data.");
    
    setTimeout(() => {
      navigate('/upload');
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center animate-fade-in">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-8 h-8 bg-primary rounded-full animate-pulse" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Ready to cook up some content?</h2>
          <p className="text-muted-foreground">Redirecting you to upload your first file...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="w-16 h-16 mx-auto mb-8">
            <img 
              src="/lovable-uploads/dd8adff2-b007-4c1b-b750-d8b7322cf6de.png" 
              alt="SalesChef Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            Turn Raw Specs into Sales-Ready Content
          </h1>
          <p className="text-xl text-muted-foreground">
            Drop your first file. Watch the magic.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 text-center text-lg"
            required
          />
          <Button 
            type="submit" 
            className="w-full h-12 text-lg font-medium"
            disabled={!email}
          >
            Let's Start
          </Button>
        </form>

        <p className="text-sm text-muted-foreground mt-8">
          One messy SKU in. A full, sales-ready feast out.
        </p>
      </div>
    </div>
  );
};

export default Index;
