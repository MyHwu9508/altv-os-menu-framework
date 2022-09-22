<script>
    export let _text;
    export let _emoji = undefined;
    export let _disabled = false;
    export let _currentSelection = 5;
    export let _min = 0;
    export let _max = 10;
</script>

<div class:_disabled class="flex pl-2 pr-2 pt-1 pb-1 items-center">
    {#if _emoji}
        <p id="emoji">{@html _emoji}&nbsp;|&nbsp;</p>
    {/if}
    <p id="content">{@html _text}</p>
    <input id="input" type="range" min={_min} max={_max} value={_currentSelection} class="ml-auto mr-1" />
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
    #input:focus::-webkit-slider-thumb {
        background: #333333;
        border: 1px solid #333333;
    }
    #input::-webkit-slider-runnable-track {
        background: var(--fontColor);
    }
</style>
