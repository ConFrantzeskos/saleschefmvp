
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { LucideIcon } from 'lucide-react';
import ContentItem from './ContentItem';

interface ContentItemMetadata {
  frameworks?: string[];
  enrichmentSources?: string[];
  behavioralTriggers?: string[];
}

interface ContentItem {
  label: string;
  content: string;
  metadata?: ContentItemMetadata;
}

interface ContentSection {
  icon: LucideIcon;
  title: string;
  description: string;
  items: ContentItem[];
}

interface EnhancedContentSectionProps {
  contentSections: ContentSection[];
  editingField: string | null;
  editValues: Record<string, string>;
  onEdit: (sectionIndex: number, itemIndex: number) => void;
  onSave: (sectionIndex: number, itemIndex: number) => void;
  onCancel: () => void;
  onEditValueChange: (fieldKey: string, value: string) => void;
}

const EnhancedContentSection = ({
  contentSections,
  editingField,
  editValues,
  onEdit,
  onSave,
  onCancel,
  onEditValueChange
}: EnhancedContentSectionProps) => {
  return (
    <div className="flex flex-col">
      <ScrollArea className="h-full">
        <div className="space-y-6 pr-4">
          {contentSections.map((section, sectionIndex) => {
            const Icon = section.icon;
            return (
              <Card key={sectionIndex} className="relative z-20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg">{section.title}</h3>
                      <p className="text-sm text-muted-foreground font-normal">{section.description}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-medium text-sm text-primary mb-4">SalesChef Enhanced Content</h4>
                    {section.items.map((item, itemIndex) => {
                      const fieldKey = `${sectionIndex}-${itemIndex}`;
                      const isEditing = editingField === fieldKey;
                      
                      return (
                        <ContentItem
                          key={itemIndex}
                          item={item}
                          sectionIndex={sectionIndex}
                          itemIndex={itemIndex}
                          isEditing={isEditing}
                          editValue={editValues[fieldKey] || item.content}
                          onEdit={onEdit}
                          onSave={onSave}
                          onCancel={onCancel}
                          onEditValueChange={(value) => onEditValueChange(fieldKey, value)}
                        />
                      );
                    })}
                  </div>
                  {sectionIndex < contentSections.length - 1 && <Separator className="mt-6" />}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default EnhancedContentSection;
