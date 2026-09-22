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
                    'site_name'     => 'Best Group Conglomerate',
                    'tagline'       => 'Pioneering Excellence Across Real Estate, E-Commerce, Healthcare & Travel',
                    'support_email' => 'corporate@bestgroup.com',
                    'phone'         => '+880 1800-BESTGRP',
                    'headquarters'  => 'Best Group Tower, Gulshan-2, Dhaka 1212',
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
                'title'            => 'Best Group - Leading Multi-Sector Enterprise',
                'meta_title'       => 'Best Group | Real Estate, E-Commerce, Pharmacy & Travel',
                'meta_description' => 'A premier holding group operating industry-leading wings: Best Properties, Best Mall, Best Model Pharmacy, and Best Global Tours.',
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
                'subtitle'             => 'A premier diversified group with benchmark ventures in Real Estate, E-Commerce, Modern Healthcare, and Global Tourism.',
                'background_image_url' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
                'button_text'          => 'Explore Business Wings',
                'button_link'          => '#wings',
            ],
        ]);

        // Block 2: Brands Block
        PageBlock::create([
            'page_id'       => $homePage->id,
            'type'          => 'brands',
            'display_order' => 1,
            'content'       => [
                'brands_list' => [
                    [
                        'brand_name'   => 'Best Real Estate',
                        'logo_url'     => 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=300&auto=format&fit=crop',
                        'website_link' => '#real-estate',
                    ],
                    [
                        'brand_name'   => 'Best E-Commerce',
                        'logo_url'     => 'https://images.unsplash.com/photo-1556742049-0a67e55722c6?q=80&w=300&auto=format&fit=crop',
                        'website_link' => '#ecommerce',
                    ],
                    [
                        'brand_name'   => 'Best Model Pharmacy',
                        'logo_url'     => 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=300&auto=format&fit=crop',
                        'website_link' => '#pharmacy',
                    ],
                    [
                        'brand_name'   => 'Best Travel & Tours',
                        'logo_url'     => 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=300&auto=format&fit=crop',
                        'website_link' => '#travel',
                    ],
                ],
            ],
        ]);

        // Block 3: Services Block
        PageBlock::create([
            'page_id'       => $homePage->id,
            'type'          => 'services',
            'display_order' => 2,
            'content'       => [
                'section_title'    => 'Our Strategic Business Wings',
                'section_subtitle' => 'Pioneering excellence across 4 high-growth industry sectors with unmatched reliability.',
                'services_list'    => [
                    [
                        'icon'        => 'BuildingOfficeIcon',
                        'title'       => 'Luxury & Commercial Real Estate',
                        'description' => 'Developing state-of-the-art residential condominiums, commercial hubs, and green-certified industrial parks.',
                    ],
                    [
                        'icon'        => 'ShoppingBagIcon',
                        'title'       => 'Omnichannel E-Commerce',
                        'description' => 'Nationwide consumer retail ecosystem powering tens of thousands of daily direct-to-consumer deliveries.',
                    ],
                    [
                        'icon'        => 'HeartIcon',
                        'title'       => 'Best Model Pharmacy Network',
                        'description' => 'Standardized retail pharmacies guaranteeing 100% authentic medicine, professional consultation, and cold-chain compliance.',
                    ],
                    [
                        'icon'        => 'GlobeAltIcon',
                        'title'       => 'Best Travel & Tours',
                        'description' => 'Luxury business travel, inbound tourism, customized holiday getaways, and worldwide visa & ticketing facilitation.',
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
                'heading'                => 'Connect with Our Corporate Headquarters',
                'subtext'                => 'Interested in investment partnerships, vendor onboarding, or enterprise services? Send us a direct inquiry.',
                'form_email_destination' => 'corporate@bestgroup.com',
            ],
        ]);
    }
}
