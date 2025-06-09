
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Copy, ExternalLink } from 'lucide-react';

const ZapierConfig = () => {
  const [webhookUrl, setWebhookUrl] = useState(
    localStorage.getItem('zapier_webhook_url') || ''
  );

  const handleSave = () => {
    localStorage.setItem('zapier_webhook_url', webhookUrl);
    toast.success('Zapier webhook URL saved successfully!');
  };

  const handleTest = async () => {
    if (!webhookUrl) {
      toast.error('Please enter a webhook URL first');
      return;
    }

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          test: true,
          email: "test@example.com",
          timestamp: new Date().toISOString(),
          source: "zapier_config_test",
        }),
      });
      toast.success('Test request sent to Zapier! Check your Zap history to confirm it was received.');
    } catch (error) {
      console.error('Error testing webhook:', error);
      toast.error('Failed to send test request');
    }
  };

  const copyWebhookFormat = () => {
    const samplePayload = JSON.stringify({
      email: "user@example.com",
      timestamp: "2025-01-01T12:00:00.000Z",
      source: "/homepage",
      user_agent: "Mozilla/5.0..."
    }, null, 2);
    
    navigator.clipboard.writeText(samplePayload);
    toast.success('Sample payload copied to clipboard!');
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Zapier Integration Setup
          <ExternalLink className="w-4 h-4" />
        </CardTitle>
        <CardDescription>
          Configure your Zapier webhook to receive email submissions from SalesChef
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="webhook">Zapier Webhook URL</Label>
          <Input
            id="webhook"
            type="url"
            placeholder="https://hooks.zapier.com/hooks/catch/..."
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <Button onClick={handleSave} className="flex-1">
            Save Configuration
          </Button>
          <Button onClick={handleTest} variant="outline">
            Test Webhook
          </Button>
        </div>

        <div className="p-4 bg-muted rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium">Sample Payload Format</h4>
            <Button onClick={copyWebhookFormat} variant="ghost" size="sm">
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          <pre className="text-sm text-muted-foreground overflow-x-auto">
{`{
  "email": "user@example.com",
  "timestamp": "2025-01-01T12:00:00.000Z",
  "source": "/homepage",
  "user_agent": "Mozilla/5.0..."
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
            <li>Connect your desired action (Google Sheets, Email, etc.)</li>
            <li>Test the webhook using the button above</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
};

export default ZapierConfig;
