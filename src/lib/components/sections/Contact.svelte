<script lang="ts">
	import IcSharpDiscord from '~icons/ic/sharp-discord';
	import MdiGithub from '~icons/mdi/github';
	import MdiLinkedin from '~icons/mdi/linkedin';
	import MdiEmail from '~icons/mdi/email';
	import { inview } from '$lib/actions/inview';

	let discordCopied = $state(false);

	async function copyDiscord() {
		await navigator.clipboard.writeText('MistaOmega');
		discordCopied = true;
		setTimeout(() => (discordCopied = false), 2000);
	}
</script>

<section id="contact" class="bg-mantle-alpha section-diagonal-alt w-full px-6 pb-20">
	<div class="mx-auto max-w-3xl">
		<h2 class="reveal mb-4 text-center text-4xl font-bold text-text" use:inview>Contact</h2>
		<p class="section-quip reveal mb-10 text-center text-subtext" use:inview>professionally reachable, personally questionable</p>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			<a
				href="mailto:jack@mistaomega.dev"
				class="reveal flex flex-col items-center gap-3 rounded-xl border border-surface0 bg-crust p-6 transition-all duration-200 hover:-translate-y-1 hover:border-peach/40 dark:bg-surface0"
				use:inview
				style="--card-index: 0"
			>
				<MdiEmail class="text-5xl text-text" />
				<span class="font-medium text-peach">Email</span>
			</a>
			<a
				href="https://github.com/MistaOmega"
				target="_blank"
				rel="noopener noreferrer"
				class="reveal flex flex-col items-center gap-3 rounded-xl border border-surface0 bg-crust p-6 transition-all duration-200 hover:-translate-y-1 hover:border-peach/40 dark:bg-surface0"
				use:inview
				style="--card-index: 1"
			>
				<MdiGithub class="text-5xl text-text" />
				<span class="font-medium text-peach">MistaOmega</span>
			</a>
			<a
				href="https://linkedin.com/in/jfmnash"
				target="_blank"
				rel="noopener noreferrer"
				class="reveal flex flex-col items-center gap-3 rounded-xl border border-surface0 bg-crust p-6 transition-all duration-200 hover:-translate-y-1 hover:border-peach/40 dark:bg-surface0"
				use:inview
				style="--card-index: 2"
			>
				<MdiLinkedin class="text-5xl text-text" />
				<span class="font-medium text-peach">Jack Nash</span>
			</a>
			<button
				onclick={copyDiscord}
				class="reveal flex flex-col items-center gap-3 rounded-xl border border-surface0 bg-crust p-6 transition-all duration-200 hover:-translate-y-1 hover:border-peach/40 dark:bg-surface0 cursor-pointer w-full"
				use:inview
				style="--card-index: 3"
				title="Click to copy username"
			>
				<IcSharpDiscord class="text-5xl text-text" />
				<span class="font-medium text-peach">
					{discordCopied ? '✓ Copied!' : 'MistaOmega'}
				</span>
			</button>
		</div>
	</div>
</section>
