<script lang="ts">
    import { onMount } from 'svelte';
    import { createNoise2D } from 'simplex-noise';

    let canvas: HTMLCanvasElement;

    const DESKTOP_NOISE_SCALE = 0.0025;
    const MOBILE_NOISE_SCALE  = 0.004;  // tighter patterns fill the smaller viewport
    const BASE_SPEED       = 1.0;
    const FADE_ALPHA       = 0.04;
    const PARTICLE_ALPHA   = 0.4;
    const FADE_SPEED       = 0.012;
    const CHECK_INTERVAL   = 120;  // frames between stuck checks (~2s at 60fps)
    const MIN_DISPLACEMENT = 25;   // px, below this a particle is considered stuck
    const MAX_STUCK_CHECKS = 2;
    const TARGET_FRAME_MS  = 1000 / 60;

    const DESKTOP_COUNT  = 1200;
    const MOBILE_COUNT   = 350;
    const DESKTOP_RADIUS = 1.2;
    const MOBILE_RADIUS  = 0.9;
    const MOBILE_BP      = 768;

    interface Particle {
        x: number; y: number;
        colorIdx: number;
        speed: number;
        alpha: number;
        dying: boolean;
        stuckCount: number;
        checkTimer: number;
        checkX: number; checkY: number;
    }

    function hexToRgb(hex: string): [number, number, number] {
        return [
            parseInt(hex.slice(1, 3), 16),
            parseInt(hex.slice(3, 5), 16),
            parseInt(hex.slice(5, 7), 16),
        ];
    }

    function hexToRgba(hex: string, alpha: number): string {
        const [r, g, b] = hexToRgb(hex);
        return `rgba(${r},${g},${b},${alpha})`;
    }

    onMount(() => {
        let rafId: number;
        let scrollTimer: ReturnType<typeof setTimeout>;
        let cleanup: (() => void) | null = null;

        function init() {
            const ctx = canvas.getContext('2d')!;
            const noise2D = createNoise2D();
            const dpr = window.devicePixelRatio || 1;

            let w = window.innerWidth;
            let h = window.innerHeight;
            let time = 0;
            let lastTime = 0;
            let fadeStyle = '';
            let accentColors: string[] = [];
            let particles: Particle[] = [];

            function setSize() {
                canvas.width  = w * dpr;
                canvas.height = h * dpr;
                ctx.scale(dpr, dpr);
            }

            function baseColor() {
                return document.documentElement.classList.contains('dark') ? '#26263F' : '#F3F3F3';
            }

            function readTheme() {
                const style = getComputedStyle(document.documentElement);
                const get = (k: string) => style.getPropertyValue(k).trim();
                const [r, g, b] = hexToRgb(baseColor());
                fadeStyle = `rgba(${r},${g},${b},${FADE_ALPHA})`;
                accentColors = [
                    get('--catppuccin-color-sapphire'),
                    get('--catppuccin-color-mauve'),
                    get('--catppuccin-color-peach'),
                    get('--catppuccin-color-teal'),
                ];
            }

            function fillBase() {
                const [r, g, b] = hexToRgb(baseColor());
                ctx.fillStyle = `rgb(${r},${g},${b})`;
                ctx.fillRect(0, 0, w, h);
            }

            function makeParticle(): Particle {
                const x = Math.random() * w;
                const y = Math.random() * h;
                return {
                    x, y,
                    colorIdx: Math.floor(Math.random() * accentColors.length),
                    speed: BASE_SPEED * (0.5 + Math.random() * 0.8),
                    alpha: PARTICLE_ALPHA,
                    dying: false,
                    stuckCount: 0,
                    checkTimer: Math.floor(Math.random() * CHECK_INTERVAL),
                    checkX: x, checkY: y,
                };
            }

            function seedParticles() {
                const count = w < MOBILE_BP ? MOBILE_COUNT : DESKTOP_COUNT;
                particles = Array.from({ length: count }, makeParticle);
            }

            setSize();
            readTheme();
            fillBase();
            seedParticles();

            function draw(timestamp: number) {
                const elapsed = lastTime ? timestamp - lastTime : TARGET_FRAME_MS;
                const dt = Math.min(elapsed / TARGET_FRAME_MS, 3);
                lastTime = timestamp;

                const isMobile = w < MOBILE_BP;
                const radius     = isMobile ? MOBILE_RADIUS : DESKTOP_RADIUS;
                const noiseScale = isMobile ? MOBILE_NOISE_SCALE : DESKTOP_NOISE_SCALE;

                ctx.fillStyle = fadeStyle;
                ctx.fillRect(0, 0, w, h);

                for (const p of particles) {
                    const angle = noise2D(p.x * noiseScale + time, p.y * noiseScale) * Math.PI * 4;
                    p.x += Math.cos(angle) * p.speed * dt;
                    p.y += Math.sin(angle) * p.speed * dt;

                    if (!p.dying && (p.x < 0 || p.x > w || p.y < 0 || p.y > h)) p.dying = true;

                    if (--p.checkTimer <= 0) {
                        const dx = p.x - p.checkX;
                        const dy = p.y - p.checkY;
                        if (dx * dx + dy * dy < MIN_DISPLACEMENT * MIN_DISPLACEMENT) {
                            if (++p.stuckCount >= MAX_STUCK_CHECKS) p.dying = true;
                        } else {
                            p.stuckCount = 0;
                        }
                        p.checkX = p.x;
                        p.checkY = p.y;
                        p.checkTimer = CHECK_INTERVAL;
                    }

                    if (p.dying) {
                        p.alpha -= FADE_SPEED * dt;
                        if (p.alpha <= 0) {
                            p.x = Math.random() * w;
                            p.y = Math.random() * h;
                            p.colorIdx = Math.floor(Math.random() * accentColors.length);
                            p.speed = BASE_SPEED * (0.5 + Math.random() * 0.8);
                            p.dying = false;
                            p.stuckCount = 0;
                            p.checkTimer = CHECK_INTERVAL;
                            p.checkX = p.x;
                            p.checkY = p.y;
                        }
                    } else if (p.alpha < PARTICLE_ALPHA) {
                        p.alpha = Math.min(p.alpha + FADE_SPEED * dt, PARTICLE_ALPHA);
                    }

                    if (p.alpha <= 0) continue;

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
                    ctx.fillStyle = hexToRgba(accentColors[p.colorIdx], p.alpha);
                    ctx.fill();
                }

                time += 0.0003 * dt;
                rafId = requestAnimationFrame(draw);
            }

            rafId = requestAnimationFrame(draw);

            function onResize() {
                const newW = window.innerWidth;
                if (newW === w) return; // ignore changes to height only
                w = newW;
                h = window.innerHeight;
                setSize();
                fillBase();
                seedParticles();
            }

            function onThemeChange() {
                readTheme();
                for (const p of particles) {
                    p.colorIdx = Math.floor(Math.random() * accentColors.length);
                }
            }

            function onScroll() {
                if (!scrollTimer) {
                    cancelAnimationFrame(rafId);
                }
                clearTimeout(scrollTimer);
                scrollTimer = setTimeout(() => {
                    scrollTimer = undefined as unknown as ReturnType<typeof setTimeout>;
                    lastTime = 0;
                    rafId = requestAnimationFrame(draw);
                }, 150);
            }

            window.addEventListener('resize', onResize);
            window.addEventListener('scroll', onScroll, { passive: true });

            const themeObserver = new MutationObserver(onThemeChange);
            themeObserver.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['class'],
            });

            cleanup = () => {
                cancelAnimationFrame(rafId);
                clearTimeout(scrollTimer);
                window.removeEventListener('resize', onResize);
                window.removeEventListener('scroll', onScroll);
                themeObserver.disconnect();
            };
        }

        if (document.readyState === 'complete') {
            init();
        } else {
            window.addEventListener('load', init, { once: true });
        }

        return () => cleanup?.();
    });
</script>

<canvas bind:this={canvas} class="pointer-events-none fixed inset-0 -z-10 w-full h-full"></canvas>