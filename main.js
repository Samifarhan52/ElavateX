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
            date: "Recent"
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
            alert('🎉 Thank you! Your review has been published live on ElavateX.com & saved to Firebase!');
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
    // 5. Dark / Light Theme Mode Toggle Engine
    // ----------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const drawerThemeToggleBtn = document.getElementById('drawer-theme-toggle-btn');
    const htmlEl = document.documentElement;

    const savedTheme = localStorage.getItem('elavatex_theme') || 'light';
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

    function toggleTheme() {
        const currentTheme = htmlEl.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (drawerThemeToggleBtn) drawerThemeToggleBtn.addEventListener('click', toggleTheme);

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
            { name: "Shelter Hunt Consultants", url: "https://shelterhuntconsultants.com", category: "Real Estate Portal" },
            { name: "Online Gaming Tournaments", url: "https://sp-three-liart.vercel.app", category: "Esports Competition Platform" },
            { name: "Farhanulla Portfolio", url: "https://farhanulla.me", category: "Showcase Platform" }
        ],
        contact: {
            whatsapp: "https://wa.me/917676808068",
            phone: "+91 7676808068",
            instagram: "https://www.instagram.com/elavatex_dev?igsh=cm5rd3JqdGQ2ZWo1"
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
                            Hi! I'm ElavateX AI 👋<br><br>${pageContextMsg}
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
                { label: "🌐 Web Development", action: "web" },
                { label: "📱 Mobile App Dev", action: "mobile" },
                { label: "🔥 Social Media Growth", action: "smm" }
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
                smmNote = `<br><br>💡 *Tip:* Since you're building/launching a website${biz}, you may also want to consider our Social Media Marketing service to drive consistent online traffic.`;
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
                smmNote = `<br><br>💡 *Tip:* Once your app is ready for launch, our Social Media Marketing service can help build your user base through targeted campaigns.`;
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
        if (query.includes('project') || query.includes('shelter') || query.includes('game') || query.includes('esports') || query.includes('built') || query.includes('work') || query.includes('portfolio') || query.includes('client')) {
            reply.text = `Here are some of the real digital products built by ElavateX:<br><br>
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
                        return `<a href="${ELAVATEX_KNOWLEDGE.contact.whatsapp}" target="_blank" class="chat-action-btn chat-action-btn-whatsapp">💬 ${b.label}</a>`;
                    } else if (b.action === 'link-web') {
                        return `<a href="services/web-development.html" class="chat-action-btn">🌐 ${b.label}</a>`;
                    } else if (b.action === 'link-mobile') {
                        return `<a href="services/mobile-app-development.html" class="chat-action-btn">📱 ${b.label}</a>`;
                    } else if (b.action === 'link-smm') {
                        return `<a href="services/social-media-management.html" class="chat-action-btn">🔥 ${b.label}</a>`;
                    } else if (b.action === 'link-projects') {
                        return `<a href="#case-studies" class="chat-action-btn" onclick="document.getElementById('chatbot-container').classList.remove('open')">💼 ${b.label}</a>`;
                    } else {
                        return `<button type="button" class="chat-action-btn" data-action="${b.action}">🚀 ${b.label}</button>`;
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
                    <div class="chat-lead-title">🚀 Start Your Project with ElavateX</div>
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
                        ✅ <strong>Thanks! Your enquiry has been received.</strong><br>
                        Our team will review your project requirements and contact you shortly.<br><br>
                        <a href="${whatsappUrl}" target="_blank" class="chat-action-btn chat-action-btn-whatsapp" style="margin-top:4px;">
                            💬 Continue on WhatsApp &rarr;
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
                } else {
                    // Smoothly reverse/reset when leaving the viewport
                    entry.target.classList.remove('reveal-active');
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
    const tiltCards = document.querySelectorAll('.service-card-creative, .portfolio-card-creative');
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

            if (comingSoonTimer) clearTimeout(comingSoonTimer);
            // Automatically close after 9 seconds (9000ms)
            comingSoonTimer = setTimeout(() => {
                hideComingSoonModal();
            }, 9000);
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
});




