// ─── TEAM DATA & CONSTANTS ───────────────────────────────────────────────────

export const SITE = {
  name: "Team AsuraVerse Esports",
  shortName: "AsuraVerse",
  domain: "asuraverse.in",
  url: "https://asuraverse.in",
  email: "teamasuraverse@gmail.com",
  instagram: "https://www.instagram.com/teamasuraverse/",
  twitter: "https://x.com/asuraversegg",
  location: "Gandhinagar, Gujarat, India",
  founded: "2025",
  tagline: "Built for the Undergods. Driven by the Rise.",
  description:
    "India's rising esports organisation — scouting raw talent, competing on big stages, and organising tournaments & scrims.",
};

export const NAV_LINKS = [
  { label: "About",     href: "/#about" },
  { label: "Games",     href: "/#games" },
  { label: "Legacy",    href: "/players" },
  { label: "Founders",  href: "/founder" },
  { label: "Gallery",   href: "/gallery" },
  { label: "Tournaments", href: "/#tournaments" },
];

// ─── PAST BGMI ROSTER ────────────────────────────────────────────────────────
export const PAST_ROSTER = [
  {
    ign: "BLAZE",
    real: "Niket Verma",
    role: "Fragger",
    game: "BGMI",
    photo: "/images/Blaze.jpeg",
    instagram: "https://www.instagram.com/blaze.__.13",
    achievements: [
      "BGIS 2023 Quarterfinals",
      "BMPS 2023",
      "BGIS 2024 Round 3",
      "BMPS 2024 Round 1",
      "JIO Blast LAN #5",
      "BGIS 2026 Round 4",
    ],
  },
  {
    ign: "FROZEN",
    real: "Aryan Singh",
    role: "IGL",
    game: "BGMI",
    photo: "/images/Frozen.jpeg",
    instagram: "https://www.instagram.com/frozen77k",
    achievements: [
      "BGIS 2023 Quarterfinals",
      "BMPS 2023",
      "BGIS 2024 Round 3",
      "JIO Blast LAN #5",
      "BGIS 2026 Round 4",
    ],
  },
  {
    ign: "SNIPY",
    real: "Nikhil Chaudhary",
    role: "Sniper",
    game: "BGMI",
    photo: "/images/snipy.jpeg",
    instagram: "https://www.instagram.com/dmxsnipy",
    achievements: [
      "BGIS 2025 Round 3",
      "JIO Blast LAN #5",
    ],
  },
  {
    ign: "THUG",
    real: "Abhay Kumar",
    role: "Support",
    game: "BGMI",
    photo: "/images/Thug.jpeg",
    instagram: "https://www.instagram.com/elf_thug69",
    achievements: [
      "BGIS 2023 Quarterfinals",
      "BMPS 2023",
      "BGIS 2024 Quarterfinals",
      "OnePlus Dominate #8",
      "JIO Blast LAN #5",
      "BGIS 2026 Round 4",
      "UE Semifinalist",
    ],
  },
  {
    ign: "VIKKI",
    real: "Sunder Singh",
    role: "Rusher",
    game: "BGMI",
    photo: "/images/vikki.jpeg",
    instagram: "https://www.instagram.com/ig_vikki10",
    achievements: [
      "BGIS 2024 Round 3",
      "BGIS 2026 Round 4",
    ],
  },
];

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────
export const ACHIEVEMENTS = [
  {
    result: "#6 ROUND 2",
    event: "Trident Ignite: Road to Masters",
    org: "BGMI",
    prizePool: "₹15,00,000",
    status: "Round 1: #3 | Round 2: #6",
    img: "/images/trident-ignite.jpg",
    icon: "🔥",
    year: "2026",
    highlight: true,
  },
  // LAN / Major tournaments (with bracket images from live site)
  {
    result: "#4 QUARTER FINALS",
    event: "Bihar State Open Esports Championship",
    org: "BGMI",
    prizePool: "₹5,75,000",
    status: "COMPLETED",
    img: "/images/bihar-championship.jpg"
    icon: "🏆",
    year: "2026",
    highlight: true,
  },
  {
    result: "#1 OVERALL",
    event: "Tortuga T1",
    org: "BGMI",
    prizePool: "",
    status: "Qualifiers",
    img: null,
    icon: "🥇",
    year: "2026",
    highlight: true,
  },
  {
    result: "#8 PLACEMENT",
    event: "7K Grand Finals",
    org: "BGMI",
    prizePool: "",
    status: "16–18 Teams Fix",
    img: null,
    icon: "🎖️",
    year: "2026",
    highlight: false,
  },
  // Online circuit events
  {
    result: "CHAMPIONS",
    event: "Weekly Showdown",
    org: "BGMI",
    prizePool: "",
    status: "by Incubeta's Flux",
    img: null,
    icon: "🏆",
    year: "2024",
    highlight: false,
  },
  {
    result: "GRAND FINALIST",
    event: "Rising Showdown S2",
    org: "BGMI",
    prizePool: "",
    status: "by Raka Esports",
    img: null,
    icon: "🥈",
    year: "2024",
    highlight: false,
  },
  {
    result: "SEMI FINALIST",
    event: "Lonavala Diwali LAN",
    org: "BGMI",
    prizePool: "",
    status: "by Blessed Vibes",
    img: null,
    icon: "🥉",
    year: "2024",
    highlight: false,
  },
  {
    result: "GRAND FINALIST",
    event: "The Marvels Tournament",
    org: "BGMI",
    prizePool: "",
    status: "by ColdX Organisation",
    img: null,
    icon: "🥈",
    year: "2024",
    highlight: false,
  },
  {
    result: "GRAND FINALIST",
    event: "Arena of Champions",
    org: "BGMI",
    prizePool: "",
    status: "by TRB Esports",
    img: null,
    icon: "🥈",
    year: "2024",
    highlight: false,
  },
  {
    result: "GRAND FINALIST",
    event: "Master Series",
    org: "BGMI",
    prizePool: "",
    status: "by Next Level Esports",
    img: null,
    icon: "🥈",
    year: "2024",
    highlight: false,
  },
];

