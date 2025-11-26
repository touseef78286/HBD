import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages-friendly static export
  output: "export",
  images: {
    // We only use static SVGs, but keep this safe for any future images
    unoptimized: true,
  },
  // Repo name as basePath so the app serves correctly from /HBD
  basePath: "/HBD",
  assetPrefix: "/HBD/",
};

export default nextConfig;
