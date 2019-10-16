import { Component, OnInit, Input } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from '@ionic/angular';
import { enlace, headers2 } from '../../../api.component';
import { SqliteProvider } from '../../services/sqlite/sqlite';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  dato;
  ip2;
  token;
  item;
  @Input() avanceActual;
  cantidad;

  constructor(public modalController: ModalController, public sqliteService: SqliteProvider, public http: Http, private navParams: NavParams, public alertController: AlertController) { }

  ngOnInit() {

    this.ip2 = this.sqliteService.ip2;
    this.token = this.sqliteService.token;
    this.item = this.navParams.data.item;

    this.cantidad = this.item.cantidad;
    this.iniciarInstalado();
  }

  closeModal(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async showPrompt() {


		const prompt = await this.alertController.create({
      header: 'Agregar',
      message: 'Desea agregar el avance: '+this.dato,
		  buttons: [
			{
			  text: 'Cancelar',
			  handler: data => {
          console.log('Saved clicked'+JSON.stringify(data));
          this.closeModal();
				console.log('Cancel clicked');
			  }
			},
			{
			  text: 'Guardar',
			  handler: data => {
        console.log('Saved clicked'+JSON.stringify(data));
          
        var url = enlace + "agregarInstalado";
        var datas = {
          descripcion: null,
          cantidad: null,
          unidad_medida: null,
          total: this.dato,
          tarea: this.sqliteService.GetTareaId(),
          usuario: this.sqliteService.GerUserId(),
          proyecto: this.sqliteService.GerProjectId(),
          latitud: null,
          longitud:null
    
        }
        this.http.post(url, JSON.stringify(datas), { headers: headers2 }).subscribe(Response => {
          var retorno = Response.json();

          this.closeModal();
          this.iniciarInstalado();
        });
			  }
			}
		  ]
		});
		await prompt.present();
    }
    
    iniciarInstalado(){
		
      var url = enlace + "sumaInstalado";
      
      var data ={
        tarea: this.sqliteService.GetTareaId(),
        proyecto: this.sqliteService.GerProjectId(),
      }
      
      this.http.post(url, JSON.stringify(data), { headers: headers2 }).subscribe(Response => {
        var respuesta = Response.json();
        
        respuesta.forEach(element =>{
          element.TotalInstalado
          this.avanceActual = element.TotalInstalado;
          console.log("Avance Actual: "+this.avanceActual);
        })
            
      });
        
    }


    onChangeUserValue() {
      let userAux = this.dato;
      
  
      var element = <HTMLInputElement>document.getElementById("btn-login");
  
      if ((userAux != undefined) && (userAux != "")){
        element.disabled = false;
      }
      else {
        element.disabled = true;
      }
    }

}
