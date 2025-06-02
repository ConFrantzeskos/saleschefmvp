import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Database, RefreshCw, Activity, Trash2, Eye, Satellite, Target, Lightbulb, User, FileText, Building, Pen, Image, Headphones, Video, Code, Wrench, CheckCircle, Truck, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const HowItWorks = () => {
  const [retailEmail, setRetailEmail] = useState('');
  const [tourismEmail, setTourismEmail] = useState('');
  const [mediaEmail, setMediaEmail] = useState('');

  const handleRetailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!retailEmail) return;
    toast.success(`Thanks! We'll send retail-specific demo access to ${retailEmail}`);
    setRetailEmail('');
  };

  const handleTourismSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tourismEmail) return;
    toast.success(`Thanks! We'll send tourism industry demo access to ${tourismEmail}`);
    setTourismEmail('');
  };

  const handleMediaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mediaEmail) return;
    toast.success(`Thanks! We'll send media industry demo access to ${mediaEmail}`);
    setMediaEmail('');
  };

  const coreAgents = [
    { icon: Brain, name: 'Designator', emoji: '🧠', role: 'Executive Chef / Orchestrator', desc: 'Oversees the full lifecycle. Dynamically routes tasks to agents. Adapts pipelines. Handles prioritisation, exceptions, fallbacks.' },
    { icon: Database, name: 'Depth', emoji: '🧬', role: 'Knowledge Graph Keeper', desc: 'Stores persistent memory. Tracks historical performance, past decisions, best practices, brand rules, blueprint versions.' },
    { icon: RefreshCw, name: 'Debrief', emoji: '🪞', role: 'Strategic Critic', desc: 'Reflects on outcomes, measures alignment with goals, suggests structural improvements, and can replan the pipeline.' },
    { icon: Activity, name: 'Diagnose', emoji: '📊', role: 'Performance Analyst', desc: 'Interprets metrics and outcomes. Reports on effectiveness and inefficiencies. Passes signals back to Designator & Debrief.' }
  ];

  const inputAgents = [
    { icon: Trash2, name: 'Drop', emoji: '🧹', role: 'Data Preparer', desc: 'Ingests, parses, deduplicates, corrects, categorises and validates product data from multiple formats (CSV, PDF, URLs, ERP, CMS, etc.)' },
    { icon: Eye, name: 'Discover', emoji: '🔍', role: 'Context Collector', desc: 'Gathers search data, reviews, social sentiment, competitor PDPs, keywords.' },
    { icon: Satellite, name: 'Detect', emoji: '🛰️', role: 'Signal Watcher', desc: 'Monitors external change: market shifts, seasonal trends, competitive moves, weather, macro alerts.' }
  ];

  const strategyAgents = [
    { icon: Target, name: 'Define', emoji: '🎯', role: 'Audience Profiler', desc: 'Maps customer segments, buyer personas and journey stages. Aligns content to end-customer context.' },
    { icon: Lightbulb, name: 'Distil', emoji: '🧠', role: 'Strategic Planner', desc: 'Creates ladders of benefits, RTBs, differentiation logic, insights, and value frameworks.' },
    { icon: User, name: 'Duty', emoji: '🪪', role: 'Internal Role Mapper', desc: 'Identifies internal stakeholders (e.g. Marketing, Studio, Retail Ops) and their job-to-be-done. Aligns and packages content deliverables to match each role\'s needs.' },
    { icon: FileText, name: 'Design', emoji: '🗂️', role: 'Blueprint Extractor', desc: 'Reads and stores guidelines/tone of voice/layouts/templates/format rules for PDPs, spec sheets, ranging reviews, banners, print, email, etc.' },
    { icon: Building, name: 'Document', emoji: '🧱', role: 'Content and Schema Taxonomist', desc: 'Defines and manages the schema connecting assets to their content units, renditions, and media blobs. Enables traceability and scalability across all channels.' }
  ];

  const contentAgents = [
    { icon: Pen, name: 'Draft', emoji: '✍️', role: 'Copywriter (Text)', desc: 'Creates text-based outputs: PDPs, ads, sales decks, training docs, bullets, SEO tags.' },
    { icon: Image, name: 'Draw', emoji: '🖼️', role: 'Visual Designer (Image)', desc: 'Produces images, diagrams, retail tickets, starbursts, infographics, overlays and visual renditions of product information.' },
    { icon: Headphones, name: 'Dub', emoji: '🎧', role: 'Voice Narrator (Audio)', desc: 'Generates spoken audio for PDPs, training guides, digital signage, advertising, accessibility.' },
    { icon: Video, name: 'Director', emoji: '🎬', role: 'Video Producer (Video)', desc: 'Creates short-form and long-form video content: video ads, explainer reels, PDP loops, TikToks, motion banners.' },
    { icon: Code, name: 'Dev', emoji: '🧑‍💻', role: 'Frontend Assembler (Software)', desc: 'Generates interactive modules, embedded tools, digital experiences (e.g. quizzes, guides, configurators).' },
    { icon: Wrench, name: 'Drive', emoji: '🧰', role: 'Hardware/Specs Preparer (HW)', desc: 'Prepares packaging info, firmware notes, installation diagrams, POS material (physical and digital).' }
  ];

  const qualityAgents = [
    { icon: CheckCircle, name: 'Diligence', emoji: '🔎', role: 'QA Validator', desc: 'Audits all output for accuracy, completeness, and brand fidelity. Flags issues or auto-corrects.' },
    { icon: Truck, name: 'Deploy', emoji: '🚚', role: 'Channel Publisher', desc: 'Publishes/exports content to eComm systems, CMSs, social, POS, email, retailer portals, and more. Logs each deployment.' }
  ];

  const retailerFAQs = [
    {
      question: "What exactly is SalesChef?",
      answer: "SalesChef is an agentic system that ingests raw, messy product data — from any source — and transforms it into rich, persuasive, sales-ready content. It operates as a dynamic transformation layer, not a system of record. You feed in the mess. It serves up the magic."
    },
    {
      question: "What kinds of product data can SalesChef handle?",
      answer: "Anything. CSVs, Excel, PDFs, URLs, supplier feeds, ERP dumps, CMS exports, ZIPs of images, even scraped web data. No structured PIM required."
    },
    {
      question: "What does SalesChef actually output?",
      answer: "Persuasive, search-optimised, enriched content blocks: PDPs, SEO copy, FAQs, product comparisons, buying guides, banners, campaign assets, localisation-ready variants, sales training blurbs — ready for any channel."
    },
    {
      question: "Do I have to integrate SalesChef into my tech stack?",
      answer: "No. It's not another system to manage. SalesChef is a stateless layer — you upload or connect your data, it transforms it, and you take the outputs wherever you want: PIM, CMS, marketplace, ad platform, print."
    },
    {
      question: "How is SalesChef different from a PIM or MDM?",
      answer: "SalesChef isn't a PIM. It doesn't store data or become your 'single source of truth'. It's an intelligent processing engine that radically improves and enriches content — fast — with no migration or stack overhaul required."
    },
    {
      question: "Will it work if I already have a PIM or ERP?",
      answer: "Yes. SalesChef can sit on top of any existing system. It ingests your current data, enhances it, and outputs enriched content. No need to rip and replace."
    },
    {
      question: "How does SalesChef help with SEO?",
      answer: "It auto-generates optimised SEO copy, keywords, FAQs, and meta content tailored to your products and categories — aligned with your brand voice and audience intent."
    },
    {
      question: "Can it handle multilingual content?",
      answer: "Yes. SalesChef agents can generate and localise content into multiple languages — adapting for local tone, SEO, and cultural nuances."
    },
    {
      question: "How does SalesChef ensure content accuracy?",
      answer: "You remain in control. The system includes review and approval workflows. Certain content elements (e.g. legal, warranty) are flagged as fixed and cannot be altered."
    },
    {
      question: "How long does it take to see value?",
      answer: "Usually within days. You can upload sample files and immediately generate enriched content for review. Full category transformation typically takes weeks, not months."
    }
  ];

  const tourismFAQs = [
    {
      question: "What is SalesChef and how does it help tourism organisations?",
      answer: "SalesChef is an agentic content engine that ingests messy, inconsistent, and unstructured tourism data (from thousands of asset owners) and transforms it into beautiful, accurate, multi-language content — ready for any platform."
    },
    {
      question: "What types of tourism data can it handle?",
      answer: "Everything — tour descriptions, accommodation details, menus, event listings, transport timetables, activity guides, opening hours, availability calendars, user-generated content, reviews — from structured or unstructured sources."
    },
    {
      question: "How does SalesChef deal with content that's constantly changing?",
      answer: "SalesChef agents can detect changes, trigger updates, and reprocess content rapidly. It reduces the burden of manually chasing asset owners or keeping content current."
    },
    {
      question: "What about language and localisation?",
      answer: "SalesChef excels at multi-language generation. It creates content adapted for different audiences, regions, and platforms — handling translation and local nuance at scale."
    },
    {
      question: "How will SalesChef save us time and effort?",
      answer: "It automates what is currently an impossible manual task: cleaning, structuring, enriching, translating, and maintaining huge volumes of tourism asset data. Your teams can focus on experience and growth, not wrangling content."
    }
  ];

  const mediaFAQs = [
    {
      question: "What is SalesChef for media companies?",
      answer: "SalesChef is an intelligent agentic layer that ingests your unstructured media data — articles, videos, metadata, creative assets, audience data — and transforms it into structured, enriched, monetisation-ready content."
    },
    {
      question: "What kinds of media data can it work with?",
      answer: "Editorial archives, video metadata, podcast transcripts, image libraries, ad assets, social content, campaign data, sponsorship decks, CRM data — structured or unstructured."
    },
    {
      question: "How can it help drive advertising revenue?",
      answer: "By intelligently structuring and packaging your content, SalesChef makes it easier to segment, target, and monetise — enabling richer sponsorship offerings, dynamic content bundles, better programmatic performance, and improved contextual ad targeting."
    },
    {
      question: "Can it help me understand my content inventory better?",
      answer: "Yes. SalesChef creates deep content intelligence: understanding what you have, how it performs, where the gaps are, and how to surface the right content for the right audience and partner."
    },
    {
      question: "Does it require me to change my CMS or DMP?",
      answer: "No. SalesChef is not a replacement system. It ingests from your existing systems and outputs enriched content and metadata back to wherever you want it — CMS, DMP, ad server, partner platform."
    }
  ];

  const AgentCard = ({ agent, index }: { agent: any, index: number }) => (
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

  const FAQSection = ({ title, faqs, emoji, email, setEmail, handleSubmit, ctaText }: { 
    title: string, 
    faqs: any[], 
    emoji: string,
    email: string,
    setEmail: (email: string) => void,
    handleSubmit: (e: React.FormEvent) => void,
    ctaText: string
  }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-3xl">{emoji}</span>
        {title}
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-background rounded-lg p-6 border">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                {index + 1}
              </span>
              {faq.question}
            </h3>
            <p className="text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>
      
      {/* Email Capture CTA */}
      <div className="mt-8 p-6 bg-primary/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">{ctaText}</h3>
        <p className="text-muted-foreground mb-4">
          Get early access to SalesChef with industry-specific examples
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
          <Input
            type="email"
            placeholder="Enter your work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit" disabled={!email}>
            Get Demo Access
          </Button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/5 to-background py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">How SalesChef Works</h1>
          <p className="text-xl text-muted-foreground">
            Meet the AI agents that transform your raw product data into sales-ready content
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Core Always-On Agents */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Core Always-On Agents</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            These four are always-on agents, observing and steering. Everything else happens because they decide it must.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreAgents.map((agent, index) => (
              <AgentCard key={index} agent={agent} index={index} />
            ))}
          </div>
        </div>

        {/* Input & Intelligence Agents */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">🛠️ Input & Intelligence Agents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inputAgents.map((agent, index) => (
              <AgentCard key={index} agent={agent} index={index} />
            ))}
          </div>
        </div>

        {/* Understanding & Strategy Agents */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">🧠 Understanding & Strategy Agents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategyAgents.map((agent, index) => (
              <AgentCard key={index} agent={agent} index={index} />
            ))}
          </div>
        </div>

        {/* Content Transformation Agents */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">🎨 Content Transformation Agents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentAgents.map((agent, index) => (
              <AgentCard key={index} agent={agent} index={index} />
            ))}
          </div>
        </div>

        {/* Quality & Delivery Agents */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">✅ Quality & Delivery Agents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {qualityAgents.map((agent, index) => (
              <AgentCard key={index} agent={agent} index={index} />
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="border-t pt-16">
          <FAQSection 
            title="FAQs — For Retailers" 
            faqs={retailerFAQs} 
            emoji="🛍️" 
            email={retailEmail}
            setEmail={setRetailEmail}
            handleSubmit={handleRetailSubmit}
            ctaText="Ready to transform your product content?"
          />
          
          <FAQSection 
            title="FAQs — For Tourism Clients" 
            faqs={tourismFAQs} 
            emoji="🌍" 
            email={tourismEmail}
            setEmail={setTourismEmail}
            handleSubmit={handleTourismSubmit}
            ctaText="Transform your tourism content at scale?"
          />
          
          <FAQSection 
            title="FAQs — For Media Clients" 
            faqs={mediaFAQs} 
            emoji="🎥" 
            email={mediaEmail}
            setEmail={setMediaEmail}
            handleSubmit={handleMediaSubmit}
            ctaText="Unlock your content's revenue potential?"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
