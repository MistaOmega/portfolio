<script lang="ts">
    let active = 'home';
</script>

<nav class="latte dark:mocha bg-crust dark:bg-base text-text p-4 sticky">
    <ul class="flex space-x-4">
        <li><a href="/" class:active={active === 'home'} class="px-4 py-2 hover:bg-peach hover:text-base" on:click={() => active = 'home'}>Home</a></li>
        <li><a href="/about" class:active={active === 'about'} class="px-4 py-2 hover:bg-peach hover:text-base" on:click={() => active = 'about'}>About</a></li>
        <li><a href="/contact" class:active={active === 'contact'} class="px-4 py-2 hover:bg-peach hover:text-base" on:click={() => active = 'contact'}>Contact</a></li>
    </ul>
</nav>

<style>
    .active {
        background-color: var(--sapphire);
        color: var(--peach);
    }
</style>