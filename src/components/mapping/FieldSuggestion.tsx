import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';
import UnitBadge from './UnitBadge';
import { FieldMatch } from '@/utils/fieldInference';

interface FieldSuggestionProps {
  suggestion: FieldMatch;
}

const FieldSuggestion = ({ suggestion }: FieldSuggestionProps) => {
  const getConfidenceLevel = (confidence: number) => {
    if (confidence >= 0.85) return { 
      label: 'High Confidence', 
      color: 'text-green-600',
      icon: CheckCircle2
    };
    if (confidence >= 0.70) return { 
      label: 'Medium Confidence', 
      color: 'text-yellow-600',
      icon: TrendingUp
    };
    return { 
      label: 'Low Confidence', 
      color: 'text-orange-600',
      icon: AlertCircle
    };
  };

  const confidenceLevel = getConfidenceLevel(suggestion.confidence);
  const ConfidenceIcon = confidenceLevel.icon;

  return (
    <Card className="mt-2 bg-muted/30 border-l-4" style={{ borderLeftColor: confidenceLevel.color.includes('green') ? 'rgb(22 163 74)' : confidenceLevel.color.includes('yellow') ? 'rgb(202 138 4)' : 'rgb(234 88 12)' }}>
      <CardContent className="p-3 space-y-2">
        <div className="flex items-start gap-2">
          <Lightbulb className="w-4 h-4 text-primary mt-0.5" />
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Suggested: {suggestion.sourceField}</p>
              <div className="flex items-center gap-1.5">
                <ConfidenceIcon className={`w-3.5 h-3.5 ${confidenceLevel.color}`} />
                <span className={`text-xs font-semibold ${confidenceLevel.color}`}>
                  {Math.round(suggestion.confidence * 100)}% • {confidenceLevel.label}
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {suggestion.detectedUnit && (
                <UnitBadge system={suggestion.unitSystem || 'none'} unit={suggestion.detectedUnit} />
              )}
            </div>
            
            <p className="text-xs text-muted-foreground italic">"{suggestion.reason}"</p>
            
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
