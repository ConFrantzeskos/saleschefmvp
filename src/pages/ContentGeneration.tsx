
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, FileText, Image, Video, Globe } from 'lucide-react';

const ContentGeneration = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState(0);

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: true, current: false },
    { id: 'generate', label: 'Generate', completed: false, current: true },
    { id: 'review', label: 'Review', completed: false, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

  const generationTasks = [
    {
      icon: FileText,
      title: "Product Descriptions",
      description: "Crafting compelling, SEO-optimized descriptions",
      items: ["Converting specs to benefits", "Adding emotional hooks", "Optimizing for search"]
    },
    {
      icon: Globe,
      title: "SEO Content",
      description: "Creating search-friendly content",
      items: ["Meta descriptions", "Title tags", "Schema markup"]
    },
    {
      icon: Image,
      title: "Social Media",
      description: "Generating platform-specific content",
      items: ["Instagram captions", "Facebook posts", "Twitter snippets"]
    },
    {
      icon: Video,
      title: "Training Materials",
      description: "Creating sales team resources",
      items: ["Feature highlights", "Selling points", "Objection handlers"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        
        // Update current task based on progress
        const taskProgress = Math.floor(newProgress / 25);
        if (taskProgress !== currentTask && taskProgress < generationTasks.length) {
          setCurrentTask(taskProgress);
        }
        
        if (newProgress >= 100) {
          setTimeout(() => navigate('/review'), 1500);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [navigate, currentTask]);

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-3xl font-semibold">Cooking up your content</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Our AI agents are transforming your raw data into sales-ready content
          </p>
        </div>

        <div className="mb-8">
          <Progress value={progress} className="w-full h-4 mb-4" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Generating content...</span>
            <span>{progress}% complete</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {generationTasks.map((task, index) => {
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
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      isCompleted 
                        ? 'bg-green-100 text-green-600'
                        : isActive
                          ? 'bg-primary/10 text-primary'
                          : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{task.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {task.description}
                      </p>
                      
                      <ul className="space-y-1">
                        {task.items.map((item, itemIndex) => (
                          <li 
                            key={itemIndex}
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
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {progress === 100 && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 text-green-600 font-medium">
              <Sparkles className="w-5 h-5" />
              <span>Content generation complete! Preparing review...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentGeneration;
