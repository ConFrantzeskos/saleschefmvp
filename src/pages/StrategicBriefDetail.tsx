import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { generateSampleEnhancedAssets } from '@/utils/enhancedAssetGenerator';
import { extractPropositionsFromAsset } from '@/utils/propositionExtractor';
import LadderVisualization from '@/components/LadderVisualization';
import { ladderFrameworks } from '@/constants/ladderFrameworks';
import { toast } from 'sonner';

const StrategicBriefDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const assets = generateSampleEnhancedAssets();
  const asset = assets.find(a => a.id === Number(id));

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

  const allPropositions = extractPropositionsFromAsset(asset);
  const [selectedPropositions, setSelectedPropositions] = useState<string[]>(
    allPropositions.map(p => p.id)
  );

  const propositionsByFramework = asset.appliedLadders?.map(ladderId => {
    const framework = ladderFrameworks.find(f => f.id === ladderId);
    const frameworkProps = allPropositions.filter(p => p.frameworkId === ladderId);
    return {
      frameworkId: ladderId,
      frameworkName: framework?.name || 'Unknown Framework',
      propositions: frameworkProps
    };
  }).filter(group => group.propositions.length > 0) || [];

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
    p.strength === 'high' && p.frameworkId === asset.primaryLadder
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

          <div className="space-y-6">
            {propositionsByFramework.map((group) => {
              const framework = ladderFrameworks.find(f => f.id === group.frameworkId);
              const selectedInGroup = group.propositions.filter(p => 
                selectedPropositions.includes(p.id)
              ).length;

              return (
                <div key={group.frameworkId} className="border rounded-lg overflow-hidden">
                  <div className="p-4 bg-muted/30 border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-xs">
                          {framework?.category || 'Framework'}
                        </Badge>
                        <h3 className="font-semibold text-foreground">{group.frameworkName}</h3>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {selectedInGroup} of {group.propositions.length} selected
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    {group.propositions.map(prop => {
                      const isSelected = selectedPropositions.includes(prop.id);
                      const isHero = prop.strength === 'high';

                      return (
                        <div
                          key={prop.id}
                          className={`p-4 rounded-lg border transition-all cursor-pointer ${
                            isSelected 
                              ? 'border-primary bg-primary/5' 
                              : 'border-border hover:border-primary/50 hover:bg-muted/30'
                          } ${isHero ? 'border-l-4 border-l-primary' : ''}`}
                          onClick={() => handleToggleProposition(prop.id)}
                        >
                          <div className="flex items-start gap-3">
                            <Checkbox 
                              checked={isSelected}
                              onCheckedChange={() => handleToggleProposition(prop.id)}
                              className="mt-1"
                            />
                            <div className="flex-1 space-y-2">
                              <p className={`text-foreground leading-relaxed ${isHero ? 'font-semibold' : 'font-medium'}`}>
                                {prop.text}
                              </p>
                              <div className="flex items-center gap-2 flex-wrap">
                                <Badge variant="outline" className="text-xs">
                                  {prop.ladderStep}
                                </Badge>
                                {isHero && (
                                  <Badge className="text-xs bg-primary/10 text-primary border-primary/30">
                                    Hero Feature
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

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
