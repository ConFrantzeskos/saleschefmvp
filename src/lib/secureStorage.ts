
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
      const encodedValue = secureStorage.encode(value);
      localStorage.setItem(STORAGE_KEY_PREFIX + key, encodedValue);
    } catch (error) {
      console.warn('Failed to store secure item:', error);
    }
  },

  getItem: (key: string): string | null => {
    try {
      const encodedValue = localStorage.getItem(STORAGE_KEY_PREFIX + key);
      return encodedValue ? secureStorage.decode(encodedValue) : null;
    } catch (error) {
      console.warn('Failed to retrieve secure item:', error);
      return null;
    }
  },

  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(STORAGE_KEY_PREFIX + key);
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

  try {
    const urlObj = new URL(url);
    
    // Check if it's a Zapier webhook
    if (!urlObj.hostname.includes('hooks.zapier.com')) {
      return { isValid: false, error: 'Only Zapier webhook URLs are supported' };
    }

    if (urlObj.protocol !== 'https:') {
      return { isValid: false, error: 'Webhook URL must use HTTPS' };
    }

    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
};
