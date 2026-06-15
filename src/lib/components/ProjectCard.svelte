<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import MdiGithub from '~icons/mdi/github';
	import MdiOpenInNew from '~icons/mdi/open-in-new';

	let { project }: { project: Project } = $props();
</script>

<a
	href="/projects/{project.slug}"
	class="group flex h-full flex-col rounded-xl border border-peach/20 bg-crust p-5 transition-all duration-200 hover:-translate-y-1 hover:border-peach/40 hover:shadow-lg hover:shadow-peach/10 dark:bg-mantle"
>
	<div class="flex items-start justify-between gap-2">
		<h3 class="text-xl font-bold text-text">{project.title}</h3>
		<div class="mt-0.5 flex shrink-0 items-center gap-1.5 text-subtext">
			{#if project.liveUrl}
				<span class="transition-colors group-hover:text-peach" aria-label="Live site">
					<MdiOpenInNew class="text-lg" />
				</span>
			{/if}
			{#if project.githubUrl}
				<span class="transition-colors group-hover:text-peach" aria-label="Open source">
					<MdiGithub class="text-lg" />
				</span>
			{/if}
		</div>
	</div>
	<p class="mt-2 flex-1 text-sm leading-relaxed text-subtext">{project.description}</p>
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
	<p class="mt-4 text-xs font-medium text-peach opacity-100 sm:opacity-0 sm:transition-opacity sm:duration-200 sm:group-hover:opacity-100">
		View details →
	</p>
</a>
