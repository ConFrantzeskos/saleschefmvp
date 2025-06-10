import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import TemplateUpload from '@/components/TemplateUpload';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Sparkles, FileText, Image, Video, Globe, Mail, Printer, GraduationCap, HelpCircle, Instagram, MessageSquare, Camera, Edit3, Users, ShoppingBag, Megaphone, TrendingUp, AudioWaveform, Code, Monitor, Cpu } from 'lucide-react';

const ContentGeneration = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<File | null>(null);
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: true, current: false },
    { id: 'enrich', label: 'Enrich', completed: true, current: false },
    { id: 'generate', label: 'Generate', completed: false, current: true },
    { id: 'review', label: 'Review', completed: false, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

  const generationCategories = [
    {
      title: "Text Content",
      tasks: [
        {
          icon: Globe,
          title: "PDP",
          description: "Creating comprehensive product detail pages",
          items: ["Hero sections", "Feature highlights", "Lifestyle content"]
        },
        {
          icon: FileText,
          title: "Spec Sheet",
          description: "Technical specifications and details",
          items: ["Technical specs", "Compatibility info", "Performance metrics"]
        },
        {
          icon: Image,
          title: "Sales Sheet",
          description: "Sales-focused one-pagers",
          items: ["Key selling points", "Competitive advantages", "Pricing strategy"]
        },
        {
          icon: Edit3,
          title: "Blog Content",
          description: "SEO-optimized blog posts and articles",
          items: ["Product features", "How-to guides", "Industry insights", "Buying guides"]
        },
        {
          icon: FileText,
          title: "Press Releases",
          description: "Professional PR and media content",
          items: ["Product launches", "Company news", "Partnership announcements", "Awards"]
        },
        {
          icon: Edit3,
          title: "Newsletter",
          description: "Email newsletter content",
          items: ["Product spotlights", "Seasonal campaigns", "Customer stories", "Exclusive offers"]
        },
        {
          icon: Globe,
          title: "SEO Content",
          description: "Search-optimized content",
          items: ["Meta descriptions", "Title tags", "Schema markup"]
        },
        {
          icon: Mail,
          title: "Email Marketing",
          description: "Campaign-ready email content",
          items: ["Subject lines", "Product announcements", "Promotional copy"]
        },
        {
          icon: HelpCircle,
          title: "FAQ",
          description: "Customer support content",
          items: ["Common questions", "Technical support", "Usage guidance"]
        }
      ]
    },
    {
      title: "Social Media",
      tasks: [
        {
          icon: Instagram,
          title: "Instagram",
          description: "Visual-first Instagram content",
          items: ["Post captions", "Story templates", "Reel scripts", "Shopping tags"]
        },
        {
          icon: Video,
          title: "TikTok",
          description: "Short-form video content for TikTok",
          items: ["Video scripts", "Trending hashtags", "Hook ideas", "CTA overlays"]
        },
        {
          icon: Video,
          title: "YouTube",
          description: "Long-form video content and optimization",
          items: ["Video descriptions", "Thumbnails copy", "End screen CTAs", "Shorts scripts"]
        },
        {
          icon: MessageSquare,
          title: "LinkedIn",
          description: "Professional social media content",
          items: ["Business posts", "Thought leadership", "Company updates", "B2B messaging"]
        },
        {
          icon: Camera,
          title: "Pinterest",
          description: "Visual discovery and shopping content",
          items: ["Pin descriptions", "Board titles", "Rich Pins", "Shopping catalogs"]
        },
        {
          icon: MessageSquare,
          title: "Facebook",
          description: "Community-focused social content",
          items: ["Post copy", "Event descriptions", "Marketplace listings", "Ad creative"]
        }
      ]
    },
    {
      title: "Audio Content",
      tasks: [
        {
          icon: AudioWaveform,
          title: "Podcast Scripts",
          description: "Audio content for podcasts and shows",
          items: ["Episode outlines", "Interview questions", "Sponsor reads", "Show notes"]
        },
        {
          icon: AudioWaveform,
          title: "Voice Ads",
          description: "Audio advertising content",
          items: ["Radio spots", "Streaming ads", "Voice assistant ads", "Jingles"]
        },
        {
          icon: AudioWaveform,
          title: "Audio Books",
          description: "Narrated content for audio formats",
          items: ["Chapter scripts", "Narrator notes", "Sound cues", "Intro/outro"]
        }
      ]
    },
    {
      title: "Video Content",
      tasks: [
        {
          icon: Video,
          title: "Product Videos",
          description: "Visual product demonstrations",
          items: ["Demo scripts", "Unboxing videos", "Comparison videos", "How-to tutorials"]
        },
        {
          icon: Video,
          title: "Brand Videos",
          description: "Company and brand storytelling",
          items: ["Brand stories", "Company culture", "Mission videos", "Behind-the-scenes"]
        },
        {
          icon: Video,
          title: "Training Videos",
          description: "Educational and instructional content",
          items: ["Product training", "Sales training", "Customer onboarding", "Safety videos"]
        },
        {
          icon: Video,
          title: "Live Streams",
          description: "Real-time interactive content",
          items: ["Event scripts", "Q&A formats", "Product launches", "Webinar content"]
        }
      ]
    },
    {
      title: "Visual Content",
      tasks: [
        {
          icon: Image,
          title: "Infographics",
          description: "Data visualization and info graphics",
          items: ["Process flows", "Statistics", "Comparison charts", "Timeline graphics"]
        },
        {
          icon: Image,
          title: "Display Ads",
          description: "Visual advertising materials",
          items: ["Banner ads", "Social media ads", "Search ads", "Retargeting ads"]
        },
        {
          icon: Printer,
          title: "Print Collateral",
          description: "Print-ready marketing materials",
          items: ["Brochures", "Data sheets", "Catalog entries", "Flyers"]
        },
        {
          icon: Image,
          title: "Packaging Copy",
          description: "Product packaging and labels",
          items: ["Package text", "Ingredient lists", "Instructions", "Legal disclaimers"]
        }
      ]
    },
    {
      title: "Software Content",
      tasks: [
        {
          icon: Monitor,
          title: "App Store Content",
          description: "Mobile and web app descriptions",
          items: ["App descriptions", "Feature lists", "Screenshots text", "Update notes"]
        },
        {
          icon: Code,
          title: "API Documentation",
          description: "Technical software documentation",
          items: ["API guides", "Code examples", "Integration docs", "SDKs"]
        },
        {
          icon: Monitor,
          title: "User Interfaces",
          description: "In-app content and microcopy",
          items: ["Button text", "Error messages", "Tooltips", "Onboarding flows"]
        },
        {
          icon: Code,
          title: "Software Specs",
          description: "Technical requirements and specifications",
          items: ["System requirements", "Compatibility lists", "Feature specs", "Release notes"]
        }
      ]
    },
    {
      title: "Hardware Content",
      tasks: [
        {
          icon: Cpu,
          title: "User Manuals",
          description: "Hardware instruction guides",
          items: ["Setup guides", "Troubleshooting", "Safety instructions", "Warranty info"]
        },
        {
          icon: Cpu,
          title: "Technical Datasheets",
          description: "Hardware specifications and data",
          items: ["Component specs", "Performance data", "Electrical ratings", "Dimensions"]
        },
        {
          icon: Cpu,
          title: "Installation Guides",
          description: "Hardware installation instructions",
          items: ["Step-by-step guides", "Tool requirements", "Safety warnings", "Diagrams"]
        },
        {
          icon: Cpu,
          title: "Compliance Docs",
          description: "Regulatory and compliance documentation",
          items: ["Certifications", "Safety standards", "Environmental specs", "Regulatory info"]
        }
      ]
    },
    {
      title: "Retail & B2B",
      tasks: [
        {
          icon: Users,
          title: "Supplier Content",
          description: "Content for retail partners and suppliers",
          items: ["Partner briefs", "Product onboarding", "Brand guidelines", "Co-op marketing"]
        },
        {
          icon: ShoppingBag,
          title: "In-Store Materials",
          description: "Physical retail environment content",
          items: ["Shelf talkers", "End cap displays", "Window graphics", "Point-of-sale"]
        },
        {
          icon: Megaphone,
          title: "Trade Marketing",
          description: "B2B marketing materials for retailers",
          items: ["Buyer presentations", "Trade show content", "Channel partner kits", "Merchandising guides"]
        },
        {
          icon: TrendingUp,
          title: "Market Research",
          description: "Data-driven content and insights",
          items: ["Trend reports", "Competitor analysis", "Market positioning", "Consumer insights"]
        },
        {
          icon: GraduationCap,
          title: "Internal Training",
          description: "Sales team enablement materials",
          items: ["Feature guides", "Selling points", "Objection handlers", "Product knowledge"]
        }
      ]
    }
  ];

  // Flatten all tasks for selection logic
  const allTasks = generationCategories.flatMap(category => category.tasks);

  const handleTemplateSelect = (file: File) => {
    setSelectedTemplate(file);
  };

  const handleRemoveTemplate = () => {
    setSelectedTemplate(null);
  };

  const handleTaskToggle = (taskIndex: number) => {
    setSelectedTasks(prev => {
      if (prev.includes(taskIndex)) {
        return prev.filter(i => i !== taskIndex);
      } else {
        return [...prev, taskIndex];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedTasks.length === allTasks.length) {
      setSelectedTasks([]);
    } else {
      setSelectedTasks(allTasks.map((_, index) => index));
    }
  };

  const handleGenerateContent = () => {
    console.log('Starting content generation with:', {
      template: selectedTemplate?.name,
      selectedTasks: selectedTasks.map(i => allTasks[i].title)
    });
    // Here you would trigger the actual generation process
    // For now, we'll navigate to the review page
    navigate('/review');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-semibold">Ready to cook up your content</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Upload your brand template and select the content you'd like to generate
          </p>
        </div>

        <div className="space-y-8">
          {/* Template Upload Section */}
          <TemplateUpload
            onTemplateSelect={handleTemplateSelect}
            selectedTemplate={selectedTemplate}
            onRemoveTemplate={handleRemoveTemplate}
          />

          {/* Content Selection Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Select Content to Generate</h2>
              <Button
                variant="outline"
                onClick={handleSelectAll}
                className="text-sm"
              >
                {selectedTasks.length === allTasks.length ? 'Deselect All' : 'Select All'}
              </Button>
            </div>

            {/* Categories */}
            <div className="space-y-8">
              {generationCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-lg font-medium mb-4 text-primary">{category.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.tasks.map((task, taskIndex) => {
                      // Calculate the global index for this task
                      const globalIndex = generationCategories
                        .slice(0, categoryIndex)
                        .reduce((acc, cat) => acc + cat.tasks.length, 0) + taskIndex;
                      
                      const isSelected = selectedTasks.includes(globalIndex);
                      const Icon = task.icon;
                      
                      return (
                        <Card 
                          key={taskIndex}
                          className={`transition-all duration-200 cursor-pointer hover:shadow-md ${
                            isSelected 
                              ? 'border-primary shadow-lg bg-primary/5' 
                              : 'border-muted hover:border-primary/50'
                          }`}
                          onClick={() => handleTaskToggle(globalIndex)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-3">
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  checked={isSelected}
                                  onChange={() => handleTaskToggle(globalIndex)}
                                  className="mt-1"
                                />
                                <div className={`p-2 rounded-lg ${
                                  isSelected
                                    ? 'bg-primary/10 text-primary'
                                    : 'bg-muted text-muted-foreground'
                                }`}>
                                  <Icon className="w-5 h-5" />
                                </div>
                              </div>
                              
                              <div className="flex-1">
                                <h4 className="font-semibold mb-1 text-sm">{task.title}</h4>
                                <p className="text-xs text-muted-foreground mb-2">
                                  {task.description}
                                </p>
                                
                                <ul className="space-y-0.5">
                                  {task.items.slice(0, 3).map((item, itemIndex) => (
                                    <li 
                                      key={itemIndex}
                                      className="text-xs flex items-center space-x-1 text-foreground"
                                    >
                                      <div className={`w-1 h-1 rounded-full ${
                                        isSelected ? 'bg-primary' : 'bg-muted-foreground'
                                      }`} />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                  {task.items.length > 3 && (
                                    <li className="text-xs text-muted-foreground">
                                      +{task.items.length - 3} more
                                    </li>
                                  )}
                                </ul>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <div className="text-center pt-8">
            <Button
              onClick={handleGenerateContent}
              disabled={selectedTasks.length === 0}
              size="lg"
              className="px-12 py-4 text-lg"
            >
              <Sparkles className="w-6 h-6 mr-2" />
              Generate a feast of content
            </Button>
            {selectedTasks.length === 0 && (
              <p className="text-sm text-muted-foreground mt-2">
                Please select at least one content type to generate
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentGeneration;
