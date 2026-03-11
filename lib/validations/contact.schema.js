import { z } from "zod";

/**
 * Zod schema for contact form validation.
 * Payload keys are in English as per requirement.
 */
export const contactSchema = z.object({
  customerName: z
    .string()
    .min(2, "Vul uw volledige naam in"),
  companyName: z
    .string()
    .min(2, "Vul uw bedrijfsnaam in"),
  email: z
    .string()
    .email("Ongeldig e-mailadres"),
  phone: z
    .string()
    .min(10, "Ongeldig telefoonnummer"),
  drawingType: z
    .string()
    .min(1, "Selecteer een dienst"),
  message: z
    .string()
    .min(10, "Beschrijf uw project (minimaal 10 tekens)"),
  drawingId: z.string().optional(),
});
