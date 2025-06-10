
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

// Enhanced webhook URL validation
export const validateWebhookUrl = (url: string): { isValid: boolean; error?: string } => {
  if (!url || url.trim() === '') {
    return { isValid: false, error: 'Webhook URL is required' };
  }

  const trimmedUrl = url.trim();

  // Check for common example/placeholder URLs
  const examplePatterns = [
    /example\.com/i,
    /placeholder/i,
    /your-webhook-url/i,
    /enter-your-url/i,
    /hooks\.zapier\.com\/hooks\/catch\/\d+\/example/i,
    /hooks\.zapier\.com\/hooks\/catch\/12345/i,
    /hooks\.zapier\.com\/hooks\/catch\/\d{7}\/[a-z0-9]{7}$/i // Very short or obviously fake IDs
  ];

  for (const pattern of examplePatterns) {
    if (pattern.test(trimmedUrl)) {
      return { isValid: false, error: 'Please replace the example webhook URL with your actual Zapier webhook URL' };
    }
  }

  try {
    const urlObj = new URL(trimmedUrl);
    
    // Check if it's a Zapier webhook
    if (!urlObj.hostname.includes('hooks.zapier.com')) {
      return { isValid: false, error: 'Only Zapier webhook URLs are supported (must be from hooks.zapier.com)' };
    }

    if (urlObj.protocol !== 'https:') {
      return { isValid: false, error: 'Webhook URL must use HTTPS' };
    }

    // Check for proper webhook path structure
    const pathParts = urlObj.pathname.split('/');
    if (pathParts.length < 5 || !pathParts.includes('catch')) {
      return { isValid: false, error: 'Invalid Zapier webhook URL format. Should be like: https://hooks.zapier.com/hooks/catch/YOUR_ID/YOUR_KEY' };
    }

    // Check for reasonable ID lengths (Zapier IDs are typically longer)
    const hookId = pathParts[pathParts.indexOf('catch') + 1];
    const hookKey = pathParts[pathParts.indexOf('catch') + 2];
    
    if (!hookId || hookId.length < 6) {
      return { isValid: false, error: 'Webhook URL appears to have an invalid hook ID. Please copy the complete URL from Zapier.' };
    }

    if (!hookKey || hookKey.length < 6) {
      return { isValid: false, error: 'Webhook URL appears to have an invalid hook key. Please copy the complete URL from Zapier.' };
    }

    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid URL format. Please enter a valid Zapier webhook URL.' };
  }
};
