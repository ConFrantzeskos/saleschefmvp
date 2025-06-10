
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { ErrorBoundary } from 'react-error-boundary';
import Header from "./components/Header";
import SecurityBoundary from "./components/SecurityBoundary";
import AppRoutes from "./components/AppRoutes";
import AppErrorFallback from "./components/AppErrorBoundary";
import AppLoading from "./components/AppLoading";
import { queryClient } from "./config/queryClient";
import { usePerformanceMonitor } from "./hooks/usePerformanceMonitor";

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
        <Suspense fallback={<AppLoading />}>
          <AppRoutes />
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
