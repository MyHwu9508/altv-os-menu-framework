<script>
    export let text;
    export let emoji = undefined;
    export let disabled = false;
    export let checked = false;
</script>

<div class:disabled class="flex pl-2 pr-2 pt-1 pb-1">
    {#if emoji}
        <p id="emoji">{@html emoji}&nbsp;|&nbsp;</p>
    {/if}
    <p id="content">{@html text}</p>
    <div class:checked={checked} class:unchecked={checked == false} class="ml-auto mr-1 checkbox"></div>  
</div>


<style>
    .checkbox{
        padding: calc(var(--fontSize) * 0.6);
        background-color: var(--fontColor);
    }
    .checked{
        -webkit-mask: url(../assets/img/checked.svg) no-repeat center / contain;
    }
    .unchecked{
        -webkit-mask: url(../assets/img/unchecked.svg) no-repeat center / contain;
    }
</style>