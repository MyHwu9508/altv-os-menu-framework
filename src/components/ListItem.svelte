<script>
    export let text;
    export let emoji = undefined;
    export let disabled = false;
    export let currentValue = '';
</script>

<div class:disabled class="flex pl-2 pr-2 pt-1 pb-1">
    {#if emoji}
        <p id="emoji">{@html emoji}&nbsp;|&nbsp;</p>
    {/if}
    <p id="content">{@html text}</p>

    <div class="ml-auto mr-1 flex flex-row">
        
        <div class="arrowLeft arrow"></div>
        
        <span>{@html currentValue}</span>
        <div class="arrowRight arrow"></div>
    </div>
</div>

<style>
    .arrow{
        width: var(--fontSize);
        background-color: var(--fontColor);
    }
    .arrowLeft{
        -webkit-mask: url(../assets/img/left-arrow.svg) no-repeat center / contain;
    }
    .arrowRight{
        -webkit-mask: url(../assets/img/right-arrow.svg) no-repeat center / contain;
    }
</style>
