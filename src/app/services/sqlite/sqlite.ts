import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Platform,Events, AlertController } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class SqliteProvider {

	private database: SQLiteObject;
	private dbReady = new BehaviorSubject<boolean>(false);

	ticketsR = [];
	ip = "http://198.50.116.250/api/public/index.php/api";
	//ip = "http://198.50.116.250/apinetwork/public/index.php/api";
	ip2 = "http://198.50.116.250/service_network_API_test/public/index.php/api";
	//ip2 = "http://locahost/service_network_API/public/index.php/api";
	resToken;
	entitiesId;
	responseLocaltoRemote;
	token;
	UserId;
	ts = document.getElementById('text-area');

	image;
	task_id;
	clasification_photo_id;
	latitude;
	ProjectId;
	ProjectId2;
	id_actividad;
	tipo;
	nombre;
	public online: boolean;
	evidencia;
	avance;
	tipofoto;
	NombreTarea;
	tarea_id;
	idTipoNorma;
	idNorma;
	specificacionNorma;

	constructor(private platform: Platform, /* private sqlite: SQLite, private sqlitePorter: SQLitePorter, */ public events: Events, public http: Http, /* private network: Network, */ private alertCtrl: AlertController) {
		/* this.platform.ready().then(() => {

			this.sqlite.create({ name: 'local.db', location: 'default' })
				.then((db: SQLiteObject) => {
					this.database = db;
					this.createTable() */

					/*.then(()=>{     
						//communicate we are ready!
						this.dbReady.next(true);
					  });*/

				/* })
		}); */
	}

	GetToken(): string {
		return this.token;
	}

	GetIP2(): string {
		return this.ip2;
	}

	GerUserId(): string {
		return this.UserId;
	}

	GetEntitiesId(): string {
		return this.entitiesId;
	}

	GetTareaId(): string {
		return this.tarea_id;
	}

	GerProjectId(): string {
		return this.ProjectId;
	}

	GerProjectId2(): string {
		return this.ProjectId2;
	}

	GerTipoFoto(): string {
		return this.tipofoto;
	}

	GerAvance(): string {
		return this.avance;
	}
	GerNombreTarea(): string {
		return this.NombreTarea;
	}
	GeridTipoNorma(): string {
		return this.idTipoNorma;
	}
	GeridNorma(): string {
		return this.idNorma;
	}
	GerspecificacionNorma(): string {
		return this.specificacionNorma;
	}

	login(): string {
		//let url = this.ip + "/login";
		let url = this.ip2 + "/login";
		return url;
	}

	//FUNCIONES CRUD 
	createTable() {
		//console.log("creating ticket table if it does not exist");
		// let sql = 'DROP TABLE tickets';
		//let sql = 'CREATE TABLE IF NOT EXISTS tickets(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed INTEGER)';
		//let sql = 'DROP TABLE ticketsPending';
		let sql = 'CREATE TABLE IF NOT EXISTS ticketsPending(id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, subject TEXT, status ENUM, priority ENUM, project_id INTEGER,task_id INTEGER, agent_id INTEGER, channel_id INTEGER, type_id INTEGER, created_at TIMESTAMP, updated_at TIMESTAMP, deleted_at TIMESTAMP)';
		//let sql = 'CREATE TABLE IF NOT EXISTS registro(id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, description TEXT, status ENUM, priority ENUM, project_id INTEGER,task_id INTEGER, agent_id INTEGER, channel_id INTEGER, type_id INTEGER, created_at TIMESTAMP, updated_at TIMESTAMP, deleted_at TIMESTAMP)';
		// let sql2 ='CREATE TABLE IF NOT EXISTS ticketsPending(id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, subject TEXT, status ENUM, priority ENUM, agent_id INTEGER, channel_id INTEGER, type_id INTEGER, created_at TIMESTAMP, updated_at TIMESTAMP, deleted_at TIMESTAMP)';
		// let sql3= sql + sql2 ;
		return this.database.executeSql(sql, []).catch((err) => console.log("error detected creating tables", err));
	}

	//volver esto una sola funcion para hacerla reutilizable
	getAll() {
		let sql = 'SELECT * FROM tickets';
		return this.database.executeSql(sql, [])
			.then(response => {
				let tickets = [];
				for (let index = 0; index < response.rows.length; index++) {
					tickets.push(response.rows.item(index));
				}
				return Promise.resolve(tickets);
			})
			.catch(error => Promise.reject(error));
	}
	/*
	getTable(table, row){
	  let sql = 'SELECT * FROM '+ table ;
	  return this.database.executeSql(sql, [])
	  .then(response => {
		let row = [];
		for (let index = 0; index < response.rows.length; index++) {
		  row.push( response.rows.item(index) );
		}
		return Promise.resolve( row );
	  })
	  .catch(error => Promise.reject(error));
	}
	*/
	getAll2() {
		let sql = 'SELECT * FROM ticketsPending';
		return this.database.executeSql(sql, [])
			.then(response => {
				let ticketsPending = [];
				for (let index = 0; index < response.rows.length; index++) {
					ticketsPending.push(response.rows.item(index));
				}
				return Promise.resolve(ticketsPending);
			})
			.catch(error => Promise.reject(error));
	}

	create(ticket: any) {
		console.log(ticket);
		let sql = 'INSERT INTO ticketsPending( user_id , subject , status , priority, project_id ,  task_id,  channel_id , type_id , created_at ) VALUES(  ?, ?, ?, ?, ?, ?, ?, ?, ?)';
		return this.database.executeSql(sql, [1, ticket.subject, 'open', ticket.priority, ticket.project_id, ticket.task_id, 1, 2, ticket.created_at]).catch((err) => console.log("tables not droped", err));
	}

	// createRegistro( registro: object , id : any){
	//   console.log("despues sqlite" + registro);
	//  // console.log("despues sqlite" + id);

	// let headers21 = new Headers();
	// headers21.append('Accept','application/json');
	// headers21.append('content-type','application/json');
	// // headers2.append('content-type','application/x-www-form-urlencoded');
	// // Content-Type': 'application/x-www-form-urlencoded
	// headers21.append('Authorization','Bearer '+this.token);
	// // const requestOptions = new RequestOptions({ headers: headers2 });
	// console.log('enviando peticion');

	// let postData = {
	//   "image": "",
	//   "task_id": '240',
	//   "clasification_photo_id": "4",
	//   "latitude": "80",
	//   "proyecto_id": "3",
	//   "tipo": "avance",
	//   "nombre": "Un paisaje mas",
	//   "descripcion": "This is a description",
	//   "created_user_id": "Jigglypuff",
	//   "longitude": "80",
	// }

	//   //  this.http.post(`http://10.10.1.119/api/public/index.php/api/registros/`, postData, requestOptions).subscribe(
	//     this.http.post(`http://198.50.116.250/apinetwork/public/index.php/api/registros`, postData, {headers: headers21})
	//     .subscribe(

	//     // this.http.post(this.ip + "/tasks/" +this.task_id +"/registros", registro,{headers: headers2}).subscribe(
	//     // this.http.post(this.ip + "/home/"+id, registro,{headers: headers2}).subscribe(
	//    response=>{ console.log(response); }, error =>{console.log(error)});

	//    //image, task_id, clasification_photo_id, latitude, proyecto_id, id actividad, tipo, nombre.

	//   /*
	//   let sql = 'INSERT INTO ticketsPending( user_id , subject , status , priority, project_id ,  task_id,  channel_id , type_id , created_at ) VALUES(  ?, ?, ?, ?, ?, ?, ?, ?, ?)';
	//   return this.database.executeSql(sql, [  1  , ticket.subject, 'open', ticket.priority, ticket.project_id , ticket.task_id ,1 , 2 , ticket.created_at ]);
	// */
	// }

	createRegistro(registro: object, id: any, item: any) {
		let headers2 = new Headers();
		headers2.append('Content-Type', 'application/json');
		headers2.append('Access-Control-Allow-Origin', '*');
		headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
		headers2.append('Content-Type', 'application/x-www-form-urlencoded');

		headers2.append('Authorization', 'Bearer ' + this.token);
		//const requestOptions = new RequestOptions({ headers: headers2 });

		console.log(JSON.stringify(registro));
		//var dato = Array.of(registro);

		var id = registro["photo_type_id"];
		console.log("photo_type_id1: " + id);
		let url = this.ip2 + '/uploadPhoto';
		/* `http://198.50.116.250/apinetwork/public/index.php/api/registros` */
		this.http.post(url, JSON.stringify(registro), { headers: headers2 })
			.subscribe( async data => {
				console.log("photo_type_id2: " + id);
				let alert1 = await this.alertCtrl.create({
					header: "Registro",
					subHeader: "Imagen guardada con exito!",
					buttons: ['Ok']
				});
				await alert1.present();
				if(alert1.present()){
					console.log("alert.present "+id);
				}

				this.events.publish('handlePhotoOk', '');
				//let nav = this.app.getActiveNav();

				//this.app.getRootNav().setRoot(RegistroPage, { item: item });
			}, 
			async error => {
				console.log(error);
				
				let alert1 = await this.alertCtrl.create({
					header: "Registro",
					subHeader: "Error al guardar Foto!",
					buttons: ['Ok']
				});
				await alert1.present();
			}
			);
	}

	createNote(registro: object, id: any, item: any) {
		let headers2 = new Headers();
		headers2.append('Content-Type', 'application/json');
		headers2.append('Access-Control-Allow-Origin', '*');
		headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
		headers2.append('Content-Type', 'application/x-www-form-urlencoded');

		headers2.append('Authorization', 'Bearer ' + this.token);
		//const requestOptions = new RequestOptions({ headers: headers2 });

		console.log(JSON.stringify(registro));

		this.http.post(this.ip2 + `/createNotes`, JSON.stringify(registro), { headers: headers2 })
			.subscribe( async data => {
				let alert1 = await this.alertCtrl.create({
					header: "Notas",
					subHeader: "Datos guardados con exito!",
					buttons: ['Ok']
				});
				await alert1.present();

				this.events.publish('handleNoteOk', '');
			}, 
			async error => {
				console.log(error);
				
				let alert1 = await this.alertCtrl.create({
					header: "Notas",
					subHeader: "Error al guardar los datos!",
					buttons: ['Ok']
				});
				await alert1.present();
			}
			);
	}

	createRegistro2(registro: object) {
		let headers2 = new Headers();
		headers2.append('Content-Type', 'application/json');
		headers2.append('Access-Control-Allow-Origin', '*');
		headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
		headers2.append('Content-Type', 'application/x-www-form-urlencoded');

		headers2.append('Authorization', 'Bearer ' + this.token);
		//const requestOptions = new RequestOptions({ headers: headers2 });

		console.log(JSON.stringify(registro));
		//var dato = Array.of(registro);

		var id = registro["photo_type_id"];
		console.log("photo_type_id1: " + id);
		let url = this.ip2 + '/uploadPhoto';
		/* `http://198.50.116.250/apinetwork/public/index.php/api/registros` */
		this.http.post(url, JSON.stringify(registro), { headers: headers2 })
			.subscribe(async data => {
				console.log("photo_type_id2: " + id);
				let alert1 = await this.alertCtrl.create({
					header: "Registro",
					subHeader: "Imagen guardada con exito!",
					buttons: [{
						text: 'Ok',
						/* handler: () => {
							reload:true
						  } */
					}]
				});
				await alert1.present();
				if(alert1.present()){
					console.log("alert.present "+id);
				}
				
			
				//this.events.publish('handlePhotoOk', '');
				//let nav = this.app.getActiveNav();

				//this.app.getRootNav().setRoot(RegistroPage, { item: item });
			}, 
			async error => {
				console.log(error);
				
				let alert1 = await this.alertCtrl.create({
					header: "Registro",
					subHeader: "Error al guardar Foto!",
					buttons: ['Ok']
				});
				await alert1.present();
			}
			);
	}

	// unused CRUD FUNCTIONS
	delete (tickets: any) {
		let sql = 'DELETE FROM ticketsPending WHERE id=?';
		return this.database.executeSql(sql, [tickets.id]);
	}

	update(tickets: any) {
		let sql = 'UPDATE tickets SET title=?, completed=? WHERE id=?';
		return this.database.executeSql(sql, [tickets.subject, tickets.priority, tickets.id]);
	}

	//
	//funciones CRUD 

	//FUNCIONES SYNC 

	/* syncFULL() {
		console.log("Checking internet availabilty");
		
		if (this.network.type != "none") {
			console.log("Internet available Sync starting");
			this.syncLocalToRemote(); // hacer una promesa  en success delete pending
			//this.deleteTicketsPending()
			let url = this.ip + "tickets";
			let headers2 = new Headers();
			//revisar que este bien esto porque no funciona
			headers2.append('Accept', 'application/json');
			headers2.append('content-type', 'application/json');
			headers2.append('Authorization', 'Bearer ' + this.token);
			
			this.http.get(url, { headers: headers2 }).subscribe(data => {
				this.ticketsR = data.json();
			})
			
			// el sinc  con refresh
			this.syncRemoteToLocal(this.ticketsR);// este esta bien
		}
		else{ 
			console.log("No acces to internet");
		}
	}

	syncRemoteToLocal(ticketsR) {
		let sqlJsonBlock = {
			"structure": {
				"tables": {
					"tickets": "([id] INTEGER PRIMARY KEY AUTOINCREMENT, [user_id] INTEGER, [subject] TEXT, [status] ENUM, [priority] ENUM, [project_id] INTEGER, [task_id] INTEGER, [agent_id] INTEGER, [channel_id] INTEGER, [type_id] INTEGER, [created_at] TIMESTAMP, [updated_at] TIMESTAMP, [deleted_at] TIMESTAMP )"
				}
			},
			"data": {
				"inserts": {
					"tickets": this.ticketsR
				}
			}
		};
	
		console.log(sqlJsonBlock);
		this.database.executeSql('DELETE FROM tickets', []).catch((err) => console.log("tables not droped", err));
		this.sqlitePorter.importJsonToDb(this.database, sqlJsonBlock).then(() => console.log('Imported'))
			.catch(e => console.error(e));;
	} */

	syncLocalToRemote() {
		let sql = 'SELECT * FROM ticketsPending';
		return this.database.executeSql(sql, []).then(response => {

			let ticketsPending = [];

			for (let index = 0; index < response.rows.length; index++) {
				ticketsPending.push(response.rows.item(index));
			}

			return Promise.resolve(ticketsPending).then(response => {
				console.log(ticketsPending.length);//debug

				if (ticketsPending.length > 0) {
					for (let index2 = 0; index2 < ticketsPending.length; index2++) {
						delete ticketsPending[index2].id;

						let headers2 = new Headers();
						headers2.append('Accept', 'application/json');
						headers2.append('content-type', 'application/json');
						headers2.append('Authorization', 'Bearer ' + this.token);
		
						console.log(headers2);
						console.log(this.token);
						console.log(ticketsPending[index2]);
		
						this.http.post(this.ip + "tickets", ticketsPending[index2], { headers: headers2 }).subscribe(
							data => {
								this.responseLocaltoRemote = data.json();
								console.log(data.json());
								if (this.responseLocaltoRemote.created == true) { this.deleteTicketsPending(); } else (console.log("Error on post local to remote" + this.responseLocaltoRemote))
							},
							error => {
								console.log(error);
							}
						);
					}
				}
				else{
					console.log("No hay tickets pendientes");
				}
			});
			// 
			//this.http.post("http://10.10.1.108:81/apiservice/public/api/v1/tickets", JSON.stringify(data) }
		})
		.catch(error => Promise.reject(error));
	}

	deleteTicketsPending() {
		let sql = 'DELETE FROM ticketsPending';
		return this.database.executeSql(sql, []);
	}
	//funciones Sync
}