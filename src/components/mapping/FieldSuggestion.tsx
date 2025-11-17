import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, TrendingUp } from 'lucide-react';
import UnitBadge from './UnitBadge';
import { FieldMatch } from '@/utils/fieldInference';

interface FieldSuggestionProps {
  suggestion: FieldMatch;
}

const FieldSuggestion = ({ suggestion }: FieldSuggestionProps) => {
  const confidenceColor = 
    suggestion.confidence >= 0.8 ? 'text-green-600' :
    suggestion.confidence >= 0.5 ? 'text-yellow-600' :
    'text-muted-foreground';

  return (
    <Card className="mt-2 bg-muted/30">
      <CardContent className="p-3 space-y-2">
        <div className="flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-primary mt-0.5" />
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Suggested: {suggestion.sourceField}</p>
              <div className="flex items-center gap-1">
                <TrendingUp className={`w-3 h-3 ${confidenceColor}`} />
                <span className={`text-xs font-medium ${confidenceColor}`}>
                  {Math.round(suggestion.confidence * 100)}%
                </span>
              </div>
            </div>
            
            {suggestion.detectedUnit && (
              <div className="flex items-center gap-2">
                <UnitBadge system={suggestion.unitSystem || 'none'} unit={suggestion.detectedUnit} />
              </div>
            )}
            
            <p className="text-xs text-muted-foreground">{suggestion.reason}</p>
            
            {suggestion.sampleValues && suggestion.sampleValues.length > 0 && (
              <div className="text-xs text-muted-foreground">
                <span className="font-medium">Sample: </span>
                {suggestion.sampleValues.slice(0, 3).join(', ')}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FieldSuggestion;
