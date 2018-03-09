import { Injectable } from '@angular/core';
import { AboutPage } from '../../pages/about/about';
import { ContactPage } from '../../pages/contact/contact';
import { HomePage } from '../../pages/home/home';
import { Testpage1Page } from '../../pages/testpage1/testpage1';
import { Testpage2Page } from '../../pages/testpage2/testpage2';
import { TabsPage } from '../../pages/tabs/tabs';

/*
  Generated class for the TabswitcherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class TabswitcherProvider {

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

  constructor() {
  }

  switchTabs() {
    document.getElementById('tabswitcherProvider.switchedTabs').style.display = 'none';
    document.getElementById('tabswitcherProvider.switchedTabsDefault').style.display = 'flex';
  }

  switchTabsDefault() {
    document.getElementById('tabswitcherProvider.switchedTabsDefault').style.display = 'none';
    document.getElementById('tabswitcherProvider.switchedTabs').style.display = 'flex';
  }

}
