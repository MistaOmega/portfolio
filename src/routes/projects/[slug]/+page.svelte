<script lang="ts">
	import type { PageData } from './$types';
	import MdiGithub from '~icons/mdi/github';
	import MdiArrowLeft from '~icons/mdi/arrow-left';
	import { MetaTags } from 'svelte-meta-tags';

	let { data }: { data: PageData } = $props();
	const project = $derived(data.project);
</script>

<MetaTags
	title="{project.title} | Jack Nash"
	description={project.description}
/>d

<main class="mx-auto max-w-3xl px-6 pt-28 pb-20">
	<a
		href="/#projects"
		class="mb-8 inline-flex items-center gap-2 text-sm text-subtext transition-colors hover:text-text"
	>
		<MdiArrowLeft class="text-peach" />
		Back to portfolio
	</a>

	<h1 class="mt-4 text-4xl font-bold text-text">{project.title}</h1>
	<p class="mt-3 text-lg text-subtext">{project.description}</p>

	<div class="mt-6 flex flex-wrap gap-2">
		{#each project.techStack as tech}
			<span class="rounded-full bg-surface0 px-3 py-1 text-sm text-text">{tech}</span>
		{/each}
	</div>

	{#if project.githubUrl}
		<a
			href={project.githubUrl}
			target="_blank"
			rel="noopener noreferrer"
			class="mt-6 inline-flex items-center gap-2 rounded-lg border border-peach/30 px-4 py-2 text-sm font-medium text-peach transition-colors hover:bg-peach/10"
		>
			<MdiGithub />
			View on GitHub
		</a>
	{/if}

	<div class="mt-10 space-y-6">
		<div class="rounded-xl border border-surface0 bg-crust p-6 dark:bg-mantle">
			<h2 class="mb-3 text-lg font-semibold text-text">Overview</h2>
			<p class="text-subtext leading-relaxed">{project.overview}</p>
		</div>
		<div class="rounded-xl border border-surface0 bg-crust p-6 dark:bg-mantle">
			<h2 class="mb-3 text-lg font-semibold text-text">Role &amp; Contribution</h2>
			<p class="text-subtext leading-relaxed">{project.role}</p>
		</div>
	</div>
</main>
