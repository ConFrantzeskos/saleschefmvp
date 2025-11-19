import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface PropositionStrengthIndicatorProps {
  strength: 'high' | 'medium' | 'low';
}

const PropositionStrengthIndicator = ({ strength }: PropositionStrengthIndicatorProps) => {
  const config = {
    high: {
      color: 'bg-green-500',
      label: 'High confidence',
      description: 'Strong strategic value based on multiple factors'
    },
    medium: {
      color: 'bg-yellow-500',
      label: 'Medium confidence',
      description: 'Good strategic value with some supporting evidence'
    },
    low: {
      color: 'bg-gray-400',
      label: 'Lower confidence',
      description: 'Emerging strategic opportunity'
    }
  };

  const { color, label, description } = config[strength];

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`w-2 h-2 rounded-full ${color}`} />
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-sm">
            <p className="font-semibold">{label}</p>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default PropositionStrengthIndicator;
