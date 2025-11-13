import type { NextConfig } from "next";
import { env } from "process";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: env?.REPLIT_DOMAINS ? [env.REPLIT_DOMAINS.split(",")[0]] : [],
};

module.exports = nextConfig;
