import React from 'react';
import { BlockData } from '@/types/cms';

// Theme A Blocks (Corporate Luxe)
import { ThemeAHeroBlock } from '@/components/themes/theme-a/HeroBlock';
import { ThemeABrandsBlock } from '@/components/themes/theme-a/BrandsBlock';
import { ThemeAServicesBlock } from '@/components/themes/theme-a/ServicesBlock';
import { ThemeAContactBlock } from '@/components/themes/theme-a/ContactBlock';

// Theme B Blocks (Modern Clean Glass)
import { ThemeBHeroBlock } from '@/components/themes/theme-b/HeroBlock';
import { ThemeBBrandsBlock } from '@/components/themes/theme-b/BrandsBlock';
import { ThemeBServicesBlock } from '@/components/themes/theme-b/ServicesBlock';
import { ThemeBContactBlock } from '@/components/themes/theme-b/ContactBlock';

interface BlockRendererProps {
  active_theme?: string;
  blocks: BlockData[];
}

/**
 * Dynamic Theme & Block Registry
 * Maps [active_theme][block_type] -> React Component
 */
const BLOCK_REGISTRY: Record<string, Record<string, React.ComponentType<{ content: any }>>> = {
  'theme-a': {
    hero: ThemeAHeroBlock,
    brands: ThemeABrandsBlock,
    services: ThemeAServicesBlock,
    contact: ThemeAContactBlock,
  },
  'theme-b': {
    hero: ThemeBHeroBlock,
    brands: ThemeBBrandsBlock,
    services: ThemeBServicesBlock,
    contact: ThemeBContactBlock,
  },
};

export const BlockRenderer: React.FC<BlockRendererProps> = ({
  active_theme = 'theme-a',
  blocks = [],
}) => {
  if (!blocks || blocks.length === 0) {
    return (
      <div className="py-20 text-center text-slate-500 bg-slate-950">
        <p className="text-sm">No page blocks published for this page.</p>
      </div>
    );
  }

  // Normalize theme identifier (e.g. 'theme-a', 'theme-b', or directory_name)
  const themeKey = (active_theme || 'theme-a').toLowerCase().trim();
  const themeRegistry = BLOCK_REGISTRY[themeKey] || BLOCK_REGISTRY['theme-a'];

  return (
    <div className="w-full flex flex-col">
      {blocks.map((block) => {
        const blockType = block.type?.toLowerCase();
        const Component = themeRegistry[blockType] || BLOCK_REGISTRY['theme-a'][blockType];

        if (!Component) {
          console.warn(`[BlockRenderer] No component found for block "${block.type}" in theme "${themeKey}"`);
          return (
            <div
              key={block.id || Math.random()}
              className="p-6 m-4 rounded-xl border border-dashed border-amber-500/40 bg-amber-500/5 text-amber-300 text-xs font-mono"
            >
              [Unknown Block: &quot;{block.type}&quot; under Theme: &quot;{themeKey}&quot;]
            </div>
          );
        }

        return <Component key={block.id || `${block.type}-${block.display_order}`} content={block.content} />;
      })}
    </div>
  );
};
export default BlockRenderer;
