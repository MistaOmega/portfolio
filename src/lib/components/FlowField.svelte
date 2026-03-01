<script lang="ts">
	import { onMount } from 'svelte';
	import { createNoise2D } from 'simplex-noise';

	let canvas: HTMLCanvasElement;

	const NOISE_SCALE = 0.0025         // scale of noise function
	const BASE_SPEED = 1.0;            // px/frame
	const FADE_ALPHA = 0.04;           // particle alpha when fading out
	const PARTICLE_ALPHA = 0.4;        // particle alpha when not fading out
	const FADE_SPEED = 0.012;          // alpha change per frame when fading in/out
	const CHECK_INTERVAL = 120;        // frames between displacement checks (~2s at 60fps)
	const MIN_DISPLACEMENT = 25;       // px, below this counts as stuck
	const MAX_STUCK_CHECKS = 2;        // consecutive failed checks before fading out
    const BASE_PARTICLE_COUNT = 900;   // particle count on desktop
    const MOBILE_PARTICLE_COUNT = 150; // particle count on mobile

	function hexToRgb(hex: string): [number, number, number] {
		return [
			parseInt(hex.slice(1, 3), 16),
			parseInt(hex.slice(3, 5), 16),
			parseInt(hex.slice(5, 7), 16)
		];
	}

	function hexToRgba(hex: string, alpha: number): string {
		const [r, g, b] = hexToRgb(hex);
		return `rgba(${r},${g},${b},${alpha})`;
	}

	interface Particle {
		x: number;
		y: number;
		colorIdx: number;
		speed: number;
		alpha: number;
		dying: boolean;
		stuckCount: number;
		checkTimer: number;
		checkX: number;
		checkY: number;
	}

	onMount(() => {
		const ctx = canvas.getContext('2d')!;
		const noise2D = createNoise2D();
		let w = (canvas.width = window.innerWidth);
		let h = (canvas.height = window.innerHeight);
		let time = 0;
		let rafId: number;
		let fadeStyle = '';
		let accentColors: string[] = [];
		let particles: Particle[] = [];

		function readTheme() {
			const styleProps = getComputedStyle(document.documentElement);
			const get = (k: string) => styleProps.getPropertyValue(k).trim();
			const isDark = document.documentElement.classList.contains('dark');
			const base = isDark ? get('--catppuccin-color-base') : '#ffffff';
			const [r, g, b] = hexToRgb(base);
			fadeStyle = `rgba(${r},${g},${b},${FADE_ALPHA})`;
			accentColors = [
				get('--catppuccin-color-sapphire'),
				get('--catppuccin-color-mauve'),
				get('--catppuccin-color-peach'),
				get('--catppuccin-color-teal')
			];
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
				checkTimer: Math.floor(Math.random() * CHECK_INTERVAL), // stagger checks
				checkX: x,
				checkY: y
			};
		}

		function seedParticles() {
			const count = w < 768 ? MOBILE_PARTICLE_COUNT : BASE_PARTICLE_COUNT; // mobile has less particles
			particles = Array.from({ length: count }, makeParticle);
		}

		function fillBase() {
			const s = getComputedStyle(document.documentElement);
			const base = s.getPropertyValue('--catppuccin-color-base').trim();
            console.log(base)
			const [r, g, b] = hexToRgb(base);
			ctx.fillStyle = `rgb(${r},${g},${b})`;
			ctx.fillRect(0, 0, w, h);
		}

		readTheme();
		fillBase();
		seedParticles();

		function draw() {
			ctx.fillStyle = fadeStyle;
			ctx.fillRect(0, 0, w, h);

			for (const p of particles) {
                // we want to direct the particle at an angle based on the noise function
                // noise 2d will give us a value between -1 and 1, which we'll use to determine the angle
				const angle = noise2D(p.x * NOISE_SCALE + time, p.y * NOISE_SCALE) * Math.PI * 4;
				p.x += Math.cos(angle) * p.speed;
				p.y += Math.sin(angle) * p.speed;

				if (p.x < 0) p.x = w;
				else if (p.x > w) p.x = 0;
				if (p.y < 0) p.y = h;
				else if (p.y > h) p.y = 0;

				// find stuck particles
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

				// fade out, teleport, fade back in
				if (p.dying) {
					p.alpha -= FADE_SPEED;
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
					p.alpha = Math.min(p.alpha + FADE_SPEED, PARTICLE_ALPHA);
				}

				if (p.alpha <= 0) continue;

				ctx.beginPath();
				ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
				ctx.fillStyle = hexToRgba(accentColors[p.colorIdx], p.alpha);
				ctx.fill();
			}

			time += 0.0003;
			rafId = requestAnimationFrame(draw);
		}

		draw();

		function onResize() {
			w = canvas.width = window.innerWidth;
			h = canvas.height = window.innerHeight;
			fillBase();
			seedParticles();
		}

		function onThemeChange() {
			readTheme();
			for (const p of particles) {
				p.colorIdx = Math.floor(Math.random() * accentColors.length);
			}
		}

		window.addEventListener('resize', onResize);

		const themeObserver = new MutationObserver(onThemeChange);
		themeObserver.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		});

		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener('resize', onResize);
			themeObserver.disconnect();
		};
	});
</script>

<canvas bind:this={canvas} class="pointer-events-none fixed inset-0 -z-10"></canvas>
