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
    // 4. ANIMATED SUNSHINE DUST PARTICLES & CANVAS ENGINE (#FFC928 on #1C1D20)
    // =========================================================================
    function initHeroMatrixCanvas() {
        const canvas = document.getElementById('hero-matrix-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const parent = canvas.parentElement || document.body;
        
        let width = 0;
        let height = 0;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        function resize() {
            width = parent.offsetWidth || window.innerWidth;
            height = parent.offsetHeight || 560;
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.scale(dpr, dpr);
            initDust();
        }

        let mouse = { x: -1000, y: -1000, active: false };
        window.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.active = (mouse.x >= 0 && mouse.x <= width && mouse.y >= 0 && mouse.y <= height);
        });

        window.addEventListener('mouseleave', () => {
            mouse.active = false;
        });

        window.addEventListener('resize', resize);

        let dustMotes = [];
        const dustCount = Math.min(Math.floor(window.innerWidth / 26), 46);

        function initDust() {
            dustMotes = [];
            for (let i = 0; i < dustCount; i++) {
                dustMotes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.3) * 0.45,
                    vy: (Math.random() * 0.4 + 0.1),
                    radius: Math.random() * 2 + 0.8,
                    alpha: Math.random() * 0.45 + 0.15,
                    pulse: Math.random() * Math.PI * 2,
                    isYellow: Math.random() > 0.35
                });
            }
        }

        resize();

        let isVisible = true;
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                isVisible = entries[0].isIntersecting;
            }, { threshold: 0.05 });
            observer.observe(parent);
        }

        let frameId;
        function drawDust() {
            if (!isVisible) {
                frameId = requestAnimationFrame(drawDust);
                return;
            }

            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < dustMotes.length; i++) {
                const m = dustMotes[i];
                m.x += m.vx;
                m.y += m.vy;
                m.pulse += 0.025;

                if (m.y > height) { m.y = 0; m.x = Math.random() * width; }
                if (m.x < 0) m.x = width;
                if (m.x > width) m.x = 0;

                // Mouse interaction
                if (mouse.active) {
                    const dx = mouse.x - m.x;
                    const dy = mouse.y - m.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        m.x -= (dx / dist) * 1.2;
                        m.y -= (dy / dist) * 1.2;
                    }
                }

                const currentAlpha = m.alpha * (0.6 + Math.sin(m.pulse) * 0.4);
                ctx.beginPath();
                ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
                ctx.fillStyle = m.isYellow ? `rgba(255, 201, 40, ${currentAlpha})` : `rgba(242, 244, 241, ${currentAlpha * 0.8})`;
                ctx.shadowColor = m.isYellow ? '#FFC928' : '#F2F4F1';
                ctx.shadowBlur = 8;
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            // Magnetic Cursor Glow
            if (mouse.active) {
                const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 140);
                grad.addColorStop(0, 'rgba(255, 201, 40, 0.12)');
                grad.addColorStop(0.6, 'rgba(28, 29, 32, 0.05)');
                grad.addColorStop(1, 'transparent');
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, 140, 0, Math.PI * 2);
                ctx.fill();
            }

            frameId = requestAnimationFrame(drawDust);
        }
        frameId = requestAnimationFrame(drawDust);
    }

    // =========================================================================
    // 4B. EDITORIAL HERO SURREAL HOTSPOTS & SLIDER ENGINE
    // =========================================================================
    function initEditorialHeroHotspots() {
        const pins = document.querySelectorAll('.surreal-pin');
        if (!pins || pins.length === 0) return;

        pins.forEach(pin => {
            const btn = pin.querySelector('.pin-marker');
            if (btn) {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const wasActive = pin.classList.contains('active');
                    pins.forEach(p => p.classList.remove('active'));
                    if (!wasActive) {
                        pin.classList.add('active');
                    }
                });
            }
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.surreal-pin')) {
                pins.forEach(p => p.classList.remove('active'));
            }
        });

        // Auto-showcase first pin initially to guide the user
        setTimeout(() => {
            if (pins[0] && !document.querySelector('.surreal-pin.active')) {
                pins[0].classList.add('active');
                setTimeout(() => {
                    pins[0].classList.remove('active');
                }, 3500);
            }
        }, 1200);
    }

    function initEditorialHeroSlider() {
        let activeIdx = 0;
        const counterEl = document.getElementById('hero-slider-counter');
        const prevBtn = document.getElementById('hero-arrow-prev');
        const nextBtn = document.getElementById('hero-arrow-next');

        function updateSlider(newIdx) {
            if (!STYLES_DATABASE || STYLES_DATABASE.length === 0) return;
            activeIdx = (newIdx + STYLES_DATABASE.length) % STYLES_DATABASE.length;
            if (counterEl) {
                counterEl.textContent = `${String(activeIdx + 1).padStart(2, '0')} — ${String(STYLES_DATABASE.length).padStart(2, '0')}`;
            }
            morphSandbox(STYLES_DATABASE[activeIdx], 'all');
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                updateSlider(activeIdx - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                updateSlider(activeIdx + 1);
            });
        }
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
    // 9. FLAGSHIP SHOWCASE 1: 2026 VIRTUAL CLOSET E-COMMERCE ENGINE
    // =========================================================================
    function initClosetEcommerce() {
        const railViewport = document.getElementById('closet-rail-viewport');
        const track = document.getElementById('closet-hangers-track');
        const prevBtn = document.getElementById('closet-prev-btn');
        const nextBtn = document.getElementById('closet-next-btn');
        const titleEl = document.getElementById('closet-product-title');
        const descEl = document.getElementById('closet-product-desc');
        const priceValEl = document.getElementById('closet-price-val');
        const priceInrEl = document.getElementById('closet-price-inr');
        const stockEl = document.getElementById('closet-stock-status');
        const catLabelEl = document.getElementById('closet-cat-label');
        const tagsCluster = document.getElementById('closet-color-tags');
        const flipFrontBtn = document.getElementById('closet-flip-front');
        const flipBackBtn = document.getElementById('closet-flip-back');
        const addBagBtn = document.getElementById('closet-add-bag-btn');
        const cartCountEl = document.getElementById('closet-cart-count');
        const cartPill = document.getElementById('closet-cart-pill');
        const toggleCodeBtn = document.getElementById('closet-toggle-code-btn');
        const codeDrawer = document.getElementById('closet-code-drawer');

        if (!track) return;

        let cartTotal = 0;
        let activeIdx = 0;
        let activeColor = 'black';
        let isBackView = false;

        const GARMENTS = [
            {
                id: 'vencedores',
                name: 'VENCEDORES MESH TANK TOP',
                cat: 'SUMMER 2026 RUNWAY',
                priceUsd: '$185 USD',
                priceInr: '₹4,999 INR',
                stock: '⚡ Only 3 units remaining in vault',
                desc: 'Micro-perforated 320 GSM polyester basketball jersey with authentic team crest, contrast rib-knit armholes, and hanging physical colorway tags.',
                colors: {
                    black: { hex: '#0a0a0a', trim: '#ffffff', label: 'Black' },
                    blue: { hex: '#1d4ed8', trim: '#ffffff', label: 'Royal Blue' },
                    emerald: { hex: '#059669', trim: '#fef08a', label: 'Emerald Green' }
                },
                number: '26',
                renderFront: (c) => `
                    <svg viewBox="0 0 240 320" class="garment-svg-wrap">
                        <defs>
                            <pattern id="meshPattern" width="6" height="6" patternUnits="userSpaceOnUse">
                                <circle cx="3" cy="3" r="0.8" fill="rgba(255,255,255,0.08)"/>
                            </pattern>
                            <linearGradient id="tankShade" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="${c.hex}" stop-opacity="0.9"/>
                                <stop offset="100%" stop-color="#000000" stop-opacity="0.95"/>
                            </linearGradient>
                        </defs>
                        <path d="M65,40 L90,40 C95,58 145,58 150,40 L175,40 C170,80 190,110 200,125 L190,305 C190,310 185,315 180,315 L60,315 C55,315 50,310 50,305 L40,125 C50,110 70,80 65,40 Z" fill="url(#tankShade)" stroke="${c.trim}" stroke-width="1.5"/>
                        <path d="M65,40 L90,40 C95,58 145,58 150,40 L175,40 C170,80 190,110 200,125 L190,305 L50,305 L40,125 C50,110 70,80 65,40 Z" fill="url(#meshPattern)"/>
                        <path d="M90,40 C95,60 145,60 150,40" fill="none" stroke="${c.trim}" stroke-width="4" stroke-linecap="round"/>
                        <path d="M65,40 C70,75 50,110 40,125" fill="none" stroke="${c.trim}" stroke-width="3.5"/>
                        <path d="M175,40 C170,75 190,110 200,125" fill="none" stroke="${c.trim}" stroke-width="3.5"/>
                        <path id="tankArc" d="M 65,135 Q 120,95 175,135" fill="none"/>
                        <text fill="${c.trim}" font-family="'Outfit', 'Space Grotesk', sans-serif" font-size="14" font-weight="900" letter-spacing="2">
                            <textPath href="#tankArc" startOffset="50%" text-anchor="middle">VENCEDORES</textPath>
                        </text>
                        <circle cx="120" cy="165" r="16" fill="none" stroke="${c.trim}" stroke-width="2"/>
                        <polygon points="120,154 125,164 115,164" fill="${c.trim}"/>
                        <circle cx="120" cy="172" r="2.5" fill="${c.trim}"/>
                        <text x="120" y="230" fill="${c.trim}" font-family="'Space Grotesk', monospace" font-size="42" font-weight="900" text-anchor="middle" opacity="0.95">26</text>
                        <line x1="58" y1="285" x2="58" y2="315" stroke="${c.trim}" stroke-width="2"/>
                        <line x1="182" y1="285" x2="182" y2="315" stroke="${c.trim}" stroke-width="2"/>
                    </svg>
                `,
                renderBack: (c) => `
                    <svg viewBox="0 0 240 320" class="garment-svg-wrap">
                        <path d="M65,40 L90,40 C95,50 145,50 150,40 L175,40 C170,80 190,110 200,125 L190,305 C190,310 185,315 180,315 L60,315 C55,315 50,310 50,305 L40,125 C50,110 70,80 65,40 Z" fill="${c.hex}" stroke="${c.trim}" stroke-width="1.5"/>
                        <path d="M90,40 C95,50 145,50 150,40" fill="none" stroke="${c.trim}" stroke-width="4" stroke-linecap="round"/>
                        <text x="120" y="115" fill="${c.trim}" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="900" letter-spacing="4" text-anchor="middle">ELAVATEX</text>
                        <text x="120" y="205" fill="${c.trim}" font-family="'Space Grotesk', monospace" font-size="74" font-weight="900" text-anchor="middle">26</text>
                        <rect x="92" y="270" width="56" height="18" rx="3" fill="none" stroke="${c.trim}" stroke-width="1.5"/>
                        <text x="120" y="282" fill="${c.trim}" font-family="monospace" font-size="7" font-weight="700" text-anchor="middle">ATELIER • 2026</text>
                    </svg>
                `
            },
            {
                id: 'suede',
                name: 'SUEDE MINIMALIST OVERSHIRT',
                cat: 'LUXURY TAILORING 2026',
                priceUsd: '$420 USD',
                priceInr: '₹11,999 INR',
                stock: '⚡ Only 4 units remaining in Tokyo salon',
                desc: 'Brushed Italian goat suede tailored overshirt with horn buttons, crisp folded collar, and dual flap utility chest pockets.',
                colors: {
                    camel: { hex: '#9a5c2b', trim: '#fef3c7', label: 'Camel Tan' },
                    espresso: { hex: '#3b2219', trim: '#d4b59e', label: 'Espresso' },
                    slate: { hex: '#475569', trim: '#f1f5f9', label: 'Slate Gray' }
                },
                number: '08',
                renderFront: (c) => `
                    <svg viewBox="0 0 240 320" class="garment-svg-wrap">
                        <path d="M50,55 L85,45 L120,60 L155,45 L190,55 L215,160 L185,170 L175,305 L65,305 L55,170 L25,160 Z" fill="${c.hex}" stroke="rgba(0,0,0,0.3)" stroke-width="1.5"/>
                        <polygon points="95,46 120,68 102,86" fill="#78350f"/>
                        <polygon points="145,46 120,68 138,86" fill="#78350f"/>
                        <line x1="120" y1="68" x2="120" y2="305" stroke="rgba(0,0,0,0.35)" stroke-width="2.5"/>
                        <circle cx="120" cy="105" r="3.5" fill="#1c1917" stroke="#a8a29e" stroke-width="1"/>
                        <circle cx="120" cy="145" r="3.5" fill="#1c1917" stroke="#a8a29e" stroke-width="1"/>
                        <circle cx="120" cy="185" r="3.5" fill="#1c1917" stroke="#a8a29e" stroke-width="1"/>
                        <circle cx="120" cy="225" r="3.5" fill="#1c1917" stroke="#a8a29e" stroke-width="1"/>
                        <circle cx="120" cy="265" r="3.5" fill="#1c1917" stroke="#a8a29e" stroke-width="1"/>
                        <rect x="75" y="115" width="32" height="36" rx="2" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="1.5"/>
                        <path d="M75,115 L91,124 L107,115" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="1.5"/>
                        <rect x="133" y="115" width="32" height="36" rx="2" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="1.5"/>
                        <path d="M133,115 L149,124 L165,115" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="1.5"/>
                    </svg>
                `,
                renderBack: (c) => `
                    <svg viewBox="0 0 240 320" class="garment-svg-wrap">
                        <path d="M50,55 L85,45 L120,50 L155,45 L190,55 L215,160 L185,170 L175,305 L65,305 L55,170 L25,160 Z" fill="${c.hex}" stroke="rgba(0,0,0,0.3)" stroke-width="1.5"/>
                        <path d="M55,100 Q 120,110 185,100" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="2"/>
                        <text x="120" y="150" fill="${c.trim}" font-family="'Playfair Display', serif" font-size="24" font-weight="700" font-style="italic" text-anchor="middle" opacity="0.6">EX</text>
                    </svg>
                `
            },
            {
                id: 'cyberpunk',
                name: 'CYBERPUNK TECHNICAL WINDBREAKER',
                cat: 'TECHWEAR 2026 CAPSULE',
                priceUsd: '$310 USD',
                priceInr: '₹8,499 INR',
                stock: '⚡ High velocity drop • Ships in 24h',
                desc: '3-Layer GORE-TEX waterproof shell with asymmetric neon heat-taped zippers, storm hood, and high-visibility reflective bands.',
                colors: {
                    black: { hex: '#0f141c', trim: '#00f0ff', label: 'Obsidian Cyan' },
                    silver: { hex: '#334155', trim: '#fcee0a', label: 'Titanium Yellow' },
                    neon: { hex: '#064e3b', trim: '#bef264', label: 'Cyber Lime' }
                },
                number: '77',
                renderFront: (c) => `
                    <svg viewBox="0 0 240 320" class="garment-svg-wrap">
                        <path d="M50,50 L90,40 L120,48 L150,40 L190,50 L225,170 L190,175 L180,310 L60,310 L50,175 L15,170 Z" fill="${c.hex}" stroke="${c.trim}" stroke-width="1.5"/>
                        <path d="M90,40 L95,65 L145,65 L150,40 Z" fill="#070a0e" stroke="${c.trim}" stroke-width="1.5"/>
                        <path d="M135,65 L110,310" stroke="${c.trim}" stroke-width="3" stroke-dasharray="6,2"/>
                        <rect x="65" y="110" width="36" height="52" rx="4" fill="#05080c" stroke="${c.trim}" stroke-width="1.5"/>
                        <line x1="70" y1="120" x2="96" y2="120" stroke="${c.trim}" stroke-width="2"/>
                        <text x="68" y="148" fill="${c.trim}" font-family="monospace" font-size="6" font-weight="800">// SYS-2026</text>
                        <line x1="22" y1="135" x2="44" y2="130" stroke="${c.trim}" stroke-width="3"/>
                        <line x1="196" y1="130" x2="218" y2="135" stroke="${c.trim}" stroke-width="3"/>
                    </svg>
                `,
                renderBack: (c) => `
                    <svg viewBox="0 0 240 320" class="garment-svg-wrap">
                        <path d="M50,50 L90,40 L120,48 L150,40 L190,50 L225,170 L190,175 L180,310 L60,310 L50,175 L15,170 Z" fill="${c.hex}" stroke="${c.trim}" stroke-width="1.5"/>
                        <polygon points="120,110 160,165 80,165" fill="none" stroke="${c.trim}" stroke-width="3"/>
                        <circle cx="120" cy="145" r="12" fill="none" stroke="${c.trim}" stroke-width="2"/>
                        <text x="120" y="215" fill="${c.trim}" font-family="monospace" font-size="24" font-weight="900" letter-spacing="4" text-anchor="middle">NEO-77</text>
                    </svg>
                `
            },
            {
                id: 'hoodie',
                name: 'VINTAGE HEAVYWEIGHT BOXY HOODIE',
                cat: 'ESSENTIAL STREETWEAR',
                priceUsd: '$220 USD',
                priceInr: '₹5,999 INR',
                stock: '⚡ Vault low • 3 pieces remaining',
                desc: 'Custom 500 GSM French Terry cotton hoodie with vintage acid stone enzyme wash, clean seamless hood, and kangaroo pouch pocket.',
                colors: {
                    indigo: { hex: '#312e81', trim: '#c7d2fe', label: 'Vintage Indigo' },
                    charcoal: { hex: '#1e293b', trim: '#94a3b8', label: 'Washed Charcoal' },
                    olive: { hex: '#365314', trim: '#bef264', label: 'Military Olive' }
                },
                number: '14',
                renderFront: (c) => `
                    <svg viewBox="0 0 240 320" class="garment-svg-wrap">
                        <path d="M45,65 L85,45 C95,35 145,35 155,45 L195,65 L230,175 L190,185 L185,305 L55,305 L50,185 L10,175 Z" fill="${c.hex}" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
                        <path d="M85,45 C95,20 145,20 155,45 C150,70 90,70 85,45 Z" fill="#1e1b4b" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
                        <path d="M75,230 L165,230 L160,290 L80,290 Z" fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
                        <rect x="55" y="295" width="130" height="12" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
                        <text x="120" y="145" fill="${c.trim}" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="800" letter-spacing="3" text-anchor="middle">ELAVATEX ARCHIVES</text>
                    </svg>
                `,
                renderBack: (c) => `
                    <svg viewBox="0 0 240 320" class="garment-svg-wrap">
                        <path d="M45,65 L85,45 C95,35 145,35 155,45 L195,65 L230,175 L190,185 L185,305 L55,305 L50,185 L10,175 Z" fill="${c.hex}" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
                        <text x="120" y="190" fill="${c.trim}" font-family="'Outfit', sans-serif" font-size="52" font-weight="900" text-anchor="middle" opacity="0.85">2026</text>
                    </svg>
                `
            },
            {
                id: 'runway',
                name: 'AVANT-GARDE RED RUNWAY GOWN',
                cat: 'COUTURE ATELIER EXCLUSIVE',
                priceUsd: '$540 USD',
                priceInr: '₹14,999 INR',
                stock: '⚡ Made to order • Hand-finished in atelier',
                desc: 'Fluid asymmetric double jersey with sculptural draped collar, raw-cut high-contrast hemline, and red carpet presence.',
                colors: {
                    crimson: { hex: '#dc2626', trim: '#ffffff', label: 'Crimson Scarlet' },
                    onyx: { hex: '#0f172a', trim: '#e2e8f0', label: 'Obsidian Night' },
                    gold: { hex: '#854d0e', trim: '#fef08a', label: 'Vintage Gold' }
                },
                number: '01',
                renderFront: (c) => `
                    <svg viewBox="0 0 240 320" class="garment-svg-wrap">
                        <path d="M70,40 L100,35 C110,50 130,50 140,35 L170,40 L185,130 L165,140 L205,315 L45,310 L75,140 L55,130 Z" fill="${c.hex}" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
                        <path d="M100,35 Q 120,180 205,315" fill="none" stroke="rgba(0,0,0,0.35)" stroke-width="3"/>
                        <text x="120" y="160" fill="${c.trim}" font-family="'Playfair Display', serif" font-size="14" font-weight="700" letter-spacing="2" text-anchor="middle">PARIS RUNWAY</text>
                    </svg>
                `,
                renderBack: (c) => `
                    <svg viewBox="0 0 240 320" class="garment-svg-wrap">
                        <path d="M70,40 L100,35 C110,45 130,45 140,35 L170,40 L185,130 L165,140 L205,315 L45,310 L75,140 L55,130 Z" fill="${c.hex}" stroke="rgba(255,255,255,0.3)" stroke-width="1.5"/>
                        <text x="120" y="180" fill="${c.trim}" font-family="'Space Grotesk', sans-serif" font-size="42" font-weight="900" text-anchor="middle">01</text>
                    </svg>
                `
            },
            {
                id: 'track',
                name: 'COBALT PRO ATHLEISURE TRACK TOP',
                cat: 'AERODYNAMIC MOBILITY 2026',
                priceUsd: '$165 USD',
                priceInr: '₹4,499 INR',
                stock: '⚡ In stock • Immediate dispatch',
                desc: 'Quarter-zip technical training top with laser-cut underarm ventilation, geometric paneling, and brushed moisture-wicking fleece lining.',
                colors: {
                    cobalt: { hex: '#1e40af', trim: '#38bdf8', label: 'Cobalt Blue' },
                    white: { hex: '#e2e8f0', trim: '#0f172a', label: 'Pure White' },
                    crimson: { hex: '#991b1b', trim: '#fecaca', label: 'Crimson Red' }
                },
                number: '99',
                renderFront: (c) => `
                    <svg viewBox="0 0 240 320" class="garment-svg-wrap">
                        <path d="M50,55 L85,45 L120,50 L155,45 L190,55 L225,160 L185,170 L175,305 L65,305 L55,170 L15,160 Z" fill="${c.hex}" stroke="${c.trim}" stroke-width="1.5"/>
                        <path d="M95,45 L95,65 L145,65 L145,45 Z" fill="rgba(0,0,0,0.3)" stroke="${c.trim}" stroke-width="1.5"/>
                        <line x1="120" y1="65" x2="120" y2="150" stroke="${c.trim}" stroke-width="2.5"/>
                        <polygon points="65,150 120,185 175,150 175,170 120,205 65,170" fill="rgba(255,255,255,0.15)"/>
                        <text x="120" y="260" fill="${c.trim}" font-family="'Space Grotesk', sans-serif" font-size="28" font-weight="900" text-anchor="middle">99</text>
                    </svg>
                `,
                renderBack: (c) => `
                    <svg viewBox="0 0 240 320" class="garment-svg-wrap">
                        <path d="M50,55 L85,45 L120,50 L155,45 L190,55 L225,160 L185,170 L175,305 L65,305 L55,170 L15,160 Z" fill="${c.hex}" stroke="${c.trim}" stroke-width="1.5"/>
                        <text x="120" y="160" fill="${c.trim}" font-family="monospace" font-size="14" font-weight="800" letter-spacing="3" text-anchor="middle">PRO RUNNER 26</text>
                    </svg>
                `
            }
        ];

        function renderRack() {
            track.innerHTML = '';
            GARMENTS.forEach((item, idx) => {
                const wrapper = document.createElement('div');
                wrapper.className = `closet-garment-wrapper garment-item-${idx}`;
                if (idx === activeIdx) wrapper.classList.add('garment-active');
                else if (Math.abs(idx - activeIdx) === 1) wrapper.classList.add('garment-step-1');
                else wrapper.classList.add('garment-step-2');

                const currentColorObj = item.colors[activeColor] || Object.values(item.colors)[0];

                wrapper.innerHTML = `
                    <div class="closet-hanger-head">
                        <div class="hanger-metal-hook"></div>
                        <div class="hanger-wooden-body">
                            <div class="hanger-wooden-notch"></div>
                        </div>
                    </div>
                    <div class="garment-flipper">
                        <div class="garment-face face-front">
                            ${item.renderFront(currentColorObj)}
                        </div>
                        <div class="garment-face face-back">
                            ${item.renderBack(currentColorObj)}
                        </div>
                    </div>
                `;

                if (idx === activeIdx) {
                    const tagCluster = document.createElement('div');
                    tagCluster.className = 'hanging-tags-cluster';
                    tagCluster.id = 'active-hanging-tags';

                    Object.keys(item.colors).forEach(cKey => {
                        const cObj = item.colors[cKey];
                        const tagAssy = document.createElement('div');
                        tagAssy.className = `tag-assembly ${cKey === activeColor ? 'active-tag' : ''}`;
                        tagAssy.innerHTML = `
                            <div class="tag-thread"></div>
                            <div class="tag-badge tag-${cKey}" style="background:${cObj.hex};">${cObj.label.split(' ')[0].toUpperCase()}</div>
                        `;
                        tagAssy.addEventListener('click', (e) => {
                            e.stopPropagation();
                            selectColorway(cKey);
                        });
                        tagCluster.appendChild(tagAssy);
                    });

                    wrapper.appendChild(tagCluster);
                }

                wrapper.addEventListener('click', () => {
                    if (activeIdx !== idx) {
                        selectGarment(idx);
                    }
                });

                track.appendChild(wrapper);
            });

            updateSlidePosition();
            updateTrayDetails();
        }

        function updateSlidePosition() {
            if (!railViewport || !track) return;
            const viewportWidth = railViewport.offsetWidth || window.innerWidth;
            const isMobile = window.innerWidth <= 768;
            const itemWidth = isMobile ? 180 : 240;
            const itemGap = isMobile ? 20 : 30;
            const stride = itemWidth + itemGap;
            const centerOffset = (viewportWidth / 2) - ((activeIdx * stride) + (itemWidth / 2));
            track.style.transform = `translateX(${centerOffset}px)`;

            document.querySelectorAll('.closet-garment-wrapper').forEach((el, idx) => {
                el.classList.remove('garment-active', 'garment-step-1', 'garment-step-2');
                const diff = Math.abs(idx - activeIdx);
                if (diff === 0) el.classList.add('garment-active');
                else if (diff === 1) el.classList.add('garment-step-1');
                else el.classList.add('garment-step-2');

                if (idx === activeIdx && isBackView) {
                    el.classList.add('is-back-view');
                } else {
                    el.classList.remove('is-back-view');
                }
            });
        }

        function updateTrayDetails() {
            const currentItem = GARMENTS[activeIdx];
            if (!currentItem) return;

            if (titleEl) titleEl.textContent = currentItem.name;
            if (descEl) descEl.textContent = currentItem.desc;
            if (priceValEl) priceValEl.textContent = currentItem.priceUsd;
            if (priceInrEl) priceInrEl.textContent = currentItem.priceInr;
            if (stockEl) stockEl.textContent = currentItem.stock;
            if (catLabelEl) catLabelEl.textContent = currentItem.cat;

            if (tagsCluster) {
                tagsCluster.innerHTML = '';
                Object.keys(currentItem.colors).forEach(cKey => {
                    const cObj = currentItem.colors[cKey];
                    const pill = document.createElement('button');
                    pill.className = `tray-color-pill ${cKey === activeColor ? 'active' : ''}`;
                    pill.innerHTML = `<span style="width:10px; height:10px; border-radius:50%; background:${cObj.hex}; border:1px solid rgba(255,255,255,0.4);"></span> <span>${cObj.label}</span>`;
                    pill.addEventListener('click', () => selectColorway(cKey));
                    tagsCluster.appendChild(pill);
                });
            }
        }

        function selectGarment(idx) {
            activeIdx = idx;
            isBackView = false;
            if (flipFrontBtn) flipFrontBtn.classList.add('active');
            if (flipBackBtn) flipBackBtn.classList.remove('active');
            renderRack();
        }

        function selectColorway(cKey) {
            activeColor = cKey;
            document.querySelectorAll('.tag-assembly').forEach(t => {
                t.classList.add('swinging');
                setTimeout(() => t.classList.remove('swinging'), 700);
            });
            renderRack();
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (activeIdx > 0) selectGarment(activeIdx - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (activeIdx < GARMENTS.length - 1) selectGarment(activeIdx + 1);
            });
        }

        if (flipFrontBtn && flipBackBtn) {
            flipFrontBtn.addEventListener('click', () => {
                isBackView = false;
                flipFrontBtn.classList.add('active');
                flipBackBtn.classList.remove('active');
                const activeWrapper = document.querySelector('.closet-garment-wrapper.garment-active');
                if (activeWrapper) activeWrapper.classList.remove('is-back-view');
            });

            flipBackBtn.addEventListener('click', () => {
                isBackView = true;
                flipBackBtn.classList.add('active');
                flipFrontBtn.classList.remove('active');
                const activeWrapper = document.querySelector('.closet-garment-wrapper.garment-active');
                if (activeWrapper) activeWrapper.classList.add('is-back-view');
            });
        }

        if (addBagBtn && cartCountEl && cartPill) {
            addBagBtn.addEventListener('click', () => {
                cartTotal++;
                cartCountEl.textContent = cartTotal;
                cartPill.classList.add('cart-bump');
                const origText = addBagBtn.innerHTML;
                addBagBtn.innerHTML = `<span>Added to Wardrobe! ✓</span>`;
                addBagBtn.style.background = '#10b981';

                setTimeout(() => {
                    cartPill.classList.remove('cart-bump');
                    addBagBtn.innerHTML = origText;
                    addBagBtn.style.background = '';
                }, 1600);
            });
        }

        if (toggleCodeBtn && codeDrawer) {
            toggleCodeBtn.addEventListener('click', () => {
                const isHidden = codeDrawer.style.display === 'none';
                codeDrawer.style.display = isHidden ? 'block' : 'none';
                toggleCodeBtn.classList.toggle('active', isHidden);
            });
        }

        let touchStartX = 0;
        if (railViewport) {
            railViewport.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].clientX;
            }, { passive: true });

            railViewport.addEventListener('touchend', (e) => {
                const diffX = e.changedTouches[0].clientX - touchStartX;
                if (diffX > 45 && activeIdx > 0) {
                    selectGarment(activeIdx - 1);
                } else if (diffX < -45 && activeIdx < GARMENTS.length - 1) {
                    selectGarment(activeIdx + 1);
                }
            }, { passive: true });
        }

        window.addEventListener('resize', updateSlidePosition);
        renderRack();
    }

    // =========================================================================
    // 10. FLAGSHIP SHOWCASE 2: GLASSY LIQUID NAVIGATION LAB (V5)
    // =========================================================================
    function initGlassyNavLab() {
        const archBtns = document.querySelectorAll('.glassy-arch-btn');
        const barContainer = document.getElementById('glassy-bar-container');
        const screenContent = document.getElementById('device-screen-content');
        const archDescEl = document.getElementById('glassy-arch-desc');
        const activeTabLbl = document.getElementById('glassy-active-tab-label');
        const codePreEl = document.getElementById('glassy-code-content');

        if (!barContainer) return;

        let currentArch = 'v1';
        let currentTab = 'home';

        const ARCHITECTURES = {
            v1: {
                title: 'V1: Neo-Arc Center Curve (Neon Cyan)',
                desc: 'Continuous translucent glass capsule with organic center curve cutout cradling a glowing cyan neon + Create action button.',
                blur: '28px (Hardware GPU)',
                glow: '100% Electric Cyan (#00f0ff)',
                code: `// V1: Neo-Arc Glowing Center Glass Bar\n<nav className="relative flex items-center justify-between rounded-full bg-white/10 px-6 py-3 shadow-2xl backdrop-blur-xl border border-white/20">\n  <TabItem icon={Home} label="Home" active />\n  <TabItem icon={Search} label="Search" />\n  <CenterArcButton icon={Plus} label="Create" glowColor="#00f0ff" />\n  <TabItem icon={Inbox} label="Inbox" badge={2} />\n  <TabItem icon={Bookmark} label="Saved" />\n</nav>`
            },
            v2: {
                title: 'V2: Holographic Spotlight Focus (From Images 1&2)',
                desc: 'Translucent dark glass bar with a dynamic holographic light cone beam that tracks and illuminates the active tab with intense cyan radiance.',
                blur: '32px (Spotlight Focus)',
                glow: 'Dynamic Cone Radiance',
                code: `// V2: Holographic Spotlight Beam Navigation\n<div className="relative flex items-center justify-around rounded-full bg-slate-900/80 p-3 backdrop-blur-2xl border border-white/10">\n  {/* Animated Light Cone Beam */}\n  <motion.div \n    className="absolute -top-6 h-12 w-14 bg-gradient-to-b from-cyan-400/60 to-transparent"\n    style={{ clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)' }}\n    animate={{ x: activeTabOffset }}\n  />\n  <TabButton icon={Home} active={tab==='home'} />\n  <TabButton icon={Heart} active={tab==='likes'} />\n  <TabButton icon={Plus} active={tab==='add'} />\n  <TabButton icon={User} active={tab==='profile'} />\n  <TabButton icon={Bell} active={tab==='alerts'} />\n</div>`
            },
            v3: {
                title: 'V3: Liquid Droplet Morph',
                desc: 'Organic liquid glass bar with a fluid morphing droplet pill that flows seamlessly across icons with spring damping physics.',
                blur: '24px (Liquid Droplet)',
                glow: 'Fluid Spring Physics',
                code: `// V3: Liquid Droplet Morphing Navigation\n<nav className="relative flex items-center justify-between rounded-full bg-white/10 px-4 py-2 backdrop-blur-xl border border-white/20">\n  <motion.div \n    layoutId="liquidDroplet"\n    className="absolute h-10 w-10 rounded-full bg-sky-500/25 border border-sky-400 shadow-[0_0_15px_#38bdf8]"\n    transition={{ type: 'spring', stiffness: 350, damping: 25 }}\n  />\n  <TabItem icon={Home} />\n  <TabItem icon={Compass} />\n  <TabItem icon={Plus} />\n  <TabItem icon={MessageCircle} />\n  <TabItem icon={User} />\n</nav>`
            },
            v4: {
                title: 'V4: Champagne Floating Island',
                desc: 'Warm frosted glass capsule paired with an elevated detached circular action orb hovering above the navigation bar in 3D space.',
                blur: '30px (Amber Frost)',
                glow: 'Champagne Warmth (#f59e0b)',
                code: `// V4: Champagne Floating Island Navigation\n<div className="relative flex items-center justify-between rounded-full bg-amber-100/30 px-6 py-2.5 backdrop-blur-2xl border border-white/50 text-stone-900">\n  <TabItem icon={Home} label="Home" />\n  <TabItem icon={Heart} label="Likes" />\n  {/* Floating Detached Orb */}\n  <div className="-mt-6 flex h-11 w-11 items-center justify-center rounded-full bg-amber-800 text-white shadow-lg border-2 border-white">\n    <Plus size={18} />\n  </div>\n  <TabItem icon={User} label="Profile" />\n  <TabItem icon={Bell} label="Alerts" />\n</div>`
            }
        };

        const SCREENS = {
            home: `
                <div class="mini-dashboard-card">
                    <div class="card-stat-header">
                        <span style="font-size:0.75rem; font-weight:700; color:#94a3b8; text-transform:uppercase; letter-spacing:1px;">Active Engine Telemetry</span>
                        <span class="stat-pill-badge">+34% Lift</span>
                    </div>
                    <div class="stat-main-number" style="font-size:1.6rem; color:#ffffff;">$64,850 ARR</div>
                    <div style="font-size:0.72rem; color:#cbd5e1; margin-bottom:0.6rem;">14 Live Production Deployments • 100/100 Vitals</div>
                    <div style="height:28px; display:flex; align-items:flex-end; gap:5px;">
                        <div style="flex:1; height:35%; background:#818cf8; border-radius:3px;"></div>
                        <div style="flex:1; height:55%; background:#818cf8; border-radius:3px;"></div>
                        <div style="flex:1; height:45%; background:#818cf8; border-radius:3px;"></div>
                        <div style="flex:1; height:75%; background:#818cf8; border-radius:3px;"></div>
                        <div style="flex:1; height:65%; background:#818cf8; border-radius:3px;"></div>
                        <div style="flex:1; height:90%; background:#38bdf8; border-radius:3px;"></div>
                        <div style="flex:1; height:100%; background:#00f0ff; border-radius:3px; box-shadow:0 0 10px #00f0ff;"></div>
                    </div>
                </div>
                <div class="mini-dashboard-card" style="background:rgba(15,23,42,0.6); border-color:rgba(255,255,255,0.12);">
                    <div style="font-size:0.72rem; font-weight:800; color:#38bdf8; text-transform:uppercase; margin-bottom:0.4rem; letter-spacing:1px;">Core Service Modules</div>
                    <div style="display:flex; flex-direction:column; gap:6px; font-size:0.72rem;">
                        <div style="display:flex; justify-content:space-between; align-items:center; padding:4px 6px; background:rgba(255,255,255,0.05); border-radius:6px;">
                            <span style="color:#ffffff; font-weight:600;">🌐 Web Engineering</span>
                            <span style="color:#10b981; font-weight:700;">100/100</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center; padding:4px 6px; background:rgba(255,255,255,0.05); border-radius:6px;">
                            <span style="color:#ffffff; font-weight:600;">📱 Mobile Apps</span>
                            <span style="color:#38bdf8; font-weight:700;">60 FPS</span>
                        </div>
                        <div style="display:flex; justify-content:space-between; align-items:center; padding:4px 6px; background:rgba(255,255,255,0.05); border-radius:6px;">
                            <span style="color:#ffffff; font-weight:600;">🚀 Social Growth</span>
                            <span style="color:#ec4899; font-weight:700;">+4.8x ROAS</span>
                        </div>
                    </div>
                </div>
            `,
            search: `
                <div class="mini-dashboard-card">
                    <div style="font-weight:800; font-size:0.88rem; margin-bottom:0.6rem; color:#ffffff;">Aesthetic Style Filter</div>
                    <div style="display:flex; flex-wrap:wrap; gap:5px; margin-bottom:0.8rem;">
                        <span style="padding:3px 8px; border-radius:999px; background:rgba(0,240,255,0.18); border:1px solid #00f0ff; color:#00f0ff; font-size:0.68rem; font-weight:700;">#Glassmorphism</span>
                        <span style="padding:3px 8px; border-radius:999px; background:rgba(255,255,255,0.08); font-size:0.68rem; color:#e2e8f0;">#BentoUI</span>
                        <span style="padding:3px 8px; border-radius:999px; background:rgba(255,255,255,0.08); font-size:0.68rem; color:#e2e8f0;">#2026Closet</span>
                        <span style="padding:3px 8px; border-radius:999px; background:rgba(255,255,255,0.08); font-size:0.68rem; color:#e2e8f0;">#Cyberpunk</span>
                    </div>
                    <div style="font-size:0.72rem; color:#94a3b8; line-height:1.4;">Tap any design category to preview live shaders and physics in our sandbox.</div>
                </div>
                <div class="mini-dashboard-card" style="background:rgba(2,132,199,0.12); border-color:rgba(2,132,199,0.3);">
                    <div style="font-size:0.75rem; font-weight:700; color:#38bdf8; margin-bottom:0.25rem;">18 Verified Aesthetics</div>
                    <div style="font-size:0.7rem; color:#cbd5e1;">Available for Healthcare, Clinics, FinTech, & E-Commerce.</div>
                </div>
            `,
            create: `
                <div class="mini-dashboard-card" style="text-align:center; padding:1.5rem 1rem;">
                    <div style="width:40px; height:40px; border-radius:50%; background:linear-gradient(135deg, #0284c7, #2563eb); color:#ffffff; display:flex; align-items:center; justify-content:center; margin:0 auto 0.6rem; box-shadow:0 0 15px rgba(2,132,199,0.5);">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    </div>
                    <div style="font-weight:900; font-size:1rem; margin-bottom:0.3rem; color:#ffffff;">Deploy Custom MVP</div>
                    <p style="font-size:0.72rem; opacity:0.85; margin-bottom:0.9rem; color:#cbd5e1;">Architect your platform with ElavateX engineering team in 48 hours.</p>
                    <a href="https://wa.me/917676808068?text=Hello%20ElavateX%2C%20I%20am%20testing%20your%20Glassy%20Navigation%20and%20want%20to%20launch%20my%20MVP." target="_blank" style="display:inline-block; font-size:0.75rem; font-weight:800; padding:0.5rem 1.2rem; background:#00f0ff; color:#0f172a; border-radius:999px; text-decoration:none; box-shadow:0 0 15px rgba(0,240,255,0.5);">Launch on WhatsApp &rarr;</a>
                </div>
            `,
            inbox: `
                <div class="mini-dashboard-card">
                    <div style="font-weight:800; font-size:0.85rem; margin-bottom:0.6rem; color:#ffffff; display:flex; justify-content:space-between;">
                        <span>Inbound Pipeline</span>
                        <span style="font-size:0.68rem; color:#10b981; font-weight:700;">● Active</span>
                    </div>
                    <div style="font-size:0.72rem; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:6px; margin-bottom:6px;">
                        <div style="font-weight:700; color:#38bdf8;">Dr. Miller • Dental Clinic</div>
                        <div style="opacity:0.75; color:#cbd5e1;">"Requested Glassmorphism MVP consultation"</div>
                    </div>
                    <div style="font-size:0.72rem; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:6px; margin-bottom:6px;">
                        <div style="font-weight:700; color:#10b981;">Apex Capital • Brokerage</div>
                        <div style="opacity:0.75; color:#cbd5e1;">"Bento Grid UI review scheduled"</div>
                    </div>
                    <div style="font-size:0.72rem;">
                        <div style="font-weight:700; color:#ec4899;">Vencedores • Atelier 2026</div>
                        <div style="opacity:0.75; color:#cbd5e1;">"Virtual Closet 3D rail active"</div>
                    </div>
                </div>
            `,
            saved: `
                <div class="mini-dashboard-card">
                    <div style="font-weight:800; font-size:0.85rem; margin-bottom:0.6rem; color:#ffffff;">Curated Architectural Blueprints</div>
                    <div style="display:flex; flex-direction:column; gap:6px; font-size:0.72rem;">
                        <div style="background:rgba(255,255,255,0.05); padding:6px 8px; border-radius:6px; border:1px solid rgba(255,255,255,0.08);">
                            <div style="font-weight:700; color:#38bdf8;">1. Glassmorphism 2.0</div>
                            <div style="color:#94a3b8; font-size:0.66rem;">28px hardware-accelerated backdrop blur</div>
                        </div>
                        <div style="background:rgba(255,255,255,0.05); padding:6px 8px; border-radius:6px; border:1px solid rgba(255,255,255,0.08);">
                            <div style="font-weight:700; color:#818cf8;">2. Bento Grid Enterprise</div>
                            <div style="color:#94a3b8; font-size:0.66rem;">Modular high-concurrency SaaS dashboard</div>
                        </div>
                        <div style="background:rgba(255,255,255,0.05); padding:6px 8px; border-radius:6px; border:1px solid rgba(255,255,255,0.08);">
                            <div style="font-weight:700; color:#f59e0b;">3. Clothes Closet 2026</div>
                            <div style="color:#94a3b8; font-size:0.66rem;">3D horizontal rail e-commerce engine</div>
                        </div>
                    </div>
                </div>
            `
        };

        function renderBar() {
            if (currentArch === 'v1') {
                barContainer.innerHTML = `
                    <div class="glass-tab-bar-v1">
                        <button class="v1-tab-btn ${currentTab === 'home' ? 'active' : ''}" data-tab="home">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                            <span>Home</span>
                        </button>
                        <button class="v1-tab-btn ${currentTab === 'search' ? 'active' : ''}" data-tab="search">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                            <span>Search</span>
                        </button>
                        <button class="v1-center-arc-btn" data-tab="create" title="Create New Project">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                        </button>
                        <button class="v1-tab-btn ${currentTab === 'inbox' ? 'active' : ''}" data-tab="inbox">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            <span>Inbox</span>
                        </button>
                        <button class="v1-tab-btn ${currentTab === 'saved' ? 'active' : ''}" data-tab="saved">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                            <span>Saved</span>
                        </button>
                    </div>
                `;
            } else if (currentArch === 'v2') {
                barContainer.innerHTML = `
                    <div class="glass-tab-bar-v2" id="glass-bar-v2">
                        <div class="holographic-light-cone" id="v2-light-cone" style="left: 18px;"></div>
                        <button class="v2-tab-btn ${currentTab === 'home' ? 'active' : ''}" data-tab="home" title="Home">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                        </button>
                        <button class="v2-tab-btn ${currentTab === 'search' ? 'active' : ''}" data-tab="search" title="Likes">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        </button>
                        <button class="v2-tab-btn ${currentTab === 'create' ? 'active' : ''}" data-tab="create" title="Add / Create">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                        </button>
                        <button class="v2-tab-btn ${currentTab === 'inbox' ? 'active' : ''}" data-tab="inbox" title="Profile">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </button>
                        <button class="v2-tab-btn ${currentTab === 'saved' ? 'active' : ''}" data-tab="saved" title="Alerts">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                        </button>
                    </div>
                `;
                updateV2LightCone();
            } else if (currentArch === 'v3') {
                barContainer.innerHTML = `
                    <div class="glass-tab-bar-v3">
                        <div class="liquid-droplet-pill" id="v3-droplet" style="left: 20px;"></div>
                        <button class="v2-tab-btn ${currentTab === 'home' ? 'active' : ''}" data-tab="home">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                        </button>
                        <button class="v2-tab-btn ${currentTab === 'search' ? 'active' : ''}" data-tab="search">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
                        </button>
                        <button class="v2-tab-btn ${currentTab === 'create' ? 'active' : ''}" data-tab="create">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                        </button>
                        <button class="v2-tab-btn ${currentTab === 'inbox' ? 'active' : ''}" data-tab="inbox">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                        </button>
                        <button class="v2-tab-btn ${currentTab === 'saved' ? 'active' : ''}" data-tab="saved">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </button>
                    </div>
                `;
            } else if (currentArch === 'v4') {
                barContainer.innerHTML = `
                    <div class="glass-tab-bar-v4">
                        <button class="v4-tab-btn ${currentTab === 'home' ? 'active' : ''}" data-tab="home">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                            <span>Home</span>
                        </button>
                        <button class="v4-tab-btn ${currentTab === 'search' ? 'active' : ''}" data-tab="search">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                            <span>Likes</span>
                        </button>
                        <button class="v4-floating-orb" data-tab="create" title="Add Action">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                        </button>
                        <button class="v4-tab-btn ${currentTab === 'inbox' ? 'active' : ''}" data-tab="inbox">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            <span>Profile</span>
                        </button>
                        <button class="v4-tab-btn ${currentTab === 'saved' ? 'active' : ''}" data-tab="saved">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                            <span>Alerts</span>
                        </button>
                    </div>
                `;
            }

            barContainer.querySelectorAll('button').forEach(btn => {
                btn.addEventListener('click', () => {
                    const tabKey = btn.getAttribute('data-tab');
                    if (tabKey) {
                        currentTab = tabKey;
                        renderScreenContent();
                        renderBar();
                    }
                });
            });
            updateTelemetry();
        }

        function updateTelemetry() {
            const archData = ARCHITECTURES[currentArch] || ARCHITECTURES['v1'];
            if (activeTabLbl) {
                const tabNames = ['home', 'search', 'create', 'inbox', 'saved'];
                const idx = tabNames.indexOf(currentTab);
                const numStr = idx >= 0 ? `0${idx + 1}` : '01';
                activeTabLbl.textContent = `${currentTab.toUpperCase()} (${numStr}/05)`;
            }
            const blurEl = document.getElementById('blur-val');
            if (blurEl) blurEl.textContent = archData.blur || '28px (Hardware GPU)';
            const glowEl = document.getElementById('glow-val');
            if (glowEl) glowEl.textContent = archData.glow || '100% Cyan Active (#00f0ff)';
        }

        function updateV2LightCone() {
            setTimeout(() => {
                const activeBtn = barContainer.querySelector(`.v2-tab-btn[data-tab="${currentTab}"]`);
                const cone = document.getElementById('v2-light-cone');
                const bar = document.getElementById('glass-bar-v2');
                if (activeBtn && cone && bar) {
                    const btnRect = activeBtn.getBoundingClientRect();
                    const barRect = bar.getBoundingClientRect();
                    const offsetLeft = (btnRect.left - barRect.left) + (btnRect.width / 2) - 29;
                    cone.style.left = `${Math.max(10, offsetLeft)}px`;
                }
            }, 50);
        }

        function renderScreenContent() {
            if (screenContent) {
                screenContent.innerHTML = SCREENS[currentTab] || SCREENS['home'];
            }
        }

        archBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                archBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentArch = btn.getAttribute('data-arch') || 'v1';

                const archData = ARCHITECTURES[currentArch];
                if (archDescEl) archDescEl.textContent = archData.desc;
                if (codePreEl) codePreEl.textContent = archData.code;

                renderBar();
                updateTelemetry();
            });
        });

        renderScreenContent();
        renderBar();
    }

    // =========================================================================
    // SHORTCUT JUMP HANDLERS
    // =========================================================================
    function initShortcutJumps() {
        document.querySelectorAll('[data-jump]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = btn.getAttribute('data-jump');
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // =========================================================================
    // 11. INITIALIZE ENGINES
    // =========================================================================
    initHeroMatrixCanvas();
    initHeroWordRotator();
    initEditorialHeroHotspots();
    initEditorialHeroSlider();
    renderShowcaseCards();
    morphSandbox(STYLES_DATABASE[0], 'all');
    initClosetEcommerce();
    initGlassyNavLab();
    initShortcutJumps();

});
