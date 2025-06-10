
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Images, Camera, Share2, Download } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

interface GeneratedVisualContentProps {
  keywords: string;
  keyBenefits: string;
  competitiveAdvantage: string;
}

const GeneratedVisualContent = ({ keywords, keyBenefits, competitiveAdvantage }: GeneratedVisualContentProps) => {
  // Mock generated images based on the asset data
  const productImages = [
    {
      id: 1,
      url: '/placeholder.svg?height=300&width=300',
      alt: 'Product hero shot',
      prompt: `Professional product photography of wireless headphones, ${keywords}, clean white background, studio lighting`
    },
    {
      id: 2,
      url: '/placeholder.svg?height=300&width=300',
      alt: 'Product detail view',
      prompt: `Close-up detail shot highlighting ${keyBenefits}, premium materials, professional lighting`
    },
    {
      id: 3,
      url: '/placeholder.svg?height=300&width=300',
      alt: 'Product in packaging',
      prompt: `Product packaging shot emphasizing ${competitiveAdvantage}, retail ready presentation`
    }
  ];

  const lifestyleImages = [
    {
      id: 1,
      url: '/placeholder.svg?height=400&width=600',
      alt: 'Person using headphones at work',
      prompt: `Professional using wireless headphones in modern office, ${keyBenefits}, natural lighting, lifestyle photography`
    },
    {
      id: 2,
      url: '/placeholder.svg?height=400&width=600',
      alt: 'Commuter with headphones',
      prompt: `Urban commuter wearing headphones, ${keywords}, city background, authentic lifestyle moment`
    },
    {
      id: 3,
      url: '/placeholder.svg?height=400&width=600',
      alt: 'Fitness enthusiast with headphones',
      prompt: `Athletic person using headphones during workout, emphasizing ${competitiveAdvantage}, dynamic action shot`
    }
  ];

  const socialMediaTiles = [
    {
      id: 1,
      format: 'Instagram Square',
      url: '/placeholder.svg?height=400&width=400',
      alt: 'Instagram product showcase',
      prompt: `Instagram-ready square format showcasing ${keywords}, modern design, brand colors, social media optimized`
    },
    {
      id: 2,
      format: 'Facebook Cover',
      url: '/placeholder.svg?height=200&width=800',
      alt: 'Facebook cover design',
      prompt: `Facebook cover design featuring product and ${keyBenefits}, wide format, brand consistent`
    },
    {
      id: 3,
      format: 'Story Template',
      url: '/placeholder.svg?height=600&width=400',
      alt: 'Social story template',
      prompt: `Vertical story template highlighting ${competitiveAdvantage}, mobile-first design, engaging layout`
    }
  ];

  return (
    <div className="flex flex-col">
      <Card className="flex-1 flex flex-col">
        <CardHeader className="flex-shrink-0">
          <CardTitle className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Images className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg">Generated Visual Content</h3>
              <p className="text-sm text-muted-foreground font-normal">AI-generated images based on keywords and selling points</p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="space-y-8 pr-4">
              
              {/* Product Images Section */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Camera className="w-4 h-4 text-primary" />
                  <h4 className="font-medium text-primary">Product Images</h4>
                  <Badge variant="outline" className="text-xs">3 Generated</Badge>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {productImages.map((image) => (
                    <div key={image.id} className="relative group">
                      <OptimizedImage
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-24 rounded-lg border"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <Button size="sm" variant="secondary" className="text-xs">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs text-muted-foreground line-clamp-2">{image.prompt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lifestyle Images Section */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Images className="w-4 h-4 text-primary" />
                  <h4 className="font-medium text-primary">Lifestyle Images</h4>
                  <Badge variant="outline" className="text-xs">3 Generated</Badge>
                </div>
                <div className="space-y-3">
                  {lifestyleImages.map((image) => (
                    <div key={image.id} className="relative group">
                      <OptimizedImage
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-32 rounded-lg border"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <Button size="sm" variant="secondary" className="text-xs">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs text-muted-foreground line-clamp-2">{image.prompt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media Tiles Section */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Share2 className="w-4 h-4 text-primary" />
                  <h4 className="font-medium text-primary">Social Media Tiles</h4>
                  <Badge variant="outline" className="text-xs">3 Generated</Badge>
                </div>
                <div className="space-y-3">
                  {socialMediaTiles.map((tile) => (
                    <div key={tile.id} className="relative group">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">{tile.format}</Badge>
                      </div>
                      <OptimizedImage
                        src={tile.url}
                        alt={tile.alt}
                        className="w-full h-24 rounded-lg border"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <Button size="sm" variant="secondary" className="text-xs">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs text-muted-foreground line-clamp-2">{tile.prompt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Generation Actions */}
              <div className="pt-4 border-t">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Regenerate All
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Download All
                  </Button>
                </div>
              </div>

            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeneratedVisualContent;
