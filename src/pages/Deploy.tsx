
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Rocket, Download, Store, Globe, Share2, FileText, Archive, Tv, Radio, Mail, Smartphone, Monitor, ShoppingCart } from 'lucide-react';

const Deploy = () => {
  const navigate = useNavigate();
  const [selectedTargets, setSelectedTargets] = useState<string[]>(['shopify']);
  const [isDeploying, setIsDeploying] = useState(false);

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: true, current: false },
    { id: 'enrich', label: 'Enrich', completed: true, current: false },
    { id: 'enhance', label: 'Enhance', completed: true, current: false },
    { id: 'generate', label: 'Generate', completed: true, current: false },
    { id: 'review', label: 'Review', completed: true, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: true },
  ];

  const deployTargets = [
    // E-commerce Platforms
    {
      id: 'shopify',
      name: 'Shopify Store',
      description: 'Sync product listings to your Shopify store',
      icon: Store,
      status: 'Connected',
      products: 3,
      category: 'E-commerce Platforms'
    },
    {
      id: 'woocommerce',
      name: 'WooCommerce',
      description: 'Deploy enhanced content to WooCommerce stores',
      icon: Store,
      status: 'Available',
      products: 3,
      category: 'E-commerce Platforms'
    },
    {
      id: 'magento',
      name: 'Magento Commerce',
      description: 'Sync product data to Magento stores',
      icon: Store,
      status: 'Available',
      products: 3,
      category: 'E-commerce Platforms'
    },
    {
      id: 'bigcommerce',
      name: 'BigCommerce',
      description: 'Update product listings in BigCommerce',
      icon: Store,
      status: 'Available',
      products: 3,
      category: 'E-commerce Platforms'
    },
    {
      id: 'prestashop',
      name: 'PrestaShop',
      description: 'Deploy product content to PrestaShop stores',
      icon: Store,
      status: 'Available',
      products: 3,
      category: 'E-commerce Platforms'
    },
    {
      id: 'opencart',
      name: 'OpenCart',
      description: 'Sync enhanced listings to OpenCart',
      icon: Store,
      status: 'Available',
      products: 3,
      category: 'E-commerce Platforms'
    },

    // Marketplaces
    {
      id: 'amazon',
      name: 'Amazon Seller Central',
      description: 'Sync enhanced content to Amazon listings',
      icon: Globe,
      status: 'Available',
      products: 3,
      category: 'Marketplaces'
    },
    {
      id: 'ebay',
      name: 'eBay',
      description: 'Deploy product listings to eBay marketplace',
      icon: Globe,
      status: 'Available',
      products: 3,
      category: 'Marketplaces'
    },
    {
      id: 'etsy',
      name: 'Etsy',
      description: 'Sync product content to Etsy marketplace',
      icon: Globe,
      status: 'Available',
      products: 3,
      category: 'Marketplaces'
    },
    {
      id: 'walmart',
      name: 'Walmart Marketplace',
      description: 'Deploy listings to Walmart marketplace',
      icon: Globe,
      status: 'Available',
      products: 3,
      category: 'Marketplaces'
    },
    {
      id: 'facebook-marketplace',
      name: 'Facebook Marketplace',
      description: 'Sync products to Facebook Marketplace',
      icon: Globe,
      status: 'Available',
      products: 3,
      category: 'Marketplaces'
    },
    {
      id: 'mercadolibre',
      name: 'MercadoLibre',
      description: 'Deploy product listings to MercadoLibre',
      icon: Globe,
      status: 'Available',
      products: 3,
      category: 'Marketplaces'
    },

    // Advertising & Media
    {
      id: 'retail-media',
      name: 'Retail Media Networks',
      description: 'Deploy to Amazon DSP, Walmart Connect, Target Roundel',
      icon: Tv,
      status: 'Available',
      products: 3,
      category: 'Advertising'
    },
    {
      id: 'google-shopping',
      name: 'Google Shopping',
      description: 'Sync product feeds to Google Merchant Center',
      icon: Monitor,
      status: 'Available',
      products: 3,
      category: 'Advertising'
    },
    
    // Social Commerce
    {
      id: 'social',
      name: 'Social Media',
      description: 'Post product content to social channels',
      icon: Share2,
      status: 'Available',
      products: 3,
      category: 'Social'
    },
    {
      id: 'instagram-shop',
      name: 'Instagram Shopping',
      description: 'Update Instagram product catalog',
      icon: Smartphone,
      status: 'Available',
      products: 3,
      category: 'Social'
    },
    
    // Marketing & Communications
    {
      id: 'email-marketing',
      name: 'Email Marketing',
      description: 'Deploy product newsletters and campaigns',
      icon: Mail,
      status: 'Ready',
      products: 3,
      category: 'Marketing'
    },
    {
      id: 'radio-ads',
      name: 'Radio & Audio Ads',
      description: 'Create scripts for radio and podcast advertising',
      icon: Radio,
      status: 'Ready',
      products: 3,
      category: 'Marketing'
    },
    
    // File Exports
    {
      id: 'zip-download',
      name: 'Download ZIP Package',
      description: 'Complete content package with all assets',
      icon: Archive,
      status: 'Ready',
      products: 3,
      category: 'Export'
    },
    {
      id: 'csv',
      name: 'Download CSV',
      description: 'Export enhanced data as CSV file',
      icon: Download,
      status: 'Ready',
      products: 3,
      category: 'Export'
    },
    
    // Training & Internal
    {
      id: 'training',
      name: 'Training Materials',
      description: 'Deploy sales team training content',
      icon: FileText,
      status: 'Ready',
      products: 3,
      category: 'Internal'
    }
  ];

  // Group targets by category
  const groupedTargets = deployTargets.reduce((acc, target) => {
    const category = target.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(target);
    return acc;
  }, {} as Record<string, typeof deployTargets>);

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
                    <span>Deploying to {target?.name}...</span>
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
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-4">Deploy Your Content</h1>
          <p className="text-lg text-muted-foreground">
            Choose where to publish your enhanced product content
          </p>
        </div>

        {Object.entries(groupedTargets).map(([category, targets]) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-primary">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {targets.map((target) => {
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
                            <CardTitle className="text-base">{target.name}</CardTitle>
                            <Badge 
                              variant={target.status === 'Connected' ? 'default' : 'outline'}
                              className="mt-1 text-xs"
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
          </div>
        ))}

        <div className="flex justify-center space-x-4 mt-8">
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
