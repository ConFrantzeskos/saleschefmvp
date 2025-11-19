import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Upload, X, File, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface TemplateConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentTitle: string;
  existingVariants?: number;
  onSave: (files: File[]) => void;
}

const TemplateConfigModal = ({
  isOpen,
  onClose,
  contentTitle,
  existingVariants = 0,
  onSave
}: TemplateConfigModalProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    onSave(uploadedFiles);
    setUploadedFiles([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Configure Template: {contentTitle}</DialogTitle>
          <DialogDescription>
            Upload template files for this content type. You can upload multiple variants.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {existingVariants > 0 && (
            <div className="text-sm text-muted-foreground">
              Currently {existingVariants} variant{existingVariants > 1 ? 's' : ''} configured
            </div>
          )}

          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
            <input
              type="file"
              id="template-upload"
              className="hidden"
              multiple
              accept=".docx,.xlsx,.pptx,.pdf,.txt"
              onChange={handleFileUpload}
            />
            <label htmlFor="template-upload" className="cursor-pointer">
              <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm font-medium text-foreground mb-1">
                Click to upload template files
              </p>
              <p className="text-xs text-muted-foreground">
                Supports: DOCX, XLSX, PPTX, PDF, TXT
              </p>
            </label>
          </div>

          {uploadedFiles.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">
                Files to upload ({uploadedFiles.length}):
              </p>
              <div className="space-y-2">
                {uploadedFiles.map((file, index) => (
                  <Card key={index} className="p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <File className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-foreground">{file.name}</span>
                        <span className="text-xs text-muted-foreground">
                          ({(file.size / 1024).toFixed(1)} KB)
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                          onClick={() => handleRemoveFile(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={uploadedFiles.length === 0}>
              Save Templates
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TemplateConfigModal;
