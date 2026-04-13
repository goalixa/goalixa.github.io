/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  // مهم برای GitHub Pages
  basePath: process.env.NODE_ENV === "production"
    ? "/goalixa-blog"
    : "",
};

module.exports = nextConfig;