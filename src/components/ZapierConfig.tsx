
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Copy, ExternalLink, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { secureStorage, validateWebhookUrl } from '@/lib/secureStorage';
import { sanitizeInput } from '@/lib/validation';

const ZapierConfig = () => {
  const [webhookUrl, setWebhookUrl] = useState(
    secureStorage.getItem('zapier_webhook_url') || ''
  );
  const [lastSave, setLastSave] = useState<number>(0);
  const [isTestingWebhook, setIsTestingWebhook] = useState(false);

  const handleSave = () => {
    // Rate limiting - prevent rapid saves
    const now = Date.now();
    if (now - lastSave < 2000) {
      toast.error('Please wait before saving again');
      return;
    }

    const sanitizedUrl = sanitizeInput(webhookUrl);
    const validation = validateWebhookUrl(sanitizedUrl);
    
    if (!validation.isValid) {
      toast.error(validation.error || 'Invalid webhook URL');
      return;
    }

    secureStorage.setItem('zapier_webhook_url', sanitizedUrl);
    setLastSave(now);
    toast.success('Zapier webhook URL saved securely!');
    
    if (import.meta.env.DEV) {
      console.log('Webhook URL configuration updated');
    }
  };

  const handleTest = async () => {
    const sanitizedUrl = sanitizeInput(webhookUrl);
    const validation = validateWebhookUrl(sanitizedUrl);
    
    if (!validation.isValid) {
      toast.error(validation.error || 'Please enter a valid webhook URL first');
      return;
    }

    setIsTestingWebhook(true);
    
    try {
      const testPayload = {
        test: true,
        email: "test@saleschef.com",
        timestamp: new Date().toISOString(),
        source: "zapier_config_test",
        user_agent: navigator.userAgent,
        test_message: "This is a test from SalesChef Zapier configuration"
      };

      // Since we're using no-cors, we can't read the response
      // But we can still send the request
      await fetch(sanitizedUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(testPayload),
      });
      
      toast.success(
        'Test webhook sent successfully! Check your Zap history in Zapier to confirm it was received.',
        { duration: 6000 }
      );
      
      if (import.meta.env.DEV) {
        console.log('Test payload sent:', testPayload);
      }
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error testing webhook:', error);
      }
      toast.error('Failed to send test request. Please check your webhook URL.');
    } finally {
      setIsTestingWebhook(false);
    }
  };

  const copyWebhookFormat = () => {
    const samplePayload = JSON.stringify({
      email: "user@example.com",
      timestamp: "2025-01-01T12:00:00.000Z",
      source: "/homepage",
      user_agent: "Mozilla/5.0...",
      test: false
    }, null, 2);
    
    navigator.clipboard.writeText(samplePayload);
    toast.success('Sample payload copied to clipboard!');
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = sanitizeInput(e.target.value);
    setWebhookUrl(sanitized);
  };

  const isConfigured = !!secureStorage.getItem('zapier_webhook_url');

  return (
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
            <p className="text-yellow-700 text-xs">
              ⚠️ If you're migrating from a previous setup, make sure to remove any hardcoded webhook URLs from your codebase.
            </p>
          </div>
        </div>

        {/* Success Message for Secure Configuration */}
        {isConfigured && (
          <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-green-800 mb-1">✅ Webhook Configured</p>
              <p className="text-green-700">
                Your webhook URL is securely stored and validated. All email submissions will be sent to your Zap.
              </p>
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="webhook">Zapier Webhook URL</Label>
          <Input
            id="webhook"
            type="url"
            placeholder="https://hooks.zapier.com/hooks/catch/..."
            value={webhookUrl}
            onChange={handleUrlChange}
            maxLength={500}
          />
        </div>
        
        <div className="flex gap-2">
          <Button onClick={handleSave} className="flex-1">
            <Shield className="w-4 h-4 mr-2" />
            Save Configuration
          </Button>
          <Button 
            onClick={handleTest} 
            variant="outline" 
            disabled={!webhookUrl || isTestingWebhook}
          >
            {isTestingWebhook ? 'Testing...' : 'Test Webhook'}
          </Button>
        </div>

        <div className="p-4 bg-muted rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium">Expected Payload Format</h4>
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
  "test": false
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
            <li>Save the configuration and test it</li>
            <li>Connect your desired action (Google Sheets, Email, etc.)</li>
            <li>Check your Zap history to confirm the test was received</li>
          </ol>
        </div>

        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>💡 Troubleshooting:</strong> If you're not receiving webhooks, check that your Zap is turned ON and verify the webhook URL is correct. The test button will help you confirm the connection is working.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ZapierConfig;
