import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, X } from "lucide-react";
import { deploymentChannels } from "@/constants/deploymentChannels";
import LogoImage from "@/components/LogoImage";

interface DeploymentSummaryProps {
  selectedChannelIds: string[];
  onRemove: (channelId: string) => void;
  onDeploy: () => void;
}

export const DeploymentSummary = ({
  selectedChannelIds,
  onRemove,
  onDeploy,
}: DeploymentSummaryProps) => {
  if (selectedChannelIds.length === 0) return null;

  const selectedChannels = deploymentChannels.filter(c => 
    selectedChannelIds.includes(c.id)
  );

  const totalProducts = selectedChannels.reduce(
    (sum, ch) => sum + (ch.products || 0), 
    0
  );

  return (
    <Card className="border-2 border-primary bg-card sticky bottom-4 shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="h-5 w-5 text-primary" />
              <h3 className="text-subsection-title font-display font-bold">
                Ready to Deploy
              </h3>
              <Badge variant="default">
                {selectedChannelIds.length} channels
              </Badge>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedChannels.map((channel) => (
                <Badge
                  key={channel.id}
                  variant="secondary"
                  className="pl-2 pr-1 py-1 flex items-center gap-1"
                >
                  <LogoImage
                    src={channel.logoUrl}
                    alt={`${channel.name} logo`}
                    fallbackEmoji={channel.logo}
                    className="w-4 h-4"
                  />
                  <span>{channel.name}</span>
                  <button
                    onClick={() => onRemove(channel.id)}
                    className="ml-2 hover:bg-background/50 rounded p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>

            {totalProducts > 0 && (
              <p className="text-sm text-muted-foreground">
                📦 {totalProducts} products ready for deployment
              </p>
            )}
          </div>

            <Button
              size="lg"
              onClick={onDeploy}
              className="shrink-0 px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Deploy Now
            </Button>
        </div>
      </CardContent>
    </Card>
  );
};
