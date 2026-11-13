import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Team AsuraVerse tournaments, LAN events, and team moments.",
};

const GALLERY_ITEMS = [
  { src: "/images/trident-ignite.jpg",        alt: "Trident Ignite 2026 : Road to Masters", tag: "Tournament" },
  { src: "/images/trident-round1-group44.jpg", alt: "Trident Ignite Round 1 Group 44 (Rank #3, Qualified)", tag: "Scoreboard" },
  { src: "/images/trident-round2-group10.jpg", alt: "Trident Ignite Round 2 Group 10 (Rank #6)", tag: "Scoreboard" },
  { src: "/images/bihar-championship.jpg",     alt: "Bihar State Open Esports Championship 2026", tag: "Championship" },
  { src: "/images/asuraverse-logo.jpg",        alt: "AsuraVerse Official Crest", tag: "HQ" },
  { src: "/images/chandra-prakash-suthar.jpg", alt: "Chandra Prakash Suthar — Co-Founder", tag: "Leadership" },
  { src: "/images/bgmi.jpg",                   alt: "BGMI Championship Division", tag: "Esports" },
  { src: "/images/Thug.jpeg",                  alt: "Thug — Support Anchor",     tag: "Athlete" },
  { src: "/images/Blaze.jpeg",                 alt: "Blaze — Entry Fragger",     tag: "Athlete" },
  { src: "/images/Frozen.jpeg",                alt: "Frozen — IGL Strategist",   tag: "Athlete" },
  { src: "/images/snipy.jpeg",                 alt: "Snipy — Sharpshooter",      tag: "Athlete" },
  { src: "/images/vikki.jpeg",                 alt: "Vikki — Front Rusher",      tag: "Athlete" },
  { src: "/images/valorant.jpg",               alt: "Valorant Tactical Lineup",  tag: "Esports" },
];

export default function GalleryPage() {
  return (
    <div style={{ background: "#090B10", minHeight: "100vh", paddingTop: 68 }}>
      {/* Hero */}
      <header style={{
        padding: "80px 48px 56px", background: "#0D1017",
        textAlign: "center", position: "relative", overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(255,123,0,0.05) 0%, transparent 70%)",
        }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{
            fontFamily: "var(--font-space,'Space Mono',monospace)",
            fontSize: 11, letterSpacing: 4, color: "#FF7B00",
            textTransform: "uppercase", marginBottom: 16,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
          }}>
            <span style={{ width: 40, height: 1, background: "#FF7B00", display: "block" }} />
            Team Moments
            <span style={{ width: 40, height: 1, background: "#FF7B00", display: "block" }} />
          </div>
          <h1 style={{
            fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
            fontSize: "clamp(40px,8vw,72px)", letterSpacing: 3,
            textTransform: "uppercase", marginBottom: 16,
          }}>
            <span style={{ color: "#FF7B00" }}>Gallery</span>
          </h1>
          <p style={{ fontSize: 16, color: "#aaa", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Photos from our tournaments, LAN events, and team moments.
          </p>
        </div>
      </header>

      {/* Grid */}
      <section style={{ padding: "60px 48px", maxWidth: 1400, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 2, background: "rgba(255,255,255,0.07)",
        }}>
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              style={{
                position: "relative", height: 300, overflow: "hidden",
                background: "#0D1017", cursor: "pointer",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: "cover", objectPosition: "top", transition: "transform 0.5s" }}
                className="gallery-img"
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(0deg,rgba(9,11,16,0.7) 0%,transparent 60%)",
                transition: "opacity 0.3s",
              }} />
              <div style={{
                position: "absolute", bottom: 16, left: 16, zIndex: 2,
              }}>
                <span style={{
                  fontFamily: "var(--font-space,'Space Mono',monospace)",
                  fontSize: 9, letterSpacing: 2, color: "#FF7B00",
                  textTransform: "uppercase",
                  background: "rgba(0,0,0,0.7)",
                  border: "1px solid rgba(255,123,0,0.3)",
                  padding: "4px 10px",
                }}>
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 40, fontSize: 14, color: "#555" }}>
          More photos coming soon — follow us on{" "}
          <a href="https://www.instagram.com/teamasuraverse/" target="_blank" rel="noopener noreferrer"
            style={{ color: "#FF7B00" }}>
            @teamasuraverse
          </a>
        </p>
      </section>

      <style>{`
        .gallery-img:hover { transform: scale(1.08) !important; }
        @media (max-width: 480px) {
          header, section { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </div>
  );
}
