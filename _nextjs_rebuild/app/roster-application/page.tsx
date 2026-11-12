"use client";

import { useState, useTransition } from "react";
import { toast } from "react-hot-toast";
import { FiSend, FiCheckCircle, FiUser, FiMail, FiSmartphone } from "react-icons/fi";
import { GiCrossedSwords } from "react-icons/gi";
import { MdSportsMartialArts } from "react-icons/md";
import { submitRoster } from "@/app/actions/submitRoster";
import { GAME_OPTIONS, ROLES } from "@/lib/constants";

const REQUIREMENTS = [
  "Minimum Platinum rank in your respective game",
  "Active participant in competitive matches",
  "Available for regular scheduled practice sessions",
  "Team player with positive attitude",
  "Age 16+ preferred",
];

export default function RosterApplicationPage() {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess]        = useState(false);
  const [selectedGame, setSelectedGame] = useState("BGMI");

  const roles = ROLES[selectedGame as keyof typeof ROLES] ?? ROLES.Other;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    startTransition(async () => {
      const result = await submitRoster(data);
      if (result.success) {
        toast.success("Application submitted! Our scouts will be in touch.");
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
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
            <GiCrossedSwords size={16} color="#FF7B00" />
            <span className="badge-active">Active Recruitment</span>
          </div>
          <div style={{
            fontFamily: "var(--font-space,'Space Mono',monospace)",
            fontSize: 11, letterSpacing: 4, color: "#FF7B00",
            textTransform: "uppercase", marginBottom: 16,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
          }}>
            <span style={{ width: 40, height: 1, background: "#FF7B00", display: "block" }} />
            Player Tryouts
            <span style={{ width: 40, height: 1, background: "#FF7B00", display: "block" }} />
          </div>
          <h1 style={{
            fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
            fontSize: "clamp(44px,9vw,90px)", letterSpacing: 4,
            textTransform: "uppercase", lineHeight: 1, marginBottom: 20,
          }}>
            Join the <span style={{ color: "#FF7B00" }}>AsuraVerse</span>
          </h1>
          <p style={{ fontSize: 16, color: "#aaa", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            We are scouting for dedicated players across multiple game titles. Whether you&apos;re a full squad or a solo prodigy, this is your shot.
          </p>
        </div>
      </header>

      <section style={{ padding: "80px 48px", maxWidth: 1300, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}
          className="roster-grid">
          {/* Left — info */}
          <div>
            <div className="section-tag">Requirements</div>
            <h2 style={{
              fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
              fontSize: "clamp(28px,3.5vw,42px)", letterSpacing: 2, textTransform: "uppercase",
              lineHeight: 1, marginBottom: 24, color: "#fff",
            }}>
              What We&apos;re <span style={{ color: "#FF7B00" }}>Looking For</span>
            </h2>
            <div style={{ marginBottom: 36 }}>
              {REQUIREMENTS.map((req) => (
                <div key={req} style={{
                  display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 14,
                  padding: "14px 20px",
                  background: "#0D1017", border: "1px solid rgba(255,255,255,0.07)",
                }}>
                  <MdSportsMartialArts size={16} color="#FF7B00" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 14, color: "#aaa", lineHeight: 1.6 }}>{req}</span>
                </div>
              ))}
            </div>

            {/* Games list */}
            <div style={{ padding: 24, background: "#0D1017", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{
                fontFamily: "var(--font-space,'Space Mono',monospace)",
                fontSize: 10, letterSpacing: 2, color: "#888",
                textTransform: "uppercase", marginBottom: 16,
              }}>Accepting Applications For</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {GAME_OPTIONS.map((g) => (
                  <span key={g} className="badge-active">{g}</span>
                ))}
              </div>
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
                }}>Application Received!</h3>
                <p style={{ fontSize: 15, color: "#aaa", lineHeight: 1.7 }}>
                  Our scouts will review your profile. If you&apos;re a match, we&apos;ll reach out within 7 days.
                </p>
                <button className="btn-ghost" style={{ marginTop: 24 }} onClick={() => setSuccess(false)}>
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label htmlFor="player_name" className="av-label">
                      <FiUser size={10} style={{ display: "inline", marginRight: 4 }} />Real Name
                    </label>
                    <input id="player_name" name="player_name" type="text" placeholder="Your real name" required className="av-input" />
                  </div>
                  <div>
                    <label htmlFor="ign" className="av-label">
                      <GiCrossedSwords size={10} style={{ display: "inline", marginRight: 4 }} />In-Game Name
                    </label>
                    <input id="ign" name="ign" type="text" placeholder="Your IGN" required className="av-input" />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label htmlFor="email" className="av-label">
                      <FiMail size={10} style={{ display: "inline", marginRight: 4 }} />Email
                    </label>
                    <input id="email" name="email" type="email" placeholder="Your email" required className="av-input" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="av-label">
                      <FiSmartphone size={10} style={{ display: "inline", marginRight: 4 }} />Phone (optional)
                    </label>
                    <input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="av-input" />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div>
                    <label htmlFor="game" className="av-label">Game Title</label>
                    <select id="game" name="game" className="av-input"
                      onChange={e => setSelectedGame(e.target.value)}
                      value={selectedGame}>
                      {GAME_OPTIONS.map(g => <option key={g}>{g}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="role" className="av-label">Your Role</label>
                    <select id="role" name="role" className="av-input">
                      {roles.map(r => <option key={r}>{r}</option>)}
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="uid" className="av-label">UID / Game ID (optional)</label>
                  <input id="uid" name="uid" type="text" placeholder="Your in-game UID" className="av-input" />
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label htmlFor="experience" className="av-label">Experience &amp; Achievements</label>
                  <textarea id="experience" name="experience"
                    placeholder="Tell us about your rank, achievements, previous orgs, tournaments played, stats..."
                    required className="av-input" rows={5} />
                </div>

                <button
                  type="submit" disabled={isPending} className="btn-primary"
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, opacity: isPending ? 0.7 : 1 }}
                >
                  <FiSend size={14} />
                  {isPending ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .roster-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (max-width: 480px) {
          header, section { padding-left: 20px !important; padding-right: 20px !important; }
          form > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
