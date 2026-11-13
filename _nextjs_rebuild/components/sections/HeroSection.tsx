"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { GiCrossedSwords } from "react-icons/gi";
import { MdSportsMartialArts } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";

const STATS = [
  { num: "5+",   label: "Game Titles" },
  { num: "12+",  label: "Pro Athletes" },
  { num: "10+",  label: "Tournaments" },
  { num: "2025", label: "Founded" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "68px 48px 0",
        background: "#090B10",
      }}
    >
      {/* Grid BG */}
      <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Radial glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 70% at 70% 50%, rgba(255,123,0,0.07) 0%, transparent 70%)",
      }} />

      {/* Scan lines */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        opacity: 0.025,
        background: "repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 4px)",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 700 }}>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28 }}
        >
          <div style={{ width: 32, height: 2, background: "#FF7B00" }} />
          <span style={{
            fontFamily: "var(--font-space,'Space Mono',monospace)",
            fontSize: 11, letterSpacing: 3, color: "#FF7B00", textTransform: "uppercase",
          }}>
            India&apos;s Rising Esports Org
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
            fontSize: "clamp(52px, 11vw, 120px)",
            lineHeight: 0.92,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          <span style={{ display: "block", color: "#fff" }}>TEAM</span>
          <span style={{ display: "block", color: "#FF7B00" }}>ASURA</span>
          <span style={{
            display: "block",
            WebkitTextStroke: "1px rgba(255,255,255,0.22)",
            color: "transparent",
          }}>
            VERSE
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{ fontSize: 16, fontWeight: 500, color: "#aaa", lineHeight: 1.8, maxWidth: 480, marginBottom: 40 }}
        >
          Built for the undergods. Competing on big stages, scouting raw talent, and organising tournaments & scrims across India.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 60 }}
        >
          <Link href="/roster-application" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            Apply to Roster <FiArrowRight />
          </Link>
          <Link href="/partner-with-us" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            Partner With Us
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            display: "flex", flexWrap: "wrap", gap: 0,
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: 32,
          }}
        >
          {STATS.map((s, i) => (
            <div key={s.label} style={{
              paddingRight: i < STATS.length - 1 ? 40 : 0,
              marginRight:  i < STATS.length - 1 ? 40 : 0,
              borderRight:  i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
            }}>
              <div style={{
                fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                fontSize: 40, letterSpacing: 2, color: "#FF7B00", lineHeight: 1,
              }}>
                {s.num}
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "#888", textTransform: "uppercase", marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right visual — Logo + floating icons */}
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0,
        width: "45%", display: "flex", alignItems: "center", justifyContent: "center",
        pointerEvents: "none",
      }}
        className="hidden lg:flex"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.88, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ position: "relative", width: 420, height: 420 }}
        >
          <Image
            src="/images/asuraverse-logo.jpg"
            alt="AsuraVerse"
            fill
            sizes="(max-width: 1024px) 0px, 420px"
            style={{ objectFit: "contain", borderRadius: 20, filter: "drop-shadow(0 0 60px rgba(255,123,0,0.3))" }}
            priority
          />

          {/* Floating react-icon badges */}
          {[
            { icon: GiCrossedSwords, label: "BGMI", top: "8%", left: "5%" },
            { icon: HiLightningBolt, label: "Valorant", top: "12%", right: "0%" },
            { icon: MdSportsMartialArts, label: "Free Fire", bottom: "10%", left: "2%" },
          ].map(({ icon: Icon, label, ...pos }) => (
            <motion.div
              key={label}
              style={{
                position: "absolute", ...pos,
                background: "rgba(13,16,23,0.9)",
                border: "1px solid rgba(255,123,0,0.3)",
                padding: "8px 14px",
                display: "flex", alignItems: "center", gap: 8,
                backdropFilter: "blur(8px)",
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + Math.random(), repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
            >
              <Icon size={16} color="#FF7B00" />
              <span style={{ fontFamily: "var(--font-space,'Space Mono',monospace)", fontSize: 10, letterSpacing: 2, color: "#FF7B00" }}>
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Responsive style */}
      <style>{`
        @media (max-width: 768px) {
          #hero { padding: 100px 20px 60px !important; }
        }
      `}</style>
    </section>
  );
}
