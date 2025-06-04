
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface AgentTagProps {
  agents: string[];
  className?: string;
}

const AgentTag = ({ agents, className }: AgentTagProps) => {
  return (
    <div className={`flex flex-wrap gap-1 ${className || ''}`}>
      {agents.map((agent) => (
        <Badge 
          key={agent} 
          variant="outline" 
          className="text-xs font-mono bg-muted/30 text-muted-foreground border-muted-foreground/20"
        >
          {agent}
        </Badge>
      ))}
    </div>
  );
};

export default AgentTag;
