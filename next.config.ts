import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/surfaces",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
