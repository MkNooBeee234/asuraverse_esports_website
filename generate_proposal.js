const fs = require('fs');
const { marked } = require('marked');

// Read markdown proposal
const mdPath = 'C:/Users/Lenovo LOQ/.gemini/antigravity/brain/a0bbf361-eb84-4716-94f7-e754e60453f9/asuraverse_sponsorship_proposal.md';
const md = fs.readFileSync(mdPath, 'utf8');

// Read logo image and convert to base64
const logoPath = 'C:/Users/Lenovo LOQ/asuraverse_esports_website/public/asuraverse logo.jpg';
let logoBase64 = '';
if (fs.existsSync(logoPath)) {
  const logoData = fs.readFileSync(logoPath);
  logoBase64 = 'data:image/jpeg;base64,' + logoData.toString('base64');
}

const body = marked.parse(md);

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>AsuraVerse Esports — Sponsorship Proposal 2026</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
  :root{--orange:#FF7B00;--dark:#090B10;--dark2:#0D1017;--dark3:#12161F;--border:rgba(255,255,255,0.08);--text:#f0f0f0;--muted:#999;}
  *{margin:0;padding:0;box-sizing:border-box;}
  body{background:var(--dark);color:var(--text);font-family:'Rajdhani',sans-serif;font-size:15px;line-height:1.7;}
  .wrap{max-width:900px;margin:0 auto;padding:60px 48px;}
  h1{font-family:'Bebas Neue',sans-serif;font-size:56px;letter-spacing:4px;color:#fff;margin:40px 0 8px;line-height:1;}
  h2{font-family:'Bebas Neue',sans-serif;font-size:36px;letter-spacing:3px;color:var(--orange);margin:48px 0 16px;padding-bottom:8px;border-bottom:1px solid var(--border);}
  h3{font-family:'Bebas Neue',sans-serif;font-size:22px;letter-spacing:2px;color:#fff;margin:32px 0 12px;}
  h4{font-family:'Space Mono',monospace;font-size:12px;letter-spacing:2px;color:var(--orange);text-transform:uppercase;margin:24px 0 10px;}
  p{color:#ccc;margin-bottom:14px;font-size:15px;}
  blockquote{border-left:3px solid var(--orange);padding:14px 20px;margin:20px 0;background:var(--dark3);color:#ddd;font-style:italic;}
  table{width:100%;border-collapse:collapse;margin:20px 0;}
  th{background:var(--orange);color:#fff;font-family:'Space Mono',monospace;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;padding:12px 16px;text-align:left;}
  td{padding:11px 16px;border-bottom:1px solid var(--border);color:#ccc;font-size:14px;}
  tr:nth-child(even) td{background:var(--dark3);}
  tr:hover td{background:rgba(255,123,0,0.05);}
  code{font-family:'Space Mono',monospace;background:var(--dark3);padding:2px 6px;font-size:12px;color:var(--orange);}
  pre{background:var(--dark3);border:1px solid var(--border);padding:20px;margin:16px 0;overflow:auto;border-left:3px solid var(--orange);}
  pre code{background:none;padding:0;color:#ccc;}
  ul,ol{padding-left:20px;margin-bottom:14px;}
  li{color:#ccc;margin-bottom:6px;}
  strong{color:#fff;font-weight:700;}
  hr{border:none;border-top:1px solid var(--border);margin:40px 0;}
  .cover{text-align:center;padding:80px 0 60px;border-bottom:3px solid var(--orange);margin-bottom:60px;background:radial-gradient(ellipse 80% 60% at 50% 0%,rgba(255,123,0,0.08) 0%,transparent 70%);}
  .cover img.logo {width: 140px; height: 140px; border-radius: 50%; object-fit: cover; margin-bottom: 24px; border: 2px solid var(--orange);}
  .cover h1{font-size:72px;color:#fff;margin-bottom:0;}
  .cover h1 span{color:var(--orange);}
  .cover .subtitle{font-family:'Space Mono',monospace;font-size:12px;letter-spacing:4px;color:var(--muted);text-transform:uppercase;margin:16px 0 8px;}
  .cover .event{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:3px;color:var(--orange);margin:24px 0 8px;}
  .cover .date{font-family:'Space Mono',monospace;font-size:13px;letter-spacing:2px;color:#fff;}
  .cover .conf{font-family:'Space Mono',monospace;font-size:10px;letter-spacing:3px;color:var(--muted);margin-top:40px;text-transform:uppercase;border-top:1px solid var(--border);padding-top:20px;}
  @media print{
    body{background:#fff !important;color:#111 !important;}
    .cover{background:#fff !important;}
    h1,h2,h3,h4,strong{color:#111 !important;}
    h2{color:var(--orange) !important;}
    p,li,td,blockquote{color:#333 !important;}
    table,th,td{border-color:#ddd !important;}
    th{background:var(--orange) !important;color:#fff !important;}
    tr:nth-child(even) td{background:#f9f9f9 !important;}
    blockquote{background:#f5f5f5 !important;}
    pre,code{background:#f5f5f5 !important;color:#333 !important;}
    .wrap{padding:20px;}
    .cover img.logo {border-color: var(--orange) !important;}
  }
</style>
</head>
<body>
<div class="wrap">
<div class="cover">
  ${logoBase64 ? '<img src="' + logoBase64 + '" class="logo" alt="AsuraVerse Logo">' : '<div style="font-size:64px;margin-bottom:16px;">⚡</div>'}
  <div class="subtitle">Sponsorship Proposal</div>
  <h1>ASURA<span>VERSE</span></h1>
  <div style="font-family:'Space Mono',monospace;font-size:11px;letter-spacing:3px;color:var(--muted);">ESPORTS PVT LTD</div>
  <div class="event">BSSA BIHAR LAN GRAND FINALS 2026</div>
  <div class="date">16 MAY 2026 · OFFLINE LAN EVENT</div>
  <div class="conf">CONFIDENTIAL · FOR SPONSOR REVIEW ONLY</div>
</div>
${body}
</div>
</body>
</html>`;

const outPath = 'C:/Users/Lenovo LOQ/Desktop/AsuraVerse_Sponsorship_Proposal_2026.html';
fs.writeFileSync(outPath, html, 'utf8');
console.log('✅ Proposal generated at:', outPath);
console.log('👉 Open in Chrome → Ctrl+P → Save as PDF');
