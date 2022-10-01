<script>
export let text;
export let emoji = undefined;
export let disabled = false;
export let rightText = undefined;
</script>

<div class:disabled class="flex pl-2 pr-2 pt-1 pb-1">
    {#if emoji}
        <p id="emoji">{@html emoji}&nbsp;|&nbsp;</p>
    {/if}
    <p id="content">{@html text}</p>
    {#if rightText}
        <p id="rightLabel" class="ml-auto mr-0">{@html rightText}</p>
    {/if}
</div>
