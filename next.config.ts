import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  output: "export",
  basePath: process.env.PAGES_BASE_PATH || "",
  images: {
    unoptimized: true,
  },
};

export default withMDX(nextConfig);
