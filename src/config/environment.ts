/// <reference types="vite/client" />

const isDev = process.env.NODE_ENV !== 'production';

export const config = {
  baseUrl: isDev ? 'http://localhost:5174' : '',  // Empty string in prod to use relative URLs
  assetsPath: isDev ? '/assets' : '/assets',  // Always use relative path for assets
  allowedHosts: [
    'localhost',
    'cv.studio-010.com',
    '.studio-010.com',  // Allows all subdomains
  ],
} 