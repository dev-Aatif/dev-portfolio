import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    if (process.env.NODE_ENV === "production") return [];
    
    return [
      {
        source: "/projects/landing_page/:path*",
        destination: "http://localhost:3001/projects/landing_page/:path*",
      },
    ];
  },
};

export default nextConfig;
