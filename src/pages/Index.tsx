
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import ResultsSection from '@/components/ResultsSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import OutputsSection from '@/components/OutputsSection';
import TrustSection from '@/components/TrustSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import LiveTracker from '@/components/LiveTracker';

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
      <LiveTracker />
      <HeroSection email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
      <ProblemSection />
      <ResultsSection />
      <BeforeAfterSection />
      <HowItWorksSection 
        tryItEmail={tryItEmail} 
        setTryItEmail={setTryItEmail} 
        handleTryItSubmit={handleTryItSubmit} 
      />
      <OutputsSection />
      <TrustSection />
      <CTASection 
        tryItEmail={tryItEmail} 
        setTryItEmail={setTryItEmail} 
        handleSubmitWithRedirect={handleTryItSubmit} 
      />
      <Footer />
    </div>
  );
};

export default Index;
