<script>
    import { onDestroy, onMount } from "svelte";


    export let text;
    export let emoji = undefined;
    export let disabled = false;
    export let placeholder = '';
    export let maxLength = 10;
    export let value;
    export let index;
    export let selected = false;
    let iInput;

    function inputChanged(){
        if('alt' in window)
        alt.emit('inputChanged',index,value);
    }

    $: toggleSelected(selected);

    onMount(()=>{
        if(selected) toggleSelected(selected);
    })

    function toggleSelected(selected){
        if(selected && iInput){
        //force cursor to end
        const end = iInput.value.length;
        iInput.setSelectionRange(end, end);
        //focus
        iInput.focus();

    } else if(iInput){
        //unfocus when deselected
        iInput.blur();
    }
}

</script>

<div class:disabled class="flex pl-2 pr-2 pt-1 pb-1">
    {#if emoji}
        <p id="emoji">{@html emoji}&nbsp;|&nbsp;</p>
    {/if}
    <p id="content">{@html text}</p>

    <div class="ml-auto mr-1 flex flex-row">
        <input
            bind:this={iInput}
            bind:value
            on:input={inputChanged}
            on:submit|preventDefault
            maxlength={maxLength}
            style="width:{maxLength > 10 ? 10 * 15 : maxLength * 15 + 4}px;"
            type="text"
            id="input"
            {placeholder}
            spellcheck="false"
        />
    </div>
</div>

<style>
    #input::-webkit-input-placeholder {
        color: var(--fontColor);
        text-align: center;
    }
    #input {
        text-align: center;
        font-family: var(--fontType);
        background-color: transparent;
        border-bottom: 1px solid var(--fontColor);
        outline: none;
        caret-color: var(--fontColor);
    }

    #input::selection {
        background-color: var(--backgroundColor);
    }
</style>
