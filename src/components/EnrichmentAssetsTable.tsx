
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Edit } from 'lucide-react';
import { EnrichmentAsset } from '@/types/enrichmentAsset';

interface EnrichmentAssetsTableProps {
  assets: EnrichmentAsset[];
}

const EnrichmentAssetsTable = ({ assets }: EnrichmentAssetsTableProps) => {
  const navigate = useNavigate();

  const handleViewAsset = (assetId: number) => {
    navigate(`/enrichment-review/${assetId}`);
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[100px]">Asset</TableHead>
            <TableHead className="min-w-[200px]">Product Name</TableHead>
            <TableHead className="min-w-[150px]">Category</TableHead>
            <TableHead className="min-w-[100px]">Brand</TableHead>
            <TableHead className="min-w-[150px]">Search Trends</TableHead>
            <TableHead className="min-w-[150px]">Customer Sentiment</TableHead>
            <TableHead className="min-w-[150px]">Social Mentions</TableHead>
            <TableHead className="min-w-[150px]">Competitor Analysis</TableHead>
            <TableHead className="min-w-[150px]">SEO Opportunities</TableHead>
            <TableHead className="min-w-[150px]">Target Audience</TableHead>
            <TableHead className="min-w-[150px]">Key Features</TableHead>
            <TableHead className="min-w-[100px]">Status</TableHead>
            <TableHead className="min-w-[100px]">Quality</TableHead>
            <TableHead className="min-w-[100px]">Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((asset) => (
            <TableRow 
              key={asset.id} 
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => handleViewAsset(asset.id)}
            >
              <TableCell className="font-mono">{asset.sku}</TableCell>
              <TableCell className="font-medium max-w-[200px] truncate">{asset.name}</TableCell>
              <TableCell className="max-w-[150px] truncate">{asset.category}</TableCell>
              <TableCell>{asset.brand}</TableCell>
              <TableCell className="max-w-[150px] truncate">{asset.searchTrends}</TableCell>
              <TableCell className="max-w-[150px] truncate">{asset.customerSentiment}</TableCell>
              <TableCell className="max-w-[150px] truncate">{asset.socialMentions}</TableCell>
              <TableCell className="max-w-[150px] truncate">{asset.competitorAnalysis}</TableCell>
              <TableCell className="max-w-[150px] truncate">{asset.seoOpportunities}</TableCell>
              <TableCell className="max-w-[150px] truncate">{asset.targetAudience}</TableCell>
              <TableCell className="max-w-[150px] truncate">{asset.keyFeatures}</TableCell>
              <TableCell>
                <Badge variant={asset.status === 'Enriched' ? 'default' : 'secondary'}>
                  {asset.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${asset.quality}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{asset.quality}%</span>
                </div>
              </TableCell>
              <TableCell>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add edit functionality here
                  }}
                >
                  <Edit className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EnrichmentAssetsTable;
