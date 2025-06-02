
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressStep {
  id: string;
  label: string;
  completed: boolean;
  current: boolean;
}

interface ProgressIndicatorProps {
  steps: ProgressStep[];
  className?: string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ steps, className }) => {
  return (
    <div className={cn("flex items-center justify-center space-x-4 mb-12", className)}>
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                step.completed 
                  ? "bg-primary text-primary-foreground" 
                  : step.current 
                    ? "bg-primary/20 text-primary border-2 border-primary" 
                    : "bg-muted text-muted-foreground"
              )}
            >
              {step.completed ? "✓" : index + 1}
            </div>
            <span className={cn(
              "text-xs mt-2 text-center max-w-20",
              step.current ? "text-primary font-medium" : "text-muted-foreground"
            )}>
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className={cn(
              "w-12 h-px mx-4 mt-0",
              step.completed ? "bg-primary" : "bg-muted"
            )} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressIndicator;
