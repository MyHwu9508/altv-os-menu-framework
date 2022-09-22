import * as alt from 'alt';
import * as MenuFramework from './src/menu';

alt.on('connectionComplete', () => {
    BuildMenu();
});

function BuildMenu(){
    const menu = new MenuFramework.Menu('alt:V Menu Framework');
    MenuFramework.Menu.current = menu; // We set this as entry menu when script is loaded to ensure when Pressing the toggle key it opens this or the last seen menu

    menu.addItem(new MenuFramework.MenuItem('Just a MenuItem'));
    menu.addItem(new MenuFramework.MenuItem('MenuItem with some extras','We have a description box! :)','🤩',undefined,'You can set any data you want','OK!'));
    menu.addItem(new MenuFramework.MenuItem('Disabled',"Leon help me! Someone turned me gray!",'😦',true));
    menu.addItem(new MenuFramework.MenuItem('We have COLORS!',"You can put any HTML in here :D <hr><br><img src='https://static.dw.com/image/15859997_401.jpg'>",'😦',false,undefined,"<font color='#31B6FE'>YEA!</font>"));


    const iSubmenuConfigurator = new MenuFramework.MenuItem('Menu Framework Configurator','Submenu to change to demonstrate what you can adjust during runtime','',false,undefined,'➔');
    menu.addSubmenu(subMenuConfiguration(),iSubmenuConfigurator); // Add a submenu by creating an item & menu.

    const iSubmenuBenchmark = new MenuFramework.MenuItem('Menu Framework Benchmark','','',false,undefined,'➔');
    menu.addSubmenu(subMenuBenchmark(),iSubmenuBenchmark);

    menu.addItem(new MenuFramework.ConfirmItem('Do you like noodles?'));
    menu.addItem(new MenuFramework.ConfirmItem('How you feel today?','Bad','Good',true,'You can change the confirm button texts to set your language, or to do some fancy stuff'));

    menu.addItem(new MenuFramework.RangeSliderItem('Range Slider needed?',0,10,2,'No problem. You can create as many as you want :)'));

    menu.addItem(new MenuFramework.CheckboxItem('Toggle Admin Status',false));
    menu.addItem(new MenuFramework.CheckboxItem('ESP',false,'Not today!',undefined,true));

    menu.addItem(new MenuFramework.AutoListItem('Automatic list',10,100,10,'This items creates automatically an ListItem, but you wont have to care about the list itself, as it is based on numbers'));

    menu.addItem(new MenuFramework.ListItem('Weather',weatherTypes,0,'Use any list you want'));
    menu.addItem(new MenuFramework.ListItem('List2',['Entry1','Entry2','And more entries'],0,'You dont even need to declare a seperate array.'));
    menu.addItem(new MenuFramework.ListItem('Disabled List',['Invisible hehe','Visible'],1,'','',true));

    menu.addItem(new MenuFramework.InputItem('Username',7,'','','We also have input items with listeners for any input change, or submit'));
    menu.addItem(new MenuFramework.InputItem('Username',7,'','test','We also have input items with listeners for any input change, or submit'));

}

