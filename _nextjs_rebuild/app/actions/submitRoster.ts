"use server";

import { rosterSchema } from "@/lib/validations";
import { createTransporter, adminEmail, buildAdminTable, buildConfirmation, sanitizeSubject } from "@/lib/email";

export async function submitRoster(formData: FormData) {
  const raw = {
    player_name: formData.get("player_name") as string,
    ign:         formData.get("ign") as string,
    email:       formData.get("email") as string,
    phone:       formData.get("phone") as string,
    game:        formData.get("game") as string,
    role:        formData.get("role") as string,
    experience:  formData.get("experience") as string,
    uid:         formData.get("uid") as string,
  };

  const result = rosterSchema.safeParse(raw);
  if (!result.success) {
    return { success: false, error: result.error.issues[0].message };
  }

  const { player_name, ign, email, phone, game, role, experience, uid } = result.data;

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from:    `"AsuraVerse Website" <${process.env.EMAIL_USER}>`,
      to:      adminEmail,
      replyTo: email,
      subject: sanitizeSubject(`[Roster] ${game} — ${ign} (${player_name})`),
      html:    buildAdminTable({
        "Player Name": player_name,
        "IGN":         ign,
        "Email":       email,
        "Phone":       phone ?? "—",
        "Game":        game,
        "Role":        role,
        "UID / ID":    uid ?? "—",
        "Experience":  experience,
      }),
    });

    await transporter.sendMail({
      from:    `"Team AsuraVerse" <${process.env.EMAIL_USER}>`,
      to:      email,
      subject: "Roster Application Received — Team AsuraVerse",
      html:    buildConfirmation(player_name, "Your roster application has been received! Our scouts will review your profile and reach out if you're a match for our upcoming lineups."),
    });

    return { success: true };
  } catch (err) {
    console.error("Roster form error:", err);
    return { success: false, error: "Failed to send. Please try again." };
  }
}
