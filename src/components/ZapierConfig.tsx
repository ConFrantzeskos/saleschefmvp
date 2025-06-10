
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Copy, ExternalLink, Shield, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { useSecureWebhook } from '@/hooks/useSecureWebhook';
import { sanitizeInput } from '@/lib/validation';

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

  const copyWebhookFormat = () => {
    const samplePayload = JSON.stringify({
      email: "user@example.com",
      timestamp: "2025-01-01T12:00:00.000Z",
      source: "/homepage",
      user_agent: "Mozilla/5.0...",
      form_type: "email_capture"
    }, null, 2);
    
    navigator.clipboard.writeText(samplePayload);
    toast.success('Sample payload copied to clipboard!');
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
          {/* Enhanced Security Warning */}
          <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-yellow-800 mb-1">Security Notice</p>
              <p className="text-yellow-700 mb-2">
                Webhook URLs contain sensitive information and should never be hardcoded in source code.
                This configuration uses encrypted local storage for security.
              </p>
            </div>
          </div>

          {/* Success Message for Secure Configuration */}
          {isConfigured && !validationError && (
            <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-green-800 mb-1">✅ Webhook Active</p>
                <p className="text-green-700">
                  Your webhook URL is configured and validated. All email submissions from forms will be automatically sent to your Zap.
                </p>
              </div>
            </div>
          )}

          {/* Validation Error Display */}
          {validationError && (
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-red-800 mb-1">Configuration Error</p>
                <p className="text-red-700">{validationError}</p>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="webhook">Zapier Webhook URL</Label>
            <Input
              id="webhook"
              type="url"
              placeholder="https://hooks.zapier.com/hooks/catch/YOUR_ID/YOUR_KEY"
              value={inputValue}
              onChange={handleUrlChange}
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
              onClick={handleSave} 
              className="flex-1" 
              disabled={!inputValue.trim() || !!validationError}
            >
              <Shield className="w-4 h-4 mr-2" />
              Save Webhook Configuration
            </Button>
            
            {isConfigured && (
              <Button 
                onClick={handleRemove} 
                variant="outline"
                className="px-4"
              >
                Remove
              </Button>
            )}
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">Email Payload Format</h4>
              <Button onClick={copyWebhookFormat} variant="ghost" size="sm">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <pre className="text-sm text-muted-foreground overflow-x-auto">
{`{
  "email": "user@example.com",
  "timestamp": "2025-01-01T12:00:00.000Z",
  "source": "/homepage",
  "user_agent": "Mozilla/5.0...",
  "form_type": "email_capture"
}`}
            </pre>
          </div>

          <div className="text-sm text-muted-foreground">
            <p><strong>Setup Instructions:</strong></p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Create a new Zap in Zapier</li>
              <li>Choose "Webhooks by Zapier" as the trigger</li>
              <li>Select "Catch Hook" as the trigger event</li>
              <li>Copy the webhook URL and paste it above</li>
              <li>Save the configuration</li>
              <li>Connect your desired action (Google Sheets, Email, etc.)</li>
              <li>Turn your Zap ON</li>
              <li>Submit an email through any form to test the integration</li>
            </ol>
          </div>

          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>💡 How it works:</strong> Once configured, every email submitted through any form on SalesChef will automatically trigger your Zap with the email data. Check your Zap history to see incoming emails.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ZapierConfig;
