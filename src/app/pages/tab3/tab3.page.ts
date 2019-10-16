import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Http, Headers} from '@angular/http';
import { SqliteProvider } from '../../services/sqlite/sqlite';
import { Proveedor1Provider } from '../../services/proveedor1/proveedor1';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  zonesObj;
  Project;
  ip;
  ip2;
  token ;
  public data:any;
  listaTareasObj;
  tareasObj;
  contador;
  zonasArr = [];
  collapseIcon: string = 'add';
  NombreTarea;
  listaZonaSuperior;
  sub;
  id: any;

  constructor(public navCtrl: NavController, public http: Http, public sqliteService: SqliteProvider, public proveedor: Proveedor1Provider, public modal: ModalController, private route: ActivatedRoute, private router: Router, private _location: Location) { 

    
    //this.Project = navParams.data.proyecto;
    /*  */
  }

  ngOnInit() {
    

    /* this.sub = this.route.queryParams.subscribe(params => {
      this.Project = params; 
    
      console.log("router: "+JSON.stringify(params));
      }); */
      this.Project = this.route.snapshot.params;
      console.log("router: "+JSON.stringify(this.route.snapshot.params['id']));
      console.log("router: "+JSON.stringify(this.route.snapshot.params));

    this.sqliteService.ProjectId = this.Project.id;
    this.sqliteService.ProjectId2 = this.Project.id2;
    this.ip = this.sqliteService.ip;
    this.ip2 = this.sqliteService.ip2;
    this.token = this.sqliteService.token;
    this.NombreTarea = this.sqliteService.NombreTarea;

    

    let headers2 = new Headers();
    headers2.append('Accept','application/json');
    headers2.append('content-type','application/json');
    headers2.append('Authorization','Bearer '+this.token);
    
    //let url = this.ip + "/tasks_project/" + this.Project.id;
    //let url = this.ip + "/TaskByZone";
    let url = this.ip2 + "/zoneListTaskByProject?project_id=" + this.Project.id;
    
    this.http.post(url, {headers: headers2} ).subscribe(data => {
      this.zonesObj = data.json();
      
      
      let h = 0;
      

      for (let objJson0 in this.zonesObj) {
				let i = 0;

				this.zonasArr[h] = {
					id_zone: this.zonesObj[objJson0].id_zone,
					zone: this.zonesObj[objJson0].zone,
					zonaSuperiorItem: [],
					show: false
				};

				this.listaZonaSuperior = this.zonesObj[objJson0].ZonaSuperior;

			for (let objJson in this.listaZonaSuperior){
				let j = 0;
				this.zonasArr[h].zonaSuperiorItem.push({

					id_zone: this.listaZonaSuperior[objJson].id_zone,
					id_subzone: this.listaZonaSuperior[objJson].id_subzone,
					subzone: this.listaZonaSuperior[objJson].subzone,
					listasTareasItem: [],
					show: false
				});

				this.listaTareasObj = this.listaZonaSuperior[objJson].listasTareas;

				for (let objJson2 in this.listaTareasObj){

					this.zonasArr[h].zonaSuperiorItem[i].listasTareasItem.push({
						listaTareaId: this.listaTareasObj[objJson2].task_list_id,
						nombreListaTarea: this.listaTareasObj[objJson2].task_list,
						tareaItem: [],
						show: false
					});

					this.tareasObj = this.listaTareasObj[objJson2].tareas;

					for (let objJson3 in this.tareasObj) {
						this.zonasArr[h].zonaSuperiorItem[i].listasTareasItem[j].tareaItem.push({
							tareaId: this.tareasObj[objJson3].task_id,
							nombreTarea: this.tareasObj[objJson3].defTarea,
							description: this.tareasObj[objJson3].defTarea,
							completion_percent: this.tareasObj[objJson3].task_completed_percentage,
							inicioTarea: this.tareasObj[objJson3].start_date,
							finTarea: this.tareasObj[objJson3].end_date,
							show: false
						});
					}
					j++;
				}
				i++;
			}
			h++;
		}
    });
  }

  openSignatureModel(){
    /* let modal = this.modal.create(SignaturePage);
    modal.present(); */
  }

  swipeEvent(e) {
		
    if(e.direction == 4) {
     //console.log("izquierda");
     this.navCtrl.pop();
   }
   }

   taskSelected(task) {
    /*
    if (task.length > 0)  {
      this.navCtrl.push(TaskPage, { task: task });
    } 
    else{
      this.navCtrl.push(DetailPage, { task: task });
    }
    */
    /* this.navCtrl.push(DetailPage, { task: task }); */
    this.router.navigate(['/menu/first/descripcion-tarea' ,task]);
  }

  toggleGroup(elemento) {
    elemento.show = !elemento.show;
  };

  isGroupShown(elemento) {
    return elemento.show;
  };

  isGroupShown2(elemento1, elemento2, elemento3) {
    let isShow = false;

    if ( (elemento1.show) && (elemento2.show) && (elemento3.show))
      isShow = true

    return isShow;
  };

  showZone(){
    console.log("Mostrar Plano de Zona");
    /* const zonePlane = this.modal.create("ZonePlanePage");
    zonePlane.present(); */
  }

  BotonRegresar(){
    this._location.back();
    console.log("regresar");
    }

}
