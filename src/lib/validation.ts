
import { z } from 'zod';

// Enhanced email validation schema with stricter work email requirements
export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .email('Please enter a valid email address')
  .max(254, 'Email is too long')
  .refine((email) => {
    // Stricter validation for work emails with enhanced security
    const bannedDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 
      'aol.com', 'icloud.com', 'live.com', 'msn.com',
      'mail.com', 'yandex.com', 'protonmail.com'
    ];
    
    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) return false;
    
    // Check against banned domains
    if (bannedDomains.includes(domain)) return false;
    
    // Additional security checks
    const workDomains = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return workDomains.test(email);
  }, 'Please use a work email address (not personal email services)');

// File validation schema with enhanced security
export const fileSchema = z.object({
  name: z.string().min(1, 'File name is required').refine((name) => {
    // Check for suspicious file names
    const suspiciousPatterns = /[<>:"\/\\|?*]/;
    return !suspiciousPatterns.test(name);
  }, 'File name contains invalid characters'),
  size: z.number().max(100 * 1024 * 1024, 'File size must be less than 100MB'),
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
  }, 'File type not allowed. Please upload CSV, Excel, ZIP, PDF, or TXT files only'),
});

// Enhanced input sanitization with additional security measures
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/data:/gi, '') // Remove data: protocol
    .replace(/vbscript:/gi, '') // Remove vbscript: protocol
    .substring(0, 1000); // Limit length
};

// New validation for additional form fields
export const validateRole = (role: string): { isValid: boolean; error?: string } => {
  const sanitized = sanitizeInput(role);
  if (sanitized.length < 2) {
    return { isValid: false, error: 'Role must be at least 2 characters' };
  }
  if (sanitized.length > 100) {
    return { isValid: false, error: 'Role is too long' };
  }
  return { isValid: true };
};

export const validateCompanyName = (company: string): { isValid: boolean; error?: string } => {
  const sanitized = sanitizeInput(company);
  if (sanitized.length < 2) {
    return { isValid: false, error: 'Company name must be at least 2 characters' };
  }
  if (sanitized.length > 200) {
    return { isValid: false, error: 'Company name is too long' };
  }
  return { isValid: true };
};

// Validate file upload with enhanced security
export const validateFile = (file: File): { isValid: boolean; error?: string } => {
  try {
    fileSchema.parse({
      name: file.name,
      size: file.size,
      type: file.type,
    });
    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { isValid: false, error: error.errors[0]?.message || 'Invalid file' };
    }
    return { isValid: false, error: 'File validation failed' };
  }
};

// Enhanced email validation
export const validateEmail = (email: string): { isValid: boolean; error?: string } => {
  try {
    emailSchema.parse(email);
    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { isValid: false, error: error.errors[0]?.message || 'Invalid email' };
    }
    return { isValid: false, error: 'Email validation failed' };
  }
};
