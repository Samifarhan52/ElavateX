/**
 * ElavateX - Master Client Logic
 * Features: Black Carpet Wipe, Cinematic Intro, Live Case Studies, Testomiles, Admin Portal, Live Firebase Cloud Firestore
 * Brand: ElavateX | Domain: ElavateX.com
 */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // Firebase Cloud Firestore Live Dispatch Helpers
    // ----------------------------------------------------------------------
    async function dispatchLeadToFirebase(leadObj) {
        try {
            const { saveLeadToFirestore } = await import('./firebase-config.js');
            await saveLeadToFirestore(leadObj);
        } catch (e) {
            console.log("Lead saved locally.", e);
        }
    }

    async function dispatchReviewToFirebase(reviewObj) {
        try {
            const { saveReviewToFirestore } = await import('./firebase-config.js');
            await saveReviewToFirestore(reviewObj);
        } catch (e) {
            console.log("Review saved locally.", e);
        }
    }

    // Live Analytics Auto Tracker
    (async () => {
        try {
            const { trackPageViewInFirestore } = await import('./firebase-config.js');
            if (typeof trackPageViewInFirestore === 'function') {
                trackPageViewInFirestore();
            }
        } catch (e) {
            console.warn("Analytics tracking auto-dispatch fallback:", e);
        }
    })();

    // ----------------------------------------------------------------------
    // 0. Top Progress Loading Bar System (Professional Route Indicator)
    // ----------------------------------------------------------------------
    const loadingBar = document.getElementById('top-loading-bar');
    const transitionLinks = document.querySelectorAll('a[href^="#"], .drawer-link, .nav-link');

    function executeScrollWithLoadingBar(targetId) {
        if (!loadingBar) {
            if (targetId) {
                const elem = document.querySelector(targetId);
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }

        // Reset and show loading bar immediately
        gsap.killTweensOf(loadingBar);
        gsap.set(loadingBar, { width: "0%", opacity: 1 });

        // Scroll to the target element immediately and smoothly
        if (targetId && targetId !== '#') {
            const targetElem = document.querySelector(targetId);
            if (targetElem) {
                targetElem.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Animate the top loading bar progress in sync with smooth scroll
        gsap.to(loadingBar, {
            width: "60%",
            duration: 0.35,
            ease: "power1.out",
            onComplete: () => {
                gsap.to(loadingBar, {
                    width: "100%",
                    duration: 0.4,
                    ease: "power1.in",
                    onComplete: () => {
                        gsap.to(loadingBar, {
                            opacity: 0,
                            duration: 0.3,
                            ease: "power2.out",
                            onComplete: () => {
                                gsap.set(loadingBar, { width: "0%" });
                            }
                        });
                    }
                });
            }
        });
    }

    transitionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                if (href === '#admin') {
                    openAdminGateway();
                } else {
                    executeScrollWithLoadingBar(href);
                }
            }
        });
    });

    // ----------------------------------------------------------------------
    // 1. Cinematic Entry Reveal Animation Sequence (Billion-Dollar Company V3)
    // Ambient Glow -> Floating Particles -> Liquid Light Ribbons -> Wireframe
    // -> Metallic glass morph -> Brand text emerge -> Navbar Flight Morph
    // ----------------------------------------------------------------------
    const introOverlay = document.getElementById('intro-overlay');
    const skipIntroBtn = document.getElementById('skip-intro-btn');
    const ambientGlow = document.getElementById('intro-ambient-glow');
    const particlesContainer = document.getElementById('intro-particles-container');
    const logoStage = document.getElementById('intro-logo-stage');
    const logo3dWrapper = document.getElementById('intro-logo-3d-wrapper');
    const logoMark = document.getElementById('intro-logo-mark-container');
    const logoRender = document.getElementById('intro-logo-render');
    const logoWireframe = document.querySelector('.logo-path-wireframe');
    const logoGlint = document.getElementById('logo-glint');
    const brandText = document.getElementById('intro-brand-text');
    const letters = brandText ? brandText.querySelectorAll('.letter') : [];
    const ribbons = document.querySelectorAll('.light-ribbon');

    let tl;

    function finishIntro(instant = false) {
        if (tl) tl.kill();
        
        // Ensure all elements are fully visible and active
        const navbar = document.querySelector('.navbar-header');
        const navLogo = document.querySelector('.navbar-header .brand-logo');
        const heroElements = ['.hero-badge', '.hero-title', '.hero-subtitle', '.hero-cta-group', '.metrics-grid'];
        
        gsap.set(navbar, { opacity: 1, y: 0 });
        gsap.set(navLogo, { opacity: 1 });
        gsap.set(heroElements, { opacity: 1, y: 0 });
        
        if (introOverlay) {
            introOverlay.style.display = 'none';
            introOverlay.classList.add('hidden');
        }
    }

    if (skipIntroBtn) {
        skipIntroBtn.addEventListener('click', () => finishIntro(true));
    }

    if (introOverlay && !sessionStorage.getItem('elavatex_intro_played')) {
        sessionStorage.setItem('elavatex_intro_played', 'true');

        if (logoStage && logo3dWrapper && logoMark && brandText && letters.length > 0) {
            
            // 1. Prepare Initial States
            gsap.set('.navbar-header', { opacity: 0, y: -20 });
            gsap.set('.navbar-header .brand-logo', { opacity: 0 });
            gsap.set(['.hero-badge', '.hero-title', '.hero-subtitle', '.hero-cta-group', '.metrics-grid'], { opacity: 0, y: 35 });
            
            // Generate Floating Particles
            if (particlesContainer) {
                const count = 18;
                for (let i = 0; i < count; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'intro-particle';
                    const size = Math.random() * 3 + 2;
                    const px = Math.random() * 100;
                    const py = Math.random() * 100;
                    const opacity = Math.random() * 0.4 + 0.1;
                    
                    gsap.set(particle, {
                        width: size,
                        height: size,
                        left: `${px}%`,
                        top: `${py}%`,
                        opacity: opacity
                    });
                    particlesContainer.appendChild(particle);
                    
                    gsap.to(particle, {
                        x: (Math.random() - 0.5) * 80,
                        y: (Math.random() - 0.5) * 80,
                        opacity: Math.random() * 0.5 + 0.1,
                        duration: Math.random() * 12 + 12,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    });
                }
            }

            // Horizontal Centering Math for Logo Mark
            const W_t = brandText.offsetWidth || 180;
            const Gap = 16;
            const initShift = (W_t + Gap) / 2;

            // Set initial 3D transforms for Logo wrapper
            gsap.set(logo3dWrapper, { x: initShift, rotateY: -12, rotateX: 6, force3D: true });
            gsap.set(logoStage, { scale: 0.85, force3D: true });
            gsap.set(logoMark, { scale: 0.75, opacity: 0, force3D: true });
            gsap.set(letters, { opacity: 0, x: -80, scale: 0.88, filter: "none", force3D: true });

            // Initialize Master Timeline
            tl = gsap.timeline();

            // Scene 1 — Darkness & Volumetric Ambient Glow
            tl.to(ambientGlow, {
                opacity: 0.75,
                scale: 1.0,
                duration: 1.6,
                ease: "power2.out"
            }, 0)
            .to(logoStage, {
                scale: 1.0,
                duration: 3.2,
                ease: "power1.out"
            }, 0)

            // Scene 2 — EX Logo Emblem Materializes & Ignites on Stage
            .to(logoMark, {
                opacity: 1,
                scale: 1.0,
                duration: 1.0,
                ease: "back.out(1.7)"
            }, 0.2)

            // Scene 3 — EX Emblem shifts left & ElavateX text emerges from behind EX
            .to(logo3dWrapper, {
                x: 0,
                duration: 1.1,
                ease: "expo.inOut"
            }, 1.3)
            .to(letters, {
                opacity: 1,
                x: 0,
                scale: 1,
                filter: "none",
                stagger: 0.05,
                duration: 0.85,
                ease: "power3.out",
                force3D: true
            }, 1.5)

            // Scene 4 — Metallic Glint Sweep Reflection
            .to(logo3dWrapper, {
                rotateY: 8,
                rotateX: -4,
                duration: 1.8,
                ease: "power1.inOut"
            }, 1.3)
            .to(logoGlint, {
                backgroundPosition: "150% 150%",
                duration: 1.4,
                ease: "power2.inOut"
            }, 1.7)

            // Scene 5 — Seamless Fade Transition to Website
            .to(introOverlay, {
                opacity: 0,
                duration: 0.7,
                ease: "power2.inOut",
                onStart: () => {
                    const navbar = document.querySelector('.navbar-header');
                    const navLogo = document.querySelector('.navbar-header .brand-logo');
                    if (navbar) {
                        gsap.fromTo(navbar, 
                            { opacity: 0, y: -20 },
                            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
                        );
                    }
                    if (navLogo) {
                        gsap.to(navLogo, { opacity: 1, duration: 0.5 });
                    }
                    
                    gsap.fromTo(['.hero-badge', '.hero-title', '.hero-subtitle', '.hero-cta-group', '.metrics-grid'],
                        { opacity: 0, y: 25 },
                        { opacity: 1, y: 0, stagger: 0.08, duration: 0.9, ease: "power3.out" }
                    );
                },
                onComplete: () => {
                    finishIntro(true);
                }
            }, 3.0);
        } else {
            finishIntro(true);
        }
    } else if (introOverlay) {
        introOverlay.style.display = 'none';
        introOverlay.classList.add('hidden');
    }

    // ----------------------------------------------------------------------
    // 2. Ethereal Glassy Smoke Canvas Animation Engine
    // ----------------------------------------------------------------------
    const smokeCanvas = document.getElementById('smoke-canvas');
    if (smokeCanvas) {
        const ctx = smokeCanvas.getContext('2d');
        let width = smokeCanvas.width = smokeCanvas.parentElement.clientWidth;
        let height = smokeCanvas.height = smokeCanvas.parentElement.clientHeight;

        window.addEventListener('resize', () => {
            if (smokeCanvas.parentElement) {
                width = smokeCanvas.width = smokeCanvas.parentElement.clientWidth;
                height = smokeCanvas.height = smokeCanvas.parentElement.clientHeight;
            }
        });

        class SmokeParticle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = height + Math.random() * 50;
                this.vx = (Math.random() - 0.5) * 0.6;
                this.vy = -(Math.random() * 0.8 + 0.4);
                this.radius = Math.random() * 40 + 30;
                this.alpha = 0;
                this.maxAlpha = Math.random() * 0.25 + 0.1;
                this.growth = Math.random() * 0.2 + 0.05;
                this.color = Math.random() > 0.5 ? '99, 102, 241' : '6, 182, 212';
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.radius += this.growth;

                if (this.y < height * 0.7 && this.alpha < this.maxAlpha) {
                    this.alpha += 0.005;
                } else if (this.y < height * 0.3) {
                    this.alpha -= 0.005;
                }

                if (this.y < -this.radius || this.alpha <= 0) {
                    this.reset();
                }
            }

            draw() {
                ctx.save();
                ctx.beginPath();
                const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
                grad.addColorStop(0, `rgba(${this.color}, ${Math.max(0, this.alpha)})`);
                grad.addColorStop(1, `rgba(${this.color}, 0)`);
                ctx.fillStyle = grad;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        const particles = [];
        for (let i = 0; i < 25; i++) {
            particles.push(new SmokeParticle());
        }

        function animateSmoke() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateSmoke);
        }

        animateSmoke();
    }

    const smokePlayBtn = document.getElementById('smoke-play-btn');
    if (smokePlayBtn) {
        smokePlayBtn.addEventListener('click', () => {
            executeScrollWithLoadingBar('#digital-marketing');
        });
    }

    // ----------------------------------------------------------------------
    // 3. Testimonials & Live User Comments System (Testomile)
    // ----------------------------------------------------------------------
    const defaultReviews = [
        {
            id: 1,
            name: "Sudarshan",
            company: "Founder, Shelter Hunt Consultants (shelterhuntconsultants.com)",
            rating: 5,
            comment: "Working with ElavateX was the absolute best experience! They delivered Shelter Hunt Consultants ahead of schedule with top-tier output, 100% responsiveness, and exceptional quality. Highly recommended!",
            date: "Verified Client"
        },
        {
            id: 2,
            name: "Adv. & Tech Directorate",
            company: "Core Leadership, TRAIT Innovation (traitinnovation.com)",
            rating: 5,
            comment: "ElavateX engineered our Enterprise AI & Technology Systems architecture with extraordinary precision. 99.98% uptime, immaculate cyber-aesthetic design, and robust neural metric pipelines. Exceptional technical partners.",
            date: "Verified Deployment"
        },
        {
            id: 3,
            name: "Marketing & Operations Lead",
            company: "HelloBotz Official WhatsApp Automation (hellobotz.com)",
            rating: 5,
            comment: "The official Meta Cloud WhatsApp Automation engine ElavateX built for HelloBotz helped us automate millions of client messages with zero latency. Our client onboarding tripled within the first quarter.",
            date: "Verified Client"
        },
        {
            id: 4,
            name: "Dr. Farooq & Admissions Directorate",
            company: "The Edu Consultant Ecosystem (theeduconsultant.com • theeduconsultant.in)",
            rating: 5,
            comment: "The education portals built by ElavateX completely revolutionized our student counseling workflow. Responsive college matching, lightning-fast search filters, and seamless admissions inquiries.",
            date: "Verified Client"
        }
    ];

    function getStoredReviews() {
        const stored = localStorage.getItem('elavatex_user_reviews');
        if (stored) {
            try { return JSON.parse(stored); } catch (e) { return defaultReviews; }
        }
        return defaultReviews;
    }

    function saveStoredReviews(reviews) {
        localStorage.setItem('elavatex_user_reviews', JSON.stringify(reviews));
    }

    const commentsGrid = document.getElementById('comments-grid');
    const reviewsCountEl = document.getElementById('reviews-count');
    const publicReviewForm = document.getElementById('public-review-form');

    function renderReviews() {
        const reviews = getStoredReviews();
        if (reviewsCountEl) reviewsCountEl.textContent = reviews.length;

        if (commentsGrid) {
            commentsGrid.innerHTML = '';
            reviews.forEach((rev) => {
                const stars = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);
                const card = document.createElement('div');
                card.className = 'user-review-card glass-panel';
                card.innerHTML = `
                    <div class="star-rating" style="font-size: 1.1rem;">${stars}</div>
                    <p class="review-text" style="font-size: 0.95rem; margin-bottom: 1rem;">"${escapeHtml(rev.comment)}"</p>
                    <div class="testimonial-author" style="justify-content: flex-start;">
                        <div class="author-avatar" style="width: 36px; height: 36px; font-size: 0.95rem;">${escapeHtml(rev.name.charAt(0).toUpperCase())}</div>
                        <div class="author-info">
                            <div class="author-name" style="font-size: 0.95rem;">${escapeHtml(rev.name)}</div>
                            <div class="author-role" style="font-size: 0.8rem;">${escapeHtml(rev.company || 'Client')}</div>
                        </div>
                    </div>
                `;
                commentsGrid.appendChild(card);
            });
        }
    }

    if (publicReviewForm) {
        publicReviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('rev-name').value;
            const company = document.getElementById('rev-company').value;
            const rating = parseInt(document.getElementById('rev-rating').value) || 5;
            const text = document.getElementById('rev-text').value;

            const newRev = {
                id: Date.now(),
                name: name,
                company: company || 'Valued Client',
                rating: rating,
                comment: text,
                date: 'Just now'
            };

            // Dispatch to Live Cloud Firestore
            dispatchReviewToFirebase(newRev);

            const reviews = getStoredReviews();
            reviews.unshift(newRev);
            saveStoredReviews(reviews);

            publicReviewForm.reset();
            renderReviews();
            alert('Thank you! Your review has been published live on ElavateX.com & saved to Firebase!');
        });
    }

    renderReviews();

    // ----------------------------------------------------------------------
    // 4. Fully Integrated Admin Control Gateway & Dashboard
    // ----------------------------------------------------------------------
    function openAdminGateway() {
        window.location.href = "admin.html";
    }

    // ----------------------------------------------------------------------
    // ----------------------------------------------------------------------
    // 5. CINEMATIC RADIAL VIEW-TRANSITION THEME MODE ENGINE
    // ----------------------------------------------------------------------
    const htmlEl = document.documentElement;
    const savedTheme = localStorage.getItem('elavatex_theme') || 'light';
    let isThemeTransitioning = false;

    // Initial silent theme application without animation
    setTheme(savedTheme);

    function setTheme(theme) {
        if (theme === 'dark') {
            htmlEl.setAttribute('data-theme', 'dark');
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        } else {
            htmlEl.setAttribute('data-theme', 'light');
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        }
        localStorage.setItem('elavatex_theme', theme);
    }

    // Celestial Micro-Spark Burst Particle Generator
    function createMicroSparks(x, y, isTargetDark) {
        const colors = isTargetDark 
            ? ['#6366f1', '#38bdf8', '#a855f7', '#818cf8', '#c084fc']
            : ['#f59e0b', '#fbbf24', '#d97706', '#fcd34d', '#fef08a'];
        
        for (let i = 0; i < 8; i++) {
            const spark = document.createElement('span');
            spark.className = 'theme-spark-particle';
            const angle = (Math.PI * 2 / 8) * i + (Math.random() * 0.3 - 0.15);
            const dist = 34 + Math.random() * 24;
            const tx = Math.cos(angle) * dist;
            const ty = Math.sin(angle) * dist;
            const size = 3 + Math.random() * 4;

            spark.style.width = `${size}px`;
            spark.style.height = `${size}px`;
            spark.style.backgroundColor = colors[i % colors.length];
            spark.style.boxShadow = `0 0 10px ${colors[i % colors.length]}`;
            spark.style.left = `${x}px`;
            spark.style.top = `${y}px`;
            spark.style.setProperty('--spark-tx', `${tx}px`);
            spark.style.setProperty('--spark-ty', `${ty}px`);

            document.body.appendChild(spark);
            setTimeout(() => spark.remove(), 700);
        }
    }

    function executeThemeTransition(e, triggerBtn) {
        if (isThemeTransitioning) return;
        isThemeTransitioning = true;

        const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        const isTargetDark = newTheme === 'dark';

        // Animate button bounce physics
        if (triggerBtn) {
            triggerBtn.classList.add('btn-bouncing');
            setTimeout(() => triggerBtn.classList.remove('btn-bouncing'), 350);
        }

        // Determine transition origin coordinates
        let x, y;
        if (e && typeof e.clientX === 'number' && e.clientX > 0) {
            x = e.clientX;
            y = e.clientY;
        } else if (triggerBtn) {
            const rect = triggerBtn.getBoundingClientRect();
            x = rect.left + rect.width / 2;
            y = rect.top + rect.height / 2;
        } else {
            x = window.innerWidth / 2;
            y = 50;
        }

        // Spawn celestial micro-sparks from button position
        createMicroSparks(x, y, isTargetDark);

        // Calculate max radius needed to cover the furthest corner of viewport
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Synchronize all CSS variables during the sweep
        htmlEl.classList.add('theme-switching');
        setTimeout(() => {
            htmlEl.classList.remove('theme-switching');
            isThemeTransitioning = false;
        }, 700);

        // Option A: Modern Browser View Transitions API with circular clip-path reveal
        if (!prefersReducedMotion && document.startViewTransition) {
            try {
                const transition = document.startViewTransition(() => {
                    setTheme(newTheme);
                });

                transition.ready.then(() => {
                    try {
                        document.documentElement.animate(
                            {
                                clipPath: [
                                    `circle(0px at ${x}px ${y}px)`,
                                    `circle(${endRadius}px at ${x}px ${y}px)`
                                ]
                            },
                            {
                                duration: 620,
                                easing: 'cubic-bezier(0.2, 0, 0, 1)',
                                pseudoElement: '::view-transition-new(root)'
                            }
                        );
                    } catch (animErr) {
                        // Animation error fallback
                    }
                }).catch(() => {
                    // Ready error fallback
                });
                return;
            } catch (err) {
                // If startViewTransition throws, fallback to Option B below
            }
        }

        // Option B: High-Performance Hardware Accelerated Radial Ripple Fallback
        if (!prefersReducedMotion) {
            const diameter = endRadius * 2.2;
            const ripple = document.createElement('div');
            ripple.className = 'theme-transition-fallback-ripple';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.style.width = `${diameter}px`;
            ripple.style.height = `${diameter}px`;
            ripple.style.backgroundColor = isTargetDark ? '#0f1117' : '#f6f1eb';
            ripple.style.opacity = '1';

            document.body.appendChild(ripple);

            requestAnimationFrame(() => {
                ripple.style.transform = 'translate(-50%, -50%) scale(1)';
            });

            setTimeout(() => {
                setTheme(newTheme);
                ripple.style.opacity = '0';
                setTimeout(() => ripple.remove(), 400);
            }, 300);
        } else {
            // Option C: Instant with reduced motion
            setTheme(newTheme);
        }
    }

    // Attach to all theme buttons across the site
    const allThemeButtons = document.querySelectorAll('.theme-toggle-btn, #theme-toggle-btn, #drawer-theme-toggle, #drawer-theme-toggle-btn');
    allThemeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            executeThemeTransition(e, btn);
        });
    });

    // ----------------------------------------------------------------------
    // 6. ELAVATEX AI CHATBOT ENGINE (LIGHTWEIGHT, FAST & PERSISTENT)
    // ----------------------------------------------------------------------
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
    const chatCloseBtn = document.getElementById('chat-close-btn');
    const chatNewBtn = document.getElementById('chat-new-btn');
    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatChips = document.querySelectorAll('.chat-chip');
    const chatbotTooltip = document.getElementById('chatbot-tooltip');
    const chatHeaderStatus = document.getElementById('chat-header-status');

    // Centralized Verified ElavateX Knowledge Base
    const ELAVATEX_KNOWLEDGE = {
        company: {
            name: "ElavateX",
            website: "elavatex.com",
            tagline: "Digital Project Engineering & Brand Growth"
        },
        services: {
            web: {
                title: "Web Development",
                details: "We build sub-second websites, custom web applications, SaaS portals, e-commerce platforms, and high-converting business sites with 100/100 Core Web Vitals.",
                url: "services/web-development.html"
            },
            mobile: {
                title: "Mobile Application Development",
                details: "We build cross-platform iOS & Android mobile apps using Flutter and React Native with 60FPS UI animations and real-time cloud backends.",
                url: "services/mobile-app-development.html"
            },
            smm: {
                title: "Social Media Marketing (SMM)",
                details: "We manage social media channels, Instagram content curation, motion Reels, brand positioning, and targeted ad campaigns.",
                url: "services/social-media-management.html",
                instagram: "@elavatex_dev"
            }
        },
        projects: [
            { name: "TRAIT Innovation", url: "https://traitinnovation.com", category: "Enterprise AI & Deep Tech Platform" },
            { name: "HelloBotz", url: "https://hellobotz.com", category: "WhatsApp Marketing & Automation Platform" },
            { name: "The Edu Consultant - Admissions", url: "https://theeduconsultant.com", category: "Higher Education Direct Admissions & Quota Portal" },
            { name: "The Edu Consultant - Bengaluru", url: "https://bangalore.theeduconsultant.com", category: "Bengaluru Schools & Colleges Discovery Engine" },
            { name: "The Edu Consultant - Study Abroad", url: "https://theeduconsultant.in", category: "Global Study Abroad & Overseas Education Portal" },
            { name: "Shelter Hunt Consultants", url: "https://shelterhuntconsultants.com", category: "Real Estate Portal" },
            { name: "Online Gaming Tournaments", url: "https://sp-three-liart.vercel.app", category: "Esports Competition Platform" },
            { name: "Farhanulla Portfolio", url: "https://farhanulla.me", category: "Showcase Platform" }
        ],
        contact: {
            whatsapp: "https://wa.me/917676808068",
            phone: "+91 7676808068",
            instagram: "https://www.instagram.com/elavatex_dev?igsh=cm5rd3JqdGQ2ZWo1"
        },
        brochure: {
            title: "ElavateX Company Brochure & Capabilities Deck 2026",
            url: "brochure.html",
            pdfUrl: "brochure.html?download=pdf"
        }
    };

    // Chatbot Session State
    let chatState = {
        history: [],
        session: {
            businessType: "",
            projectType: "",
            service: "",
            smmSuggested: false
        },
        isOpen: false
    };

    // Load Session State
    function loadChatState() {
        try {
            const saved = sessionStorage.getItem('elavatex_chat_state');
            if (saved) {
                const parsed = JSON.parse(saved);
                chatState.session = parsed.session || chatState.session;
                chatState.history = parsed.history || [];
            }
        } catch (e) {
            console.warn("Could not load chat state:", e);
        }
    }

    // Save Session State
    function saveChatState() {
        try {
            sessionStorage.setItem('elavatex_chat_state', JSON.stringify({
                session: chatState.session,
                history: chatState.history.slice(-20) // Keep last 20 messages
            }));
        } catch (e) { }
    }

    function toggleChatbot(forceState) {
        if (!chatbotContainer) return;
        const open = typeof forceState === 'boolean' ? forceState : !chatbotContainer.classList.contains('open');
        if (open) {
            chatbotContainer.classList.add('open');
            if (chatbotTooltip) chatbotTooltip.style.display = 'none';
        } else {
            chatbotContainer.classList.remove('open');
        }
        chatState.isOpen = open;
    }

    if (chatbotToggleBtn) chatbotToggleBtn.addEventListener('click', () => toggleChatbot());
    if (chatCloseBtn) chatCloseBtn.addEventListener('click', () => toggleChatbot(false));

    // Reset / New Chat
    if (chatNewBtn) {
        chatNewBtn.addEventListener('click', () => {
            chatState.session = { businessType: "", projectType: "", service: "", smmSuggested: false };
            chatState.history = [];
            sessionStorage.removeItem('elavatex_chat_state');
            if (chatMessages) {
                const isWebPage = window.location.pathname.includes('web-development');
                const isAppPage = window.location.pathname.includes('mobile-app-development');
                const isSMMPage = window.location.pathname.includes('social-media-management');

                let pageContextMsg = "I can help you explore our services, projects, pricing, or figure out what your business might need.";
                if (isWebPage) pageContextMsg = "I see you're exploring Web Development! I can help you figure out what website or web app architecture fits your business.";
                if (isAppPage) pageContextMsg = "I see you're exploring Mobile App Development! I can help you narrow down iOS & Android features for your app.";
                if (isSMMPage) pageContextMsg = "I see you're looking at Social Media Marketing! I can help you review our content management & ad growth plans.";

                chatMessages.innerHTML = `
                    <div class="chat-msg msg-bot">
                        <div class="msg-bubble">
                            Hi! I'm ElavateX AI<br><br>${pageContextMsg}
                        </div>
                        <div class="msg-time">Just now</div>
                    </div>
                `;
            }
        });
    }

    function setStatusIndicator(statusText, isThinking = false) {
        if (!chatHeaderStatus) return;
        if (isThinking) {
            chatHeaderStatus.innerHTML = `<span class="status-dot" style="background:#f59e0b; box-shadow:0 0 6px #f59e0b;"></span> Thinking...`;
        } else {
            chatHeaderStatus.innerHTML = `<span class="status-dot"></span> Online`;
        }
    }

    // Natural NLP Classifier & Response Generator
    function generateBotResponse(userMsg) {
        const query = userMsg.toLowerCase().trim();
        const session = chatState.session;

        // Remember business context if user provides it
        if (query.includes('clothing') || query.includes('store') || query.includes('shop') || query.includes('restaurant') || query.includes('real estate') || query.includes('startup') || query.includes('salon') || query.includes('gym')) {
            if (query.includes('clothing')) session.businessType = "clothing business";
            else if (query.includes('restaurant')) session.businessType = "restaurant";
            else if (query.includes('real estate')) session.businessType = "real estate business";
            else if (query.includes('startup')) session.businessType = "startup";
            else session.businessType = query;
        }

        // Helper to construct response object: { text, buttons }
        let reply = { text: "", buttons: [] };

        // 1. Greetings & Small Talk
        if (/^(hi|hello|hey|greetings|hola|who are you|help|start)/i.test(query)) {
            reply.text = `Hi there! I'm **ElavateX AI**, your digital project assistant. We build high-performance websites, mobile applications, and grow brands through Social Media Marketing.<br><br>What kind of project or goal are you working on?`;
            reply.buttons = [
                { label: "Web Development", action: "web" },
                { label: "Mobile App Dev", action: "mobile" },
                { label: "Social Media Growth", action: "smm" },
                { label: "Company Brochure", action: "link-brochure" }
            ];
            return reply;
        }

        // 1.1 Brochure & Capabilities Deck Queries
        if (query.includes('brochure') || query.includes('deck') || query.includes('profile') || query.includes('presentation') || query.includes('catalog') || query.includes('pdf')) {
            reply.text = `You can explore and download our official **ElavateX Capabilities Deck & Company Brochure (2026)** below. It features our engineering standards, 100/100 Core Web Vitals guarantees, verified client case studies, and service breakdowns:`;
            reply.buttons = [
                { label: "View Digital Brochure", action: "link-brochure" },
                { label: "Download PDF Brochure", action: "download-brochure" },
                { label: "Connect on WhatsApp", action: "whatsapp" }
            ];
            return reply;
        }

        // 2. Web Development Queries
        if (query.includes('web') || query.includes('website') || query.includes('site') || query.includes('react') || query.includes('next') || query.includes('e-commerce') || query.includes('online store') || query.includes('redesign')) {
            session.service = "Web Development";
            const biz = session.businessType ? ` for your ${session.businessType}` : "";
            
            let smmNote = "";
            if (!session.smmSuggested && (query.includes('new') || query.includes('launch') || query.includes('store') || query.includes('customer') || session.businessType)) {
                session.smmSuggested = true;
                smmNote = `<br><br>*Tip:* Since you're building/launching a website${biz}, you may also want to consider our Social Media Marketing service to drive consistent online traffic.`;
            }

            if (query.includes('redesign')) {
                reply.text = `Yes! We redesign existing websites into sub-second, modern web applications built on React / Next.js with modern UX and 100/100 Core Web Vitals.${smmNote}<br><br>Would you like to review project scoping or start a project?`;
            } else if (query.includes('e-commerce') || query.includes('online store') || query.includes('buy online') || query.includes('shop')) {
                reply.text = `Awesome! We build custom e-commerce web applications complete with product catalogs, shopping carts, secure payment gateway integrations, and order management portals.${smmNote}<br><br>Are you looking to list physical products or digital services?`;
            } else {
                reply.text = `At ElavateX, we build custom websites, business portals, and web applications engineered for speed, mobile responsiveness, and high conversion.${smmNote}<br><br>What type of business is this website for?`;
            }

            reply.buttons = [
                { label: "Explore Web Development →", action: "link-web" },
                { label: "Start a Project →", action: "lead-form" }
            ];
            if (smmNote) reply.buttons.push({ label: "Explore SMM →", action: "link-smm" });
            return reply;
        }

        // 3. Mobile App Development Queries
        if (query.includes('app') || query.includes('mobile') || query.includes('ios') || query.includes('android') || query.includes('flutter') || query.includes('booking')) {
            session.service = "Mobile Application Development";
            let smmNote = "";
            if (!session.smmSuggested) {
                session.smmSuggested = true;
                smmNote = `<br><br>*Tip:* Once your app is ready for launch, our Social Media Marketing service can help build your user base through targeted campaigns.`;
            }

            if (query.includes('booking') || query.includes('appointment')) {
                reply.text = `That's a great use case for a mobile application! We build appointment booking and scheduling apps for iOS & Android with push notifications, calendar syncing, and customer management.${smmNote}`;
            } else {
                reply.text = `We develop cross-platform iOS & Android mobile applications using Flutter and React Native with 60FPS UI performance, real-time cloud sync, and push notifications.${smmNote}<br><br>What kind of mobile app are you planning—e-commerce, business management, booking, or something else?`;
            }

            reply.buttons = [
                { label: "Explore Mobile Apps →", action: "link-mobile" },
                { label: "Start a Project →", action: "lead-form" }
            ];
            return reply;
        }

        // 4. Social Media Marketing Queries (Direct or Follow-up)
        if (query.includes('social') || query.includes('smm') || query.includes('insta') || query.includes('instagram') || query.includes('facebook') || query.includes('marketing') || query.includes('reel') || query.includes('poster') || query.includes('growth') || query.includes('traffic') || query.includes('promote') || query.includes('campaign')) {
            session.service = "Social Media Marketing";
            reply.text = `ElavateX offers Social Media Marketing focused on content curation, high-engagement motion Reels, poster graphics, brand growth, and targeted ad campaigns. You can follow our official Instagram handle at **@elavatex_dev**.<br><br>Would you like to review our SMM service options or discuss your marketing goals?`;
            reply.buttons = [
                { label: "Explore SMM Services →", action: "link-smm" },
                { label: "Start a Project →", action: "lead-form" },
                { label: "Connect on WhatsApp →", action: "whatsapp" }
            ];
            return reply;
        }

        // 5. Projects & Case Studies
        if (query.includes('project') || query.includes('shelter') || query.includes('game') || query.includes('esports') || query.includes('trait') || query.includes('hellobotz') || query.includes('botz') || query.includes('study') || query.includes('abroad') || query.includes('edu') || query.includes('built') || query.includes('work') || query.includes('portfolio') || query.includes('client')) {
            reply.text = `Here are some of the real digital products built and deployed live by ElavateX:<br><br>
• **TRAIT Innovation**: Enterprise AI & intelligence systems ([traitinnovation.com](https://traitinnovation.com))<br>
• **HelloBotz**: Official WhatsApp Business API & automation platform ([hellobotz.com](https://hellobotz.com))<br>
• **The Edu Consultant (Direct Admissions)**: Academic direct seats & quota portal ([theeduconsultant.com](https://theeduconsultant.com))<br>
• **The Edu Consultant (Bengaluru)**: Institutions & college search engine ([bangalore.theeduconsultant.com](https://bangalore.theeduconsultant.com))<br>
• **The Edu Consultant (Study Abroad)**: Global overseas education consultancy ([theeduconsultant.in](https://theeduconsultant.in))<br>
• **Shelter Hunt Consultants**: Real estate portal ([shelterhuntconsultants.com](https://shelterhuntconsultants.com))<br>
• **Online Gaming Tournaments**: Esports competition platform ([sp-three-liart.vercel.app](https://sp-three-liart.vercel.app))<br>
• **Farhanulla Portfolio**: Showcase platform ([farhanulla.me](https://farhanulla.me))<br><br>
Would you like to build something similar for your business?`;
            reply.buttons = [
                { label: "View Our Work →", action: "link-projects" },
                { label: "Start a Project →", action: "lead-form" }
            ];
            return reply;
        }

        // 6. Pricing, Rates & Estimates
        if (query.includes('price') || query.includes('cost') || query.includes('how much') || query.includes('rate') || query.includes('estimate') || query.includes('package')) {
            reply.text = `Our pricing depends on your specific scope:<br><br>
• **Web Development**: Tailored based on design, pages, and web app requirements.<br>
• **Mobile App Dev**: Scoped by platform features, API integrations, and backend structure.<br>
• **Social Media Marketing**: Available via structured monthly content & growth plans.<br><br>
Share a few quick details about your project and I can get you an accurate quote!`;
            reply.buttons = [
                { label: "Start a Project / Get Quote →", action: "lead-form" },
                { label: "Connect on WhatsApp →", action: "whatsapp" }
            ];
            return reply;
        }

        // 7. Contact Info & Consultation
        if (query.includes('contact') || query.includes('phone') || query.includes('call') || query.includes('number') || query.includes('whatsapp') || query.includes('email') || query.includes('reach') || query.includes('hire')) {
            reply.text = `You can connect directly with the ElavateX team:<br><br>
• **WhatsApp / Direct Line**: +91 7676808068<br>
• **Instagram**: @elavatex_dev<br>
• **Official Website**: ElavateX.com<br><br>
Would you like to start a project inquiry right now?`;
            reply.buttons = [
                { label: "Start a Project →", action: "lead-form" },
                { label: "Connect on WhatsApp →", action: "whatsapp" }
            ];
            return reply;
        }

        // Default Fallback / General Consultative Response
        reply.text = `At ElavateX, we help businesses grow through **Web Development**, **Mobile Applications**, and **Social Media Marketing**.<br><br>I don't have verified details about that specific question right now, but the ElavateX team can assist you directly!`;
        reply.buttons = [
            { label: "Start a Project →", action: "lead-form" },
            { label: "Connect on WhatsApp →", action: "whatsapp" }
        ];
        return reply;
    }

    function appendUserMessage(text) {
        if (!chatMessages) return;
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chat-msg msg-user';
        msgDiv.innerHTML = `
            <div class="msg-bubble">${escapeHtml(text)}</div>
            <div class="msg-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        `;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        chatState.history.push({ sender: 'user', text: text });
        saveChatState();
    }

    function showTypingIndicator() {
        if (!chatMessages) return;
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-msg msg-bot';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="msg-bubble typing-bubble">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
            </div>
        `;
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        setStatusIndicator("Thinking...", true);
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
        setStatusIndicator("Online", false);
    }

    function appendBotMessage(replyObj) {
        removeTypingIndicator();
        if (!chatMessages) return;

        const msgDiv = document.createElement('div');
        msgDiv.className = 'chat-msg msg-bot';

        let buttonsHtml = "";
        if (replyObj.buttons && replyObj.buttons.length > 0) {
            buttonsHtml = `<div class="msg-actions">` +
                replyObj.buttons.map(b => {
                    if (b.action === 'whatsapp') {
                        return `<a href="${ELAVATEX_KNOWLEDGE.contact.whatsapp}" target="_blank" class="chat-action-btn chat-action-btn-whatsapp">${b.label}</a>`;
                    } else if (b.action === 'link-web') {
                        return `<a href="services/web-development.html" class="chat-action-btn">${b.label}</a>`;
                    } else if (b.action === 'link-mobile') {
                        return `<a href="services/mobile-app-development.html" class="chat-action-btn">${b.label}</a>`;
                    } else if (b.action === 'link-smm') {
                        return `<a href="services/social-media-management.html" class="chat-action-btn">${b.label}</a>`;
                    } else if (b.action === 'link-projects') {
                        return `<a href="#case-studies" class="chat-action-btn" onclick="document.getElementById('chatbot-container').classList.remove('open')">${b.label}</a>`;
                    } else if (b.action === 'link-brochure') {
                        return `<a href="brochure.html" class="chat-action-btn" target="_blank">${b.label}</a>`;
                    } else if (b.action === 'download-brochure') {
                        return `<a href="ElavateX-Company-Brochure-2026.pdf" download="ElavateX-Company-Brochure-2026.pdf" class="chat-action-btn chat-action-btn-whatsapp" target="_blank" style="background:var(--accent-purple);">${b.label}</a>`;
                    } else if (b.url) {
                        return `<a href="${b.url}" class="chat-action-btn" target="_blank">${b.label}</a>`;
                    } else {
                        return `<button type="button" class="chat-action-btn" data-action="${b.action}">${b.label}</button>`;
                    }
                }).join('') +
                `</div>`;
        }

        // Format Markdown boldness and bullet formatting
        let formattedText = replyObj.text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>');

        msgDiv.innerHTML = `
            <div class="msg-bubble">${formattedText}${buttonsHtml}</div>
            <div class="msg-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        `;

        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        chatState.history.push({ sender: 'bot', text: replyObj.text });
        saveChatState();

        // Attach action handlers for dynamic action buttons
        const actionBtns = msgDiv.querySelectorAll('button[data-action]');
        actionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const act = btn.getAttribute('data-action');
                if (act === 'lead-form') {
                    renderInlineLeadForm();
                } else if (act === 'web') {
                    handleUserSubmit("Tell me about Web Development");
                } else if (act === 'mobile') {
                    handleUserSubmit("Tell me about Mobile App Development");
                } else if (act === 'smm') {
                    handleUserSubmit("Tell me about Social Media Marketing");
                }
            });
        });
    }

    // Render Inline Project Lead Capture Form Inside Chatbot Stream
    function renderInlineLeadForm() {
        if (!chatMessages) return;
        const existingForm = document.getElementById('chat-inline-lead-form');
        if (existingForm) {
            existingForm.scrollIntoView({ behavior: 'smooth' });
            return;
        }

        const formDiv = document.createElement('div');
        formDiv.className = 'chat-msg msg-bot';
        formDiv.id = 'chat-inline-lead-form';
        formDiv.innerHTML = `
            <div class="msg-bubble">
                <div class="chat-lead-container">
                    <div class="chat-lead-title">Start Your Project with ElavateX</div>
                    <form id="chat-lead-form-element">
                        <div class="chat-lead-field">
                            <label>Your Name *</label>
                            <input type="text" id="clead-name" placeholder="John Doe" required>
                        </div>
                        <div class="chat-lead-field">
                            <label>Business / Company (Optional)</label>
                            <input type="text" id="clead-company" placeholder="e.g. Acme Inc.">
                        </div>
                        <div class="chat-lead-field">
                            <label>Service Needed *</label>
                            <select id="clead-service">
                                <option value="Web Development" ${chatState.session.service === 'Web Development' ? 'selected' : ''}>Web Development</option>
                                <option value="Mobile Application Development" ${chatState.session.service === 'Mobile Application Development' ? 'selected' : ''}>Mobile Application Development</option>
                                <option value="Social Media Marketing" ${chatState.session.service === 'Social Media Marketing' ? 'selected' : ''}>Social Media Marketing</option>
                                <option value="Full Digital Solution">Full Digital Solution</option>
                            </select>
                        </div>
                        <div class="chat-lead-field">
                            <label>Requirement Overview *</label>
                            <textarea id="clead-req" rows="2" placeholder="Briefly describe your project..." required></textarea>
                        </div>
                        <div class="chat-lead-field">
                            <label>WhatsApp / Phone Number *</label>
                            <input type="tel" id="clead-phone" placeholder="10-digit number" maxlength="10" required>
                        </div>
                        <button type="submit" class="chat-lead-submit" id="clead-submit-btn">Submit Enquiry &rarr;</button>
                    </form>
                </div>
            </div>
            <div class="msg-time">Just now</div>
        `;

        chatMessages.appendChild(formDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        const leadFormEl = document.getElementById('chat-lead-form-element');
        if (leadFormEl) {
            leadFormEl.addEventListener('submit', async (e) => {
                e.preventDefault();
                const name = document.getElementById('clead-name').value.trim();
                const company = document.getElementById('clead-company').value.trim() || 'N/A';
                const service = document.getElementById('clead-service').value;
                const requirement = document.getElementById('clead-req').value.trim();
                const phone = document.getElementById('clead-phone').value.trim();

                if (phone.length !== 10 || isNaN(phone)) {
                    alert("Please enter a valid 10-digit phone number.");
                    return;
                }

                const submitBtn = document.getElementById('clead-submit-btn');
                if (submitBtn) {
                    submitBtn.disabled = true;
                    submitBtn.textContent = "Submitting...";
                }

                const leadObj = {
                    name,
                    company,
                    service,
                    requirement,
                    phone,
                    email: "",
                    budget: "",
                    source: "ElavateX AI",
                    status: "New",
                    timestamp: new Date().toLocaleString()
                };

                // Dispatch to Firebase Cloud Firestore via main.js helper
                try {
                    await dispatchLeadToFirebase(leadObj);
                } catch (err) {
                    console.warn("Firestore lead submission fallback active:", err);
                }

                // Also save locally for Admin Dashboard
                try {
                    const storedLeads = JSON.parse(localStorage.getItem('elavatex_leads') || '[]');
                    storedLeads.unshift({ ...leadObj, id: Date.now() });
                    localStorage.setItem('elavatex_leads', JSON.stringify(storedLeads));
                } catch (err) { }

                // Build WhatsApp continuation URL
                const waText = encodeURIComponent(
                    `*New Project Enquiry (ElavateX AI)*\n\n` +
                    `*Name:* ${name}\n` +
                    `*Business:* ${company}\n` +
                    `*Service:* ${service}\n` +
                    `*Phone:* ${phone}\n` +
                    `*Requirement:* ${requirement}\n\n` +
                    `Sent via ElavateX AI Assistant`
                );
                const whatsappUrl = `https://wa.me/917676808068?text=${waText}`;

                // Replace form card with success state & WhatsApp button
                formDiv.innerHTML = `
                    <div class="msg-bubble" style="background:#064e3b; border-color:#10b981;">
                        <strong>Thanks! Your enquiry has been received.</strong><br>
                        Our team will review your project requirements and contact you shortly.<br><br>
                        <a href="${whatsappUrl}" target="_blank" class="chat-action-btn chat-action-btn-whatsapp" style="margin-top:4px;">
                            Continue on WhatsApp &rarr;
                        </a>
                    </div>
                    <div class="msg-time">Just now</div>
                `;
                chatMessages.scrollTop = chatMessages.scrollHeight;
            });
        }
    }

    function handleUserSubmit(text) {
        if (!text || text.trim() === '') return;
        const queryText = text.trim();

        appendUserMessage(queryText);
        showTypingIndicator();

        // Reveal response smoothly without artificial delay
        setTimeout(() => {
            const botReply = generateBotResponse(queryText);
            appendBotMessage(botReply);
        }, 400);
    }

    if (chatForm) {
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value;
            chatInput.value = '';
            handleUserSubmit(text);
        });
    }

    chatChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const query = chip.getAttribute('data-query');
            handleUserSubmit(query);
        });
    });

    function escapeHtml(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    // Initialize session state on load
    loadChatState();


    // ----------------------------------------------------------------------
    // 9. Consultation & Book a Call Modal Dialog (Multi-step Flow)
    // ----------------------------------------------------------------------
    const consultationModal = document.getElementById('consultation-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const openConsultationBtns = document.querySelectorAll('.open-consultation-btn');
    const consultationForm = document.getElementById('consultation-form');
    const formServiceSelect = document.getElementById('form-service');

    // Step elements
    const modalStepSelector = document.getElementById('modal-step-selector');
    const modalStepForm = document.getElementById('modal-step-form');
    const modalStepSuccess = document.getElementById('modal-step-success');
    const channelOptCallback = document.getElementById('channel-opt-callback');
    const channelOptReserved = document.getElementById('channel-opt-reserved');
    const modalBackBtn = document.getElementById('modal-back-btn');
    
    // Form conditional elements
    const formChannel = document.getElementById('form-channel');
    const formReservedExclusive = document.getElementById('form-reserved-exclusive');
    const formDate = document.getElementById('form-date');
    const formTimeSlot = document.getElementById('form-time-slot');
    const formFlowBadge = document.getElementById('form-flow-badge');

    function openModal(preselectService) {
        if (preselectService && formServiceSelect) {
            for (let i = 0; i < formServiceSelect.options.length; i++) {
                if (formServiceSelect.options[i].value.includes(preselectService)) {
                    formServiceSelect.selectedIndex = i;
                    break;
                }
            }
        }
        
        // Always reset to Step 1 (Channel Selection) when opening
        if (modalStepSelector && modalStepForm && modalStepSuccess) {
            modalStepSelector.classList.add('active');
            modalStepForm.classList.remove('active');
            modalStepSuccess.classList.remove('active');
        }

        if (consultationModal) {
            consultationModal.showModal();
        }
    }

    function closeModal() {
        if (consultationModal) {
            consultationModal.close();
        }
    }

    // Step navigation actions
    if (channelOptCallback) {
        channelOptCallback.addEventListener('click', () => {
            if (formChannel) formChannel.value = "Direct Callback";
            if (formFlowBadge) formFlowBadge.textContent = "DIRECT PHONE CALLBACK";
            if (formReservedExclusive) formReservedExclusive.style.display = "none";
            if (formServiceSelect) formServiceSelect.required = false;
            if (formDate) formDate.required = false;
            if (formTimeSlot) formTimeSlot.required = false;
            
            if (modalStepSelector && modalStepForm) {
                modalStepSelector.classList.remove('active');
                modalStepForm.classList.add('active');
            }
        });
    }

    if (channelOptReserved) {
        channelOptReserved.addEventListener('click', () => {
            if (formChannel) formChannel.value = "In-Person / Reserved Slot";
            if (formFlowBadge) formFlowBadge.textContent = "RESERVED ADVISORY SLOT";
            if (formReservedExclusive) formReservedExclusive.style.display = "block";
            if (formServiceSelect) formServiceSelect.required = true;
            if (formDate) formDate.required = true;
            if (formTimeSlot) formTimeSlot.required = true;
            
            if (modalStepSelector && modalStepForm) {
                modalStepSelector.classList.remove('active');
                modalStepForm.classList.add('active');
            }
        });
    }

    if (modalBackBtn) {
        modalBackBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modalStepSelector && modalStepForm) {
                modalStepForm.classList.remove('active');
                modalStepSelector.classList.add('active');
            }
        });
    }

    openConsultationBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const serviceAttr = btn.getAttribute('data-service');
            openModal(serviceAttr);
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

    if (consultationModal) {
        consultationModal.addEventListener('click', (e) => {
            const rect = consultationModal.getBoundingClientRect();
            const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                closeModal();
            }
        });
    }

    // Phone / WhatsApp validation & formatting (Digits-only, max 10 characters)
    const phoneInput = document.getElementById('form-phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
        });
    }

    // Date validation setup (Set minimum select value to today dynamically and enable visual click popup)
    if (formDate) {
        const todayStr = new Date().toLocaleDateString('en-CA'); // Matches YYYY-MM-DD local format
        formDate.setAttribute('min', todayStr);

        formDate.addEventListener('click', () => {
            if (typeof formDate.showPicker === 'function') {
                formDate.showPicker();
            }
        });
    }

    // Form Submission -> Firebase Dispatch & WhatsApp
    if (consultationForm) {
        consultationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const phone = document.getElementById('form-phone').value;
            
            const channel = formChannel ? formChannel.value : "Direct Callback";

            // Enforce exactly 10-digit number validation check
            if (phone.length !== 10) {
                alert("Please enter a valid 10-digit phone number.");
                return;
            }

            let leadObj;
            let formatDetailsText = `*Consultation Format:* ${channel}\n`;

            if (channel === 'In-Person / Reserved Slot') {
                const service = formServiceSelect ? formServiceSelect.value : "";
                const date = formDate ? formDate.value : "";
                const timeSlot = formTimeSlot ? formTimeSlot.value : "";
                const message = document.getElementById('form-message') ? document.getElementById('form-message').value : "";

                // Date validation (No past dates allowed)
                if (date) {
                    const selectedDate = new Date(date);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    selectedDate.setHours(0, 0, 0, 0);
                    if (selectedDate < today) {
                        alert("Please select a current or future date for the consultation.");
                        return;
                    }
                } else {
                    alert("Please select a preferred date.");
                    return;
                }

                leadObj = { name, email, phone, service, date, timeSlot, message, channel };
                
                formatDetailsText += `*Service Requested:* ${service}\n` +
                                     `*Preferred Date:* ${date}\n` +
                                     `*Preferred Slot:* ${timeSlot}\n` +
                                     `*Project Overview:* ${message || 'N/A'}\n`;
            } else {
                leadObj = { name, email, phone, channel };
            }

            leadObj.id = Date.now();
            leadObj.timestamp = new Date().toLocaleString();

            dispatchLeadToFirebase(leadObj);

            // Save lead locally for Admin Dashboard
            try {
                const storedLeads = JSON.parse(localStorage.getItem('elavatex_leads') || '[]');
                storedLeads.unshift(leadObj);
                localStorage.setItem('elavatex_leads', JSON.stringify(storedLeads));
            } catch (e) {
                console.error("Local lead save error:", e);
            }

            // Construct rich WhatsApp text
            const waText = encodeURIComponent(
                `*New Consultation Booking (ElavateX.com)*\n\n` +
                `*Name:* ${name}\n` +
                `*Email:* ${email}\n` +
                `*Phone:* ${phone}\n` +
                formatDetailsText +
                `\nSent via website: ElavateX.com`
            );

            const whatsappUrl = `https://wa.me/917676808068?text=${waText}`;

            // Transition to Step 3: Success Screen inside the modal
            if (modalStepForm && modalStepSuccess) {
                modalStepForm.classList.remove('active');
                modalStepSuccess.classList.add('active');
            }

            // Redirect to WhatsApp after 2 seconds delay
            setTimeout(() => {
                closeModal();
                window.open(whatsappUrl, '_blank');
            }, 2000);
        });
    }

    // ----------------------------------------------------------------------
    // 10. Header Navbar Scroll & Mobile Menu Drawer
    // ----------------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerClose = document.getElementById('drawer-close');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            mobileDrawer.classList.add('open');
        });
    }

    if (drawerClose && mobileDrawer) {
        drawerClose.addEventListener('click', () => {
            mobileDrawer.classList.remove('open');
        });
    }

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileDrawer) mobileDrawer.classList.remove('open');
        });
    });

    // ----------------------------------------------------------------------
    // 10.5 Delegated Social Links Premium Click Animations & Coming Soon Toasts
    // ----------------------------------------------------------------------
    function showToast(message) {
        const existingToast = document.querySelector('.custom-toast');
        if (existingToast) existingToast.remove();

        const toast = document.createElement('div');
        toast.className = 'custom-toast';
        toast.innerHTML = `<span>${message}</span>`;
        document.body.appendChild(toast);

        // Center on screen horizontally and slide up
        gsap.fromTo(toast,
            { opacity: 0, y: 30, scale: 0.9, x: "-50%" },
            { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power2.out" }
        );

        setTimeout(() => {
            gsap.to(toast, {
                opacity: 0,
                y: -15,
                duration: 0.25,
                ease: "power2.in",
                onComplete: () => toast.remove()
            });
        }, 2200);
    }

    document.addEventListener('click', (e) => {
        // 1. Instagram Redirect Animations
        const instaLink = e.target.closest('a[href*="instagram.com/elavatex_dev"]');
        if (instaLink) {
            e.preventDefault();
            const targetUrl = instaLink.getAttribute('href');
            const isIconBtn = instaLink.classList.contains('social-icon-btn');

            if (isIconBtn) {
                gsap.timeline({
                    onComplete: () => {
                        window.open(targetUrl, '_blank');
                    }
                })
                .to(instaLink, {
                    rotateY: 360,
                    scale: 1.3,
                    backgroundColor: "#e1306c",
                    color: "#ffffff",
                    boxShadow: "0 0 20px rgba(225, 48, 108, 0.6)",
                    duration: 0.55,
                    ease: "back.out(1.7)"
                })
                .to(instaLink, {
                    scale: 1,
                    rotateY: 360,
                    boxShadow: "0 0 0px rgba(0,0,0,0)",
                    duration: 0.15,
                    clearProps: "all"
                });
            } else {
                gsap.timeline({
                    onComplete: () => {
                        window.open(targetUrl, '_blank');
                    }
                })
                .to(instaLink, {
                    scale: 1.08,
                    color: "#e1306c",
                    textShadow: "0 0 8px rgba(225, 48, 108, 0.4)",
                    x: 6,
                    duration: 0.22,
                    ease: "power2.out"
                })
                .to(instaLink, {
                    scale: 1,
                    x: 0,
                    duration: 0.2,
                    ease: "power2.in",
                    clearProps: "all"
                });
            }
            return;
        }

        // 2. Facebook placeholder click
        const facebookBtn = e.target.closest('.social-icon-btn.facebook');
        if (facebookBtn) {
            e.preventDefault();
            showToast("Facebook channel is coming soon!");
            gsap.timeline()
                .to(facebookBtn, { x: -4, duration: 0.05, repeat: 5, yoyo: true })
                .to(facebookBtn, { x: 0, duration: 0.05 });
            return;
        }

        // 3. LinkedIn placeholder click
        const linkedinBtn = e.target.closest('.social-icon-btn.linkedin');
        if (linkedinBtn) {
            e.preventDefault();
            showToast("LinkedIn profile is coming soon!");
            gsap.timeline()
                .to(linkedinBtn, { x: -4, duration: 0.05, repeat: 5, yoyo: true })
                .to(linkedinBtn, { x: 0, duration: 0.05 });
            return;
        }
    });

    // ===================================================================
    // 11. PREMIUM SCROLL REVEAL ANIMATIONS (GSAP + ScrollTrigger)
    // ===================================================================
    const revealItems = document.querySelectorAll('.reveal-item');
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -8% 0px', // Trigger slightly before entering view
            threshold: 0.05 // Trigger when 5% is visible
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealItems.forEach(item => {
            revealObserver.observe(item);
        });
    } else {
        // Fallback for older browsers: show all items immediately
        revealItems.forEach(item => {
            item.classList.add('reveal-active');
        });
    }

    // ===================================================================
    // 12. FAQ ACCORDION EXPAND / COLLAPSE ENGINE
    // ===================================================================
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(questionBtn => {
        questionBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const faqItem = questionBtn.closest('.faq-item');
            if (!faqItem) return;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const faqIcon = questionBtn.querySelector('.faq-icon');

            const isOpen = faqItem.classList.contains('active');

            // Close all open FAQs for clean single-accordion feel
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const ans = item.querySelector('.faq-answer');
                const ic = item.querySelector('.faq-icon');
                if (ans) {
                    ans.style.maxHeight = null;
                    ans.style.padding = '0 1.8rem';
                }
                if (ic) ic.textContent = '+';
            });

            if (!isOpen && faqAnswer) {
                faqItem.classList.add('active');
                faqAnswer.style.maxHeight = (faqAnswer.scrollHeight + 40) + 'px';
                faqAnswer.style.padding = '0.8rem 1.8rem 1.4rem';
                if (faqIcon) faqIcon.textContent = '−';
            }
        });
    });

    // ===================================================================
    // 12b. INTERACTIVE PROJECT SCOPE & COST ESTIMATOR ENGINE
    // ===================================================================
    const estPlatformBtns = document.querySelectorAll('.est-choice-btn');
    const estSpeedBtns = document.querySelectorAll('.est-speed-btn');
    const estFeatureInputs = document.querySelectorAll('.est-feature-chip input');
    
    const estSummaryPlatform = document.getElementById('est-summary-platform');
    const estSummaryTimelineDesc = document.getElementById('est-summary-timeline-desc');
    const estCalcTime = document.getElementById('est-calc-time');
    const estSelectedList = document.getElementById('est-selected-list');
    const estWhatsappBtn = document.getElementById('est-whatsapp-btn');

    let currentPlatform = "Web Application";
    let baseDays = 14;
    let currentSpeed = "Rapid MVP";
    let speedDesc = "Rapid MVP Launch (10–21 Days)";
    let speedMultiplier = 1;

    function updateEstimator() {
        if (!estSummaryPlatform) return;

        let featureDays = 0;
        const selectedFeatures = [];
        estFeatureInputs.forEach(input => {
            if (input.checked) {
                featureDays += parseInt(input.getAttribute('data-days') || '2');
                selectedFeatures.push(input.value);
            }
        });

        const totalMinDays = Math.max(7, Math.round((baseDays + featureDays * 0.5) * speedMultiplier * 0.8));
        const totalMaxDays = Math.round((baseDays + featureDays) * speedMultiplier);

        let timelineText = `${totalMinDays} – ${totalMaxDays} Days`;
        if (speedMultiplier >= 2) {
            timelineText = `Dedicated Sprint (${totalMinDays}–${totalMaxDays} Days)`;
        }

        estSummaryPlatform.textContent = currentPlatform;
        if (estSummaryTimelineDesc) estSummaryTimelineDesc.textContent = speedDesc;
        if (estCalcTime) estCalcTime.textContent = timelineText;

        if (estSelectedList) {
            estSelectedList.innerHTML = '';
            if (selectedFeatures.length === 0) {
                const li = document.createElement('li');
                li.textContent = "Core Architecture Baseline";
                estSelectedList.appendChild(li);
            } else {
                selectedFeatures.forEach(feat => {
                    const li = document.createElement('li');
                    li.textContent = feat;
                    estSelectedList.appendChild(li);
                });
            }
        }

        if (estWhatsappBtn) {
            const featuresFormatted = selectedFeatures.map(f => `  • ${f}`).join('\n') || '  • Standard Baseline Architecture';
            const waMsg = encodeURIComponent(
                `*Project Scope & Estimation Spec (ElavateX.com)*\n\n` +
                `*Platform:* ${currentPlatform}\n` +
                `*Delivery Pace:* ${currentSpeed} (${timelineText})\n` +
                `*Selected Capabilities:*\n${featuresFormatted}\n` +
                `*Special Offer:* Instant 5% Discount Claimed\n\n` +
                `Hi ElavateX team, I configured this project specification on your website estimator and would like to schedule a strategy call & get a quote!`
            );
            estWhatsappBtn.href = `https://wa.me/917676808068?text=${waMsg}`;
        }
    }

    if (estPlatformBtns.length > 0) {
        estPlatformBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                estPlatformBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentPlatform = btn.getAttribute('data-platform') || "Web Application";
                baseDays = parseInt(btn.getAttribute('data-base-days') || '14');
                updateEstimator();
            });
        });
    }

    if (estSpeedBtns.length > 0) {
        estSpeedBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                estSpeedBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentSpeed = btn.getAttribute('data-speed') || "Rapid MVP";
                speedMultiplier = parseFloat(btn.getAttribute('data-multiplier') || '1');
                speedDesc = btn.getAttribute('data-speed-desc') || "Rapid MVP Launch (10–21 Days)";
                updateEstimator();
            });
        });
    }

    if (estFeatureInputs.length > 0) {
        estFeatureInputs.forEach(input => {
            input.addEventListener('change', updateEstimator);
        });
    }

    updateEstimator();

    // ===================================================================
    // 12c. HERO FLOATING PARALLAX & METRICS ANIMATED COUNTER ENGINE
    // ===================================================================
    if (typeof gsap !== 'undefined') {
        gsap.to('.card-phone-overlay', {
            y: '-=12',
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
        gsap.to('.card-code-overlay', {
            y: '+=10',
            duration: 4.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 0.4
        });
        gsap.to('.card-metrics-overlay', {
            y: '-=8',
            duration: 3.8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 0.8
        });
    }

    // Hero Metrics Count-Up
    const metricItems = document.querySelectorAll('.strip-number[data-target]');
    if (metricItems.length > 0 && 'IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const targetVal = parseFloat(el.getAttribute('data-target'));
                    const suffix = el.getAttribute('data-suffix') || '';
                    const decimals = parseInt(el.getAttribute('data-decimals') || '0');
                    const duration = 1600;
                    const startTime = performance.now();

                    function updateCount(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                        const currentVal = targetVal * ease;
                        el.textContent = currentVal.toFixed(decimals) + suffix;

                        if (progress < 1) {
                            requestAnimationFrame(updateCount);
                        }
                    }
                    requestAnimationFrame(updateCount);
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.2 });

        metricItems.forEach(el => counterObserver.observe(el));
    }

    // ===================================================================
    // 12d. DYNAMIC INTERACTIVE SPOTLIGHT CURSOR GLOW
    // ===================================================================
    document.addEventListener('mousemove', (e) => {
        const card = e.target.closest('.glass-panel, .service-card-creative, .portfolio-card-creative, .portfolio-spotlight-card, .why-card');
        if (card) {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        }
    });

    // ===================================================================
    // 13. 3D HERO SHOWCASE STAGE MOUSE PARALLAX ENGINE
    // ===================================================================
    const heroStage = document.getElementById('hero-visual-stage');
    if (heroStage) {
        heroStage.addEventListener('mousemove', (e) => {
            if (window.innerWidth <= 991) return;
            const rect = heroStage.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = (-y / rect.height) * 12;
            const rotateY = (x / rect.width) * 12;
            
            heroStage.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        heroStage.addEventListener('mouseleave', () => {
            if (window.innerWidth <= 991) return;
            heroStage.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
        });
    }

    // ===================================================================
    // 14. CREATIVE SERVICE & PORTFOLIO CARD INTERACTIVE 3D TILT ENGINE
    // ===================================================================
    const tiltCards = document.querySelectorAll('.service-card-creative, .portfolio-card-creative, .portfolio-spotlight-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth <= 991) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = (-y / rect.height) * 8;
            const rotateY = (x / rect.width) * 8;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
            if (window.innerWidth <= 991) return;
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });

    // ===================================================================
    // 14b. PORTFOLIO INDUSTRY FILTER TABS CONTROLLER
    // ===================================================================
    const portfolioFilterTabs = document.querySelectorAll('#portfolio-filter-tabs .portfolio-filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item-wrap');

    if (portfolioFilterTabs.length > 0 && portfolioItems.length > 0) {
        portfolioFilterTabs.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter') || 'all';

                portfolioFilterTabs.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                portfolioItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    if (filter === 'all' || category === filter) {
                        item.classList.remove('hidden-filter');
                    } else {
                        item.classList.add('hidden-filter');
                    }
                });
            });
        });
    }

    // ===================================================================
    // 15. FLOATING EXPLORE SERVICES BANNER CONTROLLER
    // ===================================================================
    const exploreBanner = document.getElementById('explore-services-floating-banner');
    const closeBannerBtn = document.getElementById('close-explore-banner');
    const exploreBannerCta = document.getElementById('explore-banner-cta');
    const servicesSection = document.getElementById('services-overview');
    
    let isBannerDismissed = false;

    if (exploreBanner && servicesSection) {
        function checkBannerVisibility() {
            if (isBannerDismissed) {
                exploreBanner.classList.remove('visible');
                return;
            }

            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            // Check if user is currently inside the Services section viewport
            const servicesRect = servicesSection.getBoundingClientRect();
            const isInsideServices = (servicesRect.top < window.innerHeight && servicesRect.bottom > 0);

            // Reveal early when scrolled >= 180px (or >= 8%) AND not currently inside the Services section
            if ((scrollTop >= 180 || scrollPercent >= 8) && !isInsideServices) {
                exploreBanner.classList.add('visible');
            } else {
                exploreBanner.classList.remove('visible');
            }
        }

        window.addEventListener('scroll', checkBannerVisibility, { passive: true });
        // Initial check in case user loaded page scrolled down
        checkBannerVisibility();

        if (closeBannerBtn) {
            closeBannerBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                isBannerDismissed = true;
                exploreBanner.classList.remove('visible');
            });
        }

        if (exploreBannerCta) {
            exploreBannerCta.addEventListener('click', (e) => {
                e.preventDefault();
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            });
        }
    }

    // ===================================================================
    // 16. COMING SOON MODAL CONTROLLER (View All Projects)
    // ===================================================================
    const btnViewAllProjects = document.getElementById('btn-view-all-projects');
    const comingSoonModal = document.getElementById('coming-soon-modal');
    const closeComingSoonBtn = document.getElementById('close-coming-soon');
    let comingSoonTimer = null;

    function hideComingSoonModal() {
        if (comingSoonModal) {
            comingSoonModal.classList.remove('active');
        }
        if (comingSoonTimer) {
            clearTimeout(comingSoonTimer);
            comingSoonTimer = null;
        }
    }

    if (btnViewAllProjects && comingSoonModal) {
        btnViewAllProjects.addEventListener('click', (e) => {
            e.preventDefault();
            comingSoonModal.classList.add('active');

            if (comingSoonTimer) {
                clearTimeout(comingSoonTimer);
                comingSoonTimer = null;
            }
        });

        if (closeComingSoonBtn) {
            closeComingSoonBtn.addEventListener('click', () => {
                hideComingSoonModal();
            });
        }

        comingSoonModal.addEventListener('click', (e) => {
            if (e.target === comingSoonModal) {
                hideComingSoonModal();
            }
        });

        const csExploreWorkLink = document.getElementById('cs-explore-work-link');
        if (csExploreWorkLink) {
            csExploreWorkLink.addEventListener('click', () => {
                hideComingSoonModal();
            });
        }
    }

    // ===================================================================
    // 17. HANDCRAFTED BRAND PAGE LOADER & ROUTE TRANSITION ENGINE
    // ===================================================================
    const pageLoader = document.getElementById('elavatex-page-loader');
    const loaderProgressFill = document.getElementById('loader-progress-fill');
    const loaderPercentNum = document.getElementById('loader-percent-num');

    function animateLoaderProgress(start, end, duration, onComplete) {
        const startTime = performance.now();
        function update(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const val = Math.floor(start + (end - start) * progress);
            
            if (loaderProgressFill) loaderProgressFill.style.width = val + '%';
            if (loaderPercentNum) loaderPercentNum.textContent = val + '%';

            if (progress < 1) {
                requestAnimationFrame(update);
            } else if (onComplete) {
                onComplete();
            }
        }
        requestAnimationFrame(update);
    }

    // Initial Page Load Reveal
    if (pageLoader) {
        animateLoaderProgress(0, 100, 500, () => {
            setTimeout(() => {
                pageLoader.classList.add('hidden-loader');
            }, 120);
        });
    }

    // Intercept Link Navigation for Handcrafted Page Switch Transition
    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a');
        if (!anchor) return;

        const href = anchor.getAttribute('href');
        const target = anchor.getAttribute('target');

        // Ignore empty href, external tabs, or javascript pseudo links
        if (!href || target === '_blank' || href.startsWith('javascript:') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('https://wa.me')) {
            return;
        }

        // If it's a same-page anchor link (starts with #)
        if (href.startsWith('#')) {
            return;
        }

        // Internal page switch (e.g. services/web-development.html or ../index.html)
        e.preventDefault();

        if (pageLoader) {
            pageLoader.classList.remove('hidden-loader');
            pageLoader.classList.add('active-exit');
            if (loaderProgressFill) loaderProgressFill.style.width = '0%';
            if (loaderPercentNum) loaderPercentNum.textContent = '0%';

            animateLoaderProgress(0, 100, 400, () => {
                window.location.href = href;
            });
        } else {
            window.location.href = href;
        }
    });

    // --------------------------------------------------------------------------
    // 19. Hero Mobile Phone Realistic Interactive Controller
    // --------------------------------------------------------------------------
    function updateHeroPhoneClock() {
        const clock = document.getElementById('hero-phone-clock');
        if (clock) {
            clock.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
    }
    updateHeroPhoneClock();
    setInterval(updateHeroPhoneClock, 30000);

    window.setHeroPhoneData = function(tf, btn) {
        document.querySelectorAll('.phone-tf-btn').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        
        const num = document.getElementById('hero-phone-num');
        const growth = document.getElementById('hero-phone-growth');
        const meta = document.getElementById('hero-phone-meta');
        const line = document.getElementById('hero-chart-line');
        const fill = document.getElementById('hero-chart-fill');
        
        if (tf === '1d') {
            if (num) num.textContent = '3.2K';
            if (growth) { growth.textContent = '+12.4%'; growth.style.color = '#38bdf8'; }
            if (meta) meta.textContent = "Today's Visitors";
            if (line) line.setAttribute('d', 'M0,60 Q50,45 90,50 T150,30 T200,20');
            if (fill) fill.setAttribute('d', 'M0,60 Q50,45 90,50 T150,30 T200,20 L200,70 L0,70 Z');
        } else if (tf === '7d') {
            if (num) num.textContent = '12.5K';
            if (growth) { growth.textContent = '+24.5%'; growth.style.color = '#10b981'; }
            if (meta) meta.textContent = 'Active Audience';
            if (line) line.setAttribute('d', 'M0,50 Q40,40 70,55 T140,25 T200,10');
            if (fill) fill.setAttribute('d', 'M0,50 Q40,40 70,55 T140,25 T200,10 L200,70 L0,70 Z');
        } else if (tf === '1m') {
            if (num) num.textContent = '48.9K';
            if (growth) { growth.textContent = '+118.2%'; growth.style.color = '#a855f7'; }
            if (meta) meta.textContent = 'Monthly Reach';
            if (line) line.setAttribute('d', 'M0,65 Q30,55 60,35 T130,20 T200,5');
            if (fill) fill.setAttribute('d', 'M0,65 Q30,55 60,35 T130,20 T200,5 L200,70 L0,70 Z');
        } else if (tf === '1y') {
            if (num) num.textContent = '184.2K';
            if (growth) { growth.textContent = '+340.5%'; growth.style.color = '#ec4899'; }
            if (meta) meta.textContent = 'Annual Conversions';
            if (line) line.setAttribute('d', 'M0,68 Q40,58 80,28 T140,12 T200,2');
            if (fill) fill.setAttribute('d', 'M0,68 Q40,58 80,28 T140,12 T200,2 L200,70 L0,70 Z');
        }
    };

    window.setHeroPhoneTab = function(icon) {
        document.querySelectorAll('.phone-nav-icon').forEach(i => i.classList.remove('active'));
        if (icon) icon.classList.add('active');
    };

    // -------------------------------------------------------------------------
    // HERO DYNAMIC WORD ROTATOR ("REAL GROWTH." -> "MAXIMUM REVENUE." etc.)
    // -------------------------------------------------------------------------
    function initHeroWordRotator() {
        const words = document.querySelectorAll('#hero-word-rotator .rotator-word');
        if (!words || words.length === 0) return;
        let currentIndex = 0;
        setInterval(() => {
            const currentWord = words[currentIndex];
            currentWord.classList.remove('active');
            currentWord.classList.add('exit');

            setTimeout(() => {
                currentWord.classList.remove('exit');
            }, 600);

            currentIndex = (currentIndex + 1) % words.length;
            words[currentIndex].classList.add('active');
        }, 2400);
    }
    initHeroWordRotator();

    // -------------------------------------------------------------------------
    // AGIBOT RAISE A1 (PREMIUM BIPEDAL HUMANOID ROBOT & KINEMATICS ENGINE)
    // -------------------------------------------------------------------------
    function initCyberBot() {
        const canvas = document.getElementById('robot-webgl-canvas');
        const container = document.getElementById('robot-canvas-stage');
        const actButtons = document.querySelectorAll('.robot-act-btn[data-action]');

        if (!canvas || !container || typeof THREE === 'undefined') return;

        let width = container.clientWidth || 600;
        let height = container.clientHeight || 480;

        // 1. Crystal-Clear Transparent WebGL Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.35;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // 2. Camera Framing (Frames AgiBot Humanoid in dynamic studio composition)
        const scene = new THREE.Scene();
        const isMobileInit = width < 640;
        const initFov = isMobileInit ? 36 : (width < 1024 ? 33 : 30);
        const initZ = isMobileInit ? 4.3 : (width < 1024 ? 4.1 : 3.8);
        const camera = new THREE.PerspectiveCamera(initFov, width / height, 0.1, 100);
        camera.position.set(0, 1.05, initZ);
        camera.lookAt(0, 0.95, 0);

        // 3. Cinematic Studio Lighting (Matching AgiBot Raise A1 Reference)
        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x1e293b, 0.75);
        scene.add(hemiLight);

        // Key light (soft white front-right)
        const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
        keyLight.position.set(2.8, 3.8, 3.2);
        keyLight.castShadow = true;
        keyLight.shadow.mapSize.width = 1024;
        keyLight.shadow.mapSize.height = 1024;
        keyLight.shadow.bias = -0.0005;
        scene.add(keyLight);

        // Fill light (cool slate front-left)
        const fillLight = new THREE.DirectionalLight(0x94a3b8, 0.65);
        fillLight.position.set(-3.0, 2.2, 2.5);
        scene.add(fillLight);

        // Cyan Rim / Kicker Light (Gives the signature AgiBot rim glow on helmet and shoulders)
        const rimLight = new THREE.DirectionalLight(0x00f0ff, 1.7);
        rimLight.position.set(1.5, 2.8, -2.8);
        scene.add(rimLight);

        // Subtle bottom blue glow
        const bottomGlow = new THREE.PointLight(0x0284c7, 1.2, 6);
        bottomGlow.position.set(0, 0.1, 0.5);
        scene.add(bottomGlow);

        // 4. Futuristic Ground Dais / Calibration Rings
        const daisGroup = new THREE.Group();
        daisGroup.position.y = 0.02;
        scene.add(daisGroup);

        const daisBase = new THREE.Mesh(
            new THREE.CylinderGeometry(0.85, 0.92, 0.04, 36),
            new THREE.MeshStandardMaterial({
                color: 0x0f172a,
                roughness: 0.6,
                metalness: 0.5
            })
        );
        daisBase.receiveShadow = true;
        daisGroup.add(daisBase);

        // Concentric Holographic Rings
        const ringOuter = new THREE.Mesh(
            new THREE.RingGeometry(0.72, 0.74, 48),
            new THREE.MeshBasicMaterial({ color: 0x00f0ff, side: THREE.DoubleSide, transparent: true, opacity: 0.65 })
        );
        ringOuter.rotation.x = Math.PI * 0.5;
        ringOuter.position.y = 0.022;
        daisGroup.add(ringOuter);

        const ringInner = new THREE.Mesh(
            new THREE.RingGeometry(0.50, 0.52, 36),
            new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, transparent: true, opacity: 0.85 })
        );
        ringInner.rotation.x = Math.PI * 0.5;
        ringInner.position.y = 0.023;
        daisGroup.add(ringInner);

        const ringTicks = new THREE.Mesh(
            new THREE.RingGeometry(0.28, 0.29, 24),
            new THREE.MeshBasicMaterial({ color: 0x00f0ff, side: THREE.DoubleSide, transparent: true, opacity: 0.7 })
        );
        ringTicks.rotation.x = Math.PI * 0.5;
        ringTicks.position.y = 0.024;
        daisGroup.add(ringTicks);

        // 5. Build AgiBot Raise A1 Humanoid Character
        function createAgiBotModel() {
            const robot = new THREE.Group();
            robot.name = 'AgiBot_Raise_A1';

            // Premium PBR Materials matching AgiBot Raise A1 reference photo
            const whiteArmorMat = new THREE.MeshStandardMaterial({
                color: 0xf8fafc,
                roughness: 0.22,
                metalness: 0.15
            });

            const blackChassisMat = new THREE.MeshStandardMaterial({
                color: 0x16181d,
                roughness: 0.55,
                metalness: 0.45
            });

            const darkJointMat = new THREE.MeshStandardMaterial({
                color: 0x22262e,
                roughness: 0.4,
                metalness: 0.7
            });

            const chromeMat = new THREE.MeshStandardMaterial({
                color: 0xdde3ea,
                roughness: 0.15,
                metalness: 0.95
            });

            const cyanGlowMat = new THREE.MeshBasicMaterial({
                color: 0x00f0ff
            });

            // Root node for vertical jumping and global offset
            const root = new THREE.Group();
            robot.add(root);

            // Pelvis & Hip Core
            const pelvis = new THREE.Group();
            pelvis.position.y = 0.96;
            root.add(pelvis);

            const pelvisCore = new THREE.Mesh(
                new THREE.CylinderGeometry(0.12, 0.10, 0.14, 16),
                blackChassisMat
            );
            pelvis.add(pelvisCore);

            // White hip fairing plates
            const hipLeftPlate = new THREE.Mesh(
                new THREE.BoxGeometry(0.06, 0.12, 0.14),
                whiteArmorMat
            );
            hipLeftPlate.position.set(-0.13, 0.01, 0);
            pelvis.add(hipLeftPlate);

            const hipRightPlate = hipLeftPlate.clone();
            hipRightPlate.position.x = 0.13;
            pelvis.add(hipRightPlate);

            // Torso Group (Pivots from waist)
            const torso = new THREE.Group();
            torso.position.y = 0.08;
            pelvis.add(torso);

            // Abdominal Spine Articulation (matte black segmented spine)
            for (let i = 0; i < 3; i++) {
                const spineSegment = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.09 - i * 0.005, 0.10 - i * 0.005, 0.045, 14),
                    blackChassisMat
                );
                spineSegment.position.y = 0.04 + i * 0.05;
                torso.add(spineSegment);
            }

            // Chest & Ribcage Armor Structure
            const chestGroup = new THREE.Group();
            chestGroup.position.y = 0.22;
            torso.add(chestGroup);

            // Inner Black Chassis Ribs
            const chestCore = new THREE.Mesh(
                new THREE.BoxGeometry(0.26, 0.24, 0.18),
                blackChassisMat
            );
            chestGroup.add(chestCore);

            // Outer Aerodynamic White Chest Armor Plate
            const chestPlate = new THREE.Mesh(
                new THREE.BoxGeometry(0.28, 0.22, 0.12),
                whiteArmorMat
            );
            chestPlate.position.set(0, 0.02, 0.05);
            chestGroup.add(chestPlate);

            // Chest Brand Accent Ridge
            const chestRidge = new THREE.Mesh(
                new THREE.BoxGeometry(0.18, 0.04, 0.02),
                darkJointMat
            );
            chestRidge.position.set(0, 0.08, 0.115);
            chestGroup.add(chestRidge);

            // Iconic Cyan LED Lower Chest Arc / Glow Strip
            const chestLedStrip = new THREE.Mesh(
                new THREE.TorusGeometry(0.10, 0.009, 8, 24, Math.PI * 0.8),
                cyanGlowMat
            );
            chestLedStrip.rotation.x = Math.PI * 0.5;
            chestLedStrip.rotation.z = Math.PI * 0.6;
            chestLedStrip.position.set(0, -0.05, 0.112);
            chestGroup.add(chestLedStrip);

            // Back Battery / Pack Housing
            const backPack = new THREE.Mesh(
                new THREE.BoxGeometry(0.22, 0.20, 0.08),
                whiteArmorMat
            );
            backPack.position.set(0, 0.02, -0.10);
            chestGroup.add(backPack);

            // Neck Assembly & Dual Hydraulic Cylinders
            const neck = new THREE.Group();
            neck.position.y = 0.16;
            chestGroup.add(neck);

            const neckPivot = new THREE.Mesh(
                new THREE.CylinderGeometry(0.04, 0.045, 0.08, 12),
                blackChassisMat
            );
            neck.add(neckPivot);

            // Dual Hydraulic Actuators
            const neckHydroL = new THREE.Mesh(
                new THREE.CylinderGeometry(0.01, 0.01, 0.07, 8),
                chromeMat
            );
            neckHydroL.position.set(-0.035, 0, 0.015);
            neck.add(neckHydroL);

            const neckHydroR = neckHydroL.clone();
            neckHydroR.position.x = 0.035;
            neck.add(neckHydroR);

            // Head Group (Smooth tracking pivot)
            const head = new THREE.Group();
            head.position.y = 0.07;
            neck.add(head);

            // Obsidian Dark Face Helmet (AgiBot Head Profile)
            const helmetCranium = new THREE.Mesh(
                new THREE.SphereGeometry(0.095, 24, 20),
                blackChassisMat
            );
            helmetCranium.scale.set(1.0, 1.25, 1.15);
            head.add(helmetCranium);

            // Aerodynamic Rear Head Shell (White Top / Back Accent)
            const helmetRearPlate = new THREE.Mesh(
                new THREE.SphereGeometry(0.098, 20, 16, 0, Math.PI * 2, 0, Math.PI * 0.45),
                whiteArmorMat
            );
            helmetRearPlate.position.set(0, 0.02, -0.02);
            head.add(helmetRearPlate);

            // Curved Glossy Obsidian Visor Face Plate
            const visorMesh = new THREE.Mesh(
                new THREE.CylinderGeometry(0.072, 0.065, 0.14, 16, 1, false, -Math.PI * 0.35, Math.PI * 0.7),
                new THREE.MeshStandardMaterial({
                    color: 0x08090c,
                    roughness: 0.1,
                    metalness: 0.8
                })
            );
            visorMesh.position.set(0, 0.01, 0.05);
            head.add(visorMesh);

            // TWO VERTICAL CYAN LED SLIT EYES (Iconic AgiBot Raise A1 signature: ||)
            const leftEye = new THREE.Mesh(
                new THREE.BoxGeometry(0.013, 0.046, 0.01),
                cyanGlowMat
            );
            leftEye.position.set(-0.032, 0.018, 0.108);
            leftEye.rotation.y = -0.12;
            head.add(leftEye);

            const rightEye = new THREE.Mesh(
                new THREE.BoxGeometry(0.013, 0.046, 0.01),
                cyanGlowMat
            );
            rightEye.position.set(0.032, 0.018, 0.108);
            rightEye.rotation.y = 0.12;
            head.add(rightEye);

            // Ear Pod Sensor Rings
            const leftEar = new THREE.Mesh(
                new THREE.CylinderGeometry(0.024, 0.024, 0.012, 16),
                darkJointMat
            );
            leftEar.rotation.z = Math.PI * 0.5;
            leftEar.position.set(-0.102, 0.01, 0.01);
            head.add(leftEar);

            const leftEarLight = new THREE.Mesh(
                new THREE.RingGeometry(0.012, 0.020, 16),
                cyanGlowMat
            );
            leftEarLight.rotation.y = -Math.PI * 0.5;
            leftEarLight.position.set(-0.109, 0.01, 0.01);
            head.add(leftEarLight);

            const rightEar = leftEar.clone();
            rightEar.position.x = 0.102;
            head.add(rightEar);

            const rightEarLight = leftEarLight.clone();
            rightEarLight.rotation.y = Math.PI * 0.5;
            rightEarLight.position.x = 0.109;
            head.add(rightEarLight);

            // LIMBS FUNCTION: Arms (5-Finger Dexterous Hands)
            function buildArm(isLeft) {
                const side = isLeft ? -1 : 1;
                const shoulderPivot = new THREE.Group();
                shoulderPivot.position.set(side * 0.20, 0.12, 0);

                // Shoulder Ball Joint
                const shoulderBall = new THREE.Mesh(
                    new THREE.SphereGeometry(0.052, 16, 14),
                    darkJointMat
                );
                shoulderPivot.add(shoulderBall);

                // White Deltoid Cowl
                const shoulderCowl = new THREE.Mesh(
                    new THREE.SphereGeometry(0.065, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.6),
                    whiteArmorMat
                );
                shoulderCowl.position.set(side * 0.015, 0.02, 0);
                shoulderPivot.add(shoulderCowl);

                // Upper Arm
                const upperArm = new THREE.Group();
                shoulderPivot.add(upperArm);

                const bicepCore = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.038, 0.034, 0.18, 12),
                    blackChassisMat
                );
                bicepCore.position.y = -0.10;
                upperArm.add(bicepCore);

                // White Armor Plate on Bicep
                const bicepArmor = new THREE.Mesh(
                    new THREE.BoxGeometry(0.055, 0.14, 0.06),
                    whiteArmorMat
                );
                bicepArmor.position.set(side * 0.015, -0.10, 0.01);
                upperArm.add(bicepArmor);

                // Elbow Joint
                const elbowPivot = new THREE.Group();
                elbowPivot.position.y = -0.21;
                upperArm.add(elbowPivot);

                const elbowDisc = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.038, 0.038, 0.05, 14),
                    darkJointMat
                );
                elbowDisc.rotation.z = Math.PI * 0.5;
                elbowPivot.add(elbowDisc);

                // Forearm Group
                const forearm = new THREE.Group();
                elbowPivot.add(forearm);

                const forearmCore = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.034, 0.028, 0.18, 12),
                    blackChassisMat
                );
                forearmCore.position.y = -0.10;
                forearm.add(forearmCore);

                // Aerodynamic White Forearm Shell
                const forearmArmor = new THREE.Mesh(
                    new THREE.BoxGeometry(0.054, 0.15, 0.056),
                    whiteArmorMat
                );
                forearmArmor.position.set(side * 0.01, -0.10, 0.01);
                forearm.add(forearmArmor);

                // Wrist Joint
                const wristPivot = new THREE.Group();
                wristPivot.position.y = -0.20;
                forearm.add(wristPivot);

                const wristRing = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.025, 0.025, 0.03, 12),
                    darkJointMat
                );
                wristPivot.add(wristRing);

                // Hand Group (5 Articulated Dexterous Fingers)
                const hand = new THREE.Group();
                wristPivot.add(hand);

                // Palm Core
                const palm = new THREE.Mesh(
                    new THREE.BoxGeometry(0.046, 0.055, 0.022),
                    blackChassisMat
                );
                palm.position.y = -0.035;
                hand.add(palm);

                // Fingers (Thumb + 4 Fingers)
                for (let f = 0; f < 4; f++) {
                    const fx = (f - 1.5) * 0.011;
                    const fingerLen = (f === 1 || f === 2) ? 0.042 : 0.036;

                    const fingerBase = new THREE.Mesh(
                        new THREE.BoxGeometry(0.008, fingerLen * 0.55, 0.009),
                        darkJointMat
                    );
                    fingerBase.position.set(fx, -0.065 - fingerLen * 0.25, 0);
                    hand.add(fingerBase);

                    const fingerTip = new THREE.Mesh(
                        new THREE.BoxGeometry(0.007, fingerLen * 0.45, 0.008),
                        blackChassisMat
                    );
                    fingerTip.position.set(fx, -0.065 - fingerLen * 0.75, 0.002);
                    hand.add(fingerTip);
                }

                // Thumb
                const thumbGroup = new THREE.Group();
                thumbGroup.position.set(side * 0.024, -0.04, 0.006);
                thumbGroup.rotation.z = side * 0.45;
                thumbGroup.rotation.y = side * 0.35;
                hand.add(thumbGroup);

                const thumbPhalange = new THREE.Mesh(
                    new THREE.BoxGeometry(0.008, 0.032, 0.009),
                    darkJointMat
                );
                thumbPhalange.position.y = -0.016;
                thumbGroup.add(thumbPhalange);

                return {
                    shoulder: shoulderPivot,
                    upperArm: upperArm,
                    elbow: elbowPivot,
                    forearm: forearm,
                    wrist: wristPivot,
                    hand: hand
                };
            }

            const leftArm = buildArm(true);
            chestGroup.add(leftArm.shoulder);

            const rightArm = buildArm(false);
            chestGroup.add(rightArm.shoulder);

            // LIMBS FUNCTION: Legs with Rear Hydraulic Damper Struts
            function buildLeg(isLeft) {
                const side = isLeft ? -1 : 1;
                const hipPivot = new THREE.Group();
                hipPivot.position.set(side * 0.11, -0.06, 0);

                // Hip Joint
                const hipBall = new THREE.Mesh(
                    new THREE.SphereGeometry(0.058, 16, 14),
                    darkJointMat
                );
                hipPivot.add(hipBall);

                // Thigh
                const thighGroup = new THREE.Group();
                hipPivot.add(thighGroup);

                const thighCore = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.052, 0.045, 0.36, 14),
                    blackChassisMat
                );
                thighCore.position.y = -0.20;
                thighGroup.add(thighCore);

                // Athletic Pearlescent White Front & Outer Armor Shell
                const thighPlate = new THREE.Mesh(
                    new THREE.BoxGeometry(0.09, 0.34, 0.10),
                    whiteArmorMat
                );
                thighPlate.position.set(side * 0.01, -0.20, 0.02);
                thighGroup.add(thighPlate);

                // Knee Joint
                const kneePivot = new THREE.Group();
                kneePivot.position.y = -0.40;
                thighGroup.add(kneePivot);

                const kneeCap = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.048, 0.048, 0.07, 16),
                    darkJointMat
                );
                kneeCap.rotation.z = Math.PI * 0.5;
                kneePivot.add(kneeCap);

                const kneePuck = new THREE.Mesh(
                    new THREE.BoxGeometry(0.06, 0.06, 0.04),
                    whiteArmorMat
                );
                kneePuck.position.set(0, 0, 0.04);
                kneePivot.add(kneePuck);

                // Calf / Lower Leg
                const calfGroup = new THREE.Group();
                kneePivot.add(calfGroup);

                const calfCore = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.042, 0.035, 0.38, 14),
                    blackChassisMat
                );
                calfCore.position.y = -0.20;
                calfGroup.add(calfCore);

                // Slender White Shin Guard Armor
                const shinArmor = new THREE.Mesh(
                    new THREE.BoxGeometry(0.075, 0.34, 0.08),
                    whiteArmorMat
                );
                shinArmor.position.set(0, -0.19, 0.025);
                calfGroup.add(shinArmor);

                // REAR HYDRAULIC DAMPER STRUT RODS (AgiBot Photo Signature Detail!)
                const damperRodUpper = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.007, 0.007, 0.22, 8),
                    chromeMat
                );
                damperRodUpper.position.set(side * 0.02, -0.16, -0.05);
                calfGroup.add(damperRodUpper);

                const damperSleeve = new THREE.Mesh(
                    new THREE.CylinderGeometry(0.012, 0.012, 0.12, 8),
                    darkJointMat
                );
                damperSleeve.position.set(side * 0.02, -0.25, -0.05);
                calfGroup.add(damperSleeve);

                // Ankle & Foot
                const anklePivot = new THREE.Group();
                anklePivot.position.y = -0.42;
                calfGroup.add(anklePivot);

                const ankleJoint = new THREE.Mesh(
                    new THREE.SphereGeometry(0.035, 12, 10),
                    darkJointMat
                );
                anklePivot.add(ankleJoint);

                // Foot / Robotic Boot
                const foot = new THREE.Group();
                foot.position.set(0, -0.02, 0.02);
                anklePivot.add(foot);

                const footBase = new THREE.Mesh(
                    new THREE.BoxGeometry(0.08, 0.045, 0.19),
                    blackChassisMat
                );
                footBase.position.set(0, -0.02, 0.03);
                foot.add(footBase);

                const footTopFairing = new THREE.Mesh(
                    new THREE.BoxGeometry(0.074, 0.035, 0.12),
                    whiteArmorMat
                );
                footTopFairing.position.set(0, 0.005, 0.02);
                foot.add(footTopFairing);

                return {
                    hip: hipPivot,
                    thigh: thighGroup,
                    knee: kneePivot,
                    calf: calfGroup,
                    ankle: anklePivot,
                    foot: foot
                };
            }

            const leftLeg = buildLeg(true);
            pelvis.add(leftLeg.hip);

            const rightLeg = buildLeg(false);
            pelvis.add(rightLeg.hip);

            return {
                robot,
                root,
                pelvis,
                torso,
                chestGroup,
                neck,
                head,
                leftEye,
                rightEye,
                leftArm,
                rightArm,
                leftLeg,
                rightLeg
            };
        }

        const bot = createAgiBotModel();
        scene.add(bot.robot);

        // 6. Kinematic State Machine
        let currentAction = 'Walk';
        let actionElapsed = 0;
        let userInteracted = false;

        function setAction(name) {
            currentAction = name;
            actionElapsed = 0;
            actButtons.forEach(btn => {
                const act = btn.getAttribute('data-action');
                if (act === name) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        actButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                userInteracted = true;
                const act = btn.getAttribute('data-action');
                if (act) setAction(act);
            });
        });

        // 7. Interactive Mouse / Touch Drag Orbit
        let isDragging = false;
        let prevMouseX = 0;
        let orbitYaw = 0;
        let orbitVel = 0;

        // Cursor Tracking Variables (Head moves smoothly with mouse cursor)
        let mouseNormX = 0;
        let mouseNormY = 0;
        let targetHeadYaw = 0;
        let targetHeadPitch = 0;

        function onPointerMove(e) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;

            // Update normalized cursor position (-1 to +1)
            const rect = canvas.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
                mouseNormX = ((clientX - rect.left) / rect.width) * 2 - 1;
                mouseNormY = ((clientY - rect.top) / rect.height) * 2 - 1;
            } else {
                mouseNormX = (clientX / window.innerWidth) * 2 - 1;
                mouseNormY = (clientY / window.innerHeight) * 2 - 1;
            }

            // Clamp values
            mouseNormX = Math.max(-1.5, Math.min(1.5, mouseNormX));
            mouseNormY = Math.max(-1.5, Math.min(1.5, mouseNormY));

            if (isDragging) {
                const deltaX = clientX - prevMouseX;
                orbitVel = deltaX * 0.007;
                orbitYaw += orbitVel;
                prevMouseX = clientX;
            }
        }

        function onPointerDown(e) {
            isDragging = true;
            userInteracted = true;
            prevMouseX = e.touches ? e.touches[0].clientX : e.clientX;
        }

        function onPointerUp() {
            isDragging = false;
        }

        window.addEventListener('mousemove', onPointerMove, { passive: true });
        window.addEventListener('touchmove', onPointerMove, { passive: true });
        container.addEventListener('mousedown', onPointerDown);
        window.addEventListener('mouseup', onPointerUp);
        container.addEventListener('touchstart', onPointerDown, { passive: true });
        window.addEventListener('touchend', onPointerUp, { passive: true });

        // 8. Real-time Animation & Kinematics Loop
        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);

            const delta = Math.min(clock.getDelta(), 0.1);
            const time = clock.getElapsedTime();
            actionElapsed += delta;

            // Inertia decay for horizontal drag orbit
            if (!isDragging) {
                orbitVel *= 0.92;
                orbitYaw += orbitVel;
            }
            bot.robot.rotation.y = orbitYaw;

            // Dais subtle holographic rotation & pulse
            ringOuter.rotation.z = time * 0.15;
            ringInner.rotation.z = -time * 0.22;
            const eyeGlow = 0.85 + Math.sin(time * 3.5) * 0.15;
            bot.leftEye.scale.set(1.0, eyeGlow, 1.0);
            bot.rightEye.scale.set(1.0, eyeGlow, 1.0);

            // CURSOR-DRIVEN HEAD & NECK TRACKING
            // User requested: "its heads should move or rotate along with the cursor"
            targetHeadYaw = mouseNormX * 0.65;     // Horizontal yaw up to ~37 degrees
            targetHeadPitch = mouseNormY * 0.35;   // Vertical pitch up to ~20 degrees
            const targetHeadRoll = -mouseNormX * 0.10;

            bot.head.rotation.y = THREE.MathUtils.lerp(bot.head.rotation.y, targetHeadYaw, 0.10);
            bot.head.rotation.x = THREE.MathUtils.lerp(bot.head.rotation.x, targetHeadPitch, 0.10);
            bot.head.rotation.z = THREE.MathUtils.lerp(bot.head.rotation.z, targetHeadRoll, 0.10);

            // Gentle upper body torso assist following cursor
            const targetTorsoYaw = mouseNormX * 0.20;

            // KINEMATICS ACCORDING TO ACTION
            if (currentAction === 'Walk') {
                // Natural Humanoid Bipedal Stride
                const walkFreq = 3.6;
                const w = time * walkFreq;
                const legSwing = Math.sin(w) * 0.45;
                const armSwing = Math.sin(w) * 0.38;

                // Pelvis natural bounce & hips counter-oscillation
                bot.root.position.y = Math.abs(Math.sin(w)) * 0.035;
                bot.pelvis.rotation.z = Math.sin(w) * 0.03;
                bot.torso.rotation.y = THREE.MathUtils.lerp(bot.torso.rotation.y, targetTorsoYaw - Math.sin(w) * 0.08, 0.12);
                bot.torso.rotation.x = 0.04; // subtle forward athletic lean

                // Legs kinematics
                bot.leftLeg.hip.rotation.x = legSwing;
                bot.rightLeg.hip.rotation.x = -legSwing;

                bot.leftLeg.knee.rotation.x = Math.max(0, -Math.cos(w) * 0.58);
                bot.rightLeg.knee.rotation.x = Math.max(0, Math.cos(w) * 0.58);

                bot.leftLeg.ankle.rotation.x = -legSwing * 0.5;
                bot.rightLeg.ankle.rotation.x = legSwing * 0.5;

                // Arms reciprocal swing
                bot.leftArm.shoulder.rotation.x = -armSwing;
                bot.leftArm.shoulder.rotation.z = -0.15;
                bot.leftArm.elbow.rotation.x = 0.25 + Math.max(0, -armSwing * 0.3);

                bot.rightArm.shoulder.rotation.x = armSwing;
                bot.rightArm.shoulder.rotation.z = 0.15;
                bot.rightArm.elbow.rotation.x = 0.25 + Math.max(0, armSwing * 0.3);

            } else if (currentAction === 'Wave') {
                // FIXED FORWARD WAVE: Waving hand strictly IN FRONT of robot facing user!
                const waveCycle = Math.sin(time * 6.5);
                bot.root.position.y = THREE.MathUtils.lerp(bot.root.position.y, 0, 0.1);
                bot.torso.rotation.y = THREE.MathUtils.lerp(bot.torso.rotation.y, targetTorsoYaw, 0.10);
                bot.torso.rotation.x = THREE.MathUtils.lerp(bot.torso.rotation.x, 0.02, 0.10);
                bot.torso.rotation.z = THREE.MathUtils.lerp(bot.torso.rotation.z, -0.04, 0.10); // weight shift

                // Right Arm: Raised high, angled outward, FOREARM IN FRONT (+Z)
                const targetRShoulderX = -1.80;
                const targetRShoulderY = -0.60;
                const targetRShoulderZ = 0.75 + waveCycle * 0.18;
                const targetRElbowX = 0.45;
                const targetRHandZ = waveCycle * 0.30;

                bot.rightArm.shoulder.rotation.x = THREE.MathUtils.lerp(bot.rightArm.shoulder.rotation.x, targetRShoulderX, 0.15);
                bot.rightArm.shoulder.rotation.y = THREE.MathUtils.lerp(bot.rightArm.shoulder.rotation.y, targetRShoulderY, 0.15);
                bot.rightArm.shoulder.rotation.z = THREE.MathUtils.lerp(bot.rightArm.shoulder.rotation.z, targetRShoulderZ, 0.15);
                bot.rightArm.elbow.rotation.x = THREE.MathUtils.lerp(bot.rightArm.elbow.rotation.x, targetRElbowX, 0.15);
                bot.rightArm.hand.rotation.z = targetRHandZ;

                // Left Arm: Relaxed at side with subtle balance sway
                bot.leftArm.shoulder.rotation.x = THREE.MathUtils.lerp(bot.leftArm.shoulder.rotation.x, 0.08, 0.1);
                bot.leftArm.shoulder.rotation.z = THREE.MathUtils.lerp(bot.leftArm.shoulder.rotation.z, -0.15, 0.1);
                bot.leftArm.elbow.rotation.x = THREE.MathUtils.lerp(bot.leftArm.elbow.rotation.x, 0.18, 0.1);

                // Legs neutral balanced stance
                bot.leftLeg.hip.rotation.x = THREE.MathUtils.lerp(bot.leftLeg.hip.rotation.x, 0, 0.1);
                bot.rightLeg.hip.rotation.x = THREE.MathUtils.lerp(bot.rightLeg.hip.rotation.x, 0, 0.1);
                bot.leftLeg.knee.rotation.x = THREE.MathUtils.lerp(bot.leftLeg.knee.rotation.x, 0.05, 0.1);
                bot.rightLeg.knee.rotation.x = THREE.MathUtils.lerp(bot.rightLeg.knee.rotation.x, 0.05, 0.1);

            } else if (currentAction === 'Greet') {
                // FIXED FORWARD GREETING / HANDSHAKE: Extends hand directly forward (+Z) toward user!
                const shakeCycle = Math.sin(actionElapsed * 6.0) * 0.08;
                bot.root.position.y = THREE.MathUtils.lerp(bot.root.position.y, 0, 0.1);

                // Polite upper torso forward inclination
                bot.torso.rotation.x = THREE.MathUtils.lerp(bot.torso.rotation.x, 0.08, 0.12);
                bot.torso.rotation.y = THREE.MathUtils.lerp(bot.torso.rotation.y, targetTorsoYaw + 0.05, 0.10);
                bot.torso.rotation.z = THREE.MathUtils.lerp(bot.torso.rotation.z, 0, 0.10);

                // Right Arm: Reaching straight out toward camera
                const targetRShoulderX = -1.45 + shakeCycle;
                const targetRShoulderY = 0.10;
                const targetRShoulderZ = -0.15;
                const targetRElbowX = 0.20;

                bot.rightArm.shoulder.rotation.x = THREE.MathUtils.lerp(bot.rightArm.shoulder.rotation.x, targetRShoulderX, 0.15);
                bot.rightArm.shoulder.rotation.y = THREE.MathUtils.lerp(bot.rightArm.shoulder.rotation.y, targetRShoulderY, 0.15);
                bot.rightArm.shoulder.rotation.z = THREE.MathUtils.lerp(bot.rightArm.shoulder.rotation.z, targetRShoulderZ, 0.15);
                bot.rightArm.elbow.rotation.x = THREE.MathUtils.lerp(bot.rightArm.elbow.rotation.x, targetRElbowX, 0.15);
                bot.rightArm.hand.rotation.x = -0.10;
                bot.rightArm.hand.rotation.y = 0.15;

                // Left Arm: Tucked neatly at side
                bot.leftArm.shoulder.rotation.x = THREE.MathUtils.lerp(bot.leftArm.shoulder.rotation.x, 0.05, 0.1);
                bot.leftArm.shoulder.rotation.z = THREE.MathUtils.lerp(bot.leftArm.shoulder.rotation.z, -0.14, 0.1);
                bot.leftArm.elbow.rotation.x = THREE.MathUtils.lerp(bot.leftArm.elbow.rotation.x, 0.15, 0.1);

                // Legs firm grounded stance
                bot.leftLeg.hip.rotation.x = THREE.MathUtils.lerp(bot.leftLeg.hip.rotation.x, 0, 0.1);
                bot.rightLeg.hip.rotation.x = THREE.MathUtils.lerp(bot.rightLeg.hip.rotation.x, 0, 0.1);
                bot.leftLeg.knee.rotation.x = THREE.MathUtils.lerp(bot.leftLeg.knee.rotation.x, 0.05, 0.1);
                bot.rightLeg.knee.rotation.x = THREE.MathUtils.lerp(bot.rightLeg.knee.rotation.x, 0.05, 0.1);

            } else if (currentAction === 'Jump') {
                // Athletic Humanoid Leap & Cushion
                const jumpPeriod = 1.6;
                const phase = (actionElapsed % jumpPeriod) / jumpPeriod;

                if (phase < 0.25) {
                    // Crouch prepare
                    const p = phase / 0.25;
                    bot.root.position.y = -0.12 * Math.sin(p * Math.PI);
                    bot.leftLeg.hip.rotation.x = -0.35 * p;
                    bot.rightLeg.hip.rotation.x = -0.35 * p;
                    bot.leftLeg.knee.rotation.x = 0.65 * p;
                    bot.rightLeg.knee.rotation.x = 0.65 * p;
                    bot.leftArm.shoulder.rotation.x = 0.4 * p;
                    bot.rightArm.shoulder.rotation.x = 0.4 * p;
                } else if (phase < 0.70) {
                    // Airborne Jump Peak
                    const p = (phase - 0.25) / 0.45;
                    const jumpHeight = Math.sin(p * Math.PI) * 0.48;
                    bot.root.position.y = jumpHeight;

                    bot.leftLeg.hip.rotation.x = 0.25;
                    bot.rightLeg.hip.rotation.x = -0.15;
                    bot.leftLeg.knee.rotation.x = 0.35;
                    bot.rightLeg.knee.rotation.x = 0.45;

                    // Arms flared for aerodynamic balance
                    bot.leftArm.shoulder.rotation.z = -0.7;
                    bot.rightArm.shoulder.rotation.z = 0.7;
                    bot.leftArm.shoulder.rotation.x = -0.3;
                    bot.rightArm.shoulder.rotation.x = -0.3;
                } else {
                    // Landing cushion
                    const p = (phase - 0.70) / 0.30;
                    bot.root.position.y = THREE.MathUtils.lerp(bot.root.position.y, 0, 0.2);
                    bot.leftLeg.hip.rotation.x = THREE.MathUtils.lerp(bot.leftLeg.hip.rotation.x, 0, 0.2);
                    bot.rightLeg.hip.rotation.x = THREE.MathUtils.lerp(bot.rightLeg.hip.rotation.x, 0, 0.2);
                    bot.leftLeg.knee.rotation.x = THREE.MathUtils.lerp(bot.leftLeg.knee.rotation.x, 0.05, 0.2);
                    bot.rightLeg.knee.rotation.x = THREE.MathUtils.lerp(bot.rightLeg.knee.rotation.x, 0.05, 0.2);
                    bot.leftArm.shoulder.rotation.z = THREE.MathUtils.lerp(bot.leftArm.shoulder.rotation.z, -0.15, 0.2);
                    bot.rightArm.shoulder.rotation.z = THREE.MathUtils.lerp(bot.rightArm.shoulder.rotation.z, 0.15, 0.2);
                }
            }

            renderer.render(scene, camera);
        }

        animate();

        // 9. Dynamic Responsive Resize Handler
        function onWindowResize() {
            if (!container) return;
            width = container.clientWidth || 600;
            height = container.clientHeight || 480;

            camera.aspect = width / height;
            if (width < 640) {
                camera.fov = 36;
                camera.position.set(0, 1.05, 4.3);
            } else if (width < 1024) {
                camera.fov = 33;
                camera.position.set(0, 1.05, 4.1);
            } else {
                camera.fov = 30;
                camera.position.set(0, 1.05, 3.8);
            }
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }
        window.addEventListener('resize', onWindowResize);

        // 10. Auto-Demonstration Loop (Walk -> Wave -> Greet -> Jump)
        const autoCycle = ['Walk', 'Wave', 'Greet', 'Jump'];
        let cycleIdx = 0;
        setInterval(() => {
            if (!userInteracted) {
                cycleIdx = (cycleIdx + 1) % autoCycle.length;
                setAction(autoCycle[cycleIdx]);
            }
        }, 9000);
    }
    initCyberBot();
});
