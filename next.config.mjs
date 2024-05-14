/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  output: 'export',
  assetPrefix: process.env.ASSET_PREFIX,
  basePath: process.env.BASE_PATH,

  sassOptions: {
    includePaths: ['./src/styles'],
  },
};

export default nextConfig;
