import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, ChevronRight, Lightbulb, Zap, Target } from 'lucide-react';
import ProgressIndicator from '@/components/ProgressIndicator';
import LadderSelectionCard from '@/components/LadderSelectionCard';
import { ladderFrameworks } from '@/constants/ladderFrameworks';
import { LadderRecommendationEngine, LadderRecommendation, ProductContext } from '@/utils/ladderRecommendationEngine';
import { generateSampleEnrichmentAssets } from '@/utils/enrichmentAssetGenerator';

const EnhancementSelection = () => {
  const navigate = useNavigate();
  const [selectedLadders, setSelectedLadders] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<LadderRecommendation[]>([]);
  const [productContext, setProductContext] = useState<ProductContext | null>(null);
  const [activeTab, setActiveTab] = useState<'recommended' | 'all'>('recommended');

  useEffect(() => {
    // Analyze enriched product data to generate recommendations
    const enrichedAssets = generateSampleEnrichmentAssets();
    
    // Use the first asset as representative for recommendations
    const sampleAsset = enrichedAssets[0];
    
    const context: ProductContext = {
      category: sampleAsset.category || 'Electronics',
      brand: sampleAsset.brand,
      industry: 'technology',
      targetPersona: 'Mobile Professional',
      hasComplexSpecs: true,
      requiresTrust: sampleAsset.category?.toLowerCase().includes('electronics'),
      isEmotionalPurchase: true,
      pricePoint: 'mid'
    };
    
    setProductContext(context);
    const recs = LadderRecommendationEngine.generateRecommendations(context);
    setRecommendations(recs);
    
    // Auto-select primary ladder
    const primary = recs.find(r => r.priority === 'primary');
    if (primary) {
      setSelectedLadders([primary.ladderId]);
    }
  }, []);

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: true, current: false },
    { id: 'enrich', label: 'Enrich', completed: true, current: false },
    { id: 'enhance', label: 'Enhance', completed: false, current: true },
    { id: 'generate', label: 'Generate', completed: false, current: false },
    { id: 'review', label: 'Review', completed: false, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

  const handleToggleLadder = (ladderId: string) => {
    setSelectedLadders(prev => 
      prev.includes(ladderId)
        ? prev.filter(id => id !== ladderId)
        : [...prev, ladderId]
    );
  };

  const handleSelectRecommended = () => {
    // Select primary + top 2 supporting
    const primary = recommendations.find(r => r.priority === 'primary');
    const supporting = recommendations.filter(r => r.priority === 'supporting').slice(0, 2);
    
    if (primary) {
      setSelectedLadders([primary.ladderId, ...supporting.map(r => r.ladderId)]);
    }
  };

  const handleContinue = () => {
    // Store selected ladders in sessionStorage for use in Enhancement page
    sessionStorage.setItem('selectedLadders', JSON.stringify(
      selectedLadders.map(id => ladderFrameworks.find(l => l.id === id)?.name || id)
    ));
    navigate('/enhancement');
  };

  const getRecommendation = (ladderId: string): LadderRecommendation | undefined => {
    return recommendations.find(r => r.ladderId === ladderId);
  };

  const getPriorityIcon = (priority: string) => {
    switch(priority) {
      case 'primary': return <Target className="w-4 h-4" />;
      case 'supporting': return <Zap className="w-4 h-4" />;
      default: return <Lightbulb className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'primary': return 'bg-primary text-primary-foreground';
      case 'supporting': return 'bg-chart-2 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const allLadders = ladderFrameworks;

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-7xl mx-auto mt-8">
        <div className="text-center mb-8">
          <h1 className="text-section-title font-display font-bold mb-2">
            Select Persuasion Frameworks
          </h1>
          <p className="text-body-large text-muted-foreground">
            AI-powered recommendations based on your product data
          </p>
        </div>

        {/* Recommendation Summary Card */}
        {recommendations.length > 0 && (
          <Card className="p-6 mb-6 bg-gradient-to-r from-primary/5 to-chart-2/5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-display font-semibold mb-2">Smart Recommendations</h3>
                <p className="text-muted-foreground mb-4">
                  Based on your {productContext?.category} products targeting {productContext?.targetPersona || 'various personas'}, 
                  we recommend these framework combinations:
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {recommendations.slice(0, 3).map(rec => (
                    <Badge 
                      key={rec.ladderId} 
                      className={`gap-1 ${getPriorityColor(rec.priority)}`}
                    >
                      {getPriorityIcon(rec.priority)}
                      {rec.ladderName}
                      <span className="text-xs ml-1">({rec.confidence}%)</span>
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleSelectRecommended}
                  className="gap-2"
                >
                  <Zap className="w-4 h-4" />
                  Select Recommended Combination
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Selection Count */}
        <Card className="p-4 mb-6 border-primary/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {selectedLadders.length} Selected
              </Badge>
              <span className="text-muted-foreground">
                {selectedLadders.length === 0 && 'Select at least one framework to continue'}
                {selectedLadders.length === 1 && 'Good start! Consider adding complementary frameworks'}
                {selectedLadders.length >= 2 && selectedLadders.length <= 4 && 'Optimal selection for comprehensive analysis'}
                {selectedLadders.length > 4 && 'Many frameworks selected - this will be thorough'}
              </span>
            </div>
            <Button 
              onClick={handleContinue}
              disabled={selectedLadders.length === 0}
              className="gap-2"
            >
              Continue to Enhancement
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Tabbed View: Recommended vs All */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'recommended' | 'all')}>
          <TabsList className="mb-6">
            <TabsTrigger value="recommended" className="gap-2">
              <Sparkles className="w-4 h-4" />
              Recommended ({recommendations.length})
            </TabsTrigger>
            <TabsTrigger value="all">
              All Frameworks ({ladderFrameworks.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recommended">
            {recommendations.length === 0 ? (
              <Card className="p-8 text-center">
                <p className="text-muted-foreground">Generating recommendations...</p>
              </Card>
            ) : (
              <div className="space-y-6">
                {/* Primary Recommendation */}
                {recommendations.filter(r => r.priority === 'primary').map(rec => {
                  const ladder = ladderFrameworks.find(l => l.id === rec.ladderId);
                  if (!ladder) return null;
                  return (
                    <div key={rec.ladderId}>
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-display font-semibold">Primary Framework</h3>
                        <Badge className="bg-primary">Highest Confidence</Badge>
                      </div>
                      <LadderSelectionCard
                        ladder={ladder}
                        isSelected={selectedLadders.includes(ladder.id)}
                        onToggle={() => handleToggleLadder(ladder.id)}
                        recommendation={rec}
                      />
                    </div>
                  );
                })}

                {/* Supporting Recommendations */}
                {recommendations.filter(r => r.priority === 'supporting').length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-5 h-5 text-chart-2" />
                      <h3 className="text-lg font-display font-semibold">Supporting Frameworks</h3>
                      <Badge variant="secondary">Complementary</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {recommendations.filter(r => r.priority === 'supporting').map(rec => {
                        const ladder = ladderFrameworks.find(l => l.id === rec.ladderId);
                        if (!ladder) return null;
                        return (
                          <LadderSelectionCard
                            key={rec.ladderId}
                            ladder={ladder}
                            isSelected={selectedLadders.includes(ladder.id)}
                            onToggle={() => handleToggleLadder(ladder.id)}
                            recommendation={rec}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Complementary Options */}
                {recommendations.filter(r => r.priority === 'complementary').length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="w-5 h-5 text-muted-foreground" />
                      <h3 className="text-lg font-display font-semibold">Additional Options</h3>
                      <Badge variant="outline">Good Fit</Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {recommendations.filter(r => r.priority === 'complementary').map(rec => {
                        const ladder = ladderFrameworks.find(l => l.id === rec.ladderId);
                        if (!ladder) return null;
                        return (
                          <LadderSelectionCard
                            key={rec.ladderId}
                            ladder={ladder}
                            isSelected={selectedLadders.includes(ladder.id)}
                            onToggle={() => handleToggleLadder(ladder.id)}
                            recommendation={rec}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </TabsContent>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allLadders.map((ladder) => {
                const rec = getRecommendation(ladder.id);
                return (
                  <LadderSelectionCard
                    key={ladder.id}
                    ladder={ladder}
                    isSelected={selectedLadders.includes(ladder.id)}
                    onToggle={() => handleToggleLadder(ladder.id)}
                    recommendation={rec}
                  />
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EnhancementSelection;
