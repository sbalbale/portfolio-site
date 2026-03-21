import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Whitelist your mobile device's local IP for testing
  allowedDevOrigins: ['100.105.254.28'],
};

export default nextConfig;
