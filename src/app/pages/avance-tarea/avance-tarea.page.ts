import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Http, Headers } from '@angular/http';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection  } from 'angularfire2/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Products } from '../../models/products';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SqliteProvider } from '../../services/sqlite/sqlite';
import { NavController } from '@ionic/angular';
import {Location} from '@angular/common';

@Component({
  selector: 'app-avance-tarea',
  templateUrl: './avance-tarea.page.html',
  styleUrls: ['./avance-tarea.page.scss'],
})
export class AvanceTareaPage implements OnInit {

  item;
	evidencia;
	registros: any[];
	ip;
	token;
	ip2 = "http://198.50.116.250/service_network_API/public/index.php/api";
	task_id;
	AvaEvi: string;
	Image = [];
	base64Image = [];
	FBcode;
	datas;
	public Project;
	collection: AngularFirestoreCollection<Products>;
	todo: Observable<Products[]>;
	latitud;
  longitud;
  items;


  constructor(private camera: Camera, public http: Http, private route: ActivatedRoute, private router: Router, public sqliteService: SqliteProvider, private firestore: AngularFirestore, public navCtrl: NavController, private geolocation: Geolocation, private storage: AngularFireStorage, private _location: Location) { }

  ngOnInit() {

    this.items = this.route.snapshot.params;
    /* this.item = this.items.data.item;
		this.evidencia = this.items.data.evidencia;
    this.FBcode = this.items.data.item; */
    
    let taskId = this.sqliteService.GetTareaId();
		this.collection = this.firestore.collection(`fotosAvance/${taskId}/fotos`);
		this.todo = this.collection.valueChanges();
  }

  LoadDatas() {
		this.ip = this.sqliteService.ip;
		this.token = this.sqliteService.token;
		//let url = "";

		//if (typeof this.evidencia !== "undefined")  {
		//url = this.ip + `/evidence_photo`;
		//url = this.ip + `/evidenceTask`;
		let url = "http://198.50.116.250/service_network_API/public/index.php/api/getPhotosByPojectId";
		let headers2 = new Headers();

		headers2.append('Content-Type', 'application/json');
		headers2.append('Access-Control-Allow-Origin', '*');
		headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
		headers2.append('Content-Type', 'application/x-www-form-urlencoded');
		headers2.append('Authorization', 'Bearer ' + this.token);

		// let data = {
		//   idEvidence: this.evidencia.evidence_id,
		//   idTask: this.item.id
		// };

		let ProjectId = this.sqliteService.GerProjectId();
		let tipoFoto = this.sqliteService.GerTipoFoto();

		let data = {
			project_id: ProjectId,
			task_id: this.items.tareaId,
			photo_type_id: tipoFoto
		};
		console.log("data: " + JSON.stringify(data));
		this.http.post(url, JSON.stringify(data), { headers: headers2 }).subscribe(data => {
			this.registros = data.json();
			console.log("Registros_1: " + JSON.stringify(this.registros));
			//this.registros = Array.of(this.registros);
			//console.log("Registros_2: " + JSON.stringify(this.registros));
			/* var registross = data.json(); */
			//this.registros = Array.of(this.registross);
			/* resultado.foreach(element =>{
			   this.registros = element.url;
			   this.registros = element.creation_date;
			   console.log("url: "+element.url);
			   console.log("creation_date: "+element.creation_date);
			}); */
			/* this.registros = Object.keys(registross).map(function(key) {
			  return [registross[key]];
			});
			console.log("Registros: "+this.registros);
		  }); */
			/*  } 
			 else{
			   console.log("Entra a Avance");
		 
			   //url = this.ip2 + `/foto/${this.item.tareaId}`;
			   url = this.ip2 + `/getPhotosByPojectId`;
		 
			   let headers2 = new Headers();
		 
			   let ProjectId = this.sqliteService.GerProjectId();
			   let tipoFoto = this.sqliteService.GerTipoFoto();
		 
			   let data = {
				 project_id: ProjectId,
				 task_id: this.item.tareaId,
				 photo_type_id: tipoFoto
			   };
		 
		 
			   headers2.append('Accept','application/json');
			   headers2.append('content-type','application/json');
			   headers2.append('Authorization','Bearer '+this.token);
			   this.http.post(url, JSON.stringify(data), {headers: headers2}).subscribe(data => {
				 this.registros = data.json();
			   });*/
		});

		// console.log(this.item);
		// console.log(data.json());
	}

