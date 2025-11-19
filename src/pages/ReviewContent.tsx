
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import ReviewActionPanel from '@/components/ReviewActionPanel';
import AssetsTable from '@/components/AssetsTable';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { generateSampleAssets } from '@/utils/assetGenerator';

const ReviewContent = () => {
  const navigate = useNavigate();

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: true, current: false },
    { id: 'enrich', label: 'Enrich', completed: true, current: false },
    { id: 'enhance', label: 'Enhance', completed: true, current: false },
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
      
      <div className="max-w-7xl mx-auto mt-8 space-y-8">
        {/* Top Action Panel */}
        <ReviewActionPanel
          icon={<CheckCircle2 className="w-6 h-6 text-primary" />}
          title="Review Generated Content"
          description={`${sampleAssets.length} assets with optimized content • Ready for deployment`}
          buttonText="Approve All & Deploy"
          buttonIcon={<ArrowRight className="w-4 h-4" />}
          onAction={handleApproveAll}
          variant="top"
        />

        {/* Table Section */}
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">
              All Assets ({sampleAssets.length})
            </h2>
            <p className="text-sm text-muted-foreground">
              Review and approve generated content for all your assets
            </p>
          </div>

          <div className="bg-card rounded-xl border shadow-soft animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <AssetsTable assets={sampleAssets} />
          </div>
        </div>

        {/* Bottom Action Panel */}
        <ReviewActionPanel
          icon={<CheckCircle2 className="w-6 h-6 text-primary" />}
          title="Review Generated Content"
          description={`${sampleAssets.length} assets with optimized content • Ready for deployment`}
          buttonText="Approve All & Deploy"
          buttonIcon={<ArrowRight className="w-4 h-4" />}
          onAction={handleApproveAll}
          variant="bottom"
        />
      </div>
    </div>
  );
};

export default ReviewContent;
