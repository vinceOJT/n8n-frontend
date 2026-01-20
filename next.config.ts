import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1",
        destination: "https://n8n.callboxinc.com/webhook-test/api/v1",
      }
    ]
  }


};

export default nextConfig;
