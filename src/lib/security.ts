
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
  }
};

// Initialize security checks
export const initializeSecurity = (): void => {
  validateSecureContext();
  logSecurityWarnings();
  
  // Additional runtime security checks can be added here
  if (import.meta.env.PROD) {
    // Hide sensitive information in production
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
  }
};
