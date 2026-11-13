"use client";

import { useState, useTransition } from "react";
import { toast } from "react-hot-toast";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";
import { submitContact } from "@/app/actions/submitContact";
import { ENQUIRY_TYPES, SITE } from "@/lib/constants";

export default function ContactSection() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess]        = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    startTransition(async () => {
      const result = await submitContact(data);
      if (result.success) {
        toast.success("Message sent! We'll get back to you soon.");
        setSuccess(true);
        form.reset();
      } else {
        toast.error(result.error ?? "Something went wrong.");
      }
    });
  }

  const CONTACT_ITEMS = [
    { icon: FiMail,    label: "Email",          val: SITE.email },
    { icon: FiMapPin,  label: "Location",        val: SITE.location },
    { icon: FaInstagram, label: "Instagram",     val: "@teamasuraverse" },
  ];

  return (
    <section id="contact" style={{ padding: "100px 48px", background: "#090B10", scrollMarginTop: 68 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <AnimatedSection>
          <div className="section-tag">Get In Touch</div>
          <h2 style={{
            fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
            fontSize: "clamp(36px,5vw,56px)", letterSpacing: 2, textTransform: "uppercase",
            lineHeight: 1, marginBottom: 48,
          }}>
            Contact <span style={{ color: "#FF7B00" }}>Us</span>
          </h2>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}
          className="contact-grid">

          {/* Form */}
          <AnimatedSection direction="left">
            <div style={{
              background: "#0D1017", border: "1px solid rgba(255,255,255,0.07)",
              padding: 40, position: "relative",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "#FF7B00" }} />

              {success ? (
                <div style={{ textAlign: "center", padding: "48px 20px" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{
                    fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                    fontSize: 28, color: "#FF7B00", letterSpacing: 2, marginBottom: 12,
                  }}>Message Received!</h3>
                  <p style={{ fontSize: 15, color: "#aaa", lineHeight: 1.7 }}>
                    Thanks for reaching out! We&apos;ll get back to you at{" "}
                    <span style={{ color: "#FF7B00" }}>{SITE.email}</span> as soon as possible.
                  </p>
                  <button
                    className="btn-ghost"
                    style={{ marginTop: 24 }}
                    onClick={() => setSuccess(false)}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {[
                    { id: "name",  label: "Your Name",     type: "text",  placeholder: "Enter your name" },
                    { id: "email", label: "Email Address",  type: "email", placeholder: "Enter your email" },
                  ].map(f => (
                    <div key={f.id} style={{ marginBottom: 20 }}>
                      <label htmlFor={f.id} className="av-label">{f.label}</label>
                      <input id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} required className="av-input" />
                    </div>
                  ))}

                  <div style={{ marginBottom: 20 }}>
                    <label htmlFor="enquiry_type" className="av-label">Enquiry Type</label>
                    <select id="enquiry_type" name="enquiry_type" className="av-input">
                      {ENQUIRY_TYPES.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label htmlFor="message" className="av-label">Message</label>
                    <textarea id="message" name="message" placeholder="Tell us about yourself or your enquiry..." required className="av-input" rows={4} />
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="btn-primary"
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, opacity: isPending ? 0.7 : 1 }}
                  >
                    <FiSend size={14} />
                    {isPending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Contact info */}
          <AnimatedSection direction="right" delay={0.15}>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {CONTACT_ITEMS.map(({ icon: Icon, label, val }) => (
                <div key={label} style={{
                  padding: "28px 0", borderBottom: "1px solid rgba(255,255,255,0.07)",
                  display: "flex", gap: 20, alignItems: "flex-start",
                }}>
                  <div style={{
                    width: 40, height: 40,
                    background: "rgba(255,123,0,0.1)", border: "1px solid rgba(255,123,0,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color="#FF7B00" />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-space,'Space Mono',monospace)",
                      fontSize: 10, letterSpacing: 2, color: "#888", textTransform: "uppercase", marginBottom: 4,
                    }}>{label}</div>
                    <div style={{ fontSize: 15, color: "#f0f0f0" }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (max-width: 480px) { #contact { padding: 60px 20px !important; } }
      `}</style>
    </section>
  );
}
