<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/Navigation.svelte';
	import FlowField from '$lib/components/FlowField.svelte';
	import { onNavigate } from '$app/navigation';
	import { MetaTags } from 'svelte-meta-tags';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<MetaTags
	title="Jack Nash | Full-Stack Engineer"
	description="Portfolio of Jack Nash, a full-stack and backend developer with experience in Java, Spring Boot, C#, ASP.NET, and modern web technologies, based in the UK"
	openGraph={{
		title: 'Jack Nash',
		description:
			'Portfolio of Jack Nash, a full-stack and backend developer with experience in Java, Spring Boot, C#, ASP.NET, and modern web technologies, based in the UK.',
		type: 'website'
	}}
/>

<Navigation />
<FlowField />
<div class="min-h-screen text-text">
	{@render children()}
</div>
