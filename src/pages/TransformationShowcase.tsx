import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import SectionHeader from '@/components/layout/SectionHeader';
import PageSection from '@/components/layout/PageSection';
import FactoryDataSection from '@/components/FactoryDataSection';
import EnrichmentDataSection from '@/components/EnrichmentDataSection';
import EnhancedContentSection from '@/components/EnhancedContentSection';
import GeneratedVisualContent from '@/components/GeneratedVisualContent';
import TransformationFlow from '@/components/TransformationFlow';
import FrameworkApplications from '@/components/FrameworkApplications';
import { EnrichmentAsset } from '@/types/enrichmentAsset';
import { Asset } from '@/types/asset';
import { contentSections } from '@/data/contentSections';
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  TrendingUp, 
  FileText, 
  Brain, 
  Sparkles,
  CheckCircle2,
  BarChart3,
  Zap
} from 'lucide-react';

const TransformationShowcase = () => {
  const navigate = useNavigate();
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Record<string, string>>({});

  // Mock enrichment asset data
  const enrichmentAsset: EnrichmentAsset = {
    id: 1,
    sku: "CD1234",
    name: "CD1234 24 Hour Charge Wireless Headphones | Bluetooth 5.0 | Foldable | Mic",
    brand: "TechSound",
    category: "Electronics > Audio > Headphones",
    status: "Enriched",
    quality: 95,
    searchTrends: "High demand for 'wireless headphones long battery' (8.2K searches/month), 'bluetooth headphones 24 hour' (3.1K searches/month)",
    customerSentiment: "Overall Positive (4.2/5 stars from 1,247 reviews)\n• Battery life: Excellent (95% positive mentions)\n• Sound quality: Very good (87% positive)",
    socialMentions: "312 mentions across platforms in last 30 days\n• Reddit: 89 mentions\n• Twitter: 156 mentions\n• YouTube: 67 mentions",
    competitorAnalysis: "Direct competitors:\n• Beats Studio3 ($349) - Our 24hr advantage\n• Sony WH-1000XM4 ($349) - Premium positioning\n• Bose QC45 ($329) - Direct competitor",
    seoOpportunities: "High-opportunity keywords:\n• 'best long battery headphones' (4,100 vol)\n• 'wireless headphones for travel' (2,800 vol)\n• 'bluetooth headphones 24 hours' (1,900 vol)",
    targetAudience: "Primary: Business travelers and remote workers (35-45 years)\nSecondary: Gaming enthusiasts (18-30 years)",
    keyFeatures: "1. 24-hour battery life\n2. Bluetooth 5.0 connectivity\n3. Foldable design\n4. Quick charge capability",
    seoKeywordVolume: "High volume for target keywords",
    reasonsToBuy: "Extended battery, portability, quality audio",
    categoryEntryPoints: "Wireless headphones category",
    favouriteFeatures: "Battery life, foldability",
    missingFeatures: "Active noise cancellation",
    keyCompetitors: "Beats, Sony, Bose",
    relativeStrengths: "Battery life advantage",
    verbatimQuotes: "Best battery life in class",
    relatedSearchTerms: "wireless headphones, bluetooth headphones",
    searchOpportunities: "Long-tail keywords available",
    culturalInsights: "North America: Focus on business productivity\nEurope: Sustainability and build quality\nAsia: Technology features and value",
    regionalPreferences: "Global appeal with regional customization",
    complianceData: "CE, FCC certified",
    forumDiscussions: "Positive discussions on tech forums",
    communityInsights: "Strong community support",
    influencerReviews: "Positive influencer coverage",
    creatorContent: "Multiple creator reviews",
    videoSentiment: "Positive video sentiment",
    technicalSpecs: "Detailed technical specifications",
    performanceBenchmarks: "Above average performance",
    sustainabilityScore: "Good sustainability rating",
    environmentalImpact: "Low environmental impact",
    compatibleProducts: "Compatible with major devices",
    ecosystemFit: "Fits well in ecosystem",
    priceHistory: "Stable pricing",
    valuePositioning: "Premium value proposition",
    criticalReviews: "Mostly positive",
    featureRequests: "Minor feature requests",
    qaInsights: "Common questions answered",
    categoryUseCases: "Multiple use cases",
    retailerIntelligence: "Available at major retailers",
    visualPerformance: "Strong visual appeal",
    expertReviewComparisons: "Favorable comparisons",
    innovationGaps: "Minor innovation gaps"
  };

  // Mock enhanced asset data
  const enhancedAsset: Asset = {
    id: 1,
    sku: "CD1234",
    name: "CD1234 24 Hour Charge Wireless Headphones | Bluetooth 5.0 | Foldable | Mic",
    brand: "TechSound",
    category: "Electronics > Audio > Headphones",
    status: "Enhanced",
    quality: 95,
    price: "$149.99",
    description: "Premium wireless headphones with 24-hour battery life",
    features: "Bluetooth 5.0, 24-hour battery, Foldable design",
    targetAudience: "Audio enthusiasts, professionals",
    keyBenefits: "Extended battery life, superior sound quality",
    competitiveAdvantage: "Industry-leading 24-hour battery life",
    seoKeywords: "wireless headphones, bluetooth 5.0",
    metaTitle: "CD1234 Wireless Headphones",
    metaDescription: "Experience premium audio with CD1234 wireless headphones",
    productBullets: "• 24-hour battery\n• Bluetooth 5.0\n• Foldable design",
    technicalSpecs: "Bluetooth: 5.0\nBattery: 24 hours\nWeight: 280g",
    useCases: "Music listening, Video calls, Gaming",
    warranty: "2 year warranty",
    certifications: "CE, FCC, RoHS, Bluetooth SIG"
  };

  // Consolidated raw factory data
  const consolidatedRawData = `SKU,CD1234
PRODUCT_NAME,24HR Wireless Headphone
BRAND,TechSound
BATTERY_LIFE,24hr
BLUETOOTH_VERSION,5.0
WEIGHT,250g
FOLDABLE,YES
MIC_TYPE,Omnidirectional
WARRANTY,24 months
SELL_POINT_1,Super long battery make your music never stop!
SELL_POINT_2,Fold design very convenient for travel carry
SELL_POINT_3,Professional sound quality with deep bass experience
SELL_POINT_4,Comfortable wear all day no pressure feeling`;

  const handleEdit = (fieldKey: string) => {
    setEditingField(fieldKey);
    setEditValues({
      ...editValues,
      [fieldKey]: enrichmentAsset[fieldKey as keyof EnrichmentAsset] as string
    });
  };

  const handleSave = (fieldKey: string) => {
    setEditingField(null);
  };

  const handleCancel = () => {
    setEditingField(null);
  };

  const handleEditValueChange = (fieldKey: string, value: string) => {
    setEditValues({
      ...editValues,
      [fieldKey]: value
    });
  };

  // Transformation metrics
  const metrics = [
    {
      label: "Data Fields",
      before: "12",
      after: "58+",
      increase: "+383%",
      icon: FileText,
      color: "text-blue-600"
    },
    {
      label: "Quality Score",
      before: "Basic",
      after: "95%",
      increase: "+95%",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      label: "Content Pieces",
      before: "4",
      after: "15+",
      increase: "+275%",
      icon: Sparkles,
      color: "text-purple-600"
    },
    {
      label: "Market Intelligence",
      before: "0",
      after: "13 Sources",
      increase: "New",
      icon: Brain,
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(-1)}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <div>
                <h1 className="text-xl font-display font-bold">Transformation Showcase</h1>
                <p className="text-sm text-muted-foreground">From raw data to market-ready content</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Transformation Metrics */}
        <PageSection>
          <SectionHeader
            title="Transformation Impact"
            subtitle="See the measurable improvements across all dimensions"
            size="lg"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-2 rounded-lg bg-${metric.color.split('-')[1]}-100`}>
                        <Icon className={`w-5 h-5 ${metric.color}`} />
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {metric.increase}
                      </Badge>
                    </div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">{metric.label}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">{metric.after}</span>
                      <span className="text-sm text-muted-foreground line-through">{metric.before}</span>
                    </div>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 to-primary/60" />
                </Card>
              );
            })}
          </div>
        </PageSection>

        {/* Transformation Flow */}
        <PageSection>
          <SectionHeader
            title="The Transformation Process"
            subtitle="How raw factory data becomes compelling market-ready content"
            size="md"
          />
          <div className="mt-6">
            <TransformationFlow />
          </div>
        </PageSection>

        {/* Before & After Comparison */}
        <PageSection>
          <SectionHeader
            title="Before & After Comparison"
            subtitle="A complete view of the content transformation"
            size="md"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {/* BEFORE Section */}
            <Card className="border-2 border-red-200 bg-red-50/50">
              <CardHeader className="bg-red-100/80 border-b border-red-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-200 rounded-lg">
                    <FileText className="w-5 h-5 text-red-700" />
                  </div>
                  <div>
                    <CardTitle className="text-red-900">Before: Raw Factory Data</CardTitle>
                    <p className="text-sm text-red-700 mt-1">Basic CSV specifications from manufacturer</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-2 text-sm text-red-800">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    <span>Only 12 technical specifications</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-red-800">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    <span>Poor quality "Chinglish" selling points</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-red-800">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    <span>No market intelligence or customer insights</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-red-800">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    <span>No strategic frameworks applied</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-red-800">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0" />
                    <span>Zero visual content assets</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <ScrollArea className="h-64">
                  <div className="border border-red-200 bg-background p-4 rounded-md">
                    <pre className="text-xs text-red-600 font-mono whitespace-pre-wrap">
                      {consolidatedRawData}
                    </pre>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* AFTER Section */}
            <Card className="border-2 border-green-200 bg-green-50/50">
              <CardHeader className="bg-green-100/80 border-b border-green-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-200 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <CardTitle className="text-green-900">After: Market-Ready Content</CardTitle>
                    <p className="text-sm text-green-700 mt-1">Enriched, enhanced, and optimized for maximum impact</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-2 text-sm text-green-800">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>58+ enriched data fields</strong> with market intelligence</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-green-800">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>13 intelligence sources</strong> including search trends, sentiment, SEO</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-green-800">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>15+ strategic frameworks</strong> applied for persuasive messaging</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-green-800">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>12 content pieces</strong> optimized for different channels</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-green-800">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>AI-generated visuals</strong> for product, lifestyle, and social media</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-900">Explore Transformed Content</span>
                </div>

                <Tabs defaultValue="enriched" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 h-auto">
                    <TabsTrigger value="enriched" className="text-xs py-2">
                      <BarChart3 className="w-3 h-3 mr-1" />
                      Intelligence
                    </TabsTrigger>
                    <TabsTrigger value="frameworks" className="text-xs py-2">
                      <Brain className="w-3 h-3 mr-1" />
                      Frameworks
                    </TabsTrigger>
                    <TabsTrigger value="content" className="text-xs py-2">
                      <FileText className="w-3 h-3 mr-1" />
                      Content
                    </TabsTrigger>
                    <TabsTrigger value="visuals" className="text-xs py-2">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Visuals
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="enriched" className="mt-4">
                    <ScrollArea className="h-64">
                      <div className="space-y-3 pr-4">
                        <div className="bg-background p-3 rounded-lg border border-green-200">
                          <p className="text-xs font-medium text-green-900 mb-1">Search Trends</p>
                          <p className="text-xs text-muted-foreground">8.2K monthly searches for "wireless headphones long battery"</p>
                        </div>
                        <div className="bg-background p-3 rounded-lg border border-green-200">
                          <p className="text-xs font-medium text-green-900 mb-1">Customer Sentiment</p>
                          <p className="text-xs text-muted-foreground">4.2/5 stars • 95% positive battery mentions</p>
                        </div>
                        <div className="bg-background p-3 rounded-lg border border-green-200">
                          <p className="text-xs font-medium text-green-900 mb-1">Competitive Positioning</p>
                          <p className="text-xs text-muted-foreground">24hr battery beats Beats Studio3 (20hr) at lower price</p>
                        </div>
                        <div className="bg-background p-3 rounded-lg border border-green-200">
                          <p className="text-xs font-medium text-green-900 mb-1">SEO Opportunities</p>
                          <p className="text-xs text-muted-foreground">10+ high-volume keywords identified</p>
                        </div>
                      </div>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="frameworks" className="mt-4">
                    <ScrollArea className="h-64">
                      <div className="space-y-2 pr-4">
                        <Badge variant="outline" className="mr-2">Benefit Ladder</Badge>
                        <Badge variant="outline" className="mr-2">Loss Aversion</Badge>
                        <Badge variant="outline" className="mr-2">Social Proof</Badge>
                        <Badge variant="outline" className="mr-2">Authority</Badge>
                        <Badge variant="outline" className="mr-2">Scarcity</Badge>
                        <Badge variant="outline" className="mr-2">Reciprocity</Badge>
                        <Badge variant="outline" className="mr-2">Unity</Badge>
                        <Badge variant="outline" className="mr-2">Jobs To Be Done</Badge>
                        <div className="pt-3 text-xs text-muted-foreground">
                          15+ strategic frameworks applied to create persuasive, customer-centric messaging
                        </div>
                      </div>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="content" className="mt-4">
                    <ScrollArea className="h-64">
                      <div className="space-y-3 pr-4">
                        {contentSections.slice(0, 3).map((section, idx) => (
                          <div key={idx} className="bg-background p-3 rounded-lg border border-green-200">
                            <p className="text-xs font-medium text-green-900 mb-1">{section.title}</p>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {section.items[0]?.content?.substring(0, 100)}...
                            </p>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="visuals" className="mt-4">
                    <ScrollArea className="h-64">
                      <div className="grid grid-cols-2 gap-2 pr-4">
                        <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                          <Sparkles className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                          <Sparkles className="w-8 h-8 text-purple-600" />
                        </div>
                        <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                          <Sparkles className="w-8 h-8 text-green-600" />
                        </div>
                        <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
                          <Sparkles className="w-8 h-8 text-orange-600" />
                        </div>
                      </div>
                      <p className="text-xs text-center text-muted-foreground mt-3">
                        AI-generated product, lifestyle, and social media visuals
                      </p>
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </PageSection>

        {/* Detailed Content Sections */}
        <PageSection>
          <SectionHeader
            title="Explore Full Transformed Content"
            subtitle="Dive deep into each layer of intelligence and enhancement"
            size="md"
          />

          <Tabs defaultValue="enrichment" className="mt-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="enrichment">Market Intelligence</TabsTrigger>
              <TabsTrigger value="frameworks">Strategic Frameworks</TabsTrigger>
              <TabsTrigger value="content">Enhanced Content</TabsTrigger>
              <TabsTrigger value="visuals">Visual Assets</TabsTrigger>
            </TabsList>

            <TabsContent value="enrichment" className="mt-6">
              <EnrichmentDataSection
                asset={enrichmentAsset}
                editingField={editingField}
                editValues={editValues}
                onEdit={handleEdit}
                onSave={handleSave}
                onCancel={handleCancel}
                onEditValueChange={handleEditValueChange}
              />
            </TabsContent>

            <TabsContent value="frameworks" className="mt-6">
              <FrameworkApplications />
            </TabsContent>

            <TabsContent value="content" className="mt-6">
              <EnhancedContentSection 
                contentSections={contentSections}
                editingField={editingField}
                editValues={editValues}
                onEdit={(sectionIndex, itemIndex) => {
                  setEditingField(`${sectionIndex}-${itemIndex}`);
                }}
                onSave={() => setEditingField(null)}
                onCancel={() => setEditingField(null)}
                onEditValueChange={(fieldKey, value) => {
                  setEditValues({ ...editValues, [fieldKey]: value });
                }}
                showMetadata={true}
              />
            </TabsContent>

            <TabsContent value="visuals" className="mt-6">
              <GeneratedVisualContent 
                keywords="wireless headphones, bluetooth 5.0, long battery"
                keyBenefits="24-hour battery life, foldable design, superior sound quality"
                competitiveAdvantage="Industry-leading battery life at competitive price"
              />
            </TabsContent>
          </Tabs>
        </PageSection>

        {/* Call to Action */}
        <PageSection>
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-8 text-center">
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold">Ready to Deploy?</h3>
                <p className="text-muted-foreground">
                  Your content has been transformed and is ready to deploy across all your channels. 
                  Export, share, or publish directly to your platforms.
                </p>
                <div className="flex gap-3 justify-center pt-4">
                  <Button size="lg" onClick={() => navigate('/deploy')} className="gap-2">
                    <Sparkles className="w-4 h-4" />
                    Deploy Content
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Download className="w-4 h-4" />
                    Download Report
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </PageSection>
      </div>
    </div>
  );
};

export default TransformationShowcase;
