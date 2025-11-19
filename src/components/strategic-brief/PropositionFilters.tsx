import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Users, FileText } from 'lucide-react';

interface PropositionFiltersProps {
  audienceFilter: string;
  contentTypeFilter: string;
  onAudienceChange: (value: string) => void;
  onContentTypeChange: (value: string) => void;
  filteredCount: number;
  totalCount: number;
}

const PropositionFilters = ({
  audienceFilter,
  contentTypeFilter,
  onAudienceChange,
  onContentTypeChange,
  filteredCount,
  totalCount
}: PropositionFiltersProps) => {
  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-muted/30 rounded-lg border border-border">
      <div className="flex items-center gap-2">
        <Users className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-foreground">Target:</span>
        <Select value={audienceFilter} onValueChange={onAudienceChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Audiences" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Audiences</SelectItem>
            <SelectItem value="business">Business Travelers</SelectItem>
            <SelectItem value="gamers">Gamers</SelectItem>
            <SelectItem value="budget">Budget Shoppers</SelectItem>
            <SelectItem value="professionals">Remote Workers</SelectItem>
            <SelectItem value="commuters">Daily Commuters</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <FileText className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm font-medium text-foreground">Content:</span>
        <Select value={contentTypeFilter} onValueChange={onContentTypeChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Content Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Content Types</SelectItem>
            <SelectItem value="product">Product Pages</SelectItem>
            <SelectItem value="ads">Paid Ads</SelectItem>
            <SelectItem value="email">Email Marketing</SelectItem>
            <SelectItem value="social">Social Media</SelectItem>
            <SelectItem value="sales">Sales Collateral</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {(audienceFilter !== 'all' || contentTypeFilter !== 'all') && (
        <Badge variant="secondary" className="ml-auto">
          Showing {filteredCount} of {totalCount} propositions
        </Badge>
      )}
    </div>
  );
};

export default PropositionFilters;
