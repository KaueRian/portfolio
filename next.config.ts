import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Allow external network IP access during development
  // ts-expect-error type might not reflect latest turbopack config
  allowedDevOrigins: ["localhost", "127.0.0.1", "200.50.100.1"],
};

export default nextConfig;
