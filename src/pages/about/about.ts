import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabswitcherProvider } from '../../providers/tabswitcher/tabswitcher';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private tabswitcherProvider: TabswitcherProvider) {

  }
  switchTabsABOUT() {
    this.tabswitcherProvider.switchTabs();
  }
  switchTabsDefaultABOUT() {
    this.tabswitcherProvider.switchTabsDefault();
  }
}
