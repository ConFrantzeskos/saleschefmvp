import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { DeploymentChannel, getCategoryDisplayName } from "@/constants/deploymentChannels";

interface IntegrationsTableProps {
  channels: DeploymentChannel[];
  selectedChannels: string[];
  onToggle: (channelId: string) => void;
  onConfigure?: (channelId: string) => void;
}

export const IntegrationsTable = ({
  channels,
  selectedChannels,
  onToggle,
  onConfigure,
}: IntegrationsTableProps) => {
  const getStatusBadge = (status: DeploymentChannel['status']) => {
    switch (status) {
      case 'connected':
        return <Badge className="bg-green-500">Connected</Badge>;
      case 'available':
        return <Badge variant="outline">Available</Badge>;
      case 'coming-soon':
        return <Badge variant="secondary">Coming Soon</Badge>;
    }
  };

  const stageLabels: Record<string, string> = {
    discover: "Discover",
    research: "Research",
    shop: "Shop",
    nurture: "Nurture",
    operations: "Operations",
    export: "Export",
  };

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">Select</TableHead>
            <TableHead className="w-16">Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Journey Stage</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Products</TableHead>
            <TableHead className="w-32">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {channels.map((channel) => (
            <TableRow
              key={channel.id}
              className={selectedChannels.includes(channel.id) ? "bg-primary/5" : ""}
            >
              <TableCell>
                <Checkbox
                  checked={selectedChannels.includes(channel.id)}
                  onCheckedChange={() => onToggle(channel.id)}
                  disabled={channel.status === 'coming-soon'}
                />
              </TableCell>
              <TableCell>
                {channel.logoUrl ? (
                  <img
                    src={channel.logoUrl}
                    alt={`${channel.name} logo`}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <span className="text-xl">{channel.logo}</span>
                )}
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  {channel.name}
                  {channel.isPremium && (
                    <Badge variant="secondary" className="text-xs">
                      Premium
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {getCategoryDisplayName(channel.category)}
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {stageLabels[channel.journeyStage] || channel.journeyStage}
              </TableCell>
              <TableCell>{getStatusBadge(channel.status)}</TableCell>
              <TableCell className="text-right text-sm">
                {channel.products !== undefined ? channel.products : '—'}
              </TableCell>
              <TableCell>
                {channel.status !== 'coming-soon' && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onConfigure?.(channel.id)}
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
