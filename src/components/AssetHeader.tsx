
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';

interface Asset {
  id: number;
  sku: string;
  name: string;
  brand: string;
  category: string;
  status: string;
  quality: number;
}

interface AssetHeaderProps {
  asset: Asset;
}

const AssetHeader = ({ asset }: AssetHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center space-x-4 mb-6">
      <Button variant="outline" onClick={() => navigate('/review')} className="relative z-50">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Assets
      </Button>
      <div className="flex-1">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-semibold">CD1234 24 Hour Charge Wireless Headphones | Bluetooth 5.0 | Foldable | Mic</h1>
          <Badge variant={asset.status === 'Enhanced' ? 'default' : 'secondary'}>
            {asset.status}
          </Badge>
        </div>
        <p className="text-muted-foreground">SKU: {asset.sku} | Quality Score: {asset.quality}%</p>
      </div>
      <Button className="relative z-50">
        Approve Content
      </Button>
    </div>
  );
};

export default AssetHeader;
