
import React from 'react';
import { EnrichmentAsset } from '@/types/enrichmentAsset';
import { enrichmentFields } from '@/constants/enrichmentFields';
import EnrichmentField from './EnrichmentField';

interface EnrichmentDataSectionProps {
  asset: EnrichmentAsset;
  editingField: string | null;
  editValues: Record<string, string>;
  onEdit: (fieldKey: string) => void;
  onSave: (fieldKey: string) => void;
  onCancel: () => void;
  onEditValueChange: (fieldKey: string, value: string) => void;
}

const EnrichmentDataSection = React.memo(({
  asset,
  editingField,
  editValues,
  onEdit,
  onSave,
  onCancel,
  onEditValueChange
}: EnrichmentDataSectionProps) => {
  return (
    <div className="bg-white rounded-xl border shadow-soft">
      <div className="p-6 border-b">
        <h2 className="text-xl font-display font-semibold text-foreground">Enriched Product Intelligence</h2>
        <p className="text-sm text-muted-foreground mt-1">Review the intelligence gathered from external data sources</p>
      </div>
      
      <div className="p-6 space-y-6 max-h-[calc(100vh-300px)] overflow-y-auto">
        {enrichmentFields.map((field) => (
          <EnrichmentField
            key={field.key}
            fieldKey={field.key}
            title={field.title}
            description={field.description}
            value={asset[field.key as keyof EnrichmentAsset] as string}
            icon={field.icon}
            isEditing={editingField === field.key}
            editValue={editValues[field.key] || ''}
            onEdit={() => onEdit(field.key)}
            onSave={() => onSave(field.key)}
            onCancel={onCancel}
            onEditValueChange={(value) => onEditValueChange(field.key, value)}
          />
        ))}
      </div>
    </div>
  );
});

EnrichmentDataSection.displayName = 'EnrichmentDataSection';

export default EnrichmentDataSection;
