import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { deploymentTemplates } from "@/constants/deploymentTemplates";

interface QuickDeployTemplatesProps {
  onSelectTemplate: (channelIds: string[]) => void;
}

export const QuickDeployTemplates = ({ onSelectTemplate }: QuickDeployTemplatesProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-primary" />
        <h3 className="text-subsection-title font-display font-bold">
          Quick Deploy Templates
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {deploymentTemplates.map((template) => (
          <Card 
            key={template.id}
            className="group cursor-pointer hover:shadow-md transition-all duration-200 hover:border-primary/50"
            onClick={() => onSelectTemplate(template.channels)}
          >
            <CardContent className="p-4 text-center">
              <div className="text-3xl mb-2">{template.icon}</div>
              <h4 className="font-semibold text-sm mb-1 leading-tight">
                {template.name}
              </h4>
              <p className="text-xs text-muted-foreground mb-2">
                {template.channels.length} channels
              </p>
              {template.recommended && (
                <Badge variant="default" className="text-xs">
                  Recommended
                </Badge>
              )}
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full mt-2 text-xs h-7"
              >
                Select All
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
