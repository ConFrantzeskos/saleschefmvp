
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
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
          <h2 className="text-2xl font-display font-semibold mb-2">Ready to cook up some content?</h2>
          <p className="text-muted-foreground">Redirecting you to upload your first file...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      <ProblemSection />
      
      {/* How SalesChef Works CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted/30 to-muted/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Meet the AI Agents Behind the Magic</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            SalesChef is powered by a team of specialized AI agents, each trained to transform 
            raw product specs into full-funnel, high-performance content.
          </p>
          <Link to="/how-it-works">
            <Button size="lg" className="bg-gradient-brand hover:opacity-90 transition-opacity shadow-brand">
              See How SalesChef Works
            </Button>
          </Link>
        </div>
      </section>

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
