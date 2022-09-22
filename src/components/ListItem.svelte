<script>
    export let _text;
    export let _emoji = undefined;
    export let _disabled = false;
    export let _currentValue = '';
</script>

<div class:_disabled class="flex pl-2 pr-2 pt-1 pb-1">
    {#if _emoji}
        <p id="emoji">{@html _emoji}&nbsp;|&nbsp;</p>
    {/if}
    <p id="content">{@html _text}</p>

    <div class="ml-auto mr-1 flex flex-row">
        
        <div class="arrowLeft arrow"></div>
        <p>{@html _currentValue}</p>
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
