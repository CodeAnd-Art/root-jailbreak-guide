require('dotenv').config();
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { encryptText } = require('./lib/encrypt');
const config = require('./lib/config');

const app = express();
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", 'data:'],
      connectSrc: ["'self'", 'https://api.github.com']
    }
  }
}));
app.use(cors({ origin: config.corsOrigin, methods: ['GET', 'POST'] }));
app.use(express.json({ limit: '1mb' }));
app.use(rateLimit({
  windowMs: config.rateLimitWindowMs,
  max: config.rateLimitMax,
  message: { error: 'Too many requests. Please try again later.' }
}));

function requireApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== config.apiKey) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, status: 'healthy', version: '1.0.0' });
});

app.post('/api/assistant/analyze', requireApiKey, (req, res) => {
  const { deviceType, model, osVersion, purpose, techLevel, note } = req.body || {};

  const summary = {
    deviceType: deviceType || 'Belirtilmemiş',
    model: model || 'Belirtilmemiş',
    osVersion: osVersion || 'Belirtilmemiş',
    purpose: purpose || ['güvenlik'],
    techLevel: techLevel || 'başlangıç',
    note: note || 'Belirtilmemiş',
    recomendation: 'Önce yedekleyin. Garanti, lisans ve güvenlik politikalarını kontrol edin. İşlem kullanıcı sorumluluğundadır.',
    riskLevel: 'orta',
    legalNote: 'Bu içerik yalnızca eğitsel ve bilgi amaçlıdır.'
  };

  const encrypted = encryptText(JSON.stringify(summary));

  res.json({
    ok: true,
    encrypted,
    meta: {
      createdAt: new Date().toISOString(),
      mode: 'demo-encrypted'
    }
  });
});

app.listen(config.port, () => {
  console.log(`AI API running on http://localhost:${config.port}`);
});
