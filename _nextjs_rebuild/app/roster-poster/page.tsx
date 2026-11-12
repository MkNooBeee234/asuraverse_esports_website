import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaArrowLeft } from "react-icons/fa";
import PrintButton from "@/components/PrintButton";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Official BGMI Roster Poster",
  description: "Official 1080x1350 team poster of AsuraVerse Esports BGMI lineup.",
};

export default function RosterPosterPage() {
  return (
    <div style={{ background: "#050000", minHeight: "100vh", paddingTop: 88, paddingBottom: 64 }}>
      {/* Top action bar */}
      <div style={{
        maxWidth: 1080,
        margin: "0 auto 24px",
        padding: "0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}>
        <Link href="/players" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px" }}>
          <FaArrowLeft size={12} /> Back to Legacy Roster
        </Link>
        <PrintButton />
      </div>

      {/* Poster Scaler / Container */}
      <div className="poster-outer-wrapper">
        <div className="poster">
          {/* Backgrounds */}
          <div className="p-bg1" />
          <div className="p-bg2" />
          <div className="p-fire-core" />
          <div className="p-fire-top" />
          <div className="p-sparks" />
          <div className="p-side-bar left" />
          <div className="p-side-bar right" />

          {/* Corner brackets */}
          <div className="p-corner tl" />
          <div className="p-corner tr" />
          <div className="p-corner bl" />
          <div className="p-corner br" />

          {/* Header */}
          <div className="p-header">
            <div className="p-logo-group">
              <div style={{ width: 64, height: 64, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255,80,0,0.6)", boxShadow: "0 0 20px rgba(255,60,0,0.5)", position: "relative" }}>
                <Image src="/images/asuraverse-logo.jpg" alt="Logo" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)" }}>
                <div style={{ fontSize: 30, letterSpacing: 5, color: "#fff", lineHeight: 1 }}>
                  ASURA<span style={{ color: "#FF5500" }}>VERSE</span>
                </div>
                <div style={{ fontSize: 10, letterSpacing: 4, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-space, 'Space Mono', monospace)" }}>
                  Esports Pvt Ltd
                </div>
              </div>
            </div>
            <div className="p-hdr-center">BGMI ROSTER</div>
            <div className="p-bgmi-box">
              <div style={{ fontFamily: "var(--font-bebas, 'Bebas Neue', sans-serif)", fontSize: 26, color: "#FF5500", letterSpacing: 2, lineHeight: 1 }}>BGMI</div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: 2, fontFamily: "var(--font-space, 'Space Mono', monospace)" }}>KRAFTON</div>
            </div>
          </div>

          {/* Players Composite */}
          <div className="p-players">
            {/* Back row: Blaze & Frozen */}
            <div className="p-player p-blaze">
              <div className="p-ph">
                <Image src="/images/Blaze.jpeg" alt="Blaze" fill style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div className="p-ign">BLAZE</div>
            </div>

            <div className="p-player p-frozen">
              <div className="p-ph">
                <Image src="/images/Frozen.jpeg" alt="Frozen" fill style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div className="p-ign">FROZEN</div>
            </div>

            {/* Front row: Snipy & Vikki */}
            <div className="p-player p-snipy">
              <div className="p-ph">
                <Image src="/images/snipy.jpeg" alt="Snipy" fill style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div className="p-ign">SNIPY</div>
            </div>

            <div className="p-player p-vikki">
              <div className="p-ph">
                <Image src="/images/vikki.jpeg" alt="Vikki" fill style={{ objectFit: "cover", objectPosition: "top" }} />
              </div>
              <div className="p-ign">VIKKI</div>
            </div>

            {/* Center Hero: Thug */}
            <div className="p-player p-thug">
              <div className="p-ph">
                <Image src="/images/Thug.jpeg" alt="Thug" fill style={{ objectFit: "cover", objectPosition: "top" }} priority />
              </div>
              <div className="p-ign hero-ign">THUG</div>
            </div>
          </div>

          {/* Separator line */}
          <div className="p-sep" />

          {/* Bottom section */}
          <div className="p-bottom">
            <div className="p-lbl-intro">Legacy BGMI Lineup</div>
            <div className="p-team-big">ASURAVERSE</div>
            <div className="p-roster-names">
              BLAZE <span>·</span> FROZEN <span>·</span> SNIPY <span>·</span> THUG <span>·</span> VIKKI
            </div>
            <div className="p-socials">
              <div className="p-soc">
                <FaInstagram size={18} color="#FF7B00" />
                <span>@teamasuraverse</span>
              </div>
              <div className="p-soc">
                <FaTwitter size={18} color="#FF7B00" />
                <span>@asuraversegg</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .poster-outer-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 16px;
          overflow-x: auto;
        }

        .poster {
          width: 1080px;
          height: 1350px;
          position: relative;
          overflow: hidden;
          background: #050000;
          box-shadow: 0 20px 80px rgba(255, 80, 0, 0.2), 0 0 0 1px rgba(255, 123, 0, 0.25);
          flex-shrink: 0;
          transform-origin: top center;
        }

        @media (max-width: 1140px) {
          .poster {
            transform: scale(0.75);
            margin-bottom: -337px;
          }
        }

        @media (max-width: 860px) {
          .poster {
            transform: scale(0.55);
            margin-bottom: -607px;
          }
        }

        @media (max-width: 620px) {
          .poster {
            transform: scale(0.35);
            margin-bottom: -877px;
          }
        }

        @media (max-width: 400px) {
          .poster {
            transform: scale(0.29);
            margin-bottom: -958px;
          }
        }

        /* Poster Internal Styles */
        .p-bg1 {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 100% 80% at 50% 20%, #2a0400 0%, #0d0000 50%, #000 100%);
        }
        .p-bg2 {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 50% 70% at 20% 60%, rgba(180,30,0,0.18) 0%, transparent 70%),
            radial-gradient(ellipse 50% 70% at 80% 60%, rgba(180,30,0,0.18) 0%, transparent 70%);
        }
        .p-fire-core {
          position: absolute; left: 50%; bottom: 330px; transform: translateX(-50%);
          width: 600px; height: 600px;
          background: radial-gradient(ellipse 60% 50% at 50% 80%, rgba(255,80,0,0.7) 0%, rgba(255,40,0,0.45) 20%, rgba(200,10,0,0.2) 50%, transparent 75%);
          filter: blur(8px); pointer-events: none; z-index: 1;
        }
        .p-fire-top {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          width: 800px; height: 400px;
          background: radial-gradient(ellipse 70% 80% at 50% 0%, rgba(150,20,0,0.3) 0%, transparent 80%);
          pointer-events: none; z-index: 1;
        }
        .p-sparks {
          position: absolute; inset: 0; pointer-events: none; z-index: 2;
          background-image:
            radial-gradient(circle 2px at 25% 30%, rgba(255,140,0,0.9) 0%, transparent 100%),
            radial-gradient(circle 1px at 75% 20%, rgba(255,180,0,0.8) 0%, transparent 100%),
            radial-gradient(circle 2px at 60% 45%, rgba(255,100,0,0.7) 0%, transparent 100%),
            radial-gradient(circle 1px at 15% 55%, rgba(255,120,0,0.6) 0%, transparent 100%),
            radial-gradient(circle 2px at 85% 35%, rgba(255,150,0,0.8) 0%, transparent 100%),
            radial-gradient(circle 1px at 40% 15%, rgba(255,200,0,0.6) 0%, transparent 100%),
            radial-gradient(circle 2px at 70% 60%, rgba(255,80,0,0.7) 0%, transparent 100%);
        }
        .p-side-bar {
          position: absolute; top: 80px; bottom: 310px; width: 3px;
          background: linear-gradient(180deg, transparent 0%, rgba(255,80,0,0.7) 30%, rgba(255,80,0,0.7) 70%, transparent 100%);
          z-index: 20;
        }
        .p-side-bar.left { left: 36px; }
        .p-side-bar.right { right: 36px; }
        .p-side-bar::before {
          content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          width: 10px; height: 10px; background: #FF5000; border-radius: 50%;
          box-shadow: 0 0 15px 4px rgba(255,80,0,0.8);
        }
        .p-corner { position: absolute; width: 28px; height: 28px; z-index: 35; }
        .p-corner.tl { top: 14px; left: 14px; border-top: 3px solid rgba(255,80,0,0.7); border-left: 3px solid rgba(255,80,0,0.7); }
        .p-corner.tr { top: 14px; right: 14px; border-top: 3px solid rgba(255,80,0,0.7); border-right: 3px solid rgba(255,80,0,0.7); }
        .p-corner.bl { bottom: 14px; left: 14px; border-bottom: 3px solid rgba(255,80,0,0.7); border-left: 3px solid rgba(255,80,0,0.7); }
        .p-corner.br { bottom: 14px; right: 14px; border-bottom: 3px solid rgba(255,80,0,0.7); border-right: 3px solid rgba(255,80,0,0.7); }

        .p-header {
          position: absolute; top: 0; left: 0; right: 0; height: 105px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 64px;
          background: linear-gradient(180deg, rgba(0,0,0,0.92) 0%, transparent 100%);
          z-index: 30;
        }
        .p-logo-group { display: flex; align-items: center; gap: 14px; }
        .p-hdr-center {
          font-family: var(--font-bebas, 'Bebas Neue', sans-serif);
          font-size: 24px; letter-spacing: 8px; color: rgba(255,255,255,0.7);
        }
        .p-bgmi-box {
          width: 76px; height: 76px;
          border: 2px solid rgba(255,80,0,0.5); background: rgba(0,0,0,0.7);
          border-radius: 6px; display: flex; flex-direction: column; align-items: center; justify-content: center;
        }

        .p-players {
          position: absolute; top: 90px; left: 0; right: 0; bottom: 305px; z-index: 5;
        }
        .p-player {
          position: absolute; bottom: 0; display: flex; flex-direction: column; align-items: center;
        }
        .p-ph { position: relative; overflow: hidden; }
        .p-ign {
          position: absolute; bottom: 14px; left: 0; right: 0; text-align: center; z-index: 10;
          font-family: var(--font-bebas, 'Bebas Neue', sans-serif);
          letter-spacing: 4px;
          text-shadow: 0 0 30px rgba(255,60,0,0.9), 0 2px 10px rgba(0,0,0,1);
        }

        /* Positions */
        .p-thug { width: 360px; left: 50%; transform: translateX(-50%); bottom: 0; z-index: 15; }
        .p-thug .p-ph { width: 360px; height: 590px; }
        .p-thug .p-ph::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(5,0,0,1) 0%, rgba(5,0,0,0.3) 25%, transparent 55%);
        }
        .p-thug .hero-ign { font-size: 44px; color: #FF5500; bottom: 22px; }

        .p-snipy { width: 290px; left: 88px; bottom: 0; z-index: 12; }
        .p-snipy .p-ph { width: 290px; height: 480px; }
        .p-snipy .p-ph::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(5,0,0,1) 0%, rgba(5,0,0,0.4) 22%, transparent 50%);
        }
        .p-snipy .p-ign { font-size: 32px; color: #fff; }

        .p-vikki { width: 290px; right: 88px; bottom: 0; z-index: 12; }
        .p-vikki .p-ph { width: 290px; height: 480px; }
        .p-vikki .p-ph::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(5,0,0,1) 0%, rgba(5,0,0,0.4) 22%, transparent 50%);
        }
        .p-vikki .p-ign { font-size: 32px; color: #fff; }

        .p-blaze { width: 260px; left: 50%; margin-left: -320px; bottom: 260px; z-index: 8; }
        .p-blaze .p-ph { width: 260px; height: 380px; }
        .p-blaze .p-ph::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(5,0,0,1) 0%, rgba(5,0,0,0.5) 20%, transparent 50%);
        }
        .p-blaze .p-ign { font-size: 28px; color: rgba(255,255,255,0.85); bottom: 14px; }

        .p-frozen { width: 260px; left: 50%; margin-left: 60px; bottom: 260px; z-index: 8; }
        .p-frozen .p-ph { width: 260px; height: 380px; }
        .p-frozen .p-ph::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(5,0,0,1) 0%, rgba(5,0,0,0.5) 20%, transparent 50%);
        }
        .p-frozen .p-ign { font-size: 28px; color: rgba(255,255,255,0.85); bottom: 14px; }

        .p-sep {
          position: absolute; bottom: 303px; left: 60px; right: 60px; height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(255,80,0,0.9) 30%, rgba(255,200,100,0.9) 50%, rgba(255,80,0,0.9) 70%, transparent 100%);
          z-index: 25; box-shadow: 0 0 12px rgba(255,80,0,0.6);
        }

        .p-bottom {
          position: absolute; bottom: 0; left: 0; right: 0; height: 305px;
          background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.98) 15%, #000 100%);
          z-index: 25; display: flex; flex-direction: column; align-items: center; justify-content: center;
        }
        .p-lbl-intro {
          font-family: var(--font-space, 'Space Mono', monospace);
          font-size: 13px; font-weight: 700; letter-spacing: 6px;
          color: rgba(255,255,255,0.65); text-transform: uppercase; margin-bottom: 6px;
        }
        .p-team-big {
          font-family: var(--font-bebas, 'Bebas Neue', sans-serif);
          font-size: 110px; line-height: 0.88; letter-spacing: 4px;
          background: linear-gradient(180deg, #FF9500 0%, #FF4400 45%, #CC1500 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 40px rgba(255,70,0,0.7));
          margin-bottom: 14px;
        }
        .p-roster-names {
          font-family: var(--font-space, 'Space Mono', monospace);
          font-size: 15px; font-weight: 700; letter-spacing: 4px;
          color: rgba(255,255,255,0.5); text-transform: uppercase; margin-bottom: 20px;
        }
        .p-roster-names span { color: #FF7B00; }
        .p-socials { display: flex; align-items: center; gap: 36px; }
        .p-soc {
          display: flex; align-items: center; gap: 8px;
          font-family: var(--font-rajdhani, 'Rajdhani', sans-serif);
          font-size: 16px; font-weight: 600; color: rgba(255,255,255,0.6);
        }

        @media print {
          body { background: #000 !important; }
          nav, footer, .btn-ghost, .btn-primary { display: none !important; }
          .poster-outer-wrapper { padding: 0 !important; }
          .poster { box-shadow: none !important; transform: none !important; margin: 0 auto !important; }
        }
      `}</style>
    </div>
  );
}
