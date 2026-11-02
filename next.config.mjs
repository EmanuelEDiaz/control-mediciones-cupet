const repo = 'control-mediciones-cupet';
const prod = process.env.GITHUB_ACTIONS === 'true';
const basePath = prod ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
