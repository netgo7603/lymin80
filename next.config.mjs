/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Cloudflare 배포를 위해 빌드 시에만 dist 폴더 사용
  distDir: process.env.NODE_ENV === 'production' ? 'dist' : '.next',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
};

export default nextConfig;