function subMenuConfiguration(){
    const menu = new MenuFramework.Menu('Menu Framework Configs');

    const iFontSize = new MenuFramework.AutoListItem('Font Size',10,30);
    iFontSize.currentValue = MenuFramework.menuConfiguration.fontSize; // You can manipulate the current showing item in a list by setting the index, or a value that it contains
    menu.addItem(iFontSize);
    const iFontType = new MenuFramework.ListItem('Font Type',fonts,fonts.indexOf(MenuFramework.menuConfiguration.fontType));
    menu.addItem(iFontType);
    menu.addItem(new MenuFramework.RangeSliderItem('Font Weight',1,9,(MenuFramework.menuConfiguration.fontWeight/100),'','',false,'fontWeight'));

    menu.addItem(new MenuFramework.InputItem('Font Color',7,'',MenuFramework.menuConfiguration.fontColor,'','',false,'fontColor'));
    menu.addItem(new MenuFramework.InputItem('Highlight Color',9,'',MenuFramework.menuConfiguration.highlightColor,'','',false,'highlightColor'));
    menu.addItem(new MenuFramework.InputItem('Background Color',9,'',MenuFramework.menuConfiguration.backgroundColor,'','',false,'backgroundColor'));

    menu.addItem(new MenuFramework.CheckboxItem('Sound',MenuFramework.menuConfiguration.sound,'Toggle the menu sounds that comes up, when pressing something.'));

    menu.addItem(new MenuFramework.RangeSliderItem('Left',0,120,MenuFramework.menuConfiguration.left,'','',false,'left'));
    menu.addItem(new MenuFramework.RangeSliderItem('Top',0,120,MenuFramework.menuConfiguration.top,'','',false,'top'));
    menu.addItem(new MenuFramework.RangeSliderItem('Height',5,120,MenuFramework.menuConfiguration.height,'This loweres the height of the container containing all menu items. Try lowering this value.','',false,'height'));
    menu.addItem(new MenuFramework.RangeSliderItem('Width',10,120,MenuFramework.menuConfiguration.width,'','',false,'width'));


    menu.checkboxChange.on((item, state) => {
        // You can use multiple approaches to detect the item that has changed. You can check for the text (My suggestion)
        switch (item.text) {
            case 'Sound':
                MenuFramework.menuConfiguration.sound = state;
                break;
        }
    });

    menu.autoListChange.on((item,newIndex,newValue) => {
        if(item === iFontSize){ // Or you could define the item in your code and check for the items as object
            MenuFramework.menuConfiguration.fontSize = newValue;
        }
    });

    menu.rangeSliderChange.on((item, newValue) => {
        //We could here also use switch/case and check for the item names. Or we save 20 lines of code and use the data property of the menu items
        if(item.text == 'Font Weight'){
            MenuFramework.menuConfiguration[item.data] = newValue*100;
        }else MenuFramework.menuConfiguration[item.data] = newValue;
    });

    menu.inputChange.on((item, newValue) => {
        if(!hexReg.test(newValue))return; // we check for a valid hex value and if it is present the menu colors will be changed.
        MenuFramework.menuConfiguration[item.data] = newValue;
    });

    menu.inputSubmit.on((item, newValue) => {
        alt.log('Input submitted: ', item.text, newValue);
    });

    menu.listChange.on((item,newIndex,oldIndex,newValue) => {
        MenuFramework.menuConfiguration.fontType = newValue;
    });

    return menu;
}

function subMenuBenchmark(){
    const menu = new MenuFramework.Menu('Menu Framework Benchmark');

    menu.addItem(new MenuFramework.MenuItem('Add 500 elements with submenus'));

    menu.itemSelect.on((item, itemIndex) => {
        switch (item.text) {
            case 'Add 500 elements with submenus':
                for (let i = 0; i < 500; i++) {
                    const subMenu = new MenuFramework.Menu('Submenu ' + i);
                    const iSubMenu = new MenuFramework.MenuItem('Submenu ' + i);
                    menu.addSubmenu(subMenu, iSubMenu);
                }
                break;
        }
    });
    return menu;
}


alt.on('keydown', (key) => {
    switch (key) {
        //M
        case 0x4D:
            MenuFramework.Menu.current.visible = !MenuFramework.Menu.current.visible;
            if (MenuFramework.Menu.current.visible) MenuFramework.playSound('SELECT');
            else MenuFramework.playSound('Back');
            break;
    }
});


//stuff
const fonts = ['Roboto','RobotoMono','Epilogue','Comic Sans MS','Quicksand','Rubik'];
const hexReg=/^#([0-9a-f]{3,4}){1,2}$/i;
const weatherTypes = [
    'CLEAR',
    'EXTRASUNNY',
    'CLOUDS',
    'OVERCAST',
    'RAIN',
    'CLEARING',
    'THUNDER',
    'SMOG',
    'FOGGY',
    'XMAS',
    'SNOWLIGHT',
    'BLIZZARD',
    'SNOW',
    'HALLOWEEN'
];