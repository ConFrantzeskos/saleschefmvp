import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { TooltipProvider } from "@/components/ui/tooltip"

import HomePage from '@/pages/HomePage';
import FileUpload from '@/pages/FileUpload';
import MappingPage from '@/pages/MappingPage';
import CleaningPage from '@/pages/CleaningPage';
import GenerationPage from '@/pages/GenerationPage';
import ReviewPage from '@/pages/ReviewPage';
import DeployPage from '@/pages/DeployPage';
import ZapierConfig from '@/components/ZapierConfig';

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
              <Route path="/" element={<HomePage />} />
              <Route path="/upload" element={<FileUpload />} />
              <Route path="/mapping" element={<MappingPage />} />
              <Route path="/cleaning" element={<CleaningPage />} />
              <Route path="/generation" element={<GenerationPage />} />
              <Route path="/review" element={<ReviewPage />} />
              <Route path="/deploy" element={<DeployPage />} />
              <Route path="/zapier" element={<ZapierConfig />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </SecurityBoundary>
  );
}

export default App;
