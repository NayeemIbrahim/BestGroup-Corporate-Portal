<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageBlock;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pages = [
            // -----------------------------------------------------------------
            // 1. About Us Page
            // -----------------------------------------------------------------
            [
                'slug'             => 'about-us',
                'title'            => 'About BEST GROUP Conglomerate',
                'meta_title'       => 'About BEST GROUP | Excellence in Every Endeavor',
                'meta_description' => 'Discover BEST GROUP\'s corporate history, diversified enterprise portfolio across 6 listed companies, core leadership, and nationwide impact.',
                'is_published'     => true,
                'blocks'           => [
                    [
                        'type'          => 'rich_text',
                        'display_order' => 0,
                        'content'       => [
                            'title'    => 'BEST GROUP — Excellence in Every Endeavor',
                            'subtitle' => 'Pioneering institutional governance, diversified multi-sector industrial growth, and nationwide trust.',
                            'body'     => '
                                <p><strong>BEST GROUP</strong> is one of Bangladesh\'s premier diversified multi-sector holding conglomerates, dedicated to driving nation-building initiatives, modern commerce, and sustainable infrastructure.</p>
                                <h2>Our Corporate Heritage & Identity</h2>
                                <p>Headquartered at <strong>9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000</strong>, BEST GROUP operates under the non-negotiable motto <em>"Excellence in Every Endeavor"</em>. Over decades of dedicated expansion, the group has cultivated benchmark operations across commercial construction, smart urban housing, nationwide e-commerce, pharmaceutical retail, and global travel facilitation.</p>
                                <blockquote>"At Best Group, we are committed to excellence, integrity, innovation, and creating lasting value for our customers and communities. Excellence in Every Endeavor is our guiding light." — M.A. Mizanur Rahman, Chairman</blockquote>
                                <h2>Our 6 Listed Companies & Business Wings</h2>
                                <ul>
                                    <li><strong>Best Group:</strong> The central holding conglomerate steering strategic leadership, board-level investments, and ESG governance.</li>
                                    <li><strong>Best Product International Ltd.:</strong> Pioneering omnichannel digital retail, curated consumer marketplace products, and nationwide doorstep delivery.</li>
                                    <li><strong>Best South City Ltd.:</strong> Developing master-planned smart residential communities, quality suburban housing, and modern civic living spaces.</li>
                                    <li><strong>Best Commercial & Builders Ltd.:</strong> Specializing in landmark commercial skyscrapers, institutional construction, and industrial engineering precision.</li>
                                    <li><strong>Best Model Pharmacy Ltd.:</strong> Setting national healthcare standards with certified retail pharmacies, cold-chain preservation, and 100% genuine medicine guarantee.</li>
                                    <li><strong>Best International Overseas:</strong> Premier corporate travel management, luxury outbound tourism, Hajj & Umrah services, and international mobility.</li>
                                </ul>
                                <h2>Corporate Governance & Operational Hub</h2>
                                <p>All subsidiaries adhere to standardized ISO quality frameworks, strict corporate audits, and community-first empowerment programs. For institutional dialogue, our headquarters can be reached directly via <strong>01910-203058</strong> or <strong>01711-626577</strong>.</p>
                            ',
                        ],
                    ],
                    [
                        'type'          => 'services',
                        'display_order' => 1,
                        'content'       => [
                            'section_title'    => 'Our 6 Strategic Business Pillars',
                            'section_subtitle' => 'Each enterprise operates as a market leader backed by shared corporate governance.',
                            'services_list'    => [
                                [
                                    'icon'        => 'ShoppingBagIcon',
                                    'title'       => 'Best Product International Ltd.',
                                    'description' => 'E-Commerce enterprise delivering premium consumer products and nationwide doorstep delivery.',
                                ],
                                [
                                    'icon'        => 'BuildingOfficeIcon',
                                    'title'       => 'Best South City Ltd.',
                                    'description' => 'Smart residential community planning, modern suburban developments, and quality family living.',
                                ],
                                [
                                    'icon'        => 'WrenchScrewdriverIcon',
                                    'title'       => 'Best Commercial & Builders Ltd.',
                                    'description' => 'Landmark commercial towers, civil engineering contracting, and corporate real estate developments.',
                                ],
                                [
                                    'icon'        => 'HeartIcon',
                                    'title'       => 'Best Model Pharmacy Ltd.',
                                    'description' => '100% genuine pharmaceuticals, certified cold-chain preservation, and clinical pharmacist support.',
                                ],
                                [
                                    'icon'        => 'GlobeAltIcon',
                                    'title'       => 'Best International Overseas',
                                    'description' => 'Global travel, executive air ticketing, bespoke holiday packages, and overseas travel management.',
                                ],
                                [
                                    'icon'        => 'ShieldCheckIcon',
                                    'title'       => 'Best Group (Corporate Desk)',
                                    'description' => 'Central holding conglomerate orchestrating multi-sector investments and ethical corporate stewardship.',
                                ],
                            ],
                        ],
                    ],
                    [
                        'type'          => 'contact',
                        'display_order' => 2,
                        'content'       => [
                            'heading'                => 'Partner With BEST GROUP Executive Leadership',
                            'subtext'                => '9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000 | Phone: 01910-203058, 01711-626577',
                            'form_email_destination' => 'info@bestgroupatoz.com',
                        ],
                    ],
                ],
            ],

            // -----------------------------------------------------------------
            // 2. Chairman's Message Page
            // -----------------------------------------------------------------
            [
                'slug'             => 'chairmans-message',
                'title'            => 'Chairman’s Message | M.A. Mizanur Rahman',
                'meta_title'       => 'Chairman’s Message | BEST GROUP Conglomerate Holdings',
                'meta_description' => 'Read the official Chairman’s Message by M.A. Mizanur Rahman on Best Group\'s vision, core values of excellence and integrity, and future horizon.',
                'is_published'     => true,
                'blocks'           => [
                    [
                        'type'          => 'chairman_message',
                        'display_order' => 0,
                        'content'       => [
                            'title'              => 'Chairman’s Message',
                            'chairman_name'      => 'M.A. Mizanur Rahman',
                            'chairman_title'     => 'Chairman, Best Group',
                            'motto'              => '“Excellence in Every Endeavor.”',
                            'chairman_image_url' => '/images/chairman.jpg',
                            'message'            => 'At Best Group, we are committed to excellence, integrity, innovation, and creating lasting value for our customers and communities. Through our diverse businesses, we continuously strive to deliver quality, build trust, and create new opportunities for a better future.',
                        ],
                    ],
                    [
                        'type'          => 'services',
                        'display_order' => 1,
                        'content'       => [
                            'section_title'    => 'Diversified Enterprise Horizons',
                            'section_subtitle' => 'Driving excellence across our 6 listed business wings under the Chairman’s strategic guidance.',
                            'services_list'    => [
                                [
                                    'icon'        => 'ShoppingBagIcon',
                                    'title'       => 'Best Product International Ltd.',
                                    'description' => 'E-Commerce enterprise delivering verified consumer products and nationwide doorstep delivery.',
                                ],
                                [
                                    'icon'        => 'BuildingOfficeIcon',
                                    'title'       => 'Best South City Ltd.',
                                    'description' => 'Master-planned residential communities, modern urban planning, and quality living spaces.',
                                ],
                                [
                                    'icon'        => 'WrenchScrewdriverIcon',
                                    'title'       => 'Best Commercial & Builders Ltd.',
                                    'description' => 'Landmark commercial towers, high-rise architectural engineering, and corporate construction.',
                                ],
                                [
                                    'icon'        => 'HeartIcon',
                                    'title'       => 'Best Model Pharmacy Ltd.',
                                    'description' => 'Certified retail pharmacies with 100% authentic medicine guarantee and cold-chain protection.',
                                ],
                                [
                                    'icon'        => 'GlobeAltIcon',
                                    'title'       => 'Best International Overseas',
                                    'description' => 'Executive air ticketing, overseas mobility, corporate delegations, and luxury tourism.',
                                ],
                                [
                                    'icon'        => 'ShieldCheckIcon',
                                    'title'       => 'Best Group Holding',
                                    'description' => 'Corporate holding steering institutional governance and sustainable investment initiatives.',
                                ],
                            ],
                        ],
                    ],
                    [
                        'type'          => 'contact',
                        'display_order' => 2,
                        'content'       => [
                            'heading'                => 'Executive Liaison & Board Secretariat',
                            'subtext'                => '9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000 | Phone: 01910-203058, 01711-626577',
                            'form_email_destination' => 'info@bestgroupatoz.com',
                        ],
                    ],
                ],
            ],

            // -----------------------------------------------------------------
            // 3. Privacy Policy Page
            // -----------------------------------------------------------------
            [
                'slug'             => 'privacy-policy',
                'title'            => 'Corporate Privacy Policy',
                'meta_title'       => 'Privacy Policy | BEST GROUP Holdings Ltd.',
                'meta_description' => 'Official privacy policy detailing data protection, encryption standards, and user rights across BEST GROUP digital services.',
                'is_published'     => true,
                'blocks'           => [
                    [
                        'type'          => 'rich_text',
                        'display_order' => 0,
                        'content'       => [
                            'title'    => 'Privacy & Data Protection Policy',
                            'subtitle' => 'Effective Date: January 1, 2026 • Governing BEST GROUP (9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000)',
                            'body'     => '
                                <p>At <strong>BEST GROUP</strong>, we prioritize the confidentiality, integrity, and security of personal and institutional data entrusted to us. This Privacy Policy outlines our data handling practices across our corporate portal, investor systems, e-commerce networks, healthcare facilities, and travel booking systems.</p>
                                <h2>1. Information We Collect</h2>
                                <p>We collect information necessary to deliver benchmark services, comply with national regulatory requirements, and ensure transaction security:</p>
                                <ul>
                                    <li><strong>Personal Identification:</strong> Full name, verified mobile number, corporate email address, and official national identification for verified investor portal access.</li>
                                    <li><strong>Commercial & Transactional Data:</strong> Invoicing details, shipment addresses for Best Product International Ltd. deliveries, and title allotment records for Best South City Ltd. and Best Commercial & Builders Ltd.</li>
                                    <li><strong>Health & Prescription Data:</strong> Doctor prescriptions and medication orders processed through Best Model Pharmacy Ltd. strictly compliant with DGDA healthcare standards.</li>
                                    <li><strong>Travel & Overseas Data:</strong> Passport particulars and visa documentation required for Best International Overseas bookings.</li>
                                </ul>
                                <h2>2. Information Security & Encryption</h2>
                                <p>All data transmitted through our digital systems is encrypted utilizing industry-standard TLS 1.3 encryption protocols. Stored data is safeguarded in secure server environments with restricted, multi-factor authenticated administrative access.</p>
                                <h2>3. Data Protection Inquiries & Contacts</h2>
                                <p>For inquiries regarding data records or privacy rights, please reach our Data Compliance Officer at <strong>info@bestgroupatoz.com</strong> or call <strong>01910-203058 / 01711-626577</strong>. Address: 9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000.</p>
                            ',
                        ],
                    ],
                    [
                        'type'          => 'contact',
                        'display_order' => 1,
                        'content'       => [
                            'heading'                => 'Contact Data Compliance Desk',
                            'subtext'                => 'Have questions regarding our privacy practices? Contact us at 9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000.',
                            'form_email_destination' => 'info@bestgroupatoz.com',
                        ],
                    ],
                ],
            ],

            // -----------------------------------------------------------------
            // 4. Terms of Engagement Page
            // -----------------------------------------------------------------
            [
                'slug'             => 'terms-of-engagement',
                'title'            => 'Terms of Engagement & Corporate Governance',
                'meta_title'       => 'Terms of Engagement | BEST GROUP Corporate Portal',
                'meta_description' => 'Commercial terms, investor disclaimers, intellectual property conditions, and governance policies of BEST GROUP.',
                'is_published'     => true,
                'blocks'           => [
                    [
                        'type'          => 'rich_text',
                        'display_order' => 0,
                        'content'       => [
                            'title'    => 'Terms of Engagement & Commercial Governance',
                            'subtitle' => 'General conditions governing portal utilization, commercial partnerships, and investor communications.',
                            'body'     => '
                                <p>Welcome to the <strong>BEST GROUP</strong> corporate portal. By accessing this platform or engaging with our business wings, you agree to comply with the following contractual terms and governance policies.</p>
                                <h2>1. Intellectual Property & Brand Assets</h2>
                                <p>The logo, design marks, brand name <em>BEST GROUP — Excellence in Every Endeavor —</em>, architectural blueprints, software systems, and data dashboards displayed across this portal are the proprietary intellectual property of BEST GROUP. Any unauthorized reproduction or scraping is strictly prohibited.</p>
                                <h2>2. Commercial Operating Entities</h2>
                                <p>All commercial transactions are executed through our relevant corporate entities:</p>
                                <ul>
                                    <li><strong>E-Commerce Operations:</strong> Best Product International Ltd.</li>
                                    <li><strong>Residential Community Developments:</strong> Best South City Ltd.</li>
                                    <li><strong>Commercial Construction & High-Rises:</strong> Best Commercial & Builders Ltd.</li>
                                    <li><strong>Pharmacy & Healthcare Retail:</strong> Best Model Pharmacy Ltd.</li>
                                    <li><strong>Travel, Aviation & Tours:</strong> Best International Overseas</li>
                                </ul>
                                <h2>3. Governing Law & Jurisdiction</h2>
                                <p>These terms and all commercial disputes arising from engagement with BEST GROUP shall be governed exclusively by the laws of Bangladesh and adjudicated under the jurisdiction of the competent Courts of Dhaka.</p>
                                <p>Corporate Office: <strong>9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000</strong> | Phone: <strong>01910-203058, 01711-626577</strong>.</p>
                            ',
                        ],
                    ],
                    [
                        'type'          => 'contact',
                        'display_order' => 1,
                        'content'       => [
                            'heading'                => 'Legal & Corporate Affairs Inquiries',
                            'subtext'                => 'For contract reviews, formal tenders, and corporate governance questions.',
                            'form_email_destination' => 'info@bestgroupatoz.com',
                        ],
                    ],
                ],
            ],

            // -----------------------------------------------------------------
            // 5. Mission & Vision Page
            // -----------------------------------------------------------------
            [
                'slug'             => 'mission-vision',
                'title'            => 'Our Mission, Vision & Strategic Values',
                'meta_title'       => 'Mission & Vision | BEST GROUP Strategic Horizon',
                'meta_description' => 'Explore BEST GROUP\'s strategic mission, vision, and core corporate creed: Excellence in Every Endeavor.',
                'is_published'     => true,
                'blocks'           => [
                    [
                        'type'          => 'rich_text',
                        'display_order' => 0,
                        'content'       => [
                            'title'    => 'BEST GROUP — Excellence in Every Endeavor',
                            'subtitle' => 'Our guiding philosophy, institutional mission, and strategic horizon for nation-building.',
                            'body'     => '
                                <h2>Our Corporate Motto</h2>
                                <blockquote>"BEST GROUP — Excellence in Every Endeavor —"</blockquote>
                                <h2>Our Corporate Mission</h2>
                                <p>To engineer benchmark commercial infrastructure, smart residential communities, frictionless digital commerce, essential cold-chain healthcare, and world-class travel services that elevate living standards and create lasting value for our customers, partners, and communities.</p>
                                <h2>Our Strategic Vision</h2>
                                <p>To stand as Bangladesh\'s foremost diversified corporate conglomerate, universally recognized for uncompromised quality, ethical corporate stewardship, customer-centric innovation, and sustainable multi-sector leadership across all 6 of our listed business wings.</p>
                                <h2>Core Institutional Creed</h2>
                                <ul>
                                    <li><strong>Excellence:</strong> Delivering world-class standards without compromise in every single product, building, and service.</li>
                                    <li><strong>Integrity:</strong> Unshakeable transparency, fiscal governance, and institutional trust in all relationships.</li>
                                    <li><strong>Innovation:</strong> Embracing modern automated logistics, green building standards, and clinical healthcare excellence.</li>
                                    <li><strong>Value Creation:</strong> Building generational prosperity for customers, employees, and our nation.</li>
                                </ul>
                            ',
                        ],
                    ],
                    [
                        'type'          => 'faq',
                        'display_order' => 1,
                        'content'       => [
                            'section_title'    => 'Mission & Value Implementation Inquiries',
                            'section_subtitle' => 'How BEST GROUP turns vision into tangible daily operational excellence.',
                            'faqs'             => [
                                [
                                    'question' => 'How does BEST GROUP enforce "Excellence in Every Endeavor"?',
                                    'answer'   => 'Every listed entity operates with standardized ISO quality management systems, rigorous independent audits, and dedicated customer feedback desks centered at our Motijheel corporate headquarters.',
                                ],
                                [
                                    'question' => 'What is the role of Best Product International Ltd. in the group\'s mission?',
                                    'answer'   => 'Best Product International Ltd. democratizes access to authentic, high-grade consumer goods through state-of-the-art e-commerce logistics and reliable nationwide delivery.',
                                ],
                                [
                                    'question' => 'How do Best South City Ltd. and Best Commercial & Builders Ltd. ensure sustainable urban growth?',
                                    'answer'   => 'Both construction wings implement eco-friendly engineering, structural safety compliance according to the Bangladesh National Building Code (BNBC), and sustainable smart-living environments.',
                                ],
                            ],
                        ],
                    ],
                    [
                        'type'          => 'contact',
                        'display_order' => 2,
                        'content'       => [
                            'heading'                => 'Connect with BEST GROUP Corporate Secretariat',
                            'subtext'                => '9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000 | Phone: 01910-203058, 01711-626577',
                            'form_email_destination' => 'info@bestgroupatoz.com',
                        ],
                    ],
                ],
            ],

            // -----------------------------------------------------------------
            // 6. Contact Page
            // -----------------------------------------------------------------
            [
                'slug'             => 'contact',
                'title'            => 'Contact BEST GROUP Corporate Headquarters',
                'meta_title'       => 'Contact Us | BEST GROUP 9th Floor DBBL Wohid Tower Motijheel',
                'meta_description' => 'Official contact details for BEST GROUP headquarters at 9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000. Phone: 01910-203058, 01711-626577.',
                'is_published'     => true,
                'blocks'           => [
                    [
                        'type'          => 'contact',
                        'display_order' => 0,
                        'content'       => [
                            'heading'                => 'Connect with Corporate Headquarters',
                            'subtext'                => '9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000 | Phone: 01910-203058, 01711-626577 | Email: info@bestgroupatoz.com',
                            'form_email_destination' => 'info@bestgroupatoz.com',
                        ],
                    ],
                    [
                        'type'          => 'rich_text',
                        'display_order' => 1,
                        'content'       => [
                            'title'    => 'Corporate Directory & Listed Entity Desks',
                            'subtitle' => 'Direct contact points for business inquiries across our 6 listed companies.',
                            'body'     => '
                                <h2>BEST GROUP Corporate Headquarters</h2>
                                <p><strong>Address:</strong> 9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000, Bangladesh<br />
                                <strong>Direct Hotlines:</strong> 01910-203058, 01711-626577<br />
                                <strong>Official Corporate Email:</strong> info@bestgroupatoz.com<br />
                                <strong>Website:</strong> <a href="https://bestgroupatoz.com">https://bestgroupatoz.com</a></p>
                                <h2>Our Listed Companies Contact Directory</h2>
                                <ul>
                                    <li><strong>Best Group (Holding Desk):</strong> Strategic inquiries, board affairs, institutional dialogue.</li>
                                    <li><strong>Best Product International Ltd. (E-Commerce):</strong> Merchant onboarding, bulk orders, customer care.</li>
                                    <li><strong>Best South City Ltd. (Real Estate):</strong> Residential plot booking, apartment allotments, site tours.</li>
                                    <li><strong>Best Commercial & Builders Ltd. (Construction):</strong> Commercial tower leasing, structural engineering contracts.</li>
                                    <li><strong>Best Model Pharmacy Ltd. (Healthcare):</strong> Pharmacy franchise, medicine supply distribution, clinical procurement.</li>
                                    <li><strong>Best International Overseas (Travel & Tours):</strong> Air ticketing, holiday packages, corporate travel management, Hajj & Umrah.</li>
                                </ul>
                                <h2>Office Hours</h2>
                                <p>Sunday to Thursday: 9:00 AM – 6:00 PM (BST). Saturday: Corporate Desk open by appointment. Closed on Fridays and national holidays.</p>
                            ',
                        ],
                    ],
                ],
            ],

            // -----------------------------------------------------------------
            // 7. FAQ Page
            // -----------------------------------------------------------------
            [
                'slug'             => 'faq',
                'title'            => 'Frequently Asked Questions (FAQ)',
                'meta_title'       => 'FAQ | BEST GROUP Listed Companies, Services & Headquarters',
                'meta_description' => 'Get answers to frequently asked questions about BEST GROUP, our 6 listed companies, Motijheel headquarters, and operations.',
                'is_published'     => true,
                'blocks'           => [
                    [
                        'type'          => 'faq',
                        'display_order' => 0,
                        'content'       => [
                            'section_title'    => 'Frequently Asked Questions',
                            'section_subtitle' => 'Comprehensive information regarding BEST GROUP, our listed entities, and customer services.',
                            'faqs'             => [
                                [
                                    'question' => 'What is BEST GROUP and what companies are listed under it?',
                                    'answer'   => 'BEST GROUP is a premier diversified corporate conglomerate operating under the motto "Excellence in Every Endeavor". Our listed companies include: (1) Best Group (Parent Holding), (2) Best Product International Ltd. (E-Commerce), (3) Best South City Ltd. (Real Estate & Urban Living), (4) Best Commercial & Builders Ltd. (Commercial Construction), (5) Best Model Pharmacy Ltd. (Healthcare & Retail Pharmacy), and (6) Best International Overseas (Travel & Tours).',
                                ],
                                [
                                    'question' => 'Where is the corporate headquarters of BEST GROUP located?',
                                    'answer'   => 'Our central corporate headquarters is located at: 9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000, Bangladesh. You can contact our corporate desk via hotlines: 01910-203058 and 01711-626577, or email: info@bestgroupatoz.com.',
                                ],
                                [
                                    'question' => 'How does Best Product International Ltd. operate its e-commerce network?',
                                    'answer'   => 'Best Product International Ltd. provides an omnichannel digital marketplace featuring verified consumer goods, secure online payment gateways, and rapid doorstep delivery across Bangladesh.',
                                ],
                                [
                                    'question' => 'What are the main real estate developments of Best South City Ltd. and Best Commercial & Builders Ltd.?',
                                    'answer'   => 'Best South City Ltd. specializes in modern suburban residential communities with green spaces and civic amenities. Best Commercial & Builders Ltd. focuses on grade-A corporate towers, commercial business centers, and institutional construction with highest engineering safety standards.',
                                ],
                                [
                                    'question' => 'How does Best Model Pharmacy Ltd. guarantee 100% genuine medicine?',
                                    'answer'   => 'Best Model Pharmacy Ltd. procures all pharmaceutical products directly from DGDA-licensed manufacturers, maintaining uninterrupted cold-chain logistics and providing consultations from registered clinical pharmacists.',
                                ],
                                [
                                    'question' => 'What travel and visa services are provided by Best International Overseas?',
                                    'answer'   => 'Best International Overseas provides complete corporate travel facilitation, chartered air travel, international holiday packages, Hajj & Umrah packages, and professional visa processing assistance.',
                                ],
                            ],
                        ],
                    ],
                    [
                        'type'          => 'contact',
                        'display_order' => 1,
                        'content'       => [
                            'heading'                => 'Have Any Other Inquiries?',
                            'subtext'                => 'Reach out to our executive desk at 9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000 | Phone: 01910-203058, 01711-626577',
                            'form_email_destination' => 'info@bestgroupatoz.com',
                        ],
                    ],
                ],
            ],

            // -----------------------------------------------------------------
            // 8. Our Sister Concern / Listed Companies Page
            // -----------------------------------------------------------------
            [
                'slug'             => 'our-sister-concern',
                'title'            => 'Our Listed Companies & Business Wings',
                'meta_title'       => 'Listed Companies & Business Wings | BEST GROUP',
                'meta_description' => 'Complete directory of BEST GROUP listed companies: Best Product International Ltd., Best South City Ltd., Best Commercial & Builders Ltd., Best Model Pharmacy Ltd., and Best International Overseas.',
                'is_published'     => true,
                'blocks'           => [
                    [
                        'type'          => 'brands',
                        'display_order' => 0,
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
                                    'website_link' => '#ecommerce',
                                ],
                                [
                                    'brand_name'   => 'Best South City Ltd.',
                                    'logo_url'     => 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=300&auto=format&fit=crop',
                                    'website_link' => '#real-estate',
                                ],
                                [
                                    'brand_name'   => 'Best Commercial & Builders Ltd.',
                                    'logo_url'     => 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=300&auto=format&fit=crop',
                                    'website_link' => '#construction',
                                ],
                                [
                                    'brand_name'   => 'Best Model Pharmacy Ltd.',
                                    'logo_url'     => 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=300&auto=format&fit=crop',
                                    'website_link' => '#pharmacy',
                                ],
                                [
                                    'brand_name'   => 'Best International Overseas',
                                    'logo_url'     => 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=300&auto=format&fit=crop',
                                    'website_link' => '#travel',
                                ],
                            ],
                        ],
                    ],
                    [
                        'type'          => 'rich_text',
                        'display_order' => 1,
                        'content'       => [
                            'title'    => 'BEST GROUP Listed Enterprises & Subsidiaries',
                            'subtitle' => 'Six high-impact corporate entities driven by unified institutional governance and standards.',
                            'body'     => '
                                <p>Each subsidiary under <strong>BEST GROUP</strong> operates as an autonomous leader in its industry while benefiting from centralized strategic leadership and fiscal backing from our corporate headquarters at <strong>9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000</strong>.</p>
                                <h2>1. Best Group (Holding Company)</h2>
                                <p><strong>Motto:</strong> <em>"Excellence in Every Endeavor"</em><br />The parent holding conglomerate orchestrating multi-sector investments, corporate ethics, board governance, and long-term nation-building strategy.</p>
                                <h2>2. Best Product International Ltd. (E-Commerce)</h2>
                                <p>A modern e-commerce marketplace and logistics powerhouse providing authentic consumer goods, reliable digital checkout systems, and dedicated doorstep delivery across Bangladesh.</p>
                                <h2>3. Best South City Ltd. (Smart Urban Living)</h2>
                                <p>Specializing in master-planned suburban housing communities, residential plot allotments, and modern urban infrastructure engineered for safety and serene living.</p>
                                <h2>4. Best Commercial & Builders Ltd. (Commercial Construction)</h2>
                                <p>Pioneering modern architectural engineering, grade-A corporate high-rises, commercial retail hubs, and industrial warehousing infrastructure.</p>
                                <h2>5. Best Model Pharmacy Ltd. (Healthcare)</h2>
                                <p>Dedicated to elevating healthcare through standardized retail pharmacies, strict cold-chain preservation for sensitive medicines, and licensed clinical pharmacists.</p>
                                <h2>6. Best International Overseas (Travel & Tours)</h2>
                                <p>A premier full-service travel management company providing worldwide air ticketing, customized corporate delegations, luxury vacation itineraries, and Hajj & Umrah services.</p>
                            ',
                        ],
                    ],
                    [
                        'type'          => 'services',
                        'display_order' => 2,
                        'content'       => [
                            'section_title'    => 'Integrated Capabilities Across Listed Wings',
                            'section_subtitle' => 'Cross-functional sector synergy delivering benchmark value to our customers and partners.',
                            'services_list'    => [
                                [
                                    'icon'        => 'ShoppingBagIcon',
                                    'title'       => 'Best Product International Ltd.',
                                    'description' => 'Omnichannel digital commerce, automated warehousing, and nationwide fulfillment.',
                                ],
                                [
                                    'icon'        => 'BuildingOfficeIcon',
                                    'title'       => 'Best South City Ltd.',
                                    'description' => 'Eco-friendly residential communities and modern planned urban lifestyle projects.',
                                ],
                                [
                                    'icon'        => 'WrenchScrewdriverIcon',
                                    'title'       => 'Best Commercial & Builders Ltd.',
                                    'description' => 'Commercial engineering, landmark skyscrapers, and high-spec civil construction.',
                                ],
                                [
                                    'icon'        => 'HeartIcon',
                                    'title'       => 'Best Model Pharmacy Ltd.',
                                    'description' => '100% genuine pharmaceutical chain with continuous cold-chain temperature control.',
                                ],
                                [
                                    'icon'        => 'GlobeAltIcon',
                                    'title'       => 'Best International Overseas',
                                    'description' => 'Worldwide aviation ticketing, corporate tours, visa concierge, and luxury travel.',
                                ],
                                [
                                    'icon'        => 'ShieldCheckIcon',
                                    'title'       => 'Best Group (Corporate Desk)',
                                    'description' => 'Executive board governance, ethical stewardship, and multi-sector investment capital.',
                                ],
                            ],
                        ],
                    ],
                    [
                        'type'          => 'contact',
                        'display_order' => 3,
                        'content'       => [
                            'heading'                => 'Inquire About Commercial Alliances & Wing Services',
                            'subtext'                => '9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000 | Hotline: 01910-203058, 01711-626577',
                            'form_email_destination' => 'info@bestgroupatoz.com',
                        ],
                    ],
                ],
            ],

            // -----------------------------------------------------------------
            // 9. Careers Page
            // -----------------------------------------------------------------
            [
                'slug'             => 'careers',
                'title'            => 'Careers at BEST GROUP | Join Our Multi-Sector Team',
                'meta_title'       => 'Careers at BEST GROUP | Excellence in Every Endeavor',
                'meta_description' => 'Explore career opportunities across our 6 listed companies. Join a high-performance conglomerate committed to innovation, integrity, and excellence.',
                'is_published'     => true,
                'blocks'           => [
                    [
                        'type'          => 'rich_text',
                        'display_order' => 0,
                        'content'       => [
                            'title'    => 'Build Your Future with BEST GROUP',
                            'subtitle' => 'Join one of Bangladesh\'s leading diversified conglomerates and shape the future of commerce, housing, healthcare, and infrastructure.',
                            'body'     => '
                                <p>At <strong>BEST GROUP</strong>, we believe our people are the foundation of our motto: <em>"Excellence in Every Endeavor"</em>. We provide dynamic career pathways, merit-driven progression, and the opportunity to work across 6 high-growth commercial industries.</p>
                                <h2>Why Build a Career at BEST GROUP?</h2>
                                <ul>
                                    <li><strong>Multi-Sector Exposure:</strong> Gain experience across parent holding governance, e-commerce, commercial construction, real estate, healthcare, and global travel.</li>
                                    <li><strong>Meritocratic Culture:</strong> Transparent performance evaluations, executive mentorship, and rapid career acceleration.</li>
                                    <li><strong>Competitive Benefits:</strong> Comprehensive healthcare coverage, performance bonuses, provident funds, and continuous professional development.</li>
                                    <li><strong>Ethical Leadership:</strong> Work in an institutional environment driven by integrity, safety, and community responsibility.</li>
                                </ul>
                                <h2>Current Career Openings</h2>
                                <ul>
                                    <li><strong>Senior Civil & Structural Engineer:</strong> Best Commercial & Builders Ltd. — Minimum 5+ years experience in high-rise construction, BNBC codes, and contractor oversight.</li>
                                    <li><strong>Full-Stack Web Application Developer:</strong> Best Product International Ltd. — Strong experience with modern JavaScript, React/Next.js, REST APIs, and high-throughput e-commerce systems.</li>
                                    <li><strong>Licensed Clinical Pharmacist & Branch Manager:</strong> Best Model Pharmacy Ltd. — B.Pharm degree, DGDA licensing, cold-chain compliance experience, and patient counseling expertise.</li>
                                    <li><strong>Corporate Travel & Aviation Consultant:</strong> Best International Overseas — Proven ticketing & GDS proficiency (Amadeus/Sabre), visa consulting, and executive itinerary management.</li>
                                    <li><strong>Senior Urban Planning Architect:</strong> Best South City Ltd. — Expert in master community planning, residential townships, and sustainable architectural design.</li>
                                    <li><strong>Corporate Finance & Internal Audit Officer:</strong> BEST GROUP (Corporate Desk) — CA/CMA partly qualified or MBA in Finance with corporate auditing and financial reporting expertise.</li>
                                </ul>
                                <h2>How to Apply</h2>
                                <p>Interested candidates are invited to submit their updated Curriculum Vitae and a brief cover letter to <strong>careers@bestgroupatoz.com</strong> (or <strong>info@bestgroupatoz.com</strong>) indicating the position title in the subject line. You may also contact our HR desk directly at <strong>01910-203058</strong> or <strong>01711-626577</strong>.</p>
                            ',
                        ],
                    ],
                    [
                        'type'          => 'faq',
                        'display_order' => 1,
                        'content'       => [
                            'section_title'    => 'Careers & Recruitment FAQ',
                            'section_subtitle' => 'Common questions regarding recruitment, interviews, and employee benefits at BEST GROUP.',
                            'faqs'             => [
                                [
                                    'question' => 'What is the recruitment and interview process at BEST GROUP?',
                                    'answer'   => 'Our recruitment process includes initial resume screening, a technical interview with wing leadership, an executive panel interview at our Motijheel headquarters, and formal background verification.',
                                ],
                                [
                                    'question' => 'Can employees transfer between different listed companies?',
                                    'answer'   => 'Yes. BEST GROUP encourages internal mobility, allowing high-performing professionals to transfer between subsidiaries to gain multi-sector expertise.',
                                ],
                                [
                                    'question' => 'Where are the primary job locations based?',
                                    'answer'   => 'Corporate and governance roles are based at our central headquarters (9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000). Operational roles exist nationwide across our construction sites, retail pharmacy outlets, logistics fulfillment hubs, and sales offices.',
                                ],
                            ],
                        ],
                    ],
                    [
                        'type'          => 'contact',
                        'display_order' => 2,
                        'content'       => [
                            'heading'                => 'Submit Your Resume or Career Inquiry',
                            'subtext'                => 'Send your credentials directly to our Human Resources Division at Motijheel Headquarters.',
                            'form_email_destination' => 'careers@bestgroupatoz.com',
                        ],
                    ],
                ],
            ],

            // -----------------------------------------------------------------
            // 10. Media & Press Center Page
            // -----------------------------------------------------------------
            [
                'slug'             => 'media-press',
                'title'            => 'Media & Press Center | BEST GROUP Corporate News',
                'meta_title'       => 'Media & Press | BEST GROUP Official Statements & Publications',
                'meta_description' => 'Official press releases, media coverage, executive announcements, and corporate brand assets for journalists and analysts.',
                'is_published'     => true,
                'blocks'           => [
                    [
                        'type'          => 'rich_text',
                        'display_order' => 0,
                        'content'       => [
                            'title'    => 'BEST GROUP Media & Press Center',
                            'subtitle' => 'Official news, executive press releases, media kits, and corporate announcements.',
                            'body'     => '
                                <p>Welcome to the <strong>BEST GROUP Media & Press Center</strong>. We are committed to proactive, transparent communication with news outlets, financial journalists, institutional partners, and the public.</p>
                                <h2>Recent Corporate Press Releases</h2>
                                <ul>
                                    <li><strong>BEST GROUP Unveils Modern Digital Corporate Portal:</strong> Centralizing stakeholder communications, investor disclosures, and listed entity access on bestgroupatoz.com.</li>
                                    <li><strong>Best Model Pharmacy Ltd. Expands Certified Cold-Chain Chain:</strong> Introducing standardized retail medicine outlets to guarantee 100% genuine pharmaceutical access across urban centers.</li>
                                    <li><strong>Best Commercial & Builders Ltd. Completes Landmark Structural Phase:</strong> Delivering grade-A commercial infrastructure built according to highest engineering and earthquake safety standards.</li>
                                    <li><strong>Best South City Ltd. Announces Smart Residential Living Initiative:</strong> Introducing green, eco-friendly master-planned townships with modern recreational spaces.</li>
                                    <li><strong>Best International Overseas Inks Global Aviation Partnerships:</strong> Expanding corporate itinerary booking, luxury tourism, and international travel management capabilities.</li>
                                </ul>
                                <h2>Brand Resources & Media Kit</h2>
                                <p>Authorized journalists, media publications, and conference organizers may request our official brand kit containing high-resolution vector logos, executive portraits of Chairman M.A. Mizanur Rahman, corporate font guides, and entity briefers.</p>
                                <h2>Media Liaison & Spokesperson Contact</h2>
                                <p>For press inquiries, exclusive executive interviews, or official statements, please reach out to our Public Relations & Corporate Communications Desk at <strong>9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000</strong>. Hotlines: <strong>01910-203058, 01711-626577</strong> | Email: <strong>info@bestgroupatoz.com</strong>.</p>
                            ',
                        ],
                    ],
                    [
                        'type'          => 'faq',
                        'display_order' => 1,
                        'content'       => [
                            'section_title'    => 'Press & Media Inquiries FAQ',
                            'section_subtitle' => 'Guidelines for press coverage, photo permissions, and executive interviews.',
                            'faqs'             => [
                                [
                                    'question' => 'How can journalists schedule an executive interview with BEST GROUP leadership?',
                                    'answer'   => 'Please send formal interview requests including media outlet credentials, proposed topics, and deadlines to info@bestgroupatoz.com. Our PR desk responds within 24 business hours.',
                                ],
                                [
                                    'question' => 'Are corporate logos and high-resolution images available for publication?',
                                    'answer'   => 'Yes. High-resolution corporate logos, project photography, and executive portraits are provided upon request via our media liaison desk.',
                                ],
                            ],
                        ],
                    ],
                    [
                        'type'          => 'contact',
                        'display_order' => 2,
                        'content'       => [
                            'heading'                => 'Contact Corporate Communications & Media Desk',
                            'subtext'                => 'Direct contact point for press releases, journalist inquiries, and media partnerships.',
                            'form_email_destination' => 'info@bestgroupatoz.com',
                        ],
                    ],
                ],
            ],

            // -----------------------------------------------------------------
            // 11. Corporate Desk Page
            // -----------------------------------------------------------------
            [
                'slug'             => 'corporate-desk',
                'title'            => 'BEST GROUP Corporate Desk & Central Governance',
                'meta_title'       => 'Corporate Desk | BEST GROUP Executive Secretariat & Governance',
                'meta_description' => 'Central corporate desk, executive board secretariat, registered office details, and institutional liaison for BEST GROUP at 9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000.',
                'is_published'     => true,
                'blocks'           => [
                    [
                        'type'          => 'rich_text',
                        'display_order' => 0,
                        'content'       => [
                            'title'    => 'Central Corporate Desk & Governance Secretariat',
                            'subtitle' => 'The executive nerve center directing group-wide governance, strategic capital allocation, board affairs, and regulatory compliance.',
                            'body'     => '
                                <p>The <strong>BEST GROUP Corporate Desk</strong> serves as the central administrative and governance authority for our diversified conglomerate. Operating from our central headquarters at <strong>9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000</strong>, the desk coordinates operations across all 6 of our listed corporate entities.</p>
                                <h2>Mandate of the Corporate Desk</h2>
                                <p>Our primary mandate is ensuring that every subsidiary upholds the foundational pledge: <em>"Excellence in Every Endeavor"</em>. The Corporate Desk provides oversight across:</p>
                                <ul>
                                    <li><strong>Board & Secretariat Affairs:</strong> Managing board meetings, executive resolutions, and statutory filings.</li>
                                    <li><strong>Corporate Governance & Compliance:</strong> Enforcing ISO standards, safety protocols, and statutory transparency.</li>
                                    <li><strong>Institutional Investor Relations:</strong> Providing audited financial reports, dividend schedules, and ESG disclosures.</li>
                                    <li><strong>Strategic Joint Ventures & M&A:</strong> Evaluating cross-sector investments, partnerships, and high-impact alliances.</li>
                                    <li><strong>Legal & Corporate Affairs:</strong> Managing commercial contracts, enterprise procurement, and regulatory clearances.</li>
                                </ul>
                                <h2>Executive Office Details</h2>
                                <p><strong>Registered Address:</strong> 9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000, Bangladesh<br />
                                <strong>Official Hotlines:</strong> 01910-203058, 01711-626577<br />
                                <strong>Official Email:</strong> info@bestgroupatoz.com<br />
                                <strong>Office Hours:</strong> Sunday – Thursday: 9:00 AM – 6:00 PM BST (Closed on Fridays & National Holidays)</p>
                            ',
                        ],
                    ],
                    [
                        'type'          => 'services',
                        'display_order' => 1,
                        'content'       => [
                            'section_title'    => 'Key Executive Functions of the Corporate Desk',
                            'section_subtitle' => 'Standardized institutional services coordinating our multi-sector conglomerate.',
                            'services_list'    => [
                                [
                                    'icon'        => 'ShieldCheckIcon',
                                    'title'       => 'Executive Board Secretariat',
                                    'description' => 'Managing board resolutions, statutory corporate registries, and governance charters.',
                                ],
                                [
                                    'icon'        => 'BuildingOfficeIcon',
                                    'title'       => 'Multi-Sector Entity Oversight',
                                    'description' => 'Continuous strategic coordination and capital allocation across all 6 listed wings.',
                                ],
                                [
                                    'icon'        => 'GlobeAltIcon',
                                    'title'       => 'Institutional Investor Desk',
                                    'description' => 'Quarterly financial reporting, shareholder communications, and audited balance sheets.',
                                ],
                                [
                                    'icon'        => 'WrenchScrewdriverIcon',
                                    'title'       => 'Legal & Compliance Bureau',
                                    'description' => 'Ensuring regulatory adherence, contract management, and rigorous internal audit frameworks.',
                                ],
                                [
                                    'icon'        => 'HeartIcon',
                                    'title'       => 'ESG & Corporate Responsibility',
                                    'description' => 'Community empowerment, environmental safety, and ethical commercial stewardship.',
                                ],
                                [
                                    'icon'        => 'ShoppingBagIcon',
                                    'title'       => 'Strategic Alliances & Joint Ventures',
                                    'description' => 'Facilitating commercial partnerships, institutional tenders, and foreign collaborations.',
                                ],
                            ],
                        ],
                    ],
                    [
                        'type'          => 'contact',
                        'display_order' => 2,
                        'content'       => [
                            'heading'                => 'Schedule an Executive Meeting with Corporate Desk',
                            'subtext'                => 'For board inquiries, institutional partnerships, and senior executive dialogue at Motijheel headquarters.',
                            'form_email_destination' => 'info@bestgroupatoz.com',
                        ],
                    ],
                ],
            ],
        ];

        foreach ($pages as $pData) {
            $blocksData = $pData['blocks'];
            unset($pData['blocks']);

            $page = Page::updateOrCreate(
                ['slug' => $pData['slug']],
                $pData
            );

            // Clean previous blocks to ensure clean re-seeding
            $page->blocks()->delete();

            foreach ($blocksData as $bData) {
                PageBlock::create([
                    'page_id'       => $page->id,
                    'type'          => $bData['type'],
                    'display_order' => $bData['display_order'],
                    'content'       => $bData['content'],
                ]);
            }
        }
    }
}
