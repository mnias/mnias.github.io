import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/",
  basePath: "/gyeonghwan.github.io",
};

module.exports = nextConfig;
