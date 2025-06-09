
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import SecurityBoundary from "./components/SecurityBoundary";

// Lazy load all pages for better performance
const Index = lazy(() => import("./pages/Index"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const FileUpload = lazy(() => import("./pages/FileUpload"));
const SchemaMapping = lazy(() => import("./pages/SchemaMapping"));
const CleaningValidation = lazy(() => import("./pages/CleaningValidation"));
const Enrichment = lazy(() => import("./pages/Enrichment"));
const EnrichmentReview = lazy(() => import("./pages/EnrichmentReview"));
const EnrichmentAssetReview = lazy(() => import("./pages/EnrichmentAssetReview"));
const ContentGeneration = lazy(() => import("./pages/ContentGeneration"));
const ReviewContent = lazy(() => import("./pages/ReviewContent"));
const AssetReview = lazy(() => import("./pages/AssetReview"));
const EnhanceAssets = lazy(() => import("./pages/EnhanceAssets"));
const Deploy = lazy(() => import("./pages/Deploy"));
const Optimization = lazy(() => import("./pages/Optimization"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: 1, // Reduce retries for better performance
      refetchOnWindowFocus: false, // Prevent unnecessary refetches
    },
  },
});

const App = () => (
  <SecurityBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header />
          <div className="pt-20">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
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
      </TooltipProvider>
    </QueryClientProvider>
  </SecurityBoundary>
);

export default App;
