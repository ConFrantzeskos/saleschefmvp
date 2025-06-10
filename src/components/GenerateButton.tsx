
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

interface GenerateButtonProps {
  selectedTasksCount: number;
  isGenerating: boolean;
  onGenerate: () => void;
}

const GenerateButton = ({ selectedTasksCount, isGenerating, onGenerate }: GenerateButtonProps) => {
  return (
    <div className="text-center pt-8">
      <Button
        onClick={onGenerate}
        disabled={selectedTasksCount === 0 || isGenerating}
        size="lg"
        className="px-12 py-4 text-lg"
      >
        <Sparkles className="w-6 h-6 mr-2" />
        Generate a feast of content
      </Button>
      {selectedTasksCount === 0 && (
        <p className="text-sm text-muted-foreground mt-2">
          Please select at least one content type to generate
        </p>
      )}
    </div>
  );
};

export default GenerateButton;
