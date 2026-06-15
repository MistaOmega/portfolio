<script lang="ts">
	import type { Project } from '$lib/data/projects';

	let { project }: { project: Project } = $props();
</script>

<a
	href="/projects/{project.slug}"
	class="group flex flex-col gap-6 rounded-xl border border-peach/20 bg-crust p-6 transition-all duration-200 hover:border-peach/40 hover:shadow-lg hover:shadow-peach/10 dark:bg-mantle sm:flex-row sm:items-center"
>
	<div class="flex flex-1 flex-col">
		<div class="flex items-start justify-between gap-2">
			<h3 class="text-xl font-bold text-text">{project.title}</h3>
		</div>
		<p class="mt-2 text-sm leading-relaxed text-subtext">{project.description}</p>
		<div class="mt-4 flex flex-wrap gap-1.5">
			{#each project.techStack as tech}
				<span class="rounded-full bg-surface0 px-2.5 py-0.5 text-xs text-text/80">{tech}</span>
			{/each}
		</div>
		<p class="mt-4 text-xs font-medium text-peach opacity-100 sm:opacity-0 sm:transition-opacity sm:duration-200 sm:group-hover:opacity-100">
			View details →
		</p>
	</div>

	{#if project.stats}
		<div class="flex shrink-0 flex-row gap-6 sm:flex-col sm:gap-4 sm:border-l sm:border-surface0 sm:pl-6">
			{#each project.stats as stat}
				<div class="text-center sm:text-right">
					<p class="text-2xl font-bold text-peach">{stat.value}</p>
					<p class="text-xs text-subtext">{stat.label}</p>
				</div>
			{/each}
		</div>
	{/if}
</a>
