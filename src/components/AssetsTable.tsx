
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle2 } from 'lucide-react';
import { Asset } from '@/types/asset';

interface AssetsTableProps {
  assets: Asset[];
}

const AssetsTable = ({ assets }: AssetsTableProps) => {
  const navigate = useNavigate();

  const handleViewAsset = (assetId: number) => {
    navigate(`/review/${assetId}`);
  };

  const getQualityBadge = (quality: number) => {
    if (quality >= 95) return { variant: 'default' as const, label: 'Excellent' };
    if (quality >= 85) return { variant: 'secondary' as const, label: 'Good' };
    return { variant: 'outline' as const, label: 'Fair' };
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">SKU</TableHead>
            <TableHead className="w-[130px]">Status</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead className="w-[280px]">Category</TableHead>
            <TableHead className="w-[100px]">Price</TableHead>
            <TableHead className="w-[150px]">Quality</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((asset, index) => {
            const qualityBadge = getQualityBadge(asset.quality);
            return (
              <TableRow 
                key={asset.id} 
                className="cursor-pointer hover:bg-muted/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.02}s` }}
                onClick={() => handleViewAsset(asset.id)}
              >
                <TableCell className="font-mono text-muted-foreground">
                  {asset.sku}
                </TableCell>
                <TableCell>
                  <Badge variant="default" className="gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Enhanced
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">
                  {asset.name}
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {asset.category} • {asset.brand}
                </TableCell>
                <TableCell className="font-medium">
                  {asset.price}
                </TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant={qualityBadge.variant} className="text-xs">
                        {qualityBadge.label}
                      </Badge>
                      <span className="text-sm font-medium">{asset.quality}%</span>
                    </div>
                    <Progress value={asset.quality} className="h-1.5" />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default AssetsTable;
