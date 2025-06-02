
import React from 'react';
import { Brain, Database, RefreshCw, Activity, Trash2, Eye, Satellite, Target, Lightbulb, User, FileText, Building, Pen, Image, Headphones, Video, Code, Wrench, CheckCircle, Truck } from 'lucide-react';

const AgentsSection = () => {
  const coreAgents = [
    { icon: Brain, name: 'Designator', emoji: '🧠', role: 'Executive Chef / Orchestrator', desc: 'Oversees the full lifecycle. Dynamically routes tasks to agents. Adapts pipelines. Handles prioritisation, exceptions, fallbacks.', output: 'Agentic workflow plan(task graph)' },
    { icon: Database, name: 'Depth', emoji: '🧬', role: 'Knowledge Graph Keeper', desc: 'Stores persistent memory. Tracks historical performance, past decisions, best practices, brand rules, blueprint versions.', output: 'Contextual memory & knowledge base' },
    { icon: RefreshCw, name: 'Debrief', emoji: '🪞', role: 'Strategic Critic', desc: 'Reflects on outcomes, measures alignment with goals, suggests structural improvements, and can replan the pipeline.', output: 'Improvement directives & re-routing triggers' },
    { icon: Activity, name: 'Diagnose', emoji: '📊', role: 'Performance Analyst', desc: 'Interprets metrics and outcomes. Reports on effectiveness and inefficiencies. Passes signals back to Designator & Debrief.', output: 'Performance reports & alerts' }
  ];

  const inputAgents = [
    { icon: Trash2, name: 'Drop', emoji: '🧹', role: 'Data Preparer', desc: 'Ingests, parses, deduplicates, corrects, categorises and validates product data from multiple formats (CSV, PDF, URLs, ERP, CMS, etc.)', output: 'Cleaned, structured product data' },
    { icon: Eye, name: 'Discover', emoji: '🔍', role: 'Context Collector', desc: 'Gathers search data, reviews, social sentiment, competitor PDPs, keyword.', output: 'Enriched product intelligence' },
    { icon: Satellite, name: 'Detect', emoji: '🛰️', role: 'Signal Watcher', desc: 'Monitors external change: market shifts, seasonal trends, competitive moves, weather, macro alerts.', output: 'Change signals & trend triggers' }
  ];

  const strategyAgents = [
    { icon: Target, name: 'Define', emoji: '🎯', role: 'Audience Profiler', desc: 'Maps customer segments, buyer personas and journey stages. Aligns content to end-customer context.', output: 'Persona profiles & segment maps' },
    { icon: Lightbulb, name: 'Distil', emoji: '🧠', role: 'Strategic Planner', desc: 'Creates ladders of benefits, RTBs, differentiation logic, insights, and value frameworks.', output: 'Strategic narrative assets' },
    { icon: User, name: 'Duty', emoji: '🪪', role: 'Internal Role Mapper', desc: 'Identifies internal stakeholders (e.g. Marketing, Studio, Retail Ops) and their job-to-be-done. Aligns and packages content deliverables to match each role\'s needs. The Duty Agent defines the need, while the Design Agent defines the output/format.', output: 'Stakeholder-aligned content briefs & task bundles' },
    { icon: FileText, name: 'Design', emoji: '🗂️', role: 'Blueprint Extractor', desc: 'Reads and stores guidelines/tone of voice/layouts/templates/format rules for PDPs, spec sheets, ranging reviews, banners, print, email, etc.', output: 'Blueprints & format maps' },
    { icon: Building, name: 'Document', emoji: '🧱', role: 'Content and Schema Taxonomist', desc: 'Defines and manages the schema connecting assets to their content units, renditions, and media blobs. Enables traceability and scalability across all channels.', output: 'Structured content hierarchy & metadata relationships' }
  ];

  const contentAgents = [
    { icon: Pen, name: 'Draft', emoji: '✍️', role: 'Copywriter (Text)', desc: 'Creates text-based outputs: PDPs, ads, sales decks, training docs, bullets, SEO tags.', output: 'Copy blocks & text content' },
    { icon: Image, name: 'Draw', emoji: '🖼️', role: 'Visual Designer (Image)', desc: 'Produces images, diagrams, retail tickets, starbursts, infographics, overlays and visual renditions of product information.', output: 'Images, infographics, illustrations' },
    { icon: Headphones, name: 'Dub', emoji: '🎧', role: 'Voice Narrator (Audio)', desc: 'Generates spoken audio for PDPs, training guides, digital signage, advertising, accessibility.', output: 'Voiceover audio files' },
    { icon: Video, name: 'Director', emoji: '🎬', role: 'Video Producer (Video)', desc: 'Creates short-form and long-form video content: video ads, explainer reels, PDP loops, TikToks, motion banners.', output: 'Video files (MP4, etc.)' },
    { icon: Code, name: 'Dev', emoji: '🧑‍💻', role: 'Frontend Assembler (Software)', desc: 'Generates interactive modules, embedded tools, digital experiences (e.g. quizzes, guides, configurators).', output: 'HTML/JS widgets & digital tools' },
    { icon: Wrench, name: 'Drive', emoji: '🧰', role: 'Hardware/Specs Preparer (HW)', desc: 'Prepares packaging info, firmware notes, installation diagrams, POS material (physical and digital).', output: 'Technical & physical artefacts' }
  ];

  const qualityAgents = [
    { icon: CheckCircle, name: 'Diligence', emoji: '🔎', role: 'QA Validator', desc: 'Audits all output for accuracy, completeness, and brand fidelity. Flags issues or auto-corrects.', output: 'Validation status & correction logs' },
    { icon: Truck, name: 'Deploy', emoji: '🚚', role: 'Channel Publisher', desc: 'Publishes/exports content to eComm systems, CMSs, social, POS, email, retailer portals, and more. Logs each deployment.', output: 'Deployed assets with logs' }
  ];

  const AgentCard = ({ agent, index }: { agent: any, index: number }) => (
    <div key={index} className="bg-background rounded-lg p-6 shadow-sm border-l-4 border-primary">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{agent.emoji}</span>
        <agent.icon className="w-6 h-6 text-primary" />
      </div>
      <h4 className="font-semibold mb-2">{agent.name} Agent</h4>
      <p className="text-sm text-primary mb-2">{agent.role}</p>
      <p className="text-sm text-muted-foreground mb-2">{agent.desc}</p>
      {agent.output && <p className="text-xs text-muted-foreground italic">Output: {agent.output}</p>}
    </div>
  );

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">SalesChef changes everything (except your existing tech stack)</h2>
        <p className="text-lg text-muted-foreground mb-12 text-center max-w-4xl mx-auto">
          Keep your existing stack. SalesChef is a team of AI agents - like specialized chefs - each trained to transform 
          raw product specs into full-funnel, high-performance content; manipulating your content, not your systems.
        </p>

        {/* Core Always-On Agents */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Core Always-On Agents</h3>
          <p className="text-center text-muted-foreground mb-6">These four are always-on agents, observing and steering. Everything else happens because they decide it must.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreAgents.map((agent, index) => (
              <AgentCard key={index} agent={agent} index={index} />
            ))}
          </div>
        </div>

        {/* Input & Intelligence Agents */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">🛠️ Input & Intelligence Agents</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inputAgents.map((agent, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{agent.emoji}</span>
                  <agent.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{agent.name} Agent</h4>
                <p className="text-sm text-primary mb-2">{agent.role}</p>
                <p className="text-sm text-muted-foreground mb-2">{agent.desc}</p>
                <p className="text-xs text-muted-foreground italic">Output: {agent.output}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Understanding & Strategy Agents */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">🧠 Understanding & Strategy Agents</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategyAgents.map((agent, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{agent.emoji}</span>
                  <agent.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{agent.name} Agent</h4>
                <p className="text-sm text-primary mb-2">{agent.role}</p>
                <p className="text-sm text-muted-foreground mb-2">{agent.desc}</p>
                <p className="text-xs text-muted-foreground italic">Output: {agent.output}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Transformation Agents */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">🎨 Content Transformation Agents (TAVISH-based)</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentAgents.map((agent, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{agent.emoji}</span>
                  <agent.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{agent.name} Agent</h4>
                <p className="text-sm text-primary mb-2">{agent.role}</p>
                <p className="text-sm text-muted-foreground mb-2">{agent.desc}</p>
                <p className="text-xs text-muted-foreground italic">Output: {agent.output}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality & Delivery Agents */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">✅ Quality & Delivery Agents</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {qualityAgents.map((agent, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{agent.emoji}</span>
                  <agent.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{agent.name} Agent</h4>
                <p className="text-sm text-primary mb-2">{agent.role}</p>
                <p className="text-sm text-muted-foreground mb-2">{agent.desc}</p>
                <p className="text-xs text-muted-foreground italic">Output: {agent.output}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
