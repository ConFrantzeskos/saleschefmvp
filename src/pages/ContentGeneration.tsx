
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import TemplateUpload from '@/components/TemplateUpload';
import GenerationAnimation from '@/components/GenerationAnimation';
import ContentCategoriesGrid from '@/components/ContentCategoriesGrid';
import SpecificContentUnits from '@/components/SpecificContentUnits';
import GenerateButton from '@/components/GenerateButton';
import { Sparkles } from 'lucide-react';
import { generationCategories } from '@/constants/contentCategories';

const ContentGeneration = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState<File | null>(null);
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
  const [selectedUnits, setSelectedUnits] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const steps = [
    { id: 'upload', label: 'Upload', completed: true, current: false },
    { id: 'mapping', label: 'Map Fields', completed: true, current: false },
    { id: 'clean', label: 'Clean Data', completed: true, current: false },
    { id: 'enrich', label: 'Enrich', completed: true, current: false },
    { id: 'enhance', label: 'Enhance', completed: true, current: false },
    { id: 'generate', label: 'Generate', completed: false, current: true },
    { id: 'review', label: 'Review', completed: false, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
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

  const handleUnitToggle = (unitId: string) => {
    setSelectedUnits(prev => {
      if (prev.includes(unitId)) {
        return prev.filter(id => id !== unitId);
      } else {
        return [...prev, unitId];
      }
    });
  };

  const handleGenerateContent = () => {
    console.log('Starting content generation with:', {
      template: selectedTemplate?.name,
      selectedTasks: selectedTasks.map(i => allTasks[i].title),
      selectedUnits: selectedUnits
    });
    setIsGenerating(true);
  };

  const handleAnimationComplete = () => {
    navigate('/review');
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {isGenerating && (
        <GenerationAnimation onComplete={handleAnimationComplete} />
      )}
      
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
          <TemplateUpload
            onTemplateSelect={handleTemplateSelect}
            selectedTemplate={selectedTemplate}
            onRemoveTemplate={handleRemoveTemplate}
          />

          <SpecificContentUnits
            selectedUnits={selectedUnits}
            onUnitToggle={handleUnitToggle}
          />

          <ContentCategoriesGrid
            selectedTasks={selectedTasks}
            onTaskToggle={handleTaskToggle}
            onSelectAll={handleSelectAll}
            allTasksLength={allTasks.length}
          />

          <GenerateButton
            selectedTasksCount={selectedTasks.length + selectedUnits.length}
            isGenerating={isGenerating}
            onGenerate={handleGenerateContent}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentGeneration;
