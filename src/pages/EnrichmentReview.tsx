
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import ReviewActionPanel from '@/components/ReviewActionPanel';
import EnrichmentAssetsTable from '@/components/EnrichmentAssetsTable';
import { Card, CardContent } from '@/components/ui/card';
import { Package, TrendingUp, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { generateSampleEnrichmentAssets } from '@/utils/enrichmentAssetGenerator';

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
  
  const totalInsights = sampleAssets.length * 8; // 8 insights per product

  const handleApproveAll = () => {
    sessionStorage.setItem('enrichmentAssets', JSON.stringify(assets));
    navigate('/strategic-brief');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-7xl mx-auto mt-8 space-y-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Package className="w-5 h-5 text-primary" />
                <span className="text-2xl font-display font-bold text-primary">{sampleAssets.length}</span>
              </div>
              <p className="text-sm font-medium text-foreground">Products Enriched</p>
              <p className="text-xs text-muted-foreground mt-1">Ready for enhancement</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-2xl font-display font-bold text-foreground">{avgQuality}%</span>
              </div>
              <p className="text-sm font-medium text-foreground">Data Quality</p>
              <p className="text-xs text-muted-foreground mt-1">Average enrichment score</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-2xl font-display font-bold text-foreground">{totalInsights}</span>
              </div>
              <p className="text-sm font-medium text-foreground">Market Insights</p>
              <p className="text-xs text-muted-foreground mt-1">Intelligence data points</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-2xl font-display font-bold text-green-600">Complete</span>
              </div>
              <p className="text-sm font-medium text-foreground">Enrichment Status</p>
              <p className="text-xs text-muted-foreground mt-1">All products processed</p>
            </CardContent>
          </Card>
        </div>

        {/* Top Action Panel */}
        <ReviewActionPanel
          icon={<CheckCircle2 className="w-6 h-6 text-primary" />}
          title="Ready for Strategic Enhancement"
          description={`${sampleAssets.length} products enriched with market intelligence • Proceed to build strategic frameworks`}
          buttonText="Approve & Continue to Enhancement"
          buttonIcon={<ArrowRight className="w-4 h-4" />}
          onAction={handleApproveAll}
          variant="top"
        />

        {/* Table Section */}
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">
              Enriched Products ({sampleAssets.length})
            </h2>
            <p className="text-sm text-muted-foreground">
              Click on a product to view complete enrichment data and market intelligence
            </p>
          </div>

          <div className="bg-card rounded-xl border shadow-soft animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <EnrichmentAssetsTable assets={sampleAssets} />
          </div>
        </div>

        {/* Bottom Action Panel */}
        <ReviewActionPanel
          icon={<CheckCircle2 className="w-6 h-6 text-primary" />}
          title="Ready for Strategic Enhancement"
          description={`${sampleAssets.length} products enriched with market intelligence • Proceed to build strategic frameworks`}
          buttonText="Approve & Continue to Enhancement"
          buttonIcon={<ArrowRight className="w-4 h-4" />}
          onAction={handleApproveAll}
          variant="bottom"
        />
      </div>
    </div>
  );
};

export default EnrichmentReview;
