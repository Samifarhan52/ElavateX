/**
 * ELAVATEX DESIGN STYLES SHOWCASE ENGINE (18 Philosophies x 14 Industry Verticals)
 * Powers real-time style morphing, live interactive demos, industry customization, and style matchmaker.
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. COMPREHENSIVE 18 DESIGN STYLES DIRECTORY
    const STYLES_DATABASE = [
        {
            id: 'glassmorphism',
            name: 'Glassmorphism',
            themeClass: 'theme-glassmorphism',
            number: '01',
            badge: 'FROSTED DEPTH',
            icon: '🧊',
            category: 'Modern Tech',
            bestFor: 'Dental, SaaS, Fintech, Clinics, Luxury Tech',
            conversionRate: '98%',
            complexity: 'Moderate',
            philosophy: 'Uses multi-layered frosted glass surfaces, backdrop-filter blurring, subtle chromatic borders, and floating z-depth to create an ethereal, futuristic, clean spatial hierarchy.',
            cssBlueprint: `background: rgba(255, 255, 255, 0.08);\nbackdrop-filter: blur(24px);\n-webkit-backdrop-filter: blur(24px);\nborder: 1px solid rgba(255, 255, 255, 0.18);\nbox-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);\nborder-radius: 20px;`,
            headline: 'Crystalline Precision for Modern Healthcare & High-Tech Platforms.',
            desc: 'Multi-layer translucent glass creates profound visual depth without cluttering user focus, delivering a sensation of clinical purity and cutting-edge software excellence.'
        },
        {
            id: 'bento',
            name: 'Bento Grid UI',
            themeClass: 'theme-bento',
            number: '02',
            badge: 'MODULAR SYNERGY',
            icon: '🍱',
            category: 'Modern Tech',
            bestFor: 'AI Automation, Startups, SaaS, Hardware, Portfolios',
            conversionRate: '99%',
            complexity: 'High Utility',
            philosophy: 'Inspired by Japanese Bento boxes and championed by Apple and Linear. Compartmentalizes heterogeneous data, micro-interactions, and live telemetry into a harmonious, modular visual grid.',
            cssBlueprint: `display: grid;\ngrid-template-columns: repeat(12, 1fr);\ngap: 1.25rem;\nbackground: #11141c;\nborder: 1px solid #1f2432;\nborder-radius: 18px;\nbox-shadow: inset 0 1px 0 rgba(255,255,255,0.06);`,
            headline: 'Structured Modular Intelligence for High-Velocity Startups.',
            desc: 'Every block serves an unambiguous functional purpose. Perfect for multi-feature platforms, AI workflows, and data-dense enterprise applications.'
        },
        {
            id: 'neobrutalism',
            name: 'Neo-Brutalism',
            themeClass: 'theme-neobrutalism',
            number: '03',
            badge: 'HIGH-VOLTAGE CONTRAST',
            icon: '⚡',
            category: 'Avant-Garde',
            bestFor: 'Creative Agencies, EdTech, D2C Brands, Gen-Z Media',
            conversionRate: '96%',
            complexity: 'Bold Simplicity',
            philosophy: 'Rejects sterile corporate design in favor of thick black outlines (3-4px), zero-blur drop shadows (6px 6px #000), saturated playful pastels, and unapologetic brutalist joy.',
            cssBlueprint: `border: 3.5px solid #000000;\nbackground: #ffffff;\nbox-shadow: 6px 6px 0px #000000;\nborder-radius: 12px;\nfont-family: 'Space Grotesk', sans-serif;\ntransition: transform 0.15s ease;`,
            headline: 'Unforgettable Kinetic Energy That Obliterates Competitor Noise.',
            desc: 'High contrast makes call-to-actions impossible to ignore. Ideal for brands targeting founders, creators, students, and forward-thinking disruptors.'
        },
        {
            id: 'minimalism',
            name: 'Minimalism (Swiss Grid)',
            themeClass: 'theme-minimalism',
            number: '04',
            badge: 'PURE ESSENCE',
            icon: '⚪',
            category: 'Clean & Editorial',
            bestFor: 'Brokers, Architecture, Dental Clinics, Law, High Finance',
            conversionRate: '97%',
            complexity: 'Disciplined',
            philosophy: 'Rooted in the Swiss International Typographic Style and Dieter Rams principles: Less, but better. Radical elimination of ornamental fluff in favor of mathematical grid spacing and stark clarity.',
            cssBlueprint: `background: #ffffff;\ncolor: #111827;\nborder: 1px solid #e5e7eb;\nborder-radius: 0px;\nletter-spacing: -0.02em;\nfont-feature-settings: 'cv02', 'cv03';`,
            headline: 'Authoritative Clarity for Premier Institutions & Luxury Real Estate.',
            desc: 'When every pixel is intentional, trust skyrockets. Maximum Core Web Vitals velocity, sub-second rendering, and timeless corporate gravitas.'
        },
        {
            id: 'maximalism',
            name: 'Maximalism',
            themeClass: 'theme-maximalism',
            number: '05',
            badge: 'SENSORY OVERLOAD',
            icon: '🎨',
            category: 'Avant-Garde',
            bestFor: 'Fashion, Entertainment, Festivals, Viral Agencies, Streetwear',
            conversionRate: '94%',
            complexity: 'Artistic Chaos',
            philosophy: 'More is more. Clashing fluorescent palettes, aggressive typographic scale, overlapping collages, dynamic tilts, and raw kinetic rebellion against sterile corporate templates.',
            cssBlueprint: `background: #ff0055;\nbackground-image: repeating-linear-gradient(45deg, #ff0055 0, #ff0055 20px, #e1004a 20px);\nborder: 5px solid #ffcc00;\nbox-shadow: 12px 12px 0px #7000ff;\ntransform: rotate(-1deg);`,
            headline: 'Fearless Visual Impact for Cultural Disruptors & Entertainment.',
            desc: 'Drives radical social sharing and memorable brand recall. Built for brands that demand to be talked about rather than blended in.'
        },
        {
            id: 'neumorphism',
            name: 'Neumorphism',
            themeClass: 'theme-neumorphism',
            number: '06',
            badge: 'TACTILE EXTRUSION',
            icon: '🔘',
            category: 'Tactile & 3D',
            bestFor: 'Smart Home, Medical Devices, Audio Apps, IoT Dashboards',
            conversionRate: '92%',
            complexity: 'Precision Math',
            philosophy: 'Simulates physical extruded plastic surfaces using mathematically synchronized dual light/shadow projections. Creates an organic, tactile, touch-friendly hardware feel.',
            cssBlueprint: `background: #e0e5ec;\nborder-radius: 24px;\nbox-shadow: 9px 9px 18px #b8b9be, -9px -9px 18px #ffffff;\ntransition: box-shadow 0.2s ease;`,
            headline: 'Organic Tactile Surfaces for Modern Devices & Hardware IoT.',
            desc: 'Gives digital interfaces the physical warmth of premium consumer electronics. Outstanding for toggle controls, switches, and remote dashboards.'
        },
        {
            id: 'claymorphism',
            name: 'Claymorphism',
            themeClass: 'theme-claymorphism',
            number: '07',
            badge: 'PLAYFUL 3D CLAY',
            icon: '🧸',
            category: 'Tactile & 3D',
            bestFor: 'EdTech, Kids Learning, FinTech Apps, Onboarding, Productivity',
            conversionRate: '95%',
            complexity: 'Soft 3D',
            philosophy: 'Combines puffy 3D clay-like volumes, inner inset light bevels, and fluffy pastel drop-shadows. Warm, friendly, approachable, and disarming.',
            cssBlueprint: `background: #ffffff;\nborder-radius: 32px;\nbox-shadow: inset -6px -6px 12px rgba(0,0,0,0.08), inset 6px 6px 12px rgba(255,255,255,0.9), 16px 16px 32px rgba(168,85,247,0.2);`,
            headline: 'Approachable Human Delight for EdTech & Interactive Apps.',
            desc: 'Soft pillowy forms eliminate friction in complex onboarding flows, making users feel comfortable, safe, and excited to interact.'
        },
        {
            id: 'brutalism',
            name: 'Web Brutalism',
            themeClass: 'theme-brutalism',
            number: '08',
            badge: 'UNVARNISHED RAW',
            icon: '🏗️',
            category: 'Avant-Garde',
            bestFor: 'Developer Tooling, Crypto/Web3, Underground Art, Architecture',
            conversionRate: '93%',
            complexity: 'Radical Pure',
            philosophy: 'Raw architectural truth. System fonts (Courier), plain default HTML tags, stark black/white outlines, visible structural grid coordinates, and anti-decorative honesty.',
            cssBlueprint: `font-family: 'Courier New', monospace;\nbackground: #ffffff;\ncolor: #000000;\nborder: 2px solid #000000;\nborder-radius: 0px;\nbox-shadow: none;`,
            headline: 'Engineering Honesty & Raw Computational Utility.',
            desc: 'Loved by senior developers, cryptographers, and architectural purists who value substance, zero loading overhead, and transparent systems.'
        },
        {
            id: 'skeuomorphism',
            name: 'Skeuomorphism 2.0',
            themeClass: 'theme-skeuomorphism',
            number: '09',
            badge: 'PHYSICAL REALISM',
            icon: '📻',
            category: 'Tactile & 3D',
            bestFor: 'Audio Production, Luxury Automotive, Watchmaking, Aviation',
            conversionRate: '95%',
            complexity: 'Artisanal',
            philosophy: 'The refined resurgence of tactile realism: brushed anodized titanium, realistic glass dials, micro-milled knurling, etched metallic bezels, and tactile physical feedback.',
            cssBlueprint: `background: linear-gradient(to bottom, #3b4252 0%, #2e3440 100%);\nborder: 1px solid #4c566a;\nbox-shadow: inset 0 1px 0 rgba(255,255,255,0.25), 0 10px 25px rgba(0,0,0,0.5);\ntext-shadow: 0 -1px 1px rgba(0,0,0,0.6);`,
            headline: 'Artisanal Craftsmanship for Industrial & Luxury Precision.',
            desc: 'Translates high-end hardware engineering into software. Evokes heritage, prestige, and tangible physical mastery.'
        },
        {
            id: 'flat',
            name: 'Flat Design 2.0',
            themeClass: 'theme-flat',
            number: '10',
            badge: 'GEOMETRIC CLARITY',
            icon: '📐',
            category: 'Clean & Editorial',
            bestFor: 'Transportation, Logistics, Government, Utility Apps, Directory',
            conversionRate: '96%',
            complexity: 'Lightweight',
            philosophy: 'Pure functional 2D geometry with subtle tonal depth in version 2.0. Clean primary palettes, zero heavy shadows, rapid cognitive scanning, and ultra-high mobile responsiveness.',
            cssBlueprint: `background: #34495e;\ncolor: #ffffff;\nborder-radius: 6px;\nborder: none;\nbox-shadow: none;`,
            headline: 'Uncluttered Speed for Logistics, Fleet & Global Infrastructure.',
            desc: 'Zero rendering drag, immediate user comprehension, and flawless rendering on any mobile network or legacy hardware.'
        },
        {
            id: 'material',
            name: 'Material Design 3 (You)',
            themeClass: 'theme-material',
            number: '11',
            badge: 'DYNAMIC SURFACE',
            icon: '📱',
            category: 'Modern Tech',
            bestFor: 'Android Ecosystems, Enterprise SaaS, Health Apps, Daily Tools',
            conversionRate: '98%',
            complexity: 'Systematic',
            philosophy: 'Google Material You paradigm: dynamic tonal color palettes extracted from user preferences, fluid organic elevation surfaces, pill buttons, and responsive ripple physics.',
            cssBlueprint: `background: #f3edf7;\nborder-radius: 28px;\nborder: none;\nbox-shadow: 0 4px 12px rgba(0,0,0,0.05);\ncolor: #1d1a20;`,
            headline: 'Systematic Usability for Scalable Enterprise & Mobile SaaS.',
            desc: 'Backed by millions of hours of Google human-interaction research. Familiar, intuitive, and accessible to universal demographics.'
        },
        {
            id: 'y2k',
            name: 'Y2K Cyber Aesthetic',
            themeClass: 'theme-y2k',
            number: '12',
            badge: 'MILLENNIAL MATRIX',
            icon: '💿',
            category: 'Retro & Cyber',
            bestFor: 'Gen-Z Brands, Gaming Clans, Music Labels, Street Fashion',
            conversionRate: '93%',
            complexity: 'Stylized',
            philosophy: 'The optimistic digital futurism of 1999–2003: chrome typography, iridescent holographic foil, matrix cyber glow, bubble vector badges, and techno-utopian energy.',
            cssBlueprint: `background: radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(13,2,33,0.85) 100%);\nborder: 2px solid #a855f7;\nbox-shadow: 0 0 25px rgba(168,85,247,0.4), inset 0 0 15px rgba(0,240,255,0.3);\nborder-radius: 20px;`,
            headline: 'Nostalgic Cyber-Optics Captivating Today’s Gen-Z Culture.',
            desc: 'Huge virality factor on TikTok and Instagram. Perfect for creative collectives, indie game releases, and apparel drops.'
        },
        {
            id: 'retro',
            name: 'Retro 80s/90s Synthwave',
            themeClass: 'theme-retro',
            number: '13',
            badge: 'SYNTHWAVE ARCADE',
            icon: '🕹️',
            category: 'Retro & Cyber',
            bestFor: 'Arcade Gaming, Podcasts, Vintage Collectibles, Nightlife',
            conversionRate: '94%',
            complexity: 'Atmospheric',
            philosophy: 'Warm CRT phosphor scanlines, neon magenta-to-sunset orange laser horizons, pixel-perfect 8-bit badges, and 1984 Outrun electronic rhythm.',
            cssBlueprint: `background: #25094d;\nborder: 2px solid #f43a85;\nbox-shadow: 6px 6px 0px #ffe459;\nborder-radius: 4px;\ncolor: #ffe459;`,
            headline: 'Electric Nostalgia Driving Passionate Community Engagement.',
            desc: 'Evokes deep emotional resonance with tech enthusiasts and millennials. Powerful for creators, hardware modders, and gaming communities.'
        },
        {
            id: 'cyberpunk',
            name: 'Cyberpunk 2077 HUD',
            themeClass: 'theme-cyberpunk',
            number: '14',
            badge: 'DYSTOPIAN NEON',
            icon: '🤖',
            category: 'Retro & Cyber',
            bestFor: 'Robotics, AI Security, Esports, Defense Tech, Crypto Trading',
            conversionRate: '96%',
            complexity: 'High Tech',
            philosophy: 'High-voltage neon cyan (#00ffcc) and electric magenta (#ff0055) cuts over deep obsidian. Chamfered polygon clipped borders, tactical HUD telemetry, and glitch dynamics.',
            cssBlueprint: `background: #0d0d15;\nborder: 1px solid #00ffcc;\nclip-path: polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%);\nbox-shadow: 0 0 25px rgba(0, 255, 204, 0.25);`,
            headline: 'Uncompromising Power for Next-Gen Robotics & Autonomous AI.',
            desc: 'Communicates advanced technological superiority, mission-critical resilience, and sub-millisecond execution.'
        },
        {
            id: 'editorial',
            name: 'Editorial Magazine',
            themeClass: 'theme-editorial',
            number: '15',
            badge: 'HAUTE COUTURE',
            icon: '📰',
            category: 'Clean & Editorial',
            bestFor: 'Luxury Real Estate, High Fashion, Law Firms, Medical Spas',
            conversionRate: '97%',
            complexity: 'Sophisticated',
            philosophy: 'The typographic poetry of Vogue and Kinfolk. Refined high-contrast serif headlines, asymmetric column pacing, oversized drop caps, and muted warm alabaster backgrounds.',
            cssBlueprint: `font-family: 'Playfair Display', serif;\nbackground: #fbf9f5;\ncolor: #1a1815;\nborder-top: 2px solid #1a1815;\nborder-bottom: 1px solid #dcd7ce;`,
            headline: 'Editorial Aristocracy for High-Net-Worth Clienteles.',
            desc: 'Positions brands as industry tastemakers and cultural authorities. Unsurpassed for high-ticket consulting, prime real estate, and boutique law.'
        },
        {
            id: 'spatial',
            name: 'Spatial Computing (VisionOS)',
            themeClass: 'theme-spatial',
            number: '16',
            badge: 'IMMERSIVE GLASS',
            icon: '🌌',
            category: 'Modern Tech',
            bestFor: 'VR/AR Apps, Spatial Audio, 3D Architecture, Future Tech',
            conversionRate: '98%',
            complexity: 'Cutting-Edge',
            philosophy: 'Engineered for the post-screen era. Translucent physical glass cards floating in 3D space with specular edge highlights that react dynamically to cursor movement.',
            cssBlueprint: `background: rgba(255, 255, 255, 0.12);\nbackdrop-filter: blur(40px) saturate(180%);\nborder: 1px solid rgba(255, 255, 255, 0.22);\nborder-radius: 30px;\nbox-shadow: 0 30px 60px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.4);`,
            headline: 'Next-Generation Spatial Depth Ready for Tomorrow’s Web.',
            desc: 'Brings Apple VisionOS polish to everyday web browsers. Highly aspirational and instantly captivating.'
        },
        {
            id: 'luxury',
            name: 'Dark Luxury / Stealth Wealth',
            themeClass: 'theme-luxury',
            number: '17',
            badge: 'TITANIUM & GOLD',
            icon: '💎',
            category: 'Clean & Editorial',
            bestFor: 'Private Family Offices, Superyachts, Fine Jewelry, Private Jets',
            conversionRate: '99%',
            complexity: 'Ultra-Premium',
            philosophy: 'Understated aristocratic power. Deepest obsidian black (#050608), hairline champagne gold accents (#d4af37), letter-spaced micro-typography, and zero loud animations.',
            cssBlueprint: `background: #0b0d12;\nborder: 1px solid rgba(212, 175, 55, 0.3);\nborder-radius: 12px;\nbox-shadow: 0 15px 35px rgba(0,0,0,0.8), inset 0 1px 0 rgba(212,175,55,0.15);\ncolor: #f8fafc;`,
            headline: 'Stealth Wealth Elegance for Ultra-High-Ticket Acquisitions.',
            desc: 'Signals exclusivity, generational wealth, and bulletproof financial discretion. Ideal for private equity, luxury brokers, and bespoke ateliers.'
        },
        {
            id: 'customized',
            name: 'Bespoke Experiential 3D',
            themeClass: 'theme-customized',
            number: '18',
            badge: 'SIGNATURE HYBRID',
            icon: '🚀',
            category: 'Modern Tech',
            bestFor: 'ElavateX Flagships, Funded Disruptors, Global Tech Studios',
            conversionRate: '99%',
            complexity: 'Signature Tier',
            philosophy: 'The culmination of modern web engineering: custom WebGL 3D interaction, reactive particle physics, bespoke cursor vectoring, and fluid layout morphing tailored uniquely to your brand DNA.',
            cssBlueprint: `background: radial-gradient(circle at 50% 50%, #171033 0%, #06050e 100%);\nbackdrop-filter: blur(20px);\nborder: 1px solid rgba(147, 51, 234, 0.4);\nbox-shadow: 0 20px 50px rgba(147, 51, 234, 0.25), 0 0 20px rgba(0, 240, 255, 0.2);\nborder-radius: 24px;`,
            headline: 'Bespoke Kinetic Engineering Tailored to Your Brand DNA.',
            desc: 'Zero off-the-shelf templates. Every transition, shader, and layout is custom engineered to create an undeniable competitive moat.'
        }
    ];

    // 2. 14 COMMERCIAL INDUSTRY VERTICALS REGISTRY
    const INDUSTRY_VERTICALS = {
        'all': {
            name: 'All Industries & Use-Cases',
            icon: '🌐',
            headline: 'Architecting Unfair Digital Advantage for Every Industry.',
            desc: 'Explore how high-end design philosophies translate into quantifiable conversion surges and market authority across every commercial domain.'
        },
        'dental': {
            name: 'Dental, Clinics & Healthcare',
            icon: '🦷',
            headline: 'ApexSmile Studio • Premier Dental & Aesthetic Medicine',
            tag: 'HEALTHCARE & CLINICAL EXCELLENCE',
            ctaText: 'Book Clinical Consultation',
            stat1Val: '99.8%', stat1Lbl: 'Patient Satisfaction',
            stat2Val: '15 Min', stat2Lbl: 'Avg Check-in Time',
            price: '₹2,499 Comprehensive Consult',
            service: 'Cosmetic Dentistry, Aligners & Oral Surgery'
        },
        'ai': {
            name: 'AI Automation & Robotics',
            icon: '🤖',
            headline: 'Omnisyn Autonomous Workflows & Robotic Systems',
            tag: 'NEXT-GEN ARTIFICIAL INTELLIGENCE',
            ctaText: 'Deploy Autonomous Pipeline',
            stat1Val: '10.4x', stat1Lbl: 'Throughput Multiplier',
            stat2Val: '<120ms', stat2Lbl: 'Inference Latency',
            price: 'API Plans from $499/mo',
            service: 'Custom LLM Workflows, Computer Vision & Agents'
        },
        'agency': {
            name: 'Digital Agency & Product Studios',
            icon: '💼',
            headline: 'Kinetic Brand Labs • High-Velocity Digital Engineering',
            tag: 'STUDIO & GROWTH ENGINE',
            ctaText: 'Start a Sprint (2 Slots Left)',
            stat1Val: '100/100', stat1Lbl: 'Core Web Vitals',
            stat2Val: '2.8x', stat2Lbl: 'Conversion Lift',
            price: 'Sprints from $4,500',
            service: 'Full-Stack Web, Mobile Apps & Brand Strategy'
        },
        'broker': {
            name: 'Real Estate & Financial Brokers',
            icon: '🏢',
            headline: 'Skyline Capital & Prime Residences Bangalore',
            tag: 'LUXURY ASSETS & BROKERAGE',
            ctaText: 'Schedule Private Viewing',
            stat1Val: '₹140 Cr+', stat1Lbl: 'Assets Under Brokerage',
            stat2Val: '48 Hrs', stat2Lbl: 'Avg Deal Closure',
            price: 'Prime Estates from ₹4.5 Cr',
            service: 'Commercial Portfolios, Villas & FinTech Escrow'
        },
        'education': {
            name: 'Education, EdTech & Academies',
            icon: '🎓',
            headline: 'ScholarSphere • Modern Learning & STEM Academy',
            tag: 'EDTECH & GLOBAL CURRICULUM',
            ctaText: 'Enroll in Masterclass',
            stat1Val: '94%', stat1Lbl: 'Placement Rate',
            stat2Val: '14,000+', stat2Lbl: 'Active Students',
            price: 'Courses from ₹1,999/mo',
            service: 'Interactive STEM, Coding Bootcamps & Degrees'
        },
        'transportation': {
            name: 'Transportation, Logistics & Fleet',
            icon: '🚚',
            headline: 'HyperFreight Global • Autonomous Fleet Routing',
            tag: 'SUPPLY CHAIN & LOGISTICS',
            ctaText: 'Request Route Quotation',
            stat1Val: '99.94%', stat1Lbl: 'On-Time Delivery',
            stat2Val: '42 Countries', stat2Lbl: 'Global Network',
            price: 'Freight Quotes in 60s',
            service: 'Cold Chain, Air Cargo & AI Dispatch Routing'
        },
        'visa': {
            name: 'Visa, Immigration & Global Mobility',
            icon: '✈️',
            headline: 'GlobalPass Mobility • Express Residency & Visas',
            tag: 'LEGAL IMMIGRATION & ADVISORY',
            ctaText: 'Check Visa Eligibility',
            stat1Val: '98.6%', stat1Lbl: 'Approval Ratio',
            stat2Val: '7,200+', stat2Lbl: 'Visas Processed',
            price: 'Eligibility Check Free',
            service: 'Golden Visas, Work Permits & Global Citizenship'
        },
        'startups': {
            name: 'Tech Startups & B2B SaaS',
            icon: '⚡',
            headline: 'DataVortex Cloud • Multi-Tenant Analytics Engine',
            tag: 'ENTERPRISE B2B SAAS',
            ctaText: 'Start 14-Day Free Trial',
            stat1Val: '99.99%', stat1Lbl: 'Uptime SLA',
            stat2Val: '4.9/5', stat2Lbl: 'G2 User Rating',
            price: '$79 / seat / month',
            service: 'Cloud Telemetry, Next.js Clusters & Webhooks'
        },
        'portfolio': {
            name: 'Creative Portfolio & Art Directors',
            icon: '🎨',
            headline: 'Kai Sterling • Executive Spatial & Brand Director',
            tag: 'BESPOKE DESIGN DIRECTION',
            ctaText: 'Inquire for Commission',
            stat1Val: '14 Cannes', stat1Lbl: 'Industry Awards',
            stat2Val: '42 Brands', stat2Lbl: 'Transformed',
            price: 'Retainers from $6,000/mo',
            service: 'Brand Direction, 3D Experiences & Identity'
        },
        'social': {
            name: 'Social Media & Influencer Management',
            icon: '📱',
            headline: 'PulseFlow Media • Viral Growth & Creator Studio',
            tag: 'SOCIAL DOMINANCE & ROAS',
            ctaText: 'Audit My Social Reach',
            stat1Val: '180M+', stat1Lbl: 'Monthly Impressions',
            stat2Val: '4.6x', stat2Lbl: 'ROAS Delivered',
            price: 'Packages from ₹24,999/mo',
            service: 'Short-Form Reels, TikTok Dominance & Ad Funnels'
        },
        'marketing': {
            name: 'Performance Digital Marketing & SEO',
            icon: '📈',
            headline: 'OmniRank • #1 Google Ranking & Acquisition Engine',
            tag: 'SEARCH DOMINANCE & ADS',
            ctaText: 'Claim Competitor SEO Audit',
            stat1Val: '#1 Spot', stat1Lbl: 'Google Maps Pack',
            stat2Val: '380%', stat2Lbl: 'Organic Lead Surges',
            price: 'Custom Growth Plans',
            service: 'Technical SEO, Meta & Google Paid Ads, Maps GBP'
        },
        'routines': {
            name: 'Daily Routines, Habits & Wellness',
            icon: '📅',
            headline: 'Zenith LifeFlow • AI Habit & Cognitive Performance',
            tag: 'WELLNESS & PRODUCTIVITY',
            ctaText: 'Build My Daily Routine',
            stat1Val: '84%', stat1Lbl: 'Habit Adherence',
            stat2Val: '120k+', stat2Lbl: 'Active Users',
            price: 'Free Core / Pro $9.99/mo',
            service: 'Focus Timers, Routine Tracking & Smart Reminders'
        },
        'ecommerce': {
            name: 'Luxury D2C & High-End E-Commerce',
            icon: '🛍️',
            headline: 'Aura Horology • Bespoke Swiss Automatic Timepieces',
            tag: 'HAUTE HORLOGERIE & D2C',
            ctaText: 'Explore Limited Collection',
            stat1Val: 'Limited 100', stat1Lbl: 'Numbered Pieces',
            stat2Val: 'Swiss Made', stat2Lbl: 'Chronometer Certified',
            price: 'From $3,800',
            service: 'Luxury Checkouts, Global Vault Delivery & Warranty'
        }
    };

    // State Variables
    let currentSelectedStyle = STYLES_DATABASE[0];
    let currentSelectedIndustry = 'all';
    let currentActiveFilter = 'all';

    // DOM Elements
    const sandboxStage = document.getElementById('sandbox-stage');
    const sandboxAddress = document.getElementById('sandbox-address');
    const sandboxTag = document.getElementById('sandbox-tag');
    const sandboxHeading = document.getElementById('sandbox-heading');
    const sandboxDesc = document.getElementById('sandbox-desc');
    const sandboxBtnCta = document.getElementById('sandbox-btn-cta');
    const sandboxBtnDetails = document.getElementById('sandbox-btn-details');
    const sandboxStat1Val = document.getElementById('sandbox-stat1-val');
    const sandboxStat1Lbl = document.getElementById('sandbox-stat1-lbl');
    const sandboxStat2Val = document.getElementById('sandbox-stat2-val');
    const sandboxStat2Lbl = document.getElementById('sandbox-stat2-lbl');
    const sandboxCodeDrawer = document.getElementById('sandbox-code-drawer');
    const stylesGrid = document.getElementById('styles-showcase-grid');
    const searchInput = document.getElementById('styles-search');
    const industrySelect = document.getElementById('industry-filter');
    const demoModal = document.getElementById('demo-modal');
    const modalClose = document.getElementById('modal-close');
    const modalViewport = document.getElementById('modal-body-viewport');
    const modalTitle = document.getElementById('modal-bar-title');
    const modalAddress = document.getElementById('modal-bar-address');
    const modalWhatsappBtn = document.getElementById('modal-whatsapp-cta');

    // 3. RENDER ALL 18 SHOWCASE CARDS IN THE DIRECTORY
    function renderShowcaseCards() {
        if (!stylesGrid) return;
        stylesGrid.innerHTML = '';

        STYLES_DATABASE.forEach((style) => {
            const card = document.createElement('div');
            card.className = 'style-item-card';
            card.setAttribute('data-style-id', style.id);
            card.setAttribute('data-category', style.category);

            // Generate card markup with real embedded styled mini-component
            card.innerHTML = `
                <div class="card-preview-viewport ${style.themeClass}">
                    <div class="mini-preview-component morph-card">
                        <h5>${style.name}</h5>
                        <p>${style.badge}</p>
                        <div class="mini-preview-btn morph-btn">Explore Live</div>
                    </div>
                </div>
                <div class="card-content-body">
                    <div class="card-tags-row">
                        <span class="mini-tag">${style.icon} ${style.category}</span>
                        <span class="mini-tag tag-industry">${style.bestFor.split(',')[0]}</span>
                        <span class="mini-tag">Conv: ${style.conversionRate}</span>
                    </div>
                    <div class="card-style-title">
                        <span>${style.name}</span>
                        <span class="style-number">#${style.number}</span>
                    </div>
                    <p class="card-style-desc">${style.philosophy}</p>
                    <ul class="card-specs-list">
                        <li>Best-Fit Niches: <span>${style.bestFor}</span></li>
                        <li>Conversion Score: <span>${style.conversionRate}</span></li>
                        <li>UX Complexity: <span>${style.complexity}</span></li>
                    </ul>
                    <div class="card-actions-footer">
                        <button class="btn-launch-demo" data-style-id="${style.id}">
                            <span>🚀 Launch Demo</span>
                        </button>
                        <a href="https://wa.me/917676808068?text=Hello%20ElavateX%2C%20I%20am%20interested%20in%20building%20my%20website%20in%20the%20${encodeURIComponent(style.name)}%20style." target="_blank" class="btn-book-style" title="Book this style on WhatsApp">
                            <span>💬 Book</span>
                        </a>
                    </div>
                </div>
            `;
            stylesGrid.appendChild(card);
        });

        // Attach listeners to new cards
        document.querySelectorAll('.btn-launch-demo').forEach(btn => {
            btn.addEventListener('click', () => {
                const sId = btn.getAttribute('data-style-id');
                const styleObj = STYLES_DATABASE.find(s => s.id === sId);
                if (styleObj) openDemoModal(styleObj, currentSelectedIndustry);
            });
        });

        // Clicking preview viewport morphs the top sandbox
        document.querySelectorAll('.card-preview-viewport').forEach(vp => {
            vp.addEventListener('click', (e) => {
                const card = e.currentTarget.closest('.style-item-card');
                const sId = card.getAttribute('data-style-id');
                const styleObj = STYLES_DATABASE.find(s => s.id === sId);
                if (styleObj) {
                    morphSandbox(styleObj, currentSelectedIndustry);
                    document.getElementById('sandbox-section').scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // 4. MASTER MORPHING SANDBOX ENGINE
    function morphSandbox(styleObj, industryKey = 'all') {
        if (!sandboxStage || !styleObj) return;

        currentSelectedStyle = styleObj;

        // Strip previous theme classes
        STYLES_DATABASE.forEach(s => sandboxStage.classList.remove(s.themeClass));
        sandboxStage.classList.add(styleObj.themeClass);

        // Update URL bar
        const indPrefix = industryKey !== 'all' ? industryKey : 'studio';
        if (sandboxAddress) {
            sandboxAddress.textContent = `https://${indPrefix}.elavatex.com/styles/${styleObj.id}`;
        }

        // Get Industry Content
        const indData = INDUSTRY_VERTICALS[industryKey] || INDUSTRY_VERTICALS['all'];

        // Dynamic Text Insertion
        if (sandboxTag) sandboxTag.textContent = `${styleObj.icon} ${styleObj.name.toUpperCase()} • ${indData.tag || 'ELAVATEX ARCHITECTURE'}`;
        if (sandboxHeading) sandboxHeading.textContent = indData.headline || styleObj.headline;
        if (sandboxDesc) sandboxDesc.textContent = indData.desc || styleObj.desc;
        if (sandboxBtnCta) sandboxBtnCta.textContent = indData.ctaText || 'Launch Project in this Style';
        
        if (sandboxStat1Val) sandboxStat1Val.textContent = indData.stat1Val || '99.8%';
        if (sandboxStat1Lbl) sandboxStat1Lbl.textContent = indData.stat1Lbl || 'User Engagement';
        if (sandboxStat2Val) sandboxStat2Val.textContent = indData.stat2Val || '100/100';
        if (sandboxStat2Lbl) sandboxStat2Lbl.textContent = indData.stat2Lbl || 'Core Web Vitals';

        // Update WhatsApp links
        const waText = encodeURIComponent(`Hello ElavateX, I am exploring your Styles page and want to architect my website in the ${styleObj.name} style for the ${indData.name} sector.`);
        if (sandboxBtnCta) {
            sandboxBtnCta.onclick = () => {
                window.open(`https://wa.me/917676808068?text=${waText}`, '_blank');
            };
        }

        // Update CSS drawer
        if (sandboxCodeDrawer) {
            sandboxCodeDrawer.textContent = `/* ${styleObj.name} Architectural Blueprint (${indData.name}) */\n.brand-container {\n  ${styleObj.cssBlueprint.split('\n').join('\n  ')}\n}`;
        }
    }

    // 5. FULL-SCREEN INTERACTIVE DEMO MODAL
    function openDemoModal(styleObj, industryKey = 'all') {
        if (!demoModal || !modalViewport) return;

        const indData = INDUSTRY_VERTICALS[industryKey] || INDUSTRY_VERTICALS['dental']; // Default to high-converting dental if all

        // Set simulated header
        if (modalTitle) modalTitle.textContent = `${styleObj.name} Live Interactive Experience (${indData.name})`;
        if (modalAddress) modalAddress.textContent = `https://${industryKey !== 'all' ? industryKey : 'demo'}.elavatex.com/live/${styleObj.id}`;

        // Reset theme classes
        STYLES_DATABASE.forEach(s => modalViewport.classList.remove(s.themeClass));
        modalViewport.classList.add(styleObj.themeClass);

        // Generate full simulated landing page structure
        modalViewport.innerHTML = `
            <div style="max-width: 980px; margin: 0 auto; width: 100%;">
                <!-- Simulated Top Nav -->
                <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 2rem; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 3rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem; font-weight: 800; font-size: 1.25rem;">
                        <span>${indData.icon || '✦'}</span>
                        <span>${indData.name.split(',')[0]}</span>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: center;">
                        <button class="morph-btn" id="modal-inner-cta">${indData.ctaText || 'Get Started'}</button>
                    </div>
                </div>

                <!-- Hero Section -->
                <div style="text-align: center; margin-bottom: 4rem;">
                    <span style="font-size: 0.8rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; opacity: 0.85;">${styleObj.name} Architectural Showcase</span>
                    <h1 style="font-size: clamp(2rem, 4.5vw, 3.6rem); font-weight: 900; line-height: 1.15; margin: 1rem 0 1.5rem;">
                        ${indData.headline}
                    </h1>
                    <p style="font-size: 1.1rem; max-width: 720px; margin: 0 auto 2.5rem; opacity: 0.85; line-height: 1.6;">
                        Experience how the ${styleObj.name} aesthetic delivers an authoritative, high-converting digital experience tailored specifically for ${indData.name}.
                    </p>
                    <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                        <a href="https://wa.me/917676808068?text=Hello%20ElavateX%2C%20I%20am%20in%20love%20with%20the%20${encodeURIComponent(styleObj.name)}%20demo%20for%20${encodeURIComponent(indData.name)}%20and%20want%20this%20built." target="_blank" class="morph-btn" style="font-size: 1rem; padding: 0.85rem 2rem;">
                            <span>💬 Build This For My Brand</span>
                        </a>
                    </div>
                </div>

                <!-- Interactive 3-Card Value Grid -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem; margin-bottom: 4rem;">
                    <div class="morph-card">
                        <div style="font-size: 1.8rem; margin-bottom: 0.75rem;">⚡</div>
                        <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">${indData.stat1Val || 'Sub-Second'} Velocity</h3>
                        <p style="font-size: 0.88rem; opacity: 0.8;">Engineered with Zero-Bloat code and instantaneous TTFB responses that maximize search rankings.</p>
                    </div>
                    <div class="morph-card">
                        <div style="font-size: 1.8rem; margin-bottom: 0.75rem;">🎯</div>
                        <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">${indData.stat2Val || '100/100'} Performance</h3>
                        <p style="font-size: 0.88rem; opacity: 0.8;">Optimized user flows tailored specifically for high-intent customer acquisitions in ${indData.name.split(',')[0]}.</p>
                    </div>
                    <div class="morph-card">
                        <div style="font-size: 1.8rem; margin-bottom: 0.75rem;">🛡️</div>
                        <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">Enterprise Resilience</h3>
                        <p style="font-size: 0.88rem; opacity: 0.8;">Bulletproof security, multi-layered data encryption, and instant global CDN edge distribution.</p>
                    </div>
                </div>

                <!-- Interactive Booking / Lead Form Component -->
                <div class="morph-card" style="max-width: 650px; margin: 0 auto 3rem; text-align: left;">
                    <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem; text-align: center;">Direct Consultation &amp; Inquiry</h3>
                    <p style="font-size: 0.85rem; opacity: 0.8; text-align: center; margin-bottom: 1.5rem;">Test this functional form inside the ${styleObj.name} layout:</p>
                    <form id="modal-test-form" onsubmit="event.preventDefault(); alert('Demo Form Submitted! In live deployment, this connects directly to WhatsApp or your CRM.');">
                        <div style="margin-bottom: 1rem;">
                            <label style="display:block; font-size: 0.8rem; font-weight:700; margin-bottom: 0.4rem;">Full Name / Organization</label>
                            <input type="text" class="morph-input" placeholder="e.g. Dr. Sarah Jenkins" required>
                        </div>
                        <div style="margin-bottom: 1.5rem;">
                            <label style="display:block; font-size: 0.8rem; font-weight:700; margin-bottom: 0.4rem;">WhatsApp Number / Email</label>
                            <input type="text" class="morph-input" placeholder="e.g. +91 7676808068" required>
                        </div>
                        <button type="submit" class="morph-btn" style="width: 100%; justify-content: center; font-size: 0.95rem;">
                            <span>Submit Request</span>
                        </button>
                    </form>
                </div>
            </div>
        `;

        // Update WhatsApp CTA button at top bar of modal
        if (modalWhatsappBtn) {
            const waText = encodeURIComponent(`Hello ElavateX, I am viewing the ${styleObj.name} full-screen interactive demo for ${indData.name} and want to discuss building this for my business.`);
            modalWhatsappBtn.href = `https://wa.me/917676808068?text=${waText}`;
        }

        demoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    if (modalClose) {
        modalClose.addEventListener('click', () => {
            demoModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    if (demoModal) {
        demoModal.addEventListener('click', (e) => {
            if (e.target === demoModal) {
                demoModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Modal Breakpoint Switchers
    document.querySelectorAll('.modal-view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal-view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const viewMode = btn.getAttribute('data-view');
            if (modalViewport) {
                if (viewMode === 'mobile') {
                    modalViewport.style.maxWidth = '400px';
                    modalViewport.style.margin = '0 auto';
                    modalViewport.style.border = '4px solid #334155';
                    modalViewport.style.borderRadius = '32px';
                } else if (viewMode === 'tablet') {
                    modalViewport.style.maxWidth = '768px';
                    modalViewport.style.margin = '0 auto';
                    modalViewport.style.border = 'none';
                    modalViewport.style.borderRadius = '0';
                } else {
                    modalViewport.style.maxWidth = '100%';
                    modalViewport.style.margin = '0';
                    modalViewport.style.border = 'none';
                    modalViewport.style.borderRadius = '0';
                }
            }
        });
    });

    // 6. FILTERING & SEARCH CONTROLS
    // Aesthetic Carousel Filter Buttons
    document.querySelectorAll('.style-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.style-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterId = btn.getAttribute('data-filter');
            currentActiveFilter = filterId;

            // If specific style clicked, also morph the top sandbox
            if (filterId !== 'all') {
                const targetStyle = STYLES_DATABASE.find(s => s.id === filterId);
                if (targetStyle) morphSandbox(targetStyle, currentSelectedIndustry);
            }

            filterGrid();
        });
    });

    // Industry Dropdown Filter
    if (industrySelect) {
        industrySelect.addEventListener('change', (e) => {
            currentSelectedIndustry = e.target.value;
            morphSandbox(currentSelectedStyle, currentSelectedIndustry);
            filterGrid();
        });
    }

    // Search Input Real-Time Filter
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            filterGrid();
        });
    }

    function filterGrid() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const cards = document.querySelectorAll('.style-item-card');

        cards.forEach(card => {
            const sId = card.getAttribute('data-style-id');
            const category = card.getAttribute('data-category').toLowerCase();
            const textContent = card.textContent.toLowerCase();

            const matchesFilter = (currentActiveFilter === 'all' || sId === currentActiveFilter || category.includes(currentActiveFilter));
            const matchesSearch = (!query || textContent.includes(query));

            if (matchesFilter && matchesSearch) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Viewport Toggle for Sandbox (Desktop vs Mobile)
    document.querySelectorAll('.sandbox-view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.sandbox-view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const vMode = btn.getAttribute('data-view');
            if (sandboxStage) {
                if (vMode === 'mobile') {
                    sandboxStage.classList.add('mobile-view');
                } else {
                    sandboxStage.classList.remove('mobile-view');
                }
            }
        });
    });

    // Toggle Code Drawer
    const toggleCodeBtn = document.getElementById('toggle-code-drawer-btn');
    if (toggleCodeBtn && sandboxCodeDrawer) {
        toggleCodeBtn.addEventListener('click', () => {
            if (sandboxCodeDrawer.style.display === 'none' || !sandboxCodeDrawer.style.display) {
                sandboxCodeDrawer.style.display = 'block';
                toggleCodeBtn.textContent = 'Hide CSS Formula ✕';
            } else {
                sandboxCodeDrawer.style.display = 'none';
                toggleCodeBtn.textContent = 'Inspect CSS Formula ⚙';
            }
        });
    }

    // 7. STYLE MATCHMAKER QUIZ CONTROLLER
    const quizButtons = document.querySelectorAll('.quiz-opt-btn');
    const quizResult = document.getElementById('quiz-result');
    const quizRecommendation = document.getElementById('quiz-recommendation');
    const quizReasoning = document.getElementById('quiz-reasoning');
    const quizCtaBtn = document.getElementById('quiz-cta-btn');

    let quizAnswers = { industry: null, vibe: null };

    quizButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const group = btn.getAttribute('data-group');
            const val = btn.getAttribute('data-val');

            // De-select siblings in group
            document.querySelectorAll(`.quiz-opt-btn[data-group="${group}"]`).forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            quizAnswers[group] = val;

            // Check if both steps answered
            if (quizAnswers.industry && quizAnswers.vibe) {
                calculateStyleMatch(quizAnswers.industry, quizAnswers.vibe);
            }
        });
    });

    function calculateStyleMatch(industry, vibe) {
        let recommendedStyleId = 'glassmorphism';
        let matchReason = '';

        if (vibe === 'luxury') {
            recommendedStyleId = 'luxury';
            matchReason = `For high-ticket ${industry.toUpperCase()} acquisitions, Stealth Luxury establishes instant credibility with champagne gold hairpins, deep obsidian titanium, and aristocratic poise.`;
        } else if (vibe === 'hightech' || industry === 'ai' || industry === 'saas') {
            recommendedStyleId = 'bento';
            matchReason = `Bento Grid UI organizes complex ${industry.toUpperCase()} architectures into modular, digestible micro-widgets with 100/100 Core Web Vitals performance.`;
        } else if (vibe === 'genz' || industry === 'social') {
            recommendedStyleId = 'neobrutalism';
            matchReason = `Neo-Brutalism commands attention with high-contrast outlines and vivid pastel pops, perfect for engaging modern digital natives and creators.`;
        } else if (vibe === 'clean' || industry === 'dental') {
            recommendedStyleId = 'glassmorphism';
            matchReason = `Glassmorphism delivers a sensation of clinical purity, multi-layer depth, and precision technology essential for medical and wellness trust.`;
        } else if (vibe === 'editorial') {
            recommendedStyleId = 'editorial';
            matchReason = `Editorial Magazine typography positions your ${industry.toUpperCase()} firm as a high-authority cultural powerhouse with timeless sophistication.`;
        } else {
            recommendedStyleId = 'customized';
            matchReason = `A customized Experiential 3D hybrid blends WebGL immersion with clean conversion funnels uniquely designed for your brand.`;
        }

        const matchObj = STYLES_DATABASE.find(s => s.id === recommendedStyleId) || STYLES_DATABASE[0];

        if (quizResult && quizRecommendation && quizReasoning && quizCtaBtn) {
            quizRecommendation.textContent = `${matchObj.icon} ${matchObj.name} (#${matchObj.number})`;
            quizReasoning.textContent = matchReason;
            quizCtaBtn.textContent = `🚀 Preview ${matchObj.name} for My Project`;
            quizCtaBtn.onclick = () => {
                morphSandbox(matchObj, industry);
                document.getElementById('sandbox-section').scrollIntoView({ behavior: 'smooth' });
            };
            quizResult.style.display = 'block';
        }
    }

    // 8. INITIALIZE PAGE
    renderShowcaseCards();
    morphSandbox(STYLES_DATABASE[0], 'all');

    // Theme Toggle Handler
    const themeBtn = document.getElementById('styles-theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', nextTheme);
            localStorage.setItem('elavatex-theme', nextTheme);
        });
    }

});
