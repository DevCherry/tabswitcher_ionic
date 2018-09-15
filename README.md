# Simple Tabswitcher for Ionic

If you want to try it out, you can download it and do a regular `ionic serve`.


## How it works and what you have todo to achieve it:

Start by creating a default application **tabs**.
Then create a provider `ionic generate provider yourProviderName` in my case **tabswitcher**. 

*Why is the provider needed ?* We want to acces the **Tabbar** from **any Page** we can do that with a Provider.


## Todo in your Provider:

**Remove**
```
import { HttpClient } from '@angular/common/http';
public http: HttpClient
```

**Add**

*In your export class*
```
  tab1icon = "home";
  tab2icon = "information-circle";
  tab3icon = "contacts";
  tab4icon = "analytics";
  tab6icon = "alarm";

  tab1text = "Home";
  tab2text = "Tabswitch";
  tab3text = "Contact";
  tab4text = "TestPage1";
  tab6text = "TestPage2";
  
  tab1 = true;
  tab2 = true;
  tab3 = true;

  tab4 = false;
  tab6 = false;
```

*Create the methods*
```
  switchTabs() {
	this.tab1 = false;
	this.tab3 = false;
	this.tab4 = true;
	this.tab6 = true;
  }

  switchTabsDefault() {
	  this.tab1 = true;
	  this.tab3 = true;
	  this.tab4 = false;
	  this.tab6 = false;
  }
```

**Explanation for tabicon and tabtext:**
*I like to initialize the Names and Icons in the Typescript file, you can also hardcode them into the **HTML** if you prefer that!*


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
  tab6Root = Testpage2Page;
```

**Add the hidden and shown values**
```
  tab1 = true;
  tab2 = true;
  tab3 = true;

  tab4 = false;
  tab6 = false;
```

**Add the Provider into your constructor**
```
constructor(private tabswitcherProvider: TabswitcherProvider)
```

**Tabs HTML**
*Note: Like I said above you can code your **tabTitle** and **tabIcon** in your HTML, I just prefer it in the Typescript file.*

*What I did here:*

```
<ion-tabs>
	<ion-tab [show]="tabswitcherProvider.tab1" [root]="tab1Root" tabTitle="{{tabswitcherProvider.tab1text}}" tabIcon="{{tabswitcherProvider.tab1icon}}"></ion-tab>
	<ion-tab [show]="tabswitcherProvider.tab2" [root]="tab2Root" tabTitle="{{tabswitcherProvider.tab2text}}" tabIcon="{{tabswitcherProvider.tab2icon}}"></ion-tab>
	<ion-tab [show]="tabswitcherProvider.tab3" [root]="tab3Root" tabTitle="{{tabswitcherProvider.tab3text}}" tabIcon="{{tabswitcherProvider.tab3icon}}"></ion-tab>
	<ion-tab [show]="tabswitcherProvider.tab4" [root]="tab4Root" tabTitle="{{tabswitcherProvider.tab4text}}" tabIcon="{{tabswitcherProvider.tab4icon}}"></ion-tab>
	<ion-tab [show]="tabswitcherProvider.tab6" [root]="tab6Root" tabTitle="{{tabswitcherProvider.tab6text}}" tabIcon="{{tabswitcherProvider.tab6icon}}"></ion-tab>
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

Simple. When you press as example: **SwitchTabs** button you are accesing the method **switchTabsABOUT()** this method is coded to acces the Providers method and will execute **switchTabs()**. 
*What* **switchTabs()** does is very basic:*
It will change the value as example from **tab1** + **tab3** to **false** while it changes the value from **tab4** + **tab6** to **true**.

## Very Important!

If you **only** want to change the **text** or **icon** of a certain button you can do it like this:

*Create a method in your Provider as example:*

```
onlySwitchIconText(){
  this.tab1icon = "alarm";
  this.tab1text = "New Home";
}
```


**Feel free to use and modify this code to your desire!**
