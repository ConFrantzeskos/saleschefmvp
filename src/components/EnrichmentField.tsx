
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Edit2, Save, X, LucideIcon } from 'lucide-react';

interface EnrichmentFieldProps {
  fieldKey: string;
  title: string;
  description: string;
  value: string;
  icon: LucideIcon;
  isEditing: boolean;
  editValue: string;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  onEditValueChange: (value: string) => void;
}

const EnrichmentField = React.memo(({
  fieldKey,
  title,
  description,
  value,
  icon: Icon,
  isEditing,
  editValue,
  onEdit,
  onSave,
  onCancel,
  onEditValueChange
}: EnrichmentFieldProps) => {
  return (
    <Card className="border-l-4 border-l-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          {!isEditing && (
            <Button
              variant="outline"
              size="sm"
              onClick={onEdit}
            >
              <Edit2 className="w-4 h-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        {isEditing ? (
          <div className="space-y-3">
            <Textarea
              value={editValue}
              onChange={(e) => onEditValueChange(e.target.value)}
              className="min-h-[120px] resize-none"
              placeholder={`Edit ${title.toLowerCase()}...`}
            />
            <div className="flex space-x-2">
              <Button size="sm" onClick={onSave}>
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm" onClick={onCancel}>
                <X className="w-4 h-4 mr-2" />
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="prose prose-sm max-w-none">
            <pre className="whitespace-pre-wrap text-sm text-foreground bg-muted/30 p-4 rounded-lg border">
              {value}
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
});

EnrichmentField.displayName = 'EnrichmentField';

export default EnrichmentField;
