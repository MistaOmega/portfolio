<script lang="ts">
import {LightSwitch} from "@skeletonlabs/skeleton";
import Navigation from "./lib/Navigation.svelte";
let isNameHovered = false;
</script>

<Navigation></Navigation>
<main class="dark:mocha latte h-full w-full bg-crust dark:bg-base flex flex-1 flex-col 2xl:flex-row items-center justify-center">
    <header class="text-text py-20 text-center 2xl:text-left 2xl:transform 2xl:-translate-x-40">
        <h1 class="text-5xl font-bold animate-slidein [--slidein-delay:300ms] opacity-0">Hello there!</h1>
        <p class="text-8xl animate-slidein [--slidein-delay:300ms]  opacity-0"
           on:mouseover="{() => isNameHovered = true}"
           on:mouseout="{() => isNameHovered = false}"
           on:focus="{() => isNameHovered = true}"
           on:blur="{() => isNameHovered = false}">
            I'm <span class="text-sapphire font-bold text-center">Jack<span class="transition-opacity duration-300 ease-in-out {isNameHovered ? 'opacity-0 2xl:opacity-0' : 'opacity-0 2xl:opacity-100'}">.</span><span class="transition-opacity duration-500 ease-in-out {isNameHovered ? 'opacity-100' : 'opacity-100 2xl:opacity-0'}"> Nash.</span></span>
        </p>
        <p class="text-2xl mt-4 animate-slidein [--slidein-delay:500ms] opacity-0">Full-Stack Developer, Technophile, Arch User </p>
        <a href="about" class="text-2xl mt-4 text-peach hover:text-sapphire animate-slidein [--slidein-delay:800ms] opacity-0">Learn more about me</a>
    </header>
    <img alt="Myself" src="img/profile.jpg"
         class="w-96 rounded-2xl opacity-0 animate-slidein [--slidein-delay:900ms] 2xl:animate-slideright 2xl:[--slideright-delay:900ms] drop-shadow-2xl">
    <LightSwitch class="absolute top-0 right-0 m-4 fill-peach"/>
</main>

