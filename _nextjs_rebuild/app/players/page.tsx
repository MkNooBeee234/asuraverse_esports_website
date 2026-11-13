import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { GiCrossedSwords } from "react-icons/gi";
import { PAST_ROSTER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Legacy BGMI Roster",
  description: "The past BGMI roster of Team AsuraVerse Esports — Blaze, Frozen, Snipy, Thug, Vikki. The warriors who built the foundation.",
};

export default function PlayersPage() {
  return (
    <div style={{ background: "#090B10", minHeight: "100vh", paddingTop: 68 }}>
      {/* Hero */}
      <header style={{
        padding: "80px 48px 56px", background: "#0D1017",
        position: "relative", overflow: "hidden", textAlign: "center",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(255,123,0,0.05) 0%, transparent 70%)",
        }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
            <MdHistory size={18} color="#888" />
            <span className="badge-legacy">Past Roster</span>
          </div>
          <div style={{
            fontFamily: "var(--font-space,'Space Mono',monospace)",
            fontSize: 11, letterSpacing: 4, color: "#FF7B00",
            textTransform: "uppercase", marginBottom: 16,
          }}>
            // Legacy Athletes
          </div>
          <h1 style={{
            fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
            fontSize: "clamp(40px,8vw,72px)", letterSpacing: 3,
            textTransform: "uppercase", marginBottom: 20,
          }}>
            BGMI <span style={{ color: "#FF7B00" }}>Legacy Roster</span>
          </h1>
          <p style={{ fontSize: 16, color: "#aaa", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            These warriors competed on big stages and built the foundation of AsuraVerse. We are currently building our next competitive lineup.
          </p>
        </div>
      </header>

      {/* Cards */}
      <section style={{ padding: "60px 48px", maxWidth: 1400, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 32,
        }}>
          {PAST_ROSTER.map((player) => (
            <div
              key={player.ign}
              className="player-card-hover"
            style={{
                background: "#0D1017", border: "1px solid rgba(255,255,255,0.07)",
                overflow: "hidden", display: "flex", flexDirection: "column",
              }}
            >
              {/* Photo */}
              <div style={{
                height: 360, position: "relative",
                background: "linear-gradient(135deg,#1a0000 0%,#0d0d0d 100%)",
                overflow: "hidden",
              }}>
                <Image
                  src={player.photo}
                  alt={player.ign}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(0deg,rgba(13,16,23,1) 0%,rgba(13,16,23,0) 45%)",
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
                {/* Legacy tag */}
                <div style={{
                  position: "absolute", bottom: 16, left: 16, zIndex: 2,
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                  <GiCrossedSwords size={12} color="#888" />
                  <span style={{
                    fontFamily: "var(--font-space,'Space Mono',monospace)",
                    fontSize: 9, color: "#888", letterSpacing: 2, textTransform: "uppercase",
                  }}>Legacy · BGMI</span>
                </div>
              </div>

              {/* Details */}
              <div style={{ padding: 32, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <div style={{
                  fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
                  fontSize: 36, letterSpacing: 3, color: "#fff", lineHeight: 1, marginBottom: 4,
                }}>
                  {player.ign}
                </div>
                <div style={{ fontSize: 14, color: "#888", marginBottom: 24 }}>{player.real}</div>

                <ul style={{ listStyle: "none", flexGrow: 1, marginBottom: 20 }}>
                  {player.achievements.map((a) => (
                    <li key={a} style={{
                      position: "relative", paddingLeft: 16,
                      fontSize: 13, color: "#aaa", lineHeight: 1.7, marginBottom: 6,
                    }}>
                      <span style={{ position: "absolute", left: 0, color: "#FF7B00" }}>▹</span>
                      {a}
                    </li>
                  ))}
                </ul>

                <div style={{
                  paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.07)",
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
                    className="ig-link"
                  >
                    <FaInstagram size={14} /> Instagram
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recruitment CTA */}
        <div style={{
          marginTop: 80, textAlign: "center",
          padding: "60px 48px",
          background: "#0D1017", border: "1px solid rgba(255,255,255,0.07)",
        }}>
          <div style={{
            fontFamily: "var(--font-space,'Space Mono',monospace)",
            fontSize: 11, letterSpacing: 3, color: "#FF7B00",
            textTransform: "uppercase", marginBottom: 20,
          }}>
            // Active Recruitment
          </div>
          <h2 style={{
            fontFamily: "var(--font-bebas,'Bebas Neue',sans-serif)",
            fontSize: "clamp(32px,5vw,56px)", letterSpacing: 2, textTransform: "uppercase",
            marginBottom: 16, color: "#fff",
          }}>
            Want to be on the <span style={{ color: "#FF7B00" }}>Next Roster</span>?
          </h2>
          <p style={{ fontSize: 16, color: "#aaa", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
            AsuraVerse is scouting for Tier-1 competitive players. Apply now and our scouts will review your profile.
          </p>
          <Link href="/roster-application" className="btn-primary">Submit Your Application</Link>
        </div>
      </section>

      <style>{`
        .player-card-hover { transition: transform 0.3s, border-color 0.3s; }
        .player-card-hover:hover { transform: translateY(-6px); border-color: rgba(255,123,0,0.3) !important; }
        .ig-link { color: #888; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-space,'Space Mono',monospace); font-size: 11px;
          letter-spacing: 1px; text-transform: uppercase; transition: color 0.2s; }
        .ig-link:hover { color: #FF7B00; }
        @media(max-width:480px){header,section{padding-left:20px!important;padding-right:20px!important}}
      `}</style>
    </div>
  );
}
