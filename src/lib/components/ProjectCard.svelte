<script lang="ts">
	import type { Project } from '$lib/data/projects';

	let { project }: { project: Project } = $props();
</script>

<a
	href="/projects/{project.slug}"
	class="group flex flex-col rounded-xl border border-peach/20 bg-crust p-5 transition-all duration-200 hover:-translate-y-1 hover:border-peach/40 hover:shadow-lg hover:shadow-peach/10 dark:bg-mantle h-full"
>
	<h3 class="text-xl font-bold text-text">{project.title}</h3>
	<p class="mt-2 text-sm text-subtext leading-relaxed flex-1">{project.description}</p>
	<div class="mt-4 flex flex-wrap gap-1.5">
		{#each project.techStack.slice(0, 4) as tech}
			<span class="rounded-full bg-surface0 px-2.5 py-0.5 text-xs text-text/80">{tech}</span>
		{/each}
		{#if project.techStack.length > 4}
			<span class="rounded-full bg-surface0 px-2.5 py-0.5 text-xs text-subtext">
				+{project.techStack.length - 4} more
			</span>
		{/if}
	</div>
	<p class="mt-4 text-xs font-medium text-peach opacity-0 transition-opacity duration-200 group-hover:opacity-100">
		View details →
	</p>
</a>
