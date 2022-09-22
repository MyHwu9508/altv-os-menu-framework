<script>
    export let _text;
    export let _emoji = undefined;
    export let _disabled = false;
    export let _placeholder = '';
    export let _maxLength = 10;
    export let _value;
    export let _index;

    function inputChanged(){
        if('alt' in window)
        alt.emit('inputChanged',_index,_value);
    }

</script>

<div class:_disabled class="flex pl-2 pr-2 pt-1 pb-1">
    {#if _emoji}
        <p id="emoji">{@html _emoji}&nbsp;|&nbsp;</p>
    {/if}
    <p id="content">{@html _text}</p>

    <div class="ml-auto mr-1 flex flex-row">
        <input bind:value={_value} on:input={inputChanged} on:submit|preventDefault maxlength={_maxLength} style="width:{_maxLength > 10 ? 10*15 : (_maxLength*15)+4}px;" type="text" id="input" placeholder={_placeholder} spellcheck='false'>
    </div>
</div>

<style>
#input::-webkit-input-placeholder{
  color: var(--fontColor);
  text-align: center;
}
#input{
    text-align: center;
    font-family: var(--fontType);
    background-color: transparent;
    border-bottom:1px solid var(--fontColor);
    outline:none;
    caret-color: var(--fontColor);
}

#input::selection {
    background-color: var(--backgroundColor);

}
</style>
