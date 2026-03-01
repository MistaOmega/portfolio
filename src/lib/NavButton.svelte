<script lang="ts">
    let { text, onClick, buttonClass = "rounded-md bg-peach text-base text-l font-bold px-3 py-1 mt-2" }: {
        text: string;
        onClick: () => void;
        buttonClass?: string;
    } = $props();
</script>

<button class={buttonClass} onclick={onClick}>{text}</button>