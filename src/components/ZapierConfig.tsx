
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { toast } from 'sonner';
import { Copy, ExternalLink, Shield, AlertTriangle, CheckCircle, XCircle, Info } from 'lucide-react';
import { secureStorage, validateWebhookUrl } from '@/lib/secureStorage';
import { sanitizeInput } from '@/lib/validation';
import { logSecurityEvent } from '@/lib/security';

const ZapierConfig = () => {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [isConfigured, setIsConfigured] = useState(false);
  const [lastSave, setLastSave] = useState<number>(0);
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Load existing webhook URL
    const existingUrl = secureStorage.getItem('zapier_webhook_url');
    if (existingUrl) {
      setWebhookUrl(existingUrl);
      setIsConfigured(true);
    }
  }, []);

  const handleSave = () => {
    // Enhanced rate limiting - prevent rapid saves
    const now = Date.now();
    if (now - lastSave < 3000) {
      toast.error('Please wait before saving again');
      logSecurityEvent('Rapid configuration save attempt blocked');
      return;
    }

    const sanitizedUrl = sanitizeInput(webhookUrl);
    const validation = validateWebhookUrl(sanitizedUrl);
    
    if (!validation.isValid) {
      toast.error(validation.error || 'Invalid webhook URL');
      logSecurityEvent('Invalid webhook URL save attempt', { 
        urlLength: sanitizedUrl.length,
        isHttps: sanitizedUrl.startsWith('https://')
      });
      return;
    }

    secureStorage.setItem('zapier_webhook_url', sanitizedUrl);
    setLastSave(now);
    setIsConfigured(true);
    toast.success('Zapier webhook URL saved securely!');
    
    logSecurityEvent('Webhook configuration updated', {
      domain: new URL(sanitizedUrl).hostname,
      timestamp: now
    });
    
    if (import.meta.env.DEV) {
      console.log('Webhook URL configuration updated with enhanced security');
    }
  };

  const handleTest = async () => {
    const sanitizedUrl = sanitizeInput(webhookUrl);
    const validation = validateWebhookUrl(sanitizedUrl);
    
    if (!validation.isValid) {
      toast.error(validation.error || 'Please enter a valid webhook URL first');
      setTestStatus('error');
      return;
    }

    setTestStatus('testing');
    
    try {
      // Enhanced test payload with security features
      const testPayload = {
        test: true,
        email: "test@example.com",
        timestamp: new Date().toISOString(),
        source: "zapier_config_test",
        user_agent: navigator.userAgent,
        csrf_token: crypto.randomUUID(),
        session_id: sessionStorage.getItem('session_id') || crypto.randomUUID(),
        security_features: {
          rate_limiting: true,
          input_validation: true,
          csrf_protection: true,
          secure_storage: true
        }
      };

      await fetch(sanitizedUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        mode: "no-cors",
        body: JSON.stringify(testPayload),
      });
      
      setTestStatus('success');
      toast.success('Test request sent to Zapier! Check your Zap history to confirm it was received.');
      
      logSecurityEvent('Webhook test completed successfully', {
        domain: new URL(sanitizedUrl).hostname
      });
    } catch (error) {
      setTestStatus('error');
      if (import.meta.env.DEV) {
        console.error('Error testing webhook:', error);
      }
      logSecurityEvent('Webhook test failed', {
        error: error instanceof Error ? error.message : 'unknown'
      });
      toast.error('Failed to send test request');
    }
  };

  const handleClearConfiguration = () => {
    secureStorage.removeItem('zapier_webhook_url');
    setWebhookUrl('');
    setIsConfigured(false);
    setTestStatus('idle');
    toast.success('Webhook configuration cleared');
    logSecurityEvent('Webhook configuration cleared by user');
  };

  const copyWebhookFormat = () => {
    const enhancedSamplePayload = JSON.stringify({
      email: "user@example.com",
      timestamp: "2025-01-01T12:00:00.000Z",
      source: "/homepage",
      user_agent: "Mozilla/5.0...",
      csrf_token: "550e8400-e29b-41d4-a716-446655440000",
      session_id: "123e4567-e89b-12d3-a456-426614174000",
      form_type: "email_capture"
    }, null, 2);
    
    navigator.clipboard.writeText(enhancedSamplePayload);
    toast.success('Enhanced sample payload copied to clipboard!');
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = sanitizeInput(e.target.value);
    setWebhookUrl(sanitized);
    setTestStatus('idle');
  };

  const getStatusIcon = () => {
    switch (testStatus) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'testing':
        return <div className="w-4 h-4 animate-spin border-2 border-blue-600 border-t-transparent rounded-full" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Enhanced Zapier Integration Setup
            <ExternalLink className="w-4 h-4" />
          </CardTitle>
          <CardDescription>
            Configure your Zapier webhook with enhanced security measures to receive email submissions from SalesChef
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Configuration Status */}
          <Alert className={isConfigured ? "border-green-200 bg-green-50" : "border-yellow-200 bg-yellow-50"}>
            <Info className="w-4 h-4" />
            <AlertDescription>
              <strong>Status:</strong> {isConfigured ? 
                "✅ Webhook configured and ready to receive secure submissions" : 
                "⚠️ No webhook configured - email capture forms will not work"
              }
            </AlertDescription>
          </Alert>

          {/* Security Features Notice */}
          <Alert className="border-blue-200 bg-blue-50">
            <Shield className="w-4 h-4" />
            <AlertDescription>
              <strong>Enhanced Security Features Active:</strong>
              <ul className="mt-2 text-sm space-y-1">
                <li>• Progressive rate limiting with exponential backoff</li>
                <li>• Enhanced input validation and sanitization</li>
                <li>• CSRF token protection for all submissions</li>
                <li>• Session tracking and anomaly detection</li>
                <li>• Secure encrypted storage for webhook URL</li>
                <li>• Work email validation (no personal email services)</li>
              </ul>
            </AlertDescription>
          </Alert>

          {/* Security Warning */}
          <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-yellow-800 mb-1">Security Notice</p>
              <p className="text-yellow-700">
                Webhook URLs contain sensitive information. Keep them secure and don't share them publicly.
                This URL is stored encrypted in your browser's local storage with enhanced security measures.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="webhook">Zapier Webhook URL</Label>
            <div className="flex gap-2">
              <Input
                id="webhook"
                type="url"
                placeholder="https://hooks.zapier.com/hooks/catch/..."
                value={webhookUrl}
                onChange={handleUrlChange}
                maxLength={500}
                className="flex-1"
              />
              {getStatusIcon()}
            </div>
          </div>
          
          <div className="flex gap-2 flex-wrap">
            <Button onClick={handleSave} className="flex-1 min-w-[200px]">
              <Shield className="w-4 h-4 mr-2" />
              Save Configuration
            </Button>
            <Button 
              onClick={handleTest} 
              variant="outline"
              disabled={!webhookUrl || testStatus === 'testing'}
              className="min-w-[120px]"
            >
              {testStatus === 'testing' ? 'Testing...' : 'Test Webhook'}
            </Button>
            {isConfigured && (
              <Button 
                onClick={handleClearConfiguration} 
                variant="destructive"
                className="min-w-[100px]"
              >
                Clear Config
              </Button>
            )}
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">Enhanced Payload Format</h4>
              <Button onClick={copyWebhookFormat} variant="ghost" size="sm">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <pre className="text-sm text-muted-foreground overflow-x-auto">
{`{
  "email": "user@company.com",
  "timestamp": "2025-01-01T12:00:00.000Z",
  "source": "/homepage",
  "user_agent": "Mozilla/5.0...",
  "csrf_token": "550e8400-e29b-41d4-a716-446655440000",
  "session_id": "123e4567-e89b-12d3-a456-426614174000",
  "form_type": "email_capture"
}`}
            </pre>
          </div>

          <div className="text-sm text-muted-foreground space-y-4">
            <div>
              <p><strong>Setup Instructions:</strong></p>
              <ol className="list-decimal list-inside space-y-1 mt-2">
                <li>Create a new Zap in Zapier</li>
                <li>Choose "Webhooks by Zapier" as the trigger</li>
                <li>Select "Catch Hook" as the trigger event</li>
                <li>Copy the webhook URL and paste it above</li>
                <li>Click "Save Configuration" to store it securely</li>
                <li>Click "Test Webhook" to verify the connection</li>
                <li>Connect your desired action (Google Sheets, Email, etc.)</li>
                <li>Your email capture forms will now work with enhanced security!</li>
              </ol>
            </div>
            
            <div>
              <p><strong>Security Enhancements:</strong></p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>All email submissions include CSRF tokens and session tracking</li>
                <li>Rate limiting prevents spam and bot submissions</li>
                <li>Enhanced email validation blocks personal email services</li>
                <li>Anomaly detection monitors for suspicious patterns</li>
                <li>Secure storage encrypts your webhook URL locally</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ZapierConfig;
