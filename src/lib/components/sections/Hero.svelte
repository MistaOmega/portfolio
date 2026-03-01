<script lang="ts">
	let isNameHovered = $state(false);
</script>

<section
	id="main"
	class="flex min-h-svh w-full flex-col items-center justify-center gap-12 px-6 pt-16 2xl:flex-row 2xl:gap-24"
>
	<header class="text-center 2xl:text-left">
		<h1
			class="text-3xl font-bold text-text opacity-0 sm:text-4xl md:text-5xl animate-slidein [--slidein-delay:150ms]"
		>
			Hello there!
		</h1>
		<p
			class="mt-2 text-4xl opacity-0 sm:text-6xl md:text-8xl animate-slidein [--slidein-delay:300ms]"
			onmouseover={() => (isNameHovered = true)}
			onmouseout={() => (isNameHovered = false)}
			onfocus={() => (isNameHovered = true)}
			onblur={() => (isNameHovered = false)}
		>
			I'm <span class="font-bold text-sapphire"
				>Jack<span
					class="transition-opacity duration-300 ease-in-out {isNameHovered
						? 'opacity-0 2xl:opacity-0'
						: 'opacity-0 2xl:opacity-100'}"
					>.</span
				><span
					class="transition-opacity duration-500 ease-in-out {isNameHovered
						? 'opacity-100'
						: 'opacity-100 2xl:opacity-0'}"> Nash.</span
				></span
			>
		</p>
		<p
			class="mt-4 mb-6 text-lg text-subtext opacity-0 sm:text-xl md:text-2xl animate-slidein [--slidein-delay:500ms]"
		>
			Full-Stack Engineer · technophile · arch user 🤮
		</p>
		<div class="flex flex-wrap justify-center gap-3 opacity-0 animate-slidein [--slidein-delay:700ms] 2xl:justify-start">
			<a
				href="#projects"
				onclick={(e) => {
					e.preventDefault();
					document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
				}}
				class="rounded-lg bg-sapphire px-5 py-2.5 font-medium text-base transition-opacity hover:opacity-90"
			>
				View Projects
			</a>
			<a
				href="/cv.pdf"
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-lg border border-peach px-5 py-2.5 font-medium text-peach transition-colors hover:bg-peach hover:text-base"
			>
				Download CV
			</a>
		</div>
	</header>
	<img
		alt="Jack Nash"
		src="/img/profile.jpg"
		class="w-72 rounded-2xl drop-shadow-2xl opacity-0 animate-slidein [--slidein-delay:900ms] 2xl:animate-slideright 2xl:[--slideright-delay:900ms] sm:w-96"
	/>
</section>