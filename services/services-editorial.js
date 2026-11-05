/**
 * ElavateX Services Editorial Engine
 * Charcoal Grey #17181C | Moonlit Silver #E6E9EE | Signal Red #E10600
 * Distinct Bespoke 3D Physics & Canvas per Service Page
 */
(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        initServiceNavbar();
        initServiceScrollTrack();
        initBespokeAmbientCanvas();
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

        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 30) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }, { passive: true });
        }

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
    // 2. VERTICAL SCROLL TRACK THUMB TRACKING (Right Screen Edge)
    // -------------------------------------------------------------------------
    function initServiceScrollTrack() {
        const thumb = document.querySelector('.service-track-thumb');
        if (!thumb) return;

        window.addEventListener('scroll', () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (maxScroll <= 0) return;
            const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
            // Move thumb along the 220px track
            thumb.style.top = `${progress * 190 + 15}px`;
        }, { passive: true });
    }

    // -------------------------------------------------------------------------
    // 3. BESPOKE 3D AMBIENT CANVAS PER SERVICE PAGE
    // -------------------------------------------------------------------------
    function initBespokeAmbientCanvas() {
        const canvas = document.getElementById('service-matrix-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;

        function resize() {
            const rect = canvas.parentElement ? canvas.parentElement.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
            width = canvas.width = rect.width;
            height = canvas.height = rect.height;
        }

        window.addEventListener('resize', resize);
        resize();

        window.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            targetMouseX = ((e.clientX - rect.left) / width - 0.5) * 60;
            targetMouseY = ((e.clientY - rect.top) / height - 0.5) * 60;
        }, { passive: true });

        // Identify which service page is active
        const isSMM = document.getElementById('smm-hero') !== null;
        const isApp = document.getElementById('app-hero') !== null;
        const isWeb = document.getElementById('web-hero') !== null;

        // ---------------------------------------------------------------------
        // A. SOCIAL MEDIA: Floating Crimson Hearts, Engagement Sparkles & Light Waves
        // ---------------------------------------------------------------------
        if (isSMM) {
            const items = [];
            const COUNT = 55;

            for (let i = 0; i < COUNT; i++) {
                const isHeart = Math.random() < 0.35;
                items.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: isHeart ? Math.random() * 9 + 7 : Math.random() * 3 + 1,
                    isHeart: isHeart,
                    alpha: Math.random() * 0.55 + 0.25,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: -(Math.random() * 0.6 + 0.3), // Drifting gently upwards
                    color: Math.random() < 0.6 ? '#E10600' : '#E6E9EE',
                    rotation: Math.random() * Math.PI * 2,
                    rotSpeed: (Math.random() - 0.5) * 0.02
                });
            }

            function drawHeart(cx, cy, size, col, a) {
                ctx.save();
                ctx.translate(cx, cy);
                ctx.beginPath();
                ctx.fillStyle = col;
                ctx.shadowColor = col;
                ctx.shadowBlur = col === '#E10600' ? 12 : 6;
                ctx.globalAlpha = a;
                const topCurveHeight = size * 0.3;
                ctx.moveTo(0, topCurveHeight);
                ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
                ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, size, 0, size * 1.3);
                ctx.bezierCurveTo(0, size, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
                ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
                ctx.fill();
                ctx.restore();
            }

            function animateSMM() {
                mouseX += (targetMouseX - mouseX) * 0.05;
                mouseY += (targetMouseY - mouseY) * 0.05;
                ctx.clearRect(0, 0, width, height);

                // Caustic red light refraction waves in background
                const time = Date.now() * 0.001;
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(width * 0.5, 0);
                for (let x = width * 0.4; x <= width; x += 30) {
                    const waveY = Math.sin(x * 0.005 + time) * 40 + height * 0.35 + mouseY * 0.3;
                    ctx.lineTo(x, waveY);
                }
                ctx.strokeStyle = 'rgba(225, 6, 0, 0.08)';
                ctx.lineWidth = 14;
                ctx.filter = 'blur(16px)';
                ctx.stroke();
                ctx.restore();

                // Floating Hearts & Particles
                for (let i = 0; i < items.length; i++) {
                    const p = items[i];
                    p.x += p.vx;
                    p.y += p.vy;
                    p.rotation += p.rotSpeed;

                    if (p.y < -20) { p.y = height + 20; p.x = Math.random() * width; }
                    if (p.x < 0) p.x = width;
                    if (p.x > width) p.x = 0;

                    const drawX = p.x + mouseX * 0.5;
                    const drawY = p.y + mouseY * 0.5;

                    if (p.isHeart) {
                        drawHeart(drawX, drawY, p.size, p.color, p.alpha);
                    } else {
                        ctx.save();
                        ctx.beginPath();
                        ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
                        ctx.fillStyle = p.color;
                        ctx.shadowColor = p.color === '#E10600' ? '#E10600' : 'rgba(230, 233, 238, 0.5)';
                        ctx.shadowBlur = 8;
                        ctx.globalAlpha = p.alpha;
                        ctx.fill();
                        ctx.restore();
                    }
                }
                requestAnimationFrame(animateSMM);
            }
            animateSMM();
            return;
        }

        // ---------------------------------------------------------------------
        // B. WEB DEVELOPMENT: Floating 3D Geometric Nodes & Interconnected Red Data Laser
        // ---------------------------------------------------------------------
        if (isWeb) {
            const nodes = [];
            const NODE_COUNT = 45;

            for (let i = 0; i < NODE_COUNT; i++) {
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    z: Math.random() * 400 + 100,
                    vx: (Math.random() - 0.5) * 0.45,
                    vy: (Math.random() - 0.5) * 0.45,
                    radius: Math.random() * 2.2 + 1,
                    isRed: Math.random() < 0.3
                });
            }

            function animateWeb() {
                mouseX += (targetMouseX - mouseX) * 0.05;
                mouseY += (targetMouseY - mouseY) * 0.05;
                ctx.clearRect(0, 0, width, height);

                // Update and draw nodes
                for (let i = 0; i < nodes.length; i++) {
                    const n = nodes[i];
                    n.x += n.vx;
                    n.y += n.vy;

                    if (n.x < 0) n.x = width;
                    if (n.x > width) n.x = 0;
                    if (n.y < 0) n.y = height;
                    if (n.y > height) n.y = 0;

                    const drawX = n.x + mouseX * (200 / n.z);
                    const drawY = n.y + mouseY * (200 / n.z);

                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(drawX, drawY, n.radius, 0, Math.PI * 2);
                    ctx.fillStyle = n.isRed ? '#E10600' : '#E6E9EE';
                    ctx.shadowColor = n.isRed ? '#E10600' : 'rgba(230, 233, 238, 0.4)';
                    ctx.shadowBlur = n.isRed ? 10 : 4;
                    ctx.globalAlpha = n.isRed ? 0.8 : 0.4;
                    ctx.fill();
                    ctx.restore();

                    // Connect neighboring nodes with laser lines
                    for (let j = i + 1; j < nodes.length; j++) {
                        const n2 = nodes[j];
                        const dx = n.x - n2.x;
                        const dy = n.y - n2.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);

                        if (dist < 110) {
                            const drawX2 = n2.x + mouseX * (200 / n2.z);
                            const drawY2 = n2.y + mouseY * (200 / n2.z);
                            ctx.save();
                            ctx.beginPath();
                            ctx.moveTo(drawX, drawY);
                            ctx.lineTo(drawX2, drawY2);
                            const isLaser = n.isRed || n2.isRed;
                            ctx.strokeStyle = isLaser ? 'rgba(225, 6, 0, 0.35)' : 'rgba(230, 233, 238, 0.08)';
                            ctx.lineWidth = isLaser ? 1.2 : 0.6;
                            ctx.stroke();
                            ctx.restore();
                        }
                    }
                }
                requestAnimationFrame(animateWeb);
            }
            animateWeb();
            return;
        }

        // ---------------------------------------------------------------------
        // C. MOBILE APPS: 3D Gyro Rings & Red Haptic Shockwaves
        // ---------------------------------------------------------------------
        if (isApp) {
            const rings = [
                { r: 160, tilt: 0.6, speed: 0.008, color: 'rgba(225, 6, 0, 0.28)' },
                { r: 240, tilt: -0.4, speed: -0.006, color: 'rgba(230, 233, 238, 0.15)' },
                { r: 320, tilt: 0.3, speed: 0.004, color: 'rgba(225, 6, 0, 0.18)' }
            ];
            let angle = 0;

            function animateApp() {
                mouseX += (targetMouseX - mouseX) * 0.05;
                mouseY += (targetMouseY - mouseY) * 0.05;
                ctx.clearRect(0, 0, width, height);

                angle += 0.01;
                const centerX = width * 0.72 + mouseX * 0.6;
                const centerY = height * 0.5 + mouseY * 0.6;

                // Draw rotating 3D gyro rings around mobile phone stage
                for (let i = 0; i < rings.length; i++) {
                    const rg = rings[i];
                    ctx.save();
                    ctx.translate(centerX, centerY);
                    ctx.rotate(angle * rg.speed * 100);
                    ctx.scale(1, rg.tilt);
                    ctx.beginPath();
                    ctx.arc(0, 0, rg.r, 0, Math.PI * 2);
                    ctx.strokeStyle = rg.color;
                    ctx.lineWidth = 1.5;
                    ctx.stroke();

                    // Orbital indicator dot on ring
                    const orbX = Math.cos(angle + i) * rg.r;
                    const orbY = Math.sin(angle + i) * rg.r;
                    ctx.beginPath();
                    ctx.arc(orbX, orbY, 3.5, 0, Math.PI * 2);
                    ctx.fillStyle = '#E10600';
                    ctx.shadowColor = '#E10600';
                    ctx.shadowBlur = 10;
                    ctx.fill();

                    ctx.restore();
                }

                requestAnimationFrame(animateApp);
            }
            animateApp();
        }
    }
})();
