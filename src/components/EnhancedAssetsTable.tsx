import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye } from 'lucide-react';
import { EnhancedAsset } from '@/types/enhancedAsset';

interface EnhancedAssetsTableProps {
  assets: EnhancedAsset[];
}

const EnhancedAssetsTable = ({ assets }: EnhancedAssetsTableProps) => {
  const navigate = useNavigate();

  const getConfidenceBadge = (score: number) => {
    if (score >= 90) return <Badge className="bg-primary">High</Badge>;
    if (score >= 75) return <Badge variant="secondary">Medium</Badge>;
    return <Badge variant="outline">Low</Badge>;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-muted/50">
          <tr>
            <th className="text-left p-4 font-display font-semibold text-sm">SKU</th>
            <th className="text-left p-4 font-display font-semibold text-sm">Product Name</th>
            <th className="text-left p-4 font-display font-semibold text-sm">Persona Match</th>
            <th className="text-left p-4 font-display font-semibold text-sm">RTB Count</th>
            <th className="text-left p-4 font-display font-semibold text-sm">Message Strength</th>
            <th className="text-left p-4 font-display font-semibold text-sm">Confidence</th>
            <th className="text-left p-4 font-display font-semibold text-sm">Actions</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id} className="border-t hover:bg-muted/30 transition-colors">
              <td className="p-4">
                <span className="font-mono text-sm text-muted-foreground">{asset.sku}</span>
              </td>
              <td className="p-4">
                <div>
                  <div className="font-medium text-foreground">{asset.name}</div>
                  <div className="text-sm text-muted-foreground">{asset.category}</div>
                </div>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-muted rounded-full h-2 max-w-[100px]">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${asset.personaMatchScore}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{asset.personaMatchScore}%</span>
                </div>
              </td>
              <td className="p-4">
                <span className="font-semibold text-foreground">{asset.rtbCount}</span>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-muted rounded-full h-2 max-w-[100px]">
                    <div
                      className="bg-[hsl(var(--chart-2))] h-2 rounded-full transition-all"
                      style={{ width: `${asset.messageStrengthScore}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{asset.messageStrengthScore}%</span>
                </div>
              </td>
              <td className="p-4">
                {getConfidenceBadge(asset.confidenceScore)}
              </td>
              <td className="p-4">
                <Button
                  onClick={() => navigate(`/enhancement-review/${asset.id}`)}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <Eye className="w-4 h-4" />
                  View Brief
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnhancedAssetsTable;
