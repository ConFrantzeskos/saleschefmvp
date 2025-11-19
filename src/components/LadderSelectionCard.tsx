import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Sparkles } from 'lucide-react';
import { LadderFramework } from '@/types/ladderTypes';
import { LadderRecommendation } from '@/utils/ladderRecommendationEngine';

interface LadderSelectionCardProps {
  ladder: LadderFramework;
  isSelected: boolean;
  onToggle: () => void;
  recommendation?: LadderRecommendation;
}

const LadderSelectionCard = ({ ladder, isSelected, onToggle, recommendation }: LadderSelectionCardProps) => {
  const Icon = ladder.icon;

  return (
    <Card 
      className={`p-5 cursor-pointer transition-all duration-200 hover:shadow-lg relative ${
        isSelected 
          ? 'border-2 border-primary bg-primary/5 shadow-md' 
          : 'border hover:border-primary/50'
      } ${recommendation ? 'border-l-4' : ''}`}
      style={recommendation ? {
        borderLeftColor: recommendation.priority === 'primary' ? 'hsl(var(--primary))' :
                         recommendation.priority === 'supporting' ? 'hsl(var(--chart-2))' :
                         'hsl(var(--muted-foreground))'
      } : {}}
      onClick={onToggle}
    >
      {/* Recommendation Badge */}
      {recommendation && (
        <div className="absolute top-3 right-3">
          <Badge 
            className={`text-xs gap-1 ${
              recommendation.priority === 'primary' ? 'bg-primary' :
              recommendation.priority === 'supporting' ? 'bg-chart-2 text-white' :
              'bg-muted text-muted-foreground'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            {recommendation.confidence}%
          </Badge>
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-foreground">{ladder.name}</h3>
            <Badge variant="outline" className="text-xs mt-1">
              {ladder.complexity}
            </Badge>
          </div>
        </div>
        {isSelected && (
          <div className="p-1 rounded-full bg-primary">
            <Check className="w-4 h-4 text-primary-foreground" />
          </div>
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-3">
        {ladder.description}
      </p>

      {/* Recommendation Reasoning */}
      {recommendation && (
        <div className="mb-3 p-2 rounded-lg bg-muted/50 border border-border">
          <p className="text-xs text-foreground font-medium mb-1">Why recommended:</p>
          <p className="text-xs text-muted-foreground">{recommendation.reasoning}</p>
        </div>
      )}

      <div className="text-xs text-muted-foreground mb-2">
        <strong>Best for:</strong> {ladder.bestUse}
      </div>

      <div className="flex flex-wrap gap-1">
        {ladder.exampleBrands.slice(0, 3).map((brand, index) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {brand}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default LadderSelectionCard;
