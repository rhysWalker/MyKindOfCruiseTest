import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.cruisecritic.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
