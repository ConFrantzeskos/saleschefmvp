
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, MessageSquare, Users, TrendingUp, Globe, Hash, Brain, ArrowRight } from 'lucide-react';

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
      details: ["Sentiment analysis", "Feature mentions", "Pain points"],
      status: "Analyzing 1,847 customer reviews..."
    },
    {
      icon: Users,
      title: "Customer Verbatims",
      description: "Processing direct customer feedback",
      details: ["Common phrases", "Usage patterns", "Feature requests"],
      status: "Processing 324 customer verbatims..."
    },
    {
      icon: TrendingUp,
      title: "Social Sentiment",
      description: "Gathering social media insights",
      details: ["Brand mentions", "Product discussions", "Trend analysis"],
      status: "Scanning social platforms..."
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

  const handleProceedToGeneration = () => {
    navigate('/generation');
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
            Gathering insights from search data, reviews, social sentiment, and competitor analysis
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
                  onClick={handleProceedToGeneration}
                  className="flex items-center space-x-2"
                >
                  <span>Generate Content</span>
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
