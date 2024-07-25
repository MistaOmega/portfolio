<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import IcSharpDiscord from '~icons/ic/sharp-discord';
    import MdiGithub from '~icons/mdi/github';
    import MdiLinkedin from '~icons/mdi/linkedin';
    import MdiExternalLink from '~icons/mdi/external-link';
    let contact:HTMLDivElement | null = null;
    let isContentBigger = false;

    const checkSize = () => {
        if (contact) {
            isContentBigger = contact.scrollHeight > window.innerHeight;
        }
    };

    onMount(() => {
        window.addEventListener('resize', checkSize);
        checkSize();
    });

    onDestroy(() => {
        window.removeEventListener('resize', checkSize);
    });
</script>

<div id="contact" bind:this={contact} class:h-fit={isContentBigger} class="h-svh w-full dark:mocha latte bg-base dark:bg-base text-text">
    <div class="text-center">
        <h2 class="text-4xl font-bold">Contact</h2>
    </div>
    <div class="mx-4 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-96 my-8 p-8 bg-crust dark:bg-mantle">
        <div id="contact" class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 p-4">
            <a href="https://github.com/MistaOmega" target="_blank" class="bg-crust dark:bg-mantle rounded-lg p-4">
                <h3 class="text-6xl mt-2 font-bold flex justify-center items-center">
                    <MdiGithub/>
                </h3>
                <p class="text-xl font-bold text-peach text-center hover:text-sapphire">MistaOmega</p>
                <p class="text-xl mt-2 font-bold text-sapphire flex justify-center items-center">
                    <MdiExternalLink/>
                </p>
                <hr class="w-full h-0.5 mx-auto my-4 border-0 rounded bg-peach lg:w-0">
            </a>
            <a href="https://linkedin.com/in/jfmnash" target="_blank" class="bg-crust dark:bg-mantle rounded-lg p-4">
                <h3 class="text-6xl font-bold flex justify-center items-center">
                    <MdiLinkedin/>
                </h3>
                <p class="text-xl font-bold text-peach text-center hover:text-sapphire">Jack Nash</p>
                <p class="text-xl mt-2 font-bold text-sapphire flex justify-center items-center">
                    <MdiExternalLink/>
                </p>
                <hr class="w-full h-0.5 mx-auto my-4 border-0 rounded bg-peach lg:w-0">
            </a>
            <div class="bg-crust dark:bg-mantle rounded-lg p-4">
                <h3 class="text-6xl font-bold flex justify-center items-center">
                    <IcSharpDiscord/>
                </h3>
                <p class="text-xl font-bold text-peach text-center">MistaOmega</p>
            </div>
        </div>
    </div>

</div>