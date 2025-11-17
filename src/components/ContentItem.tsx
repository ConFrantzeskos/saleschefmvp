import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Edit2, Check, X } from 'lucide-react';

interface ContentItemMetadata {
  frameworks?: string[];
  enrichmentSources?: string[];
  behavioralTriggers?: string[];
}

interface ContentItemProps {
  item: {
    label: string;
    content: string;
    metadata?: ContentItemMetadata;
  };
  sectionIndex: number;
  itemIndex: number;
  isEditing: boolean;
  editValue: string;
  onEdit: (sectionIndex: number, itemIndex: number) => void;
  onSave: (sectionIndex: number, itemIndex: number) => void;
  onCancel: () => void;
  onEditValueChange: (value: string) => void;
}

const ContentItem = ({
  item,
  sectionIndex,
  itemIndex,
  isEditing,
  editValue,
  onEdit,
  onSave,
  onCancel,
  onEditValueChange
}: ContentItemProps) => {
  const hasMetadata = item.metadata && (
    item.metadata.frameworks?.length || 
    item.metadata.enrichmentSources?.length || 
    item.metadata.behavioralTriggers?.length
  );

  return (
    <div className="border border-green-200 bg-green-50 p-3 rounded-md relative z-30">
      <div className="flex items-start justify-between mb-2 gap-4">
        <div className="flex-1 space-y-2">
          <h5 className="font-medium text-sm text-green-700">{item.label}</h5>
          {hasMetadata && (
            <div className="flex flex-wrap gap-1.5">
              {item.metadata?.frameworks?.map((framework, idx) => (
                <Badge 
                  key={`fw-${idx}`} 
                  variant="outline" 
                  className="text-xs bg-primary/10 border-primary/40 text-primary font-medium"
                >
                  {framework}
                </Badge>
              ))}
              {item.metadata?.enrichmentSources?.map((source, idx) => (
                <Badge 
                  key={`es-${idx}`} 
                  variant="outline" 
                  className="text-xs bg-blue-500/10 border-blue-500/40 text-blue-700 font-medium"
                >
                  📊 {source}
                </Badge>
              ))}
              {item.metadata?.behavioralTriggers?.map((trigger, idx) => (
                <Badge 
                  key={`bt-${idx}`} 
                  variant="outline" 
                  className="text-xs bg-amber-500/10 border-amber-500/40 text-amber-700 font-medium"
                >
                  🧠 {trigger}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <div className="flex space-x-1 relative z-40 flex-shrink-0">
          {isEditing ? (
            <>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onSave(sectionIndex, itemIndex)}
                className="relative z-50 bg-white hover:bg-gray-100"
              >
                <Check className="w-3 h-3" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={onCancel}
                className="relative z-50 bg-white hover:bg-gray-100"
              >
                <X className="w-3 h-3" />
              </Button>
            </>
          ) : (
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onEdit(sectionIndex, itemIndex)}
              className="relative z-50 bg-white hover:bg-gray-100"
            >
              <Edit2 className="w-3 h-3" />
            </Button>
          )}
        </div>
      </div>
      {isEditing ? (
        <Textarea
          value={editValue}
          onChange={(e) => onEditValueChange(e.target.value)}
          className="text-sm min-h-[100px] bg-white relative z-30"
        />
      ) : (
        <div className="text-sm leading-relaxed whitespace-pre-line text-green-600">
          {item.content}
        </div>
      )}
    </div>
  );
};

export default ContentItem;
