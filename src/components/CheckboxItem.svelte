<script>
    export let _text;
    export let _emoji = undefined;
    export let _disabled = false;
    export let _checked = false;
</script>

<div class:_disabled class="flex pl-2 pr-2 pt-1 pb-1">
    {#if _emoji}
        <p id="emoji">{@html _emoji}&nbsp;|&nbsp;</p>
    {/if}
    <p id="content">{@html _text}</p>
    <div class:checked={_checked} class:unchecked={_checked == false} class="ml-auto mr-1 checkbox"></div>  
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