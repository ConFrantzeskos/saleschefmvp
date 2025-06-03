
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import FileUpload from "./pages/FileUpload";
import SchemaMapping from "./pages/SchemaMapping";
import CleaningValidation from "./pages/CleaningValidation";
import Enrichment from "./pages/Enrichment";
import EnrichmentReview from "./pages/EnrichmentReview";
import EnrichmentAssetReview from "./pages/EnrichmentAssetReview";
import ContentGeneration from "./pages/ContentGeneration";
import ReviewContent from "./pages/ReviewContent";
import AssetReview from "./pages/AssetReview";
import EnhanceAssets from "./pages/EnhanceAssets";
import Deploy from "./pages/Deploy";
import Optimization from "./pages/Optimization";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <div className="pt-20"> {/* Add top padding to account for fixed header */}
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
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
