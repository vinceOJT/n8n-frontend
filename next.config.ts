import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  async rewrites() {
    return [
      {
        source: process.env.NEXT_PUBLIC_N8N_PATH!,
        destination: process.env.NEXT_PUBLIC_N8N_API!,
      }
    ]
  }


};

export default nextConfig;


















