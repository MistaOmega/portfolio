<script lang="ts">
	import { experience } from '$lib/data/experience';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import { inview } from '$lib/actions/inview';
</script>

<section id="experience" class="bg-mantle-alpha section-diagonal-alt w-full px-6">
	<div class="mx-auto max-w-4xl">
		<h2 class="reveal mb-2 text-center text-4xl font-bold text-text" use:inview>Experience</h2>
		<p class="section-quip reveal mb-10 text-center text-subtext" use:inview>places that have, at some point, tolerated me</p>
		<div class="flex flex-col gap-4 pb-20">
			{#each experience as entry, i}
				<div class="reveal" use:inview style="--card-index: {i}">
					<ExperienceCard {entry} />
				</div>
			{/each}
		</div>
	</div>
</section>