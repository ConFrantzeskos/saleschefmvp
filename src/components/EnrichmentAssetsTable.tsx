import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { EnrichmentAsset } from '@/types/enrichmentAsset';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';

interface EnrichmentAssetsTableProps {
  assets: EnrichmentAsset[];
}

const EnrichmentAssetsTable = ({ assets }: EnrichmentAssetsTableProps) => {
  const navigate = useNavigate();

  const handleViewAsset = (assetId: number) => {
    navigate(`/enrichment-review/${assetId}`);
  };

  return (
    <div className="border rounded-xl bg-card overflow-hidden animate-fade-in" style={{ animationDelay: '0.6s' }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">SKU</TableHead>
            <TableHead className="w-[120px]">Status</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead className="w-[300px]">Category</TableHead>
            <TableHead className="w-[200px]">Data Quality</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((asset, index) => (
            <TableRow
              key={asset.id}
              onClick={() => handleViewAsset(asset.id)}
              className="cursor-pointer hover:bg-muted/50 transition-colors animate-fade-in"
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
            >
              <TableCell>
                <span className="font-mono text-sm text-muted-foreground">
                  {asset.sku}
                </span>
              </TableCell>
              <TableCell>
                <Badge variant="default" className="gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {asset.status}
                </Badge>
              </TableCell>
              <TableCell>
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {asset.name}
                </span>
              </TableCell>
              <TableCell>
                <div className="text-sm text-muted-foreground">
                  {asset.category} • {asset.brand}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Progress value={asset.quality} className="flex-1" />
                  <span className="text-sm font-semibold text-primary min-w-[3ch]">
                    {asset.quality}%
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default EnrichmentAssetsTable;
