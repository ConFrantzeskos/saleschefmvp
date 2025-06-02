
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Edit } from 'lucide-react';
import { Asset } from '@/types/asset';

interface AssetsTableProps {
  assets: Asset[];
}

const AssetsTable = ({ assets }: AssetsTableProps) => {
  const navigate = useNavigate();

  const handleViewAsset = (assetId: number) => {
    navigate(`/review/${assetId}`);
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
            <TableHead className="min-w-[80px]">Price</TableHead>
            <TableHead className="min-w-[200px]">Description</TableHead>
            <TableHead className="min-w-[150px]">Features</TableHead>
            <TableHead className="min-w-[150px]">Target Audience</TableHead>
            <TableHead className="min-w-[150px]">Key Benefits</TableHead>
            <TableHead className="min-w-[150px]">Competitive Advantage</TableHead>
            <TableHead className="min-w-[150px]">SEO Keywords</TableHead>
            <TableHead className="min-w-[200px]">Meta Title</TableHead>
            <TableHead className="min-w-[200px]">Meta Description</TableHead>
            <TableHead className="min-w-[150px]">Product Bullets</TableHead>
            <TableHead className="min-w-[150px]">Technical Specs</TableHead>
            <TableHead className="min-w-[150px]">Use Cases</TableHead>
            <TableHead className="min-w-[100px]">Warranty</TableHead>
            <TableHead className="min-w-[100px]">Certifications</TableHead>
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
              <TableCell className="font-medium">{asset.price}</TableCell>
              <TableCell className="max-w-[200px] truncate">{asset.description}</TableCell>
              <TableCell className="max-w-[150px] truncate">{asset.features}</TableCell>
              <TableCell className="max-w-[150px] truncate">{asset.targetAudience}</TableCell>
              <TableCell className="max-w-[150px] truncate">{asset.keyBenefits}</TableCell>
              <TableCell className="max-w-[150px] truncate">{asset.competitiveAdvantage}</TableCell>
              <TableCell className="max-w-[150px] truncate">{asset.seoKeywords}</TableCell>
              <TableCell className="max-w-[200px] truncate">{asset.metaTitle}</TableCell>
              <TableCell className="max-w-[200px] truncate">{asset.metaDescription}</TableCell>
              <TableCell className="max-w-[150px] truncate whitespace-pre-line">{asset.productBullets}</TableCell>
              <TableCell className="max-w-[150px] truncate whitespace-pre-line">{asset.technicalSpecs}</TableCell>
              <TableCell className="max-w-[150px] truncate">{asset.useCases}</TableCell>
              <TableCell>{asset.warranty}</TableCell>
              <TableCell>{asset.certifications}</TableCell>
              <TableCell>
                <Badge variant={asset.status === 'Enhanced' ? 'default' : 'secondary'}>
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

export default AssetsTable;
