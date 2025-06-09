
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

// Lazy load components for better performance
const EnterpriseHeroSection = React.lazy(() => import('@/components/EnterpriseHeroSection'));
const EnterpriseProblemSection = React.lazy(() => import('@/components/EnterpriseProblemSection'));
const OutcomesSection = React.lazy(() => import('@/components/OutcomesSection'));
const MagicSection = React.lazy(() => import('@/components/MagicSection'));
const FinalCTASection = React.lazy(() => import('@/components/FinalCTASection'));
const StickyDemoBar = React.lazy(() => import('@/components/StickyDemoBar'));

const Index = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleBookDemo = useCallback(() => {
    // In a real app, this would open a booking widget or redirect to a booking page
    toast.success("Demo booking will open - integrating with your booking system");
    console.log('Book demo clicked');
  }, []);

  const handleTryFree = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast.success("Starting your free trial...");
    
    const redirect = () => navigate('/upload');
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setTimeout(redirect, 500));
    } else {
      setTimeout(redirect, 500);
    }
  }, [email, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <React.Suspense fallback={<div className="h-4 bg-muted animate-pulse" />}>
        <StickyDemoBar onBookDemo={handleBookDemo} />
        <EnterpriseHeroSection 
          email={email} 
          setEmail={setEmail} 
          onBookDemo={handleBookDemo}
          onTryFree={handleTryFree}
        />
        <EnterpriseProblemSection onBookDemo={handleBookDemo} />
        <OutcomesSection onBookDemo={handleBookDemo} />
        <MagicSection onBookDemo={handleBookDemo} />
        <FinalCTASection 
          email={email}
          setEmail={setEmail}
          onBookDemo={handleBookDemo}
          onTryFree={handleTryFree}
        />
      </React.Suspense>
    </div>
  );
};

export default Index;
