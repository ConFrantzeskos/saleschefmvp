import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';
import { Proposition } from '@/types/proposition';

interface TopMessagingSummaryProps {
  propositions: Proposition[];
}

export const TopMessagingSummary = ({ propositions }: TopMessagingSummaryProps) => {
  const topTen = selectTopTenPropositions(propositions);
  
  return (
    <Card className="mb-6 border-primary/20 bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          Top 10 Things to Say About This Product
        </CardTitle>
        <CardDescription>
          Highest-confidence messaging across all features and frameworks
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {topTen.map((item, i) => (
            <div 
              key={i} 
              className="flex items-start gap-2 p-3 rounded-lg bg-background hover:bg-muted/50 transition-colors"
            >
              <Badge variant={i < 3 ? "default" : "outline"} className="mt-0.5 shrink-0">
                {i + 1}
              </Badge>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm leading-relaxed mb-2">{item.text}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="secondary" className="text-xs">
                    {item.featureConfidence}% confidence
                  </Badge>
                  {item.feature && (
                    <span className="text-xs text-muted-foreground truncate">
                      {item.feature}
                    </span>
                  )}
                  {item.featurePriority === 1 && (
                    <Badge variant="outline" className="text-xs">⭐ Hero</Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const selectTopTenPropositions = (propositions: Proposition[]): Proposition[] => {
  // Group by feature to ensure diversity
  const grouped = propositions.reduce((acc, prop) => {
    const key = prop.feature || 'other';
    if (!acc[key]) acc[key] = [];
    acc[key].push(prop);
    return acc;
  }, {} as Record<string, Proposition[]>);
  
  // Take top propositions from each feature (max 3 per feature)
  const selected: Proposition[] = [];
  
  Object.entries(grouped).forEach(([feature, props]) => {
    const topThree = props
      .sort((a, b) => {
        const strengthScore: Record<string, number> = { high: 3, medium: 2, low: 1 };
        return (
          (strengthScore[b.strength] - strengthScore[a.strength]) ||
          ((b.featureConfidence || 0) - (a.featureConfidence || 0))
        );
      })
      .slice(0, 3);
    
    selected.push(...topThree);
  });
  
  // Sort all selected by confidence and take top 10
  return selected
    .sort((a, b) => ((b.featureConfidence || 0) - (a.featureConfidence || 0)))
    .slice(0, 10);
};
