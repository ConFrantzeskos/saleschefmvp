
import { z } from 'zod';

// Enhanced email validation with caching
const emailValidationCache = new Map<string, { isValid: boolean; error?: string; timestamp: number }>();
const CACHE_DURATION = 60000; // 1 minute

// Work email domains cache for better performance
const PERSONAL_EMAIL_DOMAINS = new Set([
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
  'icloud.com', 'live.com', 'msn.com', 'ymail.com', 'protonmail.com'
]);

// Enhanced email validation schema with better error messages
export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .max(254, 'Email address is too long')
  .email('Please enter a valid email address')
  .refine((email) => {
    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) return false;
    
    // Allow business subdomains (e.g., john@sales.company.com)
    const isPersonalDomain = PERSONAL_EMAIL_DOMAINS.has(domain);
    return !isPersonalDomain;
  }, 'Please use a work email address (personal email domains not allowed)');

// File validation with enhanced security checks
export const fileSchema = z.object({
  name: z.string()
    .min(1, 'File name is required')
    .max(255, 'File name is too long')
    .refine((name) => {
      // Check for suspicious file names
      const suspicious = /[<>:"|?*\x00-\x1f]/.test(name);
      return !suspicious;
    }, 'File name contains invalid characters'),
  
  size: z.number()
    .min(1, 'File cannot be empty')
    .max(100 * 1024 * 1024, 'File size must be less than 100MB'),
  
  type: z.string().refine((type) => {
    const allowedTypes = [
      'text/csv',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/zip',
      'application/pdf',
      'text/plain'
    ];
    return allowedTypes.includes(type);
  }, 'File type not supported. Please upload CSV, Excel, ZIP, PDF, or TXT files only'),
});

// Enhanced sanitization with performance optimization
export const sanitizeInput = (input: string): string => {
  if (!input || typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML/XML tags
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '') // Remove control characters
    .substring(0, 1000); // Limit length
};

// Cached email validation for performance
export const validateEmail = (email: string): { isValid: boolean; error?: string } => {
  if (!email) {
    return { isValid: false, error: 'Email is required' };
  }

  const sanitizedEmail = sanitizeInput(email).toLowerCase();
  const now = Date.now();
  
  // Check cache first
  const cached = emailValidationCache.get(sanitizedEmail);
  if (cached && (now - cached.timestamp) < CACHE_DURATION) {
    return { isValid: cached.isValid, error: cached.error };
  }

  try {
    emailSchema.parse(sanitizedEmail);
    const result = { isValid: true };
    emailValidationCache.set(sanitizedEmail, { ...result, timestamp: now });
    return result;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const result = { 
        isValid: false, 
        error: error.errors[0]?.message || 'Invalid email' 
      };
      emailValidationCache.set(sanitizedEmail, { ...result, timestamp: now });
      return result;
    }
    return { isValid: false, error: 'Email validation failed' };
  }
};

// Enhanced file validation with detailed error reporting
export const validateFile = (file: File): { isValid: boolean; error?: string; warnings?: string[] } => {
  const warnings: string[] = [];
  
  try {
    // Additional security checks
    if (file.name.includes('..')) {
      return { isValid: false, error: 'File path traversal detected' };
    }

    // Check for very large files (warn but don't block)
    if (file.size > 50 * 1024 * 1024) { // 50MB
      warnings.push('Large file detected. Upload may take longer.');
    }

    // Validate using schema
    fileSchema.parse({
      name: file.name,
      size: file.size,
      type: file.type,
    });

    return { isValid: true, warnings: warnings.length > 0 ? warnings : undefined };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { 
        isValid: false, 
        error: error.errors[0]?.message || 'Invalid file',
        warnings: warnings.length > 0 ? warnings : undefined
      };
    }
    return { isValid: false, error: 'File validation failed' };
  }
};

// URL validation for webhooks and external links
export const validateUrl = (url: string): { isValid: boolean; error?: string } => {
  if (!url) {
    return { isValid: false, error: 'URL is required' };
  }

  try {
    const urlObj = new URL(url);
    
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return { isValid: false, error: 'URL must use HTTP or HTTPS protocol' };
    }

    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
};

// Clear validation cache periodically to prevent memory leaks
if (typeof window !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, value] of emailValidationCache.entries()) {
      if (now - value.timestamp > CACHE_DURATION) {
        emailValidationCache.delete(key);
      }
    }
  }, CACHE_DURATION);
}
