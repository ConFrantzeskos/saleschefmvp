
import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import ProgressIndicator from '@/components/ProgressIndicator';
import { Upload, FileText, Database, Link } from 'lucide-react';
import { cn } from '@/lib/utils';

const FileUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadMessage, setUploadMessage] = useState('');
  const navigate = useNavigate();

  const steps = [
    { id: 'upload', label: 'Upload', completed: false, current: true },
    { id: 'mapping', label: 'Map Fields', completed: false, current: false },
    { id: 'clean', label: 'Clean Data', completed: false, current: false },
    { id: 'generate', label: 'Generate', completed: false, current: false },
    { id: 'review', label: 'Review', completed: false, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

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
    if (files.length > 0) {
      simulateUpload(files[0]);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      simulateUpload(files[0]);
    }
  };

  const simulateUpload = (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);
    setUploadMessage('Preparing upload...');

    const messages = [
      'Analyzing file structure...',
      'Detecting data format...',
      'Validating content...',
      'Processing complete!'
    ];

    let messageIndex = 0;
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const newProgress = prev + 25;
        if (newProgress <= 100) {
          setUploadMessage(messages[messageIndex] || 'Processing...');
          messageIndex++;
          
          if (newProgress === 100) {
            clearInterval(interval);
            setTimeout(() => navigate('/mapping'), 1000);
          }
        }
        return newProgress;
      });
    }, 800);
  };

  if (isUploading) {
    return (
      <div className="min-h-screen bg-background p-6">
        <ProgressIndicator steps={steps} />
        
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-semibold">Processing Your File</h1>
            <div className="space-y-4">
              <Progress value={uploadProgress} className="w-full h-3" />
              <p className="text-lg text-muted-foreground">{uploadMessage}</p>
              <p className="text-sm text-muted-foreground">{uploadProgress}% complete</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <ProgressIndicator steps={steps} />
      
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-4">Drop your product data here</h1>
          <p className="text-lg text-muted-foreground">
            CSV, XLS, ZIP, PDF, URL list, ERP export — SalesChef handles it all.
          </p>
        </div>

        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer",
            isDragging 
              ? "border-primary bg-primary/5" 
              : "border-muted-foreground/25 hover:border-primary/50"
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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Database className="w-4 h-4" />
            <span>CSV, Excel files</span>
          </div>
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4" />
            <span>PDF catalogs</span>
          </div>
          <div className="flex items-center space-x-2">
            <Link className="w-4 h-4" />
            <span>URL lists</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
