import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { specificContentUnits, SpecificContentUnit } from '@/constants/contentCategories';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SpecificContentUnitsProps {
  selectedUnits: string[];
  onUnitToggle: (unitId: string) => void;
}

const SpecificContentUnits = ({ selectedUnits, onUnitToggle }: SpecificContentUnitsProps) => {
  const categories = {
    image: specificContentUnits.filter(unit => unit.category === 'image'),
    video: specificContentUnits.filter(unit => unit.category === 'video'),
    audio: specificContentUnits.filter(unit => unit.category === 'audio')
  };

  const renderUnit = (unit: SpecificContentUnit) => {
    const isSelected = selectedUnits.includes(unit.id);
    const Icon = unit.icon;

    return (
      <Card
        key={unit.id}
        className={cn(
          "p-4 cursor-pointer transition-all duration-200 hover:shadow-md",
          isSelected 
            ? "border-2 border-primary bg-primary/5 shadow-lg" 
            : "border-2 border-muted hover:border-primary/50"
        )}
        onClick={() => onUnitToggle(unit.id)}
      >
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Checkbox
              checked={isSelected}
              onCheckedChange={() => onUnitToggle(unit.id)}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-sm">{unit.title}</h3>
              </div>
              
              <Badge variant="secondary" className="text-xs">
                <Sparkles className="w-3 h-3 mr-1" />
                {unit.model}
              </Badge>

              <div className="space-y-1 text-xs text-muted-foreground">
                {unit.specs.aspectRatio && (
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Aspect:</span>
                    <span>{unit.specs.aspectRatio}</span>
                  </div>
                )}
                {unit.specs.duration && (
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Duration:</span>
                    <span>{unit.specs.duration}</span>
                  </div>
                )}
                {unit.specs.resolution && (
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Resolution:</span>
                    <span>{unit.specs.resolution}</span>
                  </div>
                )}
                {unit.specs.format && (
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Format:</span>
                    <span>{unit.specs.format}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-1">Specific Content Units</h2>
          <p className="text-sm text-muted-foreground">
            Pre-configured formats powered by leading AI models
          </p>
        </div>
      </div>

      {/* Images */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Images
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {categories.image.map(renderUnit)}
        </div>
      </div>

      {/* Videos */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Videos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {categories.video.map(renderUnit)}
        </div>
      </div>

      {/* Audio */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
          Audio
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.audio.map(renderUnit)}
        </div>
      </div>
    </div>
  );
};

export default SpecificContentUnits;
