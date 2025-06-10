
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw, Instagram, Facebook, Twitter } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import { Asset } from '@/types/asset';

interface GeneratedVisualContentProps {
  asset: Asset;
}

const GeneratedVisualContent = ({ asset }: GeneratedVisualContentProps) => {
  // Mock generated content based on enriched data
  const productImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=center",
      title: "Hero Product Shot",
      description: "Clean white background with dramatic lighting"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400&h=400&fit=crop&crop=center",
      title: "Folded View",
      description: "Showcasing compact travel design"
    }
  ];

  const lifestyleImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop&crop=center",
      title: "Business Travel",
      description: "Professional using headphones during flight"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop&crop=center",
      title: "Home Office",
      description: "Remote work setup with premium audio"
    }
  ];

  const socialTiles = [
    {
      id: 1,
      platform: "Instagram",
      icon: <Instagram className="w-4 h-4" />,
      title: "24-Hour Battery Life",
      description: "Never worry about charging again! ✈️ #TechSound",
      url: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=center"
    },
    {
      id: 2,
      platform: "Facebook",
      icon: <Facebook className="w-4 h-4" />,
      title: "Travel-Ready Design",
      description: "Foldable headphones perfect for your next adventure",
      url: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=400&h=400&fit=crop&crop=center"
    },
    {
      id: 3,
      platform: "Twitter",
      icon: <Twitter className="w-4 h-4" />,
      title: "Quick Charge",
      description: "15 minutes = 3 hours of playtime ⚡ #QuickCharge",
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <div className="h-full overflow-y-auto space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Generated Visual Content</h3>
        <Button size="sm" variant="outline">
          <RefreshCw className="w-4 h-4 mr-2" />
          Regenerate All
        </Button>
      </div>

      {/* Product Images */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm">Product Images</CardTitle>
            <Badge variant="secondary" className="text-xs">2 Generated</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {productImages.map((image) => (
            <div key={image.id} className="space-y-2">
              <OptimizedImage
                src={image.url}
                alt={image.title}
                className="w-full h-32 rounded-lg border"
              />
              <div className="space-y-1">
                <p className="text-sm font-medium">{image.title}</p>
                <p className="text-xs text-muted-foreground">{image.description}</p>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                <Download className="w-3 h-3 mr-2" />
                Download
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Lifestyle Images */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm">Lifestyle Images</CardTitle>
            <Badge variant="secondary" className="text-xs">2 Generated</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {lifestyleImages.map((image) => (
            <div key={image.id} className="space-y-2">
              <OptimizedImage
                src={image.url}
                alt={image.title}
                className="w-full h-24 rounded-lg border"
              />
              <div className="space-y-1">
                <p className="text-sm font-medium">{image.title}</p>
                <p className="text-xs text-muted-foreground">{image.description}</p>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                <Download className="w-3 h-3 mr-2" />
                Download
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Social Media Tiles */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm">Social Media Tiles</CardTitle>
            <Badge variant="secondary" className="text-xs">3 Generated</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {socialTiles.map((tile) => (
            <div key={tile.id} className="space-y-2">
              <div className="relative">
                <OptimizedImage
                  src={tile.url}
                  alt={tile.title}
                  className="w-full h-24 rounded-lg border"
                />
                <div className="absolute top-2 left-2 flex items-center space-x-1 bg-background/90 px-2 py-1 rounded text-xs">
                  {tile.icon}
                  <span>{tile.platform}</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">{tile.title}</p>
                <p className="text-xs text-muted-foreground">{tile.description}</p>
              </div>
              <Button size="sm" variant="outline" className="w-full">
                <Download className="w-3 h-3 mr-2" />
                Download
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Generation Stats */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm">Generation Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-xs text-muted-foreground">
          <div className="flex justify-between">
            <span>Total Assets Generated:</span>
            <span>7</span>
          </div>
          <div className="flex justify-between">
            <span>Processing Time:</span>
            <span>2.3 seconds</span>
          </div>
          <div className="flex justify-between">
            <span>Quality Score:</span>
            <span>96%</span>
          </div>
          <div className="flex justify-between">
            <span>Brand Consistency:</span>
            <span>Excellent</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeneratedVisualContent;
