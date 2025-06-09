
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { TooltipProvider } from "@/components/ui/tooltip"

import Index from '@/pages/Index';
import FileUpload from '@/pages/FileUpload';
import SchemaMapping from '@/pages/SchemaMapping';
import CleaningValidation from '@/pages/CleaningValidation';
import ContentGeneration from '@/pages/ContentGeneration';
import ReviewContent from '@/pages/ReviewContent';
import Deploy from '@/pages/Deploy';
import ZapierConfig from '@/components/ZapierConfig';
import FAQ from '@/pages/FAQ';

import SecurityMonitor from '@/components/SecurityMonitor';
import SecurityBoundary from '@/components/SecurityBoundary';

const queryClient = new QueryClient();

function App() {
  return (
    <SecurityBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <SecurityMonitor />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/upload" element={<FileUpload />} />
              <Route path="/mapping" element={<SchemaMapping />} />
              <Route path="/cleaning" element={<CleaningValidation />} />
              <Route path="/generation" element={<ContentGeneration />} />
              <Route path="/review" element={<ReviewContent />} />
              <Route path="/deploy" element={<Deploy />} />
              <Route path="/zapier" element={<ZapierConfig />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </SecurityBoundary>
  );
}

export default App;
