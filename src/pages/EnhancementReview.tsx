import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import EnhancementReviewHeader from '@/components/EnhancementReviewHeader';
import EnhancedAssetsTable from '@/components/EnhancedAssetsTable';
import { generateSampleEnhancedAssets } from '@/utils/enhancedAssetGenerator';

const EnhancementReview = () => {
  const navigate = useNavigate();

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: true, current: false },
    { id: 'enrich', label: 'Enrich', completed: true, current: false },
    { id: 'enhance', label: 'Enhance', completed: true, current: false },
    { id: 'review-enhancement', label: 'Review Enhancement', completed: false, current: true },
    { id: 'generate', label: 'Generate', completed: false, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

  const sampleAssets = generateSampleEnhancedAssets();

  const handleProceedToGeneration = () => {
    navigate('/generation');
  };

  // Calculate summary stats
  const frameworkCount = sampleAssets.length * 11; // 11 core strategic frameworks per asset
  const elementCount = sampleAssets.reduce((sum, asset) => sum + asset.rtbCount, 0) * 5; // RTBs × 5 types
  const avgConfidence = Math.round(
    sampleAssets.reduce((sum, asset) => sum + asset.confidenceScore, 0) / sampleAssets.length
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-7xl mx-auto">
        <EnhancementReviewHeader 
          assetCount={sampleAssets.length}
          frameworkCount={frameworkCount}
          elementCount={elementCount}
          confidenceScore={avgConfidence}
          onProceed={handleProceedToGeneration}
        />

        <div className="mb-4">
          <h2 className="text-xl font-display font-semibold text-foreground mb-2">
            Strategic Product Briefs ({sampleAssets.length})
          </h2>
          <p className="text-sm text-muted-foreground">
            Click on a product to view complete strategic frameworks, personas, and conversion heuristics
          </p>
        </div>

        <div className="bg-card rounded-xl border shadow-soft animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <EnhancedAssetsTable assets={sampleAssets} />
        </div>
      </div>
    </div>
  );
};

export default EnhancementReview;
