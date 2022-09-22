<script>
    export let _text;
    export let _emoji = undefined;
    export let _disabled = false;
    export let _confirmDenyText;
    export let _confirmAcceptText;
    export let _confirmed = true;
    export let _selected = false;
</script>

<div class:_disabled class="flex pl-2 pr-2 pt-1 pb-1">
    {#if _emoji}
        <p id="emoji">{@html _emoji}&nbsp;|&nbsp;</p>
    {/if}
    <p id="content">{@html _text}</p>

    <div class="ml-auto mr-1 flex flex-row">
        <div class="mr-5 pl-2 pr-2 rounded-lg" class:_selected class:_confirmed class:unconfirmedAndSelected={!_confirmed && _selected}>
            <p>{_confirmAcceptText}</p>
        </div>
        <div class:_selected class:_confirmed={!_confirmed} class:unconfirmedAndSelected={_confirmed && _selected} class="pl-2 pr-2 rounded-lg">
            <p>{_confirmDenyText}</p>
        </div>
    </div>
</div>

<style>
    .unconfirmedAndSelected{ /*fix not full opacity colors could confuse layer 8*/
      background-color: transparent;  
    }
    ._confirmed {
        background-color: var(--highlightColor);
    }
    ._selected._confirmed {
        background-color: var(--backgroundColor);
    }
</style>
