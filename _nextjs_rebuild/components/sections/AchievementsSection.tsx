"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiAward } from "react-icons/fi";
import { GiTrophy } from "react-icons/gi";
import AnimatedSection from "@/components/AnimatedSection";
import { ACHIEVEMENTS } from "@/lib/constants";

export default function AchievementsSection() {
  // Split: featured (with images / highlighted) vs circuit events
  const featured = ACHIEVEMENTS.filter((a) => a.highlight);
  const circuit  = ACHIEVEMENTS.filter((a) => !a.highlight);

  return (
    <section id="achievements" style={{ padding: "100px 48px", background: "#090B10", scrollMarginTop: 68 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>

        {/* Heading */}
        <AnimatedSection>
          <div className="section-tag">Trophy Cabinet</div>
          <h2 style={{
            fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
            fontSize: "clamp(36px,5vw,56px)", letterSpacing: 2, textTransform: "uppercase",
            lineHeight: 1, marginBottom: 12,
          }}>
            Recent <span style={{ color: "#FF7B00" }}>Achievements</span>
          </h2>
          <p style={{ fontSize: 15, color: "#888", maxWidth: 560, marginBottom: 56 }}>
            Proving excellence on every stage — LAN events, major online circuits, and national championships.
          </p>
        </AnimatedSection>

        {/* ─── FEATURED TOURNAMENT CARDS (card-with-image style) ─── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 2, background: "rgba(255,255,255,0.07)",
          marginBottom: 2,
        }}>
          {featured.map((a, i) => (
            <motion.div
              key={a.event}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              style={{
                background: "#0D1017",
                display: "flex", flexDirection: "column",
                position: "relative", overflow: "hidden",
              }}
            >
              {/* Top orange bar */}
              <div style={{ height: 3, background: "#FF7B00", flexShrink: 0 }} />

              {/* Image area */}
              <div style={{
                height: 200, position: "relative",
                background: "linear-gradient(135deg,#1a0a00 0%,#0a0d14 100%)",
                overflow: "hidden", flexShrink: 0,
              }}>
                {a.img ? (
                  <Image
                    src={a.img}
                    alt={a.event}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: "cover", opacity: 0.9 }}
                  />
                ) : (
                  <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexDirection: "column", gap: 10,
                  }}>
                    <div style={{
                      width: 60, height: 60, borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(255,123,0,0.2) 0%, rgba(255,123,0,0.04) 70%, transparent 100%)",
                      border: "1px solid rgba(255,123,0,0.35)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 0 20px rgba(255,123,0,0.2)",
                    }}>
                      <span style={{ fontSize: 28 }}>{a.icon}</span>
                    </div>
                    <span style={{
                      fontFamily: "var(--font-space,'Space Mono',monospace)",
                      fontSize: 9, letterSpacing: 2.5, color: "#FFB366",
                      textTransform: "uppercase",
                    }}>Verified Tournament Finish</span>
                  </div>
                )}
                {/* Gradient overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(0deg,rgba(13,16,23,0.9) 0%,rgba(13,16,23,0) 50%)",
                }} />
                {/* Game badge */}
                <div style={{
                  position: "absolute", top: 14, left: 14, zIndex: 2,
                  background: "rgba(0,0,0,0.8)", border: "1px solid rgba(255,123,0,0.4)",
                  color: "#FF7B00",
                  fontFamily: "var(--font-space,'Space Mono',monospace)",
                  fontSize: 10, fontWeight: 700, letterSpacing: 2,
                  padding: "5px 12px",
                }}>
                  ■ {a.org}
                </div>
                {/* Arrow icon */}
                <div style={{
                  position: "absolute", top: 14, right: 14, zIndex: 2,
                  width: 28, height: 28,
                  background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <FiArrowUpRight size={14} color="#888" />
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px 28px 28px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                {/* Status tag */}
                {a.status && (
                  <div style={{
                    fontFamily: "var(--font-space,'Space Mono',monospace)",
                    fontSize: 9, letterSpacing: 2, color: "#888",
                    textTransform: "uppercase", marginBottom: 8,
                  }}>
                    {a.status}
                  </div>
                )}
                {/* Event name */}
                <div style={{
                  fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                  fontSize: 22, letterSpacing: 2, color: "#fff",
                  lineHeight: 1.15, marginBottom: 16,
                }}>
                  {a.event}
                </div>
                {/* Divider */}
                <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 16 }} />
                {/* Result row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{
                      width: 3, height: 18, background: "#FF7B00", flexShrink: 0,
                    }} />
                    <div style={{
                      fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                      fontSize: 22, letterSpacing: 2, color: "#FF7B00",
                    }}>
                      {a.result}
                    </div>
                  </div>
                  {a.prizePool && (
                    <div style={{
                      fontFamily: "var(--font-space,'Space Mono',monospace)",
                      fontSize: 11, color: "#888", letterSpacing: 1,
                    }}>
                      {a.prizePool}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── CIRCUIT EVENTS GRID ─── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 2, background: "rgba(255,255,255,0.07)",
          marginBottom: 60,
        }}>
          {circuit.map((a, i) => (
            <motion.div
              key={a.event}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="circuit-card"
              style={{ background: "#0D1017", padding: "32px 28px", position: "relative", overflow: "hidden" }}
            >
              {/* Animated left accent */}
              <div className="achieve-line" style={{
                position: "absolute", top: 0, left: 0,
                width: 3, height: "0%", background: "#FF7B00",
                transition: "height 0.35s ease",
              }} />

              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <FiAward size={14} color="#FF7B00" />
                <span style={{
                  fontFamily: "var(--font-space,'Space Mono',monospace)",
                  fontSize: 9, letterSpacing: 2, color: "#888",
                  textTransform: "uppercase",
                }}>
                  {a.org} · {a.year}
                </span>
              </div>

              <div style={{ fontSize: 15, color: "#aaa", marginBottom: 8, lineHeight: 1.4 }}>{a.event}</div>
              <div style={{ fontSize: 13, color: "#666", marginBottom: 16 }}>{a.status}</div>

              <div style={{
                fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                fontSize: 26, color: "#FF7B00", letterSpacing: 2, marginTop: "auto",
              }}>
                {a.result}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Counter strip */}
        <AnimatedSection>
          <div style={{
            display: "flex", flexWrap: "wrap",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 40, gap: 0,
          }}>
            {[
              { num: `${ACHIEVEMENTS.length}+`,  label: "Tournaments" },
              { num: "3",   label: "Major LANs" },
              { num: "3+",  label: "Titles Competed" },
              { num: "2026",label: "Active Season" },
            ].map((s, i, arr) => (
              <div key={s.label} style={{
                flex: "1 1 160px",
                paddingRight: i < arr.length - 1 ? 40 : 0,
                marginRight:  i < arr.length - 1 ? 40 : 0,
                borderRight:  i < arr.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                paddingBottom: 16,
              }}>
                <div style={{
                  fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                  fontSize: 44, color: "#FF7B00", letterSpacing: 2, lineHeight: 1,
                }}>{s.num}</div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "#888", textTransform: "uppercase", marginTop: 4 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        .circuit-card:hover .achieve-line { height: 100% !important; }
        .circuit-card { transition: background 0.2s; }
        .circuit-card:hover { background: #111 !important; }
        @media (max-width: 480px) { #achievements { padding: 60px 20px !important; } }
      `}</style>
    </section>
  );
}
