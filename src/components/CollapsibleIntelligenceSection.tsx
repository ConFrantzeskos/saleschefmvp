
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import AgentTag from './AgentTag';

interface CollapsibleIntelligenceSectionProps {
  title: string;
  icon: React.ReactNode;
  agents: string[];
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const CollapsibleIntelligenceSection = React.memo(({
  title,
  icon,
  agents,
  children,
  isOpen,
  onToggle
}: CollapsibleIntelligenceSectionProps) => {
  return (
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <Card className="border-l-4 border-l-primary/20">
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {icon}
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
              </div>
              <div className="flex items-center space-x-3">
                <AgentTag agents={agents} />
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="pt-0">
            {children}
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
});

CollapsibleIntelligenceSection.displayName = 'CollapsibleIntelligenceSection';

export default CollapsibleIntelligenceSection;
