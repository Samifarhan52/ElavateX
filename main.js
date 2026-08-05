/**
 * ElavateX - Master Client Logic (Cinematic Entry Reveal & Dual Theme & 24/7 AI Buddy)
 * Brand: ElavateX | Domain: ElavateX.com | WhatsApp: 7676808068
 */

document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------------------------------------
    // Entry Reveal Animation Sequence
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
    // 0. Dark / Light Theme Mode Toggle Engine
    // ----------------------------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const drawerThemeToggleBtn = document.getElementById('drawer-theme-toggle-btn');
    const htmlEl = document.documentElement;

    // Load saved theme (default to warm editorial beige 'light' mode)
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
    // 1. 24/7 AI Growth Buddy Chatbot Engine
    // ----------------------------------------------------------------------
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
    const chatCloseBtn = document.getElementById('chat-close-btn');
    const chatMessages = document.getElementById('chat-messages');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatChips = document.querySelectorAll('.chat-chip');
    const chatbotTooltip = document.getElementById('chatbot-tooltip');

    // Toggle Chatbot Window
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

    // Knowledge Base Response Engine
    function getBotResponse(userMsg) {
        const query = userMsg.toLowerCase();

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
    // 2. Services Overview Tab Switcher
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
    // 3. Interactive Project Cost Estimator
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
    // 4. Consultation & Book a Call Modal Dialog
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
    // 5. Header Navbar Scroll & Mobile Menu Drawer
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
