// src/app/drawings-sitemap.xml/route.js
import { NextResponse } from 'next/server';

const baseUrl = 'https://stek-plus-32eaa3cd842c.herokuapp.com/api';
const siteUrl = 'https://www.stek-plus.nl';

export async function GET() {
  try {
    const response = await fetch(`${baseUrl}/drawings`, {
      cache: 'no-store',
    });

    if (!response.ok) throw new Error(`API error: ${response.status}`);

    const data = await response.json();

    // Your API returns: { data: { drawings: [...] }, status, message }
    const drawings = data?.data?.drawings ?? [];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${drawings
  .filter((d) => d?.slug)
  .map((d) => {
    const lastmod = new Date(d.updatedAt ?? d.createdAt ?? new Date()).toISOString().split('T')[0];
    return `  <url>
    <loc>${siteUrl}/projecten/${d.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>0.80</priority>
    <changefreq>weekly</changefreq>
  </url>`;
  })
  .join('\n')}
</urlset>`;

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Sitemap error:', error);
    return new NextResponse(
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>`,
      { status: 200, headers: { 'Content-Type': 'application/xml' } }
    );
  }
}