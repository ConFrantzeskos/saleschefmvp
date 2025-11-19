import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArrowLeft, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { generateSampleEnhancedAssets } from '@/utils/enhancedAssetGenerator';
import { generateSampleEnrichmentAssets } from '@/utils/enrichmentAssetGenerator';
import { extractPropositionsFromAsset } from '@/utils/propositionExtractor';
import { generateFeatureGuidance } from '@/utils/intelligenceGenerator';
import LadderVisualization from '@/components/LadderVisualization';
import { TopMessagingSummary } from '@/components/TopMessagingSummary';
import { ladderFrameworks } from '@/constants/ladderFrameworks';
import { toast } from 'sonner';
import MarketOpportunityPanel from '@/components/strategic-brief/MarketOpportunityPanel';
import CompetitiveContextPanel from '@/components/strategic-brief/CompetitiveContextPanel';
import MissingFeaturesPanel from '@/components/strategic-brief/MissingFeaturesPanel';
import AudienceInsightsPanel from '@/components/strategic-brief/AudienceInsightsPanel';
import ContentGuidanceTab from '@/components/strategic-brief/ContentGuidanceTab';

const StrategicBriefDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const assets = generateSampleEnhancedAssets();
  const asset = assets.find(a => a.id === Number(id));
  
  // Get enrichment data for intelligence panels
  const enrichmentAssets = generateSampleEnrichmentAssets();
  const enrichmentData = enrichmentAssets.find(e => e.sku === asset?.sku);

  if (!asset) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 max-w-md">
          <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-center text-foreground">Asset not found</p>
          <Button onClick={() => navigate('/enhancement-review')} className="w-full mt-4">
            Back to Asset List
          </Button>
        </Card>
      </div>
    );
  }

  const allPropositions = extractPropositionsFromAsset(asset, enrichmentData);
  const [selectedPropositions, setSelectedPropositions] = useState<string[]>(
    allPropositions.map(p => p.id)
  );

  // Group by feature priority for better organization
  const features = asset.featureAnalysis || [];
  const propositionsByFeature = features.length > 0
    ? features.map(feature => ({
        ...feature,
        propositions: allPropositions.filter(p => p.feature === feature.feature)
      }))
    : [{ 
        feature: 'All Features', 
        confidence: 90, 
        priority: 1, 
        description: '',
        source: '',
        propositions: allPropositions 
      }];

  const handleToggleProposition = (propId: string) => {
    setSelectedPropositions(prev => 
      prev.includes(propId) ? prev.filter(id => id !== propId) : [...prev, propId]
    );
  };

  const handleApproveBrief = () => {
    if (selectedPropositions.length === 0) {
      toast.error('Please select at least one proposition');
      return;
    }

    const briefData = {
      assetId: asset.id,
      selectedPropositions: allPropositions.filter(p => selectedPropositions.includes(p.id))
    };
    sessionStorage.setItem(`brief-${asset.id}`, JSON.stringify(briefData));
    toast.success('Strategic brief approved');
    navigate('/generation');
  };

  const heroPropositions = allPropositions.filter(p => 
    p.strength === 'high' && p.featurePriority === 1
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" onClick={() => navigate('/enhancement-review')} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to All Assets
          </Button>
          <Button 
            onClick={handleApproveBrief}
            disabled={selectedPropositions.length === 0}
            className="gap-2"
          >
            <CheckCircle2 className="w-4 h-4" />
            Approve Brief & Continue
          </Button>
        </div>

        <Card className="p-8 mb-6 border-primary/20">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-display font-bold text-foreground">{asset.name}</h1>
                <Badge className="bg-primary">{asset.confidenceScore}% Confidence</Badge>
              </div>
              <p className="text-sm text-muted-foreground">SKU: {asset.sku} • {asset.category} • {asset.brand}</p>
            </div>

            {heroPropositions.length > 0 && (
              <div className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                <label className="text-xs font-semibold text-primary uppercase tracking-wide block mb-3">
                  Hero Features (Highest Confidence)
                </label>
                <div className="space-y-2">
                  {heroPropositions.slice(0, 2).map(prop => (
                    <div key={prop.id} className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        {prop.strength === 'high' ? '95%' : '85%'}
                      </Badge>
                      <p className="text-foreground font-semibold">{prop.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-6 rounded-lg bg-muted/30">
              <label className="text-xs font-medium text-muted-foreground block mb-2">CORE VALUE PROPOSITION</label>
              <p className="text-foreground text-lg font-medium">{asset.coreValueProposition}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-muted/30 text-center">
                <div className="text-2xl font-bold text-primary mb-1">{allPropositions.length}</div>
                <div className="text-xs text-muted-foreground">Total Propositions</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/30 text-center">
                <div className="text-2xl font-bold text-primary mb-1">{asset.appliedLadders?.length || 0}</div>
                <div className="text-xs text-muted-foreground">Frameworks Applied</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/30 text-center">
                <div className="text-2xl font-bold text-primary mb-1">{selectedPropositions.length}</div>
                <div className="text-xs text-muted-foreground">Selected for Brief</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Intelligence Panels */}
        {enrichmentData && (
          <>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <MarketOpportunityPanel 
                searchTrends={enrichmentData.searchTrends}
                seoOpportunities={enrichmentData.seoOpportunities}
                socialMentions={enrichmentData.socialMentions}
                customerSentiment={enrichmentData.customerSentiment}
              />
              <CompetitiveContextPanel 
                keyCompetitors={enrichmentData.keyCompetitors}
                relativeStrengths={enrichmentData.relativeStrengths}
                competitorAnalysis={enrichmentData.competitorAnalysis}
                priceHistory={enrichmentData.priceHistory}
                valuePositioning={enrichmentData.valuePositioning}
              />
              <AudienceInsightsPanel 
                targetAudience={enrichmentData.targetAudience}
                categoryEntryPoints={enrichmentData.categoryEntryPoints}
                reasonsToBuy={enrichmentData.reasonsToBuy}
              />
            </div>

            <div className="mb-6">
              <MissingFeaturesPanel 
                missingFeatures={enrichmentData.missingFeatures}
                featureRequests={enrichmentData.featureRequests}
                innovationGaps={enrichmentData.innovationGaps}
              />
            </div>
          </>
        )}

        <Tabs defaultValue="messaging" className="mb-6">
          <TabsList className="mb-6">
            <TabsTrigger value="messaging">Strategic Messaging</TabsTrigger>
            <TabsTrigger value="guidance">Content Guidance</TabsTrigger>
          </TabsList>

          <TabsContent value="messaging">
            <Card className="p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">Strategic Messaging</h2>
              <p className="text-sm text-muted-foreground">
                All propositions are selected by default. Deselect any that don't align with your brand message.
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{selectedPropositions.length}</div>
              <div className="text-xs text-muted-foreground">of {allPropositions.length} selected</div>
            </div>
          </div>

          <div className="space-y-8">
            {propositionsByFeature.map((featureGroup) => (
              <div key={featureGroup.feature} className="pb-8 border-b last:border-b-0">
                {/* Feature Header */}
                <div className="flex items-center gap-3 mb-4">
                  {featureGroup.priority === 1 && (
                    <Badge className="text-base px-3 py-1 bg-primary">
                      ⭐ HERO FEATURE
                    </Badge>
                  )}
                  {featureGroup.priority > 1 && featureGroup.priority < 10 && (
                    <Badge variant="secondary" className="text-sm">
                      Feature #{featureGroup.priority}
                    </Badge>
                  )}
                  <h3 className="text-xl font-bold text-foreground">{featureGroup.feature}</h3>
                  {featureGroup.confidence > 0 && (
                    <Badge variant="outline">{featureGroup.confidence}% confidence</Badge>
                  )}
                </div>
                
                {featureGroup.description && (
                  <p className="text-sm text-muted-foreground mb-4">
                    {featureGroup.description}
                  </p>
                )}
                
                {/* Propositions grouped by framework */}
                <div className="space-y-4">
                  {Object.entries(
                    featureGroup.propositions.reduce((acc, prop) => {
                      if (!acc[prop.frameworkId]) acc[prop.frameworkId] = [];
                      acc[prop.frameworkId].push(prop);
                      return acc;
                    }, {} as Record<string, typeof featureGroup.propositions>)
                  ).map(([frameworkId, props]) => {
                    const framework = ladderFrameworks.find(f => f.id === frameworkId);
                    const selectedCount = props.filter(p => selectedPropositions.includes(p.id)).length;
                    
                    return (
                      <div key={frameworkId} className="border rounded-lg overflow-hidden">
                        <div className="p-4 bg-muted/30 border-b">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Badge variant="outline" className="text-xs">
                                {framework?.category || 'Framework'}
                              </Badge>
                              <h4 className="font-semibold text-foreground">{props[0].frameworkName}</h4>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {selectedCount} of {props.length} selected
                            </span>
                          </div>
                        </div>
                        <div className="p-4 space-y-3">
                          {props.map(prop => (
                            <div 
                              key={prop.id}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                            >
                              <Checkbox
                                id={prop.id}
                                checked={selectedPropositions.includes(prop.id)}
                                onCheckedChange={() => handleToggleProposition(prop.id)}
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <label 
                                  htmlFor={prop.id}
                                  className="text-sm text-foreground font-medium cursor-pointer block mb-1"
                                >
                                  {prop.text}
                                </label>
                                <div className="flex items-center gap-2">
                                  <Badge 
                                    variant={prop.strength === 'high' ? 'default' : 'outline'}
                                    className="text-xs"
                                  >
                                    {prop.ladderStep}
                                  </Badge>
                                  {prop.featurePriority === 1 && (
                                    <Badge variant="outline" className="text-xs">
                                      Hero Feature
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Card>

        </TabsContent>

        <TabsContent value="guidance">
          {enrichmentData && asset.featureAnalysis && (
            <ContentGuidanceTab 
              featureGuidance={generateFeatureGuidance(
                asset.featureAnalysis.map(f => ({ 
                  feature: f.feature, 
                  confidence: f.confidence 
                })),
                enrichmentData
              )}
            />
          )}
        </TabsContent>

        </Tabs>

        <Collapsible>
          <Card className="overflow-hidden">
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between p-6 hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground">View Framework Details</h3>
                </div>
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-6 pt-0 border-t space-y-6">
                {asset.appliedLadders?.map(ladderId => {
                  const framework = ladderFrameworks.find(f => f.id === ladderId);
                  if (!framework) return null;
                  return (
                    <div key={ladderId} className="space-y-3">
                      <h4 className="font-semibold text-foreground">{framework.name}</h4>
                      <LadderVisualization ladderId={ladderId} asset={asset} />
                    </div>
                  );
                })}
              </div>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        <div className="mt-8 flex items-center justify-between p-6 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
          <div>
            <p className="font-semibold text-foreground mb-1">Ready to generate content?</p>
            <p className="text-sm text-muted-foreground">
              {selectedPropositions.length} propositions selected for this strategic brief
            </p>
          </div>
          <Button 
            onClick={handleApproveBrief}
            disabled={selectedPropositions.length === 0}
            size="lg"
            className="gap-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            Approve Brief & Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StrategicBriefDetail;
