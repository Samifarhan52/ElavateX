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

        if (logoStage && logo3dWrapper && logoMark && logoRender && logoWireframe && brandText && letters.length > 0 && ribbons.length > 0) {
            
            // 1. Prepare Initial States (Progressive Enhancement - hide only if timeline is running)
            gsap.set('.navbar-header', { opacity: 0, y: -20 });
            gsap.set('.navbar-header .brand-logo', { opacity: 0 });
            gsap.set(['.hero-badge', '.hero-title', '.hero-subtitle', '.hero-cta-group', '.metrics-grid'], { opacity: 0, y: 35 });
            
            // Generate Floating Particles
            if (particlesContainer) {
                const count = 18;
                for (let i = 0; i < count; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'intro-particle';
                    const size = Math.random() * 3 + 2; // 2px to 5px
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
                    
                    // Endless floating drift
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

            // Set initial paths offset length for draw-in effect
            ribbons.forEach(ribbon => {
                const len = ribbon.getTotalLength();
                gsap.set(ribbon, { strokeDasharray: len, strokeDashoffset: len, opacity: 0 });
            });
            const wireframeLen = logoWireframe.getTotalLength();
            gsap.set(logoWireframe, { strokeDasharray: wireframeLen, strokeDashoffset: wireframeLen, opacity: 0 });

            // Horizontal Centering Math for Logo Mark
            const W_t = brandText.offsetWidth || 180;
            const Gap = 16;
            const initShift = (W_t + Gap) / 2;

            // Set initial 3D transforms for Logo wrapper
            gsap.set(logo3dWrapper, { x: initShift, rotateY: -12, rotateX: 6 });
            gsap.set(logoStage, { scale: 0.9 });
            gsap.set(letters, { opacity: 0, x: -140, z: -50, filter: "blur(12px)" });

            // Initialize Master Timeline
            tl = gsap.timeline();

            // Scene 1 — Darkness & Volumetric Ambient Glow
            tl.to(ambientGlow, {
                opacity: 0.7,
                scale: 1.0,
                duration: 2.2,
                ease: "power2.out"
            }, 0)
            .to(logoStage, {
                scale: 1.0,
                duration: 4.8, // Slow camera push forward
                ease: "power1.out"
            }, 0)

            // Scene 2 — Light Creates Geometry (Liquid light ribbons draw in)
            .to(ribbons, {
                opacity: (i, target) => {
                    if (target.classList.contains('ribbon-core')) return 1;
                    if (target.classList.contains('ribbon-mid')) return 0.6;
                    return 0.25;
                },
                strokeDashoffset: 0,
                duration: 2.0,
                ease: "power2.inOut",
                stagger: 0.05
            }, 0.5)
            // Logo wireframe path ignites from ribbon intersection
            .to(logoWireframe, {
                opacity: 0.8,
                strokeDashoffset: 0,
                duration: 2.0,
                ease: "power2.inOut"
            }, 1.5)
            // Dissolve active drawing ribbons
            .to(ribbons, {
                opacity: 0,
                duration: 1.0,
                ease: "power2.out"
            }, 2.4)

            // Scene 3 — Material Reveal (Wireframe solidifies into metallic/glass shape)
            .to(logoRender, {
                opacity: 1,
                duration: 1.6,
                ease: "power2.out"
            }, 2.6)
            .to(logoWireframe, {
                opacity: 0,
                duration: 1.2,
                ease: "power2.out"
            }, 2.6)

            // Scene 4 — Brand Reveal (Letters emerge behind logo mark with parallax)
            .to(logo3dWrapper, {
                x: 0,
                duration: 1.5,
                ease: "expo.inOut"
            }, 3.4)
            .to(letters, {
                opacity: 1,
                x: 0,
                z: 0,
                filter: "blur(0px)",
                stagger: 0.08,
                duration: 1.3,
                ease: "power3.out"
            }, 3.6)

            // Scene 5 — Camera Showcase & Glint reflection sweep
            .to(logo3dWrapper, {
                rotateY: 10,
                rotateX: -5,
                duration: 3.5,
                ease: "power1.inOut"
            }, 3.4)
            .to(logoGlint, {
                backgroundPosition: "150% 150%",
                duration: 2.2,
                ease: "power2.inOut"
            }, 3.8)

            // Scene 6 — Seamless Flight Transition to Navbar Logo
            .to(introOverlay, {
                opacity: 0,
                duration: 1.2,
                ease: "power2.inOut",
                onStart: () => {
                    const navLogo = document.querySelector('.navbar-header .brand-logo');
                    if (navLogo && logoStage) {
                        const navRect = navLogo.getBoundingClientRect();
                        const introRect = logoStage.getBoundingClientRect();
                        
                        const dx = navRect.left - introRect.left;
                        const dy = navRect.top - introRect.top;
                        const scale = navRect.width / introRect.width;
                        
                        // Fly logo stage to navbar bounds
                        gsap.to(logoStage, {
                            x: dx,
                            y: dy,
                            scale: scale,
                            transformOrigin: "left top",
                            duration: 1.2,
                            ease: "power3.inOut"
                        });
                        
                        // Reveal navbar header container
                        const navbar = document.querySelector('.navbar-header');
                        if (navbar) {
                            gsap.fromTo(navbar, 
                                { opacity: 0, y: -20 },
                                { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
                            );
                        }
                        
                        // Stagger fade up landing content elements
                        gsap.fromTo(['.hero-badge', '.hero-title', '.hero-subtitle', '.hero-cta-group', '.metrics-grid'],
                            { opacity: 0, y: 35 },
                            { opacity: 1, y: 0, stagger: 0.15, duration: 1.4, ease: "power3.out" }
                        );
                    }
                },
                onComplete: () => {
                    finishIntro(true);
                }
            }, 6.0);
        } else {
            // Fallback if elements not found
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
    // 6. 24/7 AI Growth Buddy Chatbot Engine
    // ----------------------------------------------------------------------
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
    const chatCloseBtn = document.getElementById('chat-close-btn');
    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatChips = document.querySelectorAll('.chat-chip');
    const chatbotTooltip = document.getElementById('chatbot-tooltip');

    function toggleChatbot() {
        if (chatbotContainer) {
            chatbotContainer.classList.toggle('open');
            if (chatbotTooltip && chatbotContainer.classList.contains('open')) {
                chatbotTooltip.style.display = 'none';
            }
        }
    }

    if (chatbotToggleBtn) chatbotToggleBtn.addEventListener('click', toggleChatbot);
    if (chatCloseBtn) chatCloseBtn.addEventListener('click', toggleChatbot);

    function getBotResponse(userMsg) {
        const query = userMsg.toLowerCase();

        if (query.includes('shelter') || query.includes('sudarshan') || query.includes('case') || query.includes('portfolio') || query.includes('game') || query.includes('esports')) {
            return `💼 <strong>Featured Client Projects:</strong><br>&bull; <a href="https://shelterhuntconsultants.com" target="_blank">Shelter Hunt Consultants (shelterhuntconsultants.com)</a><br>&bull; <a href="https://sp-three-liart.vercel.app" target="_blank">Online Games Tournaments (sp-three-liart.vercel.app)</a><br>&bull; <a href="https://farhanulla.me" target="_blank">Farhanulla Portfolio (farhanulla.me)</a>`;
        }

        if (query.includes('web') || query.includes('website') || query.includes('react') || query.includes('next') || query.includes('site')) {
            return `🌐 <strong>Web Development at ElavateX:</strong><br>We engineer high-converting, sub-second websites using React, Next.js, and Vite with 100/100 Core Web Vitals performance.<br><br>👉 <a href="#web-dev" onclick="document.getElementById('chatbot-container').classList.remove('open')">View Web Dev Showcase &rarr;</a><br>💬 <a href="https://wa.me/917676808068?text=Hi%20ElavateX%2C%20I%20have%20a%20Web%20Dev%20inquiry" target="_blank">Connect on WhatsApp</a>`;
        }

        if (query.includes('app') || query.includes('mobile') || query.includes('ios') || query.includes('android') || query.includes('flutter')) {
            return `📱 <strong>Application Development:</strong><br>We build cross-platform iOS & Android mobile apps using Flutter and React Native with 60FPS UI animations and real-time cloud backends.<br><br>👉 <a href="#app-dev" onclick="document.getElementById('chatbot-container').classList.remove('open')">Explore Mobile App Dev &rarr;</a><br>💬 <a href="https://wa.me/917676808068?text=Hi%20ElavateX%2C%20I%20have%20an%20App%20Dev%20inquiry" target="_blank">Connect on WhatsApp</a>`;
        }

        if (query.includes('social') || query.includes('marketing') || query.includes('insta') || query.includes('instagram') || query.includes('ads') || query.includes('media')) {
            return `🔥 <strong>Social Media & Digital Marketing:</strong><br>We manage Instagram content curation, motion Reels, and high-ROAS Meta & Google Ad campaigns.<br><br><strong>Instagram Profile:</strong> <a href="https://www.instagram.com/elavatex_dev?igsh=cm5rd3JqdGQ2ZWo1" target="_blank">@elavatex_dev</a><br>👉 <a href="#digital-marketing" onclick="document.getElementById('chatbot-container').classList.remove('open')">View Marketing Strategy &rarr;</a>`;
        }

        if (query.includes('contact') || query.includes('phone') || query.includes('number') || query.includes('whatsapp') || query.includes('email') || query.includes('detail')) {
            return `📞 <strong>ElavateX Contact Information:</strong><br>&bull; <strong>WhatsApp:</strong> <a href="https://wa.me/917676808068" target="_blank">Connect via WhatsApp</a><br>&bull; <strong>Instagram:</strong> <a href="https://www.instagram.com/elavatex_dev?igsh=cm5rd3JqdGQ2ZWo1" target="_blank">@elavatex_dev</a><br>&bull; <strong>Official Website:</strong> ElavateX.com`;
        }

        if (query.includes('book') || query.includes('call') || query.includes('consultation') || query.includes('quote') || query.includes('price') || query.includes('cost') || query.includes('estimate')) {
            return `📅 <strong>Book Your Free Strategy Consultation:</strong><br>You can book a free strategic consultation call or chat directly on WhatsApp:<br><br>💬 <a href="https://wa.me/917676808068?text=Hi%20ElavateX%2C%20I%20want%20to%20book%20a%20free%20call" target="_blank">Click Here to Connect on WhatsApp</a>`;
        }

        return `👋 Thank you for asking! At <strong>ElavateX</strong>, we help brands scale through Web Development, Mobile Apps, and Social Media Marketing.<br><br>Would you like to <strong>Book a Call</strong> or reach us directly on <strong>WhatsApp</strong>?`;
    }

    function appendUserMessage(text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chat-msg msg-user';
        msgDiv.innerHTML = `
            <div class="msg-bubble">${escapeHtml(text)}</div>
            <div class="msg-time">Just now</div>
        `;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTypingIndicator() {
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
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) indicator.remove();
    }

    function appendBotMessage(htmlContent) {
        removeTypingIndicator();
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chat-msg msg-bot';
        msgDiv.innerHTML = `
            <div class="msg-bubble">${htmlContent}</div>
            <div class="msg-time">Just now</div>
        `;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleUserSubmit(text) {
        if (!text || text.trim() === '') return;
        const queryText = text.trim();

        appendUserMessage(queryText);
        showTypingIndicator();

        setTimeout(() => {
            const botHtml = getBotResponse(queryText);
            appendBotMessage(botHtml);
        }, 600);
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

    // ----------------------------------------------------------------------
    // 7. Services Overview Tab Switcher
    // ----------------------------------------------------------------------
    const tabButtons = document.querySelectorAll('.service-tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');

            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const activePanel = document.getElementById(targetTab);
            if (activePanel) {
                activePanel.classList.add('active');
            }
        });
    });



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

            dispatchLeadToFirebase(leadObj);

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
    if (window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);

        const mm = gsap.matchMedia();

        // A. Desktop & Tablet Flow (Rich aesthetics: clip-paths, blurs, 3D rotates)
        mm.add("(min-width: 769px)", () => {
            // Text sliding clip-path reveal for section headings
            gsap.utils.toArray('.section-header, .landing-header').forEach(header => {
                const sub = header.querySelector('.section-subtitle, .service-badge');
                const title = header.querySelector('.section-title, h2');
                const desc = header.querySelector('.section-desc, p');

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: header,
                        start: "top 90%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                });

                if (sub) {
                    tl.fromTo(sub, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
                }
                if (title) {
                    tl.fromTo(title, 
                        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 28 },
                        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", y: 0, duration: 0.8, ease: "power3.out" },
                        "-=0.35"
                    );
                }
                if (desc) {
                    tl.fromTo(desc, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.35");
                }
            });

            // Services Overview switcher (#services-overview)
            gsap.fromTo(".services-tab-buttons", 
                { y: 30, opacity: 0 },
                { 
                    y: 0, opacity: 1, duration: 0.75, ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".services-tab-buttons",
                        start: "top 90%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            gsap.fromTo(".tab-content-container",
                { scale: 0.96, filter: "blur(10px)", opacity: 0 },
                {
                    scale: 1, filter: "blur(0px)", opacity: 1, duration: 1.1, ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".tab-content-container",
                        start: "top 85%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Web Development Feature Grid (#web-dev)
            gsap.fromTo("#web-dev .feature-card",
                { x: -50, opacity: 0, rotate: -2, transformPerspective: 1000 },
                {
                    x: 0, opacity: 1, rotate: 0, stagger: 0.15, duration: 0.8, ease: "power2.out",
                    scrollTrigger: {
                        trigger: "#web-dev .features-grid",
                        start: "top 85%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            gsap.fromTo("#web-dev .landing-banner",
                { scale: 0.96, filter: "blur(8px)", opacity: 0 },
                {
                    scale: 1, filter: "blur(0px)", opacity: 1, duration: 0.9, ease: "power3.out",
                    scrollTrigger: {
                        trigger: "#web-dev .landing-banner",
                        start: "top 90%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Application Development Feature Grid (#app-dev)
            gsap.fromTo("#app-dev .feature-card",
                { y: 60, opacity: 0, rotateX: -12, transformPerspective: 1000 },
                {
                    y: 0, opacity: 1, rotateX: 0, stagger: 0.15, duration: 0.9, ease: "back.out(1.1)",
                    scrollTrigger: {
                        trigger: "#app-dev .features-grid",
                        start: "top 85%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            gsap.fromTo("#app-dev .landing-banner",
                { x: 80, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.85, ease: "power3.out",
                    scrollTrigger: {
                        trigger: "#app-dev .landing-banner",
                        start: "top 90%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Social Media & Marketing Grid (#digital-marketing)
            gsap.fromTo("#digital-marketing .feature-card",
                { x: 50, y: 15, opacity: 0, rotate: 1.5 },
                {
                    x: 0, y: 0, opacity: 1, rotate: 0, stagger: 0.15, duration: 0.8, ease: "power3.out",
                    scrollTrigger: {
                        trigger: "#digital-marketing .features-grid",
                        start: "top 85%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            gsap.fromTo("#digital-marketing .landing-banner",
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.85, ease: "power3.out",
                    scrollTrigger: {
                        trigger: "#digital-marketing .landing-banner",
                        start: "top 90%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Case Studies Grid (#portfolio)
            gsap.fromTo("#portfolio .portfolio-card",
                { y: 80, scale: 0.95, opacity: 0, rotate: 1.5 },
                {
                    y: 0, scale: 1, opacity: 1, rotate: 0, stagger: 0.18, duration: 0.9, ease: "power3.out",
                    scrollTrigger: {
                        trigger: "#portfolio .portfolio-grid",
                        start: "top 85%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Testimonials Section (#testimonials)
            gsap.fromTo(".featured-testimonial-card",
                { x: -70, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".featured-testimonial-card",
                        start: "top 85%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            gsap.fromTo(".add-comment-box",
                { x: 70, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.9, ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".add-comment-box",
                        start: "top 85%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Bottom CTA Box
            gsap.fromTo(".cta-box",
                { scale: 0.92, opacity: 0 },
                {
                    scale: 1, opacity: 1, duration: 0.95, ease: "power4.out",
                    scrollTrigger: {
                        trigger: ".cta-box",
                        start: "top 95%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Cleanup function: remove all animation styling when leaving desktop view
            return () => {
                gsap.set([
                    '.section-header', '.landing-header', '.section-subtitle', '.service-badge', '.section-title', 'h2', '.section-desc', 'p',
                    '.services-tab-buttons', '.tab-content-container',
                    '#web-dev .feature-card', '#web-dev .landing-banner',
                    '#app-dev .feature-card', '#app-dev .landing-banner',
                    '#digital-marketing .feature-card', '#digital-marketing .landing-banner',
                    '#portfolio .portfolio-card',
                    '.featured-testimonial-card', '.add-comment-box',
                    '.cta-box'
                ], { clearProps: "all" });
            };
        });

        // B. Mobile Flow (Fast, optimized, y-translation and opacity only, no filters)
        mm.add("(max-width: 768px)", () => {
            gsap.utils.toArray('.section-header, .landing-header').forEach(header => {
                gsap.fromTo(header,
                    { opacity: 0, y: 15 },
                    {
                        opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
                        scrollTrigger: {
                            trigger: header,
                            start: "top 95%",
                            end: "bottom 0%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            gsap.fromTo(".tab-content-container",
                { opacity: 0, y: 25 },
                {
                    opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".tab-content-container",
                        start: "top 90%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Group all grids for lightweight stagger fade
            ['#web-dev', '#app-dev', '#digital-marketing'].forEach(secId => {
                gsap.fromTo(`${secId} .feature-card`,
                    { opacity: 0, y: 25 },
                    {
                        opacity: 1, y: 0, stagger: 0.1, duration: 0.55, ease: "power2.out",
                        scrollTrigger: {
                            trigger: `${secId} .features-grid`,
                            start: "top 90%",
                            end: "bottom 0%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );

                gsap.fromTo(`${secId} .landing-banner`,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1, y: 0, duration: 0.55, ease: "power2.out",
                        scrollTrigger: {
                            trigger: `${secId} .landing-banner`,
                            start: "top 95%",
                            end: "bottom 0%",
                            toggleActions: "play reverse play reverse"
                        }
                    }
                );
            });

            gsap.fromTo("#portfolio .portfolio-card",
                { opacity: 0, y: 25 },
                {
                    opacity: 1, y: 0, stagger: 0.1, duration: 0.55, ease: "power2.out",
                    scrollTrigger: {
                        trigger: "#portfolio .portfolio-grid",
                        start: "top 90%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            gsap.fromTo([".featured-testimonial-card", ".add-comment-box"],
                { opacity: 0, y: 25 },
                {
                    opacity: 1, y: 0, stagger: 0.12, duration: 0.6, ease: "power2.out",
                    scrollTrigger: {
                        trigger: "#testimonials",
                        start: "top 90%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            gsap.fromTo(".cta-box",
                { opacity: 0, y: 20 },
                {
                    opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".cta-box",
                        start: "top 95%",
                        end: "bottom 0%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );

            // Cleanup function: remove all mobile animations styles when leaving mobile view
            return () => {
                gsap.set([
                    '.section-header', '.landing-header',
                    '.tab-content-container',
                    '.feature-card', '.landing-banner',
                    '#portfolio .portfolio-card',
                    '.featured-testimonial-card', '.add-comment-box',
                    '.cta-box'
                ], { clearProps: "all" });
            };
        });
    }
});
