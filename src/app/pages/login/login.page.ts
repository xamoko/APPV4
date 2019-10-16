import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
//import { IonicPage } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { SqliteProvider } from '../../services/sqlite/sqlite';
import { ProveedorusersProvider } from '../../services/proveedorusers/proveedorusers';

import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { enlace, headers2 } from '../../../api.component'
/* const LCrypt = require('lcrypt');
const lcrypt = new LCrypt('TTQww2BVROs0PEU8Zc+1TE6NsKs0Y4PHesXnzyXYtRo='); */
//@IonicPage()
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

usuario;
	password;
	resToken;
	ip2;
	date;

	start_valid_date;
	end_valid_date;
	last_change_user_id;
	entities;
	entities_id;
	user_type_id;
	error;

	public data: any;

	passwordType: string = 'password';
	passwordIcon: string = 'eye-off';

	myStyle;
	myParams;
	

	item;

	@ViewChild('password',{static:true}) passwordInput;


  constructor(public alertController: AlertController,  public http: Http, public navCtrl: NavController, public sqliteService: SqliteProvider, public proveedor: ProveedorusersProvider, private router: Router) { }

  ngOnInit() {
  }

  login(): string {
	let url = enlace + "/loginApp" ;
	return url;
}

hideShowPassword() {
	this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
	this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
}

onChangeUserValue() {
	 let userAux = this.usuario;
	let passwordAux = this.password;

	var element = <HTMLInputElement>document.getElementById("btn-login");

	if ((userAux != undefined) && (userAux != "") && (passwordAux != undefined) && (passwordAux != "")) {
		element.disabled = false;
	}
	else {
		element.disabled = true;
	} 
}

onChangePasswordValue() {
	let userAux = this.usuario;
	let passwordAux = this.password;

	var element = <HTMLInputElement>document.getElementById("btn-login");

	if ((userAux != undefined) && (userAux != "") && (passwordAux != undefined) && (passwordAux != "")) {
		element.disabled = false;
	}
	else {
		element.disabled = true;
	}
}

eventHandler(keyCode, nextElement) {
	let userAux = this.usuario;

	if ((keyCode == 13) && (userAux != undefined) && (userAux != ""))
		nextElement.setFocus();
}

eventHandlerPassword(keyCode, nextElement) {
	let userAux = this.usuario;
	let passwordAux = this.password;

	if ((keyCode == 13) && (userAux != undefined) && (userAux != "") && (passwordAux != undefined) && (passwordAux != ""))
		this.ingresar();
}

async ingresar() {
	let url = enlace + "loginApp" ;

	/* let headers2 = new Headers();
	headers2.append('Content-Type', 'application/json');
	headers2.append('Access-Control-Allow-Origin', '*');
	headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
	headers2.append('Content-Type', 'application/x-www-form-urlencoded'); */

	
	let data = {
		user: this.usuario,
		password: this.password
	}
	
	/* let crypt ={
		user: lcrypt.encode(data.user),
		password: lcrypt.encode(data.password)
	};  */

	console.log("Inicio de Login... " + data.user, data.password);
	//console.log("Inicio de Login... " + crypt.user, crypt.password);
	console.log("url: " + url);

	this.http.post(url, JSON.stringify(data), { headers: headers2 })
		.subscribe(async crypt => {
			this.resToken = crypt.json();

			this.sqliteService.token = this.resToken.token;
			this.sqliteService.UserId = this.resToken.id;
			this.sqliteService.entitiesId = this.resToken.entities_id;

			this.start_valid_date = this.resToken.start_valid_date;
			this.end_valid_date = this.resToken.end_valid_date;
			this.last_change_user_id = this.resToken.last_change_user_id;
			this.date = this.resToken.date;
			this.entities = this.resToken.entities;
			this.entities_id = this.resToken.entities_id;
			this.error = this.resToken.error;
			this.user_type_id = this.resToken.user_type_id;

			console.log("Token: " + this.resToken.token);
			console.log("Id: " + this.resToken.id);
			console.log("start_valid_date: " + this.resToken.start_valid_date);
			console.log("end_valid_date: " + this.resToken.end_valid_date);
			console.log("last_change_user_id: " + this.resToken.last_change_user_id);
			console.log("entities_id: " + this.resToken.entities_id);
			console.log("error: " + this.resToken.error);
			console.log("status: " + this.resToken.status);
			console.log("user_type_id: " + this.user_type_id);



			if (this.error == 4) {
				const alert3 = await this.alertController.create({
					header: 'Alert',
      				subHeader: 'Subtitle',
      				buttons: ['OK']
				});
				 await alert3.present();
			}
			else {
				if (this.error == 5) {
					let alert2 = await this.alertController.create({
						header: "Login",
						subHeader: "El usuario ha caducado",
						buttons: ['Ok']
					});
					await alert2.present();
				}
				else {
					if (this.error == "invalid_credentials") {
						let alert1 = await this.alertController.create({
							header: "Login",
							subHeader: "Credenciales Inválidas",
							buttons: ['Ok']
						});
						await alert1.present();
					}
					else {
						if (this.user_type_id == '2' || this.user_type_id == '1,2') {
							if (this.resToken.status === 'succes') {

								this.router.navigate(['/menu/first/tab1']);
								console.log("succes");
								
							}
							else {
								let alert4 = await this.alertController.create({
									header: "Login",
									subHeader: "No autorizado",
									buttons: ['Ok']
								});
								await alert4.present();
							}
						}
						else {
							let alert5 = await this.alertController.create({
								header: "Login",
								subHeader: "No tiene acceso a la aplicación",
								buttons: ['Ok']
							});
							await alert5.present();
						}
					}
				}
			}
		}
		
		);
}
 
}
