
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Shield, CheckCircle } from 'lucide-react';
import { useSecureWebhook } from '@/hooks/useSecureWebhook';
import { sanitizeInput } from '@/lib/validation';

import SecurityWarning from '@/components/zapier/SecurityWarning';
import WebhookStatusCard from '@/components/zapier/WebhookStatusCard';
import WebhookForm from '@/components/zapier/WebhookForm';
import PayloadInfo from '@/components/zapier/PayloadInfo';
import SetupInstructions from '@/components/zapier/SetupInstructions';

const ZapierConfig = () => {
  const { webhookUrl, isConfigured, updateWebhookUrl, removeWebhookUrl } = useSecureWebhook();
  const [inputValue, setInputValue] = useState('');
  const [lastSave, setLastSave] = useState<number>(0);
  const [validationError, setValidationError] = useState<string>('');

  // Sync input value with stored webhook URL on mount and when it changes
  useEffect(() => {
    setInputValue(webhookUrl);
    setValidationError('');
  }, [webhookUrl]);

  const handleSave = () => {
    // Rate limiting - prevent rapid saves
    const now = Date.now();
    if (now - lastSave < 2000) {
      toast.error('Please wait before saving again');
      return;
    }

    const sanitizedUrl = sanitizeInput(inputValue);
    
    if (!sanitizedUrl.trim()) {
      setValidationError('Webhook URL is required');
      toast.error('Webhook URL is required');
      return;
    }

    const result = updateWebhookUrl(sanitizedUrl);
    
    if (result.success) {
      setLastSave(now);
      setValidationError('');
      toast.success('Zapier webhook URL saved! All email submissions will now be sent to your Zap.');
      
      if (import.meta.env.DEV) {
        console.log('Webhook URL configuration updated');
      }
    } else {
      setValidationError(result.error || 'Failed to save webhook URL');
      toast.error(result.error || 'Failed to save webhook URL');
    }
  };

  const handleRemove = () => {
    removeWebhookUrl();
    setInputValue('');
    setValidationError('');
    toast.success('Webhook URL removed');
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = sanitizeInput(e.target.value);
    setInputValue(sanitized);
    
    // Clear validation error when user starts typing
    if (validationError) {
      setValidationError('');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Zapier Integration Setup
            {isConfigured && <CheckCircle className="w-5 h-5 text-green-600" />}
          </CardTitle>
          <CardDescription>
            Configure your Zapier webhook to receive email submissions from SalesChef
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <SecurityWarning />
          
          <WebhookStatusCard 
            isConfigured={isConfigured} 
            validationError={validationError} 
          />

          <WebhookForm
            inputValue={inputValue}
            validationError={validationError}
            isConfigured={isConfigured}
            onUrlChange={handleUrlChange}
            onSave={handleSave}
            onRemove={handleRemove}
          />

          <PayloadInfo />

          <SetupInstructions />
        </CardContent>
      </Card>
    </div>
  );
};

export default ZapierConfig;
