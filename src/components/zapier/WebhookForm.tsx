
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Info } from 'lucide-react';

interface WebhookFormProps {
  inputValue: string;
  validationError: string;
  isConfigured: boolean;
  onUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onRemove: () => void;
}

const WebhookForm = ({ 
  inputValue, 
  validationError, 
  isConfigured, 
  onUrlChange, 
  onSave, 
  onRemove 
}: WebhookFormProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="webhook">Zapier Webhook URL</Label>
        <Input
          id="webhook"
          type="url"
          placeholder="https://hooks.zapier.com/hooks/catch/YOUR_ID/YOUR_KEY"
          value={inputValue}
          onChange={onUrlChange}
          maxLength={500}
          className={validationError ? 'border-red-300 focus:border-red-500' : ''}
        />
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <p>
            Get your webhook URL from Zapier by creating a new Zap with "Webhooks by Zapier" as the trigger and selecting "Catch Hook".
          </p>
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button 
          onClick={onSave} 
          className="flex-1" 
          disabled={!inputValue.trim() || !!validationError}
        >
          <Shield className="w-4 h-4 mr-2" />
          Save Webhook Configuration
        </Button>
        
        {isConfigured && (
          <Button 
            onClick={onRemove} 
            variant="outline"
            className="px-4"
          >
            Remove
          </Button>
        )}
      </div>
    </>
  );
};

export default WebhookForm;
