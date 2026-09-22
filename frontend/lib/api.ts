import { CmsApiResponse, CmsResponseData } from '@/types/cms';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api/v1';

/**
 * Fetch page data with active theme, blocks, and settings from Laravel API
 */
export async function getPageData(slug: string = 'home'): Promise<CmsResponseData | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/page/${slug}`, {
      // In development or demo mode, ensure dynamic data fetching
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      if (res.status === 404) {
        console.warn(`[CMS API] Page not found: ${slug}`);
        return null;
      }
      throw new Error(`Failed to fetch page data: ${res.statusText}`);
    }

    const response: CmsApiResponse = await res.json();

    if (!response.success || !response.data) {
      return null;
    }

    return response.data;
  } catch (error) {
    console.error(`[CMS API] Fetch error for slug "${slug}":`, error);
    return null;
  }
}
