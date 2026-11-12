"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { GAMES } from "@/lib/constants";
import { GiCrossedSwords, GiTrophy } from "react-icons/gi";

export default function GamesSection() {
  return (
    <section id="games" style={{ padding: "100px 48px", background: "#090B10", scrollMarginTop: 68 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <AnimatedSection>
          <div className="section-tag">Competing In</div>
          <h2 style={{
            fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
            fontSize: "clamp(36px,5vw,56px)", letterSpacing: 2, textTransform: "uppercase",
            lineHeight: 1, marginBottom: 56,
          }}>
            Our Game <span style={{ color: "#FF7B00" }}>Titles</span>
          </h2>
        </AnimatedSection>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(5, 1fr)",
          gap: 2, background: "rgba(255,255,255,0.07)",
        }}
          className="games-grid"
        >
          {GAMES.map((game, i) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              style={{
                background: "#0D1017", padding: "36px 20px",
                textAlign: "center", cursor: "pointer", position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Bottom accent line */}
              <motion.div
                style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  height: 2, background: game.color ?? "#FF7B00",
                  scaleX: 0, originX: 0,
                }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.25 }}
              />

              {/* Game icon */}
              <div style={{ marginBottom: 14, display: "flex", justifyContent: "center" }}>
                <div style={{ width: 64, height: 64, position: "relative" }}>
                  <Image
                    src={game.img}
                    alt={game.name}
                    fill
                    sizes="64px"
                    style={{ objectFit: "contain", borderRadius: 12 }}
                  />
                </div>
              </div>

              <div style={{
                fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                fontSize: 18, letterSpacing: 2, color: "#fff", marginBottom: 10,
              }}>
                {game.name}
              </div>

              {game.status === "active"
                ? <span className="badge-active"><GiTrophy style={{ display: "inline", marginRight: 4 }} />Active</span>
                : <span className="badge-soon">Coming Soon</span>
              }
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .games-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) {
          #games { padding: 60px 20px !important; }
          .games-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
