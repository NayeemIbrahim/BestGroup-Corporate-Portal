export interface WingDivision {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface WingProject {
  title: string;
  category: string;
  status: 'Completed' | 'Ongoing' | 'Flagship' | 'Strategic Pipeline';
  description: string;
  image: string;
  specs: { label: string; value: string }[];
}

export interface WingFaq {
  question: string;
  answer: string;
}

export interface WingDetail {
  slug: string;
  aliases: string[];
  wingNumber: string;
  name: string;
  brandName: string;
  tagline: string;
  sector: string;
  badgeText: string;
  accentColor: string; // Tailwind gradient classes
  glowColor: string;
  heroImage: string;
  secondaryImage: string;
  executiveSummary: string;
  strategicMission: string;
  strategicVision: string;
  stats: { label: string; value: string; detail: string }[];
  divisions: WingDivision[];
  projects: WingProject[];
  certifications: { name: string; issuer: string; badge: string }[];
  leadershipQuote: {
    quote: string;
    author: string;
    designation: string;
    avatar: string;
  };
  keyLocations: { facility: string; type: string; address: string }[];
  faqs: WingFaq[];
  contact: {
    desk: string;
    phone: string;
    hotline: string;
    email: string;
    address: string;
    hours: string;
  };
}

export const WINGS_DATA: WingDetail[] = [
  {
    slug: 'best-product-international-ltd',
    aliases: ['ecommerce', 'best-product', 'retail'],
    wingNumber: '01',
    name: 'Best Product International Ltd.',
    brandName: 'Best Product Int. Ltd.',
    tagline: 'Nationwide Omnichannel E-Commerce, Modern Retail & Express Doorstep Logistics',
    sector: 'Digital Commerce & Supply Chain Logistics',
    badgeText: 'Flagship Retail & E-Commerce Wing',
    accentColor: 'from-amber-500 via-amber-600 to-red-600',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1556742049-0a67e55722c6?q=80&w=1000&auto=format&fit=crop',
    executiveSummary:
      'Best Product International Ltd. is the premier digital commerce and retail distribution enterprise under the BEST GROUP umbrella. Engineered to transform retail accessibility across Bangladesh, the company integrates advanced B2C/B2B marketplace infrastructure, cold-chain grocery fulfillment, and an owned nationwide logistics network delivering guaranteed authentic goods directly to consumer doorsteps.',
    strategicMission:
      'To provide seamless, authentic, and rapid retail access to every citizen of Bangladesh through uncompromising quality assurance, secure transaction architectures, and localized fulfillment nodes.',
    strategicVision:
      'To be recognized as South Asia’s most trusted multi-category omnichannel enterprise, setting the benchmark for ethical digital commerce, zero-defect logistics, and customer satisfaction.',
    stats: [
      { label: 'Active Shoppers', value: '450,000+', detail: 'Verified consumer base across all 64 districts' },
      { label: 'Daily Dispatches', value: '15,000+', detail: 'Automated warehouse processing per 24-hour cycle' },
      { label: 'Fulfillment Centers', value: '12 Hubs', detail: 'Strategic regional fulfillment distribution centers' },
      { label: 'On-Time SLA', value: '99.8%', detail: 'Independently audited same-day & 24hr delivery rate' },
    ],
    divisions: [
      {
        title: 'B2C Direct Consumer Marketplace',
        description:
          'High-speed digital marketplace showcasing over 50,000 SKU categories spanning consumer electronics, home appliances, apparel, and daily essentials with verified vendor authenticity.',
        features: [
          'Direct-from-manufacturer guaranteed sourcing',
          'Biometric and tokenized instant payments',
          '7-day hassle-free doorstep returns',
          'Real-time GPS delivery tracking',
        ],
        icon: 'ShoppingBag',
      },
      {
        title: 'B2B Wholesale & Institutional Supply',
        description:
          'Dedicated enterprise procurement channel facilitating bulk purchasing, credit-backed inventory financing, and recurring corporate supply arrangements for supermarkets and institutions.',
        features: [
          'Volume-tiered corporate pricing structures',
          'Dedicated enterprise account managers',
          'Automated invoicing and VAT compliance',
          'Consolidated freight and dockside unloading',
        ],
        icon: 'Briefcase',
      },
      {
        title: 'Owned Express Fleet & Cold-Chain Logistics',
        description:
          'In-house temperature-monitored fleet and last-mile electric courier deployment servicing metropolitan and suburban routes with specialized cold-chain capacity for perishables.',
        features: [
          'Active GPS and temperature logging on every van',
          'Same-day metropolitan delivery slots',
          'Suburban micro-fulfillment hubs',
          'Eco-friendly electric two-wheeler fleet',
        ],
        icon: 'Truck',
      },
      {
        title: 'Merchant Incubation & Digital Payments',
        description:
          'Proprietary merchant enablement engine onboarding small-to-medium enterprises (SMEs) with digital storefronts, warehouse warehousing, and instant settlement wallets.',
        features: [
          'Automated merchant payouts within 24 hours',
          'Integrated PCI-DSS compliant checkout gateway',
          'AI-driven inventory demand forecasting',
          'Multi-channel customer service support 24/7',
        ],
        icon: 'ShieldCheck',
      },
    ],
    projects: [
      {
        title: 'Central Dhaka Mega-Fulfillment Hub',
        category: 'Automated Logistics Center',
        status: 'Completed',
        description:
          '120,000 sq. ft. automated sortation center featuring automated conveyor lines, multi-level pallet storage, and 30 simultaneous loading docks capable of 40,000 daily parcels.',
        image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Facility Area', value: '120,000 Sq. Ft.' },
          { label: 'Throughput', value: '40,000 Parcels/Day' },
          { label: 'Cold-Storage', value: '15,000 Cu. Ft.' },
        ],
      },
      {
        title: 'Best Express Micro-Hub Network',
        category: 'Last-Mile Infrastructure',
        status: 'Flagship',
        description:
          'Network of 64 district last-mile fulfillment hubs designed to bring dispatch centers within 30 minutes of any metropolitan resident.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Coverage', value: '64 Administrative Districts' },
          { label: 'Fleet Strength', value: '350+ Vans & EV Bikes' },
          { label: 'Delivery Time', value: '< 24 Hours Nationwide' },
        ],
      },
      {
        title: 'Next-Gen Omnichannel Retail Outlets',
        category: 'Experience Stores',
        status: 'Ongoing',
        description:
          'Interactive brick-and-mortar experiential storefronts where customers can preview premium electronics, pick up online orders, and access immediate warranty repairs.',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Outlets Live', value: '14 Flagships' },
          { label: 'Customer Rating', value: '4.9 / 5.0' },
          { label: 'Click & Collect', value: 'Zero Wait Time' },
        ],
      },
    ],
    certifications: [
      { name: 'ISO 9001:2015', issuer: 'International Organization for Standardization', badge: 'Certified Quality Management' },
      { name: 'e-CAB Member', issuer: 'E-Commerce Association of Bangladesh', badge: 'Corporate Charter No. 892' },
      { name: 'PCI-DSS Compliant', issuer: 'Payment Card Industry Security Council', badge: 'Tier-1 Transaction Security' },
    ],
    leadershipQuote: {
      quote:
        'Our investment in owned logistics and rigorous direct-sourcing guarantees that every consumer order bearing the BEST GROUP insignia arrives with unbroken trust, authenticated quality, and punctual execution.',
      author: 'M.A. Mizanur Rahman',
      designation: 'Chairman, BEST GROUP Conglomerate',
      avatar: '/images/chairman.jpg',
    },
    keyLocations: [
      { facility: 'Central Mega Fulfillment Hub', type: 'Warehousing & Sortation', address: 'Plot 42-45, Tejgaon Industrial Area, Dhaka-1208' },
      { facility: 'Corporate Retail Secretariat', type: 'Commercial Operations', address: '9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000' },
      { facility: 'Chittagong Port Distribution Node', type: 'Regional Logistics Hub', address: 'Agrabad Commercial Area, Chattogram-4100' },
    ],
    faqs: [
      {
        question: 'How does Best Product International guarantee 100% product authenticity?',
        answer:
          'We operate on a zero-intermediary direct procurement framework. All electronic appliances, personal care, and packaged consumer goods are sourced directly from registered brand manufacturers or authorized master importers under stringent quality inspection agreements.',
      },
      {
        question: 'What is the delivery coverage and timeline for metropolitan versus remote districts?',
        answer:
          'Within metropolitan Dhaka, Chattogram, and Sylhet, orders placed before 1:00 PM qualify for same-day delivery. For all other 61 districts, delivery is executed within 24 to 48 hours through our owned Best Express logistics fleet.',
      },
      {
        question: 'Can corporate and institutional clients open wholesale procurement accounts?',
        answer:
          'Yes. Our B2B Corporate Desk offers wholesale supply agreements, 30-day corporate credit terms, automated tax invoicing, and customized employee perk gift vouchers. Inquiries can be submitted via the RFP form on this page.',
      },
      {
        question: 'What is the return and replacement policy?',
        answer:
          'Customers enjoy a 7-day no-questions-asked replacement guarantee for defective or misdescribed items. Our courier will inspect and collect the item directly from your address at zero additional cost.',
      },
    ],
    contact: {
      desk: 'E-Commerce & Digital Retail Desk',
      phone: '+880 2 9568420',
      hotline: '01910-203058 / 01711-626577',
      email: 'ecommerce@bestgroupatoz.com',
      address: '9th Floor, DBBL Wohid Tower, Motijheel C/A, Dhaka-1000',
      hours: 'Customer Service: 24/7 Monitored | Corporate Desk: Sun-Thu 9:00 AM - 6:00 PM',
    },
  },

  {
    slug: 'best-south-city-ltd',
    aliases: ['real-estate', 'best-south-city', 'township'],
    wingNumber: '02',
    name: 'Best South City Ltd.',
    brandName: 'Best South City Ltd.',
    tagline: 'Master-Planned Smart Townships, Eco-Living Estates & High-Value Urban Communities',
    sector: 'Real Estate & Urban Infrastructure Development',
    badgeText: 'Flagship Real Estate & Township Wing',
    accentColor: 'from-amber-600 via-orange-500 to-amber-700',
    glowColor: 'rgba(217, 119, 6, 0.35)',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
    executiveSummary:
      'Best South City Ltd. is the premier urban development and master-planned community builder of the BEST GROUP conglomerate. Transforming the suburban landscape of greater Dhaka, Best South City designs self-contained residential ecosystems complete with subterranean utilities, wide multi-lane arterial boulevards, lakefront greenways, and comprehensive civic infrastructure.',
    strategicMission:
      'To provide families and visionary investors with impeccably documented, legally vetted, and ecologically balanced urban plots and residential sanctuaries where sustainable living meets modern civic excellence.',
    strategicVision:
      'To lead Bangladesh’s urban housing revolution by building climate-resilient, smart-metered satellite townships that redefine community dignity, environmental harmony, and generational capital appreciation.',
    stats: [
      { label: 'Planned Area', value: '500+ Acres', detail: 'Consolidated master-planned urban township footprint' },
      { label: 'Handover Plots', value: '3,200+', detail: 'Legally documented residential & commercial parcels' },
      { label: 'Title Clarity', value: '100% Freehold', detail: 'Zero encumbrance, verified CS/SA/RS/BS mutation' },
      { label: 'Open Green Space', value: '42%', detail: 'Lakes, parks, playgrounds, and tree-lined boulevards' },
    ],
    divisions: [
      {
        title: 'Master-Planned Residential Plots',
        description:
          'Precision-surveyed freehold residential plots ranging from 3 to 10 Kathas situated along wide 60ft to 120ft arterial roads with immediate subterranean power, gas, and water connections.',
        features: [
          'Demarcated boundary stones and GPS survey logs',
          'Underground storm-water and high-capacity sewage lines',
          'Immediate registration and mutation facilitation',
          'Flexible interest-free milestone installment schemes',
        ],
        icon: 'MapPin',
      },
      {
        title: 'Luxury Villa Enclaves & Gated Communities',
        description:
          'Exclusive architectural villa sanctuaries engineered for privacy, contemporary aesthetics, solar integration, and automated smart-home climate control nestled around natural freshwater lakes.',
        features: [
          'Pre-designed biophilic duplex and triplex architectural blueprints',
          'Private clubhouse, swimming lagoon, and sports complex',
          'Perimeter infrared motion sensors and 24/7 armed patrol',
          'Integrated rooftop solar and rainwater harvesting',
        ],
        icon: 'Home',
      },
      {
        title: 'Central Commercial Boulevard & Plazas',
        description:
          'Prime commercial frontage along the national highway nexus allocated for modern corporate towers, financial institutions, branded retail hubs, and medical diagnosis complexes.',
        features: [
          'Designated commercial zoning approved by urban authorities',
          'Multi-level structured parking infrastructure',
          'High-speed fiber-optic backbones connected to major telcos',
          'Dedicated civic utility substations',
        ],
        icon: 'Building',
      },
      {
        title: 'Institutional & Civic Infrastructure',
        description:
          'Integral community reservations including international curriculum English-medium schools, community healthcare clinics, central mosques, and public recreational botanical parks.',
        features: [
          '15-acre central community lake with walking jogging promenades',
          'Child daycare centers and senior recreation pavilions',
          'Dedicated emergency fire tender and medical ambulance depot',
          'Professional 24/7 township estate management board',
        ],
        icon: 'ShieldCheck',
      },
    ],
    projects: [
      {
        title: 'Best South City Phase 1: Lakefront Meadows',
        category: 'Satellite City Enclave',
        status: 'Completed',
        description:
          'Our signature 180-acre development featuring 1,400 demarcated plots, asphalt 80ft grand boulevard, underground electrification, and thriving residential handovers.',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Enclave Area', value: '180 Acres' },
          { label: 'Plot Units', value: '1,400 Plots' },
          { label: 'Occupancy', value: 'Over 850 Handed Over' },
        ],
      },
      {
        title: 'The Boulevard Commercial Hub',
        category: 'Mixed-Use Commercial Center',
        status: 'Ongoing',
        description:
          'High-density 12-story commercial district connecting the residential wings to the expressway, housing flagship retail outlets, bank branches, and medical facilities.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Frontage Road', value: '120 Ft Expressway' },
          { label: 'Commercial Space', value: '450,000 Sq. Ft.' },
          { label: 'Completion', value: 'Q4 2026' },
        ],
      },
      {
        title: 'Eco-Living Smart Villas (Sector 4)',
        category: 'Gated Luxury Residential',
        status: 'Flagship',
        description:
          'A boutique enclave of 120 zero-emission luxury villas surrounded by a 2.5 km natural canal, featuring smart-metered energy and smart-access security.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Villa Units', value: '120 Independent Homes' },
          { label: 'Architecture', value: 'Modern Contemporary' },
          { label: 'Energy Rating', value: 'Net-Zero Solar Ready' },
        ],
      },
    ],
    certifications: [
      { name: 'RAJUK & CDA Aligned', issuer: 'Capital Development Authority Framework', badge: 'Standard Layout Compliance' },
      { name: 'REHAB Active Member', issuer: 'Real Estate & Housing Association of Bangladesh', badge: 'Member Code: RE-1428' },
      { name: 'DoE Environmental Clearance', issuer: 'Department of Environment, Ministry of Environment', badge: 'EIA Approved' },
    ],
    leadershipQuote: {
      quote:
        'A land investment is an inheritance of security for generations. At Best South City, we ensure zero compromise on legal documentation, verified freehold titles, and world-class civic landscaping before a single plot is released.',
      author: 'M.A. Mizanur Rahman',
      designation: 'Chairman, BEST GROUP Conglomerate',
      avatar: '/images/chairman.jpg',
    },
    keyLocations: [
      { facility: 'Best South City Main Site Office', type: 'Site Headquarters & Customer Center', address: 'Plot 1, Block A, Central Boulevard, Greater Dhaka South' },
      { facility: 'Corporate Real Estate Secretariat', type: 'Central Documentation Desk', address: '9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000' },
      { facility: 'Customer Experience Pavilion', type: 'Model House & Architectural Center', address: 'Sector 3 Entrance, Best South City Highway Access' },
    ],
    faqs: [
      {
        question: 'Are all plots in Best South City free from legal encumbrance and mortgage?',
        answer:
          'Absolutely. Every parcel developed by Best South City is backed by 100% freehold ownership with clean CS, SA, RS, and BS mutation records. Clients receive certified title deed documentation and survey reports prior to executing agreements.',
      },
      {
        question: 'What civic utility connections are provided upon plot handover?',
        answer:
          'All sectors include underground high-voltage power distribution, state-of-the-art storm water and sewerage trunk lines, deep tube-well water supply, and pre-laid optical fiber conduit ready for broadband connection.',
      },
      {
        question: 'What installment plans and bank financing options are available?',
        answer:
          'We offer structured milestone installment plans up to 60 months with zero interest. Additionally, Best South City maintains pre-approved home loan arrangements with leading financial institutions and Islamic banks with expedited processing.',
      },
      {
        question: 'How do I schedule an on-site property inspection visit?',
        answer:
          'We provide complimentary air-conditioned shuttle transport from our Motijheel headquarters directly to the project site daily. You can book an inspection slot through the booking form on this page or by calling our hotlines.',
      },
    ],
    contact: {
      desk: 'Real Estate & Urban Land Desk',
      phone: '+880 2 9568421',
      hotline: '01910-203058 / 01711-626577',
      email: 'realestate@bestgroupatoz.com',
      address: '9th Floor, DBBL Wohid Tower, Motijheel C/A, Dhaka-1000',
      hours: 'Site Office: 9:00 AM - 6:00 PM (All 7 Days) | Corporate Desk: Sun-Thu 9:00 AM - 6:00 PM',
    },
  },

  {
    slug: 'best-commercial-builders-ltd',
    aliases: ['construction', 'best-commercial-builders', 'builders'],
    wingNumber: '03',
    name: 'Best Commercial & Builders Ltd.',
    brandName: 'Best Commercial & Builders Ltd.',
    tagline: 'Landmark Corporate Towers, Heavy Civil Engineering & Turnkey Infrastructure Solutions',
    sector: 'Commercial Construction & Civil Engineering',
    badgeText: 'Flagship Construction & Engineering Wing',
    accentColor: 'from-amber-500 via-yellow-600 to-amber-700',
    glowColor: 'rgba(234, 179, 8, 0.35)',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?q=80&w=1000&auto=format&fit=crop',
    executiveSummary:
      'Best Commercial & Builders Ltd. is the engineering and heavy civil infrastructure arm of the BEST GROUP conglomerate. Specializing in high-rise corporate skyscrapers, deep foundation piling, industrial steel-frame complexes, and high-specification institutional headquarters, the company combines advanced geotechnical design with European construction technology to deliver earthquake-resilient landmarks.',
    strategicMission:
      'To architect, engineer, and build commercial infrastructure of international stature, adhering strictly to global building codes, structural resilience standards, and green building efficiency.',
    strategicVision:
      'To become South Asia’s benchmark engineering contractor for high-complexity civil infrastructure, recognized for zero-defect execution, life-safety excellence, and architectural innovation.',
    stats: [
      { label: 'Built Footprint', value: '2.8M+ Sq. Ft.', detail: 'Constructed corporate, commercial & civic space' },
      { label: 'Completed Towers', value: '18+ Landmarks', detail: 'High-rise grade-A commercial and financial centers' },
      { label: 'Seismic Standards', value: 'Zone 3 / BNBC', detail: 'Engineered for 7.5+ magnitude seismic resilience' },
      { label: 'Safety Record', value: 'Zero Fatalities', detail: 'Strict ISO 45001 occupational safety compliance' },
    ],
    divisions: [
      {
        title: 'High-Rise Commercial Towers & Headquarters',
        description:
          'Full-cycle engineering, procurement, and construction (EPC) for multi-story corporate towers, banking headquarters, and multi-tenant commercial centers built with grade 72.5 reinforced steel and C40/50 ready-mix concrete.',
        features: [
          'Pre-stressed post-tensioned slab technology',
          'Curtain-wall unitized double-glazed facade engineering',
          'Intelligent Building Management Systems (BMS)',
          'High-speed destination-dispatch elevator shafts',
        ],
        icon: 'Building2',
      },
      {
        title: 'Deep Foundation, Piling & Shoring Engineering',
        description:
          'Specialized geotechnical division operating hydraulic rotary piling rigs capable of cast-in-situ bored piles up to 1,200mm diameter and 45m depth, coupled with secant pile shoring for multi-level basements.',
        features: [
          'Sonic logging and cross-hole ultrasonic pile testing',
          'Deep diaphragm wall and sheet-pile shoring',
          'Automated dewatering and soil stabilization systems',
          'Vibration-controlled pile driving protocols',
        ],
        icon: 'Wrench',
      },
      {
        title: 'Heavy Industrial Steel Structures & Warehouses',
        description:
          'Fabrication and field erection of pre-engineered steel buildings (PEB) for automated logistics terminals, manufacturing plants, and long-span sports arenas with built-in overhead crane gantries.',
        features: [
          'CNC cut and submerged-arc welded steel portal frames',
          'Corrosion-resistant epoxy and fire-retardant coatings',
          'Clear spans exceeding 60 meters without internal columns',
          'Integrated skylight and passive thermal ventilation systems',
        ],
        icon: 'Layers',
      },
      {
        title: 'MEP, HVAC & Fire-Life Safety Contracting',
        description:
          'Turnkey mechanical, electrical, plumbing, and NFPA-compliant fire suppression installations designed for continuous 24/7 mission-critical operational stability.',
        features: [
          'Automated sprinkler systems, fire pumps, and smoke curtains',
          'Centralized chilled water HVAC with variable air volume (VAV)',
          'Substation transformer installation and dual redundant generators',
          'Clean-agent gas suppression for data centers and server rooms',
        ],
        icon: 'ShieldCheck',
      },
    ],
    projects: [
      {
        title: 'Best Corporate Financial Plaza',
        category: '24-Story Commercial Tower',
        status: 'Completed',
        description:
          'Iconic 24-story glass-and-steel financial headquarters featuring 3 basement parking levels, double-height executive atrium, and LEED Gold certified energy-saving envelope.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Floors', value: '24 Stories + 3 Basements' },
          { label: 'Built Area', value: '380,000 Sq. Ft.' },
          { label: 'Certification', value: 'LEED Gold Certified' },
        ],
      },
      {
        title: 'Tejgaon Industrial Logistics Terminal',
        category: 'Heavy PEB Steel Structure',
        status: 'Completed',
        description:
          'State-of-the-art 120,000 sq. ft. clear-span pre-engineered steel distribution hub with 12m clear height, heavy-duty floor hardeners, and automated bay doors.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Clear Span', value: '60 Meters' },
          { label: 'Floor Load', value: '8 Tons / Sq. M.' },
          { label: 'Steel Weight', value: '850 Metric Tons' },
        ],
      },
      {
        title: 'South City Central Commercial Complex',
        category: 'Mixed-Use Retail & Office Tower',
        status: 'Ongoing',
        description:
          '16-story commercial hub anchored by banking halls, conference auditorium, executive suites, and subterranean parking servicing the Best South City township.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Floors', value: '16 Stories' },
          { label: 'Foundation', value: 'Rotary Cast Piles 38m' },
          { label: 'Handover Target', value: 'Mid 2027' },
        ],
      },
    ],
    certifications: [
      { name: 'ISO 9001:2015 & ISO 45001', issuer: 'Quality & Occupational Health & Safety', badge: 'Audited EPC Contractor' },
      { name: 'BNBC & ACI 318 Aligned', issuer: 'National Building Code Structural Standards', badge: 'Seismic Zone 3 Ready' },
      { name: 'USGBC Member', issuer: 'U.S. Green Building Council', badge: 'LEED Construction Practices' },
    ],
    leadershipQuote: {
      quote:
        'A building is only as enduring as the integrity poured into its foundation. We apply rigorous laboratory testing to every rebar batch and ready-mix load to ensure our skylines withstand generations.',
      author: 'M.A. Mizanur Rahman',
      designation: 'Chairman, BEST GROUP Conglomerate',
      avatar: '/images/chairman.jpg',
    },
    keyLocations: [
      { facility: 'Engineering & EPC Headquarters', type: 'Central Engineering Secretariat', address: '9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000' },
      { facility: 'Heavy Equipment & Concrete Batching Yard', type: 'Industrial Plant', address: 'Demra Highway Road, Narayanganj-1420' },
      { facility: 'Pre-Cast & Steel Fabrication Works', type: 'PEB Manufacturing Yard', address: 'Tongi Industrial Zone, Gazipur-1710' },
    ],
    faqs: [
      {
        question: 'Does Best Commercial & Builders execute third-party EPC turnkey projects?',
        answer:
          'Yes. While we build internal landmark assets for the BEST GROUP conglomerate, our civil engineering division actively tenders and executes large-scale commercial, institutional, and industrial contracts for multinational corporations and commercial developers.',
      },
      {
        question: 'What quality testing protocols are implemented during construction?',
        answer:
          'Every concrete batch undergoes slump and 7/28-day cylinder compressive strength tests at accredited testing laboratories. Rebar is independently tested for tensile yield strength, and steel welds undergo non-destructive ultrasonic testing.',
      },
      {
        question: 'How do you address seismic resilience and fire-life safety?',
        answer:
          'Our structural designs incorporate shear-wall core topologies adhering to Bangladesh National Building Code (BNBC) seismic criteria. Fire protection follows NFPA standards including dual fire-stairs, pressurized lobbies, and 2-hour fire-rated doors.',
      },
      {
        question: 'How can developers submit an RFP or tender invitation?',
        answer:
          'Project drawings, bills of quantities (BOQ), and tender specifications can be submitted directly via the RFP form on this page or sent to tender@bestgroupatoz.com. Our chief estimator will respond within 48 hours.',
      },
    ],
    contact: {
      desk: 'Construction & Civil Engineering Desk',
      phone: '+880 2 9568422',
      hotline: '01910-203058 / 01711-626577',
      email: 'construction@bestgroupatoz.com',
      address: '9th Floor, DBBL Wohid Tower, Motijheel C/A, Dhaka-1000',
      hours: 'Engineering Desk: Sun-Thu 9:00 AM - 6:00 PM | Site Operations: 24/7 Monitored Shifts',
    },
  },

  {
    slug: 'best-model-pharmacy-ltd',
    aliases: ['pharmacy', 'best-model-pharmacy', 'healthcare'],
    wingNumber: '04',
    name: 'Best Model Pharmacy Ltd.',
    brandName: 'Best Model Pharmacy Ltd.',
    tagline: 'Standardized Model Pharmacies, Unbroken Cold-Chain Medicine & 24/7 Clinical Advisory',
    sector: 'Healthcare, Clinical Pharmacy & Pharmaceutical Distribution',
    badgeText: 'Flagship Healthcare & Pharmacy Wing',
    accentColor: 'from-emerald-500 via-teal-600 to-emerald-700',
    glowColor: 'rgba(16, 185, 129, 0.35)',
    heroImage: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1000&auto=format&fit=crop',
    executiveSummary:
      'Best Model Pharmacy Ltd. is the healthcare and standardized pharmaceutical retail wing of the BEST GROUP conglomerate. Built in strict conformity with the Directorate General of Drug Administration (DGDA) National Model Pharmacy Guidelines, the chain delivers 100% authentic, temperature-controlled medicines, biological vaccines, and hospital supplies backed by licensed graduate pharmacists at every retail counter.',
    strategicMission:
      'To safeguard public health across Bangladesh by ensuring every consumer receives genuine, accurately stored, and ethically dispensed medications guided by professional clinical counseling.',
    strategicVision:
      'To build South Asia’s most trusted healthcare retail network, pioneering automated cold-chain verification, digital prescription archiving, and 24/7 emergency medicine fulfillment to every doorstep.',
    stats: [
      { label: 'Outlets Live', value: '150+ Pharmacies', detail: 'Licensed DGDA Grade-A model pharmacies nationwide' },
      { label: 'Cold-Chain Integrity', value: '100% Monitored', detail: 'Unbroken 2°C - 8°C IoT temperature monitoring' },
      { label: 'Daily Prescriptions', value: '25,000+', detail: 'Verified and dispensed under graduate pharmacist audit' },
      { label: 'Emergency Hotlines', value: '24/7 Active', detail: 'Round-the-clock licensed pharmacist clinical advisory' },
    ],
    divisions: [
      {
        title: 'DGDA Certified Model Pharmacy Outlets',
        description:
          'Flagship air-conditioned clinical retail dispensaries equipped with digital point-of-sale verification, certified refrigeration, and private pharmacist consultation booths.',
        features: [
          'Mandatory registered B.Pharm / M.Pharm on-duty at all operational hours',
          'Direct electronic batch verification with pharmaceutical manufacturers',
          'Free patient blood pressure, glucose, and vitals screening',
          'Computerized drug interaction and dosage double-check protocol',
        ],
        icon: 'Cross',
      },
      {
        title: 'IoT Monitored Cold-Chain Biologics Hub',
        description:
          'Specialized storage and transit facilities for insulin, vaccines, oncology injectables, and monoclonal antibodies maintained continuously at 2°C to 8°C with dual generator backups.',
        features: [
          'Digital continuous data-logger logging temperature every 60 seconds',
          'Automated SMS emergency alerts to duty engineers on temperature spikes',
          'Custom vacuum-insulated thermal transit boxes with PCM gel packs',
          'Batch certificate validation provided to patients with purchase',
        ],
        icon: 'HeartPulse',
      },
      {
        title: '24/7 Emergency Medicine Doorstep Delivery',
        description:
          'Rapid response urban delivery dispatching critical medications directly to homes, hospitals, and ICUs within 60 minutes of digital prescription upload.',
        features: [
          'Digital prescription verification via mobile app or WhatsApp',
          'Temperature-protected courier carrier packs',
          'Tamper-evident sealed packaging for patient safety',
          'Real-time rider tracking with delivery confirmation code',
        ],
        icon: 'Truck',
      },
      {
        title: 'Institutional & Hospital Bulk Supply',
        description:
          'Contractual supply division catering to tertiary hospitals, private clinics, corporate first-aid centers, and international NGO health programs with bulk manufacturer pricing.',
        features: [
          'Comprehensive hospital formulary fulfillment agreements',
          'Automated monthly inventory replenishment models',
          'Regulatory compliance documentation and CoA supply',
          'Dedicated cold-truck dispatch direct from central warehouse',
        ],
        icon: 'ShieldCheck',
      },
    ],
    projects: [
      {
        title: 'Central Pharmaceutical Cold-Storage Depot',
        category: 'Pharmaceutical Distribution Center',
        status: 'Completed',
        description:
          '25,000 sq. ft. central pharmaceutical depot featuring medical-grade air-filtration, humidity-controlled shelving, and a 5,000 cu. ft. cold room with triple redundant cooling.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Cold Storage Capacity', value: '5,000 Cu. Ft.' },
          { label: 'Temperature Range', value: '2°C to 8°C Monitored' },
          { label: 'Power Backup', value: 'Dual 250kVA Generators' },
        ],
      },
      {
        title: 'National 150-Outlet Expansion Initiative',
        category: 'Retail Network Rollout',
        status: 'Flagship',
        description:
          'Deployment of standardized Model Pharmacies adjacent to major medical college hospitals and dense suburban commercial centers across all 8 administrative divisions.',
        image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Active Outlets', value: '150+ Outlets' },
          { label: 'Divisions Covered', value: '8 Administrative Divisions' },
          { label: 'Pharmacist Team', value: '320+ Graduate Pharmacists' },
        ],
      },
      {
        title: 'Digital Health & Tele-Prescription Platform',
        category: 'Healthcare Technology',
        status: 'Ongoing',
        description:
          'Unified digital portal allowing patients to securely archive prescriptions, set automated refill reminders, and consult licensed clinical pharmacists 24/7.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Digital Users', value: '180,000+ App Users' },
          { label: 'Average Response', value: '< 90 Seconds' },
          { label: 'Security', value: 'HIPAA & GDPR Aligned' },
        ],
      },
    ],
    certifications: [
      { name: 'DGDA Model Pharmacy License', issuer: 'Directorate General of Drug Administration', badge: 'National Model Pharmacy Grade' },
      { name: 'ISO 9001:2015 Healthcare Standard', issuer: 'International Standards Organization', badge: 'Certified Dispensary Process' },
      { name: 'Pharmacy Council Accredited', issuer: 'Pharmacy Council of Bangladesh', badge: 'A-Grade Registered Pharmacists' },
    ],
    leadershipQuote: {
      quote:
        'In healthcare, authenticity is not an option—it is a matter of life. Best Model Pharmacy eliminates counterfeit medicine risk through manufacturer-direct cold-chains and qualified graduate pharmacists at every interaction.',
      author: 'M.A. Mizanur Rahman',
      designation: 'Chairman, BEST GROUP Conglomerate',
      avatar: '/images/chairman.jpg',
    },
    keyLocations: [
      { facility: 'Central Medicine Logistics Depot', type: 'Pharmaceutical Warehouse', address: 'Plot 18, Tejgaon Industrial Area, Dhaka-1208' },
      { facility: 'Corporate Healthcare Secretariat', type: 'Clinical Management Desk', address: '9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000' },
      { facility: 'Dhaka Medical Flagship 24/7', type: '24-Hour Model Pharmacy', address: 'Secretariat Road, Opposite DMCH, Dhaka-1000' },
    ],
    faqs: [
      {
        question: 'Are all medications sold guaranteed to be authentic and genuine?',
        answer:
          'Yes, without exception. We enforce a zero-gray-market procurement rule. Every single blister pack, vial, and syrup is procured directly from the licensed pharmaceutical manufacturing company with verifiable batch lot numbers and expiration tracking.',
      },
      {
        question: 'How do you preserve heat-sensitive biologicals and insulin during home delivery?',
        answer:
          'Insulin, vaccines, and eye drops are transported inside custom-engineered insulated thermal containers with pre-calibrated phase-change cooling packs. The courier presents a digital temperature readout to the customer upon delivery.',
      },
      {
        question: 'Is a graduate pharmacist always present at the counter?',
        answer:
          'In full accordance with DGDA Model Pharmacy standards, every operational shift is supervised by a registered A-Grade graduate pharmacist who reviews every prescription for drug interactions, dosage validity, and patient instructions.',
      },
      {
        question: 'Can corporate bodies partner for employee healthcare and medicine allowances?',
        answer:
          'Yes. We offer Corporate Health Cards that provide registered employees and their families with cashless medicine access, doorstep delivery, and discounted corporate billing. Inquiries can be submitted via the contact form on this page.',
      },
    ],
    contact: {
      desk: 'Healthcare & Clinical Pharmacy Desk',
      phone: '+880 2 9568423',
      hotline: '01910-203058 / 01711-626577',
      email: 'pharmacy@bestgroupatoz.com',
      address: '9th Floor, DBBL Wohid Tower, Motijheel C/A, Dhaka-1000',
      hours: 'Retail Outlets: 24/7 Operational | Corporate Desk: Sun-Thu 9:00 AM - 6:00 PM',
    },
  },

  {
    slug: 'best-international-overseas',
    aliases: ['travel', 'best-international-overseas', 'aviation', 'overseas'],
    wingNumber: '05',
    name: 'Best International Overseas',
    brandName: 'Best International Overseas',
    tagline: 'Global Aviation, Corporate Travel Management, Hajj/Umrah Pilgrimage & Overseas Mobility',
    sector: 'Aviation, Tourism & Global Human Capital Mobility',
    badgeText: 'Flagship Travel, Aviation & Overseas Wing',
    accentColor: 'from-rose-500 via-rose-600 to-amber-600',
    glowColor: 'rgba(244, 63, 94, 0.35)',
    heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop',
    executiveSummary:
      'Best International Overseas is the international aviation, corporate travel management, and global workforce mobility wing of the BEST GROUP conglomerate. Accredited by the International Air Transport Association (IATA) and licensed by civil aviation and expatriate welfare ministries, the enterprise provides end-to-end ticketing, corporate delegation itineraries, spiritual pilgrimage facilitation, and skilled human capital deployment across the Middle East, Southeast Asia, and Europe.',
    strategicMission:
      'To deliver world-class travel, aviation, and overseas employment services grounded in ethical compliance, passenger comfort, personalized concierge care, and bilateral governmental trust.',
    strategicVision:
      'To be recognized as Bangladesh’s foremost global mobility partner, bridging citizens and enterprises to international opportunities with uncompromising transparency, safety, and VIP excellence.',
    stats: [
      { label: 'Global Travelers', value: '85,000+', detail: 'Passengers ticketed & managed across worldwide routes' },
      { label: 'Airline Partners', value: '120+ Carriers', detail: 'Direct GDS ticketing with full IATA accreditation' },
      { label: 'Destination Hubs', value: '40+ Countries', detail: 'Global partner network for hotel, visa & logistics' },
      { label: 'Govt. License', value: 'RL-Approved', detail: 'Ministry of Expatriates Welfare certified recruiting' },
    ],
    divisions: [
      {
        title: 'IATA Accredited Air Ticketing & GDS Matrix',
        description:
          'Direct live access to Sabre, Amadeus, and Galileo global distribution systems, issuing commercial and corporate air tickets with preferred corporate seat allocations and fare privileges.',
        features: [
          'Instant 24/7 ticket issuance and re-issue rebooking',
          'Special negotiated corporate and marine fare contracts',
          'Private group charter aircraft coordination',
          'Baggage allowance enhancement and airport lounge passes',
        ],
        icon: 'Plane',
      },
      {
        title: 'Executive Corporate Travel & Delegation Concierge',
        description:
          'Comprehensive travel management services for multinational corporations, business delegations, and government summits covering 5-star accommodations, visa logistics, and VIP ground transfers.',
        features: [
          'Dedicated corporate key account manager 24/7',
          'Comprehensive visa documentation and embassy escort services',
          'Chauffeured luxury executive vehicle fleets in major global cities',
          'Consolidated monthly corporate billing and MIS spend reports',
        ],
        icon: 'Briefcase',
      },
      {
        title: 'Hajj & Umrah Premium Pilgrimage Services',
        description:
          'Ministry-approved spiritual pilgrimage itineraries tailored for families and executives, providing 5-star hotel accommodations facing the Holy Kaaba, private air-conditioned VIP coaches, and experienced scholarly guidance.',
        features: [
          'Exclusive 5-star Makkah and Madinah clock-tower hotel allotments',
          'Dedicated Islamic scholar and multilingual guide per group',
          'Private luxury VIP bus and bullet-train transfer arrangements',
          'Full-cycle visa, biometrics, and Saudi ministry portal processing',
        ],
        icon: 'Compass',
      },
      {
        title: 'Skilled Overseas Human Capital Mobility',
        description:
          'Government-licensed international recruiting enterprise training, evaluating, and deploying certified technical, construction, and hospitality professionals to partner employers overseas.',
        features: [
          'Ministry of Expatriates’ Welfare authorized Recruitment License',
          'Technical skills assessment and pre-departure orientation center',
          'Biometric medical check-ups and embassy document attestation',
          'Ethical zero-exploitation recruitment compliance standards',
        ],
        icon: 'Users',
      },
    ],
    projects: [
      {
        title: 'Annual Executive Hajj Delegation Program',
        category: 'Spiritual VIP Pilgrimage',
        status: 'Flagship',
        description:
          'Comprehensive 5-star pilgrimage delegation accommodating 450 pilgrims annually with direct flight bookings, Swissotel/Fairmont Makkah suites, and personalized medical escorts.',
        image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Pilgrims Served', value: '450+ Annually' },
          { label: 'Hotel Category', value: '5-Star Haram Front' },
          { label: 'Satisfaction Rate', value: '99.4%' },
        ],
      },
      {
        title: 'Corporate Travel Retainers (MNCs & Banks)',
        category: 'Enterprise Travel Management',
        status: 'Completed',
        description:
          'Exclusive corporate travel management contract servicing over 35 major corporate institutions with instant booking desks and centralized billing management.',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Corporate Clients', value: '35+ Institutions' },
          { label: 'Annual Flights Booked', value: '28,000+ Sectors' },
          { label: 'Emergency Support', value: '24/7 Monitored' },
        ],
      },
      {
        title: 'Middle East Technical Manpower Deployment',
        category: 'Global Human Capital',
        status: 'Ongoing',
        description:
          'Deployment of 2,400 skilled electromechanical engineers, heavy machine operators, and certified welders to infrastructure projects in Saudi Arabia and the UAE.',
        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Personnel Placed', value: '2,400+ Technicians' },
          { label: 'Certification', value: 'BMET & Bureau Certified' },
          { label: 'Employer Retention', value: '96.8%' },
        ],
      },
    ],
    certifications: [
      { name: 'IATA Accredited Agent', issuer: 'International Air Transport Association', badge: 'Numeric Code: 42-3-9821' },
      { name: 'Ministry Approved Hajj Agency', issuer: 'Ministry of Religious Affairs, Bangladesh', badge: 'License No. 0482' },
      { name: 'BMET Recruiting License (RL)', issuer: 'Bureau of Manpower, Employment and Training', badge: 'Approved Overseas Agency' },
    ],
    leadershipQuote: {
      quote:
        'Whether arranging an urgent diplomatic flight or deploying hundreds of skilled professionals abroad, our mandate is absolute reliability, passenger safety, and international ethical excellence.',
      author: 'M.A. Mizanur Rahman',
      designation: 'Chairman, BEST GROUP Conglomerate',
      avatar: '/images/chairman.jpg',
    },
    keyLocations: [
      { facility: 'Corporate Aviation & Ticketing Secretariat', type: 'Central Travel Desk', address: '9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000' },
      { facility: 'Overseas Human Resources & Training Center', type: 'Skills Evaluation Center', address: 'Plot 55, Airport Road, Uttara, Dhaka-1230' },
      { facility: 'Chittagong Regional Travel Office', type: 'Aviation Branch', address: 'GEC Circle, Central Commercial Hub, Chattogram-4000' },
    ],
    faqs: [
      {
        question: 'Can corporate clients book complex multi-city international flights on credit?',
        answer:
          'Yes. We establish Corporate Travel Accounts with monthly credit billing, dedicated account managers, zero cancellation penalty privileges on corporate fares, and automated travel expense reconciliation.',
      },
      {
        question: 'What is included in the VIP Hajj and Umrah packages?',
        answer:
          'Our VIP spiritual packages include direct round-trip airline tickets, 5-star hotel accommodations in the immediate vicinity of the Haram in Makkah and Madinah, buffet dining, dedicated religious guides, private ground transit, and Saudi visa processing.',
      },
      {
        question: 'What visas and consular processing services are handled by the travel wing?',
        answer:
          'We manage tourist, business, medical, and transit visa applications for over 40 countries including the Schengen zone, United Kingdom, USA, Canada, Japan, UAE, Singapore, and Thailand.',
      },
      {
        question: 'How are overseas candidates screened and certified prior to deployment?',
        answer:
          'All overseas candidates pass through practical technical aptitude testing at our accredited training centers, undergo GAMCA-approved biometric medical testing, and receive thorough pre-departure cultural orientation.',
      },
    ],
    contact: {
      desk: 'Aviation, Travel & Overseas Desk',
      phone: '+880 2 9568424',
      hotline: '01910-203058 / 01711-626577',
      email: 'travel@bestgroupatoz.com',
      address: '9th Floor, DBBL Wohid Tower, Motijheel C/A, Dhaka-1000',
      hours: 'Aviation Ticketing: 24/7 Emergency Dispatch | Corporate Office: Sun-Thu 9:00 AM - 6:00 PM',
    },
  },

  {
    slug: 'best-group-holding',
    aliases: ['holding', 'best-group', 'corporate'],
    wingNumber: '06',
    name: 'Best Group (Holding)',
    brandName: 'Best Group (Holding)',
    tagline: 'Apex Corporate Governance, Strategic Capital Allocation & Institutional Cross-Wing Synergies',
    sector: 'Conglomerate Governance, Strategic Investment & Private Equity',
    badgeText: 'Central Corporate Holding Entity',
    accentColor: 'from-amber-400 via-amber-500 to-yellow-600',
    glowColor: 'rgba(245, 158, 11, 0.35)',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    executiveSummary:
      'Best Group (Holding) is the apex corporate governing entity orchestrating the strategic direction, capital allocation, risk governance, and digital transformation for all six operating subsidiaries of BEST GROUP. Operating from the corporate executive floor of DBBL Wohid Tower in Motijheel, the Holding entity ensures financial discipline, ethical compliance, unified branding, and long-term shareholder value creation.',
    strategicMission:
      'To provide visionary leadership, institutional fiscal oversight, and cross-functional synergy that empowers each subsidiary to dominate its respective sector while adhering to the highest standards of corporate governance.',
    strategicVision:
      'To build a multi-generational, diversified corporate conglomerate that contributes significantly to the economic advancement of Bangladesh through innovation, sustainable employment, and global standards of operational excellence.',
    stats: [
      { label: 'Operating Wings', value: '6 Subsidiaries', detail: 'E-Commerce, Real Estate, Construction, Healthcare, Travel, Capital' },
      { label: 'Workforce', value: '2,500+ Staff', detail: 'Direct engineers, executives, pharmacists, and operations staff' },
      { label: 'Legacy & Growth', value: '25+ Years', detail: 'Continuous institutional expansion and financial stability' },
      { label: 'Governance Standard', value: 'ISO 9001:2015', detail: 'Centralized board compliance and audited fiscal reporting' },
    ],
    divisions: [
      {
        title: 'Strategic Capital Allocation & Private Equity',
        description:
          'Managing institutional liquidity, long-term asset allocation, capital expenditure approvals, and high-growth joint ventures across burgeoning infrastructure and consumer sectors.',
        features: [
          'Disciplined internal rate of return (IRR) hurdle-rate evaluations',
          'Consolidated balance sheet risk mitigation and treasury management',
          'Syndicated debt structuring and institutional bank consortium alliances',
          'Mergers, acquisitions, and strategic sector expansion planning',
        ],
        icon: 'PieChart',
      },
      {
        title: 'Central Corporate Secretariat & Legal Compliance',
        description:
          'Overseeing corporate statutory filings, registrar of joint stock companies (RJSC) compliance, board secretarial resolutions, intellectual property, and institutional ethics.',
        features: [
          'Full compliance with Bangladesh Bank, BSEC, and RJSC guidelines',
          'Centralized corporate legal and dispute resolution council',
          'Unified trademark, brand equity, and patent governance',
          'Annual independent external financial audits by tier-1 audit firms',
        ],
        icon: 'ShieldCheck',
      },
      {
        title: 'Enterprise ERP & Digital Transformation Backbone',
        description:
          'Centralized technological infrastructure maintaining the enterprise ERP backbone connecting supply chains, point-of-sale systems, human resources, and real-time executive analytics.',
        features: [
          'Consolidated enterprise cloud architecture with disaster recovery',
          'Automated real-time financial reporting dashboards for the Board',
          'Unified employee lifecycle and talent development programs',
          'Cybersecurity defense operations center and data privacy governance',
        ],
        icon: 'Layers',
      },
      {
        title: 'Institutional Investor Relations & Public Liaison',
        description:
          'Dedicated communication desk facilitating engagement with commercial banks, development finance institutions, international partners, and government regulatory ministries.',
        features: [
          'Periodic financial bulletin and executive performance disclosures',
          'Bilateral delegation hosting and foreign direct investment (FDI) liaison',
          'Environmental, Social, and Governance (ESG) corporate sustainability reports',
          'Structured media releases and verified public corporate disclosures',
        ],
        icon: 'Users',
      },
    ],
    projects: [
      {
        title: 'Integrated Enterprise ERP Digital Transformation',
        category: 'Corporate Infrastructure',
        status: 'Completed',
        description:
          'Deployment of a unified enterprise resource planning platform connecting financial accounting, warehouse inventories, and project milestones across all 6 business wings.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Wings Connected', value: 'All 6 Operating Wings' },
          { label: 'Transaction Speed', value: 'Real-Time Financial Close' },
          { label: 'Security Standard', value: 'SOC-2 & ISO 27001' },
        ],
      },
      {
        title: 'Motijheel Corporate Headquarters Expansion',
        category: 'Corporate Real Estate',
        status: 'Completed',
        description:
          'Modernized 15,000 sq. ft. central executive command floor at DBBL Wohid Tower featuring teleconference boardrooms, VIP executive suites, and secure data room.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Headquarters Floor', value: '9th Floor, DBBL Wohid Tower' },
          { label: 'Facilities', value: 'Boardroom, VIP Lounge, Audit Suite' },
          { label: 'Capacity', value: 'Executive Board & Central Directors' },
        ],
      },
      {
        title: 'BEST GROUP 2030 Sustainable Growth Strategy',
        category: 'Strategic Initiative',
        status: 'Flagship',
        description:
          'Institutional 5-year capital roadmap targeting renewable energy investments, eco-township completions, and digital commerce logistics expansion.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
        specs: [
          { label: 'Target Horizon', value: '2026 - 2030' },
          { label: 'Job Creation', value: '5,000+ Direct Positions' },
          { label: 'Capital Commitment', value: 'Multi-Billion BDT Pipeline' },
        ],
      },
    ],
    certifications: [
      { name: 'ISO 9001:2015 Central Secretariat', issuer: 'International Standards Organization', badge: 'Corporate Governance Certified' },
      { name: 'RJSC Registered Conglomerate', issuer: 'Registrar of Joint Stock Companies & Firms', badge: 'Certified Corporate Entity' },
      { name: 'National Chamber of Commerce Member', issuer: 'FBCCI / DCCI Corporate Member', badge: 'Apex Trade Association' },
    ],
    leadershipQuote: {
      quote:
        'A diversified conglomerate thrives when united by uncompromising core principles: transparency in governance, fidelity to our commitments, and a relentless pursuit of excellence in every endeavor.',
      author: 'M.A. Mizanur Rahman',
      designation: 'Chairman, BEST GROUP Conglomerate',
      avatar: '/images/chairman.jpg',
    },
    keyLocations: [
      { facility: 'BEST GROUP Central Corporate Headquarters', type: 'Executive Board Secretariat', address: '9th Floor, DBBL Wohid Tower, Motijheel C/A, Dhaka-1000' },
      { facility: 'Audit & Fiscal Operations Annex', type: 'Finance & Compliance Center', address: '8th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000' },
      { facility: 'Central Legal & Governance Archive', type: 'Statutory Documentation Center', address: 'Corporate Suite 902, Motijheel, Dhaka-1000' },
    ],
    faqs: [
      {
        question: 'What is the role of Best Group (Holding) relative to the 5 operating subsidiaries?',
        answer:
          'Best Group (Holding) acts as the strategic apex entity. While each operating subsidiary possesses its own specialized management team and operational autonomy, the Holding company coordinates strategic capital investment, treasury risk, statutory compliance, brand standards, and board governance.',
      },
      {
        question: 'How does BEST GROUP evaluate new investment opportunities and joint ventures?',
        answer:
          'Investment proposals undergo rigorous screening by our Central Investment Committee. We prioritize projects that demonstrate long-term national economic value, strong risk-adjusted returns, clear regulatory alignment, and technological synergy with our existing wings.',
      },
      {
        question: 'How can financial institutions and commercial banks contact the central treasury desk?',
        answer:
          'Commercial banks, syndication desks, and institutional investors may reach our central treasury and finance division directly at treasury@bestgroupatoz.com or through the corporate desk form on this page.',
      },
      {
        question: 'Where is the corporate headquarters located for official correspondence?',
        answer:
          'All official correspondence, legal notices, and board communications must be addressed to: The Board Secretariat, BEST GROUP Holdings Ltd., 9th Floor, DBBL Wohid Tower, Motijheel C/A, Dhaka-1000, Bangladesh.',
      },
    ],
    contact: {
      desk: 'Central Corporate Secretariat & Board Desk',
      phone: '+880 2 9568425',
      hotline: '01910-203058 / 01711-626577',
      email: 'corporate@bestgroupatoz.com',
      address: '9th Floor, DBBL Wohid Tower, Motijheel C/A, Dhaka-1000',
      hours: 'Corporate Secretariat: Sun-Thu 9:00 AM - 6:00 PM | Monitored Registry',
    },
  },
];

/**
 * Helper to find wing by primary slug or any alias
 */
export function getWingBySlug(slug: string): WingDetail | undefined {
  const normalized = slug.toLowerCase().trim();
  return WINGS_DATA.find(
    (w) => w.slug === normalized || w.aliases.includes(normalized)
  );
}

/**
 * Helper to get all wings list for cards/navigation
 */
export function getAllWings(): WingDetail[] {
  return WINGS_DATA;
}
