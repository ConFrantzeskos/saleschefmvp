
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import TemplateUpload from '@/components/TemplateUpload';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Sparkles, FileText, Image, Video, Globe, Mail, Printer, GraduationCap, HelpCircle } from 'lucide-react';

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

  const generationTasks = [
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
      icon: Printer,
      title: "Print Collateral",
      description: "Print-ready marketing materials",
      items: ["Brochures", "Data sheets", "Catalog entries"]
    },
    {
      icon: GraduationCap,
      title: "Internal Training",
      description: "Sales team enablement materials",
      items: ["Feature guides", "Selling points", "Objection handlers"]
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Customer support content",
      items: ["Common questions", "Technical support", "Usage guidance"]
    }
  ];

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
    if (selectedTasks.length === generationTasks.length) {
      setSelectedTasks([]);
    } else {
      setSelectedTasks(generationTasks.map((_, index) => index));
    }
  };

  const handleGenerateContent = () => {
    console.log('Starting content generation with:', {
      template: selectedTemplate?.name,
      selectedTasks: selectedTasks.map(i => generationTasks[i].title)
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
                {selectedTasks.length === generationTasks.length ? 'Deselect All' : 'Select All'}
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {generationTasks.map((task, index) => {
                const isSelected = selectedTasks.includes(index);
                const Icon = task.icon;
                
                return (
                  <Card 
                    key={index}
                    className={`transition-all duration-200 cursor-pointer hover:shadow-md ${
                      isSelected 
                        ? 'border-primary shadow-lg bg-primary/5' 
                        : 'border-muted hover:border-primary/50'
                    }`}
                    onClick={() => handleTaskToggle(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            checked={isSelected}
                            onChange={() => handleTaskToggle(index)}
                            className="mt-1"
                          />
                          <div className={`p-3 rounded-lg ${
                            isSelected
                              ? 'bg-primary/10 text-primary'
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">{task.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {task.description}
                          </p>
                          
                          <ul className="space-y-1">
                            {task.items.map((item, itemIndex) => (
                              <li 
                                key={itemIndex}
                                className="text-sm flex items-center space-x-2 text-foreground"
                              >
                                <div className={`w-1 h-1 rounded-full ${
                                  isSelected ? 'bg-primary' : 'bg-muted-foreground'
                                }`} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
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
