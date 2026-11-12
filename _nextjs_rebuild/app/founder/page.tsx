import type { Metadata } from "next";
import Image from "next/image";
import { FOUNDERS } from "@/lib/constants";
import { FiLinkedin } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Our Founders",
  description: "Meet Mukund Kundan (CEO) and Chandra Prakash Suthar (Co-Founder) — the visionaries behind Team AsuraVerse Esports.",
};

export default function FounderPage() {
  return (
    <div style={{ background: "#090B10", minHeight: "100vh", paddingTop: 68 }}>
      {/* Hero */}
      <header style={{
        padding: "100px 48px 60px", background: "#0D1017",
        position: "relative", overflow: "hidden", textAlign: "center",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 70% 80% at 50% 0%, rgba(255,123,0,0.07) 0%, transparent 70%)",
        }} />
        {/* Ghost text */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
          fontSize: 200, letterSpacing: 16,
          color: "rgba(255,255,255,0.018)",
          whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none",
        }}>FOUNDERS</div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{
            fontFamily: "var(--font-space,'Space Mono',monospace)",
            fontSize: 11, letterSpacing: 4, color: "#FF7B00",
            textTransform: "uppercase", marginBottom: 20,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
          }}>
            <span style={{ display: "block", width: 40, height: 1, background: "#FF7B00" }} />
            The People Behind the Mission
            <span style={{ display: "block", width: 40, height: 1, background: "#FF7B00" }} />
          </div>
          <h1 style={{
            fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
            fontSize: "clamp(48px,9vw,90px)", letterSpacing: 4,
            textTransform: "uppercase", lineHeight: 1, marginBottom: 20,
          }}>
            Meet the <span style={{ color: "#FF7B00" }}>Founders</span>
          </h1>
          <p style={{ fontSize: 16, color: "#aaa", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Two individuals from humble beginnings who dared to dream of an Indian esports organisation that would change the game — not just for themselves, but for every underdog waiting for a shot.
          </p>
        </div>
      </header>

      {/* Founder cards */}
      <section style={{ padding: "80px 48px", maxWidth: 1300, margin: "0 auto" }}>
        {FOUNDERS.map((founder, idx) => (
          <div
            key={founder.name}
            style={{
              display: "grid",
              gridTemplateColumns: idx % 2 === 0 ? "360px 1fr" : "1fr 360px",
              gap: 0,
              background: "#0D1017",
              border: "1px solid rgba(255,255,255,0.07)",
              overflow: "hidden",
              marginBottom: 60,
              position: "relative",
              transition: "border-color 0.3s",
            }}
            className={`founder-card founder-card-${idx}`}
          >
            {/* Top accent */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 3,
              background: idx % 2 === 0
                ? "linear-gradient(90deg,#FF7B00,transparent)"
                : "linear-gradient(90deg,transparent,#FF7B00)",
            }} />

            {/* Photo side */}
            <div
              style={{
                position: "relative",
                background: "linear-gradient(135deg,#1a0a00 0%,#0a0d14 100%)",
                minHeight: 480,
                display: "flex", alignItems: "flex-end", justifyContent: "center",
                overflow: "hidden",
                order: idx % 2 === 0 ? 0 : 1,
              }}
            >
              {/* Number watermark */}
              <div style={{
                position: "absolute", top: 20, left: 20, zIndex: 2,
                fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                fontSize: 80, lineHeight: 1, color: "rgba(255,123,0,0.12)",
                letterSpacing: -2, pointerEvents: "none",
              }}>
                {String(idx + 1).padStart(2, "0")}
              </div>
              {/* Photo or Avatar placeholder */}
              {founder.image ? (
                <div style={{
                  width: 160, height: 160, borderRadius: "50%",
                  border: "2px solid #FF7B00",
                  overflow: "hidden",
                  position: "relative", zIndex: 2, marginBottom: 48,
                  boxShadow: "0 0 28px rgba(255,123,0,0.28)",
                }}>
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="160px"
                    style={{ objectFit: "cover", objectPosition: "center 20%" }}
                    priority
                  />
                </div>
              ) : (
                <div style={{
                  width: 160, height: 160, borderRadius: "50%",
                  background: "rgba(255,123,0,0.1)",
                  border: "2px solid rgba(255,123,0,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                  fontSize: 56, letterSpacing: 2, color: "#FF7B00",
                  position: "relative", zIndex: 1, marginBottom: 48,
                }}>
                  {founder.initials}
                </div>
              )}
              {/* Role tag */}
              <div style={{
                position: "absolute", bottom: 24, left: "50%",
                transform: "translateX(-50%)", zIndex: 3,
                background: "rgba(0,0,0,0.85)",
                border: "1px solid rgba(255,123,0,0.3)",
                color: "#FF7B00",
                fontFamily: "var(--font-space,'Space Mono',monospace)",
                fontSize: 10, fontWeight: 700, letterSpacing: 2,
                textTransform: "uppercase", padding: "8px 20px", whiteSpace: "nowrap",
              }}>
                {founder.role}
              </div>
            </div>

            {/* Info side */}
            <div style={{
              padding: "48px 52px",
              display: "flex", flexDirection: "column", justifyContent: "center",
              background: "#12161F",
              order: idx % 2 === 0 ? 1 : 0,
            }}>
              <div style={{
                fontFamily: "var(--font-space,'Space Mono',monospace)",
                fontSize: 10, letterSpacing: 3, color: "#FF7B00",
                textTransform: "uppercase", marginBottom: 12,
              }}>
                // {founder.role}
              </div>
              <div style={{
                fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                fontSize: "clamp(36px,4vw,52px)", letterSpacing: 3,
                lineHeight: 1, marginBottom: 4, color: "#fff",
              }}>
                {founder.name}
              </div>
              <div style={{
                fontFamily: "var(--font-space,'Space Mono',monospace)",
                fontSize: 12, letterSpacing: 2, color: "#aaa",
                textTransform: "uppercase", marginBottom: 28,
              }}>
                {founder.title}
              </div>
              <div style={{ width: 48, height: 2, background: "#FF7B00", marginBottom: 24 }} />
              <div style={{
                fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                fontSize: 22, letterSpacing: 1.5, lineHeight: 1.35,
                color: "#fff", marginBottom: 20,
              }}>
                &quot;{founder.quote}&quot;
              </div>
              {founder.bio.map((para, i) => (
                <p key={i} style={{ fontSize: 15, color: "#aaa", lineHeight: 1.8, marginBottom: 12 }}>
                  {para}
                </p>
              ))}
              {/* Traits */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {founder.traits.map((t) => (
                  <span key={t} style={{
                    fontFamily: "var(--font-space,'Space Mono',monospace)",
                    fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase",
                    padding: "6px 14px",
                    background: "rgba(255,123,0,0.08)",
                    border: "1px solid rgba(255,123,0,0.3)",
                    color: "#FFB366",
                  }}>
                    {t}
                  </span>
                ))}
              </div>
              {/* Stats */}
              <div style={{
                display: "flex", gap: 0,
                borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24,
              }}>
                {founder.stats.map((s, i) => (
                  <div key={s.label} style={{
                    paddingRight: i < founder.stats.length - 1 ? 28 : 0,
                    marginRight:  i < founder.stats.length - 1 ? 28 : 0,
                    borderRight:  i < founder.stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  }}>
                    <div style={{
                      fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                      fontSize: 30, color: "#FF7B00", letterSpacing: 2, lineHeight: 1,
                    }}>{s.num}</div>
                    <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, color: "#888", textTransform: "uppercase", marginTop: 3 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Vision banner */}
        <div style={{
          background: "#0D1017", borderTop: "1px solid rgba(255,255,255,0.07)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "80px 48px", textAlign: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(255,123,0,0.05) 0%, transparent 70%)",
          }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
            <div style={{
              fontFamily: "var(--font-space,'Space Mono',monospace)",
              fontSize: 11, letterSpacing: 3, color: "#FF7B00",
              textTransform: "uppercase", marginBottom: 24,
            }}>// The Shared Mission</div>
            <div style={{
              fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
              fontSize: "clamp(28px,4vw,48px)", letterSpacing: 2, lineHeight: 1.2,
              color: "#fff", marginBottom: 20,
            }}>
              Together, they built more than an org.<br />
              They built a <span style={{ color: "#FF7B00" }}>movement.</span>
            </div>
            <p style={{ fontSize: 16, color: "#aaa", lineHeight: 1.7 }}>
              AsuraVerse was born from late nights, bold conversations, and an unshakeable belief that Indian esports deserves better — better structure, better opportunities, and better stories. Mukund and Chandra aren&apos;t just founders. They are proof that the undergods can rise.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .founder-card { transition: border-color 0.3s; }
        .founder-card:hover { border-color: rgba(255,123,0,0.3) !important; }
        @media (max-width: 900px) {
          .founder-card-0, .founder-card-1 { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          header, section { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </div>
  );
}
