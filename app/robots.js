const siteUrl = 'https://www.stek-plus.nl';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/drawings-sitemap.xml`,
    ],
  };
}