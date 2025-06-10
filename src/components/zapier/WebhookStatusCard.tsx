
import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

interface WebhookStatusCardProps {
  isConfigured: boolean;
  validationError: string;
}

const WebhookStatusCard = ({ isConfigured, validationError }: WebhookStatusCardProps) => {
  if (validationError) {
    return (
      <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <p className="font-medium text-red-800 mb-1">Configuration Error</p>
          <p className="text-red-700">{validationError}</p>
        </div>
      </div>
    );
  }

  if (isConfigured) {
    return (
      <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <p className="font-medium text-green-800 mb-1">✅ Webhook Active</p>
          <p className="text-green-700">
            Your webhook URL is configured and validated. All email submissions from forms will be automatically sent to your Zap.
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default WebhookStatusCard;
