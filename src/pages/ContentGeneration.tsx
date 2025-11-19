
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import TemplateUpload from '@/components/TemplateUpload';
import GenerationAnimation from '@/components/GenerationAnimation';
import ContentCategoriesGrid from '@/components/ContentCategoriesGrid';
import SpecificContentUnits from '@/components/SpecificContentUnits';
import GenerateButton from '@/components/GenerateButton';
import SelectionSummaryPanel, { SelectedItem } from '@/components/SelectionSummaryPanel';
import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';
import { generationCategories, specificContentUnits } from '@/constants/contentCategories';

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

  const getSelectedContentTypes = () => {
    const taskTitles = selectedTasks.map(i => allTasks[i].title);
    const unitTitles = selectedUnits.map(id => {
      const unit = specificContentUnits.find(u => u.id === id);
      return unit?.title || '';
    }).filter(Boolean);
    return [...unitTitles, ...taskTitles];
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

  const getSelectedItemsForSummary = (): SelectedItem[] => {
    const unitItems = selectedUnits.map(unitId => {
      const unit = specificContentUnits.find(u => u.id === unitId);
      return {
        id: unitId,
        name: unit?.title || unitId,
        icon: unit ? <unit.icon className="h-4 w-4" /> : undefined
      };
    });

    const taskItems = selectedTasks.map(taskIndex => {
      const task = allTasks[taskIndex];
      return {
        id: `task-${taskIndex}`,
        name: task.title,
        icon: <task.icon className="h-4 w-4" />
      };
    });

    return [...unitItems, ...taskItems];
  };

  const handleRemoveSelection = (id: string) => {
    if (id.startsWith('task-')) {
      const taskIndex = parseInt(id.replace('task-', ''));
      setSelectedTasks(prev => prev.filter(i => i !== taskIndex));
    } else {
      setSelectedUnits(prev => prev.filter(unitId => unitId !== id));
    }
  };

  const totalSelected = selectedTasks.length + selectedUnits.length;

  return (
    <div className="min-h-screen bg-background p-6">
      {isGenerating && (
        <GenerationAnimation 
          onComplete={handleAnimationComplete}
          selectedContentTypes={getSelectedContentTypes()}
        />
      )}
      
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-semibold">Ready to cook up your content</h1>
          </div>
          <p className="text-lg text-muted-foreground mb-4">
            Upload your brand template and select the content you'd like to generate
          </p>
          <Badge 
            variant={totalSelected > 0 ? "default" : "outline"} 
            className="text-base px-4 py-2"
          >
            {totalSelected} {totalSelected === 1 ? 'item' : 'items'} selected
          </Badge>
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

          <SelectionSummaryPanel
            icon={<Sparkles className="h-6 w-6" />}
            title="Ready to Generate"
            selectedItems={getSelectedItemsForSummary()}
            onRemove={handleRemoveSelection}
            onProceed={handleGenerateContent}
            proceedButtonText="Generate Content"
            disabled={isGenerating}
            additionalInfo={`${totalSelected} content ${totalSelected === 1 ? 'type' : 'types'} selected`}
            className="max-w-6xl mx-auto"
          />

          {totalSelected === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                👆 Select content types above to get started
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentGeneration;
