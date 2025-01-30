import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin('./locales/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    optimizeCss: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
      },
      {
        protocol: "https",
        hostname: "localhost",
        port: "5000",
      },
      {
        protocol: "http",
        hostname: "api.amanek.us",
      },
      {
        protocol: "https",
        hostname: "api.amanek.us",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
