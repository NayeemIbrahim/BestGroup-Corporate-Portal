import { CmsApiResponse, CmsResponseData } from '@/types/cms';

const getApiBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, '');
  }
  if (process.env.NEXT_PUBLIC_BACKEND_URL) {
    return `${process.env.NEXT_PUBLIC_BACKEND_URL.replace(/\/$/, '')}/api/v1`;
  }
  return 'http://127.0.0.1:8000/api/v1';
};

const API_BASE_URL = getApiBaseUrl();

/**
 * Fetch page data with active theme, blocks, and settings from Laravel API
 */
export async function getPageData(slug: string = 'home'): Promise<CmsResponseData | null> {
  const tryFetch = async (baseUrl: string): Promise<CmsResponseData | null> => {
    try {
      const res = await fetch(`${baseUrl}/page/${slug}`, {
        cache: 'no-store',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!res.ok) {
        return null;
      }

      const response: CmsApiResponse = await res.json();
      if (!response.success || !response.data) {
        return null;
      }

      return response.data;
    } catch {
      return null;
    }
  };

  // 1. Try configured API_BASE_URL
  let data = await tryFetch(API_BASE_URL);

  // 2. If failed and URL does not have /public/, try with /public/ for shared hosting environments
  if (!data && !API_BASE_URL.includes('/public/')) {
    const publicFallbackUrl = API_BASE_URL.replace(/\/api\/v1\/?$/, '/public/api/v1');
    data = await tryFetch(publicFallbackUrl);
  }

  return data;
}
