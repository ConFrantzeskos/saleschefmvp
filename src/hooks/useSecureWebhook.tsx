
import { useState, useEffect } from 'react';
import { secureStorage, validateWebhookUrl } from '@/lib/secureStorage';
import { sanitizeInput } from '@/lib/validation';

export const useSecureWebhook = () => {
  const [webhookUrl, setWebhookUrl] = useState<string>('');
  const [isConfigured, setIsConfigured] = useState<boolean>(false);

  useEffect(() => {
    // Load webhook URL from secure storage on mount
    const storedUrl = secureStorage.getItem('zapier_webhook_url');
    if (storedUrl) {
      setWebhookUrl(storedUrl);
      setIsConfigured(true);
    }
  }, []);

  const updateWebhookUrl = (url: string): { success: boolean; error?: string } => {
    try {
      const sanitizedUrl = sanitizeInput(url);
      const validation = validateWebhookUrl(sanitizedUrl);
      
      if (!validation.isValid) {
        return { success: false, error: validation.error };
      }

      secureStorage.setItem('zapier_webhook_url', sanitizedUrl);
      setWebhookUrl(sanitizedUrl);
      setIsConfigured(true);
      
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to update webhook URL' 
      };
    }
  };

  const removeWebhookUrl = (): void => {
    secureStorage.removeItem('zapier_webhook_url');
    setWebhookUrl('');
    setIsConfigured(false);
  };

  const getValidatedWebhookUrl = (): string | null => {
    if (!webhookUrl) return null;
    
    const validation = validateWebhookUrl(webhookUrl);
    return validation.isValid ? webhookUrl : null;
  };

  return {
    webhookUrl,
    isConfigured,
    updateWebhookUrl,
    removeWebhookUrl,
    getValidatedWebhookUrl
  };
};
