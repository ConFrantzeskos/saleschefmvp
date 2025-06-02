
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import AgentsSection from '@/components/AgentsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ResultsSection from '@/components/ResultsSection';
import TrustSection from '@/components/TrustSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  const [email, setEmail] = useState('');
  const [tryItEmail, setTryItEmail] = useState('');
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

  const handleTryItSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tryItEmail) return;
    
    // Extract domain from email to determine CMS
    const domain = tryItEmail.split('@')[1];
    
    toast.success(`Magic link sent to ${tryItEmail}! We're analyzing ${domain} to understand your CMS setup.`);
    
    // Simulate magic link process and CMS detection
    setTimeout(() => {
      toast.info(`Detected your setup! Check your email for the magic link to access your personalized upload portal.`);
    }, 2000);
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
    <div className="min-h-screen bg-background">
      <HeroSection email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      <ProblemSection />
      <AgentsSection />
      <HowItWorksSection 
        tryItEmail={tryItEmail} 
        setTryItEmail={setTryItEmail} 
        handleTryItSubmit={handleTryItSubmit} 
      />
      <ResultsSection />
      <TrustSection />
      <CTASection email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Index;
