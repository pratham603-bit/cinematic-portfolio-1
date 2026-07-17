export const SITE_URL = 'https://prathamd.dev';
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/cinematic-portfolio-1' : '';

export function getAssetPath(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}
