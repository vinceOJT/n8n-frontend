import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  async rewrites() {
    return [
      {
        source: "/lead-gen/blogs", // can be anything is public anyway
        destination: process.env.NEXT_PUBLIC_N8N_API!,
      }
    ]
  }


};

export default nextConfig;


















