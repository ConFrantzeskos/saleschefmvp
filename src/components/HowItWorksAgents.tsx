
import React from 'react';
import AgentSection from './AgentSection';
import { coreAgents, inputAgents, strategyAgents, contentAgents, qualityAgents } from './constants/agentData';

const HowItWorksAgents = () => {
  return (
    <div className="mb-16">
      {/* Main section heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-4 sm:mb-6 text-balance">
          Meet the Chefs behind the Scenes
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Meet the AI agents that transform your raw product data into a feast of sales-ready content
        </p>
      </div>

      {/* Always-On Agents Section */}
      <AgentSection 
        title="👨‍🍳 Always on Agents"
        description="These four are always-on agents, observing and steering. Everything else happens because they decide it must."
        agents={coreAgents}
        gridCols="md:grid-cols-2 lg:grid-cols-4"
      />

      {/* Input & Intelligence Agents */}
      <AgentSection 
        title="🛠️ Input & Intelligence Agents"
        agents={inputAgents}
      />

      <AgentSection 
        title="🧠 Understanding & Strategy Agents"
        agents={strategyAgents}
      />

      <AgentSection 
        title="🎨 Content Transformation Agents"
        agents={contentAgents}
      />

      <AgentSection 
        title="✅ Quality & Delivery Agents"
        agents={qualityAgents}
        gridCols="md:grid-cols-2"
      />
    </div>
  );
};

export default HowItWorksAgents;
