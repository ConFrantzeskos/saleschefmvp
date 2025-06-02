
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Rocket, Download, Store, Globe, Share2, FileText } from 'lucide-react';

const Deploy = () => {
  const navigate = useNavigate();
  const [selectedTargets, setSelectedTargets] = useState<string[]>(['shopify']);
  const [isDeploying, setIsDeploying] = useState(false);

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: true, current: false },
    { id: 'generate', label: 'Generate', completed: true, current: false },
    { id: 'review', label: 'Review', completed: true, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: true },
  ];

  const deployTargets = [
    {
      id: 'shopify',
      name: 'Shopify Store',
      description: 'Update product listings in your Shopify store',
      icon: Store,
      status: 'Connected',
      products: 847
    },
    {
      id: 'amazon',
      name: 'Amazon Seller Central',
      description: 'Sync enhanced content to Amazon listings',
      icon: Globe,
      status: 'Available',
      products: 203
    },
    {
      id: 'social',
      name: 'Social Media',
      description: 'Post product content to social channels',
      icon: Share2,
      status: 'Available',
      products: 847
    },
    {
      id: 'csv',
      name: 'Download CSV',
      description: 'Export enhanced data as CSV file',
      icon: Download,
      status: 'Ready',
      products: 847
    },
    {
      id: 'training',
      name: 'Training Materials',
      description: 'Generate sales team training content',
      icon: FileText,
      status: 'Ready',
      products: 847
    }
  ];

  const handleTargetToggle = (targetId: string) => {
    setSelectedTargets(prev => 
      prev.includes(targetId) 
        ? prev.filter(id => id !== targetId)
        : [...prev, targetId]
    );
  };

  const handleDeploy = () => {
    setIsDeploying(true);
    setTimeout(() => {
      navigate('/optimization');
    }, 3000);
  };

  if (isDeploying) {
    return (
      <div className="min-h-screen bg-background p-6">
        <ProgressIndicator steps={steps} />
        
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-6">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Rocket className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <h1 className="text-3xl font-semibold">Deploying Your Content</h1>
            <p className="text-lg text-muted-foreground">
              Publishing enhanced content across selected channels...
            </p>
            <div className="space-y-3">
              {selectedTargets.map((targetId) => {
                const target = deployTargets.find(t => t.id === targetId);
                return (
                  <div key={targetId} className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span>Publishing to {target?.name}...</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-4">Deploy Your Content</h1>
          <p className="text-lg text-muted-foreground">
            Choose where to publish your enhanced product content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {deployTargets.map((target) => {
            const Icon = target.icon;
            const isSelected = selectedTargets.includes(target.id);
            
            return (
              <Card 
                key={target.id}
                className={`cursor-pointer transition-all ${
                  isSelected ? 'border-primary shadow-lg' : 'hover:border-primary/50'
                }`}
                onClick={() => handleTargetToggle(target.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{target.name}</CardTitle>
                        <Badge 
                          variant={target.status === 'Connected' ? 'default' : 'outline'}
                          className="mt-1"
                        >
                          {target.status}
                        </Badge>
                      </div>
                    </div>
                    <Checkbox 
                      checked={isSelected}
                      onCheckedChange={() => handleTargetToggle(target.id)}
                    />
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    {target.description}
                  </p>
                  <div className="text-sm font-medium">
                    {target.products} products ready
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center space-x-4">
          <Button 
            variant="outline" 
            onClick={() => navigate('/review')}
          >
            Back to Review
          </Button>
          <Button 
            onClick={handleDeploy}
            disabled={selectedTargets.length === 0}
            className="px-8"
          >
            <Rocket className="w-4 h-4 mr-2" />
            Deploy to {selectedTargets.length} {selectedTargets.length === 1 ? 'Channel' : 'Channels'}
          </Button>
        </div>

        {selectedTargets.length > 0 && (
          <div className="mt-8 p-4 bg-muted/30 rounded-lg">
            <h3 className="font-medium mb-2">Deployment Summary:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              {selectedTargets.map((targetId) => {
                const target = deployTargets.find(t => t.id === targetId);
                return (
                  <li key={targetId}>
                    • {target?.name}: {target?.products} products
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Deploy;
