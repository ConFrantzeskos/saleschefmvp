import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter, X } from "lucide-react";
import {
  ChannelStatus,
  ChannelCategory,
  JourneyStage,
  getAllCategories,
  getAllJourneyStages,
  getCategoryDisplayName,
} from "@/constants/deploymentChannels";

interface IntegrationsFiltersProps {
  filters: {
    status: ChannelStatus[];
    category: ChannelCategory[];
    journeyStage: JourneyStage[];
  };
  onFilterChange: (filters: {
    status: ChannelStatus[];
    category: ChannelCategory[];
    journeyStage: JourneyStage[];
  }) => void;
}

export const IntegrationsFilters = ({
  filters,
  onFilterChange,
}: IntegrationsFiltersProps) => {
  const hasActiveFilters =
    filters.status.length > 0 ||
    filters.category.length > 0 ||
    filters.journeyStage.length > 0;

  const toggleStatusFilter = (status: ChannelStatus) => {
    const newStatuses = filters.status.includes(status)
      ? filters.status.filter((s) => s !== status)
      : [...filters.status, status];
    onFilterChange({ ...filters, status: newStatuses });
  };

  const toggleCategoryFilter = (category: ChannelCategory) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter((c) => c !== category)
      : [...filters.category, category];
    onFilterChange({ ...filters, category: newCategories });
  };

  const toggleStageFilter = (stage: JourneyStage) => {
    const newStages = filters.journeyStage.includes(stage)
      ? filters.journeyStage.filter((s) => s !== stage)
      : [...filters.journeyStage, stage];
    onFilterChange({ ...filters, journeyStage: newStages });
  };

  const clearAllFilters = () => {
    onFilterChange({ status: [], category: [], journeyStage: [] });
  };

  const statusLabels: Record<ChannelStatus, string> = {
    connected: "Connected",
    available: "Available",
    "coming-soon": "Coming Soon",
  };

  const stageLabels: Record<JourneyStage, string> = {
    discover: "Discover",
    research: "Research",
    shop: "Shop",
    nurture: "Nurture",
    operations: "Operations",
    export: "Export",
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm font-medium text-muted-foreground">
          Filters:
        </span>

        {/* Status Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-3 w-3" />
              Status
              {filters.status.length > 0 && (
                <Badge variant="secondary" className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  {filters.status.length}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {(Object.keys(statusLabels) as ChannelStatus[]).map((status) => (
              <DropdownMenuCheckboxItem
                key={status}
                checked={filters.status.includes(status)}
                onCheckedChange={() => toggleStatusFilter(status)}
              >
                {statusLabels[status]}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Category Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-3 w-3" />
              Category
              {filters.category.length > 0 && (
                <Badge variant="secondary" className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  {filters.category.length}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="max-h-[300px] overflow-y-auto">
            {getAllCategories().map((category) => (
              <DropdownMenuCheckboxItem
                key={category}
                checked={filters.category.includes(category)}
                onCheckedChange={() => toggleCategoryFilter(category)}
              >
                {getCategoryDisplayName(category)}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Journey Stage Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-3 w-3" />
              Journey Stage
              {filters.journeyStage.length > 0 && (
                <Badge variant="secondary" className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  {filters.journeyStage.length}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {getAllJourneyStages().map((stage) => (
              <DropdownMenuCheckboxItem
                key={stage}
                checked={filters.journeyStage.includes(stage)}
                onCheckedChange={() => toggleStageFilter(stage)}
              >
                {stageLabels[stage]}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-3 w-3" />
            Clear all
          </Button>
        )}
      </div>

      {/* Active filter badges */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {filters.status.map((status) => (
            <Badge key={status} variant="secondary" className="gap-1">
              {statusLabels[status]}
              <X
                className="h-3 w-3 cursor-pointer hover:text-foreground"
                onClick={() => toggleStatusFilter(status)}
              />
            </Badge>
          ))}
          {filters.category.map((category) => (
            <Badge key={category} variant="secondary" className="gap-1">
              {getCategoryDisplayName(category)}
              <X
                className="h-3 w-3 cursor-pointer hover:text-foreground"
                onClick={() => toggleCategoryFilter(category)}
              />
            </Badge>
          ))}
          {filters.journeyStage.map((stage) => (
            <Badge key={stage} variant="secondary" className="gap-1">
              {stageLabels[stage]}
              <X
                className="h-3 w-3 cursor-pointer hover:text-foreground"
                onClick={() => toggleStageFilter(stage)}
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};
