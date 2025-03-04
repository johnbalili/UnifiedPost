import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
};

module.exports = {
  images: {
      unoptimized: true
  }
}

export default nextConfig;
