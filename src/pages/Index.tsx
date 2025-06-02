
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
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast.success("Welcome to SalesChef! Let's transform your product data.");
    
    // Redirect directly to upload page
    setTimeout(() => {
      navigate('/upload');
    }, 1000);
  };

  const handleTryItSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tryItEmail) return;
    
    toast.success("Welcome to SalesChef! Let's get started with your upload.");
    
    // Redirect directly to upload page
    setTimeout(() => {
      navigate('/upload');
    }, 1000);
  };

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
      <CTASection 
        tryItEmail={tryItEmail} 
        setTryItEmail={setTryItEmail} 
        handleSubmitWithRedirect={handleTryItSubmit} 
      />
    </div>
  );
};

export default Index;
