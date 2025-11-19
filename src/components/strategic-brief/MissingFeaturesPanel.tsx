import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Lightbulb } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface MissingFeaturesPanelProps {
  missingFeatures: string;
  featureRequests: string;
  innovationGaps?: string;
}

const MissingFeaturesPanel = ({
  missingFeatures,
  featureRequests,
  innovationGaps
}: MissingFeaturesPanelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="border-orange-200 bg-orange-50/50 dark:bg-orange-950/10 dark:border-orange-900/40">
        <CollapsibleTrigger className="w-full p-6 flex items-center justify-between hover:bg-orange-100/50 dark:hover:bg-orange-950/20 transition-colors">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-500" />
            <h3 className="text-lg font-semibold text-foreground">Features Customers Want (Address Proactively)</h3>
            <Badge variant="outline" className="border-orange-400 text-orange-700 dark:text-orange-400">Handle Objections</Badge>
          </div>
          <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <div className="px-6 pb-6 space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-orange-600 dark:text-orange-500" />
                <p className="text-sm font-medium text-foreground">Missing Features</p>
              </div>
              <p className="text-sm text-muted-foreground pl-6">{missingFeatures}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-orange-600 dark:text-orange-500" />
                <p className="text-sm font-medium text-foreground">Customer Requests</p>
              </div>
              <p className="text-sm text-muted-foreground pl-6">{featureRequests}</p>
            </div>

            {innovationGaps && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-orange-600 dark:text-orange-500" />
                  <p className="text-sm font-medium text-foreground">Innovation Opportunities</p>
                </div>
                <p className="text-sm text-muted-foreground pl-6">{innovationGaps}</p>
              </div>
            )}

            <div className="mt-4 p-3 bg-background rounded-lg border border-orange-200 dark:border-orange-900/40">
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">Tip:</strong> Address these gaps proactively in your content with positive reframing. 
                Example: "Optimized for 24hr battery life" instead of "No ANC available"
              </p>
            </div>
          </div>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default MissingFeaturesPanel;
