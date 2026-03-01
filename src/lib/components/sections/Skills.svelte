<script lang="ts">
	import { skillCategories } from '$lib/data/skills';
	import SkillBadge from '$lib/components/SkillBadge.svelte';
	import { inview } from '$lib/actions/inview';
</script>

<section id="skills" class="bg-base-alpha section-diagonal w-full px-6">
	<div class="mx-auto max-w-4xl">
		<h2 class="reveal mb-2 text-center text-4xl font-bold text-text" use:inview>Skills</h2>
		<p class="section-quip reveal mb-10 text-center text-subtext" use:inview>a suspiciously long list of things I put on my CV</p>
		<div class="flex flex-col gap-8 pb-20">
			{#each skillCategories as category, i}
				<div class="reveal" use:inview style="--card-index: {i}">
					<h3 class="mb-3 text-sm font-semibold uppercase tracking-wider text-subtext">
						{category.name}
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each category.skills as skill}
							<SkillBadge {skill} color={category.color} />
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>