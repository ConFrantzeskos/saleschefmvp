
import React, { Suspense } from 'react';
import { usePerformanceMonitor } from '@/hooks/usePerformanceMonitor';
import LoadingSpinner from '@/components/LoadingSpinner';
import { ErrorBoundary } from 'react-error-boundary';

// Optimized lazy loading with strategic preloading and smaller bundles
const HeroSection = React.lazy(() => 
  import('@/components/HeroSection').then(module => {
    // Preload only the next critical component
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
    import('@/components/IndustryCallout');
    return module;
  })
);

const IndustryCallout = React.lazy(() => 
  import('@/components/IndustryCallout').then(module => {
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

// Optimized fallback components with better performance
const SectionFallback = React.memo(({ height = "h-32" }: { height?: string }) => (
  <div className={`${height} bg-muted/20 animate-pulse rounded-lg content-padding`} />
));

SectionFallback.displayName = 'SectionFallback';

// Error fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center content-padding">
    <div className="text-center content-width space-elements-md">
      <h2 className="text-section-title">Something went wrong</h2>
      <p className="text-body-large text-muted-foreground">
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
  const { measureAsync } = usePerformanceMonitor('IndexPage');

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="min-h-screen bg-background">
        <Suspense fallback={<SectionFallback height="section-spacing-xs" />}>
          <LiveTracker />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="section-spacing-xl" />}>
          <HeroSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="section-spacing-lg" />}>
          <ProblemSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="section-spacing-lg" />}>
          <IntroducingSalesChef />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="section-spacing-lg" />}>
          <ResultsSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="section-spacing-md" />}>
          <IndustryCallout />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="section-spacing-lg" />}>
          <TrustSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="section-spacing-lg" />}>
          <CTASection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="section-spacing-sm" />}>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default Index;
