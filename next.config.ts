import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async headers() {
    return [
      {
        source: "/Roventar.apk",
        headers: [
          {
            key: "Content-Type",
            value: "application/vnd.android.package-archive",
          },
          {
            key: "Content-Disposition",
            value: 'attachment; filename="CribMarket.apk"',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/accounts/cent", destination: "/accounts/standard", permanent: true },
      { source: "/accounts/flexi", destination: "/accounts/standard", permanent: true },
      { source: "/accounts/fix-spread", destination: "/accounts/standard", permanent: true },
      { source: "/accounts/gold", destination: "/accounts/growth", permanent: true },
      { source: "/accounts/platinum", destination: "/accounts/growth", permanent: true },
      { source: "/accounts/ecn", destination: "/accounts/edge", permanent: true },
      { source: "/shares", destination: "/products", permanent: true },
      { source: "/etfs", destination: "/products", permanent: true },
      { source: "/partner-ib", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
