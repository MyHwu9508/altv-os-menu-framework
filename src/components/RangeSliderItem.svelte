<script>
    export let text;
    export let emoji = undefined;
    export let disabled = false;
    export let currentSelection = 5;
    export let min = 0;
    export let max = 10;
    export let selected = false; //used to ensure focused design pattern
</script>

<div class:disabled class="flex pl-2 pr-2 pt-1 pb-1 items-center">
    {#if emoji}
        <p id="emoji">{@html emoji}&nbsp;|&nbsp;</p>
    {/if}
    <p id="content">{@html text}</p>
    <input id="input" type="range" min={min} max={max} value={currentSelection} class:selected class="ml-auto mr-1" />
</div>

<style>
    #input {
        outline: none;
        -webkit-appearance: none;
    }
    #input::-webkit-slider-runnable-track {
        width: 100%;
        height: calc(var(--fontSize) * 0.25);
    }
    #input::-webkit-slider-thumb {
        height: calc(var(--fontSize) * 1);
        width: calc(var(--fontSize) * 0.25);
        -webkit-appearance: none;
        margin-top: calc(var(--fontSize) * -0.4);
    }
    #input::-webkit-slider-thumb {
        background: var(--highlightColor);
        border: 1px solid var(--highlightColor);
    }
    #input.selected::-webkit-slider-thumb{
        background: #333333;
        border: 1px solid #333333;
    }
    #input::-webkit-slider-runnable-track {
        background: var(--fontColor);
    }
</style>
