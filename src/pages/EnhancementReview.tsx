import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import ReviewActionPanel from '@/components/ReviewActionPanel';
import EnhancedAssetsTable from '@/components/EnhancedAssetsTable';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Target, Users, TrendingUp, ArrowRight } from 'lucide-react';
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
      
      <div className="max-w-7xl mx-auto mt-8 space-y-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card className="border-2 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-2xl font-display font-bold text-primary">{sampleAssets.length}</span>
              </div>
              <p className="text-sm font-medium text-foreground">Strategic Briefs</p>
              <p className="text-xs text-muted-foreground mt-1">Products enhanced</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Target className="w-5 h-5 text-primary" />
                <span className="text-2xl font-display font-bold text-foreground">{frameworkCount}</span>
              </div>
              <p className="text-sm font-medium text-foreground">Persuasion Frameworks</p>
              <p className="text-xs text-muted-foreground mt-1">Strategic elements</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-2xl font-display font-bold text-foreground">{elementCount}</span>
              </div>
              <p className="text-sm font-medium text-foreground">RTB Elements</p>
              <p className="text-xs text-muted-foreground mt-1">Conversion points</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-2xl font-display font-bold text-foreground">{avgConfidence}%</span>
              </div>
              <p className="text-sm font-medium text-foreground">Confidence Score</p>
              <p className="text-xs text-muted-foreground mt-1">Strategic accuracy</p>
            </CardContent>
          </Card>
        </div>

        {/* Top Action Panel */}
        <ReviewActionPanel
          icon={<Sparkles className="w-6 h-6 text-primary" />}
          title="Strategic Enhancement Complete"
          description={`${sampleAssets.length} products enhanced with ${frameworkCount} frameworks • Ready for content generation`}
          buttonText="Proceed to Content Generation"
          buttonIcon={<ArrowRight className="w-4 h-4" />}
          onAction={handleProceedToGeneration}
          variant="top"
        />

        {/* Table Section */}
        <div>
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

        {/* Bottom Action Panel */}
        <ReviewActionPanel
          icon={<Sparkles className="w-6 h-6 text-primary" />}
          title="Strategic Enhancement Complete"
          description={`${sampleAssets.length} products enhanced with ${frameworkCount} frameworks • Ready for content generation`}
          buttonText="Proceed to Content Generation"
          buttonIcon={<ArrowRight className="w-4 h-4" />}
          onAction={handleProceedToGeneration}
          variant="bottom"
        />
      </div>
    </div>
  );
};

export default EnhancementReview;
