import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tighter tree-shaking for these large icon/animation packages.
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
};

export default nextConfig;
