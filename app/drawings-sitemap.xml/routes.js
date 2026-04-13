import { NextResponse } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'https://stek-plus-32eaa3cd842c.herokuapp.com/api'; 
const siteUrl = 'https://www.stek-plus.nl';

/**
 * Converts a drawing title to a URL-friendly slug.
 * Example: "Modern Villa Plan" → "modern-villa-plan"
 */
function toSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')     // Remove special characters
    .replace(/[\s_]+/g, '-')      // Replace spaces/underscores with hyphens
    .replace(/--+/g, '-')         // Collapse multiple hyphens
    .replace(/^-+|-+$/g, '');     // Trim leading/trailing hyphens
}

export async function GET() {
  try {
    const response = await fetch(`${baseUrl}/drawings`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch drawings: ${response.status}`);
    }

    const data = await response.json();

    // Support both { data: [...] } and plain array responses
    const drawings = Array.isArray(data) ? data : (data?.data ?? []);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${drawings
  .filter((drawing) => drawing?.title || drawing?.slug)
  .map((drawing) => {
    const slug = drawing.slug ?? toSlug(drawing.title);
    const lastmod = new Date(drawing.updatedAt ?? drawing.createdAt ?? new Date()).toISOString().split('T')[0];
    return `  <url>
    <loc>${siteUrl}/tekenwerk/${slug}</loc>
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
    console.error('Error generating drawings sitemap:', error);

    const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;

    return new NextResponse(emptySitemap, {
      status: 200,
      headers: { 'Content-Type': 'application/xml' },
    });
  }
}