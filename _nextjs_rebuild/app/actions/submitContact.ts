"use server";

import { contactSchema } from "@/lib/validations";
import { createTransporter, adminEmail, buildAdminTable, buildConfirmation, sanitizeSubject } from "@/lib/email";

export async function submitContact(formData: FormData) {
  const raw = {
    name:         formData.get("name") as string,
    email:        formData.get("email") as string,
    enquiry_type: formData.get("enquiry_type") as string,
    message:      formData.get("message") as string,
  };

  const result = contactSchema.safeParse(raw);
  if (!result.success) {
    return { success: false, error: result.error.issues[0].message };
  }

  const { name, email, enquiry_type, message } = result.data;

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from:    `"AsuraVerse Website" <${process.env.EMAIL_USER}>`,
      to:      adminEmail,
      replyTo: email,
      subject: sanitizeSubject(`[Contact] ${enquiry_type} — ${name}`),
      html:    buildAdminTable({ Name: name, Email: email, "Enquiry Type": enquiry_type, Message: message }),
    });

    await transporter.sendMail({
      from:    `"Team AsuraVerse" <${process.env.EMAIL_USER}>`,
      to:      email,
      subject: "We received your message — Team AsuraVerse",
      html:    buildConfirmation(name, "Thanks for reaching out! We've received your message and will get back to you as soon as possible."),
    });

    return { success: true };
  } catch (err) {
    console.error("Contact form error:", err);
    return { success: false, error: "Failed to send. Please try again." };
  }
}
