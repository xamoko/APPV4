import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Http, Headers } from '@angular/http';
import { SqliteProvider } from '../../services/sqlite/sqlite';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { enlace, headers2 } from '../../../api.component';
import { ModalPage } from '../modal/modal.page';
import {Location} from '@angular/common';



@Component({
  selector: 'app-descripcion-tarea',
  templateUrl: './descripcion-tarea.page.html',
  styleUrls: ['./descripcion-tarea.page.scss'],
})
export class DescripcionTareaPage implements OnInit {

  item;

	base64Image = [];
	Image = [];
	NombreTarea;
	idTarea;
	knobValues: any;
	ip2;
	token;
	rango = [];
	avanceActual;


  constructor(private camera: Camera, public http: Http, public sqliteService: SqliteProvider, private route: ActivatedRoute, private router: Router, private modal: ModalController, public alertController: AlertController, private _location: Location) { }

  ngOnInit() {

    this.item = this.route.snapshot.params;
    console.log("router: "+JSON.stringify(this.route.snapshot.params));
    //this.item = this.navParams.data.task;
    this.sqliteService.tarea_id = this.item.tareaId;
		this.sqliteService.NombreTarea = this.item.nombreTarea;
		this.ip2 = this.sqliteService.ip2;
    this.token = this.sqliteService.token;

    this.NombreTarea = this.item.nombreTarea;
		 this.NombreTarea = this.sqliteService.NombreTarea;
		 this.idTarea = this.item.tareaId;
		 this.idTarea = this.sqliteService.tarea_id;
    
    this.mostrarPorcentaje(event);

		 this.iniciarInstalado();
  }

  iniciarInstalado(){
		
		var url = enlace + "sumaInstalado";
		
		var data ={
			tarea: this.sqliteService.GetTareaId(),
			proyecto: this.sqliteService.GerProjectId(),
		}
		
		this.http.post(url, JSON.stringify(data), { headers: headers2 }).subscribe(Response => {
      var respuesta = Response.json();
      
      console.log("Avance Actual: "+JSON.stringify(respuesta));
      
			respuesta.forEach(element =>{
				element.TotalInstalado
				this.avanceActual = element.TotalInstalado;
				console.log("Avance Actual: "+this.avanceActual);
			})
					
		});
			
  }
  
  async openModal(){
		let item = this.item;
		const myModal = await this.modal.create({
      component: ModalPage,
      componentProps:{
        item:item
      }
      });

		return await myModal.present();
  }
  
  async showPrompt() {
		const prompt = await this.alertController.create({
		  header: 'Agregar',
		  inputs: [
			{
			  label: 'descricion',
			  name: 'descripcion',
			  placeholder: 'Descripción'
			},
			{
				label: 'cantidad',
				value: this.item.cantidad,
			  },
			  {
				name: 'instalado',
				placeholder: 'Instalado'
			  },
		  ],
		  buttons: [
			{
			  text: 'Cancel',
			  handler: data => {
				console.log('Cancel clicked');
			  }
			},
			{
			  text: 'Save',
			  handler: data => {
				console.log('Saved clicked'+JSON.stringify(data));
			  }
			}
		  ]
		});
		prompt.present();
	  }

    mostrarPorcentaje(event){
      /* this.knobValues 
      console.log(event.value); */
  
      let headers2 = new Headers();
      headers2.append('Accept','application/json');
      headers2.append('content-type','application/json');
    headers2.append('Authorization','Bearer '+this.token);
  
    let data ={id: this.idTarea}
    
      let url = this.ip2 + "/buscarPorcentaje";

      console.log("solicitar porcentaje: "+JSON.stringify(data));
  
      this.http.post(url, JSON.stringify(data), {headers: headers2} ).subscribe(data => {
        var knobValuess = data.json();
        this.knobValues = knobValuess.porcentaje;
        console.log("porcentaje "+this.knobValues);
      })
    }

    porcentaje(event){
      //this.knobValues 
      console.log("Evento "+event.detail.value);
  
  
      let headers2 = new Headers();
      headers2.append('Accept','application/json');
      headers2.append('content-type','application/json');
    headers2.append('Authorization','Bearer '+this.token);
  
   /*  this.rango.push(event);
    console.log("Array porcentaje "+JSON.stringify(this.rango)); */
  
    let data ={
      id: this.idTarea,
      completed_percentage: event.detail.value
    }
    
      let url = this.ip2 + "/actualizarPorcentaje";
  
      this.http.post(url, JSON.stringify(data), {headers: headers2} ).subscribe(data => {
        var knobValuess = data.json();
        this.knobValues = knobValuess.completed_percentage;
        console.log("porcentaje "+this.knobValues);
      }); 
  
    }

    BotonRegresar(){
			this._location.back();
			console.log("regresar");
			}


    Open(page: string) {
       let item = this.item;
  
      console.log("Selected Item", item);
      console.log(page);
      switch (page) {
        case "avance": {
          this.sqliteService.tipofoto = "1";
          //this.navCtrl.push(RegistroPage, { item: item });
          this.router.navigate(['/menu/first/avance-tarea' ,item]);
          break;
        }
        case "evidencia": {
          this.sqliteService.tipofoto = "2";
          //this.navCtrl.push(TaskevidencePage, { item: item });
          this.router.navigate(['/menu/first/evidencia-tarea' ,item]);
          break;
        }
        /* case "tickets": {
          this.navCtrl.push(TicketsPorTareaPage, { item: item });
          break;
        }
        case "photo": {
          this.navCtrl.push(NuevoregistroPage, { item: item });
          break;
        }
        case "photoGallery": {
          this.navCtrl.push(Nuevoregistro2Page, { item: item });
          break;
        } */
      }
  
      
    }


}
