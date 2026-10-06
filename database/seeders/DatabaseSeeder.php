<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageBlock;
use App\Models\Setting;
use App\Models\Theme;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Admin User
        User::updateOrCreate(
            ['email' => 'admin@bestgroup.com'],
            [
                'name'     => 'Super Admin',
                'password' => Hash::make('password'),
            ]
        );

        // 2. Themes (Theme A active by default)
        $themeA = Theme::updateOrCreate(
            ['slug' => 'theme-a'],
            [
                'name'           => 'Corporate Luxe (Theme A)',
                'directory_name' => 'theme-a',
                'is_active'      => true,
            ]
        );

        Theme::updateOrCreate(
            ['slug' => 'theme-b'],
            [
                'name'           => 'Modern Minimalist (Theme B)',
                'directory_name' => 'theme-b',
                'is_active'      => false,
            ]
        );

        // 3. Global Settings
        Setting::updateOrCreate(
            ['key' => 'site_identity'],
            [
                'value' => [
                    'site_name'     => 'BEST GROUP',
                    'tagline'       => 'Excellence in Every Endeavor',
                    'support_email' => 'info@bestgroupatoz.com',
                    'phone'         => '01910-203058, 01711-626577',
                    'headquarters'  => '9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000',
                ],
            ]
        );

        Setting::updateOrCreate(
            ['key' => 'social_links'],
            [
                'value' => [
                    'facebook'  => 'https://facebook.com/bestgroup',
                    'linkedin'  => 'https://linkedin.com/company/bestgroup',
                    'twitter'   => 'https://twitter.com/bestgroup',
                    'instagram' => 'https://instagram.com/bestgroup',
                ],
            ]
        );

        // 4. Home Page
        $homePage = Page::updateOrCreate(
            ['slug' => 'home'],
            [
                'title'            => 'BEST GROUP - Excellence in Every Endeavor',
                'meta_title'       => 'BEST GROUP | Excellence in Every Endeavor',
                'meta_description' => 'BEST GROUP operates premier listed companies: Best Product International Ltd., Best South City Ltd., Best Commercial & Builders Ltd., Best Model Pharmacy Ltd., and Best International Overseas.',
                'is_published'     => true,
            ]
        );

        // Remove old blocks before re-seeding
        $homePage->blocks()->delete();

        // Block 1: Hero Block
        PageBlock::create([
            'page_id'       => $homePage->id,
            'type'          => 'hero',
            'display_order' => 0,
            'content'       => [
                'title'                => 'Building the Future of Commerce & Living',
                'subtitle'             => 'BEST GROUP — Excellence in Every Endeavor. Driving benchmark enterprises across E-Commerce, Real Estate, Construction, Healthcare, and Global Travel.',
                'background_image_url' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
                'button_text'          => 'Explore Listed Companies',
                'button_link'          => '/our-sister-concern',
            ],
        ]);

        // Block 2: Brands Block (All 6 Listed Companies)
        PageBlock::create([
            'page_id'       => $homePage->id,
            'type'          => 'brands',
            'display_order' => 1,
            'content'       => [
                'brands_list' => [
                    [
                        'brand_name'   => 'Best Group',
                        'logo_url'     => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=300&auto=format&fit=crop',
                        'website_link' => '/about-us',
                    ],
                    [
                        'brand_name'   => 'Best Product International Ltd.',
                        'logo_url'     => 'https://images.unsplash.com/photo-1556742049-0a67e55722c6?q=80&w=300&auto=format&fit=crop',
                        'website_link' => '/our-sister-concern',
                    ],
                    [
                        'brand_name'   => 'Best South City Ltd.',
                        'logo_url'     => 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=300&auto=format&fit=crop',
                        'website_link' => '/our-sister-concern',
                    ],
                    [
                        'brand_name'   => 'Best Commercial & Builders Ltd.',
                        'logo_url'     => 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=300&auto=format&fit=crop',
                        'website_link' => '/our-sister-concern',
                    ],
                    [
                        'brand_name'   => 'Best Model Pharmacy Ltd.',
                        'logo_url'     => 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=300&auto=format&fit=crop',
                        'website_link' => '/our-sister-concern',
                    ],
                    [
                        'brand_name'   => 'Best International Overseas',
                        'logo_url'     => 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=300&auto=format&fit=crop',
                        'website_link' => '/our-sister-concern',
                    ],
                ],
            ],
        ]);

        // Block 3: Services Block (6 Listed Wings)
        PageBlock::create([
            'page_id'       => $homePage->id,
            'type'          => 'services',
            'display_order' => 2,
            'content'       => [
                'section_title'    => 'Our Listed Companies & Business Wings',
                'section_subtitle' => 'Six high-impact enterprises unified by one corporate creed: Excellence in Every Endeavor.',
                'services_list'    => [
                    [
                        'icon'        => 'ShoppingBagIcon',
                        'title'       => 'Best Product International Ltd.',
                        'description' => 'E-Commerce enterprise delivering quality consumer products, digital retail solutions, and nationwide doorstep delivery.',
                    ],
                    [
                        'icon'        => 'BuildingOfficeIcon',
                        'title'       => 'Best South City Ltd.',
                        'description' => 'Modern residential community development, smart urban planning, and quality housing solutions.',
                    ],
                    [
                        'icon'        => 'WrenchScrewdriverIcon',
                        'title'       => 'Best Commercial & Builders Ltd.',
                        'description' => 'Landmark commercial complexes, modern high-rise engineering, and sustainable corporate construction.',
                    ],
                    [
                        'icon'        => 'HeartIcon',
                        'title'       => 'Best Model Pharmacy Ltd.',
                        'description' => 'Standardized retail pharmacies guaranteeing 100% genuine medicine, cold-chain storage, and registered clinical pharmacists.',
                    ],
                    [
                        'icon'        => 'GlobeAltIcon',
                        'title'       => 'Best International Overseas',
                        'description' => 'Premier international travel management, corporate aviation, visa consulting, and luxury tourism services.',
                    ],
                    [
                        'icon'        => 'ShieldCheckIcon',
                        'title'       => 'Best Group (Corporate Desk)',
                        'description' => 'Central holding conglomerate providing strategic leadership, institutional governance, and multi-sector investment.',
                    ],
                ],
            ],
        ]);

        // Block 4: Contact Block
        PageBlock::create([
            'page_id'       => $homePage->id,
            'type'          => 'contact',
            'display_order' => 3,
            'content'       => [
                'heading'                => 'Connect with BEST GROUP Corporate Headquarters',
                'subtext'                => '9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000 | Phone: 01910-203058, 01711-626577',
                'form_email_destination' => 'info@bestgroupatoz.com',
            ],
        ]);

        // 5. Seed Corporate Pages
        $this->call(PageSeeder::class);
    }
}
