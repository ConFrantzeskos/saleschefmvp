import { Badge } from '@/components/ui/badge';
import { MessageSquare, Search, Target, AlertCircle } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface PropositionIntelligenceProps {
  proofPoints?: string[];
  seoKeywords?: string[];
  competitiveAngle?: string;
  objections?: string[];
}

const PropositionIntelligence = ({
  proofPoints,
  seoKeywords,
  competitiveAngle,
  objections
}: PropositionIntelligenceProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasIntelligence = proofPoints || seoKeywords || competitiveAngle || objections;

  if (!hasIntelligence) return null;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mt-2 w-full">
        <span className="font-medium">💡 Intelligence</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </CollapsibleTrigger>
      
      <CollapsibleContent>
        <div className="mt-3 p-3 bg-accent/30 rounded-lg space-y-3 text-xs">
          {proofPoints && proofPoints.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-primary" />
                <span className="font-medium text-foreground">Proof Points</span>
              </div>
              <ul className="space-y-1 pl-5">
                {proofPoints.map((point, idx) => (
                  <li key={idx} className="text-muted-foreground">• {point}</li>
                ))}
              </ul>
            </div>
          )}

          {seoKeywords && seoKeywords.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <Search className="w-3.5 h-3.5 text-primary" />
                <span className="font-medium text-foreground">SEO Keywords</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {seoKeywords.map((keyword, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs px-2 py-0">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {competitiveAngle && (
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <Target className="w-3.5 h-3.5 text-secondary" />
                <span className="font-medium text-foreground">Competitive Angle</span>
              </div>
              <p className="text-muted-foreground">{competitiveAngle}</p>
            </div>
          )}

          {objections && objections.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-orange-600" />
                <span className="font-medium text-foreground">Objections to Address</span>
              </div>
              <ul className="space-y-1 pl-5">
                {objections.map((objection, idx) => (
                  <li key={idx} className="text-muted-foreground">• {objection}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default PropositionIntelligence;
