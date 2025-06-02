
import React from 'react';

interface Agent {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  emoji: string;
  role: string;
  desc: string;
}

interface AgentCardProps {
  agent: Agent;
  index: number;
}

const AgentCard = ({ agent, index }: AgentCardProps) => (
  <div key={index} className="bg-background rounded-lg p-6 shadow-sm border">
    <div className="flex items-center gap-3 mb-3">
      <span className="text-2xl">{agent.emoji}</span>
      <agent.icon className="w-6 h-6 text-primary" />
    </div>
    <h4 className="font-semibold mb-2">{agent.name} Agent</h4>
    <p className="text-sm text-primary mb-2">{agent.role}</p>
    <p className="text-sm text-muted-foreground">{agent.desc}</p>
  </div>
);

export default AgentCard;
