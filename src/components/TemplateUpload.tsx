
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TemplateUploadProps {
  onTemplateSelect: (file: File) => void;
  selectedTemplate: File | null;
  onRemoveTemplate: () => void;
}

const TemplateUpload = ({ onTemplateSelect, selectedTemplate, onRemoveTemplate }: TemplateUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      onTemplateSelect(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onTemplateSelect(files[0]);
    }
  };

  if (selectedTemplate) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Template Uploaded
            <Button
              variant="ghost"
              size="sm"
              onClick={onRemoveTemplate}
              className="text-muted-foreground hover:text-destructive"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
            <FileText className="w-8 h-8 text-primary" />
            <div>
              <p className="font-medium">{selectedTemplate.name}</p>
              <p className="text-sm text-muted-foreground">
                {(selectedTemplate.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Style Guide or Template</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer",
            isDragging 
              ? "border-primary bg-primary/5" 
              : "border-muted-foreground/25 hover:border-primary/50"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('template-input')?.click()}
        >
          <Upload className="w-8 h-8 mx-auto mb-3 text-muted-foreground" />
          <h3 className="font-medium mb-2">
            {isDragging ? 'Drop your template here' : 'Upload your brand template'}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Style guide, tone of voice, CSS, brand guidelines, or any blueprint
          </p>
          <p className="text-xs text-muted-foreground mb-4">
            Supported: PDF, DOCX, TXT, CSS, JSON (max 50MB)
          </p>
          
          <input
            id="template-input"
            type="file"
            className="hidden"
            onChange={handleFileSelect}
            accept=".pdf,.docx,.txt,.css,.json"
          />
          
          <Button variant="outline">
            Choose Template
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemplateUpload;
