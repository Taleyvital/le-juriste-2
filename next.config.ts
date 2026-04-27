import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permet les noms de fichiers avec espaces et caractères spéciaux en local
    dangerouslyAllowSVG: false,
    unoptimized: false,
  },
};

export default nextConfig;
