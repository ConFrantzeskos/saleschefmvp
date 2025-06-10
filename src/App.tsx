
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { ErrorBoundary } from 'react-error-boundary';
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import SecurityBoundary from "./components/SecurityBoundary";
import ZapierConfig from "./components/ZapierConfig";
import { usePerformanceMonitor } from "./hooks/usePerformanceMonitor";

// Enhanced lazy loading with strategic preloading
const Index = lazy(() => import("./pages/Index"));
const HowItWorks = lazy(() => 
  import("./pages/HowItWorks").then(module => {
    // Preload related pages
    import("./pages/Pricing");
    return module;
  })
);
const Pricing = lazy(() => 
  import("./pages/Pricing").then(module => {
    import("./pages/FAQ");
    return module;
  })
);
const FAQ = lazy(() => import("./pages/FAQ"));

// Application flow pages with optimized loading
const FileUpload = lazy(() => 
  import("./pages/FileUpload").then(module => {
    import("./pages/SchemaMapping");
    return module;
  })
);
const SchemaMapping = lazy(() => 
  import("./pages/SchemaMapping").then(module => {
    import("./pages/CleaningValidation");
    return module;
  })
);
const CleaningValidation = lazy(() => 
  import("./pages/CleaningValidation").then(module => {
    import("./pages/Enrichment");
    return module;
  })
);
const Enrichment = lazy(() => 
  import("./pages/Enrichment").then(module => {
    import("./pages/EnrichmentReview");
    return module;
  })
);
const EnrichmentReview = lazy(() => 
  import("./pages/EnrichmentReview").then(module => {
    import("./pages/ContentGeneration");
    return module;
  })
);
const EnrichmentAssetReview = lazy(() => import("./pages/EnrichmentAssetReview"));
const ContentGeneration = lazy(() => 
  import("./pages/ContentGeneration").then(module => {
    import("./pages/ReviewContent");
    return module;
  })
);
const ReviewContent = lazy(() => import("./pages/ReviewContent"));
const AssetReview = lazy(() => import("./pages/AssetReview"));
const EnhanceAssets = lazy(() => import("./pages/EnhanceAssets"));
const Deploy = lazy(() => import("./pages/Deploy"));
const Optimization = lazy(() => import("./pages/Optimization"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Industry pages
const Retail = lazy(() => import("./pages/industries/Retail"));
const TravelTourism = lazy(() => import("./pages/industries/TravelTourism"));
const MediaEntertainment = lazy(() => import("./pages/industries/MediaEntertainment"));
const Finance = lazy(() => import("./pages/industries/Finance"));
const IndustrialManufacturing = lazy(() => import("./pages/industries/IndustrialManufacturing"));
const HealthcareMedical = lazy(() => import("./pages/industries/HealthcareMedical"));
const RealEstate = lazy(() => import("./pages/industries/RealEstate"));
const Automotive = lazy(() => import("./pages/industries/Automotive"));
const InvestorCommunications = lazy(() => import("./pages/industries/InvestorCommunications"));

// Enhanced QueryClient with better performance settings
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: (failureCount, error) => {
        // Smart retry logic
        if (failureCount >= 3) return false;
        if (error instanceof Error && error.message.includes('NetworkError')) {
          return failureCount < 2;
        }
        return true;
      },
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
      refetchOnReconnect: 'always',
    },
    mutations: {
      retry: 1,
    },
  },
});

// Enhanced error fallback component
const AppErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => {
  useEffect(() => {
    console.error('App Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong</h1>
        <p className="text-muted-foreground mb-6">
          {import.meta.env.DEV 
            ? `Error: ${error.message}` 
            : "We're experiencing technical difficulties. Please try again."
          }
        </p>
        <div className="space-x-4">
          <button
            onClick={resetErrorBoundary}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
};

// Enhanced loading component
const EnhancedLoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <LoadingSpinner />
      <p className="text-sm text-muted-foreground mt-4">Loading...</p>
    </div>
  </div>
);

const AppContent = () => {
  const { measureAsync } = usePerformanceMonitor('App');

  useEffect(() => {
    // Performance monitoring
    const logPerformanceMetrics = async () => {
      await measureAsync(async () => {
        // Track initial load performance
        if ('performance' in window && 'getEntriesByType' in performance) {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            console.log('[Performance] Page Load:', {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              totalTime: navigation.loadEventEnd - navigation.fetchStart,
            });
          }
        }
      }, 'initial-performance-tracking');
    };

    logPerformanceMetrics();
  }, [measureAsync]);

  return (
    <BrowserRouter>
      <Header />
      <div className="pt-20">
        <Suspense fallback={<EnhancedLoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/zapier-config" element={<ZapierConfig />} />
            
            {/* Industry Pages */}
            <Route path="/retail" element={<Retail />} />
            <Route path="/travel-tourism" element={<TravelTourism />} />
            <Route path="/media-entertainment" element={<MediaEntertainment />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/industrial-manufacturing" element={<IndustrialManufacturing />} />
            <Route path="/healthcare-medical" element={<HealthcareMedical />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/automotive" element={<Automotive />} />
            <Route path="/investor-communications" element={<InvestorCommunications />} />
            
            {/* Application Flow Pages */}
            <Route path="/upload" element={<FileUpload />} />
            <Route path="/mapping" element={<SchemaMapping />} />
            <Route path="/cleaning" element={<CleaningValidation />} />
            <Route path="/enrichment" element={<Enrichment />} />
            <Route path="/enrichment-review" element={<EnrichmentReview />} />
            <Route path="/enrichment-review/:id" element={<EnrichmentAssetReview />} />
            <Route path="/generation" element={<ContentGeneration />} />
            <Route path="/review" element={<ReviewContent />} />
            <Route path="/review/:id" element={<AssetReview />} />
            <Route path="/enhance" element={<EnhanceAssets />} />
            <Route path="/deploy" element={<Deploy />} />
            <Route path="/optimization" element={<Optimization />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

const App = () => (
  <ErrorBoundary FallbackComponent={AppErrorFallback}>
    <SecurityBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppContent />
        </TooltipProvider>
      </QueryClientProvider>
    </SecurityBoundary>
  </ErrorBoundary>
);

export default App;
