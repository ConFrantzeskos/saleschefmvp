
import React from 'react';
import AgentCard from './AgentCard';

interface Agent {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  emoji: string;
  role: string;
  desc: string;
}

interface AgentSectionProps {
  title: string;
  description?: string;
  agents: Agent[];
  gridCols?: string;
}

const AgentSection = ({ title, description, agents, gridCols = "md:grid-cols-2 lg:grid-cols-3" }: AgentSectionProps) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
    {description && (
      <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
        {description}
      </p>
    )}
    <div className={`grid ${gridCols} gap-6`}>
      {agents.map((agent, index) => (
        <AgentCard key={index} agent={agent} index={index} />
      ))}
    </div>
  </div>
);

export default AgentSection;
