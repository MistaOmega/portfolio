<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import LightSwitch from "$lib/components/LightSwitch.svelte";

	let isMenuOpen = $state(false);


	const navLinks = [
		{ id: 'main', label: 'Home' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'contact', label: 'Contact' }
	];

	const isHome = $derived(page.url.pathname === '/');

	const handleNavClick = (id: string, event: MouseEvent) => {
		isMenuOpen = false;
		if (isHome) {
			event.preventDefault();
			document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
		}
		// Otherwise let SvelteKit navigate to /#id via the href
	};

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	onMount(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 768) {
				isMenuOpen = false;
			}
		});
	});
</script>

<nav
	class="fixed z-50 w-full border-b border-surface0/50 bg-base/80 text-text backdrop-blur-md transition-colors duration-200"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
		<a href="/" class="text-lg font-bold text-sapphire hover:text-peach transition-colors duration-200">
			Jack Nash
		</a>

		<div class="flex items-center gap-2">
			<!-- desktop -->
			<ul class="hidden items-center gap-1 md:flex">
				{#each navLinks as link}
					<li>
						<a
							href={isHome ? `#${link.id}` : `/#${link.id}`}
							class="rounded-md px-3 py-1.5 text-sm transition-colors duration-150 hover:bg-surface0 hover:text-text"
							onclick={(e) => handleNavClick(link.id, e)}
						>
							{link.label}
						</a>
					</li>
				{/each}
				<li>
					<a
						href="/cv.pdf"
						target="_blank"
						rel="noopener noreferrer"
						class="ml-2 rounded-md bg-peach px-3 py-1.5 text-sm font-medium text-base transition-opacity duration-150 hover:opacity-90"
					>
						CV
					</a>
				</li>
			</ul>
			<LightSwitch />

			<!-- mobile hamburger -->
			<button
				class="rounded-lg p-1.5 md:hidden hover:bg-surface0 transition-colors"
				onclick={toggleMenu}
				aria-label="Toggle menu"
				aria-expanded={isMenuOpen}
			>
				<svg
					class="h-5 w-5 transition-transform duration-300"
					class:rotate-45={isMenuOpen}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d={isMenuOpen ? 'M4 12h16M12 4v16' : 'M4 6h16M4 12h16m-7 6h7'}
					></path>
				</svg>
			</button>
		</div>
	</div>

	<!-- mobile menu -->
	{#if isMenuOpen}
		<ul class="border-t border-surface0/50 bg-base/95 px-4 py-2 md:hidden">
			{#each navLinks as link}
				<li>
					<a
						href={isHome ? `#${link.id}` : `/#${link.id}`}
						class="block rounded-md px-3 py-2 text-sm hover:bg-surface0"
						onclick={(e) => handleNavClick(link.id, e)}
					>
						{link.label}
					</a>
				</li>
			{/each}
			<li>
				<a
					href="/cv.pdf"
					target="_blank"
					rel="noopener noreferrer"
					class="block rounded-md px-3 py-2 text-sm font-medium text-peach"
				>
					Download CV
				</a>
			</li>
		</ul>
	{/if}
</nav>
