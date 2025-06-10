
import React from 'react';
import AgentSection from './AgentSection';
import { coreAgents, inputAgents, strategyAgents, contentAgents, qualityAgents } from './constants/agentData';

const HowItWorksAgents = () => {
  return (
    <section className="content-padding section-spacing-md bg-muted/20">
      <div className="content-width space-elements-lg">
        {/* Main section heading */}
        <div className="text-center space-elements-sm">
          <h2 className="text-section-title text-balance">
            Meet the Chefs behind the Scenes
          </h2>
          <p className="text-body-large text-muted-foreground">
            Meet the AI agents that transform your raw product data into a feast of sales-ready content
          </p>
        </div>

        {/* Always-On Agents Section */}
        <AgentSection 
          title="👨‍🍳 Always on Agents"
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
    </section>
  );
};

export default HowItWorksAgents;
