import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detalle-fotos-evidencia-tarea',
  templateUrl: './detalle-fotos-evidencia-tarea.page.html',
  styleUrls: ['./detalle-fotos-evidencia-tarea.page.scss'],
})
export class DetalleFotosEvidenciaTareaPage implements OnInit {

  constructor(public navCtrl: NavController, private storage: AngularFireStorage, private firestore: AngularFirestore,  private route: ActivatedRoute, private _location: Location) { }

  registro;
  items=[];
  url;

  ngOnInit() {
    console.log('urls ',this.route.snapshot.paramMap.get('item'));
    this.registro = this.route.snapshot.paramMap.getAll('registro');
    console.log("registro", this.registro);
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

  vistaPanoramica(item){
		this.firestore.doc(`ServiceNetwork/${item.id}`).delete();
		this.firestore.collection('ServiceNetwork').add({url:this.registro});
  }
  
  BotonRegresar(){
    this._location.back();
    console.log("regresar");
  }



}
