
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import EnrichmentReviewHeader from '@/components/EnrichmentReviewHeader';
import EnrichmentAssetsTable from '@/components/EnrichmentAssetsTable';
import { generateSampleEnrichmentAssets } from '@/utils/enrichmentAssetGenerator';
import { Card } from '@/components/ui/card';
import { Database, TrendingUp, Users, Sparkles } from 'lucide-react';

const EnrichmentReview = () => {
  const navigate = useNavigate();

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: true, current: false },
    { id: 'enrich', label: 'Enrich', completed: false, current: true },
    { id: 'enhance', label: 'Enhance', completed: false, current: false },
    { id: 'generate', label: 'Generate', completed: false, current: false },
    { id: 'review', label: 'Review', completed: false, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

  const sampleAssets = generateSampleEnrichmentAssets();

  // Calculate summary stats
  const avgQuality = Math.round(
    sampleAssets.reduce((sum, asset) => sum + asset.quality, 0) / sampleAssets.length
  );

  const handleApproveAll = () => {
    navigate('/enhancement');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-section-title font-display font-bold mb-2 animate-fade-in">
                Enrichment Complete - Review Market Intelligence
              </h1>
              <p className="text-body-large text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Review enriched data for 3 products before strategic enhancement
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <Card className="p-6 border-[hsl(var(--chart-1))] animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-[hsl(var(--chart-1))]/10">
                  <Database className="w-5 h-5 text-[hsl(var(--chart-1))]" />
                </div>
                <span className="text-sm text-muted-foreground">Products Enriched</span>
              </div>
              <div className="text-3xl font-display font-bold">{sampleAssets.length}</div>
            </Card>

            <Card className="p-6 border-[hsl(var(--chart-2))] animate-fade-in hover-scale" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-[hsl(var(--chart-2))]/10">
                  <TrendingUp className="w-5 h-5 text-[hsl(var(--chart-2))]" />
                </div>
                <span className="text-sm text-muted-foreground">Data Quality</span>
              </div>
              <div className="text-3xl font-display font-bold">{avgQuality}%</div>
            </Card>

            <Card className="p-6 border-[hsl(var(--chart-3))] animate-fade-in hover-scale" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-[hsl(var(--chart-3))]/10">
                  <Users className="w-5 h-5 text-[hsl(var(--chart-3))]" />
                </div>
                <span className="text-sm text-muted-foreground">Market Insights</span>
              </div>
              <div className="text-3xl font-display font-bold">8</div>
              <p className="text-xs text-muted-foreground mt-1">per product</p>
            </Card>

            <Card className="p-6 border-primary animate-fade-in hover-scale" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">Enrichment Status</span>
              </div>
              <div className="text-3xl font-display font-bold">Complete</div>
            </Card>
          </div>
        </div>

        <EnrichmentAssetsTable assets={sampleAssets} />

        <div className="mt-6">
          <EnrichmentReviewHeader 
            assetCount={sampleAssets.length}
            onApproveAll={handleApproveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default EnrichmentReview;
