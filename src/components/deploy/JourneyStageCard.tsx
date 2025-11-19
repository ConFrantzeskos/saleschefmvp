import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DeploymentChannel } from "@/constants/deploymentChannels";

interface JourneyStageCardProps {
  icon: string;
  title: string;
  subtitle: string;
  channelCount: number;
  topChannels: DeploymentChannel[];
  onClick: () => void;
  selectedCount?: number;
}

export const JourneyStageCard = ({
  icon,
  title,
  subtitle,
  channelCount,
  topChannels,
  onClick,
  selectedCount = 0,
}: JourneyStageCardProps) => {
  return (
    <Card 
      className={cn(
        "group cursor-pointer transition-all duration-300 hover:shadow-lg",
        "border-2 hover:border-primary/50",
        selectedCount > 0 && "border-primary bg-primary/5"
      )}
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl mb-2">{icon}</div>
          {selectedCount > 0 && (
            <Badge variant="default" className="ml-2">
              {selectedCount} selected
            </Badge>
          )}
        </div>
        
        <h3 className="text-section-subtitle font-display font-bold mb-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          {subtitle}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-foreground">
            {channelCount} channels
          </span>
          <div className="flex gap-1">
            {topChannels.slice(0, 5).map((channel, i) => (
              channel.logoUrl ? (
                <img 
                  key={i}
                  src={channel.logoUrl} 
                  alt={`${channel.name} logo`}
                  className="w-6 h-6 object-contain"
                />
              ) : (
                <span key={i} className="text-2xl">{channel.logo}</span>
              )
            ))}
          </div>
        </div>
        
        <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
          Configure channels
          <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  );
};
