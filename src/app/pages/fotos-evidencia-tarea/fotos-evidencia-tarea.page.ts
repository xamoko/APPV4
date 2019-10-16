import { Component, OnInit } from '@angular/core';
import { SqliteProvider } from '../../services/sqlite/sqlite';
import { Products } from '../../models/products';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection  } from 'angularfire2/firestore';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PopoverComponent } from '../../components/popover/popover.component';
import { finalize } from 'rxjs/operators';
import {Location} from '@angular/common';


@Component({
  selector: 'app-fotos-evidencia-tarea',
  templateUrl: './fotos-evidencia-tarea.page.html',
  styleUrls: ['./fotos-evidencia-tarea.page.scss'],
})
export class FotosEvidenciaTareaPage implements OnInit {

  base64Image = [];
  Image = [];

  item;
	evidencia;
	registros: any[];
	ip2;
	token;
	//ip2 = "http://198.50.116.250/service_network_API/public/index.php/api";
  task_id;
  norma;
  FBcode;
  AvaEvi: string;
  public Project;
  datas: Products;
  latitud;
  longitud;
  collection: AngularFirestoreCollection<Products>;
  todo: Observable<Products[]>;
  tareas;
  url;


  constructor(private camera: Camera, public http: Http, private route: ActivatedRoute, private router: Router, public sqliteService: SqliteProvider, private firestore: AngularFirestore, public navCtrl: NavController, private geolocation: Geolocation, private storage: AngularFireStorage, public popoverController: PopoverController, private _location: Location) { 

   /*  this.item = this.route.queryParams.subscribe(params =>{
      console.log("params",params);
    }); */

  }

