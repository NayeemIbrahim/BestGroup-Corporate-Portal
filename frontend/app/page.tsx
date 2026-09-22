import { getPageData } from '@/lib/api';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BlockRenderer } from '@/components/BlockRenderer';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageData('home');
  return {
    title: data?.page?.meta_title || data?.page?.title || 'Best Group Holdings',
    description: data?.page?.meta_description || 'Enterprise Conglomerate Portfolio',
  };
}

export default async function HomePage() {
  const data = await getPageData('home');

  if (!data) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-slate-950 text-white">
        <div className="p-8 max-w-lg rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
          <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-xl">
            !
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Backend Connection Pending</h1>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Could not fetch page &quot;home&quot; from Laravel API (<code className="text-amber-300">http://127.0.0.1:8000/api/v1/page/home</code>).
          </p>
          <div className="text-xs text-slate-500 bg-slate-950 p-4 rounded-xl border border-slate-800 text-left font-mono">
            1. Ensure Laravel is running: <br />
            &nbsp;&nbsp;<span className="text-emerald-400">php artisan serve</span><br />
            2. Run Database Seeder: <br />
            &nbsp;&nbsp;<span className="text-emerald-400">php artisan db:seed</span>
          </div>
        </div>
      </main>
    );
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
