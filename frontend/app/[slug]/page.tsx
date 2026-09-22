import { getPageData } from '@/lib/api';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BlockRenderer } from '@/components/BlockRenderer';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getPageData(slug);

  if (!data) {
    return {
      title: 'Page Not Found | Best Group',
    };
  }

  return {
    title: data.page.meta_title || `${data.page.title} | Best Group`,
    description: data.page.meta_description || 'Best Group Enterprise Venture',
  };
}

export default async function DynamicSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await getPageData(slug);

  if (!data) {
    notFound();
  }

  const { page, theme, settings, blocks } = data;
  const activeThemeSlug = theme?.directory_name || 'theme-a';

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      {/* Dynamic Navbar */}
      <Navbar theme={theme} settings={settings} />

      {/* Dynamic Block Builder Engine */}
      <main className="flex-1 w-full">
        <BlockRenderer active_theme={activeThemeSlug} blocks={blocks || page.blocks || []} />
      </main>

      {/* Dynamic Footer */}
      <Footer theme={theme} settings={settings} />
    </div>
  );
}
