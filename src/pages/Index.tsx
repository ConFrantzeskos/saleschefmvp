
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { ArrowRight, Upload, Search, Edit, Palette, Rocket, BarChart3, Check, TrendingUp, TrendingDown, Clock, Brain, Database, Mirror, Activity, Broom, Eye, Satellite, Target, Lightbulb, User, FileText, Building, Users, Pen, Image, Headphones, Video, Code, Wrench, CheckCircle, Truck } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');
  const [tryItEmail, setTryItEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitted(true);
    toast.success("Welcome to SalesChef! Let's transform your product data.");
    
    setTimeout(() => {
      navigate('/upload');
    }, 1500);
  };

  const handleTryItSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tryItEmail) return;
    
    // Extract domain from email to determine CMS
    const domain = tryItEmail.split('@')[1];
    
    toast.success(`Magic link sent to ${tryItEmail}! We're analyzing ${domain} to understand your CMS setup.`);
    
    // Simulate magic link process and CMS detection
    setTimeout(() => {
      toast.info(`Detected your setup! Check your email for the magic link to access your personalized upload portal.`);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center animate-fade-in">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-8 h-8 bg-primary rounded-full animate-pulse" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Ready to cook up some content?</h2>
          <p className="text-muted-foreground">Redirecting you to upload your first file...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto">
          <div className="w-16 h-16 mx-auto mb-8">
            <img 
              src="/lovable-uploads/0b8c5ffe-edc7-4ea5-af28-bc947207ee19.png" 
              alt="SalesChef Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            From Raw Specs to a Feast of <br />
            <span className="text-primary">Sales-Ready Content</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            SalesChef transforms messy product data - no matter where it lives - into persuasive, 
            high-converting content for every channel.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-lg"
                required
              />
              <Button type="submit" className="h-12 px-6 bg-primary hover:bg-primary/90" disabled={!email}>
                Watch it Cook <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-muted-foreground">
            Upload a CSV. Watch your data transform into content magic.
          </p>
        </div>
      </section>

      {/* Problem Framing */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why is retail content so broken?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Retailers juggle thousands of SKUs and dozens of systems—PIMs, CMSs, ERPs, spreadsheets, PDFs. 
                Content teams can't keep up. So they copy and paste. The result?
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span>Generic PDPs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span>Identical to competitors</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span>No benefits, no brand, no conversion</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                Meanwhile, performance teams spend millions trying to drive traffic to content that doesn't convert.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8 text-center">
              <div className="space-y-4">
                <div className="bg-destructive/10 border border-destructive/20 rounded p-4">
                  <h3 className="font-semibold text-destructive">Broken PDP</h3>
                  <p className="text-sm text-muted-foreground mt-2">Generic copy, no differentiation</p>
                </div>
                <div className="text-2xl">+</div>
                <div className="bg-orange-100 border border-orange-200 rounded p-4">
                  <h3 className="font-semibold text-orange-600">Google Ads Budget</h3>
                  <p className="text-sm text-muted-foreground mt-2">Burning without conversions</p>
                </div>
                <div className="text-2xl">=</div>
                <div className="bg-destructive/10 border border-destructive/20 rounded p-4">
                  <h3 className="font-semibold text-destructive">Poor ROI</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introducing SalesChef Agents */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">SalesChef changes everything (except your existing tech stack)</h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-4xl mx-auto">
            Keep your existing stack. SalesChef is a team of AI agents - like specialized chefs - each trained to transform 
            raw product specs into full-funnel, high-performance content; manipulating your content, not your systems.
          </p>

          {/* Always-On Core Agents */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">Core Always-On Agents</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Brain, name: 'Designator', emoji: '🧠', role: 'Executive Chef / Orchestrator', desc: 'Oversees the full lifecycle. Dynamically routes tasks to agents.' },
                { icon: Database, name: 'Depth', emoji: '🧬', role: 'Knowledge Graph Keeper', desc: 'Stores persistent memory. Tracks historical performance, past decisions.' },
                { icon: Mirror, name: 'Debrief', emoji: '🪞', role: 'Strategic Critic', desc: 'Reflects on outcomes, measures alignment with goals.' },
                { icon: Activity, name: 'Diagnose', emoji: '📊', role: 'Performance Analyst', desc: 'Interprets metrics and outcomes. Reports on effectiveness.' }
              ].map((agent, index) => (
                <div key={index} className="bg-background rounded-lg p-6 shadow-sm border-l-4 border-primary">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{agent.emoji}</span>
                    <agent.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{agent.name} Agent</h4>
                  <p className="text-sm text-primary mb-2">{agent.role}</p>
                  <p className="text-sm text-muted-foreground">{agent.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Input & Intelligence Agents */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">🛠️ Input & Intelligence Agents</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Broom, name: 'Drop', emoji: '🧹', role: 'Data Preparer', desc: 'Ingests, parses, deduplicates, corrects, categorises and validates product data.' },
                { icon: Eye, name: 'Discover', emoji: '🔍', role: 'Context Collector', desc: 'Gathers search data, reviews, social sentiment, competitor PDPs, keywords.' },
                { icon: Satellite, name: 'Detect', emoji: '🛰️', role: 'Signal Watcher', desc: 'Monitors external change: market shifts, seasonal trends, competitive moves.' }
              ].map((agent, index) => (
                <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{agent.emoji}</span>
                    <agent.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{agent.name} Agent</h4>
                  <p className="text-sm text-primary mb-2">{agent.role}</p>
                  <p className="text-sm text-muted-foreground">{agent.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Understanding & Strategy Agents */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">🧠 Understanding & Strategy Agents</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Target, name: 'Define', emoji: '🎯', role: 'Audience Profiler', desc: 'Maps customer segments, buyer personas and journey stages.' },
                { icon: Lightbulb, name: 'Distil', emoji: '🧠', role: 'Strategic Planner', desc: 'Creates ladders of benefits, RTBs, differentiation logic, insights.' },
                { icon: User, name: 'Duty', emoji: '🪪', role: 'Internal Role Mapper', desc: 'Identifies internal stakeholders and their job-to-be-done.' },
                { icon: FileText, name: 'Design', emoji: '🗂️', role: 'Blueprint Extractor', desc: 'Reads and stores guidelines/tone of voice/layouts/templates.' },
                { icon: Building, name: 'Document', emoji: '🧱', role: 'Content and Schema Taxonomist', desc: 'Defines and manages the schema connecting assets to content units.' }
              ].map((agent, index) => (
                <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{agent.emoji}</span>
                    <agent.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{agent.name} Agent</h4>
                  <p className="text-sm text-primary mb-2">{agent.role}</p>
                  <p className="text-sm text-muted-foreground">{agent.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Content Transformation Agents (TAVISH) */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">🎨 Content Transformation Agents (TAVISH-based)</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Pen, name: 'Draft', emoji: '✍️', role: 'Copywriter (Text)', desc: 'Creates text-based outputs: PDPs, ads, sales decks, training docs, bullets, SEO tags.' },
                { icon: Image, name: 'Draw', emoji: '🖼️', role: 'Visual Designer (Image)', desc: 'Produces images, diagrams, retail tickets, starbursts, infographics, overlays.' },
                { icon: Headphones, name: 'Dub', emoji: '🎧', role: 'Voice Narrator (Audio)', desc: 'Generates spoken audio for PDPs, training guides, digital signage, advertising.' },
                { icon: Video, name: 'Director', emoji: '🎬', role: 'Video Producer (Video)', desc: 'Creates short-form and long-form video content: video ads, explainer reels, PDP loops.' },
                { icon: Code, name: 'Dev', emoji: '🧑‍💻', role: 'Frontend Assembler (Software)', desc: 'Generates interactive modules, embedded tools, digital experiences.' },
                { icon: Wrench, name: 'Drive', emoji: '🧰', role: 'Hardware/Specs Preparer (HW)', desc: 'Prepares packaging info, firmware notes, installation diagrams, POS material.' }
              ].map((agent, index) => (
                <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{agent.emoji}</span>
                    <agent.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{agent.name} Agent</h4>
                  <p className="text-sm text-primary mb-2">{agent.role}</p>
                  <p className="text-sm text-muted-foreground">{agent.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quality & Delivery Agents */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">✅ Quality & Delivery Agents</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: CheckCircle, name: 'Diligence', emoji: '🔎', role: 'QA Validator', desc: 'Audits all output for accuracy, completeness, and brand fidelity. Flags issues or auto-corrects.' },
                { icon: Truck, name: 'Deploy', emoji: '🚚', role: 'Channel Publisher', desc: 'Publishes/exports content to eComm systems, CMSs, social, POS, email, retailer portals.' }
              ].map((agent, index) => (
                <div key={index} className="bg-background rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{agent.emoji}</span>
                    <agent.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{agent.name} Agent</h4>
                  <p className="text-sm text-primary mb-2">{agent.role}</p>
                  <p className="text-sm text-muted-foreground">{agent.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How One SKU Becomes a Sales Machine</h2>
          
          <div className="space-y-8">
            {[
              { step: '1', title: 'Upload', desc: 'CSV', icon: Upload },
              { step: '2', title: 'Clean', desc: 'fix, format, fill', icon: Search },
              { step: '3', title: 'Enrich', desc: 'reviews, reasons to buy, consumer benefits, SEO, tags, images', icon: Edit },
              { step: '4', title: 'Create', desc: 'PDPs, emails, FAQs, training, social tiles', icon: Palette },
              { step: '5', title: 'Publish', desc: 'into CSV files, Shopify, CMS, DAM, PIM, marketplace', icon: Rocket },
              { step: '6', title: 'Optimise', desc: 'analyse, test, iterate', icon: BarChart3 }
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-6 p-6 bg-muted/30 rounded-lg">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <step.icon className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
                {index < 5 && <ArrowRight className="w-5 h-5 text-muted-foreground ml-auto" />}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <form onSubmit={handleTryItSubmit} className="max-w-md mx-auto">
              <div className="flex gap-2 mb-4">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={tryItEmail}
                  onChange={(e) => setTryItEmail(e.target.value)}
                  className="h-12 text-lg"
                  required
                />
                <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90" disabled={!tryItEmail}>
                  Try It Yourself <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Upload your product CSV via magic link
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The Results Speak for Themselves</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                'Slash SEM and SEO costs',
                'Scale content without scaling headcount',
                'Lift PDP conversion and search rankings',
                'Accelerate time-to-shelf',
                'Empower your whole retail chain—from supplier to shop floor'
              ].map((result, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-lg">{result}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold mb-4">Before vs After</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Before</p>
                    <p>Generic copy, poor SEO</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">After</p>
                    <p>Optimized, compelling content</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-background rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">PDP Conversion</p>
                  <p className="text-xs text-muted-foreground">Rate ↑</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <TrendingDown className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">SEM Cost</p>
                  <p className="text-xs text-muted-foreground">Per Sale ↓</p>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Time to Publish</p>
                  <p className="text-xs text-muted-foreground">↓</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Built for Enterprise Retail. Loved by Lean Teams.</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              'Works with your existing tech stack',
              'Secure, compliant, and scalable',
              'Transform content in minutes - not months'
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 justify-center">
                <Check className="w-5 h-5 text-green-600" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground italic">
            (Future placeholder for client logos, case study links, testimonials)
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">You already have the specs. Let's make them sell.</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Upload your product CSV. See what SalesChef can do with your real products.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-lg"
                required
              />
              <Button type="submit" className="h-12 px-6 bg-primary hover:bg-primary/90" disabled={!email}>
                Get Started
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
