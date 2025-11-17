import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import AssetHeader from '@/components/AssetHeader';
import FactoryDataSection from '@/components/FactoryDataSection';
import EnhancedContentSection from '@/components/EnhancedContentSection';
import GeneratedVisualContent from '@/components/GeneratedVisualContent';
import IntelligenceSummaryPanel from '@/components/IntelligenceSummaryPanel';
import TransformationFlow from '@/components/TransformationFlow';
import EnrichmentTraceability from '@/components/EnrichmentTraceability';
import FrameworkApplications from '@/components/FrameworkApplications';
import { contentSections } from '@/data/contentSections';
import { Asset } from '@/types/asset';
import { ArrowRight, Database, TrendingUp, Brain, FileText } from 'lucide-react';

const AssetReview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Record<string, string>>({});
  
  // Mock data for the asset with proper typing
  const asset: Asset = {
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

  // Consolidated raw factory data with realistic CSV-style specs and some Chinglish
  const consolidatedRawData = `SKU,CD1234
PRODUCT_NAME,24HR Wireless Headphone
BRAND,TechSound
MODEL_NO,TS-WH-24H-001
UPC,123456789012
ASIN,B08XXXXX12
CATEGORY,Consumer Electronics/Audio/Headphones/Wireless
DRIVER_SIZE,40mm
DRIVER_TYPE,Dynamic Neodymium
FREQ_RESPONSE,20Hz-20000Hz
IMPEDANCE,32Ω
SENSITIVITY,102dB±3dB
THD,<0.1%
BLUETOOTH_VERSION,5.0
BLUETOOTH_RANGE,10m
BLUETOOTH_CODECS,SBC,AAC,aptX
BLUETOOTH_PROFILES,A2DP,AVRCP,HFP,HSP
BATTERY_CAPACITY,600mAh
BATTERY_LIFE,24hr
STANDBY_TIME,200hr
CHARGE_TIME,2hr
CHARGE_PORT,USB-C
QUICK_CHARGE,15min=3hr
WEIGHT,250g
DIMENSIONS_UNFOLDED,180x160x80mm
DIMENSIONS_FOLDED,90x160x80mm
FOLDABLE,YES
MIC_TYPE,Omnidirectional
MIC_SENSITIVITY,-42dB±3dB
NOISE_CANCELLING,Passive
OPERATING_TEMP,-10°C to 45°C
HUMIDITY,10%-90%
COLOR_OPTIONS,Black,Navy Blue
MATERIALS,ABS Plastic,Metal,Protein Leather
CABLE_LENGTH,1.2m
ACCESSORIES,USB-C Cable,3.5mm Cable,Carry Pouch,Manual
WARRANTY,24 months
CERTIFICATIONS,CE,FCC,RoHS,WEEE
COUNTRY_ORIGIN,China
FACTORY_CODE,SZ-2024-001
SELL_POINT_1,Super long battery make your music never stop!
SELL_POINT_2,Fold design very convenient for travel carry
SELL_POINT_3,Professional sound quality with deep bass experience
SELL_POINT_4,Comfortable wear all day no pressure feeling
PACKAGING_TYPE,Color Box
PACKAGE_DIMS,200x180x100mm
PACKAGE_WEIGHT,450g
MASTER_CARTON,20pcs
CARTON_DIMS,420x380x520mm
CARTON_WEIGHT,10.5kg
MOQ,500pcs
LEAD_TIME,15-20days
FOB_PRICE,USD_28.50
RETAIL_PRICE,USD_79.99`;

  const handleApprove = () => {
    toast.success("Content approved successfully!");
    setTimeout(() => {
      navigate('/review');
    }, 1000);
  };

  const handleEdit = (sectionIndex: number, itemIndex: number) => {
    const fieldKey = `${sectionIndex}-${itemIndex}`;
    setEditingField(fieldKey);
    setEditValues({
      ...editValues,
      [fieldKey]: contentSections[sectionIndex].items[itemIndex].content
    });
  };

  const handleSave = (sectionIndex: number, itemIndex: number) => {
    const fieldKey = `${sectionIndex}-${itemIndex}`;
    // In a real app, this would save to backend
    contentSections[sectionIndex].items[itemIndex].content = editValues[fieldKey];
    setEditingField(null);
  };

  const handleCancel = () => {
    setEditingField(null);
    setEditValues({});
  };

  const handleEditValueChange = (fieldKey: string, value: string) => {
    setEditValues({
      ...editValues,
      [fieldKey]: value
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="max-w-7xl mx-auto p-6 flex-1 flex flex-col">
        <AssetHeader asset={asset} onApprove={handleApprove} />

        {/* Intelligence Build Tabs */}
        <Tabs defaultValue="content" className="flex-1 flex flex-col min-h-0">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="raw" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              <div className="flex flex-col items-start">
                <span className="hidden sm:inline">1. Raw Data</span>
                <span className="sm:hidden">Raw</span>
                <span className="text-xs text-muted-foreground font-normal hidden lg:inline">Starting Point</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="enrichment" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <div className="flex flex-col items-start">
                <span className="hidden sm:inline">2. Intelligence</span>
                <span className="sm:hidden">Intel</span>
                <span className="text-xs text-muted-foreground font-normal hidden lg:inline">Market Intelligence Added</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="frameworks" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <div className="flex flex-col items-start">
                <span className="hidden sm:inline">3. Frameworks</span>
                <span className="sm:hidden">Strat</span>
                <span className="text-xs text-muted-foreground font-normal hidden lg:inline">Strategic Frameworks Applied</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <div className="flex flex-col items-start">
                <span className="hidden sm:inline">4. Content</span>
                <span className="sm:hidden">Output</span>
                <span className="text-xs text-muted-foreground font-normal hidden lg:inline">Production-Ready Content</span>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: Raw Factory Data */}
          <TabsContent value="raw" className="flex-1 min-h-0 overflow-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Phase 1: Raw Factory Data
                </CardTitle>
                <CardDescription>
                  Original CSV data from manufacturer - before cleaning and transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FactoryDataSection consolidatedRawData={consolidatedRawData} />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 2: Market Intelligence / Enrichment */}
          <TabsContent value="enrichment" className="flex-1 min-h-0 overflow-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Phase 2: Market Intelligence & Enrichment
                </CardTitle>
                <CardDescription>
                  Added competitive intelligence, search trends, and customer insights
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="border rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Badge>Search Trends</Badge>
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• "wireless headphones long battery" - High search volume (8.2K/mo)</li>
                      <li>• "24 hour battery headphones" - Growing trend (+34% YoY)</li>
                      <li>• "professional wireless headphones" - Medium volume (3.1K/mo)</li>
                      <li>• "foldable travel headphones" - Rising interest (+22% YoY)</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Badge>Customer Sentiment Analysis</Badge>
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Battery Life: ⭐ 4.8/5 - "Best feature, lasts all day"</li>
                      <li>• Comfort: ⭐ 4.2/5 - "Comfortable for extended wear"</li>
                      <li>• Sound Quality: ⭐ 4.5/5 - "Clear audio, good bass"</li>
                      <li>• Portability: ⭐ 4.7/5 - "Love the foldable design"</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Badge>Competitive Analysis</Badge>
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Sony WH-1000XM4: 30hr battery, $349 - Premium positioning</li>
                      <li>• Beats Studio3: 22hr battery, $349 - Fashion-forward</li>
                      <li>• Bose QC45: 24hr battery, $329 - Comfort leader</li>
                      <li>• Our advantage: 24hr battery at $149 - Value leader</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Badge>Key Feature Extraction</Badge>
                    </h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Primary differentiator: 24-hour battery life at competitive price</li>
                      <li>• Secondary strength: Foldable design for travel</li>
                      <li>• Target audience: Professionals, frequent travelers, students</li>
                      <li>• Use case priority: Meetings &gt; Commuting &gt; Travel &gt; Entertainment</li>
                    </ul>
                  </div>
                </div>

                <Separator className="my-6" />

                <EnrichmentTraceability />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 3: Strategic Frameworks */}
          <TabsContent value="frameworks" className="flex-1 min-h-0 overflow-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Phase 3: Strategic Frameworks Applied
                </CardTitle>
                <CardDescription>
                  Marketing frameworks that shaped the content strategy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="border rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Badge className="bg-primary/10 text-primary border-primary/40">Ladder of Benefits</Badge>
                    </h4>
                    <div className="text-sm space-y-1">
                      <p className="font-medium">4-level ladder (Battery Feature example):</p>
                      <ul className="space-y-1 text-muted-foreground ml-4">
                        <li>🔧 Feature: 24-hour continuous battery life</li>
                        <li>⚡ Feature Benefit: Never need to charge mid-day</li>
                        <li>🎯 Consumer Benefit: Perfect for all-day work, long flights, gaming</li>
                        <li>❤️ Emotional/Social: Your home becomes the reliable hub where you're always powered up</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Badge className="bg-primary/10 text-primary border-primary/40">Jobs to Be Done</Badge>
                    </h4>
                    <div className="text-sm space-y-1">
                      <p className="font-medium">5 Core Jobs Customers Hire This Product For:</p>
                      <ul className="space-y-1 text-muted-foreground ml-4">
                        <li>✈️ Sleeping on flights - Create peaceful audio cocoon for long journeys</li>
                        <li>💪 Workout motivation - Deliver energizing music that stays secure during movement</li>
                        <li>💼 Professional calls - Sound credible and polished despite home office chaos</li>
                        <li>🎯 Deep focus - Block open office distractions for 4+ hour focus sessions</li>
                        <li>📚 Productive commute - Transform dead time into learning opportunity</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Badge className="bg-primary/10 text-primary border-primary/40">Category Entry Points</Badge>
                    </h4>
                    <div className="text-sm space-y-1">
                      <p className="font-medium">Moments when customers think of this product:</p>
                      <ul className="space-y-1 text-muted-foreground ml-4">
                        <li>🌅 Morning commute - "Need focus for the day"</li>
                        <li>✈️ Booking travel - "Need reliable entertainment"</li>
                        <li>💻 Back-to-back meetings - "Need professional audio"</li>
                        <li>😴 Afternoon slump - "Need motivation boost"</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 space-y-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Badge className="bg-amber-500/10 text-amber-700 border-amber-500/40">Behavioral Economics</Badge>
                    </h4>
                    <div className="text-sm space-y-1">
                      <p className="font-medium">Psychological triggers in content:</p>
                      <ul className="space-y-1 text-muted-foreground ml-4">
                        <li>⏳ Scarcity: "Only 3 left at this price"</li>
                        <li>👥 Social Proof: "12 people viewing now"</li>
                        <li>🛡️ Loss Aversion: "Never worry about battery again"</li>
                        <li>🎁 Reciprocity: "Free returns + 2-year warranty"</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <FrameworkApplications />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab 4: Generated Content */}
          <TabsContent value="content" className="flex-1 min-h-0 overflow-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column - Intelligence Summary & Visual Content */}
              <div className="lg:col-span-4 space-y-6">
                <IntelligenceSummaryPanel 
                  cleanedFields={47}
                  enrichmentInsights={12}
                  frameworksApplied={8}
                  contentPieces={24}
                />
                <GeneratedVisualContent 
                  keywords={asset.seoKeywords}
                  keyBenefits={asset.keyBenefits}
                  competitiveAdvantage={asset.competitiveAdvantage}
                />
              </div>

              {/* Right Column - Production-Ready Content */}
              <div className="lg:col-span-8 flex flex-col">
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">
                    <span className="font-semibold">📋 Final Deliverables:</span> Production-ready content, polished and ready to deploy. All strategic annotations removed.
                  </p>
                </div>
                <EnhancedContentSection
                  contentSections={contentSections}
                  editingField={editingField}
                  editValues={editValues}
                  onEdit={handleEdit}
                  onSave={handleSave}
                  onCancel={handleCancel}
                  onEditValueChange={handleEditValueChange}
                  showMetadata={false}
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Fixed bottom navigation bar */}
      <div className="border-t bg-background px-6 py-4 mt-auto">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Button variant="outline" onClick={() => navigate('/review')}>
            Back to Assets
          </Button>
          <div className="space-x-3">
            <Button 
              variant="outline"
              onClick={() => navigate('/transformation-showcase')}
            >
              View Transformation
            </Button>
            <Button variant="outline">
              Request Changes
            </Button>
            <Button onClick={handleApprove}>
              Approve & Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetReview;
