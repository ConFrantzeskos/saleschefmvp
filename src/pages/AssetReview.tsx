
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Globe, FileText, Image, Mail, Printer, GraduationCap, HelpCircle, Search } from 'lucide-react';

const AssetReview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Mock data for the asset - in real app this would come from API
  const asset = {
    id: 1,
    sku: "PRD-001",
    name: "Wireless Bluetooth Headphones",
    brand: "TechSound",
    category: "Electronics > Audio > Headphones",
    status: "Enhanced",
    quality: 95
  };

  const contentSections = [
    {
      icon: Globe,
      title: "PDP Content",
      description: "Comprehensive product detail page content",
      items: [
        {
          label: "Hero Section",
          content: "Experience Premium Audio Freedom - TechSound Wireless Bluetooth Headphones deliver crystal-clear sound with 30-hour battery life, advanced noise cancellation, and all-day comfort for professionals on the go."
        },
        {
          label: "Feature Highlights",
          content: "• 30-hour battery life for all-day listening\n• Advanced Bluetooth 5.0 connectivity\n• Active noise cancellation technology\n• Premium comfort padding\n• Quick charge: 15 minutes = 3 hours playback"
        },
        {
          label: "Lifestyle Content", 
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
          label: "Technical Specifications",
          content: "• Driver Size: 40mm dynamic drivers\n• Frequency Response: 20Hz - 20kHz\n• Bluetooth Version: 5.0\n• Battery Life: 30 hours\n• Charging Time: 2 hours\n• Weight: 250g"
        },
        {
          label: "Compatibility Information",
          content: "Compatible with all Bluetooth-enabled devices including:\n• iOS devices (iPhone, iPad)\n• Android smartphones and tablets\n• Windows and Mac computers\n• Gaming consoles (PS5, Xbox)\n• Smart TVs and streaming devices"
        },
        {
          label: "Performance Metrics",
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
          label: "Key Selling Points",
          content: "✓ Industry-leading 30-hour battery life\n✓ Professional-grade noise cancellation\n✓ Premium comfort for all-day wear\n✓ Universal compatibility\n✓ Rapid charging technology"
        },
        {
          label: "Competitive Advantages",
          content: "• 25% longer battery life than leading competitors\n• Superior noise cancellation vs Sony WH-1000XM4\n• More comfortable than Bose QuietComfort 45\n• Better value proposition than Apple AirPods Max\n• Faster charging than market average"
        },
        {
          label: "Value Proposition",
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
          label: "Meta Title",
          content: "TechSound Wireless Bluetooth Headphones - 30Hr Battery Life | Noise Cancelling"
        },
        {
          label: "Meta Description",
          content: "Experience premium audio with TechSound wireless headphones. 30-hour battery, active noise cancellation, and crystal-clear sound quality. Free shipping on orders over $50."
        },
        {
          label: "SEO Keywords",
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
          label: "Subject Lines",
          content: "• Your audio upgrade is here - 30% off TechSound headphones\n• Finally, headphones that last as long as your workday\n• Premium sound without the premium price tag\n• Last chance: TechSound headphones at launch price"
        },
        {
          label: "Product Announcements",
          content: "Introducing TechSound Wireless Headphones - the perfect blend of premium audio quality and all-day comfort. With 30-hour battery life and professional-grade noise cancellation, these headphones are designed for the modern professional who demands excellence."
        },
        {
          label: "Promotional Copy",
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
          label: "Brochure Content",
          content: "TECHSOUND WIRELESS HEADPHONES\n\nPremium Audio. All-Day Comfort.\n\nKey Features:\n→ 30-hour battery life\n→ Active noise cancellation\n→ Bluetooth 5.0 connectivity\n→ Quick charge technology\n→ Foldable design\n\nPerfect for professionals, students, and audio enthusiasts who demand quality."
        },
        {
          label: "Data Sheet",
          content: "TECHNICAL SPECIFICATIONS\nModel: TechSound Pro\nDriver: 40mm dynamic\nBattery: 30 hours playback\nCharging: USB-C, 2 hours full charge\nWeight: 250g\nConnectivity: Bluetooth 5.0\nRange: 10 meters\nWarranty: 2 years"
        },
        {
          label: "Catalog Entry",
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
          label: "Feature Guide",
          content: "SALES FEATURE GUIDE\n\n1. Battery Life (30 hours)\n   - Positioning: 'All-day listening without interruption'\n   - Proof point: Longest in price category\n\n2. Noise Cancellation\n   - Positioning: 'Professional-grade focus'\n   - Proof point: 25dB reduction\n\n3. Comfort\n   - Positioning: 'Designed for extended wear'\n   - Proof point: Memory foam padding"
        },
        {
          label: "Selling Points",
          content: "PRIMARY BENEFITS:\n• Productivity: Uninterrupted focus with noise cancellation\n• Convenience: 30-hour battery eliminates charging anxiety\n• Quality: Premium audio at accessible price\n• Versatility: Perfect for work, travel, and leisure\n• Reliability: Bluetooth 5.0 ensures stable connection"
        },
        {
          label: "Objection Handlers",
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
          label: "Product FAQs",
          content: "Q: How long does the battery actually last?\nA: Up to 30 hours of continuous playback at moderate volume with noise cancellation off. With noise cancellation on, expect 24-26 hours.\n\nQ: Can I use them while exercising?\nA: While not specifically designed for sports, they're suitable for light exercise. They're not waterproof but can handle light moisture.\n\nQ: Do they work for phone calls?\nA: Yes, they feature a built-in microphone optimized for clear voice calls and video conferences."
        },
        {
          label: "Technical Support",
          content: "TROUBLESHOOTING:\n\nConnection Issues:\n1. Ensure Bluetooth is enabled on your device\n2. Clear Bluetooth cache (Android) or forget/re-pair (iOS)\n3. Reset headphones by holding power button for 10 seconds\n\nAudio Quality Issues:\n1. Check codec compatibility (AAC for iOS, aptX for Android)\n2. Ensure headphones are fully charged\n3. Move closer to source device (within 10 meters)"
        },
        {
          label: "Usage Guidance",
          content: "GETTING STARTED:\n\n1. First Use:\n   - Charge for 2 hours before first use\n   - Download TechSound app for firmware updates\n\n2. Pairing:\n   - Hold power button for 3 seconds until blue light flashes\n   - Select 'TechSound Pro' from device Bluetooth menu\n\n3. Controls:\n   - Power: Long press power button\n   - Volume: Use device controls or side buttons\n   - Noise cancellation: Double-tap left ear cup"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
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
                <CardContent className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h4 className="font-medium text-sm mb-2 text-primary">{item.label}</h4>
                      <div className="text-sm leading-relaxed whitespace-pre-line bg-muted/30 p-3 rounded-md">
                        {item.content}
                      </div>
                      {itemIndex < section.items.length - 1 && <Separator className="mt-4" />}
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
