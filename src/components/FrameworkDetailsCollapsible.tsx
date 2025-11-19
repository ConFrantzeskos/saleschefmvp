import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card } from '@/components/ui/card';
import { ChevronDown, Info } from 'lucide-react';
import { useState } from 'react';
import LadderVisualization from './LadderVisualization';
import { EnhancedAsset } from '@/types/enhancedAsset';

interface FrameworkDetailsCollapsibleProps {
  ladderIds: string[];
  asset: EnhancedAsset;
}

const FrameworkDetailsCollapsible = ({ ladderIds, asset }: FrameworkDetailsCollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-8">
      <Card className="overflow-hidden">
        <CollapsibleTrigger className="w-full">
          <div className="flex items-center justify-between p-6 hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-muted">
                <Info className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-display font-semibold text-foreground">
                  View Framework Details
                </h3>
                <p className="text-sm text-muted-foreground">
                  See the full ladder visualizations for all {ladderIds.length} applied frameworks
                </p>
              </div>
            </div>
            <ChevronDown 
              className={`w-5 h-5 text-muted-foreground transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`} 
            />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="p-6 pt-0 border-t space-y-6">
            {ladderIds.map(ladderId => (
              <LadderVisualization 
                key={ladderId}
                ladderId={ladderId}
                asset={asset}
              />
            ))}
          </div>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default FrameworkDetailsCollapsible;