  ngOnInit() {

     this.item = this.route.snapshot.paramMap.getAll('task');
     this.norma = this.route.snapshot.paramMap.get('norma');
     this.FBcode = this.route.snapshot.paramMap.get('item');
     this.tareas = this.route.snapshot.paramMap.get('items');
     this.evidencia = this.route.snapshot.paramMap.get('evidencia');
     var policy_type_id = this.route.snapshot.paramMap.get('policy_type_id');
     var policy_id = this.route.snapshot.paramMap.get('policy_id');
     this. url = this.route.snapshot.paramMap.get('url');
     var policy_specification_id = this.route.snapshot.paramMap.get('policy_specification_id');
     this.sqliteService.idTipoNorma = this.item.policy_type_id
     this.sqliteService.idNorma = this.item.policy_id;
     this.sqliteService.specificacionNorma = this.item.policy_specification_id;
 
     console.log("id tipo de norma "+policy_type_id);
       console.log("id norma "+policy_id);
       console.log("id de especificacion de norma "+policy_specification_id);
       console.log("id de especificacion de norma "+this.item);
       console.log("desconocido "+this.FBcode);
       console.log("desconocido "+this.tareas);

       this.LoadData();
       
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  LoadData() {
    /* this.ip2 = this.sqliteService.ip2;
    this.token = this.sqliteService.token; */
    //let url = "";
  
    //if (typeof this.evidencia !== "undefined")  {
    //url = this.ip + `/evidence_photo`;
    //url = this.ip + `/evidenceTask`;
    //let url = "http://198.50.116.250/service_network_API/public/index.php/api/photosByPolicy";
    /* let headers2 = new Headers();
    let url = this.ip2+"photosByPolicy";
  
    headers2.append('Content-Type', 'application/json');
    headers2.append('Access-Control-Allow-Origin', '*');
    headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers2.append('Content-Type', 'application/x-www-form-urlencoded');
    headers2.append('Authorization', 'Bearer ' + this.token); */
  
    // let data = {
    //   idEvidence: this.evidencia.evidence_id,
    //   idTask: this.item.id
    // };
  
    let ProjectId = this.sqliteService.GerProjectId();
    let tipoFoto = this.sqliteService.GerTipoFoto();
    let idTipoNorma = this.sqliteService.GeridTipoNorma();
      let idNorma = this.sqliteService.GeridNorma();
      let specificacionNorma = this.sqliteService.GerspecificacionNorma();
      let taskId = this.sqliteService.GetTareaId();
    
  
    /* let data = {
      policy_types_id:idTipoNorma,
      policy_id: idNorma,
      policy_specification_id:specificacionNorma,
      task_id: taskId
    }; */
  
    //console.log("data: " + JSON.stringify(data));
  
    /* Firebase */
    
    this.collection = this.firestore.collection(`fotosEvidencia/${taskId}/fotos`, ref => ref.where("identificador", "==", this.FBcode))/* .doc(`${this.idTarea}`).collection(`${this.firebaseId}`) */;
              this.todo = this.collection.valueChanges();
    /* Firebase */
  
    //this.http.post(url, JSON.stringify(data), { headers: headers2 }).subscribe(data => {
      //this.registros = data.json();
      //console.log("Registros_1: " + JSON.stringify(this.registros));
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
    //});
  
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
       correctOrientation: true
    }
  
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("Coordenadas 1: "+resp.coords.latitude, resp.coords.longitude);
      this.latitud = resp.coords.latitude;
      this.longitud = resp.coords.longitude;
      console.log(this.latitud, this.longitud)
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
      const filePath = `fotosEvidencia/${tareaid}/${this.FBcode}/${idd}`;
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
            identificador: this.FBcode,
            nombre:"Foto de evidencia de la tarea: "+this.tareas.nombreTarea+". Foto desde la cámara",
            url: url,
            idTarea: tar,
            latitud: this.latitud,
            longitud: this.longitud
          } 
          console.log(JSON.stringify(this.datas));
          this.firestore.collection('fotosEvidencia').doc(`${tar}`).collection('fotos').add(this.datas);
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
        this.latitud = resp.coords.latitude;
        this.longitud = resp.coords.longitude;
       }).catch((error) => {
         console.log('Error getting location', error);
       });
       
       /* let watch = this.geolocation.watchPosition();
       watch.subscribe((data) => {
         console.log("Coordenadas 2: "+data.coords.latitude, data.coords.longitude);
        // data can be a set of coordinates, or an error (if an error occurred).
        
       }); */
    
      const result = await this.camera.getPicture(options); 
        const image = `data:image/jpeg;base64,${result}`;
        const a = Date();
        
    
        let tareaid = this.sqliteService.GetTareaId();
        const idd = Math.random().toString(36).substring(2);
        /* const file = this.Image[0].image; */
        const file = `data:image/jpeg;base64,${result}`;
        const filePath = `fotosEvidencia/${tareaid}/${this.FBcode}/${idd}`;
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
              identificador: this.FBcode,
            nombre:"Foto de evidencia de la tarea: "+this.tareas.nombreTarea+". Foto desde la galería",
            url: url,
            idTarea: tar,
            latitud: this.latitud,
            longitud: this.longitud
            } 
            console.log(JSON.stringify(this.datas));
            this.firestore.collection('fotosEvidencia').doc(`${tar}`).collection('fotos').add(this.datas);
          }
        ))).subscribe();
    }

    BotonRegresar(){
      this._location.back();
      console.log("regresar");
    }

     Open(page: string, registro: string){
      let item = this.item;
      
      console.log("Selected Item", registro);
      console.log(page);
      switch(page) { 
        /* case "photo": {
          this.navCtrl.push(NuevoregistroevidenciaPage, { item: item });
          break;
        }
        case "photoGallery": {
          this.navCtrl.push(Nuevoregistroevidencia2Page, { item: item });
          break;
        } */
        case "D": {
          this.router.navigate(['/menu/first/detalle-fotos-evidencia-tarea',{registro: registro, url: this.url, item:this.item}]);
          /* this.navCtrl.navigateForward(['/menu/first/detalle-fotos-evidencia-tarea',{registro: registro, url: this.url, item:this.item}]); */
          break;
        }
      }
    }

}
