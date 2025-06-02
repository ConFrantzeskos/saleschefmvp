
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import ReviewHeader from '@/components/ReviewHeader';
import AssetsTable from '@/components/AssetsTable';
import { generateSampleAssets } from '@/utils/assetGenerator';

const ReviewContent = () => {
  const navigate = useNavigate();

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: true, current: false },
    { id: 'enrich', label: 'Enrich', completed: true, current: false },
    { id: 'generate', label: 'Generate', completed: true, current: false },
    { id: 'review', label: 'Review', completed: false, current: true },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

  const sampleAssets = generateSampleAssets();

  const handleApproveAll = () => {
    navigate('/deploy');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-7xl mx-auto">
        <ReviewHeader 
          assetCount={sampleAssets.length}
          onApproveAll={handleApproveAll}
        />

        <div className="bg-white rounded-lg border">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">All Assets ({sampleAssets.length})</h2>
          </div>
          
          <AssetsTable assets={sampleAssets} />
        </div>
      </div>
    </div>
  );
};

export default ReviewContent;
