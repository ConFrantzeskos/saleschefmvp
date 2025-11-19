import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Proposition } from '@/types/proposition';
import PropositionStrengthIndicator from './PropositionStrengthIndicator';
import PropositionIntelligence from './strategic-brief/PropositionIntelligence';

interface PropositionCardProps {
  proposition: Proposition;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

const PropositionCard = ({ proposition, isSelected, onToggle }: PropositionCardProps) => {
  const isHighStrength = proposition.strength === 'high';
  
  return (
    <Card 
      className={`p-4 hover:shadow-md transition-all cursor-pointer ${
        isSelected ? 'border-primary border-2 bg-primary/5' : ''
      } ${isHighStrength ? 'border-l-4 border-l-primary/40' : ''}`}
      onClick={() => onToggle(proposition.id)}
    >
      <div className="flex items-start gap-3">
        <Checkbox 
          checked={isSelected} 
          onCheckedChange={() => onToggle(proposition.id)}
          className="mt-1"
        />
        <div className="flex-1 space-y-2">
          <p className={`text-foreground leading-relaxed ${isHighStrength ? 'font-semibold' : 'font-medium'}`}>
            {proposition.text}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className="text-xs">
              {proposition.frameworkName}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {proposition.ladderStep}
            </span>
            <PropositionStrengthIndicator strength={proposition.strength} />
          </div>
          <PropositionIntelligence 
            proofPoints={proposition.proofPoints}
            seoKeywords={proposition.seoKeywords}
            competitiveAngle={proposition.competitiveAngle}
            objections={proposition.objections}
          />
        </div>
      </div>
    </Card>
  );
};

export default PropositionCard;
