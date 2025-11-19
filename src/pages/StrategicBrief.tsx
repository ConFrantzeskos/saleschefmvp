import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Brain, Sparkles, CheckCircle2 } from 'lucide-react';
import { ladderFrameworks } from '@/constants/ladderFrameworks';
import { generateSampleEnhancedAssets } from '@/utils/enhancedAssetGenerator';
import { extractFeaturesFromAsset } from '@/utils/featureExtractor';
import { generateLadderApplications } from '@/utils/multiFeatureLadderGenerator';

type Phase = 'evaluating' | 'analyzing' | 'generating' | 'complete';

const StrategicBrief = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>('evaluating');
  const [progress, setProgress] = useState(0);
  const [visibleFrameworks, setVisibleFrameworks] = useState<string[]>([]);
  const [currentAsset, setCurrentAsset] = useState<{ name: string; feature: string; confidence: number } | null>(null);
  const [appliedFrameworks, setAppliedFrameworks] = useState<string[]>([]);
  const [totalPropositions, setTotalPropositions] = useState(0);
  const [enhancedCount, setEnhancedCount] = useState(0);

  useEffect(() => {
    const runStrategicAnalysis = async () => {
      // Phase 1: Show all frameworks being evaluated (3s)
      setPhase('evaluating');
      const frameworkIds = ladderFrameworks.map(f => f.id);
      
      for (let i = 0; i < frameworkIds.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 130));
        setVisibleFrameworks(prev => [...prev, frameworkIds[i]]);
        setProgress((i + 1) / frameworkIds.length * 25);
      }

      await new Promise(resolve => setTimeout(resolve, 500));

      // Phase 2: Analyze each asset (4s)
      setPhase('analyzing');
      const enrichmentAssets = JSON.parse(sessionStorage.getItem('enrichmentAssets') || '[]');
      
      const assetsToAnalyze = enrichmentAssets.length > 0 ? enrichmentAssets.slice(0, 4) : [
        { name: 'CD1234 - Wireless Headphones', heroFeature: '24-hour battery life', confidence: 95 },
        { name: 'SM5678 - Smart Watch', heroFeature: 'Health tracking', confidence: 88 },
        { name: 'TB9012 - Tablet', heroFeature: '12-hour battery', confidence: 92 },
        { name: 'LP3456 - Laptop', heroFeature: 'Ultra-lightweight design', confidence: 90 }
      ];

      for (let i = 0; i < assetsToAnalyze.length; i++) {
        const asset = assetsToAnalyze[i];
        setCurrentAsset({
          name: asset.name,
          feature: asset.heroFeature || 'premium features',
          confidence: asset.confidence || 85
        });

        await new Promise(resolve => setTimeout(resolve, 600));
        
        const recommendedFrameworks = frameworkIds.slice(0, 7);
        setAppliedFrameworks(recommendedFrameworks);
        
        await new Promise(resolve => setTimeout(resolve, 400));
        
        setProgress(25 + ((i + 1) / assetsToAnalyze.length) * 50);
      }

      // Phase 3: Generate propositions with multi-feature analysis (3s)
      setPhase('generating');
      const sampleAssets = generateSampleEnhancedAssets();
      
      // NEW: Apply feature extraction and ladder generation to each asset
      const enhancedAssetsWithFeatures = sampleAssets.map(asset => {
        // Extract features from multiple data sources
        const features = extractFeaturesFromAsset(asset);
        
        // Generate ladder applications for each feature
        const ladderApplications = generateLadderApplications(asset, features);
        
        // Calculate total propositions (each ladder application generates 2-3 propositions)
        const propositionCount = ladderApplications.length * 2;
        
        return {
          ...asset,
          featureAnalysis: features,
          ladderApplications: ladderApplications
        };
      });
      
      sessionStorage.setItem('enhancedAssets', JSON.stringify(enhancedAssetsWithFeatures));
      
      let propCount = 0;
      for (let i = 0; i < enhancedAssetsWithFeatures.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 200));
        setEnhancedCount(i + 1);
        // Count actual propositions (2-3 per ladder application)
        const assetPropCount = (enhancedAssetsWithFeatures[i].ladderApplications?.length || 0) * 2;
        propCount += assetPropCount || 13; // Fallback to 13 for backward compatibility
        setTotalPropositions(propCount);
        setProgress(75 + ((i + 1) / enhancedAssetsWithFeatures.length) * 20);
      }

      // Phase 4: Complete
      setPhase('complete');
      setProgress(100);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate('/enhancement-review');
    };

    runStrategicAnalysis();
  }, [navigate]);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'persuasion': 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
      'value': 'bg-green-500/10 text-green-700 dark:text-green-400',
      'psychology': 'bg-purple-500/10 text-purple-700 dark:text-purple-400',
      'experience': 'bg-orange-500/10 text-orange-700 dark:text-orange-400',
      'trust': 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400'
    };
    return colors[category] || 'bg-muted text-muted-foreground';
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-8">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {phase === 'evaluating' && 'Evaluating strategic frameworks...'}
              {phase === 'analyzing' && 'Analyzing product features...'}
              {phase === 'generating' && 'Generating strategic propositions...'}
              {phase === 'complete' && 'Analysis complete!'}
            </span>
            <span className="font-medium text-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {phase === 'evaluating' && (
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold text-foreground">Strategic Framework Evaluation</h2>
                <p className="text-sm text-muted-foreground">Analyzing {ladderFrameworks.length} persuasion ladders</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {ladderFrameworks.map((framework) => (
                <div
                  key={framework.id}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    visibleFrameworks.includes(framework.id)
                      ? 'border-primary bg-primary/5 animate-fade-in'
                      : 'border-transparent opacity-20'
                  }`}
                >
                  <Badge variant="outline" className={`text-xs mb-2 ${getCategoryColor(framework.category)}`}>
                    {framework.category}
                  </Badge>
                  <p className="text-sm font-medium text-foreground">{framework.name}</p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {phase === 'analyzing' && currentAsset && (
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 animate-pulse">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold text-foreground">Asset-Specific Analysis</h2>
                <p className="text-sm text-muted-foreground">Applying optimal frameworks to each product</p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{currentAsset.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Analyzing: <span className="font-medium text-foreground">{currentAsset.feature}</span>
                  </p>
                </div>
                <Badge className="bg-primary">{currentAsset.confidence}%</Badge>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">Applied Frameworks:</p>
                <div className="flex flex-wrap gap-2">
                  {appliedFrameworks.map((fid) => {
                    const framework = ladderFrameworks.find(f => f.id === fid);
                    return framework ? (
                      <Badge key={fid} variant="outline" className="animate-fade-in">
                        {framework.name}
                      </Badge>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          </Card>
        )}

        {(phase === 'generating' || phase === 'complete') && (
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-lg ${phase === 'complete' ? 'bg-green-500/10' : 'bg-primary/10 animate-pulse'}`}>
                {phase === 'complete' ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                ) : (
                  <Sparkles className="w-6 h-6 text-primary" />
                )}
              </div>
              <div>
                <h2 className="text-xl font-display font-bold text-foreground">
                  {phase === 'complete' ? 'Multi-Feature Analysis Complete' : 'Multi-Feature Proposition Generation'}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {phase === 'complete' ? 'Strategic briefs with diverse propositions ready' : 'Extracting features and generating strategic propositions'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-muted/30">
                <div className="text-3xl font-bold text-primary mb-2">{enhancedCount}</div>
                <div className="text-sm text-muted-foreground">Assets Analyzed</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-muted/30">
                <div className="text-3xl font-bold text-primary mb-2">{totalPropositions}+</div>
                <div className="text-sm text-muted-foreground">Propositions Generated</div>
              </div>
              <div className="text-center p-6 rounded-lg bg-muted/30">
                <div className="text-3xl font-bold text-primary mb-2">{appliedFrameworks.length}</div>
                <div className="text-sm text-muted-foreground">Frameworks Applied</div>
              </div>
            </div>

            {phase === 'complete' && (
              <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20 animate-fade-in">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">What's New: Multi-Feature Analysis</p>
                    <p className="text-xs text-muted-foreground">
                      Each asset now has 40-50+ diverse propositions across multiple key features. 
                      View "Top 10 Things to Say" summaries organized by feature priority and confidence.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {phase === 'complete' && (
              <p className="text-center text-sm text-muted-foreground mt-6 animate-fade-in">
                Redirecting to enhancement review...
              </p>
            )}
          </Card>
        )}
      </div>
    </div>
  );
};

export default StrategicBrief;
