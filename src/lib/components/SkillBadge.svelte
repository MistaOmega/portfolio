<script lang="ts">
	let { skill, color }: { skill: string; color: string } = $props();

	const colorClasses: Record<string, string> = {
		peach: 'bg-peach/15 text-peach border-peach/30',
		sapphire: 'bg-sapphire/15 text-sapphire border-sapphire/30',
		green: 'bg-green/15 text-green border-green/30',
		mauve: 'bg-mauve/15 text-mauve border-mauve/30',
		yellow: 'bg-yellow/15 text-yellow border-yellow/30',
		teal: 'bg-teal/15 text-teal border-teal/30'
	};

	const classes = $derived(colorClasses[color] ?? colorClasses['peach']);
</script>

<span class="inline-block rounded-full border px-3 py-1 text-sm font-medium {classes}">
	{skill}
</span>
