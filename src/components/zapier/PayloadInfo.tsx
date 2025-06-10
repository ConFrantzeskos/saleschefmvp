
import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

const PayloadInfo = () => {
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

  return (
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
  );
};

export default PayloadInfo;
