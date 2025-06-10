import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, Store, BarChart3, Globe, Smartphone, Monitor, Mail, Radio, Users, Target, Eye, Zap } from 'lucide-react';

const Optimization = () => {
  const navigate = useNavigate();

  const deploymentSummary = {
    totalProducts: 847,
    channelsUpdated: 3,
    avgQualityIncrease: 89,
    estimatedImpact: '+23% conversion rate'
  };

  const connectionOptions = [
    // E-commerce Platforms
    {
      id: 'shopify',
      name: 'Shopify Analytics',
      description: 'Connect your store to track performance and optimize content based on sales data',
      icon: Store,
      benefit: 'Automatic content optimization based on conversion rates',
      status: 'recommended',
      category: 'E-commerce'
    },
    {
      id: 'woocommerce',
      name: 'WooCommerce Analytics',
      description: 'Track WordPress store performance and optimize product content',
      icon: Store,
      benefit: 'WooCommerce-specific content optimization',
      status: 'available',
      category: 'E-commerce'
    },
    {
      id: 'magento',
      name: 'Magento Commerce',
      description: 'Connect Magento analytics for enterprise-level optimization',
      icon: Store,
      benefit: 'Advanced B2B content optimization',
      status: 'available',
      category: 'E-commerce'
    },
    {
      id: 'bigcommerce',
      name: 'BigCommerce Analytics',
      description: 'Link BigCommerce store data for performance tracking',
      icon: Store,
      benefit: 'Multi-channel content optimization',
      status: 'available',
      category: 'E-commerce'
    },
    
    // Analytics Platforms
    {
      id: 'google',
      name: 'Google Analytics 4',
      description: 'Link GA4 to understand traffic patterns and content performance',
      icon: BarChart3,
      benefit: 'SEO content optimization based on search performance',
      status: 'available',
      category: 'Analytics'
    },
    {
      id: 'adobe-analytics',
      name: 'Adobe Analytics',
      description: 'Enterprise analytics for deep customer journey insights',
      icon: BarChart3,
      benefit: 'Advanced customer segmentation for content targeting',
      status: 'available',
      category: 'Analytics'
    },
    {
      id: 'mixpanel',
      name: 'Mixpanel',
      description: 'Event-based analytics for product interaction tracking',
      icon: Target,
      benefit: 'Behavioral-driven content optimization',
      status: 'available',
      category: 'Analytics'
    },
    {
      id: 'hotjar',
      name: 'Hotjar',
      description: 'Heatmaps and user session recordings for UX insights',
      icon: Eye,
      benefit: 'User behavior-driven content placement optimization',
      status: 'available',
      category: 'Analytics'
    },
    {
      id: 'amplitude',
      name: 'Amplitude',
      description: 'Product analytics for understanding user engagement',
      icon: TrendingUp,
      benefit: 'Engagement-focused content optimization',
      status: 'available',
      category: 'Analytics'
    },
    
    // Marketplace Analytics
    {
      id: 'amazon',
      name: 'Amazon Seller Central',
      description: 'Connect seller account for marketplace-specific optimization',
      icon: Globe,
      benefit: 'Marketplace-optimized content generation',
      status: 'available',
      category: 'Marketplaces'
    },
    {
      id: 'ebay-analytics',
      name: 'eBay Analytics',
      description: 'Track eBay listing performance and optimize accordingly',
      icon: Globe,
      benefit: 'Auction and Buy-It-Now content optimization',
      status: 'available',
      category: 'Marketplaces'
    },
    {
      id: 'etsy-stats',
      name: 'Etsy Shop Stats',
      description: 'Connect Etsy shop statistics for handmade market insights',
      icon: Globe,
      benefit: 'Artisan-focused content optimization',
      status: 'available',
      category: 'Marketplaces'
    },
    
    // Social & Advertising
    {
      id: 'social',
      name: 'Social Media Insights',
      description: 'Connect Facebook/Instagram for social commerce optimization',
      icon: Smartphone,
      benefit: 'Social-optimized product descriptions and captions',
      status: 'available',
      category: 'Social'
    },
    {
      id: 'google-ads',
      name: 'Google Ads',
      description: 'Connect Google Ads for search advertising optimization',
      icon: Monitor,
      benefit: 'Ad copy and landing page content optimization',
      status: 'available',
      category: 'Advertising'
    },
    {
      id: 'facebook-ads',
      name: 'Facebook Ads Manager',
      description: 'Optimize content based on Facebook advertising performance',
      icon: Users,
      benefit: 'Social advertising content optimization',
      status: 'available',
      category: 'Advertising'
    },
    
    // Email & Marketing
    {
      id: 'mailchimp',
      name: 'Mailchimp',
      description: 'Connect email marketing data for content optimization',
      icon: Mail,
      benefit: 'Email-optimized product content and campaigns',
      status: 'available',
      category: 'Marketing'
    },
    {
      id: 'klaviyo',
      name: 'Klaviyo',
      description: 'E-commerce email marketing optimization',
      icon: Mail,
      benefit: 'Personalized email content generation',
      status: 'available',
      category: 'Marketing'
    },
    {
      id: 'hubspot',
      name: 'HubSpot',
      description: 'CRM and marketing automation insights',
      icon: Zap,
      benefit: 'Lead-focused content optimization',
      status: 'available',
      category: 'Marketing'
    }
  ];

  // Group options by category
  const groupedOptions = connectionOptions.reduce((acc, option) => {
    const category = option.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(option);
    return acc;
  }, {} as Record<string, typeof connectionOptions>);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-semibold mb-2">Deployment Complete!</h1>
          <p className="text-lg text-muted-foreground">
            Your enhanced content is now live. Let's set up optimization for continuous improvement.
          </p>
        </div>

        {/* Deployment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">
                {deploymentSummary.totalProducts}
              </div>
              <div className="text-sm text-muted-foreground">Products Updated</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">
                {deploymentSummary.channelsUpdated}
              </div>
              <div className="text-sm text-muted-foreground">Channels Published</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">
                +{deploymentSummary.avgQualityIncrease}%
              </div>
              <div className="text-sm text-muted-foreground">Quality Increase</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">
                {deploymentSummary.estimatedImpact}
              </div>
              <div className="text-sm text-muted-foreground">Est. Conversion</div>
            </CardContent>
          </Card>
        </div>

        {/* Optimization Section */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <CardTitle>Continuous Optimization</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Connect your analytics platforms and e-commerce systems to enable SalesChef's continuous learning. 
              We'll automatically optimize your content based on real performance data across all channels.
            </p>
            
            {Object.entries(groupedOptions).map(([category, options]) => (
              <div key={category} className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-primary">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {options.map((option) => {
                    const Icon = option.icon;
                    
                    return (
                      <Card key={option.id} className="border-muted hover:border-primary/50 transition-colors">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <Icon className="w-4 h-4 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-sm">{option.name}</h4>
                                {option.status === 'recommended' && (
                                  <Badge className="mt-1">Recommended</Badge>
                                )}
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Connect
                            </Button>
                          </div>
                          
                          <p className="text-xs text-muted-foreground mb-2">
                            {option.description}
                          </p>
                          
                          <div className="text-xs font-medium text-primary">
                            💡 {option.benefit}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle>What's Next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-medium text-primary">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Monitor Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    Track how your enhanced content performs across channels
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-medium text-primary">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Upload More Data</h4>
                  <p className="text-sm text-muted-foreground">
                    Add more product catalogs or update existing ones
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-medium text-primary">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Enable Auto-Optimization</h4>
                  <p className="text-sm text-muted-foreground">
                    Let SalesChef automatically improve content based on performance data
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <Button onClick={() => navigate('/enhance')}>
                Upload More Products
              </Button>
              <Button variant="outline">
                View Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Optimization;
