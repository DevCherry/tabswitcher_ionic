import { Injectable } from '@angular/core';



@Injectable()
export class TabswitcherProvider {

//Set the Tab-ICON
  tab1icon = "home";
  tab2icon = "information-circle";
  tab3icon = "contacts";
  tab4icon = "analytics";
  tab6icon = "alarm";

//Set the Tab-TEXT
  tab1text = "Home";
  tab2text = "Tabswitch";
  tab3text = "Contact";
  tab4text = "TestPage1";
  tab6text = "TestPage2";

  //Init default shown and hidden tabs
  tab1 = true;
  tab2 = true;
  tab3 = true;

  tab4 = false;
  tab6 = false;

  constructor() {
  }

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

}
