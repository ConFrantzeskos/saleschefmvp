
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  BarChart3, 
  Eye, 
  Target, 
  Zap,
  ShoppingCart,
  Users,
  DollarSign,
  Globe,
  Clock,
  ArrowUp,
  ArrowDown,
  RefreshCw,
  Settings
} from 'lucide-react';
import SeasonalOpportunities from '@/components/SeasonalOpportunities';
import LocalOpportunities from '@/components/LocalOpportunities';

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');

  const overallMetrics = {
    totalRevenue: 2847392,
    conversionRate: 3.2,
    averageOrderValue: 127.50,
    customerLifetimeValue: 486.20,
    revenueGrowth: 23.4,
    conversionGrowth: 8.7,
    aovGrowth: -2.1,
    clvGrowth: 15.2
  };

  const diagnostics = [
    {
      id: 'content-performance',
      title: 'Content Performance Issues',
      severity: 'high',
      count: 12,
      description: 'Product descriptions missing key conversion elements',
      impact: '+18% potential conversion increase',
      icon: AlertTriangle,
      color: 'text-red-500'
    },
    {
      id: 'seo-opportunities',
      title: 'SEO Optimization Gaps',
      severity: 'medium',
      count: 8,
      description: 'Missing meta descriptions and structured data',
      impact: '+31% organic traffic potential',
      icon: Eye,
      color: 'text-yellow-500'
    },
    {
      id: 'pricing-analysis',
      title: 'Pricing Strategy Insights',
      severity: 'low',
      count: 5,
      description: 'Competitive pricing adjustments recommended',
      impact: '+7% margin improvement',
      icon: DollarSign,
      color: 'text-blue-500'
    },
    {
      id: 'inventory-optimization',
      title: 'Inventory Performance',
      severity: 'medium',
      count: 15,
      description: 'Slow-moving inventory detected',
      impact: '+12% inventory turnover',
      icon: BarChart3,
      color: 'text-orange-500'
    }
  ];

  const channelPerformance = [
    {
      channel: 'Shopify Store',
      revenue: 1247392,
      growth: 18.2,
      conversionRate: 4.1,
      issues: 2,
      status: 'good'
    },
    {
      channel: 'Amazon',
      revenue: 892847,
      growth: 31.7,
      conversionRate: 2.8,
      issues: 5,
      status: 'warning'
    },
    {
      channel: 'eBay',
      revenue: 376284,
      growth: -3.2,
      conversionRate: 1.9,
      issues: 8,
      status: 'critical'
    },
    {
      channel: 'Google Shopping',
      revenue: 330869,
      growth: 24.1,
      conversionRate: 3.7,
      issues: 1,
      status: 'good'
    }
  ];

  // optimizationTasks removed - replaced with SeasonalOpportunities component in the optimization tab

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'critical': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-semibold mb-2">Sales Performance Dashboard</h1>
            <p className="text-muted-foreground">
              Real-time insights and optimization opportunities powered by SalesChef AI
            </p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" onClick={() => setSelectedTimeframe('1d')}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh Data
            </Button>
            <Button onClick={() => navigate('/optimization')}>
              <Settings className="w-4 h-4 mr-2" />
              Optimization Settings
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold">${overallMetrics.totalRevenue.toLocaleString()}</p>
                </div>
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <ArrowUp className="w-3 h-3 text-green-500 mr-1" />
                <span className="text-sm text-green-600 font-medium">+{overallMetrics.revenueGrowth}%</span>
                <span className="text-sm text-muted-foreground ml-1">vs last period</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Conversion Rate</p>
                  <p className="text-2xl font-bold">{overallMetrics.conversionRate}%</p>
                </div>
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <ArrowUp className="w-3 h-3 text-green-500 mr-1" />
                <span className="text-sm text-green-600 font-medium">+{overallMetrics.conversionGrowth}%</span>
                <span className="text-sm text-muted-foreground ml-1">optimization impact</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Order Value</p>
                  <p className="text-2xl font-bold">${overallMetrics.averageOrderValue}</p>
                </div>
                <div className="p-2 bg-purple-100 rounded-lg">
                  <ShoppingCart className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <ArrowDown className="w-3 h-3 text-red-500 mr-1" />
                <span className="text-sm text-red-600 font-medium">{overallMetrics.aovGrowth}%</span>
                <span className="text-sm text-muted-foreground ml-1">needs attention</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Customer LTV</p>
                  <p className="text-2xl font-bold">${overallMetrics.customerLifetimeValue}</p>
                </div>
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <ArrowUp className="w-3 h-3 text-green-500 mr-1" />
                <span className="text-sm text-green-600 font-medium">+{overallMetrics.clvGrowth}%</span>
                <span className="text-sm text-muted-foreground ml-1">improving</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="optimization" className="space-y-6">
          <TabsList>
            <TabsTrigger value="optimization">Active Optimizations</TabsTrigger>
            <TabsTrigger value="local">Local Opportunities</TabsTrigger>
            <TabsTrigger value="diagnostics">AI Diagnostics</TabsTrigger>
            <TabsTrigger value="channels">Channel Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="diagnostics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>AI-Powered Sales Diagnostics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {diagnostics.map((diagnostic) => {
                    const Icon = diagnostic.icon;
                    return (
                      <div key={diagnostic.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                        <div className={`p-2 rounded-lg ${diagnostic.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{diagnostic.title}</h4>
                            <Badge className={getPriorityColor(diagnostic.severity)}>
                              {diagnostic.count} issues
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {diagnostic.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-green-600">
                              {diagnostic.impact}
                            </span>
                            <Button size="sm" variant="outline">
                              Fix Issues
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="channels" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>Multi-Channel Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {channelPerformance.map((channel, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(channel.status)}`} />
                        <div>
                          <h4 className="font-semibold">{channel.channel}</h4>
                          <p className="text-sm text-muted-foreground">
                            ${channel.revenue.toLocaleString()} revenue
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <p className="text-sm font-medium">Growth</p>
                          <div className="flex items-center">
                            {channel.growth > 0 ? (
                              <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                            ) : (
                              <TrendingDown className="w-3 h-3 text-red-500 mr-1" />
                            )}
                            <span className={`text-sm font-medium ${channel.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {channel.growth > 0 ? '+' : ''}{channel.growth}%
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">Conversion</p>
                          <p className="text-sm text-muted-foreground">{channel.conversionRate}%</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium">Issues</p>
                          <Badge variant={channel.issues > 5 ? 'destructive' : channel.issues > 2 ? 'outline' : 'default'}>
                            {channel.issues}
                          </Badge>
                        </div>
                        <Button size="sm" variant="outline">
                          Optimize
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="optimization" className="space-y-6">
            <SeasonalOpportunities />
          </TabsContent>

          <TabsContent value="local" className="space-y-6">
            <LocalOpportunities />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
