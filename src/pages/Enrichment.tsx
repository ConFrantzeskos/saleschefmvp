import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, MessageSquare, Users, TrendingUp, Globe, Hash, Brain, ArrowRight, Globe2, Shield, Video, FileText, Network, Leaf, Link2, Image, Store, Award, HelpCircle, DollarSign, MessageCircle, Target, ShoppingBag, AlertCircle, Sparkles } from 'lucide-react';

const Enrichment = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState(0);
  const [enrichmentComplete, setEnrichmentComplete] = useState(false);

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: true, current: false },
    { id: 'enrich', label: 'Enrich', completed: false, current: true },
    { id: 'enrichment-review', label: 'Review Enrichment', completed: false, current: false },
    { id: 'generate', label: 'Generate', completed: false, current: false },
    { id: 'review', label: 'Review', completed: false, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

  const enrichmentTasks = [
    {
      icon: Search,
      title: "Search Intelligence",
      description: "Analyzing search trends and patterns",
      details: ["Popular search terms", "Search volume data", "Trending queries"],
      status: "Processing 2.3K search queries..."
    },
    {
      icon: MessageSquare,
      title: "Customer Reviews",
      description: "Mining insights from customer feedback",
      details: ["Sentiment analysis", "Feature mentions", "Pain points", "Critical feedback", "Comparative insights"],
      status: "Analyzing 1,847 customer reviews..."
    },
    {
      icon: AlertCircle,
      title: "Critical Reviews & Critique",
      description: "Deep analysis of product limitations and drawbacks",
      details: ["Common complaints", "Product weaknesses", "Improvement areas", "Critical feedback patterns"],
      status: "Processing 890 critical reviews..."
    },
    {
      icon: Users,
      title: "Customer Verbatims",
      description: "Processing direct customer feedback",
      details: ["Common phrases", "Usage patterns", "Feature requests"],
      status: "Processing 324 customer verbatims..."
    },
    {
      icon: ShoppingBag,
      title: "Reasons to Buy Analysis",
      description: "Understanding purchase motivations and decision drivers",
      details: ["Purchase triggers", "Decision factors", "Value propositions", "Buying journey insights"],
      status: "Analyzing 1,650 purchase decisions..."
    },
    {
      icon: TrendingUp,
      title: "Social Sentiment",
      description: "Gathering social media insights and commentary",
      details: ["Brand mentions", "Product discussions", "Trend analysis", "Social media commentary", "Influencer discussions"],
      status: "Scanning social platforms..."
    },
    {
      icon: MessageCircle,
      title: "Online Forums & Communities",
      description: "Mining discussions from Reddit, forums, and community boards",
      details: ["Reddit threads analysis", "Specialized forum discussions", "Community sentiment", "User problem-solving patterns"],
      status: "Analyzing 3,200+ forum discussions..."
    },
    {
      icon: Globe,
      title: "Competitor Analysis",
      description: "Analyzing competitor product pages",
      details: ["Feature comparisons", "Pricing strategies", "Positioning"],
      status: "Analyzing 12 competitor PDPs..."
    },
    {
      icon: Hash,
      title: "Keyword Research",
      description: "Identifying high-value keywords",
      details: ["SEO opportunities", "Long-tail keywords", "Search intent"],
      status: "Researching 150+ keywords..."
    },
    {
      icon: Globe2,
      title: "Cultural & Regional Intelligence",
      description: "Analyzing regional preferences and cultural nuances",
      details: ["Localization opportunities", "Regional terminology", "Cultural buying patterns", "Market-specific features"],
      status: "Analyzing 47 regional markets..."
    },
    {
      icon: Shield,
      title: "Regulatory & Compliance Data",
      description: "Gathering certification and compliance information",
      details: ["Safety certifications", "Regional regulations", "Energy ratings", "Compliance standards"],
      status: "Checking 23 certification databases..."
    },
    {
      icon: Video,
      title: "Influencer & Creator Content",
      description: "Mining insights from tech reviews and unboxing videos",
      details: ["YouTube review analysis", "Influencer mentions", "Creator recommendations", "Video sentiment"],
      status: "Analyzing 156 video reviews..."
    },
    {
      icon: FileText,
      title: "Technical Specifications Mining",
      description: "Extracting detailed technical specifications",
      details: ["Manufacturer data sheets", "Technical manuals", "Specification standards", "Performance metrics"],
      status: "Mining technical documentation..."
    },
    {
      icon: Sparkles,
      title: "Feature Research & Innovation",
      description: "Tracking feature importance and product innovations",
      details: ["Feature popularity ranking", "Innovation trends", "Competitive feature gaps", "Future feature demand"],
      status: "Researching 230+ features..."
    },
    {
      icon: Network,
      title: "Nomenclature & Taxonomy Building",
      description: "Standardizing product names and categorization",
      details: ["Naming conventions", "Attribute extraction", "Category hierarchies", "Variant mapping"],
      status: "Building standardized taxonomy..."
    },
    {
      icon: Leaf,
      title: "Sustainability & Ethics Intelligence",
      description: "Gathering environmental and ethical data",
      details: ["Environmental impact", "Manufacturing practices", "Recyclability info", "Sustainability scores"],
      status: "Analyzing sustainability metrics..."
    },
    {
      icon: Link2,
      title: "Cross-Category Intelligence",
      description: "Identifying ecosystem and compatibility insights",
      details: ["Compatible products", "Ecosystem fit", "Cross-sell opportunities", "Integration capabilities"],
      status: "Mapping product ecosystems..."
    },
    {
      icon: Target,
      title: "Category Use Case Research",
      description: "Identifying product applications and real-world scenarios",
      details: ["Primary use cases", "Secondary applications", "Context-specific usage", "Industry applications"],
      status: "Mapping 47 use case scenarios..."
    },
    {
      icon: Image,
      title: "Visual Intelligence",
      description: "Analyzing product imagery and visual trends",
      details: ["Image quality analysis", "Lifestyle context", "Packaging insights", "Visual merchandising trends"],
      status: "Processing visual content..."
    },
    {
      icon: Store,
      title: "Retailer Intelligence",
      description: "Gathering multi-retailer insights",
      details: ["Stock availability", "Promotional patterns", "Retailer positioning", "Channel performance"],
      status: "Scanning retail channels..."
    },
    {
      icon: Award,
      title: "Expert Reviews & Publications",
      description: "Mining professional tech reviews and awards",
      details: ["Editorial reviews", "Industry awards", "Expert ratings", "Publication mentions", "In-depth critiques"],
      status: "Analyzing 89 expert reviews..."
    },
    {
      icon: HelpCircle,
      title: "Q&A Intelligence",
      description: "Processing customer questions and support data",
      details: ["Common questions", "Setup concerns", "Usage queries", "Support patterns"],
      status: "Mining 2,450 Q&A entries..."
    },
    {
      icon: DollarSign,
      title: "Pricing Intelligence",
      description: "Analyzing pricing strategies and value perception",
      details: ["Price history", "Competitive pricing", "Value positioning", "Promotional patterns"],
      status: "Analyzing pricing data..."
    },
    {
      icon: Brain,
      title: "Intelligence Synthesis",
      description: "Creating enriched product profiles",
      details: ["Data correlation", "Insight generation", "Intelligence mapping"],
      status: "Synthesizing product intelligence..."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1.2;
        
        // Update current task based on progress
        const taskProgress = Math.floor(newProgress / (100 / enrichmentTasks.length));
        if (taskProgress !== currentTask && taskProgress < enrichmentTasks.length) {
          setCurrentTask(taskProgress);
        }
        
        if (newProgress >= 100) {
          setEnrichmentComplete(true);
          return 100;
        }
        return newProgress;
      });
    }, 180);

    return () => clearInterval(timer);
  }, [currentTask]);

  const handleProceedToEnrichmentReview = () => {
    navigate('/enrichment-review');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Brain className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-3xl font-semibold">Enriching Product Intelligence</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Gathering insights from 23 intelligence sources including search data, reviews, social commentary, online forums, purchase motivations, critical analysis, feature research, competitor intelligence, cultural insights, and more
          </p>
        </div>

        <div className="mb-8">
          <Progress value={progress} className="w-full h-4 mb-4" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Enriching data with external intelligence...</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {enrichmentTasks.map((task, index) => {
            const isActive = index === currentTask;
            const isCompleted = index < currentTask;
            const Icon = task.icon;
            
            return (
              <Card 
                key={index}
                className={`transition-all duration-500 ${
                  isActive 
                    ? 'border-primary shadow-lg scale-105' 
                    : isCompleted
                      ? 'border-green-500 bg-green-50'
                      : 'border-muted opacity-50'
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${
                      isCompleted 
                        ? 'bg-green-100 text-green-600'
                        : isActive
                          ? 'bg-primary/10 text-primary'
                          : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">{task.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    {task.description}
                  </p>
                  
                  <ul className="space-y-1 mb-3">
                    {task.details.map((detail, detailIndex) => (
                      <li 
                        key={detailIndex}
                        className={`text-sm flex items-center space-x-2 ${
                          isCompleted || isActive 
                            ? 'text-foreground' 
                            : 'text-muted-foreground'
                        }`}
                      >
                        <div className={`w-1 h-1 rounded-full ${
                          isCompleted 
                            ? 'bg-green-500'
                            : isActive
                              ? 'bg-primary'
                              : 'bg-muted-foreground'
                        }`} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {(isActive || isCompleted) && (
                    <div className="text-xs text-primary font-medium">
                      {isCompleted ? "Complete" : task.status}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {enrichmentComplete && (
          <Card className="border-green-500 bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Brain className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900">Enrichment Complete!</h3>
                    <p className="text-sm text-green-700">
                      Product intelligence has been enriched with insights from 7 data sources
                    </p>
                  </div>
                </div>
                <Button 
                  onClick={handleProceedToEnrichmentReview}
                  className="flex items-center space-x-2"
                >
                  <span>Review Enrichment</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Enrichment;
