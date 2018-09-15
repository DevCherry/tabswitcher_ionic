import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { Testpage1Page } from '../testpage1/testpage1';
import { Testpage2Page } from '../testpage2/testpage2';

import { TabswitcherProvider } from '../../providers/tabswitcher/tabswitcher';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = Testpage1Page;
  tab6Root = Testpage2Page;

  //Init default shown and hidden tabs
  tab1 = true;
  tab2 = true;
  tab3 = true;

  tab4 = false;
  tab6 = false;

  constructor(private tabswitcherProvider: TabswitcherProvider) {
  }
}
