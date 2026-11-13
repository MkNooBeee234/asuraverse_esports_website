import { z } from "zod";

export const contactSchema = z.object({
  name:         z.string().min(2, "Name must be at least 2 characters"),
  email:        z.string().email("Please enter a valid email address"),
  enquiry_type: z.string().min(1, "Please select an enquiry type"),
  message:      z.string().min(10, "Message must be at least 10 characters"),
});

export const partnerSchema = z.object({
  org_name:         z.string().min(2, "Organisation name required"),
  contact_name:     z.string().min(2, "Contact name required"),
  email:            z.string().email("Valid email required"),
  phone:            z.string().optional(),
  partnership_type: z.string().min(1, "Please select a partnership type"),
  details:          z.string().min(20, "Please provide more details (min 20 chars)"),
});

export const rosterSchema = z.object({
  player_name: z.string().min(2, "Name required"),
  ign:         z.string().min(2, "In-game name required"),
  email:       z.string().email("Valid email required"),
  phone:       z.string().optional(),
  game:        z.string().min(1, "Please select a game"),
  role:        z.string().min(1, "Please select your role"),
  experience:  z.string().min(10, "Tell us about your experience"),
  uid:         z.string().optional(),
});

export type ContactInput  = z.infer<typeof contactSchema>;
export type PartnerInput  = z.infer<typeof partnerSchema>;
export type RosterInput   = z.infer<typeof rosterSchema>;
