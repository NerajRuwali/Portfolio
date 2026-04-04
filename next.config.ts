import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Limits worker threads to prevent posix_spawn resource limits
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
