import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Images, Camera, Share2, Download, Loader2, RefreshCw, Edit2, Check, X, History } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface GeneratedVisualContentProps {
  keywords: string;
  keyBenefits: string;
  competitiveAdvantage: string;
}

interface ImageData {
  id: number;
  url: string;
  alt: string;
  prompt: string;
  loading?: boolean;
  format?: string;
}

const GeneratedVisualContent = ({ keywords, keyBenefits, competitiveAdvantage }: GeneratedVisualContentProps) => {
  const { toast } = useToast();
  const [productImages, setProductImages] = useState<ImageData[]>([
    {
      id: 1,
      url: '',
      alt: 'Product hero shot',
      prompt: `Professional product photography of wireless headphones, ${keywords}, clean white background, studio lighting`,
      loading: false
    },
    {
      id: 2,
      url: '',
      alt: 'Product detail view',
      prompt: `Close-up detail shot highlighting ${keyBenefits}, premium materials, professional lighting`,
      loading: false
    },
    {
      id: 3,
      url: '',
      alt: 'Product in packaging',
      prompt: `Product packaging shot emphasizing ${competitiveAdvantage}, retail ready presentation`,
      loading: false
    }
  ]);

  const [lifestyleImages, setLifestyleImages] = useState<ImageData[]>([
    {
      id: 1,
      url: '',
      alt: 'Person using headphones at work',
      prompt: `Professional using wireless headphones in modern office, ${keyBenefits}, natural lighting, lifestyle photography`,
      loading: false
    },
    {
      id: 2,
      url: '',
      alt: 'Commuter with headphones',
      prompt: `Urban commuter wearing headphones, ${keywords}, city background, authentic lifestyle moment`,
      loading: false
    },
    {
      id: 3,
      url: '',
      alt: 'Fitness enthusiast with headphones',
      prompt: `Athletic person using headphones during workout, emphasizing ${competitiveAdvantage}, dynamic action shot`,
      loading: false
    }
  ]);

  const [socialMediaTiles, setSocialMediaTiles] = useState<ImageData[]>([
    {
      id: 1,
      format: 'Instagram Square',
      url: '',
      alt: 'Instagram product showcase',
      prompt: `Instagram-ready square format showcasing ${keywords}, modern design, brand colors, social media optimized`,
      loading: false
    },
    {
      id: 2,
      format: 'Facebook Cover',
      url: '',
      alt: 'Facebook cover design',
      prompt: `Facebook cover design featuring product and ${keyBenefits}, wide format, brand consistent`,
      loading: false
    },
    {
      id: 3,
      format: 'Story Template',
      url: '',
      alt: 'Social story template',
      prompt: `Vertical story template highlighting ${competitiveAdvantage}, mobile-first design, engaging layout`,
      loading: false
    }
  ]);

  const [generatingAll, setGeneratingAll] = useState(false);
  const [editingPrompt, setEditingPrompt] = useState<string | null>(null);
  const [editedPromptValue, setEditedPromptValue] = useState('');
  const [promptHistory, setPromptHistory] = useState<string[]>([]);

  useEffect(() => {
    // Load prompt history from localStorage
    const savedHistory = localStorage.getItem('image-prompt-history');
    if (savedHistory) {
      try {
        setPromptHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Failed to parse prompt history:', error);
      }
    }
  }, []);

  const addToPromptHistory = (prompt: string) => {
    if (!prompt.trim()) return;
    
    setPromptHistory(prev => {
      // Remove duplicates and add to beginning
      const filtered = prev.filter(p => p !== prompt);
      const updated = [prompt, ...filtered].slice(0, 10); // Keep only last 10
      
      // Save to localStorage
      localStorage.setItem('image-prompt-history', JSON.stringify(updated));
      
      return updated;
    });
  };

  const generateImage = async (prompt: string): Promise<string> => {
    const { data, error } = await supabase.functions.invoke('generate-image', {
      body: { prompt }
    });

    if (error) {
      console.error('Error generating image:', error);
      throw new Error(error.message || 'Failed to generate image');
    }

    if (!data?.imageUrl) {
      throw new Error('No image URL received');
    }

    return data.imageUrl;
  };

  const regenerateImage = async (
    category: 'product' | 'lifestyle' | 'social',
    imageId: number
  ) => {
    try {
      const setState = category === 'product' 
        ? setProductImages 
        : category === 'lifestyle' 
        ? setLifestyleImages 
        : setSocialMediaTiles;

      setState(prev => prev.map(img => 
        img.id === imageId ? { ...img, loading: true } : img
      ));

      const currentImages = category === 'product' 
        ? productImages 
        : category === 'lifestyle' 
        ? lifestyleImages 
        : socialMediaTiles;

      const image = currentImages.find(img => img.id === imageId);
      if (!image) return;

      const imageUrl = await generateImage(image.prompt);

      setState(prev => prev.map(img => 
        img.id === imageId ? { ...img, url: imageUrl, loading: false } : img
      ));

      toast({
        title: 'Image generated',
        description: 'Your image has been generated successfully',
      });
    } catch (error) {
      console.error('Error regenerating image:', error);
      
      const setState = category === 'product' 
        ? setProductImages 
        : category === 'lifestyle' 
        ? setLifestyleImages 
        : setSocialMediaTiles;

      setState(prev => prev.map(img => 
        img.id === imageId ? { ...img, loading: false } : img
      ));

      toast({
        title: 'Generation failed',
        description: error instanceof Error ? error.message : 'Failed to generate image',
        variant: 'destructive',
      });
    }
  };

  const generateAllImages = async () => {
    setGeneratingAll(true);
    try {
      const allImages = [...productImages, ...lifestyleImages, ...socialMediaTiles];
      let completed = 0;

      for (const image of allImages) {
        const category = productImages.includes(image) 
          ? 'product' 
          : lifestyleImages.includes(image) 
          ? 'lifestyle' 
          : 'social';

        try {
          await regenerateImage(category, image.id);
          completed++;
        } catch (error) {
          console.error(`Failed to generate image ${image.id}:`, error);
        }
      }

      toast({
        title: 'Generation complete',
        description: `Generated ${completed} of ${allImages.length} images`,
      });
    } finally {
      setGeneratingAll(false);
    }
  };

  const downloadImage = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const startEditingPrompt = (category: string, imageId: number, currentPrompt: string) => {
    setEditingPrompt(`${category}-${imageId}`);
    setEditedPromptValue(currentPrompt);
  };

  const savePromptEdit = (category: 'product' | 'lifestyle' | 'social', imageId: number) => {
    const setState = category === 'product' 
      ? setProductImages 
      : category === 'lifestyle' 
      ? setLifestyleImages 
      : setSocialMediaTiles;

    setState(prev => prev.map(img => 
      img.id === imageId ? { ...img, prompt: editedPromptValue } : img
    ));

    // Add to history
    addToPromptHistory(editedPromptValue);

    setEditingPrompt(null);
    setEditedPromptValue('');
    
    toast({
      title: 'Prompt updated',
      description: 'Your custom prompt has been saved',
    });
  };

  const cancelPromptEdit = () => {
    setEditingPrompt(null);
    setEditedPromptValue('');
  };

  const renderImageCard = (
    image: ImageData,
    category: 'product' | 'lifestyle' | 'social'
  ) => (
    <div key={image.id} className="group relative bg-muted/50 rounded-lg overflow-hidden border">
      <div className="aspect-square relative bg-muted flex items-center justify-center">
        {image.loading ? (
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-sm text-muted-foreground">Generating...</p>
          </div>
        ) : image.url ? (
          <OptimizedImage
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <Images className="w-8 h-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Click regenerate to create</p>
          </div>
        )}
      </div>
      
      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between">
          <p className="font-medium text-sm">{image.alt}</p>
          {image.format && (
            <Badge variant="secondary" className="text-xs">{image.format}</Badge>
          )}
        </div>
        
        {editingPrompt === `${category}-${image.id}` ? (
          <div className="space-y-2">
            <div className="relative">
              <Textarea
                value={editedPromptValue}
                onChange={(e) => setEditedPromptValue(e.target.value)}
                className="text-xs min-h-[80px] resize-none pr-10"
                placeholder="Enter your custom prompt..."
              />
              {promptHistory.length > 0 && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 h-6 w-6 p-0"
                      title="View prompt history"
                    >
                      <History className="w-3 h-3" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-2" align="end">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Recent Prompts</p>
                      <ScrollArea className="max-h-60">
                        <div className="space-y-1">
                          {promptHistory.map((historyPrompt, idx) => (
                            <Button
                              key={idx}
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start text-left h-auto py-2 px-2"
                              onClick={() => setEditedPromptValue(historyPrompt)}
                            >
                              <p className="text-xs line-clamp-2 break-words">{historyPrompt}</p>
                            </Button>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="default"
                onClick={() => savePromptEdit(category, image.id)}
                className="flex-1"
              >
                <Check className="w-3 h-3 mr-1" />
                Save
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={cancelPromptEdit}
                className="flex-1"
              >
                <X className="w-3 h-3 mr-1" />
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="group/prompt relative">
            <p className="text-xs text-muted-foreground line-clamp-2 pr-8">{image.prompt}</p>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => startEditingPrompt(category, image.id, image.prompt)}
              className="absolute top-0 right-0 h-6 w-6 p-0 opacity-0 group-hover/prompt:opacity-100 transition-opacity"
              disabled={image.loading || generatingAll}
            >
              <Edit2 className="w-3 h-3" />
            </Button>
          </div>
        )}
        
        {editingPrompt !== `${category}-${image.id}` && (
          <div className="flex gap-2 pt-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => regenerateImage(category, image.id)}
              disabled={image.loading || generatingAll}
              className="flex-1"
            >
              <RefreshCw className="w-3 h-3 mr-1" />
              Regenerate
            </Button>
            {image.url && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => downloadImage(image.url, `${image.alt}.png`)}
                disabled={image.loading || generatingAll}
              >
                <Download className="w-3 h-3" />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col">
      <Card className="flex-1 flex flex-col">
        <CardHeader className="flex-shrink-0">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Images className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg">Generated Visual Content</h3>
                <p className="text-sm text-muted-foreground font-normal">AI-generated images based on keywords and selling points</p>
              </div>
            </CardTitle>
            <Button 
              onClick={generateAllImages} 
              disabled={generatingAll}
              className="ml-4"
            >
              {generatingAll ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Generate All
                </>
              )}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="space-y-8 pr-4">
              
              {/* Product Images Section */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Camera className="w-4 h-4 text-primary" />
                  <h4 className="font-medium text-primary">Product Images</h4>
                  <Badge variant="secondary">{productImages.length} Generated</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {productImages.map(image => renderImageCard(image, 'product'))}
                </div>
              </div>

              {/* Lifestyle Images Section */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Images className="w-4 h-4 text-primary" />
                  <h4 className="font-medium text-primary">Lifestyle Images</h4>
                  <Badge variant="secondary">{lifestyleImages.length} Generated</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {lifestyleImages.map(image => renderImageCard(image, 'lifestyle'))}
                </div>
              </div>

              {/* Social Media Tiles Section */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Share2 className="w-4 h-4 text-primary" />
                  <h4 className="font-medium text-primary">Social Media Tiles</h4>
                  <Badge variant="secondary">{socialMediaTiles.length} Generated</Badge>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {socialMediaTiles.map(image => renderImageCard(image, 'social'))}
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
