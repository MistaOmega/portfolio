<script lang="ts">
    import {LightSwitch} from "@skeletonlabs/skeleton";

    let active = 'home';

    const scrollTo = (id: string, event: MouseEvent) => {
        event.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<nav class="latte dark:mocha bg-crust dark:bg-base text-text p-4 fixed w-full">
    <ul class="flex space-x-4">
        <li><a href="#main" class:active={active === 'home'} class="px-4 py-2 rounded-md {active === 'home' ? 'text-sapphire' : 'hover:bg-peach hover:text-base'}" on:click={(event) => {active = 'home'; scrollTo('main', event);}}>Home</a></li>
        <li>|</li>
        <li><a href="#projects" class:active={active === 'projects'} class="px-4 py-2 rounded-md {active === 'projects' ? 'text-sapphire' : 'hover:bg-peach hover:text-base'}" on:click={(event) => {active = 'projects'; scrollTo('projects', event);}}>Projects</a></li>
        <li>|</li>
        <li><a href="#about" class:active={active === 'about'} class="px-4 py-2 rounded-md {active === 'about' ? 'text-sapphire' : 'hover:bg-peach hover:text-base'}" on:click={(event) => {active = 'about'; scrollTo('about', event);}}>About</a></li>
        <li>|</li>
        <li><a href="#contact" class:active={active === 'contact'} class="px-4 py-2 rounded-md {active === 'contact' ? 'text-sapphire' : 'hover:bg-peach hover:text-base'}" on:click={(event) => {active = 'contact'; scrollTo('contact', event);}}>Contact</a></li>
    </ul>
    <LightSwitch class="absolute top-0 right-0 m-4 fill-peach"/>
</nav>