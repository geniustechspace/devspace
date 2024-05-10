/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    basePath: "",
    sassOptions: {
        includePaths: ['./src/styles'],
      },
};

export default nextConfig;
