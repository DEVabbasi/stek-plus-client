import { z } from "zod";

/**
 * Zod schema for contact form validation.
 * Payload keys are in English as per requirement.
 */
export const contactSchema = z.object({
  customerName: z
    .string()
    .min(2, "Vul uw volledige naam in")
    .max(100, "Naam mag maximaal 100 tekens bevatten"),
  companyName: z
    .string()
    .min(2, "Vul uw bedrijfsnaam in")
    .max(100, "Naam mag maximaal 100 tekens bevatten"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z
    .string()
    .min(10, "Ongeldig telefoonnummer")
    .max(20, "Telefoonnummer mag maximaal 20 tekens bevatten")
    .regex(
      /^[0-9+()\-\s]+$/,
      "Alleen geldige telefoonnummer tekens toegestaan",
    ),
  drawingType: z.string().min(1, "Selecteer een dienst"),
  message: z.string().min(10, "Beschrijf uw project (minimaal 10 tekens)"),
  drawingId: z.string().optional(),
});
