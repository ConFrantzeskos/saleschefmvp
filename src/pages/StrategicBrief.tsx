import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Target, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import ProgressIndicator from '@/components/ProgressIndicator';

import FrameworkDetailsCollapsible from '@/components/FrameworkDetailsCollapsible';
import { generateSampleEnrichmentAssets } from '@/utils/enrichmentAssetGenerator';
import { generateSampleEnhancedAssets } from '@/utils/enhancedAssetGenerator';
import { LadderRecommendationEngine } from '@/utils/ladderRecommendationEngine';
import { extractPropositionsFromAsset, groupPropositionsByCategory } from '@/utils/propositionExtractor';
import { Proposition, PropositionsByCategory } from '@/types/proposition';
import { ladderFrameworks } from '@/constants/ladderFrameworks';

const StrategicBrief = () => {
  const navigate = useNavigate();
  const [generatedLadders, setGeneratedLadders] = useState<string[]>([]);
  const [propositions, setPropositions] = useState<Proposition[]>([]);
  const [selectedPropositions, setSelectedPropositions] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(true);
  const [categorizedPropositions, setCategorizedPropositions] = useState<PropositionsByCategory[]>([]);

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: true, current: false },
    { id: 'enrich', label: 'Enrich', completed: true, current: false },
    { id: 'strategic-brief', label: 'Strategic Brief', completed: false, current: true },
    { id: 'generate', label: 'Generate', completed: false, current: false },
    { id: 'review', label: 'Review', completed: false, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

  useEffect(() => {
    // Simulate auto-generation process
    const generateStrategicBrief = () => {
      // Get enrichment assets to derive product context
      const enrichmentAssets = generateSampleEnrichmentAssets();
      const firstAsset = enrichmentAssets[0];

      // Build product context
      const productContext = {
        category: firstAsset.category,
        industry: 'Technology',
        targetPersona: 'Mobile Professional',
        hasComplexSpecs: true,
        requiresTrust: false,
        isHighValue: false,
        isEmotionalPurchase: false,
        isRepeatPurchase: false,
        hasStrongBrand: true
      };

      // Generate recommendations
      const recommendations = LadderRecommendationEngine.generateRecommendations(productContext);

      // Select top 6-8 ladders
      const selectedLadders = recommendations
        .slice(0, 7)
        .map(rec => rec.ladderId);

      setGeneratedLadders(selectedLadders);

      // Generate enhanced assets with selected ladders
      const enhancedAssets = generateSampleEnhancedAssets();
      const firstEnhancedAsset = {
        ...enhancedAssets[0],
        appliedLadders: selectedLadders
      };

      // Extract propositions
      const extractedProps = extractPropositionsFromAsset(firstEnhancedAsset);
      setPropositions(extractedProps);

      // Group by category
      const grouped = groupPropositionsByCategory(extractedProps);
      setCategorizedPropositions(grouped);

      setIsGenerating(false);
    };

    setTimeout(generateStrategicBrief, 2000);
  }, []);

  const handleToggleProposition = (id: string) => {
    setSelectedPropositions(prev => {
      if (prev.includes(id)) {
        return prev.filter(propId => propId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSelectRecommended = () => {
    // Auto-select high-strength propositions up to 10
    const highStrength = propositions
      .filter(p => p.strength === 'high')
      .slice(0, 10)
      .map(p => p.id);
    setSelectedPropositions(highStrength);
  };

  const handleContinue = () => {
    // Store selected propositions in sessionStorage
    const selectedProps = propositions.filter(p => selectedPropositions.includes(p.id));
    sessionStorage.setItem('selectedPropositions', JSON.stringify(selectedProps));
    sessionStorage.setItem('selectedLadders', JSON.stringify(generatedLadders));
    navigate('/enhancement-review');
  };

  const isValidSelection = selectedPropositions.length >= 8 && selectedPropositions.length <= 12;

  if (isGenerating) {
    return (
      <div className="min-h-screen bg-background p-6">
        <ProgressIndicator steps={steps} />
        <div className="max-w-5xl mx-auto mt-16">
          <Card className="p-12">
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="relative">
                <Sparkles className="w-16 h-16 text-primary animate-pulse" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
              </div>
              <div className="text-center space-y-2">
                <h2 className="text-section-title font-display font-bold">
                  Analyzing Your Product Strategy
                </h2>
                <p className="text-muted-foreground">
                  Generating strategic propositions from 6-8 persuasion frameworks...
                </p>
              </div>
              <div className="w-full max-w-md">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary animate-loading-bar" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  const enhancedAssets = generateSampleEnhancedAssets();
  const sampleAsset = {
    ...enhancedAssets[0],
    appliedLadders: generatedLadders
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-7xl mx-auto mt-8 space-y-6">
        {/* Strategic Context Card */}
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-section-title">
                  <Target className="w-6 h-6 text-primary" />
                  Strategic Proposition Selection
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  {propositions.length} strategic propositions generated from {generatedLadders.length} frameworks
                </p>
              </div>
              <Button 
                variant="outline" 
                onClick={handleSelectRecommended}
                className="gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Select Top 10
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {generatedLadders.map(ladderId => {
                const framework = ladderFrameworks.find(f => f.id === ladderId);
                return framework ? (
                  <Badge key={ladderId} variant="secondary" className="gap-1">
                    <framework.icon className="w-3 h-3" />
                    {framework.name}
                  </Badge>
                ) : null;
              })}
            </div>
          </CardContent>
        </Card>

        {/* Selection Instructions */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Select 8-12 propositions to emphasize in your content
                </h3>
                <p className="text-sm text-muted-foreground">
                  Choose the strategic selling points that resonate most with your brand messaging and target audience. 
                  These will guide all content generation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Propositions by Category - Scannable List */}
        <div className="space-y-8">
          {/* Category Sections */}
          {categorizedPropositions.map((category, categoryIndex) => (
            <div key={category.category} className="space-y-4">
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-2 border-b-2 border-primary/20">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-8 rounded-full ${
                    category.category === 'functional' ? 'bg-blue-500' :
                    category.category === 'emotional' ? 'bg-purple-500' :
                    category.category === 'trust' ? 'bg-green-500' :
                    category.category === 'value' ? 'bg-orange-500' :
                    category.category === 'experience' ? 'bg-pink-500' :
                    'bg-cyan-500'
                  }`} />
                  <h3 className="text-xl font-display font-bold text-foreground">{category.name}</h3>
                </div>
              </div>

              {/* Propositions List */}
              <div className="space-y-2">
                {category.propositions.map((prop, propIndex) => (
                  <Card 
                    key={prop.id}
                    className={`transition-all hover:shadow-md cursor-pointer ${
                      selectedPropositions.includes(prop.id) ? 'border-primary border-2 bg-primary/5 shadow-sm' : 'hover:border-primary/50'
                    }`}
                    onClick={() => handleToggleProposition(prop.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        {/* Checkbox */}
                        <div className="pt-0.5">
                          <Checkbox 
                            checked={selectedPropositions.includes(prop.id)}
                            onCheckedChange={() => handleToggleProposition(prop.id)}
                            className="h-5 w-5"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-2">
                          <p className="text-base text-foreground leading-relaxed font-medium">
                            {prop.text}
                          </p>
                          <span className="text-xs text-muted-foreground">
                            {prop.ladderStep}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Selection Summary Panel */}
        <Card className="sticky bottom-6 border-2 border-primary/20 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">
                      {selectedPropositions.length} of 8-12 selected
                    </span>
                  </div>
                  {selectedPropositions.length < 8 && (
                    <p className="text-sm text-muted-foreground">
                      Select at least {8 - selectedPropositions.length} more
                    </p>
                  )}
                  {selectedPropositions.length > 12 && (
                    <p className="text-sm text-destructive">
                      Remove {selectedPropositions.length - 12} selections
                    </p>
                  )}
                </div>
                {selectedPropositions.length > 0 && (
                  <div className="flex flex-wrap gap-2 max-w-2xl">
                    {selectedPropositions.slice(0, 3).map(propId => {
                      const prop = propositions.find(p => p.id === propId);
                      return prop ? (
                        <Badge key={propId} variant="secondary" className="text-xs">
                          {prop.text.slice(0, 40)}...
                        </Badge>
                      ) : null;
                    })}
                    {selectedPropositions.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{selectedPropositions.length - 3} more
                      </Badge>
                    )}
                  </div>
                )}
              </div>
              <Button
                size="lg"
                onClick={handleContinue}
                disabled={!isValidSelection}
                className="gap-2"
              >
                Continue to Review
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Framework Details Collapsible */}
        <FrameworkDetailsCollapsible 
          ladderIds={generatedLadders}
          asset={sampleAsset}
        />
      </div>
    </div>
  );
};

export default StrategicBrief;
