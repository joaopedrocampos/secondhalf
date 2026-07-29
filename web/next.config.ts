import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this directory — otherwise Next.js may infer
  // it from an unrelated lockfile higher up the filesystem tree.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
