// Simple encryption utility for client-side storage
// Note: This provides basic obfuscation, not cryptographic security
const STORAGE_KEY_PREFIX = 'saleschef_secure_';

export const secureStorage = {
  // Basic encoding for webhook URLs (not cryptographically secure)
  encode: (value: string): string => {
    try {
      return btoa(encodeURIComponent(value));
    } catch {
      return value;
    }
  },

  decode: (encodedValue: string): string => {
    try {
      return decodeURIComponent(atob(encodedValue));
    } catch {
      return encodedValue;
    }
  },

  setItem: (key: string, value: string): void => {
    try {
      // Additional validation for webhook URLs
      if (key === 'zapier_webhook_url') {
        const validation = validateWebhookUrl(value);
        if (!validation.isValid) {
          throw new Error(validation.error || 'Invalid webhook URL');
        }
      }

      const encodedValue = secureStorage.encode(value);
      localStorage.setItem(STORAGE_KEY_PREFIX + key, encodedValue);
      
      // Log security event for webhook URL changes
      if (import.meta.env.DEV && key === 'zapier_webhook_url') {
        console.log('🔐 Webhook URL updated securely');
      }
    } catch (error) {
      console.warn('Failed to store secure item:', error);
      throw error;
    }
  },

  getItem: (key: string): string | null => {
    try {
      const encodedValue = localStorage.getItem(STORAGE_KEY_PREFIX + key);
      const decodedValue = encodedValue ? secureStorage.decode(encodedValue) : null;
      
      // Additional validation on retrieval for webhook URLs
      if (decodedValue && key === 'zapier_webhook_url') {
        const validation = validateWebhookUrl(decodedValue);
        if (!validation.isValid) {
          console.warn('Stored webhook URL is invalid, removing:', validation.error);
          secureStorage.removeItem(key);
          return null;
        }
      }
      
      return decodedValue;
    } catch (error) {
      console.warn('Failed to retrieve secure item:', error);
      return null;
    }
  },

  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(STORAGE_KEY_PREFIX + key);
      
      if (import.meta.env.DEV && key === 'zapier_webhook_url') {
        console.log('🔐 Webhook URL removed securely');
      }
    } catch (error) {
      console.warn('Failed to remove secure item:', error);
    }
  }
};

// Validate webhook URL format
export const validateWebhookUrl = (url: string): { isValid: boolean; error?: string } => {
  if (!url) {
    return { isValid: false, error: 'Webhook URL is required' };
  }

  // Check for obviously hardcoded test URLs
  if (url.includes('2266471/uyt9ob0')) {
    return { isValid: false, error: 'Please replace the example webhook URL with your own' };
  }

  try {
    const urlObj = new URL(url);
    
    // Check if it's a Zapier webhook
    if (!urlObj.hostname.includes('hooks.zapier.com')) {
      return { isValid: false, error: 'Only Zapier webhook URLs are supported' };
    }

    if (urlObj.protocol !== 'https:') {
      return { isValid: false, error: 'Webhook URL must use HTTPS' };
    }

    // Additional security: check for proper webhook path structure
    const pathParts = urlObj.pathname.split('/');
    if (pathParts.length < 4 || !pathParts.includes('catch')) {
      return { isValid: false, error: 'Invalid Zapier webhook URL format' };
    }

    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
};
