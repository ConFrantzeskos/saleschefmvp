
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ContentTask } from '@/constants/contentCategories';
import { cn } from '@/lib/utils';

interface ContentSelectionCardProps {
  task: ContentTask;
  isSelected: boolean;
  onToggle: () => void;
}

const ContentSelectionCard = ({ task, isSelected, onToggle }: ContentSelectionCardProps) => {
  const Icon = task.icon;
  
  return (
    <Card 
      className={cn(
        "relative p-4 transition-all duration-200 cursor-pointer hover:shadow-md group",
        isSelected 
          ? "border-2 border-primary bg-primary/5 shadow-lg" 
          : "border-2 border-muted hover:border-primary/50"
      )}
      onClick={onToggle}
    >
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={isSelected}
              onChange={onToggle}
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
};

export default ContentSelectionCard;
