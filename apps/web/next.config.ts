import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Whitelist your mobile device's local IP for testing
  allowedDevOrigins: ['100.105.254.28'],

  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://sean-balbale-portfolio.sanity.studio/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
