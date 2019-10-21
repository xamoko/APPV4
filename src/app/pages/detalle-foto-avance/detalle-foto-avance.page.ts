import { Component, OnInit } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SqliteProvider } from '../../services/sqlite/sqlite';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection  } from 'angularfire2/firestore';
import { NavController } from '@ionic/angular';
import {Location} from '@angular/common';
import { DomSanitizer, SafeUrl, SafeResourceUrl, SafeValue, SafeHtml, SafeScript } from '@angular/platform-browser';

@Component({
  selector: 'app-detalle-foto-avance',
  templateUrl: './detalle-foto-avance.page.html',
  styleUrls: ['./detalle-foto-avance.page.scss'],
})
export class DetalleFotoAvancePage implements OnInit {

  registros: SafeResourceUrl;
  registro: any;
  item
  items=[];
  link;
  img;
  latitud;
  longitud;

  constructor(public http: Http, private route: ActivatedRoute, private router: Router, public sqliteService: SqliteProvider, private firestore: AngularFirestore, public navCtrl: NavController, private _location: Location, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.registro = this.route.snapshot.paramMap.get("registro");
    this.item = this.route.snapshot.paramMap.get("item");
    this.latitud = this.route.snapshot.paramMap.get("lat");
    this.longitud = this.route.snapshot.paramMap.get("lon");

    var img = this.registro;

    this.registros = this.sanitizer.bypassSecurityTrustUrl(img.substring(1));

    console.log("registro",this.registro);
    console.log("items",this.item);
    console.log("latitud: ", this.latitud);
    console.log("longitud: ",this.longitud);


    this.firestore.collection("ServiceNetwork").snapshotChanges().subscribe(data =>{
			this.items=[];
			console.log("data"+data);
			data.forEach(element => {
				let item:any = element.payload.doc.data();
				item.id = element.payload.doc.id;
				this.items.push(item);
				console.log("item.id: "+item.id);
			})
    });
    
   

  }

  getImgContent(): SafeUrl {
    return this.registros;
    
}

  BotonRegresar(){
    this._location.back();
    console.log("regresar");
    }

  vistaPanoramica(item){
		this.firestore.doc(`ServiceNetwork/${item.id}`).delete();
		this.firestore.collection('ServiceNetwork').add({url:this.registro});
	}

}
