import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Grid3x3, List } from "lucide-react";
import { IntegrationsSearch } from "./IntegrationsSearch";
import { IntegrationsFilters } from "./IntegrationsFilters";
import { IntegrationsTable } from "./IntegrationsTable";
import { ChannelCard } from "./ChannelCard";
import {
  DeploymentChannel,
  ChannelStatus,
  ChannelCategory,
  JourneyStage,
  SortOption,
  searchChannels,
  filterChannels,
  sortChannels,
} from "@/constants/deploymentChannels";

interface IntegrationsListViewProps {
  channels: DeploymentChannel[];
  selectedChannels: string[];
  onToggle: (channelId: string) => void;
  onConfigure?: (channelId: string) => void;
}

export const IntegrationsListView = ({
  channels,
  selectedChannels,
  onToggle,
  onConfigure,
}: IntegrationsListViewProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<{
    status: ChannelStatus[];
    category: ChannelCategory[];
    journeyStage: JourneyStage[];
  }>({
    status: [],
    category: [],
    journeyStage: [],
  });
  const [sortBy, setSortBy] = useState<SortOption>("alphabetical");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const processedChannels = useMemo(() => {
    let result = channels;
    
    // Apply search
    result = searchChannels(result, searchQuery);
    
    // Apply filters
    result = filterChannels(result, filters);
    
    // Apply sorting
    result = sortChannels(result, sortBy);
    
    return result;
  }, [channels, searchQuery, filters, sortBy]);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-display font-semibold">
              All Integrations
            </h3>
            <p className="text-sm text-muted-foreground">
              Browse and select from 60+ available platforms
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Sort dropdown */}
            <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alphabetical">Alphabetical</SelectItem>
                <SelectItem value="status">Status</SelectItem>
                <SelectItem value="category">Category</SelectItem>
                <SelectItem value="stage">Journey Stage</SelectItem>
              </SelectContent>
            </Select>

            {/* View mode toggle */}
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid3x3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Search */}
        <IntegrationsSearch value={searchQuery} onChange={setSearchQuery} />

        {/* Filters */}
        <IntegrationsFilters filters={filters} onFilterChange={setFilters} />
      </div>

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        Showing {processedChannels.length} of {channels.length} integrations
        {selectedChannels.length > 0 && (
          <span className="ml-2 font-medium text-primary">
            • {selectedChannels.length} selected
          </span>
        )}
      </div>

      {/* Content */}
      {processedChannels.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>No integrations found matching your criteria.</p>
          <p className="text-sm mt-2">Try adjusting your search or filters.</p>
        </div>
      ) : viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {processedChannels.map((channel) => (
            <ChannelCard
              key={channel.id}
              channel={channel}
              selected={selectedChannels.includes(channel.id)}
              onToggle={onToggle}
              onConfigure={onConfigure}
            />
          ))}
        </div>
      ) : (
        <IntegrationsTable
          channels={processedChannels}
          selectedChannels={selectedChannels}
          onToggle={onToggle}
          onConfigure={onConfigure}
        />
      )}
    </div>
  );
};
