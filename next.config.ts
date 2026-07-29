import type { NextConfig } from "next";
import { siteConfig } from "./src/config/site";

const nextConfig: NextConfig = {
  headers() {
    return [
      {
        source: "/cv",
        headers: [
          {
            key: "Content-Disposition",
            value: 'inline; filename="Eren-Kacar-CV.pdf"',
          },
        ],
      },
    ];
  },
  rewrites() {
    return [
      {
        source: "/cv",
        destination: siteConfig.resumePath,
      },
    ];
  },
};

export default nextConfig;
