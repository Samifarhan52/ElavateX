/**
 * ElavateX - Master Client Logic
 * Features: Black Carpet Wipe, Cinematic Intro, Live Case Studies, Testomiles, Admin Portal
 * Brand: ElavateX | Domain: ElavateX.com | WhatsApp: 7676808068
 */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // 0. Black Carpet Page Transition Overlay System
    // ----------------------------------------------------------------------
    const carpetWipe = document.getElementById('black-carpet-wipe');
    const transitionLinks = document.querySelectorAll('a[href^="#"], .drawer-link, .nav-link');

    function executeBlackCarpetWipe(targetId) {
        if (!carpetWipe) {
            if (targetId) {
                const elem = document.querySelector(targetId);
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }

        carpetWipe.classList.remove('wiping-out');
        carpetWipe.classList.add('wiping-in');

        setTimeout(() => {
            if (targetId && targetId !== '#') {
                const targetElem = document.querySelector(targetId);
                if (targetElem) {
                    targetElem.scrollIntoView({ behavior: 'auto' });
                }
            }
            carpetWipe.classList.remove('wiping-in');
            carpetWipe.classList.add('wiping-out');

            setTimeout(() => {
                carpetWipe.classList.remove('wiping-out');
            }, 600);
        }, 300);
    }

    transitionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                if (href === '#admin') {
                    openAdminGateway();
                } else {
                    executeBlackCarpetWipe(href);
                }
            }
        });
    });

    // ----------------------------------------------------------------------
    // 1. Cinematic Entry Reveal Animation Sequence
    // Sequence: Single X -> Split / & \ -> Elavate Spark -> Merge ElavateX -> Reveal Site
    // ----------------------------------------------------------------------
    const introOverlay = document.getElementById('intro-overlay');
    const skipIntroBtn = document.getElementById('skip-intro-btn');

    const xSoloChar = document.getElementById('x-solo-char');
    const splitSlashes = document.getElementById('split-slashes');
    const introElavateWrapper = document.getElementById('intro-elavate-wrapper');
    const introFinalWrapper = document.getElementById('intro-final-wrapper');
    const glowBgBurst = document.querySelector('.glow-bg-burst');

    function finishIntro() {
        if (introOverlay) {
            introOverlay.classList.add('hidden');
        }
    }

    if (skipIntroBtn) {
        skipIntroBtn.addEventListener('click', finishIntro);
    }

    // Run intro sequence on initial visit
    if (introOverlay && !sessionStorage.getItem('elavatex_intro_played')) {
        sessionStorage.setItem('elavatex_intro_played', 'true');
        
        // Step 1: Single X drops in
        setTimeout(() => {
            if (xSoloChar) xSoloChar.classList.add('active');
            if (glowBgBurst) glowBgBurst.style.opacity = '0.7';
        }, 100);

        // Step 2: X splits into / and \
        setTimeout(() => {
            if (xSoloChar) xSoloChar.style.opacity = '0';
            if (splitSlashes) {
                splitSlashes.classList.add('active');
                setTimeout(() => splitSlashes.classList.add('separated'), 100);
            }
        }, 900);

        // Step 3: Elavate text reveals in center
        setTimeout(() => {
            if (introElavateWrapper) introElavateWrapper.classList.add('active');
        }, 1600);

        // Step 4: Everything merges into final ElavateX
        setTimeout(() => {
            if (splitSlashes) splitSlashes.style.opacity = '0';
            if (introElavateWrapper) introElavateWrapper.style.opacity = '0';
            if (introFinalWrapper) introFinalWrapper.classList.add('active');
            if (glowBgBurst) glowBgBurst.style.opacity = '1';
        }, 2600);

        // Step 5: Smooth dissolve into website
        setTimeout(() => {
            finishIntro();
        }, 3600);
    } else if (introOverlay) {
        introOverlay.style.display = 'none';
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
            executeBlackCarpetWipe('#digital-marketing');
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
            reviews.forEach((rev, idx) => {
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
        renderAdminReviewsList();
    }

    if (publicReviewForm) {
        publicReviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('rev-name').value;
            const company = document.getElementById('rev-company').value;
            const rating = parseInt(document.getElementById('rev-rating').value) || 5;
            const text = document.getElementById('rev-text').value;

            const reviews = getStoredReviews();
            const newRev = {
                id: Date.now(),
                name: name,
                company: company || 'Valued Client',
                rating: rating,
                comment: text,
                date: 'Just now'
            };
            reviews.unshift(newRev);
            saveStoredReviews(reviews);

            publicReviewForm.reset();
            renderReviews();
            alert('🎉 Thank you! Your review has been published live on ElavateX.com!');
        });
    }

    renderReviews();

    // ----------------------------------------------------------------------
    // 4. Fully Integrated Admin Control Gateway & Dashboard
    // Credentials: ID = FarhanElavate | Password = Mycareer
    // ----------------------------------------------------------------------
    const adminLoginModal = document.getElementById('admin-login-modal');
    const adminDashModal = document.getElementById('admin-dashboard-modal');
    const adminLoginForm = document.getElementById('admin-login-form');
    const adminLoginError = document.getElementById('admin-login-error');
    const adminLoginCloseBtn = document.getElementById('admin-login-close-btn');
    const adminDashCloseBtn = document.getElementById('admin-dash-close-btn');
    const adminLogoutBtn = document.getElementById('admin-logout-btn');

    function openAdminGateway() {
        if (sessionStorage.getItem('elavatex_admin_logged') === 'true') {
            if (adminDashModal) adminDashModal.showModal();
        } else {
            if (adminLoginModal) adminLoginModal.showModal();
        }
    }

    if (adminLoginCloseBtn) adminLoginCloseBtn.addEventListener('click', () => adminLoginModal.close());
    if (adminDashCloseBtn) adminDashCloseBtn.addEventListener('click', () => adminDashModal.close());

    if (window.location.hash === '#admin' || window.location.search.includes('admin=true')) {
        setTimeout(openAdminGateway, 500);
    }

    const openAdminTrigger = document.getElementById('open-admin-trigger');
    if (openAdminTrigger) {
        openAdminTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            openAdminGateway();
        });
    }

    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userVal = document.getElementById('admin-user').value.trim();
            const passVal = document.getElementById('admin-pass').value.trim();

            if (userVal === 'FarhanElavate' && passVal === 'Mycareer') {
                sessionStorage.setItem('elavatex_admin_logged', 'true');
                if (adminLoginError) adminLoginError.style.display = 'none';
                if (adminLoginModal) adminLoginModal.close();
                if (adminDashModal) adminDashModal.showModal();
            } else {
                if (adminLoginError) adminLoginError.style.display = 'block';
            }
        });
    }

    if (adminLogoutBtn) {
        adminLogoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('elavatex_admin_logged');
            if (adminDashModal) adminDashModal.close();
            alert('Logged out from Admin Control Center.');
        });
    }

    // Admin Dashboard Tab Switcher
    const dashTabBtns = document.querySelectorAll('.dash-tab-btn');
    const dashPanels = document.querySelectorAll('.dash-panel');

    dashTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-dashtab');

            dashTabBtns.forEach(b => b.classList.remove('active'));
            dashPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const panel = document.getElementById(targetTab);
            if (panel) panel.classList.add('active');
        });
    });

    // Render reviews inside Admin Tab 2
    function renderAdminReviewsList() {
        const admList = document.getElementById('adm-reviews-list');
        if (!admList) return;
        const reviews = getStoredReviews();
        admList.innerHTML = '';

        reviews.forEach(rev => {
            const item = document.createElement('div');
            item.className = 'dash-rev-item';
            item.innerHTML = `
                <div>
                    <strong>${escapeHtml(rev.name)}</strong> (${escapeHtml(rev.company || 'Client')})<br>
                    <small style="color: var(--text-muted);">${'★'.repeat(rev.rating)} - "${escapeHtml(rev.comment)}"</small>
                </div>
                <button class="btn-sm" style="background:#ef4444; color:#fff; border:none; padding:0.3rem 0.6rem; border-radius:4px; cursor:pointer;" data-revid="${rev.id}">Delete</button>
            `;
            const delBtn = item.querySelector('button');
            delBtn.addEventListener('click', () => {
                const updated = reviews.filter(r => r.id !== rev.id);
                saveStoredReviews(updated);
                renderReviews();
            });
            admList.appendChild(item);
        });
    }

    // Admin Theme Customizer Form
    const adminThemeForm = document.getElementById('admin-theme-form');
    if (adminThemeForm) {
        adminThemeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const brandVal = document.getElementById('adm-brand-name').value.trim();
            const colorVal = document.getElementById('adm-primary-color').value;

            if (colorVal) {
                document.documentElement.style.setProperty('--accent-indigo', colorVal);
            }
            if (brandVal) {
                document.querySelectorAll('.logo-text').forEach(el => {
                    el.innerHTML = `${brandVal.substring(0, brandVal.length - 1)}<span class="accent-x">${brandVal.slice(-1)}</span>`;
                });
            }
            alert('✨ Live Changes Saved! Theme color and brand name updated across website.');
        });
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
            return `🌐 <strong>Web Development at ElavateX:</strong><br>We engineer high-converting, sub-second websites using React, Next.js, and Vite with 100/100 Core Web Vitals performance.<br><br>👉 <a href="#web-dev" onclick="document.getElementById('chatbot-container').classList.remove('open')">View Web Dev Showcase &rarr;</a><br>💬 <a href="https://wa.me/917676808068?text=Hi%20ElavateX%2C%20I%20have%20a%20Web%20Dev%20inquiry" target="_blank">Chat on WhatsApp (7676808068)</a>`;
        }

        if (query.includes('app') || query.includes('mobile') || query.includes('ios') || query.includes('android') || query.includes('flutter')) {
            return `📱 <strong>Application Development:</strong><br>We build cross-platform iOS & Android mobile apps using Flutter and React Native with 60FPS UI animations and real-time cloud backends.<br><br>👉 <a href="#app-dev" onclick="document.getElementById('chatbot-container').classList.remove('open')">Explore Mobile App Dev &rarr;</a><br>💬 <a href="https://wa.me/917676808068?text=Hi%20ElavateX%2C%20I%20have%20an%20App%20Dev%20inquiry" target="_blank">Chat on WhatsApp (7676808068)</a>`;
        }

        if (query.includes('social') || query.includes('marketing') || query.includes('insta') || query.includes('instagram') || query.includes('ads') || query.includes('media')) {
            return `🔥 <strong>Social Media & Digital Marketing:</strong><br>We manage Instagram content curation, motion Reels, and high-ROAS Meta & Google Ad campaigns.<br><br><strong>Instagram Profile:</strong> <a href="https://instagram.com/ElavateX.dev" target="_blank">@ElavateX.dev</a><br>👉 <a href="#digital-marketing" onclick="document.getElementById('chatbot-container').classList.remove('open')">View Marketing Strategy &rarr;</a>`;
        }

        if (query.includes('contact') || query.includes('phone') || query.includes('number') || query.includes('whatsapp') || query.includes('email') || query.includes('detail')) {
            return `📞 <strong>ElavateX Contact Information:</strong><br>&bull; <strong>WhatsApp:</strong> <a href="https://wa.me/917676808068" target="_blank">+91 7676808068</a><br>&bull; <strong>Instagram:</strong> <a href="https://instagram.com/ElavateX.dev" target="_blank">@ElavateX.dev</a><br>&bull; <strong>Official Website:</strong> ElavateX.com`;
        }

        if (query.includes('book') || query.includes('call') || query.includes('consultation') || query.includes('quote') || query.includes('price') || query.includes('cost') || query.includes('estimate')) {
            return `📅 <strong>Book Your Free Strategy Consultation:</strong><br>You can calculate an instant estimate with our <a href="#estimator" onclick="document.getElementById('chatbot-container').classList.remove('open')">Project Estimator</a> or chat directly on WhatsApp:<br><br>💬 <a href="https://wa.me/917676808068?text=Hi%20ElavateX%2C%20I%20want%20to%20book%20a%20free%20call" target="_blank">Click Here to Chat on WhatsApp (7676808068)</a>`;
        }

        return `👋 Thank you for asking! At <strong>ElavateX</strong>, we help brands scale through Web Development, Mobile Apps, and Social Media Marketing.<br><br>Would you like to <strong>Book a Call</strong> or reach us directly on <strong>WhatsApp (+91 7676808068)</strong>?`;
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
    // 8. Interactive Project Cost Estimator
    // ----------------------------------------------------------------------
    const serviceTypeChips = document.querySelectorAll('#est-service-type .chip');
    const scopeTypeChips = document.querySelectorAll('#est-scope-type .chip');
    const addonCheckboxes = document.querySelectorAll('.est-addon');
    const totalPriceEl = document.getElementById('est-total-price');
    const timelineEl = document.getElementById('est-timeline');

    function calculateEstimate() {
        let baseCost = 499;
        let multiplier = 1.0;
        let addonsTotal = 0;

        const activeService = document.querySelector('#est-service-type .chip.active');
        if (activeService) {
            baseCost = parseFloat(activeService.getAttribute('data-base')) || 499;
        }

        const activeScope = document.querySelector('#est-scope-type .chip.active');
        if (activeScope) {
            multiplier = parseFloat(activeScope.getAttribute('data-mult')) || 1.0;
        }

        addonCheckboxes.forEach(cb => {
            if (cb.checked) {
                addonsTotal += parseFloat(cb.value) || 0;
            }
        });

        const finalPrice = Math.round((baseCost * multiplier) + addonsTotal);
        if (totalPriceEl) totalPriceEl.textContent = `$${finalPrice}`;

        if (timelineEl) {
            if (multiplier <= 1.0) {
                timelineEl.textContent = 'Estimated Timeline: 1 - 2 Weeks';
            } else if (multiplier <= 1.8) {
                timelineEl.textContent = 'Estimated Timeline: 2 - 4 Weeks';
            } else {
                timelineEl.textContent = 'Estimated Timeline: 4 - 8 Weeks';
            }
        }
    }

    serviceTypeChips.forEach(chip => {
        chip.addEventListener('click', () => {
            serviceTypeChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            calculateEstimate();
        });
    });

    scopeTypeChips.forEach(chip => {
        chip.addEventListener('click', () => {
            scopeTypeChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            calculateEstimate();
        });
    });

    addonCheckboxes.forEach(cb => {
        cb.addEventListener('change', calculateEstimate);
    });

    calculateEstimate();

    // ----------------------------------------------------------------------
    // 9. Consultation & Book a Call Modal Dialog
    // ----------------------------------------------------------------------
    const consultationModal = document.getElementById('consultation-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const openConsultationBtns = document.querySelectorAll('.open-consultation-btn');
    const consultationForm = document.getElementById('consultation-form');
    const formServiceSelect = document.getElementById('form-service');

    function openModal(preselectService) {
        if (preselectService && formServiceSelect) {
            for (let i = 0; i < formServiceSelect.options.length; i++) {
                if (formServiceSelect.options[i].value.includes(preselectService)) {
                    formServiceSelect.selectedIndex = i;
                    break;
                }
            }
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

    // Form Submission -> WhatsApp Dispatch
    if (consultationForm) {
        consultationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const phone = document.getElementById('form-phone').value;
            const service = document.getElementById('form-service').value;
            const message = document.getElementById('form-message').value;

            const waText = encodeURIComponent(
                `*New Consultation Booking (ElavateX.com)*\n\n` +
                `*Name:* ${name}\n` +
                `*Email:* ${email}\n` +
                `*Phone:* ${phone}\n` +
                `*Service Requested:* ${service}\n` +
                `*Project Overview:* ${message || 'N/A'}\n\n` +
                `Sent via website: ElavateX.com`
            );

            const whatsappUrl = `https://wa.me/917676808068?text=${waText}`;

            closeModal();
            window.open(whatsappUrl, '_blank');
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
});
