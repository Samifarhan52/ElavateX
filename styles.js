/**
 * ELAVATEX DESIGN STYLES SHOWCASE ENGINE (18 Philosophies x 14 Industry Verticals)
 * Integrated with official ElavateX design system, SVG icon registry, and interactive hero canvas.
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. OFFICIAL SCALABLE VECTOR ICON REGISTRY (Zero Text Emojis)
    // =========================================================================
    const STYLE_ICONS = {
        glassmorphism: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
        bento: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>`,
        neobrutalism: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
        minimalism: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16"/><line x1="4" y1="12" x2="20" y2="12"/></svg>`,
        maximalism: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
        neumorphism: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>`,
        claymorphism: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="6"/><circle cx="8" cy="12" r="1.5" fill="currentColor"/></svg>`,
        brutalism: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
        skeuomorphism: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><polyline points="12 6 12 12 16 14"/></svg>`,
        flat: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><rect x="2" y="14" width="20" height="6" rx="2"/></svg>`,
        material: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
        y2k: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/></svg>`,
        retro: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="2"/><line x1="10" y1="12" x2="14" y2="12"/></svg>`,
        cyberpunk: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg>`,
        editorial: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
        spatial: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 9a6 6 0 0 0-6-6H9a6 6 0 0 0-6 6v6a6 6 0 0 0 6 6h6a6 6 0 0 0 6-6V9z"/><circle cx="8.5" cy="12" r="2.5"/><circle cx="15.5" cy="12" r="2.5"/></svg>`,
        luxury: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2"/></svg>`,
        customized: `<svg class="style-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 17 12 22 22 17 12 12 2 17"/></svg>`
    };

    const INDUSTRY_ICONS = {
        all: `<svg class="ind-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
        dental: `<svg class="ind-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/><rect x="4" y="4" width="16" height="16" rx="4"/></svg>`,
        ai: `<svg class="ind-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
        agency: `<svg class="ind-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 19 21 12 17 5 21 12 2"/></svg>`,
        broker: `<svg class="ind-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M13 21V11l6 3v7"/></svg>`,
        education: `<svg class="ind-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
        transportation: `<svg class="ind-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
        visa: `<svg class="ind-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 17a5 5 0 0 1 10 0"/></svg>`,
        startups: `<svg class="ind-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>`,
        portfolio: `<svg class="ind-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
        social: `<svg class="ind-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
        marketing: `<svg class="ind-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
        routines: `<svg class="ind-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
        ecommerce: `<svg class="ind-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="6 2 18 2 22 6 12 22 2 6 6 2"/></svg>`
    };

    // =========================================================================
    // 2. COMPREHENSIVE 18 DESIGN STYLES DIRECTORY
    // =========================================================================
    const STYLES_DATABASE = [
        {
            id: 'glassmorphism',
            name: 'Glassmorphism',
            themeClass: 'theme-glassmorphism',
            number: '01',
            badge: 'FROSTED DEPTH',
            iconSvg: STYLE_ICONS.glassmorphism,
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
            iconSvg: STYLE_ICONS.bento,
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
            iconSvg: STYLE_ICONS.neobrutalism,
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
            badge: 'RADICAL PURITY',
            iconSvg: STYLE_ICONS.minimalism,
            category: 'Clean & Direct',
            bestFor: 'Real Estate Brokers, Wealth Advisory, Portfolios, Law Firms',
            conversionRate: '97%',
            complexity: 'Effortless',
            philosophy: 'Radical elimination of non-essential ornamentation. Prioritizes asymmetric whitespace, stark Swiss typographic contrast, and pure functional purpose.',
            cssBlueprint: `background: #ffffff;\ncolor: #0f172a;\nborder: 1px solid #e2e8f0;\nborder-radius: 0;\nfont-family: 'Inter', sans-serif;\nletter-spacing: -0.02em;`,
            headline: 'Unyielding Clarity That Commands Supreme Executive Trust.',
            desc: 'When every superfluous pixel is purged, your value proposition stands out with absolute, undeniable authority. Zero visual friction guarantees maximum reading speed.'
        },
        {
            id: 'maximalism',
            name: 'Maximalism',
            themeClass: 'theme-maximalism',
            number: '05',
            badge: 'DYNAMIC BRAVADO',
            iconSvg: STYLE_ICONS.maximalism,
            category: 'Avant-Garde',
            bestFor: 'Music Festivals, Gaming, Streetwear, Entertainment, Nightlife',
            conversionRate: '92%',
            complexity: 'Intense',
            philosophy: 'More is more. Kinetic typography, clashing gradients, dense layered stickers, saturated neon pigments, and rebellious visual bravado that demand complete attention.',
            cssBlueprint: `background: linear-gradient(135deg, #f43f5e 0%, #8b5cf6 50%, #06b6d4 100%);\nborder: 2px dashed #facc15;\nborder-radius: 28px;\nfilter: saturate(140%);`,
            headline: 'Electrifying Sensory Overdrive That Mesmerizes Audiences.',
            desc: 'Breaks every corporate rule to spark visceral emotional resonance. Ideal for youth-first cultural platforms and brands with charismatic swagger.'
        },
        {
            id: 'neumorphism',
            name: 'Neumorphism (Soft UI)',
            themeClass: 'theme-neumorphism',
            number: '06',
            badge: 'ORGANIC TACTILITY',
            iconSvg: STYLE_ICONS.neumorphism,
            category: 'Tactile & Soft',
            bestFor: 'IoT Dashboards, Smart Home Apps, Health Trackers, Audio Controls',
            conversionRate: '90%',
            complexity: 'High Precision',
            philosophy: 'Simulates physical extruded plastics. UI elements appear pushed out of or stamped into the background using dual-directional soft blurred shadows.',
            cssBlueprint: `background: #e0e5ec;\nborder-radius: 20px;\nbox-shadow: 9px 9px 18px #bebebe, -9px -9px 18px #ffffff;\nborder: none;`,
            headline: 'Silky Organic Surfaces That Beg to Be Pressed and Touched.',
            desc: 'Blends screen hardware and UI software into an uninterrupted tactile plane. Gives digital controls the satisfying weight of physical instruments.'
        },
        {
            id: 'claymorphism',
            name: 'Claymorphism (3D Soft)',
            themeClass: 'theme-claymorphism',
            number: '07',
            badge: 'PLAYFUL INFLATABLE',
            iconSvg: STYLE_ICONS.claymorphism,
            category: 'Playful 3D',
            bestFor: 'EdTech, Gamified SaaS, Family Tech, Micro-SaaS, Web3 Games',
            conversionRate: '95%',
            complexity: 'Balanced',
            philosophy: 'Inflated, pillowy 3D clay figures with rounded geometry, inner shadow lighting, and floating blur shadows. Warm, friendly, inviting, and approachable.',
            cssBlueprint: `background: #bae6fd;\nborder-radius: 30px;\nbox-shadow: 12px 12px 24px rgba(14, 165, 233, 0.25),\n  inset -8px -8px 16px rgba(2, 132, 199, 0.35),\n  inset 8px 8px 16px rgba(255, 255, 255, 0.8);`,
            headline: 'Soft, Inflatable Joy That Makes Complex Software Addictive.',
            desc: 'Removes the intimidation factor from enterprise workflows. Users feel welcome, curious, and instantly engaged from their very first interaction.'
        },
        {
            id: 'brutalism',
            name: 'Raw Architectural Brutalism',
            themeClass: 'theme-brutalism',
            number: '08',
            badge: 'UNFILTERED TRUTH',
            iconSvg: STYLE_ICONS.brutalism,
            category: 'Raw Structural',
            bestFor: 'Architects, Independent Art Studios, Underground Culture, Hackers',
            conversionRate: '88%',
            complexity: 'Deliberate',
            philosophy: 'Inspired by raw concrete brutalist architecture and early web design. Monospaced default system fonts, stark raw borders, visible HTML tables, and anti-decorative honesty.',
            cssBlueprint: `background: #111111;\ncolor: #e5e5e5;\nborder: 1px solid #444444;\nborder-radius: 0;\nfont-family: 'JetBrains Mono', monospace;`,
            headline: 'Exposed Structural Integrity Without Fake Corporate Polish.',
            desc: 'Raw, uncompromising design that communicates total technical transparency and independent intellectual confidence.'
        },
        {
            id: 'skeuomorphism',
            name: 'Skeuomorphism 2.0',
            themeClass: 'theme-skeuomorphism',
            number: '09',
            badge: 'PHYSICAL REALISM',
            iconSvg: STYLE_ICONS.skeuomorphism,
            category: 'Physical Realism',
            bestFor: 'Luxury Horology, Professional Audio, Automotive, Fine Instruments',
            conversionRate: '93%',
            complexity: 'Artisanal',
            philosophy: 'The modern renaissance of physical materials: brushed titanium, hand-stitched leather, knurled dials, sapphire lens bevels, and micro-etched metallic textures.',
            cssBlueprint: `background: linear-gradient(180deg, #2a2c33 0%, #1a1b1f 100%);\nborder: 1px solid #3d404b;\nborder-radius: 16px;\nbox-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 12px 28px rgba(0, 0, 0, 0.6);`,
            headline: 'Masterclass Craftsmanship Evoking Centuries of Heritage.',
            desc: 'For brands where physical pedigree, engineering mastery, and artisanal heritage are the primary purchasing criteria.'
        },
        {
            id: 'flat',
            name: 'Flat Design (Modern Clean)',
            themeClass: 'theme-flat',
            number: '10',
            badge: 'ZERO DISTRACTION',
            iconSvg: STYLE_ICONS.flat,
            category: 'Clean & Direct',
            bestFor: 'Transportation, Logistics, Government, Enterprise Portals',
            conversionRate: '96%',
            complexity: 'Low',
            philosophy: 'Zero drop shadows, zero bevels, zero gradients. Crisp solid color fills, clean vector typography, and instantaneous load times across all low-bandwidth environments.',
            cssBlueprint: `background: #ffffff;\nborder-radius: 8px;\nborder: 2px solid #e2e8f0;\nbox-shadow: none;\nfont-family: 'Inter', sans-serif;`,
            headline: 'Pure Information Velocity With Zero Cognitive Burden.',
            desc: 'Engineered for instant scanning and rapid task completion. Perfect for dispatching fleets, managing visas, and processing millions of daily transactions.'
        },
        {
            id: 'material',
            name: 'Material Design (M3 / You)',
            themeClass: 'theme-material',
            number: '11',
            badge: 'DYNAMIC SYSTEM',
            iconSvg: STYLE_ICONS.material,
            category: 'Standard / Adaptive',
            bestFor: 'Enterprise Dashboards, Multi-Screen Portals, Android Apps',
            conversionRate: '98%',
            complexity: 'Systematic',
            philosophy: 'Google’s mature spatial metaphor. Surfaces float on defined elevation tokens (dp), responsive ripple touch physics, and dynamic color harmonization across themes.',
            cssBlueprint: `background: #ffffff;\nborder-radius: 24px;\nbox-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\nborder: 1px solid #e1e3e8;`,
            headline: 'Battle-Tested Google Design Language at Scale.',
            desc: 'Universally recognized navigation patterns that eliminate user onboarding friction across global consumer and enterprise platforms.'
        },
        {
            id: 'y2k',
            name: 'Y2K Cyber Millennium',
            themeClass: 'theme-y2k',
            number: '12',
            badge: 'CHROME NOSTALGIA',
            iconSvg: STYLE_ICONS.y2k,
            category: 'Nostalgic Retro',
            bestFor: 'Gen-Z Apparel, Streetwear, Record Labels, Music, Creative Studios',
            conversionRate: '91%',
            complexity: 'Complex',
            philosophy: 'The turn-of-the-millennium cyber optimism. Liquid mercury chrome gradients, bubbly translucent capsules, celestial starbursts, and retro-futuristic techno-fonts.',
            cssBlueprint: `background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(224, 231, 255, 0.8) 100%);\nborder: 2px solid #818cf8;\nborder-radius: 32px;\nbox-shadow: 0 10px 25px rgba(99, 102, 241, 0.25);`,
            headline: 'Liquid Chrome Euphoria for Forward-Thinking Creators.',
            desc: 'Tapping into the dominant global aesthetic zeitgeist of creative youth culture, nightlife, and digital apparel.'
        },
        {
            id: 'retro',
            name: 'Retro Synthwave (80s / 90s)',
            themeClass: 'theme-retro',
            number: '13',
            badge: 'NEON HORIZON',
            iconSvg: STYLE_ICONS.retro,
            category: 'Nostalgic Retro',
            bestFor: 'Gaming Studios, Podcasts, Hardware Enthusiasts, Arcades, Media',
            conversionRate: '94%',
            complexity: 'Vibrant',
            philosophy: 'Outrun neon horizons, glowing magenta wireframes, cyan laser rays, scanline CRT effects, and 80s arcade synth aesthetic.',
            cssBlueprint: `background: #1c0a3e;\nborder: 1px solid #ec4899;\nborder-radius: 16px;\nbox-shadow: 0 0 20px rgba(236, 72, 153, 0.35);`,
            headline: 'Laser-Charged Synthwave Nostalgia That Captivates.',
            desc: 'Immediately triggers retro gaming excitement and late-night aesthetic energy for communities that celebrate digital nostalgia.'
        },
        {
            id: 'cyberpunk',
            name: 'Cyberpunk 2077 HUD',
            themeClass: 'theme-cyberpunk',
            number: '14',
            badge: 'DYSTOPIAN HUD',
            iconSvg: STYLE_ICONS.cyberpunk,
            category: 'Futuristic Sci-Fi',
            bestFor: 'Web3, Cybersecurity, Crypto Trading, Esports, AI Hardware',
            conversionRate: '95%',
            complexity: 'Intricate',
            philosophy: 'High-density terminal wireframes, neon yellow and cyan chromatic aberration, glitch scanlines, diagnostic HUD telemetry, and chamfered corner buttons.',
            cssBlueprint: `background: #161922;\nborder-left: 4px solid #fcee0a;\nborder-top: 1px solid #00f0ff;\nborder-right: 1px solid #00f0ff;\nborder-bottom: 4px solid #00f0ff;\nborder-radius: 0;\nfont-family: 'JetBrains Mono', monospace;`,
            headline: 'High-Density Diagnostic Power for Elite Technical Audiences.',
            desc: 'Positions your platform as a mission-critical tactical instrument for engineers, traders, and cybersecurity operators.'
        },
        {
            id: 'editorial',
            name: 'Editorial Magazine (Swiss)',
            themeClass: 'theme-editorial',
            number: '15',
            badge: 'LITERARY PRESTIGE',
            iconSvg: STYLE_ICONS.editorial,
            category: 'Typography First',
            bestFor: 'Publishing, High-End Law, Architecture, Private Equity, Think Tanks',
            conversionRate: '97%',
            complexity: 'Refined',
            philosophy: 'The prestige of high-fashion print journalism. Sophisticated Playfair Display serifs, generous typographic margins, drop-caps, and refined editorial poise.',
            cssBlueprint: `background: #ffffff;\nborder: 1px solid #e7e5e4;\nborder-radius: 0;\nbox-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);\nfont-family: 'Playfair Display', serif;`,
            headline: 'Timeless Intellectual Prestige and Unshakable Authority.',
            desc: 'Commands high-ticket retainer engagements and establishes your executive team as authoritative industry thought leaders.'
        },
        {
            id: 'spatial',
            name: 'Spatial Computing (VisionOS)',
            themeClass: 'theme-spatial',
            number: '16',
            badge: 'VISIONOS AMBIENCE',
            iconSvg: STYLE_ICONS.spatial,
            category: 'Spatial / VisionOS',
            bestFor: 'AR/VR, Spatial Audio, 3D Visualization, Advanced Hardware',
            conversionRate: '97%',
            complexity: 'Advanced',
            philosophy: 'Glass panels floating in true 3D spatial coordinate space with dynamic specular rim lighting that reacts to the cursor, depth lensing, and specular reflections.',
            cssBlueprint: `background: rgba(255, 255, 255, 0.06);\nbackdrop-filter: blur(40px);\nborder: 1px solid rgba(255, 255, 255, 0.25);\nbox-shadow: 0 25px 60px rgba(0, 0, 0, 0.5),\n  inset 0 1px 0 rgba(255, 255, 255, 0.35);\nborder-radius: 28px;`,
            headline: 'The Next Computing Frontier Rendered on the Open Web.',
            desc: 'Future-proofs your brand for spatial headsets and holographic interfaces with fluid physics and ambient refractive depth.'
        },
        {
            id: 'luxury',
            name: 'Dark Stealth Luxury',
            themeClass: 'theme-luxury',
            number: '17',
            badge: 'STEALTH WEALTH',
            iconSvg: STYLE_ICONS.luxury,
            category: 'High-Ticket D2C',
            bestFor: 'Private Wealth, Supercars, High Jewelry, Concierge Services, Real Estate',
            conversionRate: '99%',
            complexity: 'Masterclass',
            philosophy: 'Deep obsidian titanium, brushed champagne gold hairline accents, whisper-quiet micro-interactions, and understated aristocratic poise.',
            cssBlueprint: `background: #101218;\nborder: 1px solid rgba(217, 119, 6, 0.3);\nbox-shadow: 0 20px 45px rgba(0, 0, 0, 0.7);\nborder-radius: 18px;`,
            headline: 'Understated Aristocratic Poise for High-Net-Worth Acquisitions.',
            desc: 'Speaks the quiet language of true luxury. Perfect for six-figure contracts, private jet charters, and flagship architectural estates.'
        },
        {
            id: 'customized',
            name: 'Customized Experiential 3D',
            themeClass: 'theme-customized',
            number: '18',
            badge: 'BESPOKE UNICORN',
            iconSvg: STYLE_ICONS.customized,
            category: 'Bespoke Experiential',
            bestFor: 'Global Conferences, Flagship Tech Brands, High-Growth Unicorns',
            conversionRate: '98%',
            complexity: 'Bespoke',
            philosophy: 'Bespoke WebGL particle shaders, dynamic interactive physics, scroll-linked storytelling, and custom brand design unconstrained by cookie-cutter templates.',
            cssBlueprint: `background: rgba(15, 23, 42, 0.65);\nbackdrop-filter: blur(20px);\nborder: 1px solid rgba(99, 102, 241, 0.35);\nborder-radius: 24px;\nbox-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);`,
            headline: 'Bespoke High-Stakes Storytelling Engineered for Market Dominance.',
            desc: 'Tailor-built from the ground up for iconic launches that demand viral global recognition and peerless brand prestige.'
        }
    ];

    // =========================================================================
    // 3. 14 COMMERCIAL INDUSTRY FRAMEWORKS
    // =========================================================================
    const INDUSTRY_VERTICALS = {
        'all': {
            name: 'All Industries & Use-Cases',
            iconSvg: INDUSTRY_ICONS.all,
            tag: 'GLOBAL DIGITAL ARCHITECTURE',
            headline: 'Architecting Unfair Digital Advantage for Every Industry.',
            desc: 'Explore how high-end design philosophies translate into quantifiable conversion surges and market authority across every commercial domain.',
            ctaText: 'Launch Project in this Style',
            stat1Val: '99.8%', stat1Lbl: 'Client Satisfaction',
            stat2Val: '100/100', stat2Lbl: 'Core Web Vitals'
        },
        'dental': {
            name: 'Dental, Clinics & Healthcare',
            iconSvg: INDUSTRY_ICONS.dental,
            tag: 'HEALTHCARE & CLINICAL EXCELLENCE',
            headline: 'ApexSmile Studio • Premier Dental & Aesthetic Medicine',
            desc: 'Transform patient anxiety into clinical confidence. High-trust medical UI with instantaneous online scheduling, virtual smile previews, and HIPAA-compliant patient intake.',
            ctaText: 'Book Clinical Consultation',
            stat1Val: '99.8%', stat1Lbl: 'Patient Satisfaction',
            stat2Val: '15 Min', stat2Lbl: 'Avg Check-in Time'
        },
        'ai': {
            name: 'AI Automation & Robotics',
            iconSvg: INDUSTRY_ICONS.ai,
            tag: 'AUTONOMOUS WORKFLOWS & ROBOTICS',
            headline: 'Omnisyn Autonomous Workflows & Robotic Systems',
            desc: 'Real-time telemetry dashboards, sub-120ms inference visualizers, and mission-critical API documentation engineered for multi-agent enterprise deployments.',
            ctaText: 'Deploy Autonomous Pipeline',
            stat1Val: '10.4x', stat1Lbl: 'Throughput Multiplier',
            stat2Val: '<120ms', stat2Lbl: 'Inference Latency'
        },
        'agency': {
            name: 'Digital Agency & Product Studios',
            iconSvg: INDUSTRY_ICONS.agency,
            tag: 'CREATIVE STUDIO & SPRINT ENGINE',
            headline: 'Vanguard Studios • High-Velocity Digital Engineering',
            desc: 'Showcase bold case studies, deterministic sprint guarantees, and interactive design deliverables that command premium enterprise retainer rates.',
            ctaText: 'Reserve Engineering Sprint',
            stat1Val: '21 Days', stat1Lbl: 'Avg Production Sprint',
            stat2Val: '3.8x', stat2Lbl: 'Client Valuation Lift'
        },
        'broker': {
            name: 'Real Estate Brokers & Wealth Advisory',
            iconSvg: INDUSTRY_ICONS.broker,
            tag: 'HIGH-TICKET PROPERTY & ADVISORY',
            headline: 'Elysian Estates • Sovereign Realty & Private Wealth',
            desc: 'Architectural property portfolios, virtual 3D floorplan walk-throughs, and discreet private investor portals for ultra-luxury residential and commercial acquisitions.',
            ctaText: 'Access Private Catalog',
            stat1Val: '₹140 Cr+', stat1Lbl: 'Portfolio Transacted',
            stat2Val: '100%', stat2Lbl: 'Discreet Vetting'
        },
        'education': {
            name: 'EdTech, Academies & Online Learning',
            iconSvg: INDUSTRY_ICONS.education,
            tag: 'IMMERSIVE LEARNING ECOSYSTEMS',
            headline: 'Novus Academy • Next-Gen Digital Masterclasses',
            desc: 'Gamified learning paths, interactive code editors, live Cohort leaderboards, and friction-free student admission funnels that maximize course completion rates.',
            ctaText: 'Enroll in Sprint Cohort',
            stat1Val: '94.2%', stat1Lbl: 'Course Completion',
            stat2Val: '4.9/5', stat2Lbl: 'Learner Rating'
        },
        'transportation': {
            name: 'Transportation & Global Logistics',
            iconSvg: INDUSTRY_ICONS.transportation,
            tag: 'SUPPLY CHAIN & FREIGHT NETWORK',
            headline: 'OmniRoute Global • Autonomous Freight & Vessel Routing',
            desc: 'Live container telemetry maps, automated freight quote calculators, and multi-modal fleet tracking portals optimized for zero-latency field operations.',
            ctaText: 'Request Instant Freight Quote',
            stat1Val: '99.98%', stat1Lbl: 'On-Time Dispatch',
            stat2Val: '42 Countries', stat2Lbl: 'Global Active Ports'
        },
        'visa': {
            name: 'Visa, Immigration & Global Mobility',
            iconSvg: INDUSTRY_ICONS.visa,
            tag: 'GLOBAL MOBILITY & CITIZENSHIP',
            headline: 'Aethelgard Mobility • Golden Visa & Residency Advisory',
            desc: 'Step-by-step points eligibility calculators, encrypted document vaults, and government submission tracking for international founders and investors.',
            ctaText: 'Check Visa Eligibility',
            stat1Val: '99.4%', stat1Lbl: 'Petition Approval',
            stat2Val: '48 Hrs', stat2Lbl: 'Legal Audit Speed'
        },
        'startups': {
            name: 'High-Velocity SaaS & Tech Startups',
            iconSvg: INDUSTRY_ICONS.startups,
            tag: 'HIGH-VELOCITY PRODUCT ENGINE',
            headline: 'HyperScale Cloud • The Developer-First Database',
            desc: 'Bento-grid feature matrices, interactive code snippet playground, and self-serve onboarding funnels that drive high developer product adoption.',
            ctaText: 'Start 14-Day Pro Trial',
            stat1Val: '100/100', stat1Lbl: 'Core Web Vitals',
            stat2Val: '3.2s', stat2Lbl: 'Time to First Value'
        },
        'portfolio': {
            name: 'Creator, Designer & Founder Portfolios',
            iconSvg: INDUSTRY_ICONS.portfolio,
            tag: 'EXECUTIVE BRAND & ADVISORY',
            headline: 'Alexander Vance • Product Architect & Angel Partner',
            desc: 'Minimalist editorial showcase highlighting high-stakes venture outcomes, design leadership, advisory slots, and curated speaking engagements.',
            ctaText: 'Schedule Advisory Call',
            stat1Val: '14 Exits', stat1Lbl: 'Advised Scaleups',
            stat2Val: '$2.4B', stat2Lbl: 'Combined Value'
        },
        'social': {
            name: 'Social Media & Influencer Management',
            iconSvg: INDUSTRY_ICONS.social,
            tag: 'VIRAL REACH & INFLUENCER TALENT',
            headline: 'PulseSphere Talent • Roster of Premier Digital Creators',
            desc: 'Dynamic media kits, verified audience demographic analytics, and rapid brand deal negotiation portals for top-tier creators and digital talent.',
            ctaText: 'Inquire Talent Booking',
            stat1Val: '42M+', stat1Lbl: 'Monthly Impressions',
            stat2Val: '8.4%', stat2Lbl: 'Avg Engagement'
        },
        'marketing': {
            name: 'Performance Marketing & SEO Agencies',
            iconSvg: INDUSTRY_ICONS.marketing,
            tag: 'HIGH-INTENT REVENUE GROWTH',
            headline: 'ApexScale Growth • Performance Paid Media & SEO',
            desc: 'Live ROAS dashboards, multi-touch attribution diagrams, and conversion rate optimization teardowns that justify high ad budget allocations.',
            ctaText: 'Claim Growth Audit',
            stat1Val: '4.8x', stat1Lbl: 'Average ROAS Lift',
            stat2Val: '#1 Ranks', stat2Lbl: '92% Core Keywords'
        },
        'routines': {
            name: 'Daily Routine, Health & Habit Apps',
            iconSvg: INDUSTRY_ICONS.routines,
            tag: 'DAILY HABITS & MINDFULNESS',
            headline: 'Chronos HabitOS • Daily Peak Human Performance',
            desc: 'Tactile habit rings, streak tracking, circular focus timers, and biometric health integrations designed for effortless daily micro-commitments.',
            ctaText: 'Download for iOS & Android',
            stat1Val: '4.9 Stars', stat1Lbl: 'App Store Rating',
            stat2Val: '82%', stat2Lbl: 'Day-30 Retention'
        },
        'ecommerce': {
            name: 'Luxury D2C & Curated E-Commerce',
            iconSvg: INDUSTRY_ICONS.ecommerce,
            tag: 'FLAGSHIP CURATED COMMERCE',
            headline: 'Atelier Maison • Handcrafted Objects of Desire',
            desc: 'High-resolution full-bleed product showcases, bespoke unboxing narratives, and frictionless Apple Pay checkout flows for luxury consumers.',
            ctaText: 'Explore Curated Collection',
            stat1Val: '0.8s', stat1Lbl: 'Checkout Speed',
            stat2Val: '99.2%', stat2Lbl: 'Flawless Delivery'
        }
    };

    // State
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

    // =========================================================================
    // 4. ANIMATED INTERACTIVE HERO BACKGROUND CANVAS (Geometric Constellation)
    // =========================================================================
    function initHeroMatrixCanvas() {
        const canvas = document.getElementById('hero-matrix-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
        let height = canvas.height = canvas.parentElement.offsetHeight || 500;

        let mouse = { x: -1000, y: -1000 };
        window.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });

        window.addEventListener('resize', () => {
            if (!canvas.parentElement) return;
            width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
            height = canvas.height = canvas.parentElement.offsetHeight || 500;
            initNodes();
        });

        let nodes = [];
        const nodeCount = Math.min(Math.floor(width / 24), 48);

        function initNodes() {
            nodes = [];
            for (let i = 0; i < nodeCount; i++) {
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.7,
                    vy: (Math.random() - 0.5) * 0.7,
                    radius: Math.random() * 2 + 1.5
                });
            }
        }
        initNodes();

        function drawMatrix() {
            ctx.clearRect(0, 0, width, height);

            const isDark = document.documentElement.getAttribute('data-theme') === 'dark' || document.body.classList.contains('dark-theme');
            const nodeColor = isDark ? 'rgba(99, 102, 241, 0.75)' : 'rgba(79, 70, 229, 0.55)';
            const lineColor = isDark ? 'rgba(99, 102, 241, ' : 'rgba(79, 70, 229, ';

            for (let i = 0; i < nodes.length; i++) {
                const n = nodes[i];
                n.x += n.vx;
                n.y += n.vy;

                if (n.x < 0 || n.x > width) n.vx *= -1;
                if (n.y < 0 || n.y > height) n.vy *= -1;

                // Mouse interaction
                const dxm = mouse.x - n.x;
                const dym = mouse.y - n.y;
                const distMouse = Math.sqrt(dxm * dxm + dym * dym);
                if (distMouse < 140) {
                    n.x -= (dxm / distMouse) * 0.8;
                    n.y -= (dym / distMouse) * 0.8;
                }

                ctx.beginPath();
                ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
                ctx.fillStyle = nodeColor;
                ctx.fill();

                // Draw filament connections
                for (let j = i + 1; j < nodes.length; j++) {
                    const n2 = nodes[j];
                    const dx = n.x - n2.x;
                    const dy = n.y - n2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        const alpha = (1 - dist / 120) * 0.22;
                        ctx.beginPath();
                        ctx.moveTo(n.x, n.y);
                        ctx.lineTo(n2.x, n2.y);
                        ctx.strokeStyle = lineColor + alpha + ')';
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(drawMatrix);
        }
        requestAnimationFrame(drawMatrix);
    }

    // =========================================================================
    // 5. KINETIC WORD ROTATOR IN HERO HEADLINE
    // =========================================================================
    function initHeroWordRotator() {
        const rotator = document.getElementById('styles-hero-rotator');
        if (!rotator) return;
        const words = rotator.querySelectorAll('.rotator-word');
        if (words.length <= 1) return;

        let currentIndex = 0;
        setInterval(() => {
            words[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % words.length;
            words[currentIndex].classList.add('active');
        }, 2600);
    }

    // =========================================================================
    // 6. RENDER ALL 18 SHOWCASE CARDS IN THE DIRECTORY (Official SVG Icons)
    // =========================================================================
    function renderShowcaseCards() {
        if (!stylesGrid) return;
        stylesGrid.innerHTML = '';

        STYLES_DATABASE.forEach((style) => {
            const card = document.createElement('div');
            card.className = 'style-item-card';
            card.setAttribute('data-style-id', style.id);
            card.setAttribute('data-category', style.category);

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
                        <span class="mini-tag" style="display:inline-flex; align-items:center; gap:4px;">
                            ${style.iconSvg} <span>${style.category}</span>
                        </span>
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
                            <span>Launch Live Demo &rarr;</span>
                        </button>
                        <a href="https://wa.me/917676808068?text=Hello%20ElavateX%2C%20I%20am%20interested%20in%20building%20my%20website%20in%20the%20${encodeURIComponent(style.name)}%20style." target="_blank" class="btn-book-style" title="Book this style on WhatsApp">
                            <span>Book Consultation</span>
                        </a>
                    </div>
                </div>
            `;
            stylesGrid.appendChild(card);
        });

        // Click to launch full demo
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

    // =========================================================================
    // 7. MASTER MORPHING SANDBOX ENGINE (Instant Live Transformation)
    // =========================================================================
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

        // Dynamic Text Insertion with Official SVG Icons
        if (sandboxTag) {
            sandboxTag.innerHTML = `
                <span style="display:inline-flex; align-items:center; gap:6px;">
                    ${styleObj.iconSvg} 
                    <span>${styleObj.name.toUpperCase()} &bull; ${indData.tag || 'ELAVATEX ARCHITECTURE'}</span>
                </span>
            `;
        }

        if (sandboxHeading) sandboxHeading.textContent = indData.headline || styleObj.headline;
        if (sandboxDesc) sandboxDesc.textContent = indData.desc || styleObj.desc;
        if (sandboxBtnCta) {
            sandboxBtnCta.innerHTML = `<span>${indData.ctaText || 'Launch Project in this Style'}</span> <span class="arrow">&rarr;</span>`;
        }
        
        if (sandboxStat1Val) sandboxStat1Val.textContent = indData.stat1Val || '99.8%';
        if (sandboxStat1Lbl) sandboxStat1Lbl.textContent = indData.stat1Lbl || 'User Engagement';
        if (sandboxStat2Val) sandboxStat2Val.textContent = indData.stat2Val || '100/100';
        if (sandboxStat2Lbl) sandboxStat2Lbl.textContent = indData.stat2Lbl || 'Core Web Vitals';

        // Update WhatsApp click handler
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

    // =========================================================================
    // 8. FULL-SCREEN INTERACTIVE DEMO MODAL (Device Breakpoint Viewports)
    // =========================================================================
    function openDemoModal(styleObj, industryKey = 'all') {
        if (!demoModal || !modalViewport) return;

        const indData = INDUSTRY_VERTICALS[industryKey] || INDUSTRY_VERTICALS['dental'];

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
                <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 2rem; border-bottom: 1px solid rgba(128, 128, 128, 0.25); margin-bottom: 3rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem; font-weight: 800; font-size: 1.25rem;">
                        <span style="display:inline-flex; align-items:center;">${indData.iconSvg}</span>
                        <span>${indData.name.split(',')[0]}</span>
                    </div>
                    <div style="display: flex; gap: 1rem; align-items: center;">
                        <button class="morph-btn" id="modal-inner-cta">${indData.ctaText || 'Get Started'}</button>
                    </div>
                </div>

                <!-- Hero Section -->
                <div style="text-align: center; margin-bottom: 4rem;">
                    <span style="display:inline-flex; align-items:center; gap:6px; font-size: 0.8rem; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; opacity: 0.85;">
                        ${styleObj.iconSvg} <span>${styleObj.name} Architectural Showcase</span>
                    </span>
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
                        <div style="margin-bottom: 0.75rem; color: var(--accent-cyan);">${STYLE_ICONS.bento}</div>
                        <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">${indData.stat1Val || 'Sub-Second'} Velocity</h3>
                        <p style="font-size: 0.88rem; opacity: 0.8;">Engineered with Zero-Bloat code and instantaneous TTFB responses that maximize search rankings.</p>
                    </div>
                    <div class="morph-card">
                        <div style="margin-bottom: 0.75rem; color: var(--accent-emerald);">${STYLE_ICONS.neobrutalism}</div>
                        <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">${indData.stat2Val || '100/100'} Performance</h3>
                        <p style="font-size: 0.88rem; opacity: 0.8;">Optimized user flows tailored specifically for high-intent customer acquisitions in ${indData.name.split(',')[0]}.</p>
                    </div>
                    <div class="morph-card">
                        <div style="margin-bottom: 0.75rem; color: var(--accent-purple);">${STYLE_ICONS.luxury}</div>
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

    // =========================================================================
    // 9. FILTERING & SEARCH CONTROLS
    // =========================================================================
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

    // =========================================================================
    // 10. STYLE MATCHMAKER QUIZ CONTROLLER
    // =========================================================================
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

            document.querySelectorAll(`.quiz-opt-btn[data-group="${group}"]`).forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            quizAnswers[group] = val;

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
            matchReason = `For high-ticket acquisitions in ${industry.toUpperCase()}, Stealth Luxury establishes instant credibility with champagne gold hairpins, deep obsidian titanium, and aristocratic poise.`;
        } else if (vibe === 'hightech' || industry === 'ai' || industry === 'startups') {
            recommendedStyleId = 'bento';
            matchReason = `Bento Grid UI organizes complex ${industry.toUpperCase()} architectures into modular, digestible micro-widgets with 100/100 Core Web Vitals performance.`;
        } else if (vibe === 'genz' || industry === 'social') {
            recommendedStyleId = 'neobrutalism';
            matchReason = `Neo-Brutalism commands attention with high-contrast outlines and vivid pastel pops, perfect for engaging modern digital natives and creators.`;
        } else if (vibe === 'clean' || industry === 'dental') {
            recommendedStyleId = 'glassmorphism';
            matchReason = `Glassmorphism delivers a sensation of clinical purity, multi-layer depth, and precision technology essential for medical and healthcare trust.`;
        } else if (vibe === 'editorial') {
            recommendedStyleId = 'editorial';
            matchReason = `Editorial Magazine typography positions your ${industry.toUpperCase()} firm as a high-authority cultural powerhouse with timeless sophistication.`;
        } else {
            recommendedStyleId = 'customized';
            matchReason = `A customized Experiential 3D hybrid blends WebGL immersion with clean conversion funnels uniquely designed for your brand.`;
        }

        const matchObj = STYLES_DATABASE.find(s => s.id === recommendedStyleId) || STYLES_DATABASE[0];

        if (quizResult && quizRecommendation && quizReasoning && quizCtaBtn) {
            quizRecommendation.innerHTML = `<span style="display:inline-flex; align-items:center; gap:8px;">${matchObj.iconSvg} <span>${matchObj.name} (#${matchObj.number})</span></span>`;
            quizReasoning.textContent = matchReason;
            quizCtaBtn.innerHTML = `<span>Preview ${matchObj.name} for My Project &rarr;</span>`;
            quizCtaBtn.onclick = () => {
                morphSandbox(matchObj, industry);
                document.getElementById('sandbox-section').scrollIntoView({ behavior: 'smooth' });
            };
            quizResult.style.display = 'block';
        }
    }

    // =========================================================================
    // 11. INITIALIZE ENGINES
    // =========================================================================
    initHeroMatrixCanvas();
    initHeroWordRotator();
    renderShowcaseCards();
    morphSandbox(STYLES_DATABASE[0], 'all');

});
