<script lang="ts">
	import type { ExperienceEntry } from '$lib/data/experience';

	let { entry }: { entry: ExperienceEntry } = $props();
</script>

<div class="rounded-xl border border-surface0 bg-crust p-6 dark:bg-mantle">
	<div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
		<h3 class="text-xl font-bold text-text">{entry.company}</h3>
		<span class="text-sm font-medium text-peach">{entry.role}</span>
	</div>
	<p class="mt-3 text-subtext leading-relaxed">{entry.description}</p>
</div>
