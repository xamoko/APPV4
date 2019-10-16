import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, AlertController, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* importados */
import { SqliteProvider } from './services/sqlite/sqlite';
import { ProveedorusersProvider } from './services/proveedorusers/proveedorusers';
import { Proveedor1Provider } from './services/proveedor1/proveedor1';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
/* importados */

import { HttpModule, Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Camera } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DescripcionTareaPage } from './pages/descripcion-tarea/descripcion-tarea.page';
import { DescripcionTareaPageModule } from './pages/descripcion-tarea/descripcion-tarea.module';
import { ModalPage } from './pages/modal/modal.page';
import { ModalPageModule } from './pages/modal/modal.module';
import { FormsModule } from '@angular/forms';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection  } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from './environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';


library.add(fas, far, fab);

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
    DescripcionTareaPage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FontAwesomeModule,
    HttpModule,
    HttpClientModule ,
    DescripcionTareaPageModule,
    NgbModule.forRoot(),
    FormsModule,
    ModalPageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireStorageModule,
		AngularFireDatabaseModule,
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    SqliteProvider,
    Proveedor1Provider,
    ProveedorusersProvider,
    AlertController,
    Camera,
    Geolocation,
    AngularFirestore,
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
