<script lang="ts">
    import Navigation from "./lib/Navigation.svelte";
    import About from "./regions/About.svelte";
    import Projects from "./regions/Projects.svelte";
    import Contact from "./regions/Contact.svelte";
    let isNameHovered = false;
</script>

<Navigation></Navigation>
<main id="main" class="dark:mocha latte h-svh w-full bg-base dark:bg-base flex flex-1 flex-col 2xl:flex-row items-center justify-center">
    <header class="text-text py-20 text-center 2xl:text-left 2xl:transform 2xl:-translate-x-40">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold animate-slidein [--slidein-delay:300ms] opacity-0">Hello there!</h1>
        <p class="text-4xl sm:text-6xl md:text-8xl animate-slidein [--slidein-delay:300ms] opacity-0"
           on:mouseover="{() => isNameHovered = true}"
           on:mouseout="{() => isNameHovered = false}"
           on:focus="{() => isNameHovered = true}"
           on:blur="{() => isNameHovered = false}">
            I'm <span class="text-sapphire font-bold text-center">Jack<span class="transition-opacity duration-300 ease-in-out {isNameHovered ? 'opacity-0 2xl:opacity-0' : 'opacity-0 2xl:opacity-100'}">.</span><span class="transition-opacity duration-500 ease-in-out {isNameHovered ? 'opacity-100' : 'opacity-100 2xl:opacity-0'}"> Nash.</span></span>
        </p>
        <p class="text-lg sm:text-xl md:text-2xl mt-4 animate-slidein [--slidein-delay:500ms] opacity-0 mb-4">Full-Stack Developer, Technophile, Arch User 🤮</p>
    </header>
    <img alt="Myself" src="img/profile.jpg"
         class="w-96 rounded-2xl opacity-0 animate-slidein [--slidein-delay:900ms] 2xl:animate-slideright 2xl:[--slideright-delay:900ms] drop-shadow-2xl">
</main>
<hr class="w-2/3 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-peach">
<Projects/>
<hr class="w-2/3 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-peach">
<About/>
<hr class="w-2/3 h-1 mx-auto my-4 border-0 rounded md:my-10 bg-peach">
<Contact/>



