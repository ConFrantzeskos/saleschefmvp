
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressIndicator from '@/components/ProgressIndicator';
import FileDropZone from '@/components/FileDropZone';
import FileUploadProgress from '@/components/FileUploadProgress';
import SupportedFormats from '@/components/SupportedFormats';

const FileUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadMessage, setUploadMessage] = useState('');
  const navigate = useNavigate();

  const steps = [
    { id: 'upload', label: 'Upload', completed: false, current: true },
    { id: 'mapping', label: 'Map Fields', completed: false, current: false },
    { id: 'clean', label: 'Clean Data', completed: false, current: false },
    { id: 'enrich', label: 'Enrich', completed: false, current: false },
    { id: 'enhance', label: 'Enhance', completed: false, current: false },
    { id: 'generate', label: 'Generate', completed: false, current: false },
    { id: 'review', label: 'Review', completed: false, current: false },
    { id: 'deploy', label: 'Deploy', completed: false, current: false },
  ];

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
          <FileUploadProgress progress={uploadProgress} message={uploadMessage} />
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

        <FileDropZone onFileSelect={simulateUpload} />
        <SupportedFormats />
      </div>
    </div>
  );
};

export default FileUpload;
