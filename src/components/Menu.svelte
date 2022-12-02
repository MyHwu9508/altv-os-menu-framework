<script>
import { fly } from 'svelte/transition';
import { onMount,onDestroy } from "svelte";
import MenuItem from './MenuItem.svelte';
import RangeSliderItem from "./RangeSliderItem.svelte";
import CheckboxItem from './CheckboxItem.svelte';
import ConfirmItem from './ConfirmItem.svelte';
import ListItem from './ListItem.svelte';
import InputItem from './InputItem.svelte';

    //managed attributes
    let itemsContainer;
    let debuginterval;
    let focusedInputItem;

    //functional attributes
    let visible = false;
    let title = 'coRrOSiVe.EU ❤️';
    let description = 'Made with Svelte by CORROSIVE.EU ❤️';
    let items = [];
    let currentSelection = 0;

    //user defined attributes
    let left = 1;
    let top = 1;
    let height = 30;
    let width = 20;
    let fontSize = 20;
    let highlightColor = '#bf7595da';
    let backgroundColor = '#000000a6';
    let fontColor = '#dfdfda';
    let fontWeight = 500;
    let fontType = 'Rubik';
    let useAnimations = true;

    onDestroy(()=>{
        if(debuginterval){
            clearInterval(debuginterval);
        }
    });

    onMount(()=>{   
        // Adding all user-based CSS properties as variable for later use
        if('alt' in window){
            alt.emit('ready');
            alt.on('setMenuItems',setMenuItems);
            alt.on('setMenuItem',setMenuItem);
            alt.on('addMenuItem',addMenuItem);
            alt.on('removeMenuItem',removeMenuItem);
            alt.on('setTitle',setTitle);
            alt.on('setIndex',setIndex);
            alt.on('setVisible',setVisible);
            alt.on('setConfig',setConfig);
        }else{
            //debug for npm run dev
            title = 'DEBUG';
            description = 'DEBUG';
            visible = true;
            items.push({type:'RangeSliderItem',text:'1'});
        }
        app.style.setProperty('--highlightColor', highlightColor);
        app.style.setProperty('--backgroundColor', backgroundColor);
        app.style.setProperty('--fontSize', fontSize+'px');
        app.style.setProperty('--fontType', fontType);
        app.style.setProperty('--fontColor', fontColor);
    });

    function setConfig(flag,value){
        switch(flag){
            case 'left':
                left = value;
                break;

                case 'top':
                top = value;
                break;

                case 'height':
                height = value;
                break;

                case 'width':
                width = value;
                break;

                case 'fontSize':
                fontSize = value;
                app.style.setProperty('--fontSize', fontSize+'px');
                break;

                case 'highlightColor':
                highlightColor = value;
                app.style.setProperty('--highlightColor', highlightColor);
                break;

                case 'backgroundColor':
                backgroundColor = value;
                app.style.setProperty('--backgroundColor', backgroundColor);
                break;

                case 'fontColor':
                fontColor = value;
                app.style.setProperty('--fontColor', fontColor);
                break;

                case 'fontWeight':
                fontWeight = value;
                break;

                case 'fontType':
                fontType = value;
                app.style.setProperty('--fontType', fontType);
                break;

                case 'useAnimations':
                useAnimations = value;    
                break;
        }
    }

    function setMenuItem(sentItem,index){
        items[index] = sentItem;
            setIndex(currentSelection);
    }

    function addMenuItem(item){
        items = [...items,item];
    }

    function removeMenuItem(index){ 
        items.splice(index,1);
        items = items;
    }

    function setMenuItems(sentItems){
        items = sentItems;
    }

    function setTitle(sentTitle){
        title = sentTitle;
    }

    function setIndex(sentIndex){
        if(items.length === 0){ //open empty menu
            description = undefined;
            currentSelection = 0;
            return;
        }
        if(itemsContainer.children[currentSelection]) {
            itemsContainer.children[currentSelection].classList.remove('selected');
        }
        currentSelection = sentIndex;
        itemsContainer.children[currentSelection].children[0].scrollIntoView({behavior: "smooth", block: "center"});
        itemsContainer.children[currentSelection].classList.add('selected');
        description = items[sentIndex].description; // set description of item on index change
    }

    function setVisible(state){
        visible = state;
    }
</script>

{#if visible}
    <div
        id="mainCont"
        class="absolute shadow-lg"
        style="left:{left}em;top:{top}em;width:{width}em;color:{fontColor};font-size:{fontSize}px;font-weight:{fontWeight};"
        transition:fly={{ x: -200, duration: useAnimations ? 200 : 0}}
    >
        <div id="itemsMainCont" class="rounded-lg pb-1">
            <div class="flex">
                <h1 id="title" class="text-center p-1 font-bold w-full mr-1 rounded-lg uppercase">{@html title}</h1>
                <p id="indexer" class="ml-auto w-max font-bold p-1 rounded-lg break-normal">{currentSelection + 1}/{items.length}</p>
            </div>
            <div
                id="itemsCont"
                class="overflow-hidden mt-2 mb-2"
                style="max-height:{height}em;"
                bind:this={itemsContainer}
            >
                {#each items as item, i}
                    {#if item.type == 'MenuItem'}
                        <MenuItem {...item} />
                    {:else if item.type == 'CheckboxItem'}
                        <CheckboxItem {...item} />
                    {:else if item.type == 'RangeSliderItem'}
                        <RangeSliderItem selected={currentSelection === i} {...item} />
                    {:else if item.type == 'ConfirmItem'}
                        <ConfirmItem selected={currentSelection === i} {...item} />
                    {:else if item.type == 'ListItem'}
                        <ListItem {...item} />
                    {:else if item.type == 'InputItem'}
                        <InputItem {...item} index={i} selected={currentSelection === i} />
                    {/if}
                {/each}
            </div>
        </div>
        {#if description}
            <div id="description" class="mt-2 rounded-lg text-center p-3">{@html description}</div>
        {/if}
    </div>
{/if}

<style>
    :global(.selected) {
        background-color: var(--highlightColor);
    }
    :global(.disabled) {
        filter: grayscale(1);
        opacity: 0.3;
    }
    :global(p, h1, div) {
        /*Tryfix <font> tag coloring used * instead */
        font-family: var(--fontType);
        color: var(--fontColor);
    }
    #title,
    #indexer {
        background-color: var(--highlightColor);
    }
    #description,
    #itemsMainCont {
        background-color: var(--backgroundColor);
    }
</style>
