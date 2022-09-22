# alt:V Open Source MenuFramework

**[MenuFramework](https://github.com/MyHwu9508/altv-os-menu-framework)** is a menu framework written for **[alt:V](https://altv.mp/)**.
This framework will help you implement intuitive menus quickly. Currently this framework is only available in JS. In case you want to help me adding TS support, please check the contact details on the bottom of this page.

## Features
- Components (default items, list items, checkbox items, input items, confirm items)
- Built-in event handlers
- For each component an item description
- Support for emojis
- Fully configurable design pattern (colours, scale, positioning)
- Support for controllers and built in menu navigation using arrow keys, enter and backspace
- all items, descriptions and menu titels can contain plain html markup language -> You could even add a video player to the description box if you want to
- Colored text is support with the feature mentioned above. Please see the example resource to get help.

## Compile files
**[MenuFramework](https://github.com/MyHwu9508/altv-os-menu-framework)** uses **[Svelte](https://svelte.dev/)**, **[Tailwind CSS](https://tailwindcss.com/)** with **[NodeJS](https://nodejs.org/en/)**.
Before compiling the files make sure you have the latest [Node.js](https://nodejs.org/en/) version installed.
Run following commands to download all necessary dependencies:
```sh
npm i
```
Now you can build the source by running following command:
```sh
npm run build
```

After the command is executed you will see a `dist` folder containing all the resource files.
Copy the content of this folder to your own resource, or if you are using the example resource paste the files in `menuframework-example/client/src/html`.

## Menu usage
To run the example resource copy it into your servers resources folder and add `menuframework-example` to your `server.cfg`.
Now start and join your server and `press M` to open the example resource.

## Menu Development
### Menu creation
Make sure you import the source file by adding following import to your file:
```js
import * as MenuFramework from './src/menu';
```

Create a menu by calling the **MenuFramework.Menu** constructor.
```js
const menu = new MenuFramework.Menu(title);
```
**Example:**
```js
const menu = new MenuFramework.Menu('Example');
```

### Menu item creation
Use one of the following examples to create a new menu item.
```js
/** CREATE A BUTTON */
new MenuFramework.MenuItem(text: string, description?: string, emoji?: string, disabled?: bool, data?: any, rightText?: string);

/** CREATE A CONFIRM */
new MenuFramework.ConfirmItem(text: string, confirmDenyText?: string, confirmAcceptText?: string, confirmed?: bool, description?: string, emoji?: string, disabled:? bool, data?: any);

/** CREATE A RANGESLIDER */
new MenuFramework.RangeSliderItem(text: string, min: int, max: int, currentSelection?: int, description?: string, emoji?: string, disabled?: bool, data?: any);

/** CREATE A CHECKBOX */
new MenuFramework.CheckboxItem(text: string, checked?: bool, description?: string, emoji?: string, disabled?: bool, data?: any);

/** CREATE A LIST */
new MenuFramework.ListItem(text: string, values?: Array[], initialIndex?: int, description?: string, emoji?: string, disabled?: bool, data?: any);

/** CREATE AN AUTOLIST */
new MenuFramework.AutoListItem(text: string, min: int, max:int, initialIndex?: int, description?: string, emoji?: string, disabled?: bool, data?: any);
```
### Make sure you add the menu item you create to the menu!

### Events
You can listen to events that are emitted by user inputs.

Listen to an event by adding a handler:
```js
    menu.itemSelect.on((item,index) => {
        alt.log(`Selected item ${item.text} @${index}`);
    });
```

```js
/** AVAILBALE EVENTS */
menuOpen()
menuClose(noParentMenuOpened)
checkboxChange(item,state)
rangeSliderChange(item,newValue)
itemSelect(item,index)
confirmationSubmit(item,confirmed)
inputSubmit(item,newValue)
inputChange(item,newValue)
listChange(item,newIndex,oldIndex,newValue)
autoListChange(item,newIndex,newValue)
```

### Design Configuration
Menus can be designed in bundles as follows:
Change the values for `MenuFramework.menuConfiguration`
It contains following attributes:
```js
left
top
height
fontSize
highlightColor
backgroundColor
fontColor
fontWeight
fontType
sound
```
If you want to add more fonts to the menu, please check the `main.css` in `src/assets/css`

### Metas
The menu is using metas that you can use in any resource to process information you may need
1. You can disable any menu input by giving the local player follwing meta
```
MenuFramework::State::PreventInput
```
2. While the player is hovering over an input item, it will get focused and the game controls disabled. Also it will set following meta to true
```
MenuFramework::Action::IsTypingText
```

### Functions
To get the most recent used Menu use `MenuFramework.Menu.current`

Menu functions:
```js
addItem(item)
removeItem(item)
addSubmenu(subMenu,item)
removeSubmenu(item)
clear()
open()
close()
```
Menu variables you can set:
```js
visible: bool
title: string
currentIndex: int
```

To manipulate menu items after creation check the attributes from the constructors above. Any attribute can be changed during runtime and will be applied to the item

## License
This project is written by **[Kaniggel](https://github.com/MyHwu9508)** and published under **MIT License**

## Screenshot
The screenshots have been taken from the example resource

![Example1](https://i.imgur.com/xk8py4A.png)
![Example2](https://i.imgur.com/1uKXtLS.png)


## Help
In case you have any questions or concerns regarding this, feel free to contact me on Discord.
### Kaniggel#7263
Alternatively you can join my Discord and create a ticket: https://corrosive.eu/discord
