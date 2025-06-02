
import { z } from 'zod';

// Email validation schema
export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .email('Please enter a valid email address')
  .max(254, 'Email is too long')
  .refine((email) => {
    // Additional validation for work emails
    const workDomains = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com|yahoo\.com|hotmail\.com|outlook\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return workDomains.test(email);
  }, 'Please use a work email address');

// File validation schema
export const fileSchema = z.object({
  name: z.string().min(1, 'File name is required'),
  size: z.number().max(100 * 1024 * 1024, 'File size must be less than 100MB'), // 100MB limit
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

// Sanitize user input
export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000); // Limit length
};

// Validate file upload
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

// Validate email
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
