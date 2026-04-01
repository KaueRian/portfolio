import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // O modo 'export' não suporta headers dinâmicos do Next.js no servidor,
  // mas incluímos aqui para documentação e para ambientes de dev/preview.
  // IMPORTANTE: Os headers abaixo devem ser configurados no console do AWS Amplify (Custom Headers).
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self';",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  // Allow external network IP access during development
  // ts-expect-error type might not reflect latest turbopack config
  allowedDevOrigins: ["localhost", "127.0.0.1", "200.50.100.1"],
};

export default nextConfig;
