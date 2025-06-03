
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import EnrichmentReviewHeader from '@/components/EnrichmentReviewHeader';
import EnrichmentAssetsTable from '@/components/EnrichmentAssetsTable';
import { generateSampleEnrichmentAssets } from '@/utils/enrichmentAssetGenerator';

const EnrichmentReview = () => {
  const navigate = useNavigate();

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: true, current: false },
    { id: 'enrich', label: 'Enrich', completed: true, current: false },
    { id: 'enrichment-review', label: 'Review Enrichment', completed: false, current: true },
    { id: 'generate', label: 'Generate', completed: false, current: false },
    { id: 'review', label: 'Review', completed: false, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

  const sampleAssets = generateSampleEnrichmentAssets();

  const handleApproveAll = () => {
    navigate('/generation');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-7xl mx-auto">
        <EnrichmentReviewHeader 
          assetCount={sampleAssets.length}
          onApproveAll={handleApproveAll}
        />

        <div className="bg-white rounded-xl border shadow-soft">
          <div className="p-6 border-b">
            <h2 className="text-xl font-display font-semibold text-foreground">Enriched Assets ({sampleAssets.length})</h2>
          </div>
          
          <EnrichmentAssetsTable assets={sampleAssets} />
        </div>
      </div>
    </div>
  );
};

export default EnrichmentReview;
