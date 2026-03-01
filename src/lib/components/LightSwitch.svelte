<script>
    import {onMount} from "svelte";
    import MdiWeatherSunny from '~icons/mdi/weather-sunny';
    import MdiWeatherNight from '~icons/mdi/weather-night';

    let isDark = $state(true);
    const toggleDark = () => {
        isDark = !isDark;
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('darkMode', isDark.toString());
    };

    onMount(() => {
        const stored = localStorage.getItem('darkMode');
        isDark =
            stored !== null
                ? stored === 'true'
                : window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', isDark);
    })

</script>

<button
        onclick={toggleDark}
        class="rounded-lg px-3 py-1.5 text-sm bg-surface0 text-text transition-colors duration-200 hover:bg-surface1"
        aria-label="Toggle dark mode"
>
    {#if isDark}
        <MdiWeatherSunny class="h-4 w-4 text-peach" />
    {:else}
        <MdiWeatherNight class="h-4 w-4 text-sapphire" />
    {/if}
</button>