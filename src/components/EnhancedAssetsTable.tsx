import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle2 } from 'lucide-react';
import { EnhancedAsset } from '@/types/enhancedAsset';

interface EnhancedAssetsTableProps {
  assets: EnhancedAsset[];
}

const EnhancedAssetsTable = ({ assets }: EnhancedAssetsTableProps) => {
  const navigate = useNavigate();

  const getConfidenceBadge = (score: number) => {
    if (score >= 90) return { variant: 'default' as const, label: 'Excellent', className: 'bg-primary text-white' };
    if (score >= 75) return { variant: 'secondary' as const, label: 'Good', className: '' };
    return { variant: 'outline' as const, label: 'Fair', className: '' };
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[120px]">SKU</TableHead>
          <TableHead className="w-[130px]">Status</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead className="w-[280px]">Category</TableHead>
          <TableHead className="w-[150px]">Confidence</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {assets.map((asset, index) => {
          const badge = getConfidenceBadge(asset.confidenceScore);
          return (
            <TableRow
              key={asset.id}
              onClick={() => navigate(`/enhancement-review/${asset.id}`)}
              className="cursor-pointer hover:bg-muted/50 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TableCell className="font-mono text-sm text-muted-foreground">
                {asset.sku}
              </TableCell>
              <TableCell>
                <Badge variant={badge.variant} className={badge.className}>
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  {badge.label}
                </Badge>
              </TableCell>
              <TableCell className="font-medium">
                {asset.name}
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {asset.category} • {asset.brand}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Progress value={asset.confidenceScore} className="flex-1" />
                  <span className="text-sm font-medium w-10 text-right">
                    {asset.confidenceScore}%
                  </span>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default EnhancedAssetsTable;
