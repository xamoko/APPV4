import { Component, OnInit } from '@angular/core';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-first-with-tabs',
  templateUrl: './first-with-tabs.page.html',
  styleUrls: ['./first-with-tabs.page.scss'],
})
export class FirstWithTabsPage implements OnInit {

  faCoffee = faCoffee;

  constructor() { }

  ngOnInit() {
  }

}
