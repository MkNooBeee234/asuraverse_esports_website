require('dotenv').config();

const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const path = require('path');

const contactRoute = require('./routes/contact');
const partnershipRoute = require('./routes/partnership');
const rosterRoute = require('./routes/roster');

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.resolve(__dirname, 'public');

// ── Middleware ───────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Rate limiting for API routes ─────────────────────────────────────────────
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,                   // max 10 submissions per window per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Too many requests. Please try again later.' }
});

// ── Static files ─────────────────────────────────────────────────────────────
app.use(express.static(publicDir, {
  index: false,
  extensions: ['html']
}));

// ── API Routes ────────────────────────────────────────────────────────────────
app.use('/api/contact', apiLimiter, contactRoute);
app.use('/api/partnership', apiLimiter, partnershipRoute);
app.use('/api/roster', apiLimiter, rosterRoute);

// ── Page Routes ───────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'asuraverse_website.html'));
});

app.get('/partner-with-us', (req, res) => {
  res.sendFile(path.join(publicDir, 'partner-with-us.html'));
});

app.get('/roster-application', (req, res) => {
  res.sendFile(path.join(publicDir, 'roster-application.html'));
});

app.get('/players', (req, res) => {
  res.sendFile(path.join(publicDir, 'players.html'));
});

app.get('/founder', (req, res) => {
  res.sendFile(path.join(publicDir, 'founder.html'));
});

app.get('/achievement', (req, res) => {
  res.sendFile(path.join(publicDir, 'achievement.html'));
});

app.get('/gallery', (req, res) => {
  res.sendFile(path.join(publicDir, 'gallery.html'));
});

app.get('/roster-poster', (req, res) => {
  res.sendFile(path.join(publicDir, 'roster-poster.html'));
});

// ── 404 handler ───────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).sendFile(path.join(publicDir, 'asuraverse_website.html'));
});

// ── Start server ──────────────────────────────────────────────────────────────
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`AsuraVerse server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
