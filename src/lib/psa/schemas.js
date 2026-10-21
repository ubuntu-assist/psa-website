// Validation schemas shared by the forms (browser) and the /api endpoints (server),
// so both sides enforce exactly the same rules. Messages are i18n keys.
import { z } from 'zod';
import { isValidPhoneNumber } from 'libphonenumber-js';

export const CV_MAX_MB = 4; // Vercel functions accept ~4.5 MB per request
export const CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

export const contactSchema = z.object({
  nom: z.string().trim().min(2, 'validation.nomMin').max(120),
  email: z.string().trim().email('validation.emailInvalid').max(200),
  tel: z
    .string()
    .optional()
    .default('')
    .refine((v) => !v || isValidPhoneNumber(v), 'validation.telInvalid'),
  message: z.string().trim().min(10, 'validation.messageMin').max(5000)
});

export const internshipSchema = z.object({
  nom: z.string().trim().min(2, 'validation.nomMin').max(120),
  email: z.string().trim().email('validation.emailInvalid').max(200),
  tel: z
    .string()
    .min(1, 'validation.telRequired')
    .refine((v) => isValidPhoneNumber(v || ''), 'validation.telInvalid'),
  ville: z.string().max(120).optional().default(''),
  niveau: z.string().trim().min(2, 'validation.niveauMin').max(200),
  etablissement: z.string().max(200).optional().default(''),
  experience: z.string().max(3000).optional().default(''),
  domaine: z.string().max(200).default(''),
  competences: z.string().max(3000).optional().default(''),
  langues: z.string().max(200).optional().default(''),
  periode: z.string().max(200).optional().default(''),
  source: z.string().max(200).default(''),
  cv: z
    .string()
    .max(500)
    .optional()
    .default('')
    .refine((v) => !v || /^https?:\/\//i.test(v), 'validation.cvUrl'),
  motivation: z.string().trim().min(20, 'validation.motivationMin').max(5000),
  question: z.string().max(3000).optional().default('')
});

export const newsletterSchema = z.object({
  email: z.string().trim().email('validation.emailInvalid').max(200)
});
