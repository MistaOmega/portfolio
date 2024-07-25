<script lang="ts">
    export let text: string;
    export let onClick: () => void;
    export let buttonClass: string = "rounded-md bg-peach text-base text-l font-bold px-3 py-1 mt-2";
</script>

<button class={buttonClass} on:click={onClick}>{text}</button>