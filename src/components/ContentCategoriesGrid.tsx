
import React from 'react';
import { Button } from '@/components/ui/button';
import ContentSelectionCard from './ContentSelectionCard';
import { generationCategories } from '@/constants/contentCategories';

interface ContentCategoriesGridProps {
  selectedTasks: number[];
  onTaskToggle: (taskIndex: number) => void;
  onSelectAll: () => void;
  allTasksLength: number;
}

const ContentCategoriesGrid = ({ 
  selectedTasks, 
  onTaskToggle, 
  onSelectAll, 
  allTasksLength 
}: ContentCategoriesGridProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Select Content to Generate</h2>
        <Button
          variant="outline"
          onClick={onSelectAll}
          className="text-sm"
        >
          {selectedTasks.length === allTasksLength ? 'Deselect All' : 'Select All'}
        </Button>
      </div>

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
                
                return (
                  <ContentSelectionCard
                    key={taskIndex}
                    task={task}
                    isSelected={isSelected}
                    onToggle={() => onTaskToggle(globalIndex)}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentCategoriesGrid;
