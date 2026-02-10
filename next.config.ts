import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  async rewrites() {
    return [
      {
        source: "/api/v1", // can be anything is public anyway
        destination: process.env.N8N_API!,
      }
    ]
  }


};

export default nextConfig;


















