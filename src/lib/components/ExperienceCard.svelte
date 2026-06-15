<script lang="ts">
	import type { ExperienceEntry } from '$lib/data/experience';

	let { entry }: { entry: ExperienceEntry } = $props();

	const isCurrent = $derived(!entry.endDate);
	const dateRange = $derived(
		isCurrent ? `${entry.startDate} – Present` : `${entry.startDate} – ${entry.endDate}`
	);
</script>

<div class="rounded-xl border border-surface0 bg-crust p-6 dark:bg-mantle">
	<div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
		<div class="flex flex-col gap-0.5">
			<h3 class="text-xl font-bold text-text">{entry.company}</h3>
			<div class="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
				{#if entry.roleHistory}
					{#each entry.roleHistory as prev}
						<span class="text-sm text-subtext">{prev}</span>
						<span class="text-xs text-subtext">→</span>
					{/each}
				{/if}
				<span class="text-sm font-medium text-peach">{entry.role}</span>
			</div>
		</div>
		<div class="flex shrink-0 items-center gap-2">
			{#if isCurrent}
				<span class="rounded-full bg-green/15 px-2.5 py-0.5 text-xs font-semibold text-green">
					Present
				</span>
			{/if}
			<span class="text-xs text-subtext tabular-nums">{dateRange}</span>
		</div>
	</div>
	<p class="mt-3 text-subtext leading-relaxed">{entry.description}</p>
</div>
