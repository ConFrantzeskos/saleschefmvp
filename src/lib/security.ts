
// Content Security Policy configuration
export const getCSPHeader = (): string => {
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Note: Consider removing unsafe-* in production
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https: wss:",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
  ];
  
  return cspDirectives.join('; ');
};

// Security headers for production deployment
export const securityHeaders = {
  'Content-Security-Policy': getCSPHeader(),
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

// Log security warnings in development
export const logSecurityWarnings = (): void => {
  if (import.meta.env.DEV) {
    if (!isSecureContext()) {
      console.warn('⚠️ Security Warning: Application is not running in a secure context (HTTPS)');
    }
    
    console.log('🛡️ Security features enabled:');
    console.log('- Input validation with Zod schemas');
    console.log('- File upload security checks');
    console.log('- Email validation for work domains');
    console.log('- Rate limiting on form submissions');
    console.log('- Content Security Policy headers');
  }
};
