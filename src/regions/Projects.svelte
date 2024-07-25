<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import NavButton from "../lib/NavButton.svelte";
    let projects:HTMLDivElement | null = null;
    let isContentBigger = false;

    const checkSize = () => {
        if (projects) {
            isContentBigger = projects.scrollHeight > window.innerHeight;
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

<div id="projects" bind:this={projects} class:h-fit={isContentBigger} class:h-svh={!isContentBigger} class:w-full={true} class:dark:mocha={true} class:latte={true} class:bg-base={true} class:dark:bg-base={true} class:text-text={true}>
    <div class="text-center">
        <h2 class="text-4xl font-bold">Projects</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 lg:px-32 lg:py-8 2xl:px-96 2xl:py-16 auto-rows-max">
        <div class="bg-crust dark:bg-mantle rounded-lg p-4">
            <h3 class="text-2xl font-bold">Kinesis Connect</h3>
            <p class="text-lg text-peach">A sales platform for Radius Telematics, built using ASP.NET and the .NET Framework, with built-in API</p>
            <h4 class="text-xl font-bold mt-8">Technologies used:</h4>
            <ul class="list-disc list-inside">
                <li>ASP.NET</li>
                <li>.NET Framework</li>
                <li>SQL Server</li>
            </ul>
        </div>
        <div class="bg-crust dark:bg-mantle rounded-lg p-4">
            <h3 class="text-2xl font-bold">Kinesis Control</h3>
            <p class="text-lg text-peach">A post-sales management system, made up of multiple microservices with a React Front-End</p>
            <h4 class="text-xl font-bold mt-8">Technologies used:</h4>
            <ul class="list-disc list-inside">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>React</li>
                <li>Microservice Architecture</li>
                <li>Oracle SQL</li>
                <li>Postgresql</li>
            </ul>
        </div>
        <div class="bg-crust dark:bg-mantle rounded-lg p-4">
            <h3 class="text-2xl font-bold">Kinesis Core</h3>
            <p class="text-lg text-peach">A central API system and device message processor for telematic devices</p>
            <h4 class="text-xl font-bold mt-8">Technologies used:</h4>
            <ul class="list-disc list-inside">
                <li>Java</li>
                <li>Cassandra</li>
                <li>Artemis-MQ</li>
            </ul>
        </div>
        <div class="bg-crust dark:bg-mantle rounded-lg p-4">
            <h3 class="text-2xl font-bold">OMenu</h3>
            <p class="text-lg text-peach">ImGUI menu injection template for various graphic rendering frameworks </p>
            <NavButton text="GitHub" onClick={() => window.open('https://github.com/mistaomega/omenu', '_blank')}/>
            <h4 class="text-xl font-bold mt-8">Technologies used:</h4>
            <ul class="list-disc list-inside">
                <li>C++</li>
                <li>ImGUI</li>
                <li>DirectX 9</li>
                <li>DirectX 10</li>
                <li>DirectX 11</li>
                <li>DirectX 12</li>
                <li>OpenGL</li>
            </ul>
        </div>
        <div class="bg-crust dark:bg-mantle rounded-lg p-4">
            <h3 class="text-2xl font-bold">Subnautica Nitrox</h3>
            <p class="text-lg text-peach">An open-source, multiplayer modification for the game Subnautica</p>
            <NavButton text="GitHub" onClick={() => window.open('https://github.com/mistaomega/nitrox', '_blank')}/>
            <h4 class="text-xl font-bold mt-8">Technologies used:</h4>
            <ul class="list-disc list-inside">
                <li>C#</li>
                <li>UnityEngine</li>
                <li>Harmony</li>
            </ul>
        </div>
        <div class="bg-crust dark:bg-mantle rounded-lg p-4">
            <h3 class="text-2xl font-bold">Personal Portfolio</h3>
            <p class="text-lg text-peach">You're looking at it, a static portfolio, designed with Svelte</p>
            <NavButton text="GitHub" onClick={() => window.open('https://github.com/mistaomega/nitrox', '_blank')}/>
            <h4 class="text-xl font-bold mt-8">Technologies used:</h4>
            <ul class="list-disc list-inside">
                <li>Svelte</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>TailwindCSS</li>
                <li>Typescript</li>
                <li>Vite</li>
                <li>Node.JS</li>
            </ul>
        </div>
    </div>
</div>