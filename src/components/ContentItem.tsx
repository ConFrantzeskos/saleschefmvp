
import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Edit2, Check, X } from 'lucide-react';

interface ContentItemProps {
  item: {
    label: string;
    content: string;
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
  return (
    <div className="border border-green-200 bg-green-50 p-3 rounded-md relative z-30">
      <div className="flex items-center justify-between mb-2">
        <h5 className="font-medium text-sm text-green-700">{item.label}</h5>
        <div className="flex space-x-1 relative z-40">
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
