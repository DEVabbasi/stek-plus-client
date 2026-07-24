/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  // Proxy: /portaal -> Stek-Plus Management-app (apart Vercel-project).
  // De management-app draait onder /portaal, dus alle sub-paden (assets enz.)
  // gaan via dezelfde proxy. Werkt op zowel Vercel als Netlify.
  async rewrites() {
    return [
      { source: "/portaal", destination: "https://stek-plus-management.vercel.app/portaal/" },
      { source: "/portaal/:path*", destination: "https://stek-plus-management.vercel.app/portaal/:path*" },
    ];
  },
};

export default nextConfig;
