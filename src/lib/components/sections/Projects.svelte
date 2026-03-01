<script lang="ts">
	import { projects } from '$lib/data/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { inview } from '$lib/actions/inview';
</script>

<section id="projects" class="bg-base-alpha section-diagonal w-full px-6">
	<div class="mx-auto max-w-5xl">
		<h2 class="reveal mb-2 text-center text-4xl font-bold text-text" use:inview>Projects</h2>
		<p class="section-quip reveal mb-10 text-center text-subtext" use:inview>evidence I do this outside of work too</p>
		<div class="grid grid-cols-1 gap-5 pb-20 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project, i}
				<div class="reveal" use:inview style="--card-index: {i}">
					<ProjectCard {project} />
				</div>
			{/each}
		</div>
	</div>
</section>