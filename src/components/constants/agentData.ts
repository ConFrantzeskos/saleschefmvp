
import { Brain, Database, RefreshCw, Activity, Trash2, Eye, Satellite, Target, Lightbulb, User, FileText, Building, Pen, Image, Headphones, Video, Code, Wrench, CheckCircle, Truck } from 'lucide-react';

export const coreAgents = [
  { icon: Brain, name: 'Designator', emoji: '🧠', role: 'Executive Chef / Orchestrator', desc: 'Oversees the full lifecycle. Dynamically routes tasks to agents. Adapts pipelines. Handles prioritisation, exceptions, fallbacks.' },
  { icon: Database, name: 'Depth', emoji: '🧬', role: 'Knowledge Graph Keeper', desc: 'Stores persistent memory. Tracks historical performance, past decisions, best practices, brand rules, blueprint versions.' },
  { icon: RefreshCw, name: 'Debrief', emoji: '🪞', role: 'Strategic Critic', desc: 'Reflects on outcomes, measures alignment with goals, suggests structural improvements, and can replan the pipeline.' },
  { icon: Activity, name: 'Diagnose', emoji: '📊', role: 'Performance Analyst', desc: 'Interprets metrics and outcomes. Reports on effectiveness and inefficiencies. Passes signals back to Designator & Debrief.' }
];

export const inputAgents = [
  { icon: Trash2, name: 'Drop', emoji: '🧹', role: 'Data Preparer', desc: 'Ingests, parses, deduplicates, corrects, categorises and validates product data from multiple formats (CSV, PDF, URLs, ERP, CMS, etc.)' },
  { icon: Eye, name: 'Discover', emoji: '🔍', role: 'Context Collector', desc: 'Gathers search data, reviews, social sentiment, competitor PDPs, keywords.' },
  { icon: Satellite, name: 'Detect', emoji: '🛰️', role: 'Signal Watcher', desc: 'Monitors external change: market shifts, seasonal trends, competitive moves, weather, macro alerts.' }
];

export const strategyAgents = [
  { icon: Target, name: 'Define', emoji: '🎯', role: 'Audience Profiler', desc: 'Maps customer segments, buyer personas and journey stages. Aligns content to end-customer context.' },
  { icon: Lightbulb, name: 'Distil', emoji: '🧠', role: 'Strategic Planner', desc: 'Creates ladders of benefits, RTBs, differentiation logic, insights, and value frameworks.' },
  { icon: User, name: 'Duty', emoji: '🪪', role: 'Internal Role Mapper', desc: 'Identifies internal stakeholders (e.g. Marketing, Studio, Retail Ops) and their job-to-be-done. Aligns and packages content deliverables to match each role\'s needs.' },
  { icon: FileText, name: 'Design', emoji: '🗂️', role: 'Blueprint Extractor', desc: 'Reads and stores guidelines/tone of voice/layouts/templates/format rules for PDPs, spec sheets, ranging reviews, banners, print, email, etc.' },
  { icon: Building, name: 'Document', emoji: '🧱', role: 'Content and Schema Taxonomist', desc: 'Defines and manages the schema connecting assets to their content units, renditions, and media blobs. Enables traceability and scalability across all channels.' }
];

export const contentAgents = [
  { icon: Pen, name: 'Draft', emoji: '✍️', role: 'Copywriter (Text)', desc: 'Creates text-based outputs: PDPs, ads, sales decks, training docs, bullets, SEO tags.' },
  { icon: Image, name: 'Draw', emoji: '🖼️', role: 'Visual Designer (Image)', desc: 'Produces images, diagrams, retail tickets, starbursts, infographics, overlays and visual renditions of product information.' },
  { icon: Headphones, name: 'Dub', emoji: '🎧', role: 'Voice Narrator (Audio)', desc: 'Generates spoken audio for PDPs, training guides, digital signage, advertising, accessibility.' },
  { icon: Video, name: 'Director', emoji: '🎬', role: 'Video Producer (Video)', desc: 'Creates short-form and long-form video content: video ads, explainer reels, PDP loops, TikToks, motion banners.' },
  { icon: Code, name: 'Dev', emoji: '🧑‍💻', role: 'Frontend Assembler (Software)', desc: 'Generates interactive modules, embedded tools, digital experiences (e.g. quizzes, guides, configurators).' },
  { icon: Wrench, name: 'Drive', emoji: '🧰', role: 'Hardware/Specs Preparer (HW)', desc: 'Prepares packaging info, firmware notes, installation diagrams, POS material (physical and digital).' }
];

export const qualityAgents = [
  { icon: CheckCircle, name: 'Diligence', emoji: '🔎', role: 'QA Validator', desc: 'Audits all output for accuracy, completeness, and brand fidelity. Flags issues or auto-corrects.' },
  { icon: Truck, name: 'Deploy', emoji: '🚚', role: 'Channel Publisher', desc: 'Publishes/exports content to eComm systems, CMSs, social, POS, email, retailer portals, and more. Logs each deployment.' }
];
