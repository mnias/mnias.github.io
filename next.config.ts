import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === "production" 
    ? {
        assetPrefix: "/",
        basePath: "/gyeonghwan.github.io",
      }
    : {
        assetPrefix: "",
        basePath: "",
      }),
};

module.exports = nextConfig;
