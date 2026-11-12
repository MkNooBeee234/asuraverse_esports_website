"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const pathname                  = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* ─── DESKTOP NAV ─── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
          height: 68,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 48px",
          background: scrolled ? "rgba(9,11,16,0.97)" : "rgba(9,11,16,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          transition: "background 0.3s",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
          <div style={{ width: 42, height: 42, borderRadius: "50%", overflow: "hidden", border: "1px solid rgba(255,123,0,0.3)" }}>
            <Image src="/images/asuraverse-logo.jpg" alt="AsuraVerse Logo" width={42} height={42} style={{ objectFit: "cover" }} />
          </div>
          <div style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}>
            <div style={{ fontSize: 20, letterSpacing: 3, color: "#fff" }}>
              ASURA<span style={{ color: "#FF7B00" }}>VERSE</span>
            </div>
            <div style={{ fontSize: 9, letterSpacing: 4, color: "#888", fontFamily: "var(--font-space, 'Space Mono', monospace)" }}>
              Esports Pvt Ltd
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul style={{ display: "flex", alignItems: "center", gap: 36, listStyle: "none" }}
          className="hidden md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href.split("#")[0]));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: 13, fontWeight: 600, letterSpacing: 2,
                    textTransform: "uppercase",
                    color: active ? "#FF7B00" : "#aaa",
                    textDecoration: "none", position: "relative",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => { if (!active) (e.target as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={e => { if (!active) (e.target as HTMLElement).style.color = "#aaa"; }}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      style={{
                        position: "absolute", bottom: -4, left: 0, right: 0,
                        height: 1, background: "#FF7B00",
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA + Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link href="/roster-application" className="nav-cta hidden md:inline-block">
            Apply Now
          </Link>
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", color: "#f0f0f0", cursor: "pointer", padding: 6 }}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* ─── MOBILE MENU ─── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed", top: 68, left: 0, right: 0, zIndex: 999,
              background: "rgba(9,11,16,0.98)", backdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              padding: "16px 24px 24px",
            }}
          >
            <ul style={{ listStyle: "none" }}>
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <Link
                    href={link.href}
                    style={{
                      display: "block", padding: "14px 0",
                      fontSize: 14, fontWeight: 600, letterSpacing: 2,
                      textTransform: "uppercase", color: "#aaa",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.06 }}
                style={{ paddingTop: 16 }}
              >
                <Link href="/roster-application" className="btn-primary" style={{ width: "100%", textAlign: "center", display: "block" }}>
                  Apply Now
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
