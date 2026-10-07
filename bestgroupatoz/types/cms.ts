export interface HeroBlockContent {
  title: string;
  subtitle?: string;
  background_image_url?: string;
  button_text?: string;
  button_link?: string;
}

export interface BrandItem {
  brand_name: string;
  logo_url: string;
  website_link?: string;
}

export interface BrandsBlockContent {
  brands_list: BrandItem[];
}

export interface ServiceCard {
  icon?: string;
  title: string;
  description?: string;
}

export interface ServicesBlockContent {
  section_title: string;
  section_subtitle?: string;
  services_list: ServiceCard[];
}

export interface ContactBlockContent {
  heading: string;
  subtext?: string;
  form_email_destination: string;
}

export interface RichTextBlockContent {
  title?: string;
  subtitle?: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqBlockContent {
  section_title?: string;
  section_subtitle?: string;
  faqs?: FaqItem[];
}

export interface ChairmanMessageBlockContent {
  title?: string;
  chairman_name?: string;
  chairman_title?: string;
  motto?: string;
  chairman_image_url?: string;
  message?: string;
}

export type BlockContent =
  | HeroBlockContent
  | BrandsBlockContent
  | ServicesBlockContent
  | ContactBlockContent
  | RichTextBlockContent
  | FaqBlockContent
  | ChairmanMessageBlockContent
  | Record<string, any>;

export interface BlockData {
  id: number;
  type: 'hero' | 'brands' | 'services' | 'contact' | 'rich_text' | 'faq' | 'chairman_message' | string;
  display_order: number;
  content: BlockContent;
}

export interface PageData {
  id: number;
  title: string;
  slug: string;
  meta_title?: string;
  meta_description?: string;
  is_published: boolean;
  blocks: BlockData[];
}

export interface ThemeData {
  id: number;
  name: string;
  slug: string;
  directory_name: string;
  is_active: boolean;
}

export interface GlobalSettings {
  site_identity?: {
    site_name?: string;
    tagline?: string;
    support_email?: string;
    phone?: string;
    headquarters?: string;
    [key: string]: any;
  };
  social_links?: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

export interface CmsResponseData {
  page: PageData;
  theme: ThemeData | null;
  settings: GlobalSettings;
  blocks: BlockData[];
}

export interface CmsApiResponse {
  success: boolean;
  data?: CmsResponseData;
  message?: string;
}
