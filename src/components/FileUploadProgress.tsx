
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface FileUploadProgressProps {
  progress: number;
  message: string;
}

const FileUploadProgress = ({ progress, message }: FileUploadProgressProps) => {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-3xl font-semibold">Processing Your File</h1>
      <div className="space-y-4">
        <Progress value={progress} className="w-full h-3" />
        <p className="text-lg text-muted-foreground">{message}</p>
        <p className="text-sm text-muted-foreground">{progress}% complete</p>
      </div>
    </div>
  );
};

export default FileUploadProgress;
