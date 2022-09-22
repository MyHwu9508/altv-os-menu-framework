<script>
export let _text;
export let _emoji = undefined;
export let _disabled = false;
export let _rightText = undefined;
</script>

<div class:_disabled class="flex pl-2 pr-2 pt-1 pb-1">
    {#if _emoji}
        <p id="emoji">{@html _emoji}&nbsp;|&nbsp;</p>
    {/if}
    <p id="content">{@html _text}</p>
    {#if _rightText}
        <p id="rightLabel" class="ml-auto mr-0">{@html _rightText}</p>
    {/if}
</div>