	async takePicturesCamera(){
		const options: CameraOptions = {
		  quality: 100,
		  destinationType: this.camera.DestinationType.DATA_URL,
		  /* sourceType: this.camera.PictureSourceType.PHOTOLIBRARY, */
		  encodingType: this.camera.EncodingType.JPEG,
		  mediaType: this.camera.MediaType.PICTURE,
		  targetWidth: 1024,
		  targetHeight: 768,
		  saveToPhotoAlbum: true,
		   correctOrientation: true,
		   allowEdit: true,
		}
	  
		this.geolocation.getCurrentPosition().then((resp) => {
		  console.log("Coordenadas 1: "+resp.coords.latitude, resp.coords.longitude);
		  this.longitud = resp.coords.longitude;
		  this.latitud = resp.coords.latitude;
		 }).catch((error) => {
		   console.log('Error getting location', error);
		 });
		 
	  
		const result = await this.camera.getPicture(options); 
		  const image = `data:image/jpeg;base64,${result}`;
		  const a = Date();
		  
	  
		  let tareaid = this.sqliteService.GetTareaId();
		  const idd = Math.random().toString(36).substring(2);
		  /* const file = this.Image[0].image; */
		  const file = `data:image/jpeg;base64,${result}`;
		  const filePath = `fotosAvance/${tareaid}/${idd}`;
			  /* const ref = this.storage.ref(filePath);
		  const task = this.storage.upload(filePath, file); */
		  const pictures = this.storage.ref(filePath);
		  var task = pictures.putString(image, 'data_url');
		  pictures.getDownloadURL().subscribe(ur =>{
			console.log("nueva funcion: "+ur);
		  } );
		  
		  console.log("a punto de entrar");
		  var tar = parseFloat(tareaid);
		  task.snapshotChanges().pipe( finalize(() => pictures.getDownloadURL().subscribe(
				  url =>{
					  this.datas = {
						  key: idd,
						  nombre: "Foto de avance de la tarea: "+this.item.nombreTarea+". Foto desde la cámara" ,
						  url: url,
						  idTarea: tar,
						  usuario: this.sqliteService.GerUserId(),
						  latitud: this.latitud,
						  longitud: this.longitud
					  } 
					  console.log(JSON.stringify(this.datas));
					  this.firestore.collection('fotosAvance').doc(`${tar}`).collection('fotos').add(this.datas);
				  }
			  ))).subscribe();
	  
		}


		async takePicturesGallery(){
			const options: CameraOptions = {
				quality: 100,
				destinationType: this.camera.DestinationType.DATA_URL,
				sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
				encodingType: this.camera.EncodingType.JPEG,
				mediaType: this.camera.MediaType.PICTURE,
				targetWidth: 1024,
				targetHeight: 768,
				saveToPhotoAlbum: true,
				 correctOrientation: true,
				 allowEdit: true,
			  }
			
			  this.geolocation.getCurrentPosition().then((resp) => {
				console.log("Coordenadas 1: "+resp.coords.latitude, resp.coords.longitude);
				this.latitud = resp.coords.latitude,
				this.longitud = resp.coords.longitude
			   }).catch((error) => {
				 console.log('Error getting location', error);
			   });
			   
			
			  const result = await this.camera.getPicture(options); 
				const image = `data:image/jpeg;base64,${result}`;
				const a = Date();
				
			
				let tareaid = this.sqliteService.GetTareaId();
				const idd = Math.random().toString(36).substring(2);
				/* const file = this.Image[0].image; */
				const file = `data:image/jpeg;base64,${result}`;
				const filePath = `fotosAvance/${tareaid}/${idd}`;
					/* const ref = this.storage.ref(filePath);
				const task = this.storage.upload(filePath, file); */
				const pictures = this.storage.ref(filePath);
				var task = pictures.putString(image, 'data_url');
				pictures.getDownloadURL().subscribe(ur =>{
				  console.log("nueva funcion: "+ur);
				} );
				
				console.log("a punto de entrar");
				var tar = parseFloat(tareaid);
				task.snapshotChanges().pipe( finalize(() => pictures.getDownloadURL().subscribe(
						url =>{
							this.datas = {
								key: idd,
								nombre:"Foto de avance de la tarea: "+this.item.nombreTarea+". Foto desde la galería",
								url: url,
								idTarea: tar,
								latitud: this.latitud,
								longitud: this.longitud
							} 
							console.log(JSON.stringify(this.datas));
							this.firestore.collection('fotosAvance').doc(`${tar}`).collection('fotos').add(this.datas);
						}
					))).subscribe();
			
		  }

		  BotonRegresar(){
			this._location.back();
			console.log("regresar");
			}


	Open(page: string, registro: string) {
		let item = this.items;
		

		switch (page) {
			case "photo": {
				/* this.navCtrl.push(NuevoregistroPage, { item: item }); */
				break;
			}
			case "photoGallery": {
				/* this.navCtrl.push(Nuevoregistro2Page, { item: item }); */
				break;
			}
			case "D": {
				this.navCtrl.navigateForward(['/menu/first/detalle-foto-avance', registro, item ]);
				//this.router.navigate(['/menu/first/detalle-foto-avance' ,registro]);
				break;
			}
		}
	}

}
