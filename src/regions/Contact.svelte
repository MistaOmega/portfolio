<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
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
    <div class="mx-96 my-8 p-8 bg-crust dark:bg-mantle">
        <h3 class="text-2xl font-bold mt-2 text-peach">How can you contact me?</h3>
        <p class="mt-4 text-lg">
            You can contact me via email at <a href="mailto:"/>
        </p>
    </div>
</div>