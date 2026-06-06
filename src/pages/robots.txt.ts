import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = (site?.toString() || 'https://hutamaborepile.co.id').replace(/\/$/, '');

  const robotsTxt = `User-agent: *
Allow: /

# Block API routes and internal pages
Disallow: /api/
Disallow: /og/

# Sitemaps
Sitemap: ${siteUrl}/sitemap-0.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
