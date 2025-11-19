import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import LogoImage from '@/components/LogoImage';
import { cn } from '@/lib/utils';

export interface SelectedItem {
  id: string;
  name: string;
  icon?: React.ReactNode;
  logoUrl?: string;
  fallbackEmoji?: string;
}

interface SelectionSummaryPanelProps {
  icon: React.ReactNode;
  title: string;
  selectedItems: SelectedItem[];
  onRemove: (id: string) => void;
  onProceed: () => void;
  proceedButtonText: string;
  disabled?: boolean;
  additionalInfo?: string;
  className?: string;
}

const SelectionSummaryPanel = ({
  icon,
  title,
  selectedItems,
  onRemove,
  onProceed,
  proceedButtonText,
  disabled = false,
  additionalInfo,
  className
}: SelectionSummaryPanelProps) => {
  if (selectedItems.length === 0) return null;

  return (
    <Card 
      className={cn(
        "sticky bottom-4 z-50 bg-card border-2 border-primary shadow-xl animate-fade-in",
        className
      )}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-primary">{icon}</div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <Badge variant="default" className="text-sm px-3 py-1">
                {selectedItems.length} {selectedItems.length === 1 ? 'item' : 'items'}
              </Badge>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedItems.map((item) => (
                <Badge
                  key={item.id}
                  variant="secondary"
                  className="group px-3 py-2 text-sm cursor-default hover:bg-secondary/80 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {item.logoUrl ? (
                      <LogoImage
                        src={item.logoUrl}
                        alt={item.name}
                        fallbackEmoji={item.fallbackEmoji || '📦'}
                        className="w-4 h-4"
                      />
                    ) : item.icon ? (
                      <span className="text-sm">{item.icon}</span>
                    ) : null}
                    <span className="max-w-[200px] truncate">{item.name}</span>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="ml-1 hover:text-destructive transition-colors"
                      aria-label={`Remove ${item.name}`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                </Badge>
              ))}
            </div>

            {additionalInfo && (
              <p className="text-sm text-muted-foreground mt-2">
                {additionalInfo}
              </p>
            )}
          </div>

          <Button
            onClick={onProceed}
            disabled={disabled}
            size="lg"
            className="shrink-0 px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            {proceedButtonText}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SelectionSummaryPanel;
