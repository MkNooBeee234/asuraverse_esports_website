"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaDiscord, FaTwitter } from "react-icons/fa";
import { SITE } from "@/lib/constants";

const FOOTER_NAV = [
  { heading: "Organisation", links: [
    { label: "About Us",        href: "/#about" },
    { label: "Our Games",       href: "/#games" },
    { label: "Achievements",    href: "/#achievements" },
    { label: "Tournaments",     href: "/#tournaments" },
  ]},
  { heading: "Team", links: [
    { label: "Legacy Roster",   href: "/players" },
    { label: "Founders",        href: "/founder" },
    { label: "Gallery",         href: "/gallery" },
    { label: "Roster Poster",   href: "/roster-poster" },
    { label: "Apply Now",       href: "/roster-application" },
  ]},
  { heading: "Connect", links: [
    { label: "Partner With Us", href: "/partner-with-us" },
    { label: "Contact",         href: "/#contact" },
    { label: "Instagram",       href: SITE.instagram, external: true },
    { label: "Twitter / X",     href: SITE.twitter, external: true },
  ]},
];

const SOCIALS = [
  { icon: FaInstagram, href: SITE.instagram,          label: "Instagram" },
  { icon: FaYoutube,   href: "#",                     label: "YouTube" },
  { icon: FaTwitter,   href: SITE.twitter,            label: "Twitter / X" },
  { icon: FaDiscord,   href: "#",                     label: "Discord" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#050507", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      {/* Top */}
      <div style={{
        padding: "64px 48px 40px",
        display: "grid",
        gridTemplateColumns: "1.5fr repeat(3, 1fr)",
        gap: 40,
        maxWidth: 1400,
        margin: "0 auto",
      }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", marginBottom: 20 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", overflow: "hidden", border: "1px solid rgba(255,123,0,0.3)" }}>
              <Image src="/images/asuraverse-logo.jpg" alt="AsuraVerse Logo" width={40} height={40} style={{ objectFit: "cover" }} />
            </div>
            <div style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)", fontSize: 18, letterSpacing: 3, color: "#fff" }}>
              ASURA<span style={{ color: "#FF7B00" }}>VERSE</span>
            </div>
          </Link>
          <p style={{ fontSize: 14, color: "#888", lineHeight: 1.8, marginBottom: 12 }}>
            Team AsuraVerse Esports Pvt Ltd<br />
            Gandhinagar, Gujarat, India
          </p>
          <p style={{ fontFamily: "var(--font-space, 'Space Mono', monospace)", fontSize: 10, color: "#FF7B00", letterSpacing: 2, textTransform: "uppercase" }}>
            // Built for the Undergods
          </p>
        </div>

        {/* Nav cols */}
        {FOOTER_NAV.map((col) => (
          <div key={col.heading}>
            <div style={{
              fontFamily: "var(--font-space, 'Space Mono', monospace)",
              fontSize: 10, letterSpacing: 3, color: "#888",
              textTransform: "uppercase", marginBottom: 20,
            }}>
              {col.heading}
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={"external" in link && link.external ? "_blank" : undefined}
                    rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                    style={{ fontSize: 14, color: "#555", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = "#FF7B00"}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = "#555"}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.05)", margin: "0 48px" }} />

      {/* Bottom */}
      <div style={{
        padding: "24px 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        maxWidth: 1400, margin: "0 auto",
      }}>
        <span style={{
          fontFamily: "var(--font-space, 'Space Mono', monospace)",
          fontSize: 11, color: "#444", letterSpacing: 1,
        }}>
          © {new Date().getFullYear()} Team AsuraVerse Esports Pvt Ltd. All Rights Reserved.
        </span>

        {/* Socials */}
        <div style={{ display: "flex", gap: 12 }}>
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: 36, height: 36,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#555", transition: "color 0.2s, border-color 0.2s, background 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.color = "#FF7B00";
                el.style.borderColor = "rgba(255,123,0,0.4)";
                el.style.background = "rgba(255,123,0,0.08)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.color = "#555";
                el.style.borderColor = "rgba(255,255,255,0.07)";
                el.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; padding: 40px 16px 24px !important; }
        }
      `}</style>
    </footer>
  );
}
