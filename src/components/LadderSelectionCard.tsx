import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { LadderFramework } from '@/types/ladderTypes';

interface LadderSelectionCardProps {
  ladder: LadderFramework;
  isSelected: boolean;
  onToggle: () => void;
}

const LadderSelectionCard = ({ ladder, isSelected, onToggle }: LadderSelectionCardProps) => {
  const Icon = ladder.icon;
  
  const complexityColors = {
    simple: 'bg-green-500/10 text-green-700 dark:text-green-300',
    moderate: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-300',
    advanced: 'bg-red-500/10 text-red-700 dark:text-red-300'
  };

  return (
    <Card 
      className={`p-4 cursor-pointer transition-all duration-200 ${
        isSelected 
          ? 'border-2 border-primary bg-primary/5 shadow-lg' 
          : 'border-2 border-muted hover:border-primary/50 hover:shadow-md'
      }`}
      onClick={onToggle}
    >
      <div className="flex items-start gap-3 mb-3">
        <Checkbox 
          checked={isSelected}
          onCheckedChange={onToggle}
          className="mt-1"
          onClick={(e) => e.stopPropagation()}
        />
        <div className={`p-2 rounded-lg ${isSelected ? 'bg-primary text-white' : 'bg-muted'}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-foreground mb-1 leading-tight">{ladder.name}</h3>
          <div className="flex gap-2 flex-wrap mb-2">
            <Badge variant="outline" className={`text-xs ${complexityColors[ladder.complexity]}`}>
              {ladder.complexity}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {ladder.category}
            </Badge>
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
        {ladder.description}
      </p>

      <div className="space-y-2">
        <div>
          <div className="text-xs font-medium text-foreground mb-1">Best for:</div>
          <p className="text-xs text-muted-foreground leading-relaxed">{ladder.bestUse}</p>
        </div>

        <div>
          <div className="text-xs font-medium text-foreground mb-1">Progression:</div>
          <div className="flex items-center gap-1 flex-wrap">
            {ladder.steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <span className="text-xs text-muted-foreground">{step}</span>
                {idx < ladder.steps.length - 1 && (
                  <span className="text-xs text-primary">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-medium text-foreground mb-1">Examples:</div>
          <div className="flex gap-1 flex-wrap">
            {ladder.exampleBrands.slice(0, 2).map((brand, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {brand.split(' ')[0]}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LadderSelectionCard;
