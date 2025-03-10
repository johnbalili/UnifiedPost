import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
