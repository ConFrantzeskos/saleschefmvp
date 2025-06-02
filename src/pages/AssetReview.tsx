
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
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<{ [key: string]: string }>({});
  
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

  // Raw factory data - poor quality with issues
  const rawData = {
    name: "bluetooth headphone",
    description: "headphone for music",
    features: "bluetooth, battery",
    category: "electronics",
    price: "79.99",
    weight: "250g",
    color: "black",
    brand: "techsound",
    model: "ts-001"
  };

  const contentSections = [
    {
      icon: Globe,
      title: "PDP Content",
      description: "Comprehensive product detail page content",
      items: [
        {
          key: "hero_section",
          label: "Hero Section",
          rawContent: "bluetooth headphone good sound",
          content: "Experience Premium Audio Freedom - TechSound Wireless Bluetooth Headphones deliver crystal-clear sound with 30-hour battery life, advanced noise cancellation, and all-day comfort for professionals on the go."
        },
        {
          key: "feature_highlights",
          label: "Feature Highlights",
          rawContent: "has bluetooth\nhas battery\nfor music",
          content: "• 30-hour battery life for all-day listening\n• Advanced Bluetooth 5.0 connectivity\n• Active noise cancellation technology\n• Premium comfort padding\n• Quick charge: 15 minutes = 3 hours playback"
        },
        {
          key: "lifestyle_content",
          label: "Lifestyle Content",
          rawContent: "good for work and travel",
          content: "Whether you're commuting to work, focusing in a busy office, or traveling the world, TechSound headphones adapt to your lifestyle. The foldable design fits perfectly in your carry-on, while the extended battery ensures your music never stops."
        }
      ]
    },
    {
      icon: FileText,
      title: "Spec Sheet",
      description: "Technical specifications and compatibility details",
      items: [
        {
          key: "tech_specs",
          label: "Technical Specifications",
          rawContent: "driver 40mm\nbluetooth 5\nbattery 30hr\nweight 250g",
          content: "• Driver Size: 40mm dynamic drivers\n• Frequency Response: 20Hz - 20kHz\n• Bluetooth Version: 5.0\n• Battery Life: 30 hours\n• Charging Time: 2 hours\n• Weight: 250g"
        },
        {
          key: "compatibility",
          label: "Compatibility Information",
          rawContent: "works with phone and computer",
          content: "Compatible with all Bluetooth-enabled devices including:\n• iOS devices (iPhone, iPad)\n• Android smartphones and tablets\n• Windows and Mac computers\n• Gaming consoles (PS5, Xbox)\n• Smart TVs and streaming devices"
        },
        {
          key: "performance",
          label: "Performance Metrics",
          rawContent: "range 10m\ncharging usb-c",
          content: "• Signal Range: Up to 33 feet (10 meters)\n• Latency: <40ms for video sync\n• Charging Port: USB-C\n• Codec Support: SBC, AAC, aptX\n• Noise Reduction: Up to 25dB"
        }
      ]
    },
    {
      icon: Image,
      title: "Sales Sheet",
      description: "Sales-focused content and competitive positioning",
      items: [
        {
          key: "selling_points",
          label: "Key Selling Points",
          rawContent: "long battery\ngood sound\ncomfortable",
          content: "✓ Industry-leading 30-hour battery life\n✓ Professional-grade noise cancellation\n✓ Premium comfort for all-day wear\n✓ Universal compatibility\n✓ Rapid charging technology"
        },
        {
          key: "competitive_advantages",
          label: "Competitive Advantages",
          rawContent: "better than other headphones",
          content: "• 25% longer battery life than leading competitors\n• Superior noise cancellation vs Sony WH-1000XM4\n• More comfortable than Bose QuietComfort 45\n• Better value proposition than Apple AirPods Max\n• Faster charging than market average"
        },
        {
          key: "value_proposition",
          label: "Value Proposition",
          rawContent: "good price for good headphones",
          content: "Premium audio experience at mid-range pricing. TechSound delivers flagship features typically found in $300+ headphones at an accessible $79.99 price point, making professional-grade audio accessible to everyone."
        }
      ]
    },
    {
      icon: Search,
      title: "SEO Content",
      description: "Search-optimized content for maximum visibility",
      items: [
        {
          key: "meta_title",
          label: "Meta Title",
          rawContent: "bluetooth headphones",
          content: "TechSound Wireless Bluetooth Headphones - 30Hr Battery Life | Noise Cancelling"
        },
        {
          key: "meta_description",
          label: "Meta Description",
          rawContent: "wireless headphones with bluetooth",
          content: "Experience premium audio with TechSound wireless headphones. 30-hour battery, active noise cancellation, and crystal-clear sound quality. Free shipping on orders over $50."
        },
        {
          key: "seo_keywords",
          label: "SEO Keywords",
          rawContent: "headphones, bluetooth, wireless",
          content: "Primary: wireless bluetooth headphones, noise cancelling headphones\nSecondary: long battery life headphones, comfortable headphones, professional audio\nLong-tail: best wireless headphones for work, bluetooth headphones 30 hour battery"
        }
      ]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Campaign-ready email content",
      items: [
        {
          key: "subject_lines",
          label: "Subject Lines",
          rawContent: "new headphones for sale",
          content: "• Your audio upgrade is here - 30% off TechSound headphones\n• Finally, headphones that last as long as your workday\n• Premium sound without the premium price tag\n• Last chance: TechSound headphones at launch price"
        },
        {
          key: "product_announcements",
          label: "Product Announcements",
          rawContent: "we have new headphones",
          content: "Introducing TechSound Wireless Headphones - the perfect blend of premium audio quality and all-day comfort. With 30-hour battery life and professional-grade noise cancellation, these headphones are designed for the modern professional who demands excellence."
        },
        {
          key: "promotional_copy",
          label: "Promotional Copy",
          rawContent: "buy headphones now cheap price",
          content: "Limited Time: Get your TechSound headphones for just $79.99 (RRP $99.99). Free shipping included. 30-day money-back guarantee. Don't let poor audio quality hold back your productivity - upgrade today."
        }
      ]
    },
    {
      icon: Printer,
      title: "Print Collateral",
      description: "Print-ready marketing materials",
      items: [
        {
          key: "brochure_content",
          label: "Brochure Content",
          rawContent: "HEADPHONES\nwireless\nbluetooth\ngood battery",
          content: "TECHSOUND WIRELESS HEADPHONES\n\nPremium Audio. All-Day Comfort.\n\nKey Features:\n→ 30-hour battery life\n→ Active noise cancellation\n→ Bluetooth 5.0 connectivity\n→ Quick charge technology\n→ Foldable design\n\nPerfect for professionals, students, and audio enthusiasts who demand quality."
        },
        {
          key: "data_sheet",
          label: "Data Sheet",
          rawContent: "model ts-001\n40mm driver\n30hr battery\n250g weight",
          content: "TECHNICAL SPECIFICATIONS\nModel: TechSound Pro\nDriver: 40mm dynamic\nBattery: 30 hours playback\nCharging: USB-C, 2 hours full charge\nWeight: 250g\nConnectivity: Bluetooth 5.0\nRange: 10 meters\nWarranty: 2 years"
        },
        {
          key: "catalog_entry",
          label: "Catalog Entry",
          rawContent: "headphones PRD-001 $79.99",
          content: "TechSound Wireless Bluetooth Headphones - SKU: PRD-001\nPremium wireless headphones featuring 30-hour battery life, active noise cancellation, and professional-grade audio quality. Ideal for business, travel, and everyday use.\nPrice: $79.99 | Category: Audio > Headphones"
        }
      ]
    },
    {
      icon: GraduationCap,
      title: "Internal Training",
      description: "Sales team enablement materials",
      items: [
        {
          key: "feature_guide",
          label: "Feature Guide",
          rawContent: "headphones have long battery and noise cancel",
          content: "SALES FEATURE GUIDE\n\n1. Battery Life (30 hours)\n   - Positioning: 'All-day listening without interruption'\n   - Proof point: Longest in price category\n\n2. Noise Cancellation\n   - Positioning: 'Professional-grade focus'\n   - Proof point: 25dB reduction\n\n3. Comfort\n   - Positioning: 'Designed for extended wear'\n   - Proof point: Memory foam padding"
        },
        {
          key: "selling_points_guide",
          label: "Selling Points",
          rawContent: "good for work\nlong battery\ngood sound",
          content: "PRIMARY BENEFITS:\n• Productivity: Uninterrupted focus with noise cancellation\n• Convenience: 30-hour battery eliminates charging anxiety\n• Quality: Premium audio at accessible price\n• Versatility: Perfect for work, travel, and leisure\n• Reliability: Bluetooth 5.0 ensures stable connection"
        },
        {
          key: "objection_handlers",
          label: "Objection Handlers",
          rawContent: "if customer say too expensive tell them good value",
          content: "COMMON OBJECTIONS:\n\nQ: 'Too expensive for Bluetooth headphones'\nA: 'At $79.99, you're getting 30-hour battery and noise cancellation - features typically found in $200+ headphones.'\n\nQ: 'Will they work with my iPhone?'\nA: 'Yes, they're compatible with all Bluetooth devices including iPhone, Android, laptops, and tablets.'"
        }
      ]
    },
    {
      icon: HelpCircle,
      title: "FAQ Content",
      description: "Customer support and frequently asked questions",
      items: [
        {
          key: "product_faqs",
          label: "Product FAQs",
          rawContent: "Q: how long battery?\nA: 30 hours\nQ: work with phone?\nA: yes",
          content: "Q: How long does the battery actually last?\nA: Up to 30 hours of continuous playback at moderate volume with noise cancellation off. With noise cancellation on, expect 24-26 hours.\n\nQ: Can I use them while exercising?\nA: While not specifically designed for sports, they're suitable for light exercise. They're not waterproof but can handle light moisture.\n\nQ: Do they work for phone calls?\nA: Yes, they feature a built-in microphone optimized for clear voice calls and video conferences."
        },
        {
          key: "technical_support",
          label: "Technical Support",
          rawContent: "if not work try turn off and on",
          content: "TROUBLESHOOTING:\n\nConnection Issues:\n1. Ensure Bluetooth is enabled on your device\n2. Clear Bluetooth cache (Android) or forget/re-pair (iOS)\n3. Reset headphones by holding power button for 10 seconds\n\nAudio Quality Issues:\n1. Check codec compatibility (AAC for iOS, aptX for Android)\n2. Ensure headphones are fully charged\n3. Move closer to source device (within 10 meters)"
        },
        {
          key: "usage_guidance",
          label: "Usage Guidance",
          rawContent: "charge first then pair with phone",
          content: "GETTING STARTED:\n\n1. First Use:\n   - Charge for 2 hours before first use\n   - Download TechSound app for firmware updates\n\n2. Pairing:\n   - Hold power button for 3 seconds until blue light flashes\n   - Select 'TechSound Pro' from device Bluetooth menu\n\n3. Controls:\n   - Power: Long press power button\n   - Volume: Use device controls or side buttons\n   - Noise cancellation: Double-tap left ear cup"
        }
      ]
    }
  ];

  const handleEdit = (key: string, currentValue: string) => {
    setEditingField(key);
    setEditValues({ ...editValues, [key]: currentValue });
  };

  const handleSave = (key: string) => {
    // In a real app, this would save to backend
    console.log(`Saving ${key}:`, editValues[key]);
    setEditingField(null);
  };

  const handleCancel = () => {
    setEditingField(null);
    setEditValues({});
  };

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
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    {/* Raw Data Column */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-red-600 mb-3">Raw Factory Data</h4>
                      {section.items.map((item, itemIndex) => (
                        <div key={`raw-${itemIndex}`}>
                          <h5 className="font-medium text-sm mb-2 text-muted-foreground">{item.label}</h5>
                          <div className="text-sm leading-relaxed whitespace-pre-line bg-red-50 border border-red-200 p-3 rounded-md text-red-800">
                            {item.rawContent}
                          </div>
                          {itemIndex < section.items.length - 1 && <Separator className="mt-4" />}
                        </div>
                      ))}
                    </div>

                    {/* Enhanced Data Column */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-green-600 mb-3">SalesChef Enhanced</h4>
                      {section.items.map((item, itemIndex) => (
                        <div key={`enhanced-${itemIndex}`}>
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-sm text-primary">{item.label}</h5>
                            {editingField === item.key ? (
                              <div className="flex space-x-1">
                                <Button size="sm" variant="outline" onClick={() => handleSave(item.key)}>
                                  <Save className="w-3 h-3" />
                                </Button>
                                <Button size="sm" variant="outline" onClick={handleCancel}>
                                  <X className="w-3 h-3" />
                                </Button>
                              </div>
                            ) : (
                              <Button 
                                size="sm" 
                                variant="outline" 
                                onClick={() => handleEdit(item.key, item.content)}
                              >
                                <Edit className="w-3 h-3" />
                              </Button>
                            )}
                          </div>
                          {editingField === item.key ? (
                            <Textarea
                              value={editValues[item.key] || item.content}
                              onChange={(e) => setEditValues({ ...editValues, [item.key]: e.target.value })}
                              className="min-h-[100px] text-sm"
                            />
                          ) : (
                            <div className="text-sm leading-relaxed whitespace-pre-line bg-green-50 border border-green-200 p-3 rounded-md text-green-800">
                              {item.content}
                            </div>
                          )}
                          {itemIndex < section.items.length - 1 && <Separator className="mt-4" />}
                        </div>
                      ))}
                    </div>
                  </div>
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
