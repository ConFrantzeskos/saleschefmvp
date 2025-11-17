import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

interface DataPreviewProps {
  fieldName: string;
  samples: string[];
}

const DataPreview = ({ fieldName, samples }: DataPreviewProps) => {
  if (samples.length === 0) return null;

  return (
    <Card className="bg-muted/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Preview: {fieldName}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {samples.slice(0, 3).map((sample, idx) => (
          <div key={idx} className="text-xs text-muted-foreground font-mono bg-background/50 p-2 rounded">
            {sample}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DataPreview;
