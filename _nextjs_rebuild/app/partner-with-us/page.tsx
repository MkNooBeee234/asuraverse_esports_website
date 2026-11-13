"use client";

import { useState, useTransition } from "react";
import { toast } from "react-hot-toast";
import { FiSend, FiShield, FiTv, FiPackage, FiGlobe, FiCheckCircle } from "react-icons/fi";
import { submitPartner } from "@/app/actions/submitPartner";
import { PARTNERSHIP_TYPES, SITE } from "@/lib/constants";

const BENEFITS = [
  { icon: FiShield,  title: "Jersey Branding",     desc: "Your logo on every jersey, worn in all matches and events." },
  { icon: FiTv,      title: "Social Media Reach",  desc: "Featured across our Instagram, YouTube, and Discord channels." },
  { icon: FiPackage, title: "Content Integration", desc: "Branded posts, reels, shoutouts, and dedicated content campaigns." },
  { icon: FiGlobe,   title: "India Esports Rise",  desc: "Ride India's fastest-growing industry with a dedicated fanbase." },
];

export default function PartnerWithUsPage() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess]        = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    startTransition(async () => {
      const result = await submitPartner(data);
      if (result.success) {
        toast.success("Partnership inquiry sent!");
        setSuccess(true);
        form.reset();
      } else {
        toast.error(result.error ?? "Something went wrong.");
      }
    });
  }

  return (
    <div style={{ background: "#090B10", minHeight: "100vh", paddingTop: 68 }}>
      {/* Hero */}
      <header style={{
        padding: "100px 48px 60px", background: "#0D1017",
        textAlign: "center", position: "relative", overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 80% at 50% 0%, rgba(255,123,0,0.07) 0%, transparent 70%)",
        }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{
            fontFamily: "var(--font-space,'Space Mono',monospace)",
            fontSize: 11, letterSpacing: 4, color: "#FF7B00",
            textTransform: "uppercase", marginBottom: 20,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
          }}>
            <span style={{ display: "block", width: 40, height: 1, background: "#FF7B00" }} />
            Sponsorships & Partnerships
            <span style={{ display: "block", width: 40, height: 1, background: "#FF7B00" }} />
          </div>
          <h1 style={{
            fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
            fontSize: "clamp(44px,9vw,90px)", letterSpacing: 4,
            textTransform: "uppercase", lineHeight: 1, marginBottom: 20,
          }}>
            Partner With <span style={{ color: "#FF7B00" }}>AsuraVerse</span>
          </h1>
          <p style={{ fontSize: 16, color: "#aaa", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Be part of India&apos;s esports story. Your brand, our stages.
          </p>
        </div>
      </header>

      {/* Benefits */}
      <section style={{ padding: "80px 48px", maxWidth: 1300, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 2, background: "rgba(255,255,255,0.07)", marginBottom: 80,
        }}>
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <div key={title} style={{
              background: "#0D1017", padding: "36px 28px",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "#111")}
              onMouseLeave={e => (e.currentTarget.style.background = "#0D1017")}
            >
              <div style={{
                width: 48, height: 48,
                background: "rgba(255,123,0,0.1)", border: "1px solid rgba(255,123,0,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                <Icon size={22} color="#FF7B00" />
              </div>
              <div style={{
                fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                fontSize: 20, letterSpacing: 2, color: "#fff", marginBottom: 10,
              }}>{title}</div>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start",
        }} className="partner-grid">
          {/* Left — info */}
          <div>
            <div className="section-tag">Ready to Partner?</div>
            <h2 style={{
              fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
              fontSize: "clamp(32px,4vw,48px)", letterSpacing: 2, textTransform: "uppercase",
              lineHeight: 1, marginBottom: 24, color: "#fff",
            }}>
              Let&apos;s Build Something <span style={{ color: "#FF7B00" }}>Big</span>
            </h2>
            <p style={{ fontSize: 15, color: "#aaa", lineHeight: 1.8, marginBottom: 32 }}>
              Fill in the form and our team will reach out within 48 hours with a custom partnership proposal tailored to your brand goals.
            </p>
            {[
              "Flexible deal structures",
              "Custom deliverables",
              "Campaign analytics reporting",
              "Direct line to founders",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <FiCheckCircle size={16} color="#FF7B00" />
                <span style={{ fontSize: 15, color: "#aaa" }}>{item}</span>
              </div>
            ))}
            <div style={{ marginTop: 40, padding: 24, background: "#0D1017", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{
                fontFamily: "var(--font-space,'Space Mono',monospace)",
                fontSize: 10, letterSpacing: 2, color: "#888", textTransform: "uppercase", marginBottom: 8,
              }}>Direct Contact</div>
              <div style={{ fontSize: 15, color: "#FF7B00" }}>{SITE.email}</div>
            </div>
          </div>

          {/* Right — form */}
          <div style={{
            background: "#0D1017", border: "1px solid rgba(255,255,255,0.07)",
            padding: 40, position: "relative",
          }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "#FF7B00" }} />

            {success ? (
              <div style={{ textAlign: "center", padding: "48px 20px" }}>
                <FiCheckCircle size={48} color="#FF7B00" style={{ marginBottom: 16 }} />
                <h3 style={{
                  fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                  fontSize: 28, color: "#FF7B00", letterSpacing: 2, marginBottom: 12,
                }}>Inquiry Received!</h3>
                <p style={{ fontSize: 15, color: "#aaa", lineHeight: 1.7 }}>
                  We&apos;ll review your proposal and get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {[
                  { id: "org_name",     label: "Organisation Name", type: "text",  ph: "Your company / brand name" },
                  { id: "contact_name", label: "Your Name",          type: "text",  ph: "Contact person's name" },
                  { id: "email",        label: "Email Address",      type: "email", ph: "Business email" },
                  { id: "phone",        label: "Phone (optional)",   type: "tel",   ph: "+91 XXXXX XXXXX" },
                ].map(f => (
                  <div key={f.id} style={{ marginBottom: 20 }}>
                    <label htmlFor={f.id} className="av-label">{f.label}</label>
                    <input id={f.id} name={f.id} type={f.type} placeholder={f.ph}
                      required={f.id !== "phone"} className="av-input" />
                  </div>
                ))}

                <div style={{ marginBottom: 20 }}>
                  <label htmlFor="partnership_type" className="av-label">Partnership Type</label>
                  <select id="partnership_type" name="partnership_type" className="av-input">
                    {PARTNERSHIP_TYPES.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label htmlFor="details" className="av-label">Tell Us More</label>
                  <textarea id="details" name="details" placeholder="Describe your brand, goals, and what kind of partnership you're looking for..."
                    required className="av-input" rows={5} />
                </div>

                <button
                  type="submit" disabled={isPending} className="btn-primary"
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, opacity: isPending ? 0.7 : 1 }}
                >
                  <FiSend size={14} />
                  {isPending ? "Sending..." : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .partner-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (max-width: 480px) { header, section { padding-left: 20px !important; padding-right: 20px !important; } }
      `}</style>
    </div>
  );
}
