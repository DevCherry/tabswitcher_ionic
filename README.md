# Simple Tabswitcher for Ionic

To test this out clone the repository and do `npm install` and `ionic serve`.


## How it works and what I did to achieve it:

Start by creating a default application **tabs**.
Then create a provider `ionic generate yourProviderName provider` in my case **tabswitcher**. 

*Why is the provider needed ?* We want to acces the **Tabbar** from **any Page** we can do that with a Provider.


## Todo in your Provider:

**Remove**
```
import { HttpClient } from '@angular/common/http';
public http: HttpClient
```

**Add**

*Import your Pages wich you want to acces in my case:*
```
import { AboutPage } from '../../pages/about/about';
import { ContactPage } from '../../pages/contact/contact';
import { HomePage } from '../../pages/home/home';
import { Testpage1Page } from '../../pages/testpage1/testpage1';
import { Testpage2Page } from '../../pages/testpage2/testpage2';
```

*In your export class*
```
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = Testpage1Page;
  tab5Root = AboutPage;
  tab6Root = Testpage2Page;

  tab1icon = "home";
  tab2icon = "information-circle";
  tab3icon = "contacts";
  tab4icon = "analytics";
  tab5icon = "information-circle";
  tab6icon = "alarm";

  tab1text = "Home";
  tab2text = "Tabswitch";
  tab3text = "Contact";
  tab4text = "TestPage1";
  tab5text = "Tabswitch";
  tab6text = "TestPage2";
```
**Explanation for tabicon and tabtext:**
*I like to initialize the Names and Icons in the Typescript file, you can also hardcode them into the **HTML** if you prefer that!*

*Create the methods*
```
  switchTabs() {
    document.getElementById('tabswitcherProvider.switchedTabs').style.display = 'none';
    document.getElementById('tabswitcherProvider.switchedTabsDefault').style.display = 'flex';
  }

  switchTabsDefault() {
    document.getElementById('tabswitcherProvider.switchedTabsDefault').style.display = 'none';
    document.getElementById('tabswitcherProvider.switchedTabs').style.display = 'flex';
  }
```


## Todo in Tabs:

*Import your Pages wich you want to acces in my case:*
```
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Testpage1Page } from '../testpage1/testpage1';
import { Testpage2Page } from '../testpage2/testpage2';
```

***Import your Provider!***
```
import { TabswitcherProvider } from '../../providers/tabswitcher/tabswitcher';
```

**Remove everything except**
```
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
```

**Add your new Pages wich you want to acces aswell**
```
  tab4Root = Testpage1Page;
  tab5Root = AboutPage;
  tab6Root = Testpage2Page;
```

**Add the Provider into your constructor**
```
constructor(private tabswitcherProvider: TabswitcherProvider)
```

**Tabs HTML**
*Note: Like I said above you can code your **tabTitle** and **tabIcon** in your HTML, I just prefer it in Typescript file atm.*

*What I did here:*
I added an **id** and **style** so we can toggle the tabbar we want. I created 2 Tabbars for this example the first one is visible the other one is hidden.

```
<ion-tabs id="tabswitcherProvider.switchedTabsDefault" style="display:flex">
  <ion-tab [root]="tabswitcherProvider.tab1Root" tabTitle="{{tabswitcherProvider.tab1text}}" tabIcon="{{tabswitcherProvider.tab1icon}}"></ion-tab>
  <ion-tab [root]="tabswitcherProvider.tab2Root" tabTitle="{{tabswitcherProvider.tab2text}}" tabIcon="{{tabswitcherProvider.tab2icon}}"></ion-tab>
  <ion-tab [root]="tabswitcherProvider.tab3Root" tabTitle="{{tabswitcherProvider.tab3text}}" tabIcon="{{tabswitcherProvider.tab3icon}}"></ion-tab>
</ion-tabs>

<ion-tabs id="tabswitcherProvider.switchedTabs" style="display:none">
  <ion-tab [root]="tabswitcherProvider.tab4Root" tabTitle="{{tabswitcherProvider.tab4text}}" tabIcon="{{tabswitcherProvider.tab4icon}}"></ion-tab>
  <ion-tab [root]="tabswitcherProvider.tab5Root" tabTitle="{{tabswitcherProvider.tab5text}}" tabIcon="{{tabswitcherProvider.tab5icon}}"></ion-tab>
  <ion-tab [root]="tabswitcherProvider.tab6Root" tabTitle="{{tabswitcherProvider.tab6text}}" tabIcon="{{tabswitcherProvider.tab6icon}}"></ion-tab>
</ion-tabs>
```
*Why am I using* ***tabswitcherProvider.*** *infront of the values ?* This is how you can acces the Provider in HTML!


## Todo where you want to switch the Tabs (in my case "AboutPage"):

Import your Provider and add it to your constructor also.
```
import { TabswitcherProvider } from '../../providers/tabswitcher/tabswitcher';
constructor(private tabswitcherProvider: TabswitcherProvider)
```

Create the methods to acces the methods in your Provider.
```
  switchTabsABOUT() {
    this.tabswitcherProvider.switchTabs();
  }
  switchTabsDefaultABOUT() {
    this.tabswitcherProvider.switchTabsDefault();
  }
```
*Note: **this.tabswitcherProvider.** is present again! Here we are accesing the method from the Provider we've created before.*

**AboutPage HTML**

Create your Buttons to acces the methods.
```
  <button ion-button (click)="switchTabsABOUT()">SwitchTabs</button>
  <button ion-button (click)="switchTabsDefaultABOUT()">SwitchTabsDefault</button>
```

# Thats it!

## So what are we even doing here ?

Simple. When you press as example: **SwitchTabs** button you are accesing the method **switchTabsAbout()** this method is coded to acces the Providers method and will execute **switchTabs()**. 
*What* **switchTabs()** *is doing is very basic:*
It toggles the first tabbar to *none* and the second tabbar to *flex* results in removing the first tabview and displaying the second one.

## Very Important!

If you **only** want to change the **text** or **icon** of a certain button you don't have to create a "second" tabbar in HTML!

*Just create a method in your Provider as example:*

```
onlySwitchIconText(){
  this.tab1icon = "alarm";
  this.tab1text = "New Home";
}
```

***You might ask yourself now why didn't I do that with tabRoot ?***

The problem here is, it does work with a little workout yes! But there is an issue. The First tabPage won't unload so you have to press the new Tabbutton twice. ***(If someone has a solution for this id love to hear it!)***

What you have todo to achieve this example: 

**Change in your Provider**
```
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;
  tab5Root: any;
  tab6Root: any;
 ```
Initialize the tabs.
```
  constructor() {
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = Testpage1Page;
  tab5Root = AboutPage;
  tab6Root = Testpage2Page;
  }
```

Create a method
```
switchTabsVar(){
  this.tab1Root = Testpage1Page;
}
```


**Feel free to use and modify this code to your desire!**
