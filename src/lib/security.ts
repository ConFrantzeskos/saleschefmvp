// Content Security Policy configuration
export const getCSPHeader = (isDevelopment: boolean = false): string => {
  const baseDirectives = [
    "default-src 'self'",
    "style-src 'self' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https:",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
  ];

  // Add development-specific directives for hot reload
  if (isDevelopment) {
    baseDirectives.push(
      "script-src 'self' 'unsafe-eval'", // Required for Vite hot reload
      "connect-src 'self' ws: wss: https:" // WebSocket for hot reload
    );
  } else {
    baseDirectives.push("script-src 'self'"); // Strict for production
  }
  
  return baseDirectives.join('; ');
};

// Security headers for production deployment
export const securityHeaders = {
  'Content-Security-Policy': getCSPHeader(false),
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
};

// Utility to check if running in secure context
export const isSecureContext = (): boolean => {
  return window.isSecureContext || window.location.protocol === 'https:' || window.location.hostname === 'localhost';
};

// Enhanced security validation
export const validateSecureContext = (): void => {
  if (!isSecureContext() && import.meta.env.PROD) {
    console.error('🚨 Security Error: Application must run over HTTPS in production');
    // Could redirect to HTTPS or show security warning to user
  }
};

// Log security warnings and status
export const logSecurityWarnings = (): void => {
  if (import.meta.env.DEV) {
    console.log('🛡️ Security Status Check:');
    
    if (!isSecureContext()) {
      console.warn('⚠️ Security Warning: Application is not running in a secure context (HTTPS)');
    } else {
      console.log('✅ Secure context: HTTPS enabled');
    }
    
    console.log('✅ Security features enabled:');
    console.log('  - Input validation with Zod schemas');
    console.log('  - File upload security checks');
    console.log('  - Email validation for work domains');
    console.log('  - Rate limiting on form submissions');
    console.log('  - Strengthened Content Security Policy');
    console.log('  - Security headers configured');
    console.log('  - Encrypted local storage for sensitive data');
    console.log('  - Webhook URL validation');
    console.log('  - Sanitized console logging (dev only)');
    console.log('  - Secure webhook URL management');
  }
};

// Security event logging for monitoring
export const logSecurityEvent = (event: string, details?: any): void => {
  if (import.meta.env.DEV) {
    console.warn(`🔐 Security Event: ${event}`, details);
  }
  // In production, this could send to a security monitoring service
};

// Check for hardcoded sensitive values (development only)
const checkForHardcodedSecrets = (): void => {
  if (import.meta.env.DEV) {
    // Check for common patterns that might indicate hardcoded secrets
    const sourceCode = document.documentElement.innerHTML;
    const suspiciousPatterns = [
      /hooks\.zapier\.com\/hooks\/catch\/\d+\/[a-zA-Z0-9]+/g,
      /sk_[a-zA-Z0-9]{24,}/g, // Stripe secret keys
      /pk_[a-zA-Z0-9]{24,}/g, // Public keys (less critical but worth noting)
    ];

    suspiciousPatterns.forEach((pattern, index) => {
      if (pattern.test(sourceCode)) {
        const patternNames = ['Zapier webhook URL', 'Stripe secret key', 'Public API key'];
        logSecurityEvent(`Potential hardcoded secret detected: ${patternNames[index]}`);
      }
    });
  }
};

// Initialize security checks
export const initializeSecurity = (): void => {
  validateSecureContext();
  logSecurityWarnings();
  checkForHardcodedSecrets();
  
  // Clear any legacy insecure storage
  try {
    const legacyKey = 'zapier_webhook_url';
    if (localStorage.getItem(legacyKey)) {
      localStorage.removeItem(legacyKey);
      logSecurityEvent('Legacy webhook URL storage cleared');
    }
  } catch (error) {
    // Ignore storage errors
  }
  
  // Additional runtime security checks
  if (import.meta.env.PROD) {
    // Hide sensitive information in production
    const originalError = console.error;
    
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
    
    // Keep a reference for critical errors with proper typing
    (window as any).__criticalError = originalError;
  }
};
