<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    let about:HTMLDivElement | null = null;
    let isContentBigger = false;

    const checkSize = () => {
        if (about) {
            isContentBigger = about.scrollHeight > window.innerHeight;
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

<div id="about" bind:this={about} class:h-fit={isContentBigger} class:h-svh={!isContentBigger} class="w-full bg-base text-text">
    <div class="text-center">
        <h2 class="text-4xl font-bold"> About Me</h2>
    </div>
    <div class="mx-4 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-96 my-8 p-8 bg-crust dark:bg-mantle">
        <h3 class="text-2xl font-bold mt-2 text-peach">Who am I?</h3>
        <p class="mt-4 text-lg">
            I am a Full-Stack Developer with a passion for technology and an adoration for learning.
            I have experience in a variety of technologies, including Java, C#, and JavaScript, and have worked on a variety of projects, from web applications to game modifications.
        </p>
    </div>
    <div class="mx-4 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-96 mt-8 p-8 bg-crust dark:bg-mantle">
        <h3 class="text-2xl font-bold mt-2 text-peach">Where do you currently work?</h3>
        <p class="mt-4 text-lg">
            I currently work as a Software Developer for Radius Telematics, working on the 3 Kinesis Projects outlined in my Projects area.
        </p>
    </div>
    <div class="mx-4 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-96 mt-8 p-8 bg-crust dark:bg-mantle">
        <h3 class="text-2xl font-bold mt-2 text-peach">What do you do in your spare time?</h3>
        <p class="mt-4 text-lg">
            In my spare time, I enjoy playing video games and going to the gym.
            I also enjoy learning new technologies and languages, and have recently been learning Rust and Go.
        </p>
    </div>
    <div class="mx-4 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-96  mt-8 p-8 bg-crust dark:bg-mantle">
        <h3 class="text-2xl font-bold mt-2 text-peach">Random trivia about me:</h3>
        <ul class="mt-4">
            <li class="text-lg">I'm a fan of Soulsborne and Soulslike games</li>
            <li class="text-lg">I play American Football, as a running back for a team called the Chester Romans</li>
            <li class="text-lg">I have a small YouTube channel with over 2000 subscribers, where I've made quick, shorts-style videos on programming, which you can check out <a href="https://youtube.com/@mistaomega" target="_blank" class="text-peach font-bold hover:text-sapphire">here!</a></li>
        </ul>
    </div>
</div>