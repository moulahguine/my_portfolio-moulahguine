/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/moulahguine/**",
      },
    ],
  },
};

export default nextConfig;
