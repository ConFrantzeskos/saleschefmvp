import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ladderFrameworks } from '@/constants/ladderFrameworks';
import { LadderRecommendationEngine } from '@/utils/ladderRecommendationEngine';
import { ProductContext, LadderRecommendation } from '@/utils/ladderRecommendationEngine';
import { Sparkles, CheckCircle, Zap } from 'lucide-react';

interface StrategicLoadingSequenceProps {
  productContext: ProductContext;
  onComplete: () => void;
}

type Phase = 'all-ladders' | 'selection' | 'working' | 'complete';

const StrategicLoadingSequence = ({ productContext, onComplete }: StrategicLoadingSequenceProps) => {
  const [phase, setPhase] = useState<Phase>('all-ladders');
  const [progress, setProgress] = useState(0);
  const [recommendations, setRecommendations] = useState<LadderRecommendation[]>([]);
  const [visibleLadders, setVisibleLadders] = useState<number[]>([]);
  const [evaluatingIndex, setEvaluatingIndex] = useState<number>(-1);
  const [selectedLadders, setSelectedLadders] = useState<string[]>([]);
  const [workingLadderIndex, setWorkingLadderIndex] = useState(0);
  const [propositionCount, setPropositionCount] = useState(0);

  // Phase timing
  useEffect(() => {
    const phases = [
      { name: 'all-ladders' as Phase, duration: 2000 },
      { name: 'selection' as Phase, duration: 3000 },
      { name: 'working' as Phase, duration: 3000 },
    ];

    let currentPhaseIndex = 0;
    const phaseTimer = setInterval(() => {
      currentPhaseIndex++;
      if (currentPhaseIndex < phases.length) {
        setPhase(phases[currentPhaseIndex].name);
      } else {
        setPhase('complete');
        setTimeout(onComplete, 300);
      }
    }, phases[currentPhaseIndex]?.duration || 2000);

    // Progress bar
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + (100 / 80); // 8 seconds = 80 intervals of 100ms
      });
    }, 100);

    return () => {
      clearInterval(phaseTimer);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  // Phase 1: Cascade in all ladders
  useEffect(() => {
    if (phase === 'all-ladders') {
      ladderFrameworks.forEach((_, index) => {
        setTimeout(() => {
          setVisibleLadders(prev => [...prev, index]);
        }, index * 80);
      });
    }
  }, [phase]);

  // Phase 2: Generate recommendations and animate selection
  useEffect(() => {
    if (phase === 'selection') {
      const recs = LadderRecommendationEngine.generateRecommendations(productContext);
      setRecommendations(recs);

      // Animate evaluation
      const topRecs = recs.slice(0, 8);
      topRecs.forEach((rec, index) => {
        setTimeout(() => {
          setEvaluatingIndex(index);
        }, index * 300);
      });

              // Show selected ladders
              setTimeout(() => {
                setSelectedLadders(topRecs.map(r => r.ladderId));
              }, topRecs.length * 300 + 500);
    }
  }, [phase, productContext]);

  // Phase 3: Work through ladders and count propositions
  useEffect(() => {
    if (phase === 'working') {
      const selectedRecs = recommendations.slice(0, 8);
      
      // Cycle through ladders
      const ladderInterval = setInterval(() => {
        setWorkingLadderIndex(prev => {
          if (prev >= selectedRecs.length - 1) {
            clearInterval(ladderInterval);
            return prev;
          }
          return prev + 1;
        });
      }, 350);

      // Count up propositions
      const countInterval = setInterval(() => {
        setPropositionCount(prev => {
          if (prev >= 47) {
            clearInterval(countInterval);
            return 47;
          }
          return prev + 3;
        });
      }, 100);

      return () => {
        clearInterval(ladderInterval);
        clearInterval(countInterval);
      };
    }
  }, [phase, recommendations]);

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      functional: 'bg-blue-500',
      emotional: 'bg-purple-500',
      trust: 'bg-green-500',
      value: 'bg-amber-500',
      experience: 'bg-pink-500',
      behavioral: 'bg-cyan-500',
    };
    return colorMap[category] || 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full space-y-6">
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground font-medium">Analyzing Your Product Strategy</span>
            <span className="text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Phase 1: All Ladders Grid */}
        {phase === 'all-ladders' && (
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display font-bold text-foreground">
                  22 Strategic Frameworks Available
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {ladderFrameworks.map((ladder, index) => {
                  const Icon = ladder.icon;
                  return (
                    <div
                      key={ladder.id}
                      className={`transition-all duration-300 ${
                        visibleLadders.includes(index)
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-95'
                      }`}
                    >
                      <Card className="h-full hover:shadow-md transition-shadow">
                        <CardContent className="p-4 flex flex-col items-center gap-2 text-center">
                          <div className={`w-10 h-10 rounded-lg ${getCategoryColor(ladder.category)} flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-xs font-medium text-foreground leading-tight">
                            {ladder.name}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Phase 2: Strategic Selection */}
        {phase === 'selection' && (
          <div className="space-y-6">
            {/* Product Context */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Product Context</h3>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <Badge variant="secondary">{productContext.industry}</Badge>
                      <Badge variant="secondary">{productContext.category}</Badge>
                      <Badge variant="secondary">{productContext.targetPersona}</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="border-2">
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-amber-500" />
                  Optimal Strategic Selection
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendations.slice(0, 8).map((rec, index) => {
                    const framework = ladderFrameworks.find(l => l.id === rec.ladderId);
                    if (!framework) return null;
                    
                    const Icon = framework.icon;
                    const isEvaluating = evaluatingIndex === index;
                    const isSelected = selectedLadders.includes(rec.ladderId);
                    
                    return (
                      <div
                        key={rec.ladderId}
                        className={`transition-all duration-500 ${
                          isSelected
                            ? 'opacity-100 scale-100'
                            : evaluatingIndex >= index
                            ? 'opacity-40 scale-95'
                            : 'opacity-20 scale-90'
                        }`}
                      >
                        <Card className={`h-full ${isEvaluating ? 'ring-2 ring-primary shadow-lg' : ''} ${isSelected ? 'border-primary border-2 bg-primary/5' : ''}`}>
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <div className={`w-10 h-10 rounded-lg ${getCategoryColor(framework.category)} flex items-center justify-center flex-shrink-0`}>
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2 mb-1">
                                  <span className="text-sm font-semibold text-foreground leading-tight">
                                    {framework.name}
                                  </span>
                                  {isSelected && (
                                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                  )}
                                </div>
                                {evaluatingIndex >= index && (
                                  <div className="flex items-center gap-2 mt-2">
                                    <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                                      <div 
                                        className="h-full bg-primary transition-all duration-300"
                                        style={{ width: `${rec.confidence}%` }}
                                      />
                                    </div>
                                    <span className="text-xs font-bold text-primary">
                                      {rec.confidence}%
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
                {selectedLadders.length > 0 && (
                  <p className="text-sm text-muted-foreground mt-6 text-center">
                    Based on technical specs + {productContext.targetPersona.toLowerCase()} persona
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Phase 3: Working the Ladders */}
        {phase === 'working' && (
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-display font-bold text-foreground flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Extracting Strategic Propositions
                </h2>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">{propositionCount}</div>
                  <div className="text-xs text-muted-foreground">Propositions</div>
                </div>
              </div>

              <div className="space-y-3">
                {recommendations.slice(0, 8).map((rec, index) => {
                  const framework = ladderFrameworks.find(l => l.id === rec.ladderId);
                  if (!framework) return null;
                  
                  const Icon = framework.icon;
                  const isActive = workingLadderIndex === index;
                  const isComplete = workingLadderIndex > index;
                  
                  return (
                    <div
                      key={rec.ladderId}
                      className={`transition-all duration-300 ${
                        isActive ? 'scale-105' : 'scale-100'
                      } ${isComplete ? 'opacity-50' : 'opacity-100'}`}
                    >
                      <Card className={`${isActive ? 'border-primary border-2 shadow-lg bg-primary/5' : ''}`}>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg ${getCategoryColor(framework.category)} flex items-center justify-center flex-shrink-0`}>
                              {isComplete ? (
                                <CheckCircle className="w-4 h-4 text-white" />
                              ) : (
                                <Icon className="w-4 h-4 text-white" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-sm text-foreground">
                                {framework.name}
                              </div>
                              {isActive && (
                                <div className="text-xs text-muted-foreground mt-1">
                                  {framework.steps.map((step, i) => (
                                    <span key={i}>
                                      {step}
                                      {i < framework.steps.length - 1 && ' → '}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            {isActive && (
                              <div className="flex-shrink-0">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default StrategicLoadingSequence;
