/**
 * ElavateX Services Editorial Engine
 * Charcoal Grey, Moonlit Silver, Signal Red Architecture
 */
(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        initServiceNavbar();
        initServiceAmbientCanvas();
    });

    // -------------------------------------------------------------------------
    // 1. NAVBAR & MOBILE DRAWER ORCHESTRATION
    // -------------------------------------------------------------------------
    function initServiceNavbar() {
        const navbar = document.getElementById('navbar') || document.querySelector('.dedicated-fixed-navbar');
        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileDrawer = document.getElementById('mobile-drawer');
        const drawerClose = document.getElementById('drawer-close');
        const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-service-link');
        const switcherBtn = document.getElementById('service-switcher-btn');
        const switcherDropdown = document.querySelector('.service-switcher-dropdown');

        // Scroll listener for sticky glass navbar
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 30) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }, { passive: true });
        }

        // Service switcher dropdown toggle
        if (switcherBtn && switcherDropdown) {
            switcherBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = switcherDropdown.classList.contains('show');
                switcherDropdown.classList.toggle('show');
                switcherBtn.setAttribute('aria-expanded', !isOpen);
            });

            document.addEventListener('click', (e) => {
                if (!switcherBtn.contains(e.target) && !switcherDropdown.contains(e.target)) {
                    switcherDropdown.classList.remove('show');
                    switcherBtn.setAttribute('aria-expanded', 'false');
                }
            });
        }

        // Mobile drawer toggling
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
    }

    // -------------------------------------------------------------------------
    // 2. INTERACTIVE AMBIENT DUST & PARTICLES (Signal Red & Moonlit Silver)
    // -------------------------------------------------------------------------
    function initServiceAmbientCanvas() {
        const canvas = document.getElementById('service-matrix-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let animationFrameId = null;

        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;

        const PARTICLE_COUNT = 75;
        const particles = [];

        function resize() {
            const rect = canvas.parentElement ? canvas.parentElement.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
            width = canvas.width = rect.width;
            height = canvas.height = rect.height;
        }

        window.addEventListener('resize', resize);
        resize();

        window.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            targetMouseX = ((e.clientX - rect.left) / width - 0.5) * 50;
            targetMouseY = ((e.clientY - rect.top) / height - 0.5) * 50;
        }, { passive: true });

        // Initialize particles
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const isRed = Math.random() < 0.28; // 28% Signal Red, 72% Moonlit Silver
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.8 + 0.6,
                baseAlpha: Math.random() * 0.5 + 0.2,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                color: isRed ? '#E10600' : '#E6E9EE',
                glow: isRed ? 'rgba(225, 6, 0, 0.6)' : 'rgba(230, 233, 238, 0.3)'
            });
        }

        function render() {
            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;

            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                const drawX = p.x + mouseX * (p.radius * 0.5);
                const drawY = p.y + mouseY * (p.radius * 0.5);

                ctx.save();
                ctx.beginPath();
                ctx.arc(drawX, drawY, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.shadowColor = p.glow;
                ctx.shadowBlur = p.color === '#E10600' ? 8 : 4;
                ctx.globalAlpha = p.baseAlpha;
                ctx.fill();
                ctx.restore();
            }

            animationFrameId = requestAnimationFrame(render);
        }

        render();
    }
})();
