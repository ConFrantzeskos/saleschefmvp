import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { DeploymentChannel } from "@/constants/deploymentChannels";
import LogoImage from "@/components/LogoImage";

interface ChannelCardProps {
  channel: DeploymentChannel;
  selected: boolean;
  onToggle: (channelId: string) => void;
  onConfigure?: (channelId: string) => void;
}

export const ChannelCard = ({ 
  channel, 
  selected, 
  onToggle,
  onConfigure 
}: ChannelCardProps) => {
  const getStatusBadge = () => {
    switch (channel.status) {
      case 'connected':
        return <Badge variant="default" className="bg-green-500">Connected</Badge>;
      case 'available':
        return <Badge variant="outline">Available</Badge>;
      case 'coming-soon':
        return <Badge variant="secondary">Coming Soon</Badge>;
    }
  };

  return (
    <Card 
      className={cn(
        "group transition-all duration-200 hover:shadow-md",
        selected && "border-primary bg-primary/5",
        channel.status === 'coming-soon' && "opacity-60"
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Checkbox
            checked={selected}
            onCheckedChange={() => onToggle(channel.id)}
            disabled={channel.status === 'coming-soon'}
            className="mt-1"
          />
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <LogoImage
                  src={channel.logoUrl}
                  alt={`${channel.name} logo`}
                  fallbackEmoji={channel.logo}
                  className="w-6 h-6"
                />
                <div>
                  <h4 className="font-semibold text-sm leading-tight">
                    {channel.name}
                  </h4>
                  {channel.isPremium && (
                    <Badge variant="secondary" className="text-xs mt-1">
                      Premium
                    </Badge>
                  )}
                </div>
              </div>
              {getStatusBadge()}
            </div>
            
            <p className="text-xs text-muted-foreground mb-3">
              {channel.description}
            </p>
            
            {channel.products !== undefined && (
              <p className="text-xs text-muted-foreground mb-2">
                📦 {channel.products} products ready
              </p>
            )}
            
            <div className="flex gap-2">
              {channel.status !== 'coming-soon' && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs"
                  onClick={() => onConfigure?.(channel.id)}
                >
                  <Settings className="h-3 w-3 mr-1" />
                  Configure
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
