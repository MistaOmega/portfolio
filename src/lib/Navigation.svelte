<script lang="ts">
    import { onMount } from "svelte";

    let active = $state('home');
    let isMenuOpen = $state(false);
    let isDark = $state(false);

    const scrollTo = (id: string, event: MouseEvent) => {
        event.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        isMenuOpen = false;
    };

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };

    const toggleDark = () => {
        isDark = !isDark;
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('darkMode', isDark.toString());
    };

    onMount(() => {
        const stored = localStorage.getItem('darkMode');
        isDark = stored !== null
            ? stored === 'true'
            : window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', isDark);

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                isMenuOpen = false;
            }
        });
    });
</script>

<nav class="bg-crust dark:bg-base text-text p-4 fixed w-full z-50">
    <div class="flex justify-end items-center">
        <button class="md:hidden" onclick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
            <svg class="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class:rotate-45={isMenuOpen}>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen ? "M4 12h16M12 4v16" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
        </button>
    </div>
    <ul class="flex-col md:flex-row md:flex space-x-0 md:space-x-4 mt-4 md:mt-0 md:text-left text-center py-4 md:py-0" class:hidden={!isMenuOpen} class:bg-crust={isMenuOpen} class:justify-center={isMenuOpen} class:items-center={isMenuOpen}>
        <li class="my-4 md:my-0"><a href="#main" class:active={active === 'home'} class="py-2 px-4 rounded-md {active === 'home' ? 'text-sapphire' : 'hover:bg-peach hover:text-base'}" onclick={(event) => {active = 'home'; scrollTo('main', event);}}>Home</a></li>
        <li class="my-4 md:my-0" class:hidden={isMenuOpen}>|</li>
        <li class="my-4 md:my-0"><a href="#projects" class:active={active === 'projects'} class="py-2 px-4 rounded-md {active === 'projects' ? 'text-sapphire' : 'hover:bg-peach hover:text-base'}" onclick={(event) => {active = 'projects'; scrollTo('projects', event);}}>Projects</a></li>
        <li class="my-4 md:my-0" class:hidden={isMenuOpen}>|</li>
        <li class="my-4 md:my-0"><a href="#about" class:active={active === 'about'} class="py-2 px-4 rounded-md {active === 'about' ? 'text-sapphire' : 'hover:bg-peach hover:text-base'}" onclick={(event) => {active = 'about'; scrollTo('about', event);}}>About</a></li>
        <li class="my-4 md:my-0" class:hidden={isMenuOpen}>|</li>
        <li class="my-4 md:my-0"><a href="#contact" class:active={active === 'contact'} class="py-2 px-4 rounded-md {active === 'contact' ? 'text-sapphire' : 'hover:bg-peach hover:text-base'}" onclick={(event) => {active = 'contact'; scrollTo('contact', event);}}>Contact</a></li>
        <li class="my-4 md:my-0 w-full flex justify-center md:justify-start md:ml-auto">
            <button
                onclick={toggleDark}
                class="rounded-lg px-3 py-1 bg-surface0 dark:bg-surface0 text-text transition-colors duration-200"
                aria-label="Toggle dark mode"
            >
                {isDark ? '☀️' : '🌙'}
            </button>
        </li>
    </ul>
</nav>