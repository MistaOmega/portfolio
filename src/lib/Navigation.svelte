<script lang="ts">
    import { LightSwitch } from "@skeletonlabs/skeleton";
    import { onMount } from "svelte";

    let active = 'home';
    let isMenuOpen = false;

    const scrollTo = (id: string, event: MouseEvent) => {
        event.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        isMenuOpen = false; // Close menu on link click
    };

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };

    onMount(() => {
        // Close menu on window resize if it's open
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                isMenuOpen = false;
            }
        });
    });
</script>

<nav class="latte dark:mocha bg-surface0 dark:bg-base text-text p-4 fixed w-full z-50">
    <div class="flex justify-end items-center">
        <button class="md:hidden" on:click={toggleMenu}>
            <svg class="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class:rotate-45={isMenuOpen}>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen ? "M4 12h16M12 4v16" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
        </button>
    </div>
    <ul class="flex-col md:flex-row md:flex space-x-0 md:space-x-4 mt-4 md:mt-0 md:text-left text-center py-4 md:py-0" class:hidden={!isMenuOpen && 'md:flex'} class:bg-crust={isMenuOpen} class:justify-center={isMenuOpen} class:items-center={isMenuOpen}>
        <li class="my-4 md:my-0"><a href="#main" class:active={active === 'home'} class="py-2 px-4 rounded-md {active === 'home' ? 'text-sapphire' : 'hover:bg-peach hover:text-base'}" on:click={(event) => {active = 'home'; scrollTo('main', event);}}>Home</a></li>
        <li class="my-4 md:my-0" class:hidden={isMenuOpen}>|</li>
        <li class="my-4 md:my-0"><a href="#projects" class:active={active === 'projects'} class= "py-2 px-4 rounded-md {active === 'projects' ? 'text-sapphire' : 'hover:bg-peach hover:text-base'}" on:click={(event) => {active = 'projects'; scrollTo('projects', event);}}>Projects</a></li>
        <li class="my-4 md:my-0" class:hidden={isMenuOpen}>|</li>
        <li class="my-4 md:my-0"><a href="#about" class:active={active === 'about'} class="py-2 px-4 rounded-md {active === 'about' ? 'text-sapphire' : 'hover:bg-peach hover:text-base'}" on:click={(event) => {active = 'about'; scrollTo('about', event);}}>About</a></li>
        <li class="my-4 md:my-0" class:hidden={isMenuOpen}>|</li>
        <li class="my-4 md:my-0"><a href="#contact" class:active={active === 'contact'} class="py-2 px-4 rounded-md {active === 'contact' ? 'text-sapphire' : 'hover:bg-peach hover:text-base'}" on:click={(event) => {active = 'contact'; scrollTo('contact', event);}}>Contact</a></li>
        <li class="my-4 md:my-0 w-full"><LightSwitch class="fill-peach mx-auto md:mx-0 md:ml-auto" bgDark="bg-base" bgLight="bg-surface0" rounded="rounded-lg"/></li>
    </ul>
</nav>