import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ContentTask } from '@/constants/contentCategories';
import { cn } from '@/lib/utils';
import { Settings, Plus, CheckCircle2, Package } from 'lucide-react';

interface ContentSelectionCardProps {
  task: ContentTask;
  isSelected: boolean;
  onToggle: () => void;
  onConfigureTemplate: () => void;
}

const ContentSelectionCard = ({ 
  task, 
  isSelected, 
  onToggle,
  onConfigureTemplate 
}: ContentSelectionCardProps) => {
  const Icon = task.icon;
  const hasTemplate = task.hasTemplate || false;
  
  return (
    <Card 
      className={cn(
        "relative transition-all duration-200 cursor-pointer hover:shadow-md group",
        isSelected 
          ? "border-2 border-primary bg-primary/5 shadow-lg" 
          : "border-2 border-border hover:border-primary/50"
      )}
      onClick={onToggle}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <Checkbox
              checked={isSelected}
              onCheckedChange={onToggle}
              onClick={(e) => e.stopPropagation()}
              className="mt-1"
            />
            <div className={cn(
              "p-2 rounded-lg transition-colors",
              isSelected
                ? 'bg-primary/10 text-primary'
                : 'bg-muted text-muted-foreground'
            )}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground">{task.title}</h4>
            </div>
          </div>
          
          {hasTemplate && (
            <Badge variant="default" className="bg-success/10 text-success border-success/20 hover:bg-success/20">
              <CheckCircle2 className="w-3 h-3 mr-1" />
              Template
            </Badge>
          )}
        </div>

        <p className="text-xs text-muted-foreground mb-3 line-clamp-1">
          {task.description}
        </p>

        {hasTemplate && task.templateVariants && (
          <div className="flex items-center space-x-1 mb-3 text-xs text-muted-foreground">
            <Package className="w-3 h-3" />
            <span>{task.templateVariants} variant{task.templateVariants > 1 ? 's' : ''} configured</span>
          </div>
        )}

        <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
          {hasTemplate ? (
            <>
              <Button
                variant="secondary"
                size="sm"
                className="h-8 text-xs flex-1"
                onClick={onConfigureTemplate}
              >
                <Settings className="w-3 h-3 mr-1" />
                Edit Template
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-3 text-xs"
              >
                Preview
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-xs flex-1 border-dashed"
              onClick={onConfigureTemplate}
            >
              <Plus className="w-3 h-3 mr-1" />
              Add Template
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentSelectionCard;
