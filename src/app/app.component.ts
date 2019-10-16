import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';

declare const VERSION: string;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  /* styleUrls: ['app.component.scss'] */
})
export class AppComponent {

  faCoffee = faCoffee;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