// ─── GAMES ───────────────────────────────────────────────────────────────────
export const GAMES = [
  { name: "BGMI",       img: "/images/bgmi.jpg",     status: "soon",  color: "#FFB366" },
  { name: "Free Fire",  img: "/images/freefire.jpg", status: "soon",  color: "#FF7B00" },
  { name: "Valorant",   img: "/images/valorant.jpg", status: "soon",  color: "#FF4655" },
  { name: "COD Mobile", img: "/images/codm.jpg",     status: "soon",    color: "#888" },
  { name: "Chess",      img: "/images/chess.jpg",    status: "soon",    color: "#888" },
];

// ─── FOUNDERS ────────────────────────────────────────────────────────────────
export const FOUNDERS = [
  {
    name: "Mukund Kundan",
    role: "Founder & CEO",
    title: "Founder & Chief Executive Officer",
    initials: "MK",
    image: "/images/mukund-kundan.jpg",
    quote: "The undergods don't need luck. They need a system.",
    bio: [
      "Mukund Kundan didn't start with resources — he started with a resolve. Growing up watching Indian players get overlooked on the world stage lit something in him that refused to go out. He built AsuraVerse not as a business plan on paper, but as a personal promise.",
      "As CEO, Mukund leads with a rare combination of strategic vision and ground-level empathy. Every roster signed, every tournament entered, every player mentored is a step in his mission to put India on the global esports map.",
    ],
    traits: ["Visionary", "Strategist", "Leader", "Esports Builder"],
    stats: [
      { num: "2025", label: "Founded" },
      { num: "12+",  label: "Athletes Signed" },
      { num: "5+",   label: "Game Titles" },
    ],
  },
  {
    name: "Chandra Prakash Suthar",
    role: "Co-Founder & Talent Scout",
    title: "Co-Founder & Head of Talent Acquisition",
    initials: "CP",
    image: "/images/chandra-prakash-suthar.jpg",
    quote: "Raw talent is everywhere. You just have to know where to look.",
    bio: [
      "Chandra Prakash Suthar has an eye that can't be trained — it's earned through thousands of hours watching players compete, studying their instincts, and understanding what separates a good player from a great one.",
      "In a world where scouts chase highlights, Chandra chases character. Behind every signed athlete is a conversation Chandra had first.",
    ],
    traits: ["Talent Eye", "Scout", "Mentor", "Player Developer"],
    stats: [
      { num: "12+",  label: "Players Scouted" },
      { num: "10+",  label: "Tournaments" },
      { num: "100%", label: "Heart" },
    ],
  },
];

// ─── TICKER ITEMS ─────────────────────────────────────────────────────────────
export const TICKER_ITEMS = [
  "BGMI • VALORANT • FREE FIRE",
  "GANDHINAGAR, GUJARAT",
  "SEASON 2026",
  "TOURNAMENTS & SCRIMS COMING SOON",
  "ESPORTS ",
  "INDIA'S UNDERGODS",
  "NOW ACCEPTING APPLICATIONS",
];

// ─── ENQUIRY TYPES ────────────────────────────────────────────────────────────
export const ENQUIRY_TYPES = [
  "Player Tryout",
  "Sponsorship / Partnership",
  "Content Collaboration",
  "Tournament Inquiry",
  "General Enquiry",
];

// ─── PARTNERSHIP TYPES ────────────────────────────────────────────────────────
export const PARTNERSHIP_TYPES = [
  "Title Sponsor",
  "Jersey Sponsor",
  "Equipment Partner",
  "Content / Media Partner",
  "Event Co-organiser",
  "Other",
];

// ─── GAMES LIST FOR ROSTER FORM ───────────────────────────────────────────────
export const GAME_OPTIONS = ["BGMI", "Free Fire", "Valorant", "COD Mobile", "Chess", "Other"];

export const ROLES = {
  BGMI:       ["IGL", "Fragger", "Sniper", "Support", "Rusher"],
  "Free Fire":["IGL", "Rusher", "Sniper", "Support"],
  Valorant:   ["Duelist", "Controller", "Sentinel", "Initiator", "IGL"],
  "COD Mobile":["IGL", "Slayer", "Sniper", "Support"],
  Chess:      ["Classical", "Blitz", "Rapid"],
  Other:      ["Player"],
};
