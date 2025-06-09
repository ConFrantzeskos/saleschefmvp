
import React, { useState, useCallback, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor';
import LoadingSpinner from '@/components/LoadingSpinner';
import { ErrorBoundary } from 'react-error-boundary';

// Optimized lazy loading with preloading
const HeroSection = React.lazy(() => 
  import('@/components/HeroSection').then(module => {
    // Preload next critical component
    import('@/components/ProblemSection');
    return module;
  })
);

const ProblemSection = React.lazy(() => 
  import('@/components/ProblemSection').then(module => {
    import('@/components/IntroducingSalesChef');
    return module;
  })
);

const IntroducingSalesChef = React.lazy(() => 
  import('@/components/IntroducingSalesChef').then(module => {
    import('@/components/ResultsSection');
    return module;
  })
);

const ResultsSection = React.lazy(() => 
  import('@/components/ResultsSection').then(module => {
    import('@/components/TrustSection');
    return module;
  })
);

const TrustSection = React.lazy(() => 
  import('@/components/TrustSection').then(module => {
    import('@/components/CTASection');
    return module;
  })
);

const CTASection = React.lazy(() => 
  import('@/components/CTASection').then(module => {
    import('@/components/Footer');
    return module;
  })
);

const Footer = React.lazy(() => import('@/components/Footer'));
const LiveTracker = React.lazy(() => import('@/components/LiveTracker'));
const IndustryCallout = React.lazy(() => import('@/components/IndustryCallout'));

// Optimized fallback component
const SectionFallback = ({ height = "h-32" }: { height?: string }) => (
  <div className={`${height} bg-muted/30 animate-pulse rounded-lg mx-4 sm:mx-6`} />
);

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center p-4">
    <div className="text-center max-w-md">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <p className="text-muted-foreground mb-4">
        {import.meta.env.DEV ? error.message : 'Please try refreshing the page'}
      </p>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
      >
        Try again
      </button>
    </div>
  </div>
);

const Index = () => {
  const [email, setEmail] = useState('');
  const [tryItEmail, setTryItEmail] = useState('');
  const navigate = useNavigate();
  const { measureAsync } = usePerformanceMonitor('IndexPage');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    await measureAsync(async () => {
      toast.success("Welcome to SalesChef! Let's transform your product data.");
      
      // Optimize navigation with requestIdleCallback
      const redirect = () => navigate('/upload');
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setTimeout(redirect, 300));
      } else {
        setTimeout(redirect, 300);
      }
    }, 'hero-form-submission');
  }, [email, navigate, measureAsync]);

  const handleTryItSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tryItEmail) return;
    
    await measureAsync(async () => {
      toast.success("Welcome to SalesChef! Let's get started with your upload.");
      
      const redirect = () => navigate('/upload');
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setTimeout(redirect, 300));
      } else {
        setTimeout(redirect, 300);
      }
    }, 'cta-form-submission');
  }, [tryItEmail, navigate, measureAsync]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="min-h-screen bg-background">
        <Suspense fallback={<SectionFallback height="h-8" />}>
          <LiveTracker />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="h-96" />}>
          <HeroSection email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="h-64" />}>
          <ProblemSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="h-80" />}>
          <IntroducingSalesChef />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="h-64" />}>
          <ResultsSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="h-48" />}>
          <IndustryCallout />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="h-64" />}>
          <TrustSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="h-64" />}>
          <CTASection 
            tryItEmail={tryItEmail} 
            setTryItEmail={setTryItEmail} 
            handleSubmitWithRedirect={handleTryItSubmit} 
          />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="h-32" />}>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default Index;
