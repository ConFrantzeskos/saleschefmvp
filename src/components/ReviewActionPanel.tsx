import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ReviewActionPanelProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: React.ReactNode;
  onAction: () => void;
  variant?: 'top' | 'bottom';
}

const ReviewActionPanel = React.memo(({ 
  icon, 
  title, 
  description, 
  buttonText, 
  buttonIcon, 
  onAction,
  variant = 'top'
}: ReviewActionPanelProps) => {
  return (
    <div 
      className={cn(
        "flex justify-between items-center p-6 bg-card rounded-xl border border-primary/20 animate-fade-in shadow-lg",
        variant === 'bottom' && "sticky bottom-4"
      )}
      style={{ animationDelay: variant === 'top' ? '0.3s' : '0s' }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/10">
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-display font-semibold mb-1">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      <Button onClick={onAction} size="lg" className="gap-2 shadow-lg hover-scale">
        {buttonText}
        {buttonIcon}
      </Button>
    </div>
  );
});

ReviewActionPanel.displayName = 'ReviewActionPanel';

export default ReviewActionPanel;
