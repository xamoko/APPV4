import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { SqliteProvider } from '../../services/sqlite/sqlite';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { FotosEvidenciaTareaPage } from '../fotos-evidencia-tarea/fotos-evidencia-tarea.page';
import {Location} from '@angular/common';

@Component({
  selector: 'app-evidencia-tarea',
  templateUrl: './evidencia-tarea.page.html',
  styleUrls: ['./evidencia-tarea.page.scss'],
})
export class EvidenciaTareaPage implements OnInit {

  item;
	evidencia;
	registros: any[];
	ip;
	token;
	ip2;
	task_id;

	zonesObj;
	Project;
	listaTareasObj;
	tareasObj;
	zonasArr = [];
	NombreTarea;
	entities_id: any;
	normaTipoObj: any;
	normaTipoArr: any[];
	normaObj: any;
	normaEspec: any;
	Proyecto = 14;
	entitiesId;
	url;

  constructor(public http: Http, public sqliteService: SqliteProvider, private route: ActivatedRoute, private router: Router, public navCtrl: NavController, private _location: Location) { }

  ngOnInit() {

	this.item = this.route.snapshot.params;
	
	this.url = this.item;

    console.log("this.items "+this.route.snapshot.params)

    this.ip = this.sqliteService.ip;
    this.ip2 = this.sqliteService.ip2;
    this.token = this.sqliteService.token;
		this.NombreTarea = this.sqliteService.NombreTarea;
		this.entitiesId = this.sqliteService.entitiesId;

		this.LoadData(); 

		let idTipoNorma = this.sqliteService.GeridTipoNorma();
		let idNorma = this.sqliteService.GeridNorma();
    	let specificacionNorma = this.sqliteService.GerspecificacionNorma();
		let taskId = this.sqliteService.GetTareaId();
		
		console.log("tipo de norma: "+idTipoNorma+" Id Norma: "+idNorma+" especificacion de norma "+specificacionNorma+" taskId "+taskId);


		let headers2 = new Headers();
    headers2.append('Accept','application/json');
    headers2.append('content-type','application/json');
    headers2.append('Authorization','Bearer '+this.token);

    let url = this.ip2 + "/policyByProjectPhotos";
		let ProjectId = this.sqliteService.GerProjectId();
		let task_id = this.sqliteService.GetTareaId();
		
		let data = {
			entities_id: this.entitiesId,
			task_id: task_id,
			project_id: ProjectId,
			checked: 1
		}

		console.log("url: "+url);
		console.log("data: "+JSON.stringify(data));

		this.http.post(url,JSON.stringify(data), { headers: headers2 }).subscribe(Response => {
			this.normaTipoObj = Response.json();
			this.normaTipoArr = Array.of(this.normaTipoObj);
			console.log("normas: "+JSON.stringify(this.normaTipoArr));
			let i = 0;

			for (let objJson in this.normaTipoObj) {
				let j = 0;

				this.normaTipoArr[i] = {
					policy_type_id: this.normaTipoObj[objJson].policy_type_id,
					policy_type_description: this.normaTipoObj[objJson].policy_type_description,
					policy_type_comments: this.normaTipoObj[objJson].policy_type_comments,
					policy_type_checked: "checkpolicytype" + this.normaTipoObj[objJson].policy_type_id,
					NormaItem: [],
					show: true
				};

				this.normaObj = this.normaTipoObj[objJson].policy;

				//console.log(this.listaTareasObj);

				for (let objJson2 in this.normaObj) {
					this.normaTipoArr[i].NormaItem.push({
						policy_id: this.normaObj[objJson2].policy_id,
						policy_description: this.normaObj[objJson2].policy_description,
						policy_comments: this.normaObj[objJson2].policy_comments,
						policy_policy_type_id: this.normaObj[objJson2].policy_policy_type_id,
						policy_checked: "checkpolicy" + this.normaObj[objJson2].policy_id,
						NormaEspecItem: [],
						show: true
					});

					this.normaEspec = this.normaObj[objJson2].policy_spec;

					for (let objJson3 in this.normaEspec) {
						//console.log('Tarea: ' + this.tareasObj[objJson3].idTarea + '-' + this.tareasObj[objJson3].tarea);
						this.normaTipoArr[i].NormaItem[j].NormaEspecItem.push({
							policy_id: this.normaEspec[objJson3].policy_id,
							policy_type_id: this.normaEspec[objJson3].policy_type_id,
							policy_specification_id: this.normaEspec[objJson3].policy_specification_id,
							policy_specification_description: this.normaEspec[objJson3].policy_specification_description,
							policy_specification_comments: this.normaEspec[objJson3].policy_specification_comments,
							policy_spec_policy_id: this.normaEspec[objJson3].policy_spec_policy_id,
							policy_spec_policy_type_id: this.normaEspec[objJson3].policy_spec_policy_type_id,
							policy_spec_checked: "checkpolicyspec" + this.normaEspec[objJson3].policy_specification_id,
							firebaseCode: this.normaEspec[objJson3].FirebaseCode,
							show: true
						});
						
					}
					j++;
				}
				i++;
			}

			console.log(this.normaTipoArr);
		});
    
  }

  LoadData() {
		this.ip = this.sqliteService.ip;
		this.token = this.sqliteService.token;
		//let url = "";

		//if (typeof this.evidencia !== "undefined")  {
		//url = this.ip + `/evidence_photo`;
		//url = this.ip + `/evidenceTask`;
		//let url = "http://198.50.116.250/service_network_API/public/index.php/api/getPhotosByPojectId";
		let url =  this.ip2+"/photosByPolicy"
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
		let idTipoNorma = this.sqliteService.GeridTipoNorma();
		let idNorma = this.sqliteService.GeridNorma();
		let specificacionNorma = this.sqliteService.GerspecificacionNorma();
		let taskId = this.sqliteService.GetTareaId();

		let data = {
			policy_types_id:idTipoNorma,
			policy_id: idNorma,
			policy_specification_id:specificacionNorma,
			task_id: taskId
		};
		console.log("data fotos: " + JSON.stringify(data));
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
  
  isGroupShown2(elemento1, elemento2) {
    let isShow = false;

    if ( (elemento1.show) && (elemento2.show))
      isShow = true

    return isShow;
  };

  BotonRegresar(){
	this._location.back();
	console.log("regresar");
  }
  
  taskSelected(task, codefb) {
    let item = this.item;
    console.log("id: "+JSON.stringify(task));
		console.log("id enviado: "+task.id)
     //this.navCtrl.navigateForward(['/menu/first/fotos-evidencia-tarea', { task: task, norma: this.normaTipoArr, item: codefb, items: item }])
    ;
    console.log("Elemento enviado"+JSON.stringify(item.tareaId));
    
    this.router.navigate(['/menu/first/fotos-evidencia-tarea', { task: JSON.stringify(task), norma: this.normaTipoArr, item: codefb, items: JSON.stringify(item), policyid:task.policy_id, policy_type_id:task.policy_type_id, policy_specification_id: task.policy_specification_id, url:this.url }]);

    /* let navigationExtras: NavigationExtras = {

      queryParams:{ 
        task: JSON.stringify(task), 
        norma: this.normaTipoArr, 
        item: codefb, 
        items: item, 
        hola:"algo"
       }
    }
    this.router.navigate(['/menu/first/fotos-evidencia-tarea'], navigationExtras);  */
  }


}
