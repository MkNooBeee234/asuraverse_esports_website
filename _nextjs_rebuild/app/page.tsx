import type { Metadata } from "next";
import HeroSection        from "@/components/sections/HeroSection";
import TickerBar          from "@/components/sections/TickerBar";
import AboutSection       from "@/components/sections/AboutSection";
import GamesSection       from "@/components/sections/GamesSection";
import LegacyRosterSection from "@/components/sections/LegacyRosterSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import TournamentsSection  from "@/components/sections/TournamentsSection";
import PartnersSection     from "@/components/sections/PartnersSection";
import ContactSection      from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Team AsuraVerse Esports Pvt Ltd | India's Rising Esports Org",
  description:
    "AsuraVerse Esports — Gandhinagar's finest. Competing in BGMI, Valorant, Free Fire. Scouting raw talent, organising tournaments & scrims. The undergods rise.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TickerBar />
      <AboutSection />
      <GamesSection />
      <LegacyRosterSection />
      <AchievementsSection />
      <TournamentsSection />
      <PartnersSection />
      <ContactSection />
    </>
  );
}
