import { Component, OnInit } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SqliteProvider } from '../../services/sqlite/sqlite';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection  } from 'angularfire2/firestore';
import { NavController } from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detalle-foto-avance',
  templateUrl: './detalle-foto-avance.page.html',
  styleUrls: ['./detalle-foto-avance.page.scss'],
})
export class DetalleFotoAvancePage implements OnInit {

  registro;
  items=[];
  link;

  constructor(public http: Http, private route: ActivatedRoute, private router: Router, public sqliteService: SqliteProvider, private firestore: AngularFirestore, public navCtrl: NavController, private _location: Location) { }

  ngOnInit() {
    this.registro = this.route.snapshot.params;

    console.log(JSON.stringify(this.registro));

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

  BotonRegresar(){
    this._location.back();
    console.log("regresar");
    }

  vistaPanoramica(item){
		this.firestore.doc(`ServiceNetwork/${item.id}`).delete();
		this.firestore.collection('ServiceNetwork').add({url:this.registro.url});
	}

}
