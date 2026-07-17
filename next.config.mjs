const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: 'export',
  basePath: isProd ? '/cinematic-portfolio-1' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
