import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pravi samostalan build koji ne treba node_modules — potrebno za Docker.
  output: "standalone",

  turbopack: {
    // Turbopack inače traži korijen projekta po najbližem lockfileu i zna
    // odlutati izvan foldera. Ovime mu se korijen zaključava na ovaj projekt.
    root: process.cwd(),
  },
};

export default nextConfig;
