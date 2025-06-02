
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Globe, FileText, Image, Mail, Printer, GraduationCap, HelpCircle, Search, Edit, Save, X } from 'lucide-react';

const AssetReview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Mock data for the asset
  const asset = {
    id: 1,
    sku: "PRD-001",
    name: "Wireless Bluetooth Headphones",
    brand: "TechSound",
    category: "Electronics > Audio > Headphones",
    status: "Enhanced",
    quality: 95
  };

  // Raw factory data (poor quality)
  const rawData = {
    name: "bluetooth headphone",
    description: "headphone with bluetooth",
    features: "bluetooth, wireless, headphone",
    specs: "bluetooth headphone 40mm driver",
    price: "$79.99",
    category: "electronics",
    compatibility: "phone",
    battery: "long battery"
  };

  // Enhanced data sections
  const [editingField, setEditingField] = useState<string | null>(null);
  const [enhancedContent, setEnhancedContent] = useState({
    // PDP Content
    heroSection: "Experience Premium Audio Freedom - TechSound Wireless Bluetooth Headphones deliver crystal-clear sound with 30-hour battery life, advanced noise cancellation, and all-day comfort for professionals on the go.",
    featureHighlights: "• 30-hour battery life for all-day listening\n• Advanced Bluetooth 5.0 connectivity\n• Active noise cancellation technology\n• Premium comfort padding\n• Quick charge: 15 minutes = 3 hours playback",
    lifestyleContent: "Whether you're commuting to work, focusing in a busy office, or traveling the world, TechSound headphones adapt to your lifestyle. The foldable design fits perfectly in your carry-on, while the extended battery ensures your music never stops.",
    
    // Spec Sheet
    technicalSpecs: "• Driver Size: 40mm dynamic drivers\n• Frequency Response: 20Hz - 20kHz\n• Bluetooth Version: 5.0\n• Battery Life: 30 hours\n• Charging Time: 2 hours\n• Weight: 250g",
    compatibilityInfo: "Compatible with all Bluetooth-enabled devices including:\n• iOS devices (iPhone, iPad)\n• Android smartphones and tablets\n• Windows and Mac computers\n• Gaming consoles (PS5, Xbox)\n• Smart TVs and streaming devices",
    performanceMetrics: "• Signal Range: Up to 33 feet (10 meters)\n• Latency: <40ms for video sync\n• Charging Port: USB-C\n• Codec Support: SBC, AAC, aptX\n• Noise Reduction: Up to 25dB",
    
    // Sales Sheet
    keySellingPoints: "✓ Industry-leading 30-hour battery life\n✓ Professional-grade noise cancellation\n✓ Premium comfort for all-day wear\n✓ Universal compatibility\n✓ Rapid charging technology",
    competitiveAdvantages: "• 25% longer battery life than leading competitors\n• Superior noise cancellation vs Sony WH-1000XM4\n• More comfortable than Bose QuietComfort 45\n• Better value proposition than Apple AirPods Max\n• Faster charging than market average",
    valueProposition: "Premium audio experience at mid-range pricing. TechSound delivers flagship features typically found in $300+ headphones at an accessible $79.99 price point, making professional-grade audio accessible to everyone.",
    
    // SEO Content
    metaTitle: "TechSound Wireless Bluetooth Headphones - 30Hr Battery Life | Noise Cancelling",
    metaDescription: "Experience premium audio with TechSound wireless headphones. 30-hour battery, active noise cancellation, and crystal-clear sound quality. Free shipping on orders over $50.",
    seoKeywords: "Primary: wireless bluetooth headphones, noise cancelling headphones\nSecondary: long battery life headphones, comfortable headphones, professional audio\nLong-tail: best wireless headphones for work, bluetooth headphones 30 hour battery",
    
    // Email Marketing
    subjectLines: "• Your audio upgrade is here - 30% off TechSound headphones\n• Finally, headphones that last as long as your workday\n• Premium sound without the premium price tag\n• Last chance: TechSound headphones at launch price",
    productAnnouncements: "Introducing TechSound Wireless Headphones - the perfect blend of premium audio quality and all-day comfort. With 30-hour battery life and professional-grade noise cancellation, these headphones are designed for the modern professional who demands excellence.",
    promotionalCopy: "Limited Time: Get your TechSound headphones for just $79.99 (RRP $99.99). Free shipping included. 30-day money-back guarantee. Don't let poor audio quality hold back your productivity - upgrade today."
  });

  const handleEdit = (field: string) => {
    setEditingField(field);
  };

  const handleSave = (field: string) => {
    setEditingField(null);
    // In real app, would save to backend
  };

  const handleCancel = () => {
    setEditingField(null);
    // In real app, would revert changes
  };

  const handleContentChange = (field: string, value: string) => {
    setEnhancedContent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const EditableField = ({ field, label, content }: { field: string; label: string; content: string }) => (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-sm text-primary">{label}</h4>
        {editingField === field ? (
          <div className="flex space-x-1">
            <Button size="sm" variant="outline" onClick={() => handleSave(field)}>
              <Save className="w-3 h-3" />
            </Button>
            <Button size="sm" variant="outline" onClick={handleCancel}>
              <X className="w-3 h-3" />
            </Button>
          </div>
        ) : (
          <Button size="sm" variant="outline" onClick={() => handleEdit(field)}>
            <Edit className="w-3 h-3" />
          </Button>
        )}
      </div>
      {editingField === field ? (
        <Textarea
          value={content}
          onChange={(e) => handleContentChange(field, e.target.value)}
          className="min-h-[100px] text-sm"
        />
      ) : (
        <div className="text-sm leading-relaxed whitespace-pre-line bg-muted/30 p-3 rounded-md">
          {content}
        </div>
      )}
    </div>
  );

  const contentSections = [
    {
      icon: Globe,
      title: "PDP Content",
      description: "Comprehensive product detail page content",
      items: [
        { field: "heroSection", label: "Hero Section", enhanced: enhancedContent.heroSection, raw: rawData.description },
        { field: "featureHighlights", label: "Feature Highlights", enhanced: enhancedContent.featureHighlights, raw: rawData.features },
        { field: "lifestyleContent", label: "Lifestyle Content", enhanced: enhancedContent.lifestyleContent, raw: "good headphone for use" }
      ]
    },
    {
      icon: FileText,
      title: "Spec Sheet",
      description: "Technical specifications and compatibility details",
      items: [
        { field: "technicalSpecs", label: "Technical Specifications", enhanced: enhancedContent.technicalSpecs, raw: rawData.specs },
        { field: "compatibilityInfo", label: "Compatibility Information", enhanced: enhancedContent.compatibilityInfo, raw: rawData.compatibility },
        { field: "performanceMetrics", label: "Performance Metrics", enhanced: enhancedContent.performanceMetrics, raw: "good performance" }
      ]
    },
    {
      icon: Image,
      title: "Sales Sheet",
      description: "Sales-focused content and competitive positioning",
      items: [
        { field: "keySellingPoints", label: "Key Selling Points", enhanced: enhancedContent.keySellingPoints, raw: "good headphone with bluetooth" },
        { field: "competitiveAdvantages", label: "Competitive Advantages", enhanced: enhancedContent.competitiveAdvantages, raw: "better than other headphone" },
        { field: "valueProposition", label: "Value Proposition", enhanced: enhancedContent.valueProposition, raw: "good value headphone $79.99" }
      ]
    },
    {
      icon: Search,
      title: "SEO Content",
      description: "Search-optimized content for maximum visibility",
      items: [
        { field: "metaTitle", label: "Meta Title", enhanced: enhancedContent.metaTitle, raw: "bluetooth headphone" },
        { field: "metaDescription", label: "Meta Description", enhanced: enhancedContent.metaDescription, raw: "headphone with bluetooth for phone" },
        { field: "seoKeywords", label: "SEO Keywords", enhanced: enhancedContent.seoKeywords, raw: "headphone, bluetooth" }
      ]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Campaign-ready email content",
      items: [
        { field: "subjectLines", label: "Subject Lines", enhanced: enhancedContent.subjectLines, raw: "new headphone available" },
        { field: "productAnnouncements", label: "Product Announcements", enhanced: enhancedContent.productAnnouncements, raw: "we have new bluetooth headphone" },
        { field: "promotionalCopy", label: "Promotional Copy", enhanced: enhancedContent.promotionalCopy, raw: "buy headphone now $79.99" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 mb-6">
          <Button variant="outline" onClick={() => navigate('/review')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Assets
          </Button>
          <div className="flex-1">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-semibold">{asset.name}</h1>
              <Badge variant={asset.status === 'Enhanced' ? 'default' : 'secondary'}>
                {asset.status}
              </Badge>
            </div>
            <p className="text-muted-foreground">SKU: {asset.sku} | Quality Score: {asset.quality}%</p>
          </div>
          <Button>
            Approve Content
          </Button>
        </div>

        <div className="space-y-6">
          {contentSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg">{section.title}</h3>
                      <p className="text-sm text-muted-foreground font-normal">{section.description}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h4 className="font-medium text-sm mb-3 text-foreground">{item.label}</h4>
                      <div className="grid grid-cols-2 gap-6">
                        {/* Raw Data Column */}
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Raw Factory Data</span>
                          </div>
                          <div className="text-sm leading-relaxed bg-red-50 border border-red-200 p-3 rounded-md text-red-800">
                            {item.raw}
                          </div>
                        </div>
                        
                        {/* Enhanced Data Column */}
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">SalesChef Enhanced</span>
                          </div>
                          <EditableField 
                            field={item.field} 
                            label="" 
                            content={item.enhanced}
                          />
                        </div>
                      </div>
                      {itemIndex < section.items.length - 1 && <Separator className="mt-6" />}
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 flex justify-between">
          <Button variant="outline" onClick={() => navigate('/review')}>
            Back to Assets
          </Button>
          <div className="space-x-3">
            <Button variant="outline">
              Request Changes
            </Button>
            <Button>
              Approve & Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetReview;
