"use server";

import { partnerSchema } from "@/lib/validations";
import { createTransporter, adminEmail, buildAdminTable, buildConfirmation, sanitizeSubject } from "@/lib/email";

export async function submitPartner(formData: FormData) {
  const raw = {
    org_name:         formData.get("org_name") as string,
    contact_name:     formData.get("contact_name") as string,
    email:            formData.get("email") as string,
    phone:            formData.get("phone") as string,
    partnership_type: formData.get("partnership_type") as string,
    details:          formData.get("details") as string,
  };

  const result = partnerSchema.safeParse(raw);
  if (!result.success) {
    return { success: false, error: result.error.issues[0].message };
  }

  const { org_name, contact_name, email, phone, partnership_type, details } = result.data;

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from:    `"AsuraVerse Website" <${process.env.EMAIL_USER}>`,
      to:      adminEmail,
      replyTo: email,
      subject: sanitizeSubject(`[Partnership] ${partnership_type} — ${org_name}`),
      html:    buildAdminTable({
        "Organisation":       org_name,
        "Contact Name":       contact_name,
        "Email":              email,
        "Phone":              phone ?? "—",
        "Partnership Type":   partnership_type,
        "Details":            details,
      }),
    });

    await transporter.sendMail({
      from:    `"Team AsuraVerse" <${process.env.EMAIL_USER}>`,
      to:      email,
      subject: "Partnership Inquiry Received — Team AsuraVerse",
      html:    buildConfirmation(contact_name, "Thank you for your partnership inquiry! Our team will review your proposal and reach out within 48 hours."),
    });

    return { success: true };
  } catch (err) {
    console.error("Partnership form error:", err);
    return { success: false, error: "Failed to send. Please try again." };
  }
}
