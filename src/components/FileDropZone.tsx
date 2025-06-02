
import React, { useCallback, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { validateFile } from '@/lib/validation';

interface FileDropZoneProps {
  onFileSelect: (file: File) => void;
}

const FileDropZone = ({ onFileSelect }: FileDropZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileValidation = useCallback((file: File) => {
    setError(null);
    
    const validation = validateFile(file);
    if (!validation.isValid) {
      setError(validation.error || 'Invalid file');
      return false;
    }
    
    return true;
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 1) {
      setError('Please upload only one file at a time');
      return;
    }
    
    if (files.length > 0 && handleFileValidation(files[0])) {
      onFileSelect(files[0]);
    }
  }, [onFileSelect, handleFileValidation]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (handleFileValidation(files[0])) {
        onFileSelect(files[0]);
      }
    }
  };

  return (
    <div>
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer",
          isDragging 
            ? "border-primary bg-primary/5" 
            : "border-muted-foreground/25 hover:border-primary/50",
          error && "border-red-300 bg-red-50"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-input')?.click()}
      >
        <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-xl font-medium mb-2">
          {isDragging ? 'Drop your file here' : 'Drag & drop your file here'}
        </h3>
        <p className="text-muted-foreground mb-4">
          or click to browse your files
        </p>
        <p className="text-sm text-muted-foreground mb-4">
          Supported formats: CSV, Excel, ZIP, PDF, TXT (max 100MB)
        </p>
        
        <input
          id="file-input"
          type="file"
          className="hidden"
          onChange={handleFileSelect}
          accept=".csv,.xlsx,.xls,.zip,.pdf,.txt"
        />
        
        <Button variant="outline" className="mt-4">
          Choose File
        </Button>
      </div>
      
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-600" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}
    </div>
  );
};

export default FileDropZone;
