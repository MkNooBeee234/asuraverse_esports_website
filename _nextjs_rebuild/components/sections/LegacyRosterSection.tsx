"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";
import { MdHistory } from "react-icons/md";
import AnimatedSection from "@/components/AnimatedSection";
import { PAST_ROSTER } from "@/lib/constants";

export default function LegacyRosterSection() {
  return (
    <section id="roster" style={{ padding: "100px 48px", background: "#0D1017", scrollMarginTop: 68 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <AnimatedSection>
          {/* Legacy badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <MdHistory size={18} color="#888" />
            <span className="badge-legacy">Past Roster</span>
          </div>
          <div className="section-tag">Our Athletes</div>
          <h2 style={{
            fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
            fontSize: "clamp(36px,5vw,56px)", letterSpacing: 2, textTransform: "uppercase",
            lineHeight: 1, marginBottom: 12,
          }}>
            The <span style={{ color: "#FF7B00" }}>BGMI</span> Legacy Roster
          </h2>
          <p style={{ fontSize: 15, color: "#888", marginBottom: 56, maxWidth: 560 }}>
            These are the warriors who built the foundation. AsuraVerse is currently building its next lineup — stay tuned.
          </p>
        </AnimatedSection>

        {/* Player cards */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 24, marginBottom: 48,
        }}>
          {PAST_ROSTER.map((player, i) => (
            <motion.div
              key={player.ign}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              whileHover={{ y: -6, borderColor: "rgba(255,123,0,0.35)" }}
              style={{
                background: "#12161F",
                border: "1px solid rgba(255,255,255,0.07)",
                overflow: "hidden",
                transition: "border-color 0.3s",
                display: "flex", flexDirection: "column",
              }}
            >
              {/* Photo */}
              <div style={{
                height: 320, position: "relative",
                background: "linear-gradient(135deg,#1a0000 0%,#0d0d0d 100%)",
                overflow: "hidden",
              }}>
                <Image
                  src={player.photo}
                  alt={player.ign}
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  style={{ objectFit: "cover", objectPosition: "top", transition: "transform 0.5s" }}
                  className="player-img"
                />
                {/* Gradient overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(0deg,rgba(18,22,31,1) 0%,rgba(18,22,31,0) 45%)",
                }} />
                {/* Role badge */}
                <div style={{
                  position: "absolute", top: 16, right: 16, zIndex: 2,
                  background: "rgba(0,0,0,0.8)", border: "1px solid rgba(255,123,0,0.3)",
                  color: "#FF7B00",
                  fontFamily: "var(--font-space,'Space Mono',monospace)",
                  fontSize: 10, fontWeight: 700, letterSpacing: 2, padding: "6px 12px",
                }}>
                  {player.role}
                </div>
                {/* Legacy watermark */}
                <div style={{
                  position: "absolute", bottom: 12, left: 16, zIndex: 2,
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                  <GiCrossedSwords size={12} color="#888" />
                  <span style={{
                    fontFamily: "var(--font-space,'Space Mono',monospace)",
                    fontSize: 9, color: "#888", letterSpacing: 2, textTransform: "uppercase",
                  }}>Legacy</span>
                </div>
              </div>

              {/* Details */}
              <div style={{ padding: 28, background: "#12161F", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <div style={{
                  fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                  fontSize: 34, letterSpacing: 3, color: "#fff", lineHeight: 1, marginBottom: 4,
                }}>
                  {player.ign}
                </div>
                <div style={{ fontSize: 13, color: "#888", marginBottom: 20 }}>{player.real}</div>

                <ul style={{ listStyle: "none", flexGrow: 1, marginBottom: 20 }}>
                  {player.achievements.map((a) => (
                    <li key={a} style={{
                      position: "relative", paddingLeft: 16,
                      fontSize: 13, color: "#aaa", lineHeight: 1.6, marginBottom: 6,
                    }}>
                      <span style={{ position: "absolute", left: 0, color: "#FF7B00" }}>▹</span>
                      {a}
                    </li>
                  ))}
                </ul>

                <div style={{
                  paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.07)",
                  display: "flex", alignItems: "center", gap: 10,
                }}>
                  <a
                    href={player.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      color: "#888", textDecoration: "none",
                      fontFamily: "var(--font-space,'Space Mono',monospace)",
                      fontSize: 11, letterSpacing: 1, textTransform: "uppercase",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#FF7B00")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#888")}
                  >
                    <FaInstagram size={14} /> Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection style={{ textAlign: "center" }}>
          <Link href="/players" className="btn-primary">View Full Legacy Roster</Link>
        </AnimatedSection>
      </div>

      <style>{`
        .player-img:hover { transform: scale(1.05); }
        @media (max-width: 480px) { #roster { padding: 60px 20px !important; } }
      `}</style>
    </section>
  );
}
