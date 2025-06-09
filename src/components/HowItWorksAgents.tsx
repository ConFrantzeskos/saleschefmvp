
import React from 'react';
import AgentSection from './AgentSection';
import { coreAgents, inputAgents, strategyAgents, contentAgents, qualityAgents } from './constants/agentData';

const HowItWorksAgents = () => {
  return (
    <>
      {/* Core Always-On Agents */}
      <AgentSection 
        title="How SalesChef Works"
        description="Meet the AI agents that transform your raw product data into sales-ready content. These four are always-on agents, observing and steering. Everything else happens because they decide it must."
        agents={coreAgents}
        gridCols="md:grid-cols-2 lg:grid-cols-4"
      />

      {/* Input & Intelligence Agents */}
      <AgentSection 
        title="🛠️ Input & Intelligence Agents"
        agents={inputAgents}
      />

      {/* Understanding & Strategy Agents */}
      <AgentSection 
        title="🧠 Understanding & Strategy Agents"
        agents={strategyAgents}
      />

      {/* Content Transformation Agents */}
      <AgentSection 
        title="🎨 Content Transformation Agents"
        agents={contentAgents}
      />

      {/* Quality & Delivery Agents */}
      <AgentSection 
        title="✅ Quality & Delivery Agents"
        agents={qualityAgents}
        gridCols="md:grid-cols-2"
      />
    </>
  );
};

export default HowItWorksAgents;
