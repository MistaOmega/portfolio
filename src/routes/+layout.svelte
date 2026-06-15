<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/Navigation.svelte';
	import FlowField from '$lib/components/FlowField.svelte';
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { MetaTags } from 'svelte-meta-tags';

	let { children } = $props();

	onMount(() => {
		document.documentElement.setAttribute('data-ready', '');
	});

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
	description="Portfolio of Jack Nash, a full-stack engineer with experience in Java, Spring Boot, C#, ASP.NET, and modern web technologies, based in the UK"
	canonical="https://mistaomega.dev"
	openGraph={{
		url: 'https://mistaomega.dev',
		title: 'Jack Nash | Full-Stack Engineer',
		description:
			'Portfolio of Jack Nash, a full-stack engineer with experience in Java, Spring Boot, C#, ASP.NET, and modern web technologies, based in the UK.',
		type: 'website',
		siteName: 'Jack Nash'
	}}
	twitter={{
		cardType: 'summary',
		title: 'Jack Nash | Full-Stack Engineer',
		description: 'Portfolio of Jack Nash, a full-stack engineer based in the UK.'
	}}
/>

<Navigation />
<FlowField />
<div class="min-h-screen text-text">
	{@render children()}
</div>
