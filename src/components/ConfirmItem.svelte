<script>
    export let text;
    export let emoji = undefined;
    export let disabled = false;
    export let confirmDenyText;
    export let confirmAcceptText;
    export let confirmed = true;
    export let selected = false;
</script>

<div class:disabled class="flex pl-2 pr-2 pt-1 pb-1">
    {#if emoji}
        <p id="emoji">{@html emoji}&nbsp;|&nbsp;</p>
    {/if}
    <p id="content">{@html text}</p>

    <div class="ml-auto mr-1 flex flex-row">
        <div class="mr-5 pl-2 pr-2 rounded-lg" class:selected class:confirmed class:unconfirmedAndSelected={!confirmed && selected}>
            <p>{@html confirmAcceptText}</p>
        </div>
        <div class:selected class:confirmed={!confirmed} class:unconfirmedAndSelected={confirmed && selected} class="pl-2 pr-2 rounded-lg">
            <p>{@html confirmDenyText}</p>
        </div>
    </div>
</div>

<style>
    .unconfirmedAndSelected{ /*fix not full opacity colors could confuse layer 8*/
      background-color: transparent;  
    }
    .confirmed {
        background-color: var(--highlightColor);
    }
    .selected.confirmed {
        background-color: var(--backgroundColor);
    }
</style>
