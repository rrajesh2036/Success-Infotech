import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';

interface Enquiry {
  id: string;
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  websiteType: string;
  budget?: string;
  requirements: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'in_progress';
}

const app = express();
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// In-memory + file-backed storage for enquiries
const ENQUIRIES_FILE = path.join(process.cwd(), 'enquiries.json');
let enquiries: Enquiry[] = [];

try {
  if (fs.existsSync(ENQUIRIES_FILE)) {
    const raw = fs.readFileSync(ENQUIRIES_FILE, 'utf-8');
    enquiries = JSON.parse(raw);
  }
} catch {
  enquiries = [];
}

const saveEnquiries = () => {
  try {
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to write enquiries to disk:', err);
  }
};

// API: Health check
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    agency: 'Success Infotech',
    city: 'Bhopal',
    service: 'AI Website Development Agency',
    timestamp: new Date().toISOString(),
  });
});

// API: Submit Enquiry
app.post('/api/enquiries', (req: Request, res: Response) => {
  const { fullName, businessName, phone, email, websiteType, budget, requirements, honeypot } = req.body;

  // Spam protection via honeypot
  if (honeypot) {
    res.status(400).json({ error: 'Spam submission detected.' });
    return;
  }

  // Basic validation
  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    res.status(400).json({ error: 'Please provide a valid Full Name (minimum 2 characters).' });
    return;
  }

  if (!phone || typeof phone !== 'string' || phone.trim().length < 8) {
    res.status(400).json({ error: 'Please provide a valid Phone Number.' });
    return;
  }

  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: 'Please provide a valid Email Address.' });
    return;
  }

  if (!requirements || typeof requirements !== 'string' || requirements.trim().length < 10) {
    res.status(400).json({ error: 'Please describe your project requirements in at least 10 characters.' });
    return;
  }

  const newEnquiry: Enquiry = {
    id: `SI-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 1000)}`,
    fullName: fullName.trim(),
    businessName: (businessName || '').trim(),
    phone: phone.trim(),
    email: email.trim().toLowerCase(),
    websiteType: websiteType || 'Custom Website Development',
    budget: budget || 'Flexible / To Be Discussed',
    requirements: requirements.trim(),
    createdAt: new Date().toISOString(),
    status: 'new',
  };

  enquiries.unshift(newEnquiry);
  saveEnquiries();

  res.status(201).json({
    success: true,
    message: 'Your project enquiry has been successfully registered with Success Infotech!',
    enquiryId: newEnquiry.id,
    details: {
      client: newEnquiry.fullName,
      service: newEnquiry.websiteType,
      consultationWindow: 'Within 24 business hours',
    },
  });
});

// API: List enquiries (for owner administration / testing verification)
app.get('/api/enquiries', (_req: Request, res: Response) => {
  res.json({
    total: enquiries.length,
    enquiries,
  });
});

// SEO: Sitemap
app.get('/sitemap.xml', (_req: Request, res: Response) => {
  const domain = process.env.APP_URL || 'https://successinfotech.agency';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${domain}/#about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${domain}/#services</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${domain}/#work</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${domain}/#why-choose-us</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${domain}/#process</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${domain}/#faq</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${domain}/#contact</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.send(xml);
});

// SEO: Robots.txt
app.get('/robots.txt', (_req: Request, res: Response) => {
  const domain = process.env.APP_URL || 'https://successinfotech.agency';
  const robots = `User-agent: *
Allow: /
Sitemap: ${domain}/sitemap.xml
`;
  res.setHeader('Content-Type', 'text/plain');
  res.send(robots);
});

async function startServer() {
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Success Infotech server running on http://localhost:${PORT}`);
  });
}

startServer();
