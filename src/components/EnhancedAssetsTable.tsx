import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Target, Brain, TrendingUp, Sparkles } from 'lucide-react';
import { EnhancedAsset } from '@/types/enhancedAsset';

interface EnhancedAssetsTableProps {
  assets: EnhancedAsset[];
}

const EnhancedAssetsTable = ({ assets }: EnhancedAssetsTableProps) => {
  const navigate = useNavigate();

  const getConfidenceBadge = (score: number) => {
    if (score >= 90) return <Badge className="bg-primary shadow-sm">Excellent</Badge>;
    if (score >= 75) return <Badge variant="secondary">Good</Badge>;
    return <Badge variant="outline">Fair</Badge>;
  };

  return (
    <div className="p-6 space-y-4">
      {assets.map((asset, index) => (
        <div 
          key={asset.id} 
          className="group p-6 border rounded-xl hover:border-primary/50 hover:shadow-xl transition-all bg-card animate-fade-in"
          style={{ animationDelay: `${0.1 + index * 0.1}s` }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-sm text-muted-foreground bg-muted px-2 py-1 rounded">{asset.sku}</span>
                {getConfidenceBadge(asset.confidenceScore)}
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {asset.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{asset.category} • {asset.brand}</p>
              
              {/* Core Value Proposition */}
              <div className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  {asset.coreValueProposition}
                </p>
              </div>
            </div>

            <Button
              onClick={() => navigate(`/enhancement-review/${asset.id}`)}
              size="lg"
              className="gap-2 shadow-lg hover-scale ml-6"
            >
              <Eye className="w-5 h-5" />
              View Full Brief
            </Button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="p-4 rounded-lg bg-muted/30 group-hover:bg-primary/5 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded bg-[hsl(var(--chart-1))]/10">
                  <Target className="w-4 h-4 text-[hsl(var(--chart-1))]" />
                </div>
                <span className="text-xs text-muted-foreground">Persona Match</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className="bg-[hsl(var(--chart-1))] h-2 rounded-full transition-all"
                    style={{ width: `${asset.personaMatchScore}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-[hsl(var(--chart-1))]">{asset.personaMatchScore}%</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/30 group-hover:bg-primary/5 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded bg-[hsl(var(--chart-2))]/10">
                  <TrendingUp className="w-4 h-4 text-[hsl(var(--chart-2))]" />
                </div>
                <span className="text-xs text-muted-foreground">Message Strength</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className="bg-[hsl(var(--chart-2))] h-2 rounded-full transition-all"
                    style={{ width: `${asset.messageStrengthScore}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-[hsl(var(--chart-2))]">{asset.messageStrengthScore}%</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-muted/30 group-hover:bg-primary/5 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded bg-[hsl(var(--chart-3))]/10">
                  <Brain className="w-4 h-4 text-[hsl(var(--chart-3))]" />
                </div>
                <span className="text-xs text-muted-foreground">Reasons to Buy</span>
              </div>
              <div className="text-2xl font-bold text-[hsl(var(--chart-3))]">{asset.rtbCount}</div>
            </div>

            <div className="p-4 rounded-lg bg-muted/30 group-hover:bg-primary/5 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded bg-primary/10">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">Confidence</span>
              </div>
              <div className="text-2xl font-bold text-primary">{asset.confidenceScore}%</div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t">
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-medium">Primary Persona</p>
              <p className="text-sm text-foreground">{asset.primaryPersona}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1 font-medium">Key Differentiator</p>
              <p className="text-sm text-foreground">{asset.keyDifferentiator}</p>
            </div>
          </div>

          {/* Strategic Frameworks Badge */}
          <div className="mt-4 pt-4 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4" />
                <span>Includes: Benefit Ladder • Message Hierarchy • Psychology Triggers • Conversion Heuristics</span>
              </div>
              <span className="text-xs text-primary font-medium">Complete Strategic Brief</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnhancedAssetsTable;
