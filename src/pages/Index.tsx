
import React, { useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Lazy load components for better performance
const HeroSection = React.lazy(() => import('@/components/HeroSection'));
const ProblemSection = React.lazy(() => import('@/components/ProblemSection'));
const ResultsSection = React.lazy(() => import('@/components/ResultsSection'));
const TrustSection = React.lazy(() => import('@/components/TrustSection'));
const CTASection = React.lazy(() => import('@/components/CTASection'));
const Footer = React.lazy(() => import('@/components/Footer'));
const LiveTracker = React.lazy(() => import('@/components/LiveTracker'));

const Index = () => {
  const [email, setEmail] = useState('');
  const [tryItEmail, setTryItEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast.success("Welcome to SalesChef! Let's transform your product data.");
    
    // Use requestIdleCallback for better performance
    const redirect = () => navigate('/upload');
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setTimeout(redirect, 500));
    } else {
      setTimeout(redirect, 500);
    }
  }, [email, navigate]);

  const handleTryItSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!tryItEmail) return;
    
    toast.success("Welcome to SalesChef! Let's get started with your upload.");
    
    const redirect = () => navigate('/upload');
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setTimeout(redirect, 500));
    } else {
      setTimeout(redirect, 500);
    }
  }, [tryItEmail, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <React.Suspense fallback={<div className="h-4 bg-muted animate-pulse" />}>
        <LiveTracker />
        <HeroSection email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
        <ProblemSection />
        <ResultsSection />
        <TrustSection />
        <CTASection 
          tryItEmail={tryItEmail} 
          setTryItEmail={setTryItEmail} 
          handleSubmitWithRedirect={handleTryItSubmit} 
        />
        <Footer />
      </React.Suspense>
    </div>
  );
};

export default Index;
