import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { CreateJokePage } from '../joke/create-joke/create-joke';
import {ListJokePage} from "../joke/list-joke/list-joke";
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CreateJokePage;
  tab3Root = ListJokePage;
  tab4Root = AboutPage;

  constructor() {

  }
}
