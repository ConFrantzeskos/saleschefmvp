
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileText } from 'lucide-react';

interface FactoryDataSectionProps {
  consolidatedRawData: string;
}

const FactoryDataSection = ({ consolidatedRawData }: FactoryDataSectionProps) => {
  return (
    <div className="flex flex-col">
      <Card className="flex-1 flex flex-col">
        <CardHeader className="flex-shrink-0">
          <CardTitle className="flex items-center space-x-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <FileText className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg">Original Factory Data</h3>
              <p className="text-sm text-muted-foreground font-normal">Raw CSV specifications from manufacturer</p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="border border-red-200 bg-red-50 p-4 rounded-md relative z-10">
              <pre className="text-sm text-red-600 font-mono whitespace-pre-wrap">
                {consolidatedRawData}
              </pre>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default FactoryDataSection;
