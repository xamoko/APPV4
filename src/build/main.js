webpackJsonp([3],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sqlite_sqlite__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TicketsPage = /** @class */ (function () {
    function TicketsPage(navCtrl, navParams, sqliteService) {
        //this.projectTask = navParams.data.item;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqliteService = sqliteService;
        //ticket = { asunto: "", descripcion:"" ,asesor:"pendiente", comentarios:"null", folio:"", status:"pendiente"};
        this.ticket = [];
        //ticket= {};
        this.myDate = new Date().toISOString();
    }
    TicketsPage.prototype.ticketSubmit = function (ticket) {
        this.ticket['created_at'] = this.myDate;
        this.ticket['project_id'] = this.navParams.data.item.project_id;
        this.ticket['task_id'] = this.navParams.data.item.id;
        this.sqliteService.create(this.ticket);
    };
    TicketsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TicketsPage');
    };
    TicketsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tickets',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/Tickets/tickets.html"*/'<!--\n  Generated template for the TicketsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    \n  <ion-title ><img src="assets/imgs/icon.png" width="20%"/> TICKET</ion-title>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content padding>\n  <div class="sec2"><ion-datetime displayFormat="MMM DD, YYYY HH:mm"  [(ngModel)]="myDate" style="color:#fff;"></ion-datetime ></div>\n	<div class="spacer" style="width: 300px; height: 54px;"></div>\n\n	<ion-grid>\n		\n<ion-row justify-content-start>\n    <ion-col col-12>\n     <ion-card>\n  <h2 style="    font-size: 18px;\n    text-transform: uppercase;\n    text-align: center;">¿Como podemos ayudarte?</h2>\n  </ion-card>\n    </ion-col>\n   \n  </ion-row>\n	</ion-grid>\n \n  \n\n <form (ngSubmit)="ticketSubmit()" style="padding:10px;">\n  <div class="list">\n  <!--\n  <ion-item>\n    <ion-input type="number" placeholder="Project ID" [(ngModel)]="ticket.project_id" name="project_id"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type="number" placeholder="Task ID" [(ngModel)]="ticket.task_id" name="task_id"></ion-input>\n  </ion-item> -->\n\n<ion-item>\n <ion-select   placeholder="Tipo                " [(ngModel)]="ticket.type_id" name="type_id">\n    <ion-option value="1">tipo 1</ion-option>\n    <ion-option value="2">tipo 2</ion-option>\n    <ion-option value="3">tipo 3</ion-option>\n  \n  </ion-select>\n    </ion-item>\n\n  <ion-item>\n <ion-select   placeholder="prioridad                " [(ngModel)]="ticket.priority" name="priority">\n    <ion-option value="low">low</ion-option>\n    <ion-option value="medium">medium</ion-option>\n    <ion-option value="high">high</ion-option>\n  \n  </ion-select>\n    </ion-item>\n      <ion-item>\n     \n        <ion-textarea  class="Ts"  placeholder="Descripcion" [(ngModel)]="ticket.subject" name="subject"></ion-textarea>\n      </ion-item>\n      <button ion-button type="submit" block class="Ts">Crear Ticket</button>   </div>\n    </form>\n  \n  	\n  		\n         \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/Tickets/tickets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_sqlite_sqlite__["a" /* SqliteProvider */]])
    ], TicketsPage);
    return TicketsPage;
}());

//# sourceMappingURL=tickets.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nuevoregistro2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_proveedor1_proveedor1__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var Nuevoregistro2Page = /** @class */ (function () {
    function Nuevoregistro2Page(events, alertCtrl, navCtrl, navParams, camera, geolocation, sqliteService, http, proveedor) {
        var _this = this;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.geolocation = geolocation;
        this.sqliteService = sqliteService;
        this.http = http;
        this.proveedor = proveedor;
        this.Image = [];
        this.base64Image = [];
        this.Position = [];
        this.registro = {};
        this.inputDisabled = false;
        this.item = navParams.data.item;
        this.evidencia = navParams.data.evidencia;
        {
            this.events.subscribe('handlePhotoOk', function (statsData) {
                //this.ionViewDidLoad();
                //this.navCtrl.push(RegistroPage, { item: this.item });
                _this.events.publish('handleReloadListPhoto', '');
                //this.navCtrl.pop();
            });
        }
    }
    Nuevoregistro2Page.prototype.ionViewDidLoad = function () {
        console.log('inicio LoginPage');
        this.takePicture();
        this.AvaEvi = "";
        this.nombre = "";
        this.description = "";
        this.photoType = "";
        this.Image = [];
        this.base64Image = [];
        this.Position = [];
        this.registro = {};
        this.latitude = "";
        this.longitude = "";
    };
    Nuevoregistro2Page.prototype.takePicture = function () {
        var _this = this;
        //this.geolocationNative();
        this.geolocation.getCurrentPosition().then(function (geoposition) {
            var options = {
                quality: 100,
                destinationType: _this.camera.DestinationType.DATA_URL,
                sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
                targetWidth: 1024,
                targetHeight: 768
            };
            _this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                if (imageData == 1) {
                    console.log("Se tomo la foto");
                }
                else {
                    console.log("No se tomo la foto");
                }
                _this.base64Image.push('data:image/jpeg;base64,' + imageData);
                _this.Image.push({ image: 'data:image/jpeg;base64,' + imageData, latitude: geoposition.coords.latitude.toString(), longitude: geoposition.coords.longitude.toString() });
                // this.Image.push(imageData)
            }, function (err) {
                // Handle error
            });
        });
    };
    Nuevoregistro2Page.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    Nuevoregistro2Page.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    Nuevoregistro2Page.prototype.registroSubmit = function (registro) {
        //this.Image = [{"image":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAj//2Q==","latitude":"25.6588239","longitude":"-100.2604567"}];
        // console.log("Muestra Objeto Imagen");
        // console.log(this.Image);
        // if (this.AvaEvi == ""){
        //   let alert1 = this.alertCtrl.create({
        //     title: "Alerta",
        //     subTitle: "Favor de seleccionar Tipo !",
        //     buttons: ['Ok']
        //   });
        //   alert1.present();
        //   return ;
        // }
        // if (this.nombre == ""){
        //   let alert1 = this.alertCtrl.create({
        //     title: "Alerta",
        //     subTitle: "Favor capturar el Nombre !",
        //     buttons: ['Ok']
        //   });
        //   alert1.present();
        //   return ;
        // }
        var elementBtnUploadPhoto = document.getElementById("btn-upload-photo");
        this.inputDisabled = true;
        elementBtnUploadPhoto.disabled = true;
        var userId = this.sqliteService.GerUserId();
        var IdProject = this.sqliteService.GerProjectId();
        var photoType = '1';
        var entitiesId = this.sqliteService.GetEntitiesId();
        var photoName = "Foto de avance de la Tarea: " + this.item.nombreTarea;
        var photoDescription = "Foto de Avance de la Tarea: " + this.item.nombreTarea + ". Foto cargada desde el movil";
        var tphoto = 1;
        var evi_id = 0;
        this.AvaEvi = "Avance";
        if (this.Image.length == 0) {
            this.inputDisabled = false;
            elementBtnUploadPhoto.disabled = false;
            var alert1 = this.alertCtrl.create({
                title: "Alerta",
                subTitle: "No se ha capturado la Foto.",
                buttons: ['Ok']
            });
            alert1.present();
            return;
        }
        /* if (photoName == ""){
            this.inputDisabled = false;
            elementBtnUploadPhoto.disabled = false;

            let alert1 = this.alertCtrl.create({
                title: "Error",
                subTitle: "Debe ingresar un nombre para la Foto.",
                buttons: ['Ok']
            });
            alert1.present();

            return;
        }

        if (photoDescription == ""){
            this.inputDisabled = false;
            elementBtnUploadPhoto.disabled = false;

            let alert1 = this.alertCtrl.create({
                title: "Error",
                subTitle: "Debe ingresar una descripcion para la Foto.",
                buttons: ['Ok']
            });
            alert1.present();

            return;
        }

        if (photoType == ""){
            this.inputDisabled = false;
            elementBtnUploadPhoto.disabled = false;

            let alert1 = this.alertCtrl.create({
                title: "Error",
                subTitle: "Debe seleccionar el tipo de foto",
                buttons: ['Ok']
            });
            alert1.present();

            return;
        }

        if (typeof this.evidencia !== "undefined") {
            tphoto = 2;
            evi_id = this.evidencia.evidence_id;
            this.AvaEvi = "Evidencia";
        }*/
        console.log("Nuevos parametros");
        console.log("TypePtoho", tphoto);
        console.log("Evidencia_ID", evi_id);
        var reg = {
            task_id: this.item.tareaId,
            project_id: IdProject,
            photo_clasification_id: "1",
            geo_latitude: this.Image[0].latitude,
            geo_longitude: this.Image[0].longitude,
            photo_type_id: photoType,
            task_evidence_id: evi_id,
            task_note_id: "",
            entities_id: entitiesId,
            last_change_user_id: userId,
            image: this.Image[0].image,
            photo_name: photoName,
            description: photoDescription
        };
        console.log(this.Project);
        //console.log(this.Project.id);
        console.log(reg);
        this.sqliteService.createRegistro(reg, this.navParams.data.item.id, this.item);
        //this.ionViewDidLoad();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], Nuevoregistro2Page.prototype, "slides", void 0);
    Nuevoregistro2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nuevoregistro2',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/nuevoregistro2/nuevoregistro2.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Registrar Foto</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<!--ion-content padding class="no-scroll"-->\n<ion-content padding class="">\n	<!--ion-card>\n		<ion-card-content>\n			<button ion-button color="danger" icon-right block (click)="takePicture();">\n				Tomar Foto\n				<ion-icon name="camera"></ion-icon>\n			</button>\n		</ion-card-content>\n	</ion-card> >\n\n	<ion-list radio-group [(ngModel)]="relationship">\n		<ion-item style="padding:0 45px 0 45px;">\n			<ion-label>Tipo de Foto</ion-label>\n		</ion-item>\n		<ion-item style="padding:0 45px 0 45px;">\n			<ion-label>Avances</ion-label>\n			<ion-radio value="avances" checked (ionSelect)="TipoFoto(1)"></ion-radio>\n		</ion-item>\n		<ion-item style="padding:0 45px 0 45px;">\n			<ion-label>Evidencias</ion-label>\n			<ion-radio value="evidencias" (ionSelect)="TipoFoto(2)"></ion-radio>\n		</ion-item>\n	</ion-list-->\n\n	<form (ngSubmit)="registroSubmit()" style="padding:10px;">\n		<ion-item>\n			<ion-slides>\n				<ion-slide *ngFor="let image of base64Image" (ionSlideDidChange)="slideChanged()">\n					<img [src]="image">\n				</ion-slide>\n			</ion-slides>\n		</ion-item>\n		<div class="list">\n			<!-- <ion-item>\n				<ion-label>Nombre</ion-label>\n				<ion-input id="photo-name" disabled="{{inputDisabled}}" type="text" [(ngModel)]="nombre" name="nombre"></ion-input>\n			</ion-item>\n			<ion-item>\n				<ion-textarea id="description" disabled="{{inputDisabled}}" class="Ts" placeholder="Descripcion" [(ngModel)]="description"\n					name="description"></ion-textarea>\n			</ion-item>\n			<ion-item>\n				<ion-label>Tipo de foto</ion-label>\n				<ion-select id="photo-type" disabled="{{inputDisabled}}" [(ngModel)]="photoType" name="photoType">\n					<ion-option value="1">Avance</ion-option>\n					<ion-option value="2">Evidencia</ion-option>\n				</ion-select>\n			</ion-item> -->\n			<button ion-button id="btn-upload-photo" type="submit" block class="Ts">Crear Registro</button>\n		</div>\n	</form>\n</ion-content>'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/nuevoregistro2/nuevoregistro2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__["a" /* SqliteProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__providers_proveedor1_proveedor1__["a" /* Proveedor1Provider */]])
    ], Nuevoregistro2Page);
    return Nuevoregistro2Page;
}());

//# sourceMappingURL=nuevoregistro2.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_proveedorusers_proveedorusers__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LCrypt = __webpack_require__(723);
var lcrypt = new LCrypt('TTQww2BVROs0PEU8Zc+1TE6NsKs0Y4PHesXnzyXYtRo=');
var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, http, navCtrl, navParams, sqliteService, proveedor) {
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqliteService = sqliteService;
        this.proveedor = proveedor;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    LoginPage.prototype.login = function () {
        var url = this.sqliteService.ip2 + "/login";
        return url;
    };
    LoginPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    LoginPage.prototype.onChangeUserValue = function () {
        var userAux = this.usuario;
        var passwordAux = this.password;
        var element = document.getElementById("btn-login");
        if ((userAux != undefined) && (userAux != "") && (passwordAux != undefined) && (passwordAux != "")) {
            element.disabled = false;
        }
        else {
            element.disabled = true;
        }
    };
    LoginPage.prototype.onChangePasswordValue = function () {
        var userAux = this.usuario;
        var passwordAux = this.password;
        var element = document.getElementById("btn-login");
        if ((userAux != undefined) && (userAux != "") && (passwordAux != undefined) && (passwordAux != "")) {
            element.disabled = false;
        }
        else {
            element.disabled = true;
        }
    };
    LoginPage.prototype.eventHandler = function (keyCode, nextElement) {
        var userAux = this.usuario;
        if ((keyCode == 13) && (userAux != undefined) && (userAux != ""))
            nextElement.setFocus();
    };
    LoginPage.prototype.eventHandlerPassword = function (keyCode, nextElement) {
        var userAux = this.usuario;
        var passwordAux = this.password;
        if ((keyCode == 13) && (userAux != undefined) && (userAux != "") && (passwordAux != undefined) && (passwordAux != ""))
            this.ingresar();
    };
    LoginPage.prototype.ingresar = function () {
        var _this = this;
        var url = this.sqliteService.login();
        var headers2 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers2.append('Content-Type', 'application/json');
        headers2.append('Access-Control-Allow-Origin', '*');
        headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers2.append('Content-Type', 'application/x-www-form-urlencoded');
        //name: this.usuario,
        //password: this.password
        /*
        let data = {
          name:"eyJpdiI6IlN2czJ5MXZzUjIxVDYvcUxLcG9ML0E9PSIsInZhbHVlIjoiYzJXWUZYT1dEQU45Z0x3MTJ6UzkzZz09IiwibWFjIjoiNTI1YTY5NDkzNDQ4YWQ0MDBkNjlmMTNjYjU2ZmMwNjcyZWMzZGVlOGRhNWNjY2FiMWJmMzViNmIyNzY2ZTBlNiJ9",
          password:"eyJpdiI6IlZHSFcyUGdRM3UrSnAzVTJRWThxbEE9PSIsInZhbHVlIjoiWUZ4RmRZU3BhaGc0WWQwZVJ5R0sxUT09IiwibWFjIjoiYzliNDlkNTM2MjRkMmIyNTk4YTM3YWYxMWQyMjFhNjA2YjEwMTdkMTYzMGQ2ZGI5NDYxMTY2Yjk0NzUxZThmMCJ9"
        };
        */
        /* let data = {
          user:"eyJpdiI6Im1Bc1g1NVQ2eExnMHYyaFVqOGtMbmc9PSIsInZhbHVlIjoiY25sM2MxL1JaU05TUFhhTFdmc2lJdz09IiwibWFjIjoiMDE4NzY0YjA4NjYwYzRlZjg4MTUxYWFjZWExOWUzM2Y3ZmM1ZWVjZDRiZGQzODRhYjg0YTZjM2QzNDkyZGNkNCJ9",
          password:"eyJpdiI6IklhUXlQMk0xbGNDTFdpNXNnODBWOHc9PSIsInZhbHVlIjoiSjdRWTZoQTNZZUpYSmdPbXk4U2ZXdz09IiwibWFjIjoiYTdmYjg3ODI1YjY1NzJjY2Q1NjZmMzVjNWE3ZDA1ODUwY2FjZmI4MzZlYjgyYjJkYjY5NmQyNTgzZDg1M2VkMSJ9"
        }; */
        var data = {
            user: this.usuario,
            password: this.password
        };
        var crypt = {
            user: lcrypt.encode(data.user),
            password: lcrypt.encode(data.password)
        };
        console.log("Inicio de Login... " + data.user, data.password);
        console.log("Inicio de Login... " + crypt.user, crypt.password);
        console.log("url: " + url);
        this.http.post(url, JSON.stringify(crypt), { headers: headers2 })
            .subscribe(function (crypt) {
            _this.resToken = crypt.json();
            _this.sqliteService.token = _this.resToken.token;
            _this.sqliteService.UserId = _this.resToken.id;
            _this.sqliteService.entitiesId = _this.resToken.entities_id;
            _this.start_valid_date = _this.resToken.start_valid_date;
            _this.end_valid_date = _this.resToken.end_valid_date;
            _this.last_change_user_id = _this.resToken.last_change_user_id;
            _this.date = _this.resToken.date;
            _this.entities = _this.resToken.entities;
            _this.entities_id = _this.resToken.entities_id;
            _this.error = _this.resToken.error;
            _this.user_type_id = _this.resToken.user_type_id;
            console.log("Token: " + _this.resToken.token);
            console.log("Id: " + _this.resToken.id);
            console.log("start_valid_date: " + _this.resToken.start_valid_date);
            console.log("end_valid_date: " + _this.resToken.end_valid_date);
            console.log("last_change_user_id: " + _this.resToken.last_change_user_id);
            console.log("entities_id: " + _this.resToken.entities_id);
            console.log("error: " + _this.resToken.error);
            console.log("status: " + _this.resToken.status);
            console.log("user_type_id: " + _this.user_type_id);
            /*  if (this.resToken.start_valid_date <= this.date || this.resToken.start_valid_date == null || this.resToken.start_valid_date == '0000-00-00 00:00:00') {
               if (this.resToken.end_valid_date >= this.date || this.resToken.end_valid_date == null || this.resToken.end_valid_date == '0000-00-00 00:00:00') {
             
             if(this.resToken.status == "succes"){
            
             this.navCtrl.setRoot(TabsPage);
             }else{
               let alert1 = this.alertCtrl.create({
                 title: "Login",
                 subTitle: "Datos Invalidos !",
                 buttons: ['Ok']
               });
               alert1.present();
             }
   
           } else {
             let alert2 = this.alertCtrl.create({
               title: "Login",
               subTitle: "El usuario ha caducado",
               buttons: ['Ok']
             });
             alert2.present();
           }
         } else {
           let alert3 = this.alertCtrl.create({
             title: "Login",
             subTitle: "Vigencia no iniciada",
             buttons: ['Ok']
           });
           alert3.present();
         } */
            if (_this.error == 4) {
                var alert3 = _this.alertCtrl.create({
                    title: "Login",
                    subTitle: "Vigencia no iniciada",
                    buttons: ['Ok']
                });
                alert3.present();
            }
            else {
                if (_this.error == 5) {
                    var alert2 = _this.alertCtrl.create({
                        title: "Login",
                        subTitle: "El usuario ha caducado",
                        buttons: ['Ok']
                    });
                    alert2.present();
                }
                else {
                    if (_this.error == "invalid_credentials") {
                        var alert1 = _this.alertCtrl.create({
                            title: "Login",
                            subTitle: "Credenciales Inválidas",
                            buttons: ['Ok']
                        });
                        alert1.present();
                    }
                    else {
                        if (_this.user_type_id == '2' || _this.user_type_id == '1,2') {
                            if (_this.resToken.status === 'succes') {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                            }
                            else {
                                var alert4 = _this.alertCtrl.create({
                                    title: "Login",
                                    subTitle: "No autorizado",
                                    buttons: ['Ok']
                                });
                                alert4.present();
                            }
                        }
                        else {
                            var alert5 = _this.alertCtrl.create({
                                title: "Login",
                                subTitle: "No tiene acceso a la aplicación",
                                buttons: ['Ok']
                            });
                            alert5.present();
                        }
                    }
                }
            }
        }
        /* error => {
        console.log("Error: " + error);
        let alert1 = this.alertCtrl.create({
        title: "Login",
        subTitle: "Datos Invalidos !",
        buttons: ['Ok']
        });
        alert1.present();
        } */
        );
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "passwordInput", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/login/login.html"*/'<ion-content padding class="gradient no-scroll">\n		<!-- <ion-card>\n	<p style="text-align:left;">\n	  <img src="assets/imgs/logos/IKUSI_Logo_470x163.png" style="width:50%;"/>\n	</p>\n  </ion-card> -->\n\n	<div class="spacer" style="width: 100%; height: 30px;"></div>\n\n	<ion-card>\n		<p style="text-align:center;">\n			<!--img src="assets/imgs/logos/SN_logo_single_754x754.png" style="width: 30%; height: 30%;margin: auto;" /-->\n			<img src="assets/imgs/logos/LogoSN_1010x178.png" style="width: 60%; height: 60%;margin: auto;" />\n		</p>\n	</ion-card>\n\n	<div class="spacer" style="width: 100%; height: 100px;"></div>\n\n	<ion-card center>\n		<ion-card-content>\n			<ion-list style="margin-bottom:15px;">\n				<ion-item style="background-color: #fff0;">\n					<ion-icon class="icon-login" item-left name="contact"></ion-icon>\n					<ion-label floating>Usuario</ion-label>\n					<ion-input type="text" class="text-input" [(ngModel)]="usuario" name="usuario"\n						(ionChange)=\'onChangeUserValue()\' (keypress)="eventHandler($event.keyCode, b)"></ion-input>\n				</ion-item>\n				<ion-item style="background-color: #fff0;">\n					<ion-icon class="icon-login" item-left name="lock"></ion-icon>\n					<ion-label floating>Contraseña</ion-label>\n					<ion-input [type]="passwordType" class="text-input" [(ngModel)]="password" #b name="password"\n						(ionChange)=\'onChangePasswordValue()\' (keypress)="eventHandlerPassword($event.keyCode)">\n					</ion-input>\n					<ion-icon item-end [name]="passwordIcon" class="password-icon" (click)=\'hideShowPassword()\'>\n					</ion-icon>\n				</ion-item>\n				<div></div>\n			</ion-list>\n			<div style="margin-top: 40%;" padding>\n				<button id="btn-login" ion-button block (click)="ingresar()" class="btn-login" disabled>Entrar</button>\n				<p style="color:#000; text-align:center; margin-top:10px;">¿Olvidaste tu contraseña?</p>\n			</div>\n		</ion-card-content>\n	</ion-card>\n\n	<!-- <div class="spacer" style="width: 100%; height: 10px;"></div>\n\n  <ion-card>\n	<p style="text-align:center;">\n	  <img src="assets/imgs/logos/SN_logo_single_754x754.png" style="width: 30%; height: 30%;margin: auto;"/>\n	</p>\n  </ion-card> -->\n</ion-content>'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__["a" /* SqliteProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_proveedorusers_proveedorusers__["a" /* ProveedorusersProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tickets_por_tarea_tickets_por_tarea__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ticket_detalle_ticket_detalle__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registro_registro__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__taskevidence_taskevidence__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notas_notas__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_nuevoregistro_nuevoregistro__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_nuevoregistro2_nuevoregistro2__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_sqlite_sqlite__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__api_component__ = __webpack_require__(563);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var DetailPage = /** @class */ (function () {
    function DetailPage(navCtrl, http, navParams, camera, geolocation, sqliteService, alertCtrl, modal) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.camera = camera;
        this.geolocation = geolocation;
        this.sqliteService = sqliteService;
        this.alertCtrl = alertCtrl;
        this.modal = modal;
        this.base64Image = [];
        this.Image = [];
        this.rango = [];
        this.item = navParams.data.task;
        this.sqliteService.tarea_id = this.item.tareaId;
        this.sqliteService.NombreTarea = this.item.nombreTarea;
        this.ip2 = this.sqliteService.ip2;
        this.token = this.sqliteService.token;
        console.log("Tarea id" + this.item.task_id);
        console.log("item " + this.item.defTarea);
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
        this.NombreTarea = this.item.nombreTarea;
        this.NombreTarea = this.sqliteService.NombreTarea;
        this.idTarea = this.item.tareaId;
        this.idTarea = this.sqliteService.tarea_id;
        console.log("id Tarea " + this.item.tareaId);
        console.log("nombre Tarea " + this.NombreTarea);
        this.mostrarPorcentaje(event);
        this.iniciarInstalado();
    };
    DetailPage.prototype.iniciarInstalado = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_13__api_component__["a" /* enlace */] + "sumaInstalado";
        var data = {
            tarea: this.sqliteService.GetTareaId(),
            proyecto: this.sqliteService.GerProjectId(),
        };
        this.http.post(url, JSON.stringify(data), { headers: __WEBPACK_IMPORTED_MODULE_13__api_component__["b" /* headers2 */] }).subscribe(function (Response) {
            var respuesta = Response.json();
            respuesta.forEach(function (element) {
                element.TotalInstalado;
                _this.avanceActual = element.TotalInstalado;
                console.log("Avance Actual: " + _this.avanceActual);
            });
        });
    };
    DetailPage.prototype.openModal = function () {
        var item = this.navParams.data.task;
        var myModal = this.modal.create('ModalPage', { item: item });
        myModal.present();
    };
    DetailPage.prototype.showPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Agregar',
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked' + JSON.stringify(data));
                    }
                }
            ]
        });
        prompt.present();
    };
    DetailPage.prototype.swipeEvent = function (e) {
        if (e.direction == 4) {
            //console.log("izquierda");
            this.navCtrl.pop();
        }
    };
    DetailPage.prototype.mostrarPorcentaje = function (event) {
        /* this.knobValues
        console.log(event.value); */
        var _this = this;
        var headers2 = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]();
        headers2.append('Accept', 'application/json');
        headers2.append('content-type', 'application/json');
        headers2.append('Authorization', 'Bearer ' + this.token);
        var data = { id: this.idTarea };
        var url = this.ip2 + "/buscarPorcentaje";
        this.http.post(url, JSON.stringify(data), { headers: headers2 }).subscribe(function (data) {
            var knobValuess = data.json();
            _this.knobValues = knobValuess.porcentaje;
            console.log("porcentaje " + _this.knobValues);
        });
    };
    DetailPage.prototype.porcentaje = function (event) {
        var _this = this;
        //this.knobValues 
        console.log(event);
        var headers2 = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]();
        headers2.append('Accept', 'application/json');
        headers2.append('content-type', 'application/json');
        headers2.append('Authorization', 'Bearer ' + this.token);
        this.rango.push(event);
        console.log("Array porcentaje " + JSON.stringify(this.rango));
        var data = {
            id: this.idTarea,
            completed_percentage: event
        };
        var url = this.ip2 + "/actualizarPorcentaje";
        this.http.post(url, JSON.stringify(data), { headers: headers2 }).subscribe(function (data) {
            var knobValuess = data.json();
            _this.knobValues = knobValuess.completed_percentage;
            console.log("porcentaje " + _this.knobValues);
        });
    };
    /*
    OpenCamera(){
      this.navCtrl.push(PicturePage);
    }
     OpenNotas(){
      this.navCtrl.push(NotasPage);
    }
     OpenRegistro(){
      let item = this.navParams.data.item;
      console.log("Selected Item", item);
      this.navCtrl.push(RegistroPage);
    }
      OpenTickets(){
        let item = this.navParams.data.item;
        console.log("Selected Item", item);
      this.navCtrl.push(TicketsPage, { item: item });
    }
    */
    DetailPage.prototype.Open = function (page) {
        var item = this.navParams.data.task;
        console.log("Selected Item", item);
        console.log(page);
        switch (page) {
            case "notas": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__notas_notas__["a" /* NotasPage */], { item: item });
                break;
            }
            case "avance": {
                this.sqliteService.tipofoto = "1";
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__registro_registro__["a" /* RegistroPage */], { item: item });
                break;
            }
            case "evidencia": {
                this.sqliteService.tipofoto = "2";
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__taskevidence_taskevidence__["a" /* TaskevidencePage */], { item: item });
                break;
            }
            case "tickets": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tickets_por_tarea_tickets_por_tarea__["a" /* TicketsPorTareaPage */], { item: item });
                break;
            }
            case "photo": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_nuevoregistro_nuevoregistro__["a" /* NuevoregistroPage */], { item: item });
                break;
            }
            case "photoGallery": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_nuevoregistro2_nuevoregistro2__["a" /* Nuevoregistro2Page */], { item: item });
                break;
            }
        }
    };
    DetailPage.prototype.ticketSelected = function (ticket) {
        //console.log("Selected Ticket", ticket);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__ticket_detalle_ticket_detalle__["a" /* TicketDetallePage */], { ticket: ticket });
    };
    DetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detail',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/detail/detail.html"*/'<ion-header>\n  <ion-navbar>\n    <!--ion-title><img src="assets/imgs/icon.png" width="20%"/> TAREA</ion-title-->\n    <span style="font-size: 17px; color: #fff">{{ item.nombreTarea }} </span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <div (swipe)="swipeEvent($event)">\n  <!--h2>Descripción de Tarea</h2>\n  <ion-input type="text" value="{{ item.Descrip }}"></ion-input>\n  <ion-list >\n    <ion-item  class="sec2" >\n      <ion-label  style="text-transform: uppercase;text-align:center;padding:5px;    color: #000 !important;">{{ item.heading }}</ion-label>>\n      <ion-input type="text" value="{{ item.title }}"></ion-input>\n    </ion-item>\n  </ion-list-->\n  <!--ion-label style="padding:10px;font-weight:bolder;font-size:20px;    margin: 0px;">Nombre de Tarea</ion-label>\n  <ion-item style="padding:10px;">\n    <p style="text-align:justify;">\n      {{ item.nombreTarea }} \n    </p>\n  </ion-item-->\n  <ion-grid>\n    <ion-row justify-content-start class="row-detail">\n      <ion-col col-12>\n        <ion-label class="labels-detail">Descripcion</ion-label>\n        <p class="descriptions-detail">\n          {{ item.description }}\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-start class="row-detail">\n      <ion-col col-12>\n        <ion-label class="labels-detail">Categoria</ion-label>\n        <p class="descriptions-detail">\n          {{ item.categoria }}\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-start class="row-detail">\n      <ion-col col-12>\n        <ion-label class="labels-detail">Subcategoria</ion-label>\n        <p class="descriptions-detail">\n          {{ item.subcategoria }}\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-start class="row-detail">\n      <ion-col col-12>\n        <ion-label class="labels-detail">Unidad</ion-label>\n        <p class="descriptions-detail">\n          {{ item.unidad }}\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-start class="row-detail">\n      <ion-col col-12>\n        <ion-label class="labels-detail">Cantidad</ion-label>\n        <p class="descriptions-detail">\n          {{ item.cantidad }}\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-start class="row-detail">\n      <ion-col col-12>\n        <ion-label class="labels-detail">Instalado</ion-label>\n        <!-- <p class="descriptions-detail">\n          {{ avanceActual }}\n        </p> -->\n        <ion-input  value="{{ avanceActual }}" readonly onLoad="iniciarInsalado()"></ion-input>\n        \n        <button ion-button (click)="openModal()">Agregar </button>\n          \n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-start>\n      <ion-col col-12>\n          <ion-label class="labels-detail">Porcentaje de avance: <span style="background: #488AFF; border-radius: 10px; color:white; padding: 0px 11px; font-size: 17px;"> {{ knobValues }} </span></ion-label>\n        <ion-item class="items-detail">\n            \n                <ion-select [(ngModel)]="knobValues" (ionChange)="porcentaje($event)">\n                  <ion-option value="0">0%</ion-option>\n                  <ion-option value="20">20%</ion-option>\n                  <ion-option value="40">40%</ion-option>\n                  <ion-option value="50">50%</ion-option>\n                  <ion-option value="60">60%</ion-option>\n                  <ion-option value="80">80%</ion-option>\n                  <ion-option value="100">100%</ion-option>\n                </ion-select>\n                \n              \n          <!-- ion-range min="0" max="100"  color="secondary" pin="true" [(ngModel)]="item.completion_percent">\n            <ion-label range-left>0</ion-label>\n            <ion-label range-right>100</ion-label>\n          </ion-range> -->\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-start class="row-detail">\n      <ion-col col-12>\n        <ion-label class="labels-detail">Subcontrata</ion-label>\n        <p class="descriptions-detail">\n          {{ item.subcontrata }}\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-start class="row-detail">\n      <ion-col col-12>\n        <ion-label class="labels-detail">Empleado</ion-label>\n        <p class="descriptions-detail">\n          {{ item.empleado }}\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-start class="row-detail">\n      <ion-col size="12">\n        <ion-label class="labels-detail">Fechas</ion-label>\n        <ion-col size="4">\n          <ion-icon class="" item-left name="calendar"></ion-icon> {{ item.fechaInicio }}\n        </ion-col>\n        <ion-col size="4">\n          a\n        </ion-col>\n        <ion-col size="4">\n          <ion-icon class="" item-left name="calendar"></ion-icon> {{ item.fechaFin }}\n        </ion-col>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-start class="row-detail">\n      <ion-col col-12>\n        <ion-label class="labels-detail">Estatus</ion-label>\n        <p class="descriptions-detail">\n          {{ item.estatus }}\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row class="actions-detail">\n      <ion-col size="12">\n        <!-- <ion-col size="6">\n          <button class="actions-detail-button-width" ion-button icon-right round (click)="Open(\'avance\')">\n            AVANCE\n            <ion-icon name="images"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col size="6">\n          <button class="actions-detail-button-width" ion-button icon-right round (click)="Open(\'evidencia\')">\n            EVIDENCIA\n            <ion-icon name="grid"></ion-icon>\n          </button>\n        </ion-col> -->\n      </ion-col>\n    </ion-row>\n    <ion-row class="actions-detail">\n      <ion-col size="12">\n        <ion-col size="6">\n         <!--  <button class="actions-detail-button-width" ion-button icon-right round (click)="Open(\'notas\')">\n            NOTAS\n            <ion-icon name="clipboard"></ion-icon>\n          </button> -->\n        </ion-col>\n        <ion-col size="6">\n          <!-- <button class="actions-detail-button-width" ion-button icon-right round (click)="Open(\'tickets\')">\n            TICKETS\n            <ion-icon name="build"></ion-icon>\n          </button> -->\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--div class="show-list-numbers-and-dots">\n    <p style="color:#000000;font-size:19px;">\n      <strong>{{ item.Descrip }}</strong>\n    </p>\n  </div>\n  <form id="canalizaciNCCTV-form3" class="list">\n    <ion-item class="range range-positive" id="canalizaciNCCTV-range1">Avance\n      <input type="range" value="50" min="0" max="100" step="1">\n    </ion-item>\n  </form>\n  <div id="canalizaciNCCTV-button-bar1" class="button-bar">\n    <button id="canalizaciNCCTV-button5" class="button button-dark button-block icon ion-ios-camera"></button>\n    <button id="canalizaciNCCTV-button6" class="button button-dark button-block icon ion-android-attach"></button>\n    <button id="canalizaciNCCTV-button7" class="button button-dark button-block icon ion-android-clipboard"></button>\n  </div-->\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n      <!-- <ion-row>\n          <ion-col size="2">\n              \n              <ion-label class="labels-detail">Porcentaje de avance: <span style="background: #488AFF; border-radius: 10px; color:white; padding: 0px 11px;"> {{ knobValues }} </span></ion-label>\n            \n              <ion-item style="margin-top: 10px">\n                \n                \n                    <ion-range min="0" max="100" pin="true" snaps="true" style="padding-top: 20px" [(ngModel)]="knobValues" (ionChange)="porcentaje($event)" >\n                  \n                  <ion-label range-left>0</ion-label>\n                  <ion-label range-right>100</ion-label>\n                </ion-range>\n              </ion-item>\n            \n            \n            </ion-col>\n      </ion-row>   -->\n    <ion-row>\n      \n      <ion-col size="12">\n        <!-- <ion-col size="6">\n          <ion-icon class="icon-action-buttons" name="camera" (click)="Open(\'photo\')"></ion-icon>\n        </ion-col>\n        <ion-col size="6">\n          <ion-icon class="icon-action-buttons" name="images" (click)="Open(\'photoGallery\')"></ion-icon>\n        </ion-col> -->\n        <ion-col size="6">\n          <button class="actions-detail-button-width" ion-button icon-right round (click)="Open(\'avance\')">\n            AVANCE\n            <ion-icon name="images"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col size="6">\n          <button class="actions-detail-button-width" ion-button icon-right round (click)="Open(\'evidencia\')">\n            EVIDENCIA\n            <ion-icon name="grid"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/detail/detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_12__providers_sqlite_sqlite__["a" /* SqliteProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], DetailPage);
    return DetailPage;
}());

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketsPorTareaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tickets_tickets__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ticket_detalle_ticket_detalle__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/* Generated class for the TicketsPorTareaPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var TicketsPorTareaPage = /** @class */ (function () {
    function TicketsPorTareaPage(navCtrl, http, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.tickets = [];
        this.item = navParams.data.item;
        var url = "http://10.10.1.108:81/apiservice/public/api/v1/tasks/" + this.item.id + /tickets/;
        this.http.get(url).subscribe(function (data) {
            _this.tickets = data.json();
            console.log(data.json());
        });
    }
    TicketsPorTareaPage.prototype.Open = function (page, ticket) {
        var item = this.navParams.data.item;
        console.log("Selected Item", item);
        console.log(page);
        switch (page) {
            case "D": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ticket_detalle_ticket_detalle__["a" /* TicketDetallePage */], { ticket: ticket, item: item });
                break;
            }
            case "N": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__Tickets_tickets__["a" /* TicketsPage */], { item: item });
                break;
            }
        }
    };
    TicketsPorTareaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TicketsPorTareaPage');
    };
    TicketsPorTareaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tickets-por-tarea',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/tickets-por-tarea/tickets-por-tarea.html"*/'<!--\n  Generated template for the TicketsPorTareaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>TicketsPorTarea</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n  <ion-item *ngIf="tickets.length == 0"> \n      <div class="sec2">\n       <p class="fontPrimaria" style="padding:20px;margin: 0px;">\n       No hay tickets abiertos actualmente</p></div>\n </ion-item>\n\n        <button ion-item *ngFor="let ticket of tickets "  (click)="Open(\'D\', ticket)" >\n            <div class="row">\n          <div class="col col-4  ticketTaG">{{ ticket.created_at}}</div>\n          \n          <div class="col col-4  ticketTa">{{ ticket.status}}</div>\n          <div class="col col-4  ticketTa">{{ ticket.priority}}</div></div>\n          <div class="row">\n          <div class="col col-12  ticketTa">  <span style=" font-weight:800;color:#000;">Asunto:</span> {{ ticket.subject}}</div>\n          </div>\n      </button> \n\n  </ion-list>\n\n   <button ion-button icon-right (click)="Open(\'N\')">\n        CREAR NUEVO TICKETS \n        <ion-icon name="build"></ion-icon>\n      </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/tickets-por-tarea/tickets-por-tarea.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TicketsPorTareaPage);
    return TicketsPorTareaPage;
}());

//# sourceMappingURL=tickets-por-tarea.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketComentarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TicketComentarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TicketComentarioPage = /** @class */ (function () {
    function TicketComentarioPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    TicketComentarioPage.prototype.closeComentario = function () {
        this.view.dismiss();
    };
    TicketComentarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TicketComentarioPage');
    };
    TicketComentarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ticket-comentario',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/ticket-comentario/ticket-comentario.html"*/'<!--\n  Generated template for the TicketComentarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nuevo comentario</ion-title>\n    <ion-buttons end ><button ion-button (click)="closeComentario()">Close</button></ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form ng-submit="comentarioSubmit()">\n  	<div class="list" style="    padding: 13px;">\n  		\n          \n       \n         <ion-textarea class="Ts" placeholder="Comentario" \n         ></ion-textarea></div> <div padding>\n           <button ion-button block (click) = "comentarioSubmit()">Enviar</button></div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/ticket-comentario/ticket-comentario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], TicketComentarioPage);
    return TicketComentarioPage;
}());

//# sourceMappingURL=ticket-comentario.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Detail2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ticket_detalle_ticket_detalle__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sqlite_sqlite__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nuevoregistroevidencia_nuevoregistroevidencia__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nuevoregistroevidencia2_nuevoregistroevidencia2__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__registro_detalle_registro_detalle__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_popover_popover__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operators__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase_firestore__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_fire_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_firestore__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_throw__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

















/**
 * Generated class for the Detail2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Detail2Page = /** @class */ (function () {
    /* doRefresh(refresher) {
      console.log('Begin async operation', refresher);
    
      setTimeout(() => {
        this.LoadData();
          refresher.complete();
        }, 2000);
      } */
    function Detail2Page(navCtrl, http, navParams, camera, geolocation, sqliteService, nav, popoverController, alertCtrl, storage, firestore) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.camera = camera;
        this.geolocation = geolocation;
        this.sqliteService = sqliteService;
        this.nav = nav;
        this.popoverController = popoverController;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.firestore = firestore;
        this.base64Image = [];
        this.Image = [];
        this.item = navParams.data.task;
        this.norma = navParams.data.norma;
        this.FBcode = navParams.data.item;
        this.tareas = navParams.data.items;
        this.evidencia = navParams.data.evidencia;
        this.sqliteService.idTipoNorma = this.item.policy_type_id;
        this.sqliteService.idNorma = this.item.policy_id;
        this.sqliteService.specificacionNorma = this.item.policy_specification_id;
        console.log("id tipo de norma " + this.item.policy_type_id);
        console.log("id norma " + this.item.policy_id);
        console.log("id de especificacion de norma " + this.item.policy_specification_id);
        console.log("desconocido " + this.navParams.data.item);
        console.log("desconocido " + JSON.stringify(this.tareas));
        //this.LoadData(); 
        /* {
                this.events.subscribe('handleReloadListPhoto', statsData => {
                    this.LoadData();
                });
            } */
    }
    Detail2Page.prototype.swipeEvent = function (e) {
        //this.navCtrl.push(TaskevidencePage);
        //console.log(e.direction);
        if (e.direction == 4) {
            console.log("izquierda");
            this.navCtrl.pop();
        }
    };
    Detail2Page.prototype.presentPopover = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: __WEBPACK_IMPORTED_MODULE_10__components_popover_popover__["a" /* PopoverComponent */],
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Detail2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
        console.log("norma: " + JSON.stringify(this.FBcode));
        this.LoadData();
        //this.doRefresh(0);
    };
    /*
    OpenCamera(){
      this.navCtrl.push(PicturePage);
    }
     OpenNotas(){
      this.navCtrl.push(NotasPage);
    }
     OpenRegistro(){
      let item = this.navParams.data.item;
      console.log("Selected Item", item);
      this.navCtrl.push(RegistroPage);
    }
      OpenTickets(){
        let item = this.navParams.data.item;
        console.log("Selected Item", item);
      this.navCtrl.push(TicketsPage, { item: item });
    }
    */
    Detail2Page.prototype.LoadData = function () {
        /* this.ip2 = this.sqliteService.ip2;
        this.token = this.sqliteService.token; */
        //let url = "";
        var _this = this;
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
        var ProjectId = this.sqliteService.GerProjectId();
        var tipoFoto = this.sqliteService.GerTipoFoto();
        var idTipoNorma = this.sqliteService.GeridTipoNorma();
        var idNorma = this.sqliteService.GeridNorma();
        var specificacionNorma = this.sqliteService.GerspecificacionNorma();
        var taskId = this.sqliteService.GetTareaId();
        /* let data = {
          policy_types_id:idTipoNorma,
          policy_id: idNorma,
          policy_specification_id:specificacionNorma,
          task_id: taskId
        }; */
        //console.log("data: " + JSON.stringify(data));
        /* Firebase */
        this.collection = this.firestore.collection("fotosEvidencia/" + taskId + "/fotos", function (ref) { return ref.where("identificador", "==", _this.FBcode); }) /* .doc(`${this.idTarea}`).collection(`${this.firebaseId}`) */;
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
    };
    /* takePicture() {
      //this.geolocationNative();
      this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
        const options: CameraOptions = {
          quality: 100,
              destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          targetWidth: 1024,
          targetHeight: 1600,
          saveToPhotoAlbum: true,
               correctOrientation: true
            }
        
        this.camera.getPicture(options).then((imageData) => {
          // imageData is either a base64 encoded string or a file URI
          // If it's base64:
    
          console.log('imageData: ' + imageData);
          
          if(imageData == true){
            console.log("Se tomo la foto");
          }
          else{
            console.log("No se tomo la foto");
          }
    
          this.base64Image.push('data:image/jpeg;base64,' + imageData)
          this.Image.push({ image: 'data:image/jpeg;base64,' + imageData, latitude: geoposition.coords.latitude.toString(), longitude: geoposition.coords.longitude.toString() })
          // this.Image.push(imageData)
        },
        (err) => {
          // Handle error
        });
      })
    } */
    Detail2Page.prototype.takePicturesCamera = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, result, image, a, tareaid, idd, file, filePath, pictures, task, tar;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            /* sourceType: this.camera.PictureSourceType.PHOTOLIBRARY, */
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            targetWidth: 1024,
                            targetHeight: 768,
                            saveToPhotoAlbum: true,
                            correctOrientation: true
                        };
                        this.geolocation.getCurrentPosition().then(function (resp) {
                            console.log("Coordenadas 1: " + resp.coords.latitude, resp.coords.longitude);
                            _this.latitud = resp.coords.latitude;
                            _this.longitud = resp.coords.longitude;
                            console.log(_this.latitud, _this.longitud);
                        }).catch(function (error) {
                            console.log('Error getting location', error);
                        });
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        result = _a.sent();
                        image = "data:image/jpeg;base64," + result;
                        a = Date();
                        tareaid = this.sqliteService.GetTareaId();
                        idd = Math.random().toString(36).substring(2);
                        file = "data:image/jpeg;base64," + result;
                        filePath = "fotosEvidencia/" + tareaid + "/" + this.FBcode + "/" + idd;
                        pictures = this.storage.ref(filePath);
                        task = pictures.putString(image, 'data_url');
                        pictures.getDownloadURL().subscribe(function (ur) {
                            console.log("nueva funcion: " + ur);
                        });
                        console.log("a punto de entrar");
                        tar = parseFloat(tareaid);
                        task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["finalize"])(function () { return pictures.getDownloadURL().subscribe(function (url) {
                            _this.datas = {
                                key: idd,
                                identificador: _this.FBcode,
                                nombre: "Foto de evidencia de la tarea: " + _this.tareas.nombreTarea + ". Foto desde la cámara",
                                url: url,
                                idTarea: tar,
                                latitud: _this.latitud,
                                longitud: _this.longitud
                            };
                            console.log(JSON.stringify(_this.datas));
                            _this.firestore.collection('fotosEvidencia').doc("" + tar).collection('fotos').add(_this.datas);
                        }); })).subscribe();
                        return [2 /*return*/];
                }
            });
        });
    };
    Detail2Page.prototype.takePicturesCameras = function () {
        //this.geolocationNative();
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (geoposition) {
            var options = {
                quality: 100,
                destinationType: _this.camera.DestinationType.DATA_URL,
                /* sourceType: this.camera.PictureSourceType.PHOTOLIBRARY, */
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
                targetWidth: 1024,
                targetHeight: 768,
                saveToPhotoAlbum: true,
                correctOrientation: true
            };
            _this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                _this.base64Image.push('data:image/jpeg;base64,' + imageData);
                _this.Image.push({ image: 'data:image/jpeg;base64,' + imageData, latitude: geoposition.coords.latitude.toString(), longitude: geoposition.coords.longitude.toString() });
                // this.Image.push(imageData)
                var userId = _this.sqliteService.GerUserId();
                var IdProject = _this.sqliteService.GerProjectId();
                var tareaid = _this.sqliteService.GetTareaId();
                var idTipoNorma = _this.sqliteService.GeridTipoNorma();
                var idNorma = _this.sqliteService.GeridNorma();
                var specificacionNorma = _this.sqliteService.GerspecificacionNorma();
                var photoType = '2';
                var entitiesId = _this.sqliteService.GetEntitiesId();
                var photoName = "Foto_de_evidencia_de_la_Tarea:_" + _this.sqliteService.GerNombreTarea();
                var photoDescription = "Foto_de_evidencia_de_la_Tarea:_" + _this.sqliteService.GerNombreTarea() + "._Foto_cargada_de_Cámara_del_movil";
                var tphoto = 2;
                var evi_id = 0;
                _this.AvaEvi = "Evidencia";
                var idd = Math.random().toString(36).substring(2);
                /* const file = this.Image[0].image; */
                var file = "data:image/jpeg;base64," + _this.Image[0].image;
                var filePath = "fotosEvidencia/" + tareaid + "/" + _this.FBcode + "/" + idd;
                var ref = _this.storage.ref(filePath);
                var task = _this.storage.upload(filePath, file);
                task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["finalize"])(function () { return ref.getDownloadURL().subscribe(function (url) {
                    console.log(url);
                    /* let datas = {
                        key: idd,
                        identificador: sessionStorage.getItem('FirebaseCode'),
                        nombre:idd,
                        url: url,
                        idTarea: tareaid,
                    }
                    console.log(datas);
                    this.firestore.collection('fotosEvidencia').doc(tareaid).collection('fotos').add(datas); */
                }); })).subscribe();
                /* let reg = {
                        task_id: tareaid,
                        project_id: IdProject,
                        photo_clasification_id: "1",
                        geo_latitude: this.Image[0].latitude,
                        geo_longitude: this.Image[0].longitude,
                        photo_type_id: photoType,
                        task_evidence_id: evi_id,
                        task_note_id: "",
                        entities_id: entitiesId,
                        last_change_user_id: userId,
                        image: this.Image[0].image,
                        photo_name: photoName,
                  description: photoDescription,
                  policy_types_id: idTipoNorma,
                  policy_id: idNorma,
                  policy_specification_id: specificacionNorma
            
                }; */
                /*console.log(this.Project);
                console.log(this.Project.id);
                console.log("reg "+JSON.stringify(reg));
                 console.log(this.navParams.data.item.id);
            console.log(this.item); */
                //this.sqliteService.createRegistro2(reg);
                var headers2 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                headers2.append('Content-Type', 'application/json');
                headers2.append('Access-Control-Allow-Origin', '*');
                headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
                headers2.append('Content-Type', 'application/x-www-form-urlencoded');
                headers2.append('Authorization', 'Bearer ' + _this.token);
                //const requestOptions = new RequestOptions({ headers: headers2 });
                //var dato = Array.of(registro);
                /* var id = reg["photo_type_id"];
                console.log("photo_type_id1: " + id);
                let url = this.ip2 + '/uploadPhoto'; */
                /* `http://198.50.116.250/apinetwork/public/index.php/api/registros` */
                /* this.http.post(url, JSON.stringify(reg), { headers: headers2 })
                    .subscribe(data => {
                        
                console.log("photo_type_id2: " + id);
                
                        let alert1 = this.alertCtrl.create({
                            title: "Registro",
                            subTitle: "Imagen guardada con exito!",
                            buttons: [{
                    text: 'Ok',
                    
                                handler: () => {
                                    this.ionViewDidLoad();
                                  }
                            }]
                        });
                        alert1.present();
                        if(alert1.present()){
                            console.log("alert.present "+id);
                        }
                        
                    
                        //this.events.publish('handlePhotoOk', '');
                        //let nav = this.app.getActiveNav();
        
                        //this.app.getRootNav().setRoot(RegistroPage, { item: item });
                    },
                    error => {
                        console.log(error);
                        
                        let alert1 = this.alertCtrl.create({
                            title: "Registro",
                            subTitle: "Error al guardar Foto!",
                            buttons: ['Ok']
                        });
                        alert1.present();
                    }
                    ); */
            }, function (err) {
                // Handle error
            });
        });
    };
    Detail2Page.prototype.takePicturesGallery = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, result, image, a, tareaid, idd, file, filePath, pictures, task, tar;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
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
                        };
                        this.geolocation.getCurrentPosition().then(function (resp) {
                            console.log("Coordenadas 1: " + resp.coords.latitude, resp.coords.longitude);
                            _this.latitud = resp.coords.latitude;
                            _this.longitud = resp.coords.longitude;
                        }).catch(function (error) {
                            console.log('Error getting location', error);
                        });
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        result = _a.sent();
                        image = "data:image/jpeg;base64," + result;
                        a = Date();
                        tareaid = this.sqliteService.GetTareaId();
                        idd = Math.random().toString(36).substring(2);
                        file = "data:image/jpeg;base64," + result;
                        filePath = "fotosEvidencia/" + tareaid + "/" + this.FBcode + "/" + idd;
                        pictures = this.storage.ref(filePath);
                        task = pictures.putString(image, 'data_url');
                        pictures.getDownloadURL().subscribe(function (ur) {
                            console.log("nueva funcion: " + ur);
                        });
                        console.log("a punto de entrar");
                        tar = parseFloat(tareaid);
                        task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_11_rxjs_operators__["finalize"])(function () { return pictures.getDownloadURL().subscribe(function (url) {
                            _this.datas = {
                                key: idd,
                                identificador: _this.FBcode,
                                nombre: "Foto de evidencia de la tarea: " + _this.tareas.nombreTarea + ". Foto desde la galería",
                                url: url,
                                idTarea: tar,
                                latitud: _this.latitud,
                                longitud: _this.longitud
                            };
                            console.log(JSON.stringify(_this.datas));
                            _this.firestore.collection('fotosEvidencia').doc("" + tar).collection('fotos').add(_this.datas);
                        }); })).subscribe();
                        return [2 /*return*/];
                }
            });
        });
    };
    Detail2Page.prototype.takePicturesGalleryss = function () {
        //this.geolocationNative();
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (geoposition) {
            var options = {
                quality: 100,
                destinationType: _this.camera.DestinationType.DATA_URL,
                sourceType: _this.camera.PictureSourceType.SAVEDPHOTOALBUM,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
                targetWidth: 1024,
                targetHeight: 768,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };
            _this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                _this.base64Image.push('data:image/jpeg;base64,' + imageData);
                _this.Image.push({ image: 'data:image/jpeg;base64,' + imageData, latitude: geoposition.coords.latitude.toString(), longitude: geoposition.coords.longitude.toString() });
                // this.Image.push(imageData)
                var userId = _this.sqliteService.GerUserId();
                var IdProject = _this.sqliteService.GerProjectId();
                var tareaid = _this.sqliteService.GetTareaId();
                var idTipoNorma = _this.sqliteService.GeridTipoNorma();
                var idNorma = _this.sqliteService.GeridNorma();
                var specificacionNorma = _this.sqliteService.GerspecificacionNorma();
                var photoType = '2';
                var entitiesId = _this.sqliteService.GetEntitiesId();
                var photoName = "Foto_de_evidencia_de_la_Tarea:_" + _this.sqliteService.GerNombreTarea();
                var photoDescription = "Foto_de_evidencia_de_la_Tarea:_" + _this.sqliteService.GerNombreTarea() + "._Foto_cargada_de_Galeria_del_movil";
                var tphoto = 2;
                var evi_id = 0;
                _this.AvaEvi = "Evidencia";
                var reg = {
                    task_id: tareaid,
                    project_id: IdProject,
                    photo_clasification_id: "1",
                    geo_latitude: _this.Image[0].latitude,
                    geo_longitude: _this.Image[0].longitude,
                    photo_type_id: photoType,
                    task_evidence_id: evi_id,
                    task_note_id: "",
                    entities_id: entitiesId,
                    last_change_user_id: userId,
                    image: _this.Image[0].image,
                    photo_name: photoName,
                    description: photoDescription,
                    policy_types_id: idTipoNorma,
                    policy_id: idNorma,
                    policy_specification_id: specificacionNorma
                };
                /*console.log(this.Project);
                console.log(this.Project.id);
                console.log("reg "+JSON.stringify(reg));
                 console.log(this.navParams.data.item.id);
            console.log(this.item); */
                //this.sqliteService.createRegistro2(reg);
                var headers2 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                headers2.append('Content-Type', 'application/json');
                headers2.append('Access-Control-Allow-Origin', '*');
                headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
                headers2.append('Content-Type', 'application/x-www-form-urlencoded');
                headers2.append('Authorization', 'Bearer ' + _this.token);
                //const requestOptions = new RequestOptions({ headers: headers2 });
                console.log(JSON.stringify(reg));
                //var dato = Array.of(registro);
                var id = reg["photo_type_id"];
                console.log("photo_type_id1: " + id);
                var url = _this.ip2 + '/uploadPhoto';
                //`http://198.50.116.250/apinetwork/public/index.php/api/registros`
                _this.http.post(url, JSON.stringify(reg), { headers: headers2 })
                    .subscribe(function (data) {
                    console.log("photo_type_id2: " + id);
                    var alert1 = _this.alertCtrl.create({
                        title: "Registro",
                        subTitle: "Imagen guardada con exito!",
                        buttons: [{
                                text: 'Ok',
                                handler: function () {
                                    _this.ionViewDidLoad();
                                }
                            }]
                    });
                    alert1.present();
                    if (alert1.present()) {
                        console.log("alert.present " + id);
                    }
                    //this.events.publish('handlePhotoOk', '');
                    //let nav = this.app.getActiveNav();
                    //this.app.getRootNav().setRoot(RegistroPage, { item: item });
                }, function (error) {
                    console.log(error);
                    var alert1 = _this.alertCtrl.create({
                        title: "Registro",
                        subTitle: "Error al guardar Foto!",
                        buttons: ['Ok']
                    });
                    alert1.present();
                });
            }, function (err) {
                // Handle error
            });
        });
    };
    Detail2Page.prototype.Open = function (page, registro) {
        var item = this.navParams.data.task;
        console.log("Selected Item", item);
        console.log(page);
        switch (page) {
            case "photo": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__nuevoregistroevidencia_nuevoregistroevidencia__["a" /* NuevoregistroevidenciaPage */], { item: item });
                break;
            }
            case "photoGallery": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__nuevoregistroevidencia2_nuevoregistroevidencia2__["a" /* Nuevoregistroevidencia2Page */], { item: item });
                break;
            }
            case "D": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__registro_detalle_registro_detalle__["a" /* RegistroDetallePage */], { registro: registro, item: item });
                break;
            }
        }
    };
    Detail2Page.prototype.ticketSelected = function (ticket) {
        //console.log("Selected Ticket", ticket);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ticket_detalle_ticket_detalle__["a" /* TicketDetallePage */], { ticket: ticket });
    };
    Detail2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detail2',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/detail2/detail2.html"*/'<!--\nGenerated template for the RegistroPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<!--ion-title><img src="assets/imgs/icon.png" width="20%"/> REGISTROS-->\n		<ion-title style="width: 100%;\n		height: 100%;\n		text-align: center;\n		padding: unset">\n			<!-- <ion-icon style="font-size: 2.0em; margin-left:80%;" ios="ios-attach" md="md-add" (click)="Open(\'photo\')"></ion-icon> -->\n			<ion-icon style="font-size: 2.0em; margin-left:80%;" ios="ios-attach" md="md-add" (click)="takePicturesCamera()"></ion-icon>\n		<!-- <ion-icon style="font-size: 2.0em; margin-left:80%;" ios="ios-attach" md="md-add" (click)="presentPopover()"></ion-icon> -->\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n		<!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n				<ion-refresher-content>\n				</ion-refresher-content>\n			  </ion-refresher>\n	<div (swipe)="swipeEvent($event)"> -->			  \n	<ion-list>\n		<!-- <ion-item *ngIf="registros == 0; else elseBlock">\n			<div class="sec2">\n				<p class="fontPrimaria" style="padding:20px;margin: 0px;">\n					Aun no hay fotos de Evidencia que mostrar\n				</p>\n			</div>\n		</ion-item> -->\n\n		<!-- <ng-template #elseBlock> -->\n		<ion-item style="padding: 20px;" *ngFor="let item of todo | async" >\n			<div *ngIf="FBcode == item.identificador">\n				<ion-item >\n			<ion-avatar item-start style="border-radius: 0;" (click)="Open(\'D\', item)">\n				<img style="width: 200px; height: 150px; border: #FDC938 3px solid; border-radius: 0;" [src]="item.url">\n			</ion-avatar>\n			<ion-note item-end>\n				<!-- <h3 style="font-size: 20px; color: #404040;"><b>Nombre:</b> {{ registro.photoName }}</h3>\n				<h3 style="font-size: 12px; color: #404040;"><b>Descripción:</b> {{ registro.description }}</h3>\n				<h3 style="font-size: 12px; color: #404040;"><b>Latitud:</b> {{ registro.geoLatitude }}</h3>\n				<h3 style="font-size: 12px; color: #404040;"><b>Longitud:</b> {{ registro.geoLongitude }}</h3> -->\n				<h3 style="font-size: 12px; color: #404040;"><b>¿Quién la subió?:</b> {{ item.nombre }}</h3>\n				<!-- <h3 style="font-size: 12px; color: #404040;"><b>Fecha - Hora:</b> {{ registro.creationDate }}</h3> -->\n			</ion-note>\n				</ion-item>\n		</div>\n		\n		</ion-item>\n		<!-- </ng-template> -->\n	</ion-list>\n<!-- </div> -->\n</ion-content>\n<ion-footer>\n	<ion-grid>\n	  <ion-row>\n		<ion-col size="12">\n		  <ion-col size="6">\n			<ion-icon class="icon-action-buttons" name="camera" (click)="takePicturesCamera()" style="font-size: 30px;"></ion-icon>\n		  </ion-col>\n		  <ion-col size="6">\n			<ion-icon class="icon-action-buttons" name="images" (click)="takePicturesGallery()" style="font-size: 30px;"></ion-icon>\n		  </ion-col>\n		</ion-col>\n	  </ion-row>\n	</ion-grid>\n  </ion-footer>'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/detail2/detail2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_6__providers_sqlite_sqlite__["a" /* SqliteProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_13__angular_fire_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_14_angularfire2_firestore__["AngularFirestore"]])
    ], Detail2Page);
    return Detail2Page;
}());

//# sourceMappingURL=detail2.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoregistroevidenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_proveedor1_proveedor1__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the NuevoregistroevidenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevoregistroevidenciaPage = /** @class */ (function () {
    function NuevoregistroevidenciaPage(events, alertCtrl, navCtrl, navParams, camera, geolocation, sqliteService, http, proveedor) {
        var _this = this;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.geolocation = geolocation;
        this.sqliteService = sqliteService;
        this.http = http;
        this.proveedor = proveedor;
        this.Image = [];
        this.base64Image = [];
        this.Position = [];
        this.registro = {};
        this.inputDisabled = false;
        this.item = navParams.data.item;
        this.evidencia = navParams.data.evidencia;
        {
            this.events.subscribe('handlePhotoOk', function (statsData) {
                //this.ionViewDidLoad();
                //this.navCtrl.push(RegistroPage, { item: this.item });
                _this.events.publish('handleReloadListPhoto', '');
                //this.navCtrl.pop();
            });
        }
    }
    NuevoregistroevidenciaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevoregistroevidenciaPage');
        console.log("aqui");
        this.takePicture();
        this.AvaEvi = "";
        this.nombre = "";
        this.description = "";
        this.photoType = "";
        this.Image = [];
        this.base64Image = [];
        this.Position = [];
        this.registro = {};
        this.latitude = "";
        this.longitude = "";
        console.log("nombre de la Tarea " + this.sqliteService.GerNombreTarea());
    };
    NuevoregistroevidenciaPage.prototype.takePicture = function () {
        var _this = this;
        //this.geolocationNative();
        this.geolocation.getCurrentPosition().then(function (geoposition) {
            var options = {
                quality: 100,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
                targetWidth: 1024,
                targetHeight: 1600,
                saveToPhotoAlbum: true,
                correctOrientation: true
            };
            _this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                console.log('imageData: ' + imageData);
                if (imageData == true) {
                    console.log("Se tomo la foto");
                }
                else {
                    console.log("No se tomo la foto");
                }
                _this.base64Image.push('data:image/jpeg;base64,' + imageData);
                _this.Image.push({ image: 'data:image/jpeg;base64,' + imageData, latitude: geoposition.coords.latitude.toString(), longitude: geoposition.coords.longitude.toString() });
                // this.Image.push(imageData)
            }, function (err) {
                // Handle error
            });
        });
    };
    NuevoregistroevidenciaPage.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    NuevoregistroevidenciaPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    NuevoregistroevidenciaPage.prototype.registroSubmit = function (registro) {
        //this.Image = [{"image":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAj//2Q==","latitude":"25.6588239","longitude":"-100.2604567"}];
        // console.log("Muestra Objeto Imagen");
        // console.log(this.Image);
        // if (this.AvaEvi == ""){
        //   let alert1 = this.alertCtrl.create({
        //     title: "Alerta",
        //     subTitle: "Favor de seleccionar Tipo !",
        //     buttons: ['Ok']
        //   });
        //   alert1.present();
        //   return ;
        // }
        // if (this.nombre == ""){
        //   let alert1 = this.alertCtrl.create({
        //     title: "Alerta",
        //     subTitle: "Favor capturar el Nombre !",
        //     buttons: ['Ok']
        //   });
        //   alert1.present();
        //   return ;
        // }
        var elementBtnUploadPhoto = document.getElementById("btn-upload-photo");
        this.inputDisabled = true;
        elementBtnUploadPhoto.disabled = true;
        var userId = this.sqliteService.GerUserId();
        var IdProject = this.sqliteService.GerProjectId();
        var tareaid = this.sqliteService.GetTareaId();
        var idTipoNorma = this.sqliteService.GeridTipoNorma();
        var idNorma = this.sqliteService.GeridNorma();
        var specificacionNorma = this.sqliteService.GerspecificacionNorma();
        var photoType = '2';
        var entitiesId = this.sqliteService.GetEntitiesId();
        var photoName = "Foto de evidencia de la Tarea: " + this.sqliteService.GerNombreTarea();
        var photoDescription = "Foto de evidencia de la Tarea: " + this.sqliteService.GerNombreTarea() + ". Foto cargada desde el movil";
        var tphoto = 2;
        var evi_id = 0;
        this.AvaEvi = "Evidencia";
        if (this.Image.length == 0) {
            this.inputDisabled = false;
            elementBtnUploadPhoto.disabled = false;
            var alert1 = this.alertCtrl.create({
                title: "Alerta",
                subTitle: "No se ha capturado la Foto.",
                buttons: ['Ok']
            });
            alert1.present();
            return;
        }
        /* if (photoName == ""){
            this.inputDisabled = false;
            elementBtnUploadPhoto.disabled = false;

            let alert1 = this.alertCtrl.create({
                title: "Error",
                subTitle: "Debe ingresar un nombre para la Foto.",
                buttons: ['Ok']
            });
            alert1.present();

            return;
        }

        if (photoDescription == ""){
            this.inputDisabled = false;
            elementBtnUploadPhoto.disabled = false;

            let alert1 = this.alertCtrl.create({
                title: "Error",
                subTitle: "Debe ingresar una descripcion para la Foto.",
                buttons: ['Ok']
            });
            alert1.present();

            return;
        }

        if (photoType == ""){
            this.inputDisabled = false;
            elementBtnUploadPhoto.disabled = false;

            let alert1 = this.alertCtrl.create({
                title: "Error",
                subTitle: "Debe seleccionar el tipo de foto",
                buttons: ['Ok']
            });
            alert1.present();

            return;
        }

        if (typeof this.evidencia !== "undefined") {
            tphoto = 2;
            evi_id = this.evidencia.evidence_id;
            this.AvaEvi = "Evidencia";
        }*/
        console.log("Nuevos parametros");
        console.log("TypePtoho", tphoto);
        console.log("Evidencia_ID", evi_id);
        console.log("task_id " + tareaid);
        var reg = {
            task_id: tareaid,
            project_id: IdProject,
            photo_clasification_id: "1",
            geo_latitude: this.Image[0].latitude,
            geo_longitude: this.Image[0].longitude,
            photo_type_id: photoType,
            task_evidence_id: evi_id,
            task_note_id: "",
            entities_id: entitiesId,
            last_change_user_id: userId,
            image: this.Image[0].image,
            photo_name: photoName,
            description: photoDescription,
            policy_types_id: idTipoNorma,
            policy_id: idNorma,
            policy_specification_id: specificacionNorma
        };
        console.log(this.Project);
        //console.log(this.Project.id);
        console.log("reg " + JSON.stringify(reg));
        console.log(this.navParams.data.item.id);
        console.log(this.item);
        this.sqliteService.createRegistro(reg, this.item.id, this.item);
        //this.createRegistro(reg, this.navParams.data.item.id, this.item);
        //this.ionViewDidLoad();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], NuevoregistroevidenciaPage.prototype, "slides", void 0);
    NuevoregistroevidenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nuevoregistroevidencia',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/nuevoregistroevidencia/nuevoregistroevidencia.html"*/'<ion-header>\n	<ion-navbar>\n		<!--ion-title> <img src="assets/imgs/icon.png" style="width:20%;"/> REGISTRO   </ion-title-->\n		<ion-title>Registrar Foto</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<!--ion-content padding class="no-scroll"-->\n<ion-content padding class="">\n	<!--ion-card>\n		<ion-card-content>\n			<button ion-button color="danger" icon-right block (click)="takePicture();">\n				Tomar Foto\n				<ion-icon name="camera"></ion-icon>\n			</button>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-list radio-group [(ngModel)]="relationship">\n		<ion-item style="padding:0 45px 0 45px;">\n			<ion-label>Tipo de Foto</ion-label>\n		</ion-item>\n		<ion-item style="padding:0 45px 0 45px;">\n			<ion-label>Avances</ion-label>\n			<ion-radio value="avances" checked (ionSelect)="TipoFoto(1)"></ion-radio>\n		</ion-item>\n		<ion-item style="padding:0 45px 0 45px;">\n			<ion-label>Evidencias</ion-label>\n			<ion-radio value="evidencias" (ionSelect)="TipoFoto(2)"></ion-radio>\n		</ion-item>\n	</ion-list-->\n\n	<form (ngSubmit)="registroSubmit()" style="padding:10px;">\n		<ion-item>\n			<ion-slides>\n				<ion-slide *ngFor="let image of base64Image" (ionSlideDidChange)="slideChanged()">\n					<img [src]="image" >\n				</ion-slide>\n			</ion-slides>\n		</ion-item>\n		<div class="list">\n			<!-- <ion-item>\n				<ion-label>Nombre</ion-label>\n				<ion-input id="photo-name" disabled="{{inputDisabled}}" type="text" [(ngModel)]="nombre" name="nombre"></ion-input>\n			</ion-item>\n			<ion-item>\n				<ion-textarea id="description" disabled="{{inputDisabled}}" class="Ts" placeholder="Descripcion" [(ngModel)]="description"\n					name="description"></ion-textarea>\n			</ion-item>\n			<ion-item>\n				<ion-label>Tipo de foto</ion-label>\n				<ion-select id="photo-type" disabled="{{inputDisabled}}" [(ngModel)]="photoType" name="photoType">\n					<ion-option value="1">Avance</ion-option>\n					<ion-option value="2">Evidencia</ion-option>\n				</ion-select>\n			</ion-item> -->\n			<button ion-button id="btn-upload-photo" type="submit" block class="Ts">Crear Registro</button>\n		</div>\n	</form>\n</ion-content>'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/nuevoregistroevidencia/nuevoregistroevidencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__["a" /* SqliteProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__providers_proveedor1_proveedor1__["a" /* Proveedor1Provider */]])
    ], NuevoregistroevidenciaPage);
    return NuevoregistroevidenciaPage;
}());

//# sourceMappingURL=nuevoregistroevidencia.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Nuevoregistroevidencia2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_proveedor1_proveedor1__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the Nuevoregistroevidencia2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Nuevoregistroevidencia2Page = /** @class */ (function () {
    function Nuevoregistroevidencia2Page(events, alertCtrl, navCtrl, navParams, camera, geolocation, sqliteService, http, proveedor) {
        var _this = this;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.geolocation = geolocation;
        this.sqliteService = sqliteService;
        this.http = http;
        this.proveedor = proveedor;
        this.Image = [];
        this.base64Image = [];
        this.Position = [];
        this.registro = {};
        this.inputDisabled = false;
        this.item = navParams.data.item;
        this.evidencia = navParams.data.evidencia;
        {
            this.events.subscribe('handlePhotoOk', function (statsData) {
                //this.ionViewDidLoad();
                //this.navCtrl.push(RegistroPage, { item: this.item });
                _this.events.publish('handleReloadListPhoto', '');
                //this.navCtrl.pop();
            });
        }
    }
    Nuevoregistroevidencia2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Nuevoregistroevidencia2Page');
        this.takePicture();
        this.AvaEvi = "";
        this.nombre = "";
        this.description = "";
        this.photoType = "";
        this.Image = [];
        this.base64Image = [];
        this.Position = [];
        this.registro = {};
        this.latitude = "";
        this.longitude = "";
    };
    Nuevoregistroevidencia2Page.prototype.takePicture = function () {
        var _this = this;
        //this.geolocationNative();
        this.geolocation.getCurrentPosition().then(function (geoposition) {
            var options = {
                quality: 100,
                destinationType: _this.camera.DestinationType.DATA_URL,
                sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
                targetWidth: 1024,
                targetHeight: 768
            };
            _this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                if (imageData == 1) {
                    console.log("Se tomo la foto");
                }
                else {
                    console.log("No se tomo la foto");
                }
                _this.base64Image.push('data:image/jpeg;base64,' + imageData);
                _this.Image.push({ image: 'data:image/jpeg;base64,' + imageData, latitude: geoposition.coords.latitude.toString(), longitude: geoposition.coords.longitude.toString() });
                // this.Image.push(imageData)
            }, function (err) {
                // Handle error
            });
        });
    };
    Nuevoregistroevidencia2Page.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    Nuevoregistroevidencia2Page.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    Nuevoregistroevidencia2Page.prototype.registroSubmit = function (registro) {
        //this.Image = [{"image":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAj//2Q==","latitude":"25.6588239","longitude":"-100.2604567"}];
        // console.log("Muestra Objeto Imagen");
        // console.log(this.Image);
        // if (this.AvaEvi == ""){
        //   let alert1 = this.alertCtrl.create({
        //     title: "Alerta",
        //     subTitle: "Favor de seleccionar Tipo !",
        //     buttons: ['Ok']
        //   });
        //   alert1.present();
        //   return ;
        // }
        // if (this.nombre == ""){
        //   let alert1 = this.alertCtrl.create({
        //     title: "Alerta",
        //     subTitle: "Favor capturar el Nombre !",
        //     buttons: ['Ok']
        //   });
        //   alert1.present();
        //   return ;
        // }
        var elementBtnUploadPhoto = document.getElementById("btn-upload-photo");
        this.inputDisabled = true;
        elementBtnUploadPhoto.disabled = true;
        var userId = this.sqliteService.GerUserId();
        var IdProject = this.sqliteService.GerProjectId();
        var photoType = '1';
        var entitiesId = this.sqliteService.GetEntitiesId();
        var photoName = "Foto de evidencia de la Tarea: " + this.item.nombreTarea;
        var photoDescription = "Foto de evidencia de la Tarea: " + this.item.nombreTarea + ". Foto cargada desde el movil";
        var tphoto = 1;
        var evi_id = 0;
        this.AvaEvi = "Evidencia";
        if (this.Image.length == 0) {
            this.inputDisabled = false;
            elementBtnUploadPhoto.disabled = false;
            var alert1 = this.alertCtrl.create({
                title: "Alerta",
                subTitle: "No se ha capturado la Foto.",
                buttons: ['Ok']
            });
            alert1.present();
            return;
        }
        /* if (photoName == ""){
            this.inputDisabled = false;
            elementBtnUploadPhoto.disabled = false;

            let alert1 = this.alertCtrl.create({
                title: "Error",
                subTitle: "Debe ingresar un nombre para la Foto.",
                buttons: ['Ok']
            });
            alert1.present();

            return;
        }

        if (photoDescription == ""){
            this.inputDisabled = false;
            elementBtnUploadPhoto.disabled = false;

            let alert1 = this.alertCtrl.create({
                title: "Error",
                subTitle: "Debe ingresar una descripcion para la Foto.",
                buttons: ['Ok']
            });
            alert1.present();

            return;
        }

        if (photoType == ""){
            this.inputDisabled = false;
            elementBtnUploadPhoto.disabled = false;

            let alert1 = this.alertCtrl.create({
                title: "Error",
                subTitle: "Debe seleccionar el tipo de foto",
                buttons: ['Ok']
            });
            alert1.present();

            return;
        }

        if (typeof this.evidencia !== "undefined") {
            tphoto = 2;
            evi_id = this.evidencia.evidence_id;
            this.AvaEvi = "Evidencia";
        }*/
        console.log("Nuevos parametros");
        console.log("TypePtoho", tphoto);
        console.log("Evidencia_ID", evi_id);
        var reg = {
            task_id: this.item.tareaId,
            project_id: IdProject,
            photo_clasification_id: "2",
            geo_latitude: this.Image[0].latitude,
            geo_longitude: this.Image[0].longitude,
            photo_type_id: photoType,
            task_evidence_id: evi_id,
            task_note_id: "",
            entities_id: entitiesId,
            last_change_user_id: userId,
            image: this.Image[0].image,
            photo_name: photoName,
            description: photoDescription,
            policy_types_id: 1,
            policy_id: 1,
            policy_specification_id: 1
        };
        console.log(this.Project);
        //console.log(this.Project.id);
        console.log(reg);
        this.sqliteService.createRegistro(reg, this.navParams.data.item.id, this.item);
        //this.ionViewDidLoad();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], Nuevoregistroevidencia2Page.prototype, "slides", void 0);
    Nuevoregistroevidencia2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nuevoregistroevidencia2',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/nuevoregistroevidencia2/nuevoregistroevidencia2.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>Registrar Foto</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<!--ion-content padding class="no-scroll"-->\n<ion-content padding class="">\n	<!--ion-card>\n		<ion-card-content>\n			<button ion-button color="danger" icon-right block (click)="takePicture();">\n				Tomar Foto\n				<ion-icon name="camera"></ion-icon>\n			</button>\n		</ion-card-content>\n	</ion-card> >\n\n	<ion-list radio-group [(ngModel)]="relationship">\n		<ion-item style="padding:0 45px 0 45px;">\n			<ion-label>Tipo de Foto</ion-label>\n		</ion-item>\n		<ion-item style="padding:0 45px 0 45px;">\n			<ion-label>Avances</ion-label>\n			<ion-radio value="avances" checked (ionSelect)="TipoFoto(1)"></ion-radio>\n		</ion-item>\n		<ion-item style="padding:0 45px 0 45px;">\n			<ion-label>Evidencias</ion-label>\n			<ion-radio value="evidencias" (ionSelect)="TipoFoto(2)"></ion-radio>\n		</ion-item>\n	</ion-list-->\n\n	<form (ngSubmit)="registroSubmit()" style="padding:10px;">\n		<ion-item>\n			<ion-slides>\n				<ion-slide *ngFor="let image of base64Image" (ionSlideDidChange)="slideChanged()">\n					<img [src]="image">\n				</ion-slide>\n			</ion-slides>\n		</ion-item>\n		<div class="list">\n			<!-- <ion-item>\n				<ion-label>Nombre</ion-label>\n				<ion-input id="photo-name" disabled="{{inputDisabled}}" type="text" [(ngModel)]="nombre" name="nombre"></ion-input>\n			</ion-item>\n			<ion-item>\n				<ion-textarea id="description" disabled="{{inputDisabled}}" class="Ts" placeholder="Descripcion" [(ngModel)]="description"\n					name="description"></ion-textarea>\n			</ion-item>\n			<ion-item>\n				<ion-label>Tipo de foto</ion-label>\n				<ion-select id="photo-type" disabled="{{inputDisabled}}" [(ngModel)]="photoType" name="photoType">\n					<ion-option value="1">Avance</ion-option>\n					<ion-option value="2">Evidencia</ion-option>\n				</ion-select>\n			</ion-item> -->\n			<button ion-button id="btn-upload-photo" type="submit" block class="Ts">Crear Registro</button>\n		</div>\n	</form>\n</ion-content>'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/nuevoregistroevidencia2/nuevoregistroevidencia2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__["a" /* SqliteProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__providers_proveedor1_proveedor1__["a" /* Proveedor1Provider */]])
    ], Nuevoregistroevidencia2Page);
    return Nuevoregistroevidencia2Page;
}());

//# sourceMappingURL=nuevoregistroevidencia2.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SqliteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite_porter__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { RegistroPage } from '../../pages/registro/registro';
// import {App} from "ionic-angular";

var SqliteProvider = /** @class */ (function () {
    function SqliteProvider(platform, sqlite, sqlitePorter, events, http, network, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.sqlite = sqlite;
        this.sqlitePorter = sqlitePorter;
        this.events = events;
        this.http = http;
        this.network = network;
        this.alertCtrl = alertCtrl;
        this.dbReady = new __WEBPACK_IMPORTED_MODULE_5_rxjs__["BehaviorSubject"](false);
        this.ticketsR = [];
        this.ip = "http://198.50.116.250/api/public/index.php/api";
        //ip = "http://198.50.116.250/apinetwork/public/index.php/api";
        this.ip2 = "http://198.50.116.250/service_network_API_test/public/index.php/api";
        this.ts = document.getElementById('text-area');
        this.platform.ready().then(function () {
            _this.sqlite.create({ name: 'local.db', location: 'default' })
                .then(function (db) {
                _this.database = db;
                _this.createTable();
                /*.then(()=>{
                    //communicate we are ready!
                    this.dbReady.next(true);
                  });*/
            });
        });
    }
    SqliteProvider.prototype.GetToken = function () {
        return this.token;
    };
    SqliteProvider.prototype.GetIP2 = function () {
        return this.ip2;
    };
    SqliteProvider.prototype.GerUserId = function () {
        return this.UserId;
    };
    SqliteProvider.prototype.GetEntitiesId = function () {
        return this.entitiesId;
    };
    SqliteProvider.prototype.GetTareaId = function () {
        return this.tarea_id;
    };
    SqliteProvider.prototype.GerProjectId = function () {
        return this.ProjectId;
    };
    SqliteProvider.prototype.GerProjectId2 = function () {
        return this.ProjectId2;
    };
    SqliteProvider.prototype.GerTipoFoto = function () {
        return this.tipofoto;
    };
    SqliteProvider.prototype.GerAvance = function () {
        return this.avance;
    };
    SqliteProvider.prototype.GerNombreTarea = function () {
        return this.NombreTarea;
    };
    SqliteProvider.prototype.GeridTipoNorma = function () {
        return this.idTipoNorma;
    };
    SqliteProvider.prototype.GeridNorma = function () {
        return this.idNorma;
    };
    SqliteProvider.prototype.GerspecificacionNorma = function () {
        return this.specificacionNorma;
    };
    SqliteProvider.prototype.login = function () {
        //let url = this.ip + "/login";
        var url = this.ip2 + "/login";
        return url;
    };
    //FUNCIONES CRUD 
    SqliteProvider.prototype.createTable = function () {
        //console.log("creating ticket table if it does not exist");
        // let sql = 'DROP TABLE tickets';
        //let sql = 'CREATE TABLE IF NOT EXISTS tickets(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed INTEGER)';
        //let sql = 'DROP TABLE ticketsPending';
        var sql = 'CREATE TABLE IF NOT EXISTS ticketsPending(id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, subject TEXT, status ENUM, priority ENUM, project_id INTEGER,task_id INTEGER, agent_id INTEGER, channel_id INTEGER, type_id INTEGER, created_at TIMESTAMP, updated_at TIMESTAMP, deleted_at TIMESTAMP)';
        //let sql = 'CREATE TABLE IF NOT EXISTS registro(id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, description TEXT, status ENUM, priority ENUM, project_id INTEGER,task_id INTEGER, agent_id INTEGER, channel_id INTEGER, type_id INTEGER, created_at TIMESTAMP, updated_at TIMESTAMP, deleted_at TIMESTAMP)';
        // let sql2 ='CREATE TABLE IF NOT EXISTS ticketsPending(id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, subject TEXT, status ENUM, priority ENUM, agent_id INTEGER, channel_id INTEGER, type_id INTEGER, created_at TIMESTAMP, updated_at TIMESTAMP, deleted_at TIMESTAMP)';
        // let sql3= sql + sql2 ;
        return this.database.executeSql(sql, []).catch(function (err) { return console.log("error detected creating tables", err); });
    };
    //volver esto una sola funcion para hacerla reutilizable
    SqliteProvider.prototype.getAll = function () {
        var sql = 'SELECT * FROM tickets';
        return this.database.executeSql(sql, [])
            .then(function (response) {
            var tickets = [];
            for (var index = 0; index < response.rows.length; index++) {
                tickets.push(response.rows.item(index));
            }
            return Promise.resolve(tickets);
        })
            .catch(function (error) { return Promise.reject(error); });
    };
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
    SqliteProvider.prototype.getAll2 = function () {
        var sql = 'SELECT * FROM ticketsPending';
        return this.database.executeSql(sql, [])
            .then(function (response) {
            var ticketsPending = [];
            for (var index = 0; index < response.rows.length; index++) {
                ticketsPending.push(response.rows.item(index));
            }
            return Promise.resolve(ticketsPending);
        })
            .catch(function (error) { return Promise.reject(error); });
    };
    SqliteProvider.prototype.create = function (ticket) {
        console.log(ticket);
        var sql = 'INSERT INTO ticketsPending( user_id , subject , status , priority, project_id ,  task_id,  channel_id , type_id , created_at ) VALUES(  ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        return this.database.executeSql(sql, [1, ticket.subject, 'open', ticket.priority, ticket.project_id, ticket.task_id, 1, 2, ticket.created_at]).catch(function (err) { return console.log("tables not droped", err); });
    };
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
    SqliteProvider.prototype.createRegistro = function (registro, id, item) {
        var _this = this;
        var headers2 = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
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
        var url = this.ip2 + '/uploadPhoto';
        /* `http://198.50.116.250/apinetwork/public/index.php/api/registros` */
        this.http.post(url, JSON.stringify(registro), { headers: headers2 })
            .subscribe(function (data) {
            console.log("photo_type_id2: " + id);
            var alert1 = _this.alertCtrl.create({
                title: "Registro",
                subTitle: "Imagen guardada con exito!",
                buttons: ['Ok']
            });
            alert1.present();
            if (alert1.present()) {
                console.log("alert.present " + id);
            }
            _this.events.publish('handlePhotoOk', '');
            //let nav = this.app.getActiveNav();
            //this.app.getRootNav().setRoot(RegistroPage, { item: item });
        }, function (error) {
            console.log(error);
            var alert1 = _this.alertCtrl.create({
                title: "Registro",
                subTitle: "Error al guardar Foto!",
                buttons: ['Ok']
            });
            alert1.present();
        });
    };
    SqliteProvider.prototype.createNote = function (registro, id, item) {
        var _this = this;
        var headers2 = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers2.append('Content-Type', 'application/json');
        headers2.append('Access-Control-Allow-Origin', '*');
        headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers2.append('Content-Type', 'application/x-www-form-urlencoded');
        headers2.append('Authorization', 'Bearer ' + this.token);
        //const requestOptions = new RequestOptions({ headers: headers2 });
        console.log(JSON.stringify(registro));
        this.http.post(this.ip2 + "/createNotes", JSON.stringify(registro), { headers: headers2 })
            .subscribe(function (data) {
            var alert1 = _this.alertCtrl.create({
                title: "Notas",
                subTitle: "Datos guardados con exito!",
                buttons: ['Ok']
            });
            alert1.present();
            _this.events.publish('handleNoteOk', '');
        }, function (error) {
            console.log(error);
            var alert1 = _this.alertCtrl.create({
                title: "Notas",
                subTitle: "Error al guardar los datos!",
                buttons: ['Ok']
            });
            alert1.present();
        });
    };
    SqliteProvider.prototype.createRegistro2 = function (registro) {
        var _this = this;
        var headers2 = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
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
        var url = this.ip2 + '/uploadPhoto';
        /* `http://198.50.116.250/apinetwork/public/index.php/api/registros` */
        this.http.post(url, JSON.stringify(registro), { headers: headers2 })
            .subscribe(function (data) {
            console.log("photo_type_id2: " + id);
            var alert1 = _this.alertCtrl.create({
                title: "Registro",
                subTitle: "Imagen guardada con exito!",
                buttons: [{
                        text: 'Ok',
                    }]
            });
            alert1.present();
            if (alert1.present()) {
                console.log("alert.present " + id);
            }
            //this.events.publish('handlePhotoOk', '');
            //let nav = this.app.getActiveNav();
            //this.app.getRootNav().setRoot(RegistroPage, { item: item });
        }, function (error) {
            console.log(error);
            var alert1 = _this.alertCtrl.create({
                title: "Registro",
                subTitle: "Error al guardar Foto!",
                buttons: ['Ok']
            });
            alert1.present();
        });
    };
    // unused CRUD FUNCTIONS
    SqliteProvider.prototype.delete = function (tickets) {
        var sql = 'DELETE FROM ticketsPending WHERE id=?';
        return this.database.executeSql(sql, [tickets.id]);
    };
    SqliteProvider.prototype.update = function (tickets) {
        var sql = 'UPDATE tickets SET title=?, completed=? WHERE id=?';
        return this.database.executeSql(sql, [tickets.subject, tickets.priority, tickets.id]);
    };
    //
    //funciones CRUD 
    //FUNCIONES SYNC 
    SqliteProvider.prototype.syncFULL = function () {
        var _this = this;
        console.log("Checking internet availabilty");
        if (this.network.type != "none") {
            console.log("Internet available Sync starting");
            this.syncLocalToRemote(); // hacer una promesa  en success delete pending
            //this.deleteTicketsPending()
            var url = this.ip + "tickets";
            var headers2_1 = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            //revisar que este bien esto porque no funciona
            headers2_1.append('Accept', 'application/json');
            headers2_1.append('content-type', 'application/json');
            headers2_1.append('Authorization', 'Bearer ' + this.token);
            this.http.get(url, { headers: headers2_1 }).subscribe(function (data) {
                _this.ticketsR = data.json();
            });
            // el sinc  con refresh
            this.syncRemoteToLocal(this.ticketsR); // este esta bien
        }
        else {
            console.log("No acces to internet");
        }
    };
    SqliteProvider.prototype.syncRemoteToLocal = function (ticketsR) {
        var sqlJsonBlock = {
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
        this.database.executeSql('DELETE FROM tickets', []).catch(function (err) { return console.log("tables not droped", err); });
        this.sqlitePorter.importJsonToDb(this.database, sqlJsonBlock).then(function () { return console.log('Imported'); })
            .catch(function (e) { return console.error(e); });
        ;
    };
    SqliteProvider.prototype.syncLocalToRemote = function () {
        var _this = this;
        var sql = 'SELECT * FROM ticketsPending';
        return this.database.executeSql(sql, []).then(function (response) {
            var ticketsPending = [];
            for (var index = 0; index < response.rows.length; index++) {
                ticketsPending.push(response.rows.item(index));
            }
            return Promise.resolve(ticketsPending).then(function (response) {
                console.log(ticketsPending.length); //debug
                if (ticketsPending.length > 0) {
                    for (var index2 = 0; index2 < ticketsPending.length; index2++) {
                        delete ticketsPending[index2].id;
                        var headers2_2 = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
                        headers2_2.append('Accept', 'application/json');
                        headers2_2.append('content-type', 'application/json');
                        headers2_2.append('Authorization', 'Bearer ' + _this.token);
                        console.log(headers2_2);
                        console.log(_this.token);
                        console.log(ticketsPending[index2]);
                        _this.http.post(_this.ip + "tickets", ticketsPending[index2], { headers: headers2_2 }).subscribe(function (data) {
                            _this.responseLocaltoRemote = data.json();
                            console.log(data.json());
                            if (_this.responseLocaltoRemote.created == true) {
                                _this.deleteTicketsPending();
                            }
                            else
                                (console.log("Error on post local to remote" + _this.responseLocaltoRemote));
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
                else {
                    console.log("No hay tickets pendientes");
                }
            });
            // 
            //this.http.post("http://10.10.1.108:81/apiservice/public/api/v1/tickets", JSON.stringify(data) }
        })
            .catch(function (error) { return Promise.reject(error); });
    };
    SqliteProvider.prototype.deleteTicketsPending = function () {
        var sql = 'DELETE FROM ticketsPending';
        return this.database.executeSql(sql, []);
    };
    SqliteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite_porter__["a" /* SQLitePorter */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SqliteProvider);
    return SqliteProvider;
}());

//# sourceMappingURL=sqlite.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nueva_nota_nueva_nota__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the NotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotasPage = /** @class */ (function () {
    function NotasPage(events, navCtrl, navParams, sqliteService, http, modalCtrl) {
        //(public events: Events, public navCtrl: NavController,public sqliteService: SqliteProvider, public http: Http, public navParams: NavParams, private _DomSanitizer: DomSanitizer) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqliteService = sqliteService;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.notas = [];
        //let url = "https://project-1906316041004057979.firebaseio.com/notasTable/notas-id.json";
        //this.http.get(url).subscribe(data => {
        //this.notas = data.json();
        this.item = navParams.data.item;
        this.ip = this.sqliteService.ip;
        this.token = this.sqliteService.token;
        this.LoadData();
        {
            this.events.subscribe('handleReloadListNote', function (statsData) {
                _this.LoadData();
            });
        }
    }
    NotasPage.prototype.LoadData = function () {
        var _this = this;
        var url = "";
        url = this.ip + "/noteByTask";
        var headers2 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers2.append('Content-Type', 'application/json');
        headers2.append('Access-Control-Allow-Origin', '*');
        headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers2.append('Content-Type', 'application/x-www-form-urlencoded');
        headers2.append('Authorization', 'Bearer ' + this.token);
        var data = {
            id: this.item.id
        };
        console.log("id " + this.item.id);
        this.http.post(url, JSON.stringify(data), { headers: headers2 }).subscribe(function (data) {
            _this.notas = data.json();
        });
    };
    NotasPage.prototype.OpenNotaNueva = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__nueva_nota_nueva_nota__["a" /* NuevaNotaPage */], { item: this.item });
        modal.present();
    };
    NotasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notas',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/notas/notas.html"*/'<!--\n  Generated template for the NotasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><img src="assets/imgs/icon.png" width="20%"/> NOTAS  <ion-icon style="font-size: 2.0em;padding-left:30px;" ios="ios-attach" md="md-add"  (click)="OpenNotaNueva()"></ion-icon></ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<!-- <ion-content padding>\n  <div class="sec2"><p class="fontPrimaria" style="padding:20px;margin: 0px;"> No hay Notas abiertas actualmente</p></div>\n<ion-list style="padding:10px;">\n\n          <ion-item *ngFor="let nota of notas" >\n          <div class="row">\n          <div class="col col-12 "><p style="font-weight:bold;font-size:20px;">{{ nota.nombre}}</p></div></div>\n          <div class="row">\n          <div class="col col-12  ">{{ nota.descripcion}}</div></div>\n          <div class="row">\n          <div class="col col-12 "><img src="{{ nota.foto}}"></div>\n         </div>\n         \n      </ion-item>  </ion-list>\n</ion-content> -->\n\n\n<ion-content>\n  <div class="sec2"><p class="fontPrimaria" style="padding:20px;margin: 0px;"> Lista de Notas</p></div> \n  <ion-list inset>\n      <ion-item *ngIf="notas.length == 0"> \n          <div>\n           <p style="padding:20px;margin: 0px;">\n           No hay notas actualmente</p></div>\n     </ion-item>\n\n     <!-- <ion-item *ngFor="let evi of evidencias" (click)="Open(evi)" >\n        <h2>{{ evi.evidence_name }}</h2>\n        <p>{{ evi.description }}</p>\n      </ion-item> -->\n      \n      <button ion-item *ngFor="let nota of notas" (click)="Open(nota)">\n          {{ nota.short_description }}\n      </button>\n\n\n  </ion-list>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/notas/notas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__["a" /* SqliteProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], NotasPage);
    return NotasPage;
}());

//# sourceMappingURL=notas.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevaNotaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_sqlite__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NuevaNotaPage = /** @class */ (function () {
    function NuevaNotaPage(events, navCtrl, navParams, view, sqliteService, http) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.sqliteService = sqliteService;
        this.http = http;
        this.item = navParams.data.item;
        this.ip = this.sqliteService.ip;
        this.token = this.sqliteService.token;
        var url = "";
        url = this.ip + "/findByStatus";
        var headers2 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers2.append('Content-Type', 'application/json');
        headers2.append('Access-Control-Allow-Origin', '*');
        headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers2.append('Content-Type', 'application/x-www-form-urlencoded');
        headers2.append('Authorization', 'Bearer ' + this.token);
        var data = {
            status: 1
        };
        this.http.post(url, JSON.stringify(data), { headers: headers2 }).subscribe(function (data) {
            _this.clasifications = data.json();
        });
        var url2 = this.ip + "/findTypeByStatus";
        this.http.post(url2, JSON.stringify(data), { headers: headers2 }).subscribe(function (data) {
            _this.Types = data.json();
        });
        {
            this.events.subscribe('handleNoteOk', function (statsData) {
                //this.navCtrl.push(RegistroPage, { item: this.item });
                _this.events.publish('handleReloadListNote', '');
                _this.ionViewDidLoad();
                _this.navCtrl.pop();
            });
        }
    }
    NuevaNotaPage.prototype.closeNotaNueva = function () {
        this.view.dismiss();
    };
    NuevaNotaPage.prototype.onSelectChangeClasif = function (selectedValue) {
        this.IdClasif = selectedValue;
    };
    NuevaNotaPage.prototype.onSelectChangeType = function (selectedValue) {
        this.idType = selectedValue;
    };
    NuevaNotaPage.prototype.comentarioSubmit = function () {
        // if (this.nombre == ""){
        //   let alert1 = this.alertCtrl.create({
        //     title: "Alerta",
        //     subTitle: "Favor capturar el Nombre !",
        //     buttons: ['Ok']
        //   });
        //   alert1.present();
        //   return ;
        // }
        this.buttonDisabled = true;
        var user = this.sqliteService.GerUserId();
        //    if (typeof this.evidencia !== "undefined")  {
        //      tphoto = 2;
        //       evi_id = this.evidencia.evidence_id;
        //       this.AvaEvi = "Evidencia";
        //    }
        // console.log("Nuevos parametros");
        // console.log("IdClasif", this.IdClasif);
        // console.log("idType",this.idType);
        // console.log("nombre",this.nombre);
        // console.log("description",this.description);
        // console.log("task_id" ,this.item.id);
        // console.log("user", user);
        var reg = {
            short_description: this.nombre,
            large_description: this.description,
            clasification_id: this.IdClasif,
            task_id: this.item.id,
            type_id: this.idType,
            user_id: user,
            project_id: this.item.project_id
        };
        // // console.log (reg);
        this.sqliteService.createNote(reg, this.navParams.data.item.id, this.item);
    };
    NuevaNotaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevaNotaPage');
    };
    NuevaNotaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nueva-nota',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/nueva-nota/nueva-nota.html"*/'<!--\n  Generated template for the NuevaNotaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><img src="assets/imgs/icon.png" width="20%"/> NUEVA NOTA</ion-title>\n    <ion-buttons end ><button ion-button (click)="closeNotaNueva()">Close</button></ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form ng-submit="comentarioSubmit()">\n  	<div class="list" style="    padding: 13px;">\n  \n\n <!-- <ion-select placeholder="Tipo"  name="tipo">\n    <ion-option value="tipo 1          ">tipo 1</ion-option>\n    <ion-option value="tipo 2       ">tipo 2</ion-option>\n    <ion-option value="tipo 3       ">tipo 3</ion-option>\n  </ion-select>    \n-->\n\n\n    <div class="list">\n      <ion-item>\n          <ion-label>Clasificación</ion-label>\n          <ion-select (ionChange)="onSelectChangeClasif($event)"> \n            <ion-option [value]="item.id" *ngFor="let item of clasifications" [selected]="item.name == \'\'">{{item.name}}</ion-option>\n            </ion-select>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>Tipo</ion-label>\n          <ion-select (ionChange)="onSelectChangeType($event)"> \n            <ion-option [value]="item.id" *ngFor="let item of Types" [selected]="item.name == \'\'">{{item.name}}</ion-option>\n            </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Nombre</ion-label>\n        <ion-input type="text" [(ngModel)]="nombre" name="nombre"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-textarea id="description" class="Ts"  placeholder="Descripcion" [(ngModel)]="description" name="description"></ion-textarea>\n      </ion-item>\n       <!-- <button ion-button type="submit" disabled={{buttonDisabled}} block class="Ts">Crear Nota</button>    -->\n    </div>\n    <br />\n    <br />\n    <button ion-button disabled={{buttonDisabled}} block (click) = "comentarioSubmit()">Enviar</button></div>\n  \n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/nueva-nota/nueva-nota.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_sqlite__["a" /* SqliteProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], NuevaNotaPage);
    return NuevaNotaPage;
}());

//# sourceMappingURL=nueva-nota.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Proyectos" tabIcon="logo-buffer"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Reportes" tabIcon="md-analytics"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Tickets" tabIcon="construct"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Menú" tabIcon="md-menu"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_detail__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_proveedor1_proveedor1__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signature_signature__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TaskPage = /** @class */ (function () {
    function TaskPage(navCtrl, navParams, http, sqliteService, proveedor, modal) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.sqliteService = sqliteService;
        this.proveedor = proveedor;
        this.modal = modal;
        this.zonasArr = [];
        this.collapseIcon = 'add';
        this.Project = navParams.data.proyecto;
        this.sqliteService.ProjectId = this.Project.id;
        this.sqliteService.ProjectId2 = this.Project.id2;
        this.ip = this.sqliteService.ip;
        this.ip2 = this.sqliteService.ip2;
        this.token = this.sqliteService.token;
        this.NombreTarea = this.sqliteService.NombreTarea;
        var headers2 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers2.append('Accept', 'application/json');
        headers2.append('content-type', 'application/json');
        headers2.append('Authorization', 'Bearer ' + this.token);
        //let url = this.ip + "/tasks_project/" + this.Project.id;
        //let url = this.ip + "/TaskByZone";
        var url = this.ip2 + "/zoneListTaskByProject?project_id=" + this.Project.id;
        this.http.post(url, { headers: headers2 }).subscribe(function (data) {
            _this.zonesObj = data.json();
            var h = 0;
            for (var objJson0 in _this.zonesObj) {
                var i = 0;
                _this.zonasArr[h] = {
                    id_zone: _this.zonesObj[objJson0].id_zone,
                    zone: _this.zonesObj[objJson0].zone,
                    zonaSuperiorItem: [],
                    show: false
                };
                _this.listaZonaSuperior = _this.zonesObj[objJson0].ZonaSuperior;
                for (var objJson in _this.listaZonaSuperior) {
                    var j = 0;
                    _this.zonasArr[h].zonaSuperiorItem.push({
                        id_zone: _this.listaZonaSuperior[objJson].id_zone,
                        id_subzone: _this.listaZonaSuperior[objJson].id_subzone,
                        subzone: _this.listaZonaSuperior[objJson].subzone,
                        listasTareasItem: [],
                        show: false
                    });
                    _this.listaTareasObj = _this.listaZonaSuperior[objJson].listasTareas;
                    for (var objJson2 in _this.listaTareasObj) {
                        _this.zonasArr[h].zonaSuperiorItem[i].listasTareasItem.push({
                            listaTareaId: _this.listaTareasObj[objJson2].task_list_id,
                            nombreListaTarea: _this.listaTareasObj[objJson2].task_list,
                            tareaItem: [],
                            show: false
                        });
                        _this.tareasObj = _this.listaTareasObj[objJson2].tareas;
                        for (var objJson3 in _this.tareasObj) {
                            _this.zonasArr[h].zonaSuperiorItem[i].listasTareasItem[j].tareaItem.push({
                                tareaId: _this.tareasObj[objJson3].task_id,
                                nombreTarea: _this.tareasObj[objJson3].defTarea,
                                description: _this.tareasObj[objJson3].defTarea,
                                completion_percent: _this.tareasObj[objJson3].task_completed_percentage,
                                inicioTarea: _this.tareasObj[objJson3].start_date,
                                finTarea: _this.tareasObj[objJson3].end_date,
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
    TaskPage.prototype.openSignatureModel = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_6__signature_signature__["a" /* SignaturePage */]);
        modal.present();
    };
    TaskPage.prototype.swipeEvent = function (e) {
        if (e.direction == 4) {
            //console.log("izquierda");
            this.navCtrl.pop();
        }
    };
    TaskPage.prototype.taskSelected = function (task) {
        /*
        if (task.length > 0)  {
          this.navCtrl.push(TaskPage, { task: task });
        }
        else{
          this.navCtrl.push(DetailPage, { task: task });
        }
        */
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_detail__["a" /* DetailPage */], { task: task });
    };
    TaskPage.prototype.toggleGroup = function (elemento) {
        elemento.show = !elemento.show;
    };
    ;
    TaskPage.prototype.isGroupShown = function (elemento) {
        return elemento.show;
    };
    ;
    TaskPage.prototype.isGroupShown2 = function (elemento1, elemento2, elemento3) {
        var isShow = false;
        if ((elemento1.show) && (elemento2.show) && (elemento3.show))
            isShow = true;
        return isShow;
    };
    ;
    TaskPage.prototype.showZone = function () {
        console.log("Mostrar Plano de Zona");
        var zonePlane = this.modal.create("ZonePlanePage");
        zonePlane.present();
    };
    TaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-task',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/task/task.html"*/'\n<ion-header>\n  <ion-navbar>\n    \n    <ion-title text-center>\n      <!--img class=\'logo-navbar\' src="assets/imgs/logos/SN_logo_single_754x754.png" width="10%"/-->\n      <span class="toolbar-text-style" style="text-transform: uppercase;">{{ Project.description }}</span>\n      <!-- <ion-icon style="font-size: 2.0em; margin-left:80%;" ios="ios-attach" md="md-add" (click)="takePicturesCamera()"></ion-icon> -->\n    </ion-title>\n\n    <ion-buttons end>\n        <button ion-button icon-only (click)="openSignatureModel()">\n          <ion-icon name="qr-scanner"></ion-icon>\n        </button>\n      </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div (swipe)="swipeEvent($event)">\n  <!--div class="sec2"><p class="fontPrimaria" style="padding:20px;margin: 0px;"> Lista de Tareas</p></div--> \n  <!-- <div class="div-sub-tittles">\n    <ion-icon class="icon-sub-tittles" item-left name="list"></ion-icon>\n    <span class="sub-tittles">Tareas</span>\n  </div> -->\n\n  <ion-list inset>\n    <div *ngFor="let detalles of zonasArr">\n      <ion-item  class="item-stable" >\n        <button class="button-stable" (click)="toggleGroup(detalles)">\n          <ion-icon [name]="isGroupShown(detalles) ? \'remove\' : \'add\'" class="action-icon-list"></ion-icon>\n        </button>\n        &nbsp;\n        <span class="list-tittle" (click)="toggleGroup(detalles)">{{detalles.zone}}</span>\n        <button class="button-stable button-map" (click)="showZone()">\n          <ion-icon name="map" class="action-icon-list"></ion-icon>\n        </button>\n      </ion-item>\n\n      <div *ngFor="let detallesZona of detalles.zonaSuperiorItem ">\n        \n          <button ion-item class="item-accordion" (click)="toggleGroup(detallesZona)"  *ngIf="isGroupShown(detalles)" style="margin-left: 10px;">\n            \n            <ion-icon [name]="isGroupShown(detallesZona) ? \'remove\' : \'add\'" ></ion-icon>\n            <span style="margin-left: 10px; font-weight: bold; font-size: 20px;" (click)="toggleGroup(detallesZona)">{{detallesZona.subzone}}</span>\n          </button>\n          \n          \n        \n\n      <div *ngFor="let listaTarea of detallesZona.listasTareasItem">\n        <button ion-item class="item-accordion" (click)="toggleGroup(listaTarea)" *ngIf="isGroupShown(detallesZona)" style="margin-left: 15px;">\n            <ion-icon [name]="isGroupShown(listaTarea) ? \'remove\' : \'add\'"></ion-icon>\n            &nbsp;\n            {{ listaTarea.listaTareaId }} - {{ listaTarea.nombreListaTarea }}:\n        </button>\n      <div *ngFor="let tarea of listaTarea.tareaItem">\n          <button ion-item class="item-accordion" (click)="taskSelected(tarea)" *ngIf="isGroupShown2(detalles,detallesZona, listaTarea)" style="margin-left: 40px;">\n              {{ tarea.tareaId }} - {{ tarea.nombreTarea }}\n          </button>\n        </div> \n      </div>\n    </div>\n  </div>\n\n    <!--button ion-item *ngFor="let zonas of item" (click)="zoneColapse()">\n      <div>\n        <ion-icon class="icon-item-list" item-left name="folder-open"></ion-icon>\n        {{zonas.nombreZona}}\n        <ion-list inset style="margin-left: 10px;">\n          <button ion-item *ngFor="let listaTareas of zonas.listasTareas" (click)="taskListColapse()">\n            <div>\n              <ion-icon class="icon-item-list" item-left name="folder-open"></ion-icon>\n              {{listaTareas.listaTarea}}\n              <ion-list inset style="margin-left: 10px;">\n                <button ion-item *ngFor="let tareas of listaTareas.tareas" (click)="taskSelected(tarea)">\n                  <div>\n                    <ion-icon class="icon-item-list" item-left name="square-outline"></ion-icon>\n                    {{tareas.tarea}}\n                  </div>\n                </button>\n              </ion-list>\n            </div>\n          </button>\n        </ion-list>\n      </div>\n    </button-->\n  </ion-list>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/task/task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__["a" /* SqliteProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_proveedor1_proveedor1__["a" /* Proveedor1Provider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], TaskPage);
    return TaskPage;
}());

//# sourceMappingURL=task.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_sqlite__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_firestore__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams, sqliteService, app, storage, firestore) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqliteService = sqliteService;
        this.app = app;
        this.storage = storage;
        this.firestore = firestore;
        this.items = [];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MenuPage');
        this.firestore.collection("ServiceNetwork").snapshotChanges().subscribe(function (data) {
            _this.items = [];
            console.log("data" + data);
            data.forEach(function (element) {
                var item = element.payload.doc.data();
                item.id = element.payload.doc.id;
                _this.items.push(item);
                console.log("item.id: " + item.id);
            });
        });
    };
    MenuPage.prototype.vistaPanoramica = function (item) {
        //this.firestore.collection('ServiceNetwork').doc(`${tar}`).collection('fotos').add(this.datas);
        this.firestore.doc("ServiceNetwork/" + item.id).delete();
    };
    MenuPage.prototype.accion = function (page) {
        console.log(page);
        switch (page) {
            case "proyectos": {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                break;
            }
            case "salir": {
                this.sqliteService.token = null;
                this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                break;
            }
        }
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/menu/menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<ion-title>Menú</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-grid>\n		<ion-row class="actions-detail">\n			<ion-col size="12">\n				<ion-col size="6">\n					<button class="actions-detail-button-width" ion-button icon-right round (click)="accion(\'proyectos\')">\n						Proyectos\n						<ion-icon name="logo-buffer"></ion-icon>\n					</button>\n				</ion-col>\n				<ion-col size="6" >\n					<button class="actions-detail-button-width" ion-button icon-right round (click)="accion(\'salir\')">\n						Salir\n						<ion-icon name="md-exit"></ion-icon>\n					</button>\n				</ion-col>\n				<ion-col size="6" > \n					\n						<div *ngFor="let item of items">\n								<button class="actions-detail-button-width" ion-button icon-right round (click)="vistaPanoramica(item)">\n										Vista Panoramica\n										<ion-icon name="md-exit"></ion-icon>\n									</button>\n								</div>\n					\n							\n				\n				</ion-col>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_sqlite__["a" /* SqliteProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_6__angular_fire_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["AngularFirestore"]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sqlite_sqlite__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { ScreenOrientation } from '@ionic-native/screen-orientation';
/**
 * Generated class for the SignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignaturePage = /** @class */ (function () {
    function SignaturePage(navCtrl, navParams, firestore, sqliteService, storage, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firestore = firestore;
        this.sqliteService = sqliteService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.signaturePadOptions = {
            'minWidth': 1,
            'canvasWidth': window.innerWidth * 0.90,
            'canvasHeight': window.innerHeight * 0.65,
            'margin-left': window.innerWidth * 0.05,
            'margin-right': window.innerWidth * 0.05
        };
    }
    SignaturePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignaturePage');
        //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    };
    SignaturePage.prototype.drawComplete = function () {
        this.signatureImage = this.signaturePad.toDataURL();
        var ProjectId = this.sqliteService.GerProjectId();
        var filePath = ProjectId + "/Firma del proyecto";
        var pictures = this.storage.ref(filePath);
        var task = pictures.putString(this.signatureImage, 'data_url');
        var toast = this.toastCtrl.create({
            message: 'Firma agregada satisfactoriamente.',
            duration: 3000
        });
        toast.present();
        this.navCtrl.pop();
    };
    SignaturePage.prototype.drawClear = function () {
        this.signaturePad.clear();
    };
    SignaturePage.prototype.drawCancel = function () {
        this.signaturePad.clear();
        this.navCtrl.pop();
    };
    var _a, _b, _c, _d, _e, _f, _g;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]) === "function" ? _a : Object)
    ], SignaturePage.prototype, "signaturePad", void 0);
    SignaturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signature',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/signature/signature.html"*/'<!--\n  Generated template for the SignaturePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signature</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <signature-pad [options]="signaturePadOptions" id="signatureCanvas" style="margin-left: 5%;margin-right: 5%;"></signature-pad>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <button ion-button full color="danger" (click)="drawCancel()">Cancelar</button>\n        </ion-col>\n\n        <ion-col col-4>\n            <button ion-button full color="light" (click)="drawClear()">Borrar</button>\n          </ion-col>\n\n          <ion-col col-4>\n              <button ion-button full color="secondary" (click)="drawComplete()">Guardar</button>\n            </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/signature/signature.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" ? _b : Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" ? _c : Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"]) === "function" ? _d : Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_sqlite_sqlite__["a" /* SqliteProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_sqlite_sqlite__["a" /* SqliteProvider */]) === "function" ? _e : Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__angular_fire_storage__["a" /* AngularFireStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_fire_storage__["a" /* AngularFireStorage */]) === "function" ? _f : Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]) === "function" ? _g : Object])
    ], SignaturePage);
    return SignaturePage;
}());

//# sourceMappingURL=signature.js.map

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 267;

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/Tickets/tickets.module": [
		378
	],
	"../pages/detail/detail.module": [
		310
	],
	"../pages/detail2/detail2.module": [
		386
	],
	"../pages/login/login.module": [
		321
	],
	"../pages/menu/menu.module": [
		365
	],
	"../pages/modal/modal.module": [
		886,
		1
	],
	"../pages/notas/notas.module": [
		366
	],
	"../pages/nueva-nota/nueva-nota.module": [
		367
	],
	"../pages/nuevoregistro/nuevoregistro.module": [
		384
	],
	"../pages/nuevoregistro2/nuevoregistro2.module": [
		368
	],
	"../pages/nuevoregistroevidencia/nuevoregistroevidencia.module": [
		370
	],
	"../pages/nuevoregistroevidencia2/nuevoregistroevidencia2.module": [
		369
	],
	"../pages/picture/picture.module": [
		371
	],
	"../pages/registro-detalle/registro-detalle.module": [
		373
	],
	"../pages/registro/registro.module": [
		385
	],
	"../pages/signature/signature.module": [
		887,
		2
	],
	"../pages/task/task.module": [
		374
	],
	"../pages/taskevidence/taskevidence.module": [
		383
	],
	"../pages/ticket-comentario/ticket-comentario.module": [
		376
	],
	"../pages/ticket-detalle/ticket-detalle.module": [
		375
	],
	"../pages/tickets-por-tarea/tickets-por-tarea.module": [
		377
	],
	"../pages/typephoto/typephoto.module": [
		379
	],
	"../pages/typephoto2/typephoto2.module": [
		381
	],
	"../pages/zone-plane/zone-plane.module": [
		888,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 309;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailPageModule = /** @class */ (function () {
    function DetailPageModule() {
    }
    DetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail__["a" /* DetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail__["a" /* DetailPage */]),
            ],
        })
    ], DetailPageModule);
    return DetailPageModule;
}());

//# sourceMappingURL=detail.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        // events
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
    }
    // events
    AboutPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    AboutPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    AboutPage.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n   <img src="assets/imgs/icon.png" width="20%"/>   REPORTES\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n	<div class="sec2">\n    <h3 class="fontPrimaria" style="margin:0px;padding:20px;">Reportes de Avance del Proyecto</h3></div>\n     <div style="display: block;padding:20px;">\n      <canvas baseChart\n                [data]="doughnutChartData"\n                [labels]="doughnutChartLabels"\n                [chartType]="doughnutChartType"\n                (chartHover)="chartHovered($event)"\n                (chartClick)="chartClicked($event)" style="margin-bottom:20px;"></canvas>\n        <canvas baseChart\n              [datasets]="barChartData"\n              [labels]="barChartLabels"\n              [options]="barChartOptions"\n              [legend]="barChartLegend"\n              [chartType]="barChartType"\n              (chartHover)="chartHovered($event)"\n              (chartClick)="chartClicked($event)"></canvas>\n   \n \n    <button ion-button (click)="randomize()" style="margin-top:20px;">Update</button>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Tickets_tickets__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ticket_detalle_ticket_detalle__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, http, sqliteService) {
        // let url = "https://project-1906316041004057979.firebaseio.com/ticketsTable/tickets-id.json";
        //this.http.get(url).subscribe(data => {
        //this.tickets = data.json();
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.sqliteService = sqliteService;
        this.tickets = [];
        this.ticketsPending = [];
        // console.log(data.json());
        //});
        this.getAllTickets();
        setInterval(function () {
            _this.getAllLocalTickets();
        }, 10000);
    }
    ContactPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.getAllTickets();
            _this.getAllLocalTickets();
            refresher.complete();
        }, 2000);
    };
    /*
     doRefresh(refresher) {
        console.log('Begin async operation', refresher);
    
        setTimeout(() => {
          console.log('Async operation has ended');
          refresher.complete();
        }, 2000);
      }
    
      deleteTask(task: any, index){
        this.tasksService.delete(task)
        .then(response => {
          console.log( response );
          this.tasks.splice(index, 1);
        })
        .catch( error => {
          console.error( error );
        })
      }
    */
    ContactPage.prototype.getAllTickets = function () {
        //revisar si con esto funciona
        var _this = this;
        this.ip = this.sqliteService.ip;
        this.token = this.sqliteService.token;
        var url = this.ip + "tickets";
        var headers2 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers2.append('Accept', 'application/json');
        headers2.append('content-type', 'application/json');
        headers2.append('Authorization', 'Bearer ' + this.token);
        console.log(headers2);
        return this.http.get(url, { headers: headers2 }).subscribe(function (data) {
            _this.ticketsR = data.json();
            _this.sqliteService.syncFULL();
            //sync process
        }); //NEWCODE
        //revisar si con esto funciona
        //this.sqliteService.syncFULL()
        //this.getAllLocalTickets()
    };
    ContactPage.prototype.getAllLocalTickets = function () {
        var _this = this;
        this.sqliteService.getAll()
            .then(function (tickets) {
            console.log(tickets);
            _this.tickets = tickets;
        });
        this.sqliteService.getAll2()
            .then(function (ticketsPending) {
            console.log(ticketsPending);
            _this.ticketsPending = ticketsPending;
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    //this.getInfo("tickets", "tickets");
    //this.getInfo("ticketsPending", "ticketsPending");
    /*
     this.sqliteService.getTable("tickets","tickets").then(tickets => {
          console.log(tickets);
          this.tickets = tickets;
        }).catch( error => {
          console.error( error );
        });
    
     this.sqliteService.getTable("ticketsPending","ticketsPending").then(ticketsPending => {
          console.log(ticketsPending);
          this.ticketsPending = ticketsPending;
        }).catch( error => {
          console.error( error );
        });*/
    /*
    
    getInfo(table,row){
    this.sqliteService.getTable(table,row).then(row => {
    console.log(row);
    this.row = row;
    }).catch( error => {
          console.error( error );
    });
    }
    
      */
    /*
       
        */
    /*
      updateTask(task, index){
        task = Object.assign({}, task);
        task.completed = !task.completed;
        this.tasksService.update(task)
        .then( response => {
          this.tasks[index] = task;
        })
        .catch( error => {
          console.error( error );
        })
      }
    */
    ContactPage.prototype.ticketSelected = function (ticket) {
        //console.log("Selected Ticket", ticket);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ticket_detalle_ticket_detalle__["a" /* TicketDetallePage */], { ticket: ticket });
    };
    ContactPage.prototype.OpenTickets = function () {
        var item = { "id": null, "project_id": null };
        console.log("Selected Item", item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__Tickets_tickets__["a" /* TicketsPage */], { item: item });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n   <img src="assets/imgs/icon.png" style="width:20%;"/>   MIS TICKETS\n    <ion-icon style="font-size: 2.0em;padding-left:30px;" ios="ios-attach" md="md-add"  (click)="OpenTickets()"></ion-icon>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n    <ion-content padding>\n    \n \n<ion-refresher (ionRefresh)="doRefresh($event)">\n <ion-refresher-content>\n\n \n    </ion-refresher-content>\n</ion-refresher>  \n  <ion-list>\n\n      <ion-item *ngIf="tickets.length == 0"> \n      <div class="sec2">\n       <p class="fontPrimaria" style="padding:20px;margin: 0px;">\n       No hay tickets abiertos actualmente</p></div>\n     </ion-item>\n      <ion-item *ngIf="tickets.length > 0"> \n      <div class="sec2">\n       <p class="fontPrimaria" style="padding:20px;margin: 0px;">\n       Tienes {{tickets.length}} tickets en seguimiento actualmente</p></div>\n     </ion-item>\n     <div class="row header item-md">\n          <div class="col col-4  ticketTaG" style="color:#fff;">FECHA</div>\n         \n          <div class="col col-4  ticketTaG" style="color:#fff;">STATUS</div>\n          <div class="col col-4  ticketTaG" style="color:#fff;">PRIORIDAD</div>\n         \n        </div>\n\n          <button ion-item *ngFor="let ticket of tickets "  (click)="ticketSelected(ticket)" >\n            <div class="row">\n          <div class="col col-4  ticketTaG">{{ ticket.created_at}}</div>\n          \n          <div class="col col-4  ticketTa">{{ ticket.status}}</div>\n          <div class="col col-4  ticketTa">{{ ticket.priority}}</div></div>\n          <div class="row">\n          <div class="col col-12  ticketTa">  <span style=" font-weight:800;color:#000;">Asunto:</span> {{ ticket.subject}}</div>\n          </div>\n      </button> \n\n  <ion-item *ngIf="ticketsPending.length > 0"> \n      <div class="secPending">\n       <p class="fontPrimaria" style="padding:20px;margin: 0px;">\n       Tienes {{ticketsPending.length}} tickets pendientes por sincronizar</p></div>\n     </ion-item>\n       <button ion-item *ngFor="let ticketP of ticketsPending "  (click)="ticketSelected(ticket)" >\n            <div class="row">\n          <div class="col col-4  ticketTaG">{{ ticketP.created_at}}</div>\n          \n          <div class="col col-4  ticketTa">{{ ticketP.status}}</div>\n          <div class="col col-4  ticketTa">{{ ticketP.priority}}</div></div>\n          <div class="row">\n          <div class="col col-12  ticketTa">  <span style=" font-weight:800;color:#000;">Asunto:</span> {{ ticketP.subject}}</div>\n          </div>\n      </button> \n       </ion-list>\n</ion-content>\n\n \n\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__["a" /* SqliteProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_task__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_projects_service__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sqlite_sqlite__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_proveedor1_proveedor1__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, projectService, http, sqliteService, proveedor) {
        this.navCtrl = navCtrl;
        this.projectService = projectService;
        this.http = http;
        this.sqliteService = sqliteService;
        this.proveedor = proveedor;
        this.items = [];
        this.proyectos = [];
    }
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            _this.getProjects();
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.getProjects();
        }, 700);
    };
    HomePage.prototype.getProjects = function () {
        var _this = this;
        this.ip = this.sqliteService.ip;
        this.ip2 = this.sqliteService.ip2;
        this.token = this.sqliteService.token;
        //let url = this.ip + "/projects/" + this.sqliteService.GerUserId();
        var url = this.ip2 + "/getProjectsAdminId?project_admin_user_id=" + this.sqliteService.GerUserId();
        var headers2 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers2.append('Accept', 'application/json');
        headers2.append('content-type', 'application/json');
        headers2.append('Authorization', 'Bearer ' + this.token);
        //console.log(this.token + "homepage");
        //console.log(headers2);
        this.http.post(url, { headers: headers2 }).subscribe(function (data) {
            _this.proyectos = data.json();
            console.log("proyectos: " + JSON.stringify(_this.proyectos));
        });
    };
    HomePage.prototype.itemSelected = function (proyecto) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__task_task__["a" /* TaskPage */], { proyecto: proyecto });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <!--img src="assets/imgs/logos/SN_logo_single_754x754.png" width="10%"/-->\n      <span class="toolbar-text-style">PROYECTOS</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  <!--div class="sec2"><p class="fontPrimaria" style="padding:20px;margin: 0px;"> Lista de Proyectos</p></div--> \n  <div class="div-sub-tittles">\n    <ion-icon class="icon-sub-tittles" item-left name="filing"></ion-icon>\n    <span class="sub-tittles">Proyectos</span>\n  </div>\n  <ion-list inset>\n    <button ion-item *ngFor="let proyecto of proyectos" (click)="itemSelected(proyecto)">\n      <div>\n        <ion-icon class="icon-item-list" item-left name="folder"></ion-icon>\n        <!--{{proyecto.id}} - {{proyecto.comments}}-->\n        {{proyecto.description}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_projects_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_sqlite_sqlite__["a" /* SqliteProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_proveedor1_proveedor1__["a" /* Proveedor1Provider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProjectService = /** @class */ (function () {
    function ProjectService() {
        this.projects = [
            {
                'title': 'Mexichem Altamira',
                'detail': [
                    { 'task': 'Tarea Altamira 1', 'detail': [
                            { 'task': 'Sub Tarea Altamira', 'detail': [], 'Descrip': 'Subtarea de 2 Nivel. ', 'icon': '' }
                        ], 'Descrip': 'Desarrollo de Subtarea 1' },
                    { 'task': 'Tarea Altamira 2', 'detail': [], 'Descrip': 'Desarrollo de tarea 2' },
                    { 'task': 'Tarea Altamira 3', 'detail': [], 'Descrip': 'Desarrollo de tarea 3' },
                    { 'task': 'Tarea Altamira 4', 'detail': [], 'Descrip': 'Desarrollo de tarea 4' },
                    { 'task': 'Tarea Altamira 5', 'detail': [], 'Descrip': 'Desarrollo de tarea 5' },
                    { 'task': 'Tarea Altamira 6', 'detail': [], 'Descrip': 'Desarrollo de tarea 6' }
                ]
            },
            {
                'title': 'Walmart CCTV',
                'detail': [
                    { 'task': 'Tarea Waltmart 1', 'detail': [], 'Descrip': 'Desarrollo de tarea 7' },
                    { 'task': 'Tarea Waltmart 2', 'detail': [], 'Descrip': 'Desarrollo de tarea 8' },
                    { 'task': 'Tarea Waltmart 3', 'detail': [], 'Descrip': 'Desarrollo de tarea 9' },
                    { 'task': 'Tarea Waltmart 4', 'detail': [], 'Descrip': 'Desarrollo de tarea 10' },
                    { 'task': 'Tarea Waltmart 5', 'detail': [], 'Descrip': 'Desarrollo de tarea 11' },
                    { 'task': 'Tarea Waltmart 6', 'detail': [], 'Descrip': 'Desarrollo de tarea 12' },
                    { 'task': 'Tarea Waltmart 7', 'detail': [], 'Descrip': 'Desarrollo de tarea 13' },
                    { 'task': 'Tarea Waltmart 8', 'detail': [], 'Descrip': 'Desarrollo de tarea 14' }
                ]
            },
            {
                'title': 'Mexichem Coatza',
                'detail': [
                    { 'task': 'Tarea Coatza 1', 'detail': [], 'Descrip': 'Instalación de camaras, control de acceos, lectoras y controladoras, y mano de obra en planta' },
                    { 'task': 'Tarea Coatza 2', 'detail': [], 'Descrip': 'Desarrollo de tarea 16' },
                    { 'task': 'Tarea Coatza 3', 'detail': [], 'Descrip': 'Desarrollo de tarea 17' },
                    { 'task': 'Tarea Coatza 4', 'detail': [], 'Descrip': 'Desarrollo de tarea 18' },
                    { 'task': 'Tarea Coatza 5', 'detail': [], 'Descrip': 'Desarrollo de tarea 19' },
                    { 'task': 'Tarea Coatza 6', 'detail': [], 'Descrip': 'Desarrollo de tarea 20' },
                    { 'task': 'Tarea Coxatza 7', 'detail': [], 'Descrip': 'Desarrollo de tarea 21' },
                    { 'task': 'Tarea Coatza 8', 'detail': [], 'Descrip': 'Desarrollo de tarea 22' },
                    { 'task': 'Tarea Coatza 9', 'detail': [], 'Descrip': 'Desarrollo de tarea 23' },
                    { 'task': 'Tarea Coatza 10', 'detail': [], 'Descrip': 'Desarrollo de tarea 24' },
                    { 'task': 'Tarea Coatza 11', 'detail': [], 'Descrip': 'Desarrollo de tarea 25' },
                    { 'task': 'Tarea Coatza 12', 'detail': [], 'Descrip': 'Desarrollo de tarea 26' },
                    { 'task': 'Tarea Coatza 13', 'detail': [], 'Descrip': 'Desarrollo de tarea 27' },
                    { 'task': 'Tarea Coatza 14', 'detail': [], 'Descrip': 'Desarrollo de tarea 28' },
                    { 'task': 'Tarea Coatza 15', 'detail': [], 'Descrip': 'Desarrollo de tarea 29' },
                    { 'task': 'Tarea Coatza 16', 'detail': [], 'Descrip': 'Desarrollo de tarea 30' },
                    { 'task': 'Tarea Coatza 17', 'detail': [], 'Descrip': 'Desarrollo de tarea 31' }
                ]
            }
        ];
    }
    ProjectService.prototype.getProjects = function () {
        return this.projects;
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ProjectService);
    return ProjectService;
}());

//# sourceMappingURL=projects.service.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProveedorusersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ProveedorusersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProveedorusersProvider = /** @class */ (function () {
    function ProveedorusersProvider(http) {
        this.http = http;
        //console.log('Hello Proveedorusers Provider Provider');
    }
    ProveedorusersProvider.prototype.obtenerUsuarios = function () {
        return this.http.get('http://10.10.1.86/api01/public/index.php/login/1');
    };
    ProveedorusersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProveedorusersProvider);
    return ProveedorusersProvider;
}());

//# sourceMappingURL=proveedorusers.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasPageModule", function() { return NotasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notas__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotasPageModule = /** @class */ (function () {
    function NotasPageModule() {
    }
    NotasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notas__["a" /* NotasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notas__["a" /* NotasPage */]),
            ],
        })
    ], NotasPageModule);
    return NotasPageModule;
}());

//# sourceMappingURL=notas.module.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevaNotaPageModule", function() { return NuevaNotaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nueva_nota__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NuevaNotaPageModule = /** @class */ (function () {
    function NuevaNotaPageModule() {
    }
    NuevaNotaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nueva_nota__["a" /* NuevaNotaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nueva_nota__["a" /* NuevaNotaPage */]),
            ],
        })
    ], NuevaNotaPageModule);
    return NuevaNotaPageModule;
}());

//# sourceMappingURL=nueva-nota.module.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nuevoregistro2PageModule", function() { return Nuevoregistro2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevoregistro2__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nuevoregistro2PageModule = /** @class */ (function () {
    function Nuevoregistro2PageModule() {
    }
    Nuevoregistro2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nuevoregistro2__["a" /* Nuevoregistro2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nuevoregistro2__["a" /* Nuevoregistro2Page */]),
            ],
        })
    ], Nuevoregistro2PageModule);
    return Nuevoregistro2PageModule;
}());

//# sourceMappingURL=nuevoregistro2.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nuevoregistroevidencia2PageModule", function() { return Nuevoregistroevidencia2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevoregistroevidencia2__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Nuevoregistroevidencia2PageModule = /** @class */ (function () {
    function Nuevoregistroevidencia2PageModule() {
    }
    Nuevoregistroevidencia2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nuevoregistroevidencia2__["a" /* Nuevoregistroevidencia2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nuevoregistroevidencia2__["a" /* Nuevoregistroevidencia2Page */]),
            ],
        })
    ], Nuevoregistroevidencia2PageModule);
    return Nuevoregistroevidencia2PageModule;
}());

//# sourceMappingURL=nuevoregistroevidencia2.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoregistroevidenciaPageModule", function() { return NuevoregistroevidenciaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevoregistroevidencia__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NuevoregistroevidenciaPageModule = /** @class */ (function () {
    function NuevoregistroevidenciaPageModule() {
    }
    NuevoregistroevidenciaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nuevoregistroevidencia__["a" /* NuevoregistroevidenciaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nuevoregistroevidencia__["a" /* NuevoregistroevidenciaPage */]),
            ],
        })
    ], NuevoregistroevidenciaPageModule);
    return NuevoregistroevidenciaPageModule;
}());

//# sourceMappingURL=nuevoregistroevidencia.module.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PicturePageModule", function() { return PicturePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picture__ = __webpack_require__(372);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PicturePageModule = /** @class */ (function () {
    function PicturePageModule() {
    }
    PicturePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__picture__["a" /* PicturePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__picture__["a" /* PicturePage */]),
            ],
        })
    ], PicturePageModule);
    return PicturePageModule;
}());

//# sourceMappingURL=picture.module.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PicturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PicturePage = /** @class */ (function () {
    function PicturePage(navCtrl, navParams, camera, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.geolocation = geolocation;
        this.Position = [];
    }
    PicturePage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
        this.geolocationNative();
    };
    PicturePage.prototype.geolocationNative = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (geoposition) {
            _this.Position[0] = geoposition.coords.longitude.toString();
            _this.Position[1] = geoposition.coords.latitude.toString();
            //console.log(geoposition);
        });
    };
    PicturePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PicturePage');
    };
    PicturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-picture',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/picture/picture.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Camara</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <button ion-button color="danger" icon-right block (click)="takePicture();">\n        Tomar Foto\n        <ion-icon name="camera">\n        \n        </ion-icon>\n      </button>\n\n      <img [src]="base64Image">\n\n    </ion-card-content>\n  </ion-card>\n  <button ion-item *ngFor="let item of Position" >\n    {{ item }}\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/picture/picture.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], PicturePage);
    return PicturePage;
}());

//# sourceMappingURL=picture.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroDetallePageModule", function() { return RegistroDetallePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro_detalle__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistroDetallePageModule = /** @class */ (function () {
    function RegistroDetallePageModule() {
    }
    RegistroDetallePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registro_detalle__["a" /* RegistroDetallePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registro_detalle__["a" /* RegistroDetallePage */]),
            ],
        })
    ], RegistroDetallePageModule);
    return RegistroDetallePageModule;
}());

//# sourceMappingURL=registro-detalle.module.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPageModule", function() { return TaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TaskPageModule = /** @class */ (function () {
    function TaskPageModule() {
    }
    TaskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__task__["a" /* TaskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__task__["a" /* TaskPage */]),
            ],
        })
    ], TaskPageModule);
    return TaskPageModule;
}());

//# sourceMappingURL=task.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetallePageModule", function() { return TicketDetallePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket_detalle__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TicketDetallePageModule = /** @class */ (function () {
    function TicketDetallePageModule() {
    }
    TicketDetallePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ticket_detalle__["a" /* TicketDetallePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ticket_detalle__["a" /* TicketDetallePage */]),
            ],
        })
    ], TicketDetallePageModule);
    return TicketDetallePageModule;
}());

//# sourceMappingURL=ticket-detalle.module.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketComentarioPageModule", function() { return TicketComentarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket_comentario__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TicketComentarioPageModule = /** @class */ (function () {
    function TicketComentarioPageModule() {
    }
    TicketComentarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ticket_comentario__["a" /* TicketComentarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ticket_comentario__["a" /* TicketComentarioPage */]),
            ],
        })
    ], TicketComentarioPageModule);
    return TicketComentarioPageModule;
}());

//# sourceMappingURL=ticket-comentario.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsPorTareaPageModule", function() { return TicketsPorTareaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tickets_por_tarea__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TicketsPorTareaPageModule = /** @class */ (function () {
    function TicketsPorTareaPageModule() {
    }
    TicketsPorTareaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tickets_por_tarea__["a" /* TicketsPorTareaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tickets_por_tarea__["a" /* TicketsPorTareaPage */]),
            ],
        })
    ], TicketsPorTareaPageModule);
    return TicketsPorTareaPageModule;
}());

//# sourceMappingURL=tickets-por-tarea.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsPageModule", function() { return TicketsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tickets__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TicketsPageModule = /** @class */ (function () {
    function TicketsPageModule() {
    }
    TicketsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tickets__["a" /* TicketsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tickets__["a" /* TicketsPage */]),
            ],
        })
    ], TicketsPageModule);
    return TicketsPageModule;
}());

//# sourceMappingURL=tickets.module.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypephotoPageModule", function() { return TypephotoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typephoto__ = __webpack_require__(380);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TypephotoPageModule = /** @class */ (function () {
    function TypephotoPageModule() {
    }
    TypephotoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__typephoto__["a" /* TypephotoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__typephoto__["a" /* TypephotoPage */]),
            ],
        })
    ], TypephotoPageModule);
    return TypephotoPageModule;
}());

//# sourceMappingURL=typephoto.module.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypephotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registro_registro__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskevidence_taskevidence__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sqlite_sqlite__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TypephotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TypephotoPage = /** @class */ (function () {
    function TypephotoPage(navCtrl, http, navParams, sqliteService) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.sqliteService = sqliteService;
        this.item = navParams.data.item;
    }
    TypephotoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TypephotoPage');
    };
    TypephotoPage.prototype.Open = function (page) {
        var item = this.navParams.data.item;
        this.sqliteService.tipofoto = "1";
        console.log("Selected Item", item);
        console.log(page);
        switch (page) {
            case "A": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registro_registro__["a" /* RegistroPage */], { item: item });
                break;
            }
            case "E": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__taskevidence_taskevidence__["a" /* TaskevidencePage */], { item: item });
                break;
            }
        }
    };
    TypephotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-typephoto',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/typephoto/typephoto.html"*/'<ion-header>\n	<ion-navbar>\n		<!--ion-title><img src="assets/imgs/icon.png" width="20%"/> TIPO FOTO</ion-title-->\n		<ion-title>TIPO DE FOTO</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n	</ion-list>\n\n	<ion-label style="padding:10px;font-weight:bolder;font-size:20px;    margin: 0px;">Seleccionar el Tipo de Foto\n	</ion-label>\n	<div style="height: 25%">\n	</div>\n\n	<button ion-button round (click)="Open(\'A\')">\n		AVANCE\n	</button>\n	<br /><br />\n	<!--  <button ion-button round (click)="Open(\'E\')">\n	  EVIDENCIA\n	</button> -->\n</ion-content>'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/typephoto/typephoto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_sqlite_sqlite__["a" /* SqliteProvider */]])
    ], TypephotoPage);
    return TypephotoPage;
}());

//# sourceMappingURL=typephoto.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typephoto2PageModule", function() { return Typephoto2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typephoto2__ = __webpack_require__(382);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Typephoto2PageModule = /** @class */ (function () {
    function Typephoto2PageModule() {
    }
    Typephoto2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__typephoto2__["a" /* Typephoto2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__typephoto2__["a" /* Typephoto2Page */]),
            ],
        })
    ], Typephoto2PageModule);
    return Typephoto2PageModule;
}());

//# sourceMappingURL=typephoto2.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Typephoto2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registro_registro__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskevidence_taskevidence__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_sqlite_sqlite__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the Typephoto2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Typephoto2Page = /** @class */ (function () {
    function Typephoto2Page(navCtrl, navParams, http, sqliteService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.sqliteService = sqliteService;
        this.item = navParams.data.item;
    }
    Typephoto2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Typephoto2Page');
    };
    Typephoto2Page.prototype.Open = function (page) {
        var item = this.navParams.data.item;
        this.sqliteService.tipofoto = "2";
        console.log("Selected Item", item);
        console.log(page);
        switch (page) {
            case "A": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registro_registro__["a" /* RegistroPage */], { item: item });
                break;
            }
            case "E": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__taskevidence_taskevidence__["a" /* TaskevidencePage */], { item: item });
                break;
            }
        }
    };
    Typephoto2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-typephoto2',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/typephoto2/typephoto2.html"*/'<ion-header>\n  <ion-navbar>\n    <!--ion-title><img src="assets/imgs/icon.png" width="20%"/> TIPO FOTO</ion-title-->\n    <ion-title>TIPO DE FOTO</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n  </ion-list>\n  \n  <ion-label style="padding:10px;font-weight:bolder;font-size:20px;    margin: 0px;">Seleccionar el Tipo de Foto</ion-label>\n    <div style="height: 25%" >\n    </div> \n\n   \n    <button ion-button round (click)="Open(\'A\')">\n      EVIDENCIA\n    </button>\n</ion-content>\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/typephoto2/typephoto2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__providers_sqlite_sqlite__["a" /* SqliteProvider */]])
    ], Typephoto2Page);
    return Typephoto2Page;
}());

//# sourceMappingURL=typephoto2.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskevidencePageModule", function() { return TaskevidencePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taskevidence__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TaskevidencePageModule = /** @class */ (function () {
    function TaskevidencePageModule() {
    }
    TaskevidencePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__taskevidence__["a" /* TaskevidencePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__taskevidence__["a" /* TaskevidencePage */]),
            ],
        })
    ], TaskevidencePageModule);
    return TaskevidencePageModule;
}());

//# sourceMappingURL=taskevidence.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoregistroPageModule", function() { return NuevoregistroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevoregistro__ = __webpack_require__(94);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NuevoregistroPageModule = /** @class */ (function () {
    function NuevoregistroPageModule() {
    }
    NuevoregistroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nuevoregistro__["a" /* NuevoregistroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nuevoregistro__["a" /* NuevoregistroPage */]),
            ],
        })
    ], NuevoregistroPageModule);
    return NuevoregistroPageModule;
}());

//# sourceMappingURL=nuevoregistro.module.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistroPageModule = /** @class */ (function () {
    function RegistroPageModule() {
    }
    RegistroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registro__["a" /* RegistroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registro__["a" /* RegistroPage */]),
            ],
        })
    ], RegistroPageModule);
    return RegistroPageModule;
}());

//# sourceMappingURL=registro.module.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Detail2PageModule", function() { return Detail2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail2__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Detail2PageModule = /** @class */ (function () {
    function Detail2PageModule() {
    }
    Detail2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail2__["a" /* Detail2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail2__["a" /* Detail2Page */]),
            ],
        })
    ], Detail2PageModule);
    return Detail2PageModule;
}());

//# sourceMappingURL=detail2.module.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return enlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return headers2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(20);

var enlace = 'http://p.servicenetwork.mx/service_network_API_test/public/index.php/api/';
//export var  enlace:string = 'http://localhost/service_network_API/public/index.php/api/'; 
var u = sessionStorage.getItem('token');
var headers2 = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
headers2.append('Content-Type', 'application/json');
headers2.append('Access-Control-Allow-Origin', '*');
headers2.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
headers2.append('Content-Type', 'application/x-www-form-urlencoded');
headers2.append("Access-Control-Expose-Headers", "xsrf-token");
headers2.append("Access-Control-Max-Age", "3600");
headers2.append("Access-Control-Allow-Headers", "X-PINGOTHER,Content-Type,X-Requested-With,accept,Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization");
headers2.append("Access-Control-Allow-Credentials", "true");
headers2.append("Authorization", "Bearer " + u);
//# sourceMappingURL=api.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(677);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Proveedor1Provider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Proveedor1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var Proveedor1Provider = /** @class */ (function () {
    function Proveedor1Provider(http) {
        this.http = http;
        //console.log('Hello Proveedor1 Provider Provider');
    }
    Proveedor1Provider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Proveedor1Provider);
    return Proveedor1Provider;
}());

//# sourceMappingURL=proveedor1.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts__ = __webpack_require__(824);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite_porter__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_projects_service__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_about_about__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_menu_menu__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_menu_menu_module__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login_module__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_task_task__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_task_task_module__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_detail_detail__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_detail2_detail2__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_detail_detail_module__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_detail2_detail2_module__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_picture_picture__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_picture_picture_module__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_Tickets_tickets__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_Tickets_tickets_module__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_registro_registro__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_registro_registro_module__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_registro_detalle_registro_detalle__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_registro_detalle_registro_detalle_module__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_nuevoregistro_nuevoregistro__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_nuevoregistro_nuevoregistro_module__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_nuevoregistro2_nuevoregistro2__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_nuevoregistro2_nuevoregistro2_module__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_notas_notas__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_notas_notas_module__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_ticket_detalle_ticket_detalle__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_ticket_detalle_ticket_detalle_module__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_ticket_comentario_ticket_comentario__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_ticket_comentario_ticket_comentario_module__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_tickets_por_tarea_tickets_por_tarea__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_tickets_por_tarea_tickets_por_tarea_module__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_nueva_nota_nueva_nota__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_nueva_nota_nueva_nota_module__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_typephoto_typephoto__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_typephoto_typephoto_module__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_typephoto2_typephoto2__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_typephoto2_typephoto2_module__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_taskevidence_taskevidence__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_taskevidence_taskevidence_module__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_geolocation__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_sqlite_sqlite__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_proveedor1_proveedor1__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__angular_common_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_proveedorusers_proveedorusers__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60_angular_particle__ = __webpack_require__(872);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_nuevoregistroevidencia_nuevoregistroevidencia__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_nuevoregistroevidencia2_nuevoregistroevidencia2__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_nuevoregistroevidencia_nuevoregistroevidencia_module__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_nuevoregistroevidencia2_nuevoregistroevidencia2_module__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__providers_environment_environment__ = __webpack_require__(873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_signature_signature__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67_angular2_signaturepad__ = __webpack_require__(874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_67_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68_angularfire2_firestore__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_68_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69_angularfire2__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_69_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__environments_environment__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__angular_fire_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__angular_fire_database__ = __webpack_require__(877);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_signature_signature__["a" /* SignaturePage */],
                //MenuPage,
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_67_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalPageModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notas/notas.module#NotasPageModule', name: 'NotasPage', segment: 'notas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nueva-nota/nueva-nota.module#NuevaNotaPageModule', name: 'NuevaNotaPage', segment: 'nueva-nota', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevoregistro2/nuevoregistro2.module#Nuevoregistro2PageModule', name: 'Nuevoregistro2Page', segment: 'nuevoregistro2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevoregistroevidencia2/nuevoregistroevidencia2.module#Nuevoregistroevidencia2PageModule', name: 'Nuevoregistroevidencia2Page', segment: 'nuevoregistroevidencia2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevoregistroevidencia/nuevoregistroevidencia.module#NuevoregistroevidenciaPageModule', name: 'NuevoregistroevidenciaPage', segment: 'nuevoregistroevidencia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/picture/picture.module#PicturePageModule', name: 'PicturePage', segment: 'picture', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro-detalle/registro-detalle.module#RegistroDetallePageModule', name: 'RegistroDetallePage', segment: 'registro-detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signature/signature.module#SignaturePageModule', name: 'SignaturePage', segment: 'signature', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task/task.module#TaskPageModule', name: 'TaskPage', segment: 'task', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ticket-detalle/ticket-detalle.module#TicketDetallePageModule', name: 'TicketDetallePage', segment: 'ticket-detalle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ticket-comentario/ticket-comentario.module#TicketComentarioPageModule', name: 'TicketComentarioPage', segment: 'ticket-comentario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tickets-por-tarea/tickets-por-tarea.module#TicketsPorTareaPageModule', name: 'TicketsPorTareaPage', segment: 'tickets-por-tarea', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/Tickets/tickets.module#TicketsPageModule', name: 'TicketsPage', segment: 'tickets', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/typephoto/typephoto.module#TypephotoPageModule', name: 'TypephotoPage', segment: 'typephoto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/typephoto2/typephoto2.module#Typephoto2PageModule', name: 'Typephoto2Page', segment: 'typephoto2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/zone-plane/zone-plane.module#ZonePlanePageModule', name: 'ZonePlanePage', segment: 'zone-plane', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/taskevidence/taskevidence.module#TaskevidencePageModule', name: 'TaskevidencePage', segment: 'taskevidence', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevoregistro/nuevoregistro.module#NuevoregistroPageModule', name: 'NuevoregistroPage', segment: 'nuevoregistro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro/registro.module#RegistroPageModule', name: 'RegistroPage', segment: 'registro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail2/detail2.module#Detail2PageModule', name: 'Detail2Page', segment: 'detail2', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_58__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_60_angular_particle__["a" /* ParticlesModule */],
                __WEBPACK_IMPORTED_MODULE_29__pages_Tickets_tickets_module__["TicketsPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_detail_detail_module__["DetailPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_detail2_detail2_module__["Detail2PageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_menu_menu_module__["MenuPageModule"],
                __WEBPACK_IMPORTED_MODULE_39__pages_notas_notas_module__["NotasPageModule"],
                __WEBPACK_IMPORTED_MODULE_47__pages_nueva_nota_nueva_nota_module__["NuevaNotaPageModule"],
                __WEBPACK_IMPORTED_MODULE_35__pages_nuevoregistro_nuevoregistro_module__["NuevoregistroPageModule"],
                __WEBPACK_IMPORTED_MODULE_37__pages_nuevoregistro2_nuevoregistro2_module__["Nuevoregistro2PageModule"],
                __WEBPACK_IMPORTED_MODULE_63__pages_nuevoregistroevidencia_nuevoregistroevidencia_module__["NuevoregistroevidenciaPageModule"],
                __WEBPACK_IMPORTED_MODULE_64__pages_nuevoregistroevidencia2_nuevoregistroevidencia2_module__["Nuevoregistroevidencia2PageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_picture_picture_module__["PicturePageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_registro_registro_module__["RegistroPageModule"],
                __WEBPACK_IMPORTED_MODULE_33__pages_registro_detalle_registro_detalle_module__["RegistroDetallePageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_task_task_module__["TaskPageModule"],
                __WEBPACK_IMPORTED_MODULE_53__pages_taskevidence_taskevidence_module__["TaskevidencePageModule"],
                __WEBPACK_IMPORTED_MODULE_43__pages_ticket_comentario_ticket_comentario_module__["TicketComentarioPageModule"],
                __WEBPACK_IMPORTED_MODULE_41__pages_ticket_detalle_ticket_detalle_module__["TicketDetallePageModule"],
                __WEBPACK_IMPORTED_MODULE_45__pages_tickets_por_tarea_tickets_por_tarea_module__["TicketsPorTareaPageModule"],
                __WEBPACK_IMPORTED_MODULE_49__pages_typephoto_typephoto_module__["TypephotoPageModule"],
                __WEBPACK_IMPORTED_MODULE_51__pages_typephoto2_typephoto2_module__["Typephoto2PageModule"],
                __WEBPACK_IMPORTED_MODULE_69_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_70__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_69_angularfire2__["AngularFireModule"],
                __WEBPACK_IMPORTED_MODULE_71__angular_fire_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_72__angular_fire_database__["a" /* AngularFireDatabaseModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_task_task__["a" /* TaskPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_detail_detail__["a" /* DetailPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_detail2_detail2__["a" /* Detail2Page */],
                __WEBPACK_IMPORTED_MODULE_26__pages_picture_picture__["a" /* PicturePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_notas_notas__["a" /* NotasPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_registro_registro__["a" /* RegistroPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_Tickets_tickets__["a" /* TicketsPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_ticket_detalle_ticket_detalle__["a" /* TicketDetallePage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_tickets_por_tarea_tickets_por_tarea__["a" /* TicketsPorTareaPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_registro_detalle_registro_detalle__["a" /* RegistroDetallePage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_nueva_nota_nueva_nota__["a" /* NuevaNotaPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_nuevoregistro_nuevoregistro__["a" /* NuevoregistroPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_nuevoregistro2_nuevoregistro2__["a" /* Nuevoregistro2Page */],
                __WEBPACK_IMPORTED_MODULE_61__pages_nuevoregistroevidencia_nuevoregistroevidencia__["a" /* NuevoregistroevidenciaPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_nuevoregistroevidencia2_nuevoregistroevidencia2__["a" /* Nuevoregistroevidencia2Page */],
                __WEBPACK_IMPORTED_MODULE_42__pages_ticket_comentario_ticket_comentario__["a" /* TicketComentarioPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_typephoto_typephoto__["a" /* TypephotoPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_typephoto2_typephoto2__["a" /* Typephoto2Page */],
                __WEBPACK_IMPORTED_MODULE_52__pages_taskevidence_taskevidence__["a" /* TaskevidencePage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_signature_signature__["a" /* SignaturePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_sqlite_porter__["a" /* SQLitePorter */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__services_projects_service__["a" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_56__providers_sqlite_sqlite__["a" /* SqliteProvider */],
                __WEBPACK_IMPORTED_MODULE_57__providers_proveedor1_proveedor1__["a" /* Proveedor1Provider */],
                __WEBPACK_IMPORTED_MODULE_59__providers_proveedorusers_proveedorusers__["a" /* ProveedorusersProvider */],
                __WEBPACK_IMPORTED_MODULE_65__providers_environment_environment__["a" /* EnvironmentProvider */],
                __WEBPACK_IMPORTED_MODULE_68_angularfire2_firestore__["AngularFirestore"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PopoverComponent = /** @class */ (function () {
    function PopoverComponent() {
        console.log('Hello PopoverComponent Component');
        this.text = 'Hello World';
    }
    PopoverComponent_1 = PopoverComponent;
    var PopoverComponent_1;
    PopoverComponent = PopoverComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'popover',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/components/popover/popover.html"*/'<!-- Generated template for the PopoverComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/components/popover/popover.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [PopoverComponent_1],
            entryComponents: [PopoverComponent_1],
        }),
        __metadata("design:paramtypes", [])
    ], PopoverComponent);
    return PopoverComponent;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 727:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 729:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket_comentario_ticket_comentario__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_sqlite__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TicketDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TicketDetallePage = /** @class */ (function () {
    function TicketDetallePage(navCtrl, navParams, modalCtrl, sqliteService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.sqliteService = sqliteService;
        this.ticket = navParams.data.ticket;
    }
    TicketDetallePage.prototype.nuevoComentario = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__ticket_comentario_ticket_comentario__["a" /* TicketComentarioPage */]);
        modal.present();
    };
    TicketDetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TicketDetallePage');
    };
    TicketDetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ticket-detalle',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/ticket-detalle/ticket-detalle.html"*/'<ion-header>\n\n  <ion-navbar>\n  <ion-title> FECHA: {{ ticket.created_at }}  </ion-title>\n  \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n        \n        <ion-grid class="sec2"  style="margin-bottom: 0px;">\n    \n<ion-row justify-content-start>\n    <ion-col col-4>\n     <ion-card>\n  <h2 class="fontPrimaria" style="    font-size: 18px;\n    text-transform: uppercase;\n    text-align: center;">STATUS:</h2>\n  </ion-card>\n    </ion-col>\n    <ion-col col-8>\n       <ion-card>\n      <p class="fontPrimaria" style="text-transform:uppercase; text-align: left;">{{ ticket.status }}</p>\n      </ion-card>\n    </ion-col>\n   \n  </ion-row>\n  </ion-grid>\n       \n\n  <ion-grid class="sec1" >\n    \n<ion-row justify-content-start>\n    <ion-col col-6>\n     <ion-card>\n  <h2 class="fontPrimaria" style="    font-size: 18px;\n    text-transform: uppercase;\n    text-align: center; ">PRIORIDAD:</h2>\n  </ion-card>\n    </ion-col>\n    <ion-col col-6>\n      <ion-card>\n      <p class="fontPrimaria" style="text-transform:uppercase; text-align: left;    "> {{ ticket.priority }}</p></ion-card>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n\n   <ion-grid class="sec3">\n    \n<ion-row justify-content-start>\n    <ion-col col-12>\n     <ion-card>\n  <h2 class="fontPrimaria" style="    font-size: 30px;\n    text-transform: uppercase;\n    text-align: left;       border-bottom: 1px solid;">TIPO</h2>\n  </ion-card>\n    </ion-col>\n    <ion-col col-12>\n     <p class="fontPrimaria" style="text-align: justify;"> {{ ticket.type_id}}</p>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n\n<ion-grid class="sec4">\n    \n<ion-row justify-content-start>\n    <ion-col col-12>\n     <ion-card>\n  <h2 class="fontPrimaria" style="    font-size: 30px;\n    text-transform: uppercase;\n    text-align: left;        border-bottom: 1px solid;">DESCRIPCION</h2>\n  </ion-card>\n    </ion-col>\n    <ion-col col-12>\n      <p class="fontPrimaria" style="text-align: justify;padding:3px;">{{  ticket.subject }}</p>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n\n<ion-grid>\n    \n<ion-row justify-content-start>\n    <ion-col col-10>\n     <ion-card>\n  <h2 style="    font-size: 30px;\n    text-transform: uppercase;\n    text-align: left;    color: #000;    border-bottom: 1px solid;">COMENTARIOS</h2>\n  </ion-card>\n    </ion-col>\n    <ion-col col-1>\n  <ion-icon style="font-size: 3em;" ios="ios-attach" md="md-add"  (click)="nuevoComentario()"></ion-icon>\n    </ion-col>\n    <ion-col col-12>\n      <button ion-item *ngFor="let comentario of ticket.comentarios" >\n          {{ comentario.index}} : {{ comentario.respuesta }}\n        </button>\n    </ion-col>\n  </ion-row>\n  </ion-grid>\n\n        \n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/ticket-detalle/ticket-detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_sqlite__["a" /* SqliteProvider */]])
    ], TicketDetallePage);
    return TicketDetallePage;
}());

//# sourceMappingURL=ticket-detalle.js.map

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 764:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';

/*import { HomePage } from '../pages/home/home';
import { TaskPage } from '../pages/task/task';
import { NuevoregistroPage } from '../pages/nuevoregistro/nuevoregistro';*/
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 853:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 434,
	"./af.js": 434,
	"./ar": 435,
	"./ar-dz": 436,
	"./ar-dz.js": 436,
	"./ar-kw": 437,
	"./ar-kw.js": 437,
	"./ar-ly": 438,
	"./ar-ly.js": 438,
	"./ar-ma": 439,
	"./ar-ma.js": 439,
	"./ar-sa": 440,
	"./ar-sa.js": 440,
	"./ar-tn": 441,
	"./ar-tn.js": 441,
	"./ar.js": 435,
	"./az": 442,
	"./az.js": 442,
	"./be": 443,
	"./be.js": 443,
	"./bg": 444,
	"./bg.js": 444,
	"./bm": 445,
	"./bm.js": 445,
	"./bn": 446,
	"./bn.js": 446,
	"./bo": 447,
	"./bo.js": 447,
	"./br": 448,
	"./br.js": 448,
	"./bs": 449,
	"./bs.js": 449,
	"./ca": 450,
	"./ca.js": 450,
	"./cs": 451,
	"./cs.js": 451,
	"./cv": 452,
	"./cv.js": 452,
	"./cy": 453,
	"./cy.js": 453,
	"./da": 454,
	"./da.js": 454,
	"./de": 455,
	"./de-at": 456,
	"./de-at.js": 456,
	"./de-ch": 457,
	"./de-ch.js": 457,
	"./de.js": 455,
	"./dv": 458,
	"./dv.js": 458,
	"./el": 459,
	"./el.js": 459,
	"./en-au": 460,
	"./en-au.js": 460,
	"./en-ca": 461,
	"./en-ca.js": 461,
	"./en-gb": 462,
	"./en-gb.js": 462,
	"./en-ie": 463,
	"./en-ie.js": 463,
	"./en-il": 464,
	"./en-il.js": 464,
	"./en-nz": 465,
	"./en-nz.js": 465,
	"./eo": 466,
	"./eo.js": 466,
	"./es": 467,
	"./es-do": 468,
	"./es-do.js": 468,
	"./es-us": 469,
	"./es-us.js": 469,
	"./es.js": 467,
	"./et": 470,
	"./et.js": 470,
	"./eu": 471,
	"./eu.js": 471,
	"./fa": 472,
	"./fa.js": 472,
	"./fi": 473,
	"./fi.js": 473,
	"./fo": 474,
	"./fo.js": 474,
	"./fr": 475,
	"./fr-ca": 476,
	"./fr-ca.js": 476,
	"./fr-ch": 477,
	"./fr-ch.js": 477,
	"./fr.js": 475,
	"./fy": 478,
	"./fy.js": 478,
	"./gd": 479,
	"./gd.js": 479,
	"./gl": 480,
	"./gl.js": 480,
	"./gom-latn": 481,
	"./gom-latn.js": 481,
	"./gu": 482,
	"./gu.js": 482,
	"./he": 483,
	"./he.js": 483,
	"./hi": 484,
	"./hi.js": 484,
	"./hr": 485,
	"./hr.js": 485,
	"./hu": 486,
	"./hu.js": 486,
	"./hy-am": 487,
	"./hy-am.js": 487,
	"./id": 488,
	"./id.js": 488,
	"./is": 489,
	"./is.js": 489,
	"./it": 490,
	"./it.js": 490,
	"./ja": 491,
	"./ja.js": 491,
	"./jv": 492,
	"./jv.js": 492,
	"./ka": 493,
	"./ka.js": 493,
	"./kk": 494,
	"./kk.js": 494,
	"./km": 495,
	"./km.js": 495,
	"./kn": 496,
	"./kn.js": 496,
	"./ko": 497,
	"./ko.js": 497,
	"./ky": 498,
	"./ky.js": 498,
	"./lb": 499,
	"./lb.js": 499,
	"./lo": 500,
	"./lo.js": 500,
	"./lt": 501,
	"./lt.js": 501,
	"./lv": 502,
	"./lv.js": 502,
	"./me": 503,
	"./me.js": 503,
	"./mi": 504,
	"./mi.js": 504,
	"./mk": 505,
	"./mk.js": 505,
	"./ml": 506,
	"./ml.js": 506,
	"./mn": 507,
	"./mn.js": 507,
	"./mr": 508,
	"./mr.js": 508,
	"./ms": 509,
	"./ms-my": 510,
	"./ms-my.js": 510,
	"./ms.js": 509,
	"./mt": 511,
	"./mt.js": 511,
	"./my": 512,
	"./my.js": 512,
	"./nb": 513,
	"./nb.js": 513,
	"./ne": 514,
	"./ne.js": 514,
	"./nl": 515,
	"./nl-be": 516,
	"./nl-be.js": 516,
	"./nl.js": 515,
	"./nn": 517,
	"./nn.js": 517,
	"./pa-in": 518,
	"./pa-in.js": 518,
	"./pl": 519,
	"./pl.js": 519,
	"./pt": 520,
	"./pt-br": 521,
	"./pt-br.js": 521,
	"./pt.js": 520,
	"./ro": 522,
	"./ro.js": 522,
	"./ru": 523,
	"./ru.js": 523,
	"./sd": 524,
	"./sd.js": 524,
	"./se": 525,
	"./se.js": 525,
	"./si": 526,
	"./si.js": 526,
	"./sk": 527,
	"./sk.js": 527,
	"./sl": 528,
	"./sl.js": 528,
	"./sq": 529,
	"./sq.js": 529,
	"./sr": 530,
	"./sr-cyrl": 531,
	"./sr-cyrl.js": 531,
	"./sr.js": 530,
	"./ss": 532,
	"./ss.js": 532,
	"./sv": 533,
	"./sv.js": 533,
	"./sw": 534,
	"./sw.js": 534,
	"./ta": 535,
	"./ta.js": 535,
	"./te": 536,
	"./te.js": 536,
	"./tet": 537,
	"./tet.js": 537,
	"./tg": 538,
	"./tg.js": 538,
	"./th": 539,
	"./th.js": 539,
	"./tl-ph": 540,
	"./tl-ph.js": 540,
	"./tlh": 541,
	"./tlh.js": 541,
	"./tr": 542,
	"./tr.js": 542,
	"./tzl": 543,
	"./tzl.js": 543,
	"./tzm": 544,
	"./tzm-latn": 545,
	"./tzm-latn.js": 545,
	"./tzm.js": 544,
	"./ug-cn": 546,
	"./ug-cn.js": 546,
	"./uk": 547,
	"./uk.js": 547,
	"./ur": 548,
	"./ur.js": 548,
	"./uz": 549,
	"./uz-latn": 550,
	"./uz-latn.js": 550,
	"./uz.js": 549,
	"./vi": 551,
	"./vi.js": 551,
	"./x-pseudo": 552,
	"./x-pseudo.js": 552,
	"./yo": 553,
	"./yo.js": 553,
	"./zh-cn": 554,
	"./zh-cn.js": 554,
	"./zh-hk": 555,
	"./zh-hk.js": 555,
	"./zh-tw": 556,
	"./zh-tw.js": 556
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 853;

/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvironmentProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the EnvironmentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EnvironmentProvider = /** @class */ (function () {
    function EnvironmentProvider(http) {
        this.http = http;
        console.log('Hello EnvironmentProvider Provider');
    }
    EnvironmentProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], EnvironmentProvider);
    return EnvironmentProvider;
}());

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyBQqKH5l3G-tMnnXeexQQLUc1hE6ffERso',
        authDomain: 'service-network-88416.web.app',
        databaseURL: 'https://service-network-88416.firebaseio.com',
        projectId: 'service-network-88416',
        storageBucket: 'service-network-88416.appspot.com',
        messagingSenderId: '777129282000'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevoregistro_nuevoregistro__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_nuevoregistro2_nuevoregistro2__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registro_detalle_registro_detalle__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_sqlite_sqlite__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase_firestore__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_fire_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_throw__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_operators__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

















var RegistroPage = /** @class */ (function () {
    /* doRefresh(refresher) {
        console.log('Begin async operation', refresher);
      
        setTimeout(() => {
          this.LoadData();
            refresher.complete();
          }, 2000);
        } */
    function RegistroPage(events, navCtrl, sqliteService, http, navParams, _DomSanitizer, camera, geolocation, alertCtrl, storage, firestore) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.sqliteService = sqliteService;
        this.http = http;
        this.navParams = navParams;
        this._DomSanitizer = _DomSanitizer;
        this.camera = camera;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.firestore = firestore;
        this.ip2 = "http://198.50.116.250/service_network_API/public/index.php/api";
        this.Image = [];
        this.base64Image = [];
        this.item = navParams.data.item;
        this.evidencia = navParams.data.evidencia;
        this.FBcode = navParams.data.item;
        console.log("dato perdido: " + JSON.stringify(this.item));
        console.log("dato perdido: " + JSON.stringify(this.evidencia));
        console.log("dato perdido: " + JSON.stringify(this.FBcode));
        /* this.LoadData(); {
            this.events.subscribe('handleReloadListPhoto', statsData => {
                this.LoadData();
            });
        } */
    }
    RegistroPage.prototype.swipeEvent = function (e) {
        if (e.direction == 4) {
            //console.log("izquierda");
            this.navCtrl.pop();
        }
    };
    RegistroPage.prototype.loadData = function () {
    };
    RegistroPage.prototype.LoadDatas = function () {
        var _this = this;
        this.ip = this.sqliteService.ip;
        this.token = this.sqliteService.token;
        //let url = "";
        //if (typeof this.evidencia !== "undefined")  {
        //url = this.ip + `/evidence_photo`;
        //url = this.ip + `/evidenceTask`;
        var url = "http://198.50.116.250/service_network_API/public/index.php/api/getPhotosByPojectId";
        var headers2 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers2.append('Content-Type', 'application/json');
        headers2.append('Access-Control-Allow-Origin', '*');
        headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers2.append('Content-Type', 'application/x-www-form-urlencoded');
        headers2.append('Authorization', 'Bearer ' + this.token);
        // let data = {
        //   idEvidence: this.evidencia.evidence_id,
        //   idTask: this.item.id
        // };
        var ProjectId = this.sqliteService.GerProjectId();
        var tipoFoto = this.sqliteService.GerTipoFoto();
        var data = {
            project_id: ProjectId,
            task_id: this.item.tareaId,
            photo_type_id: tipoFoto
        };
        console.log("data: " + JSON.stringify(data));
        this.http.post(url, JSON.stringify(data), { headers: headers2 }).subscribe(function (data) {
            _this.registros = data.json();
            console.log("Registros_1: " + JSON.stringify(_this.registros));
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
    };
    RegistroPage.prototype.takePicturesCamera = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, result, image, a, tareaid, idd, file, filePath, pictures, task, tar;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
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
                        };
                        this.geolocation.getCurrentPosition().then(function (resp) {
                            console.log("Coordenadas 1: " + resp.coords.latitude, resp.coords.longitude);
                            _this.longitud = resp.coords.longitude;
                            _this.latitud = resp.coords.latitude;
                        }).catch(function (error) {
                            console.log('Error getting location', error);
                        });
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        result = _a.sent();
                        image = "data:image/jpeg;base64," + result;
                        a = Date();
                        tareaid = this.sqliteService.GetTareaId();
                        idd = Math.random().toString(36).substring(2);
                        file = "data:image/jpeg;base64," + result;
                        filePath = "fotosAvance/" + tareaid + "/" + idd;
                        pictures = this.storage.ref(filePath);
                        task = pictures.putString(image, 'data_url');
                        pictures.getDownloadURL().subscribe(function (ur) {
                            console.log("nueva funcion: " + ur);
                        });
                        console.log("a punto de entrar");
                        tar = parseFloat(tareaid);
                        task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_14_rxjs_operators__["finalize"])(function () { return pictures.getDownloadURL().subscribe(function (url) {
                            _this.datas = {
                                key: idd,
                                nombre: "Foto de avance de la tarea: " + _this.item.nombreTarea + ". Foto desde la cámara",
                                url: url,
                                idTarea: tar,
                                usuario: _this.sqliteService.GerUserId(),
                                latitud: _this.latitud,
                                longitud: _this.longitud
                            };
                            console.log(JSON.stringify(_this.datas));
                            _this.firestore.collection('fotosAvance').doc("" + tar).collection('fotos').add(_this.datas);
                        }); })).subscribe();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistroPage.prototype.takePicturesGallery = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, result, image, a, tareaid, idd, file, filePath, pictures, task, tar;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
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
                        };
                        this.geolocation.getCurrentPosition().then(function (resp) {
                            console.log("Coordenadas 1: " + resp.coords.latitude, resp.coords.longitude);
                            _this.latitud = resp.coords.latitude,
                                _this.longitud = resp.coords.longitude;
                        }).catch(function (error) {
                            console.log('Error getting location', error);
                        });
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        result = _a.sent();
                        image = "data:image/jpeg;base64," + result;
                        a = Date();
                        tareaid = this.sqliteService.GetTareaId();
                        idd = Math.random().toString(36).substring(2);
                        file = "data:image/jpeg;base64," + result;
                        filePath = "fotosAvance/" + tareaid + "/" + idd;
                        pictures = this.storage.ref(filePath);
                        task = pictures.putString(image, 'data_url');
                        pictures.getDownloadURL().subscribe(function (ur) {
                            console.log("nueva funcion: " + ur);
                        });
                        console.log("a punto de entrar");
                        tar = parseFloat(tareaid);
                        task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_14_rxjs_operators__["finalize"])(function () { return pictures.getDownloadURL().subscribe(function (url) {
                            _this.datas = {
                                key: idd,
                                nombre: "Foto de avance de la tarea: " + _this.item.nombreTarea + ". Foto desde la galería",
                                url: url,
                                idTarea: tar,
                                latitud: _this.latitud,
                                longitud: _this.longitud
                            };
                            console.log(JSON.stringify(_this.datas));
                            _this.firestore.collection('fotosAvance').doc("" + tar).collection('fotos').add(_this.datas);
                        }); })).subscribe();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistroPage.prototype.takePicturesCamerass = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, watch, result, image, a, tareaid, idd, file, filePath, pictures, task, tar;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 100,
                            destinationType: this.camera.DestinationType.DATA_URL,
                            /* sourceType: this.camera.PictureSourceType.PHOTOLIBRARY, */
                            encodingType: this.camera.EncodingType.JPEG,
                            mediaType: this.camera.MediaType.PICTURE,
                            targetWidth: 1024,
                            targetHeight: 768,
                            saveToPhotoAlbum: true,
                            correctOrientation: true
                        };
                        this.geolocation.getCurrentPosition().then(function (resp) {
                            console.log("Coordenadas 1: " + resp.coords.latitude, resp.coords.longitude);
                        }).catch(function (error) {
                            console.log('Error getting location', error);
                        });
                        watch = this.geolocation.watchPosition();
                        watch.subscribe(function (data) {
                            console.log("Coordenadas 2: " + data.coords.latitude, data.coords.longitude);
                            // data can be a set of coordinates, or an error (if an error occurred).
                        });
                        return [4 /*yield*/, this.camera.getPicture(options)];
                    case 1:
                        result = _a.sent();
                        image = "data:image/jpeg;base64," + result;
                        a = Date();
                        tareaid = this.sqliteService.GetTareaId();
                        idd = Math.random().toString(36).substring(2);
                        file = "data:image/jpeg;base64," + result;
                        filePath = "fotosEvidencia/" + tareaid + "/" + this.FBcode + "/" + idd;
                        pictures = this.storage.ref(filePath);
                        task = pictures.putString(image, 'data_url');
                        pictures.getDownloadURL().subscribe(function (ur) {
                            console.log("nueva funcion: " + ur);
                        });
                        console.log("a punto de entrar");
                        tar = parseFloat(tareaid);
                        task.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_14_rxjs_operators__["finalize"])(function () { return pictures.getDownloadURL().subscribe(function (url) {
                            _this.datas = {
                                key: idd,
                                identificador: _this.FBcode,
                                nombre: idd,
                                url: url,
                                idTarea: tar,
                            };
                            console.log(JSON.stringify(_this.datas));
                            _this.firestore.collection('fotosAvance').doc("" + tar).collection('fotos').add(_this.datas);
                        }); })).subscribe();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegistroPage.prototype.takePicturesCameras = function () {
        //this.geolocationNative();
        var _this = this;
        /* Datos para la imagen */
        var userId = this.sqliteService.GerUserId();
        var IdProject = this.sqliteService.GerProjectId();
        var photoType = '1';
        var entitiesId = this.sqliteService.GetEntitiesId();
        var photoName = "Foto de avance de la Tarea: " + this.item.nombreTarea;
        var photoDescription = "Foto de Avance de la Tarea: " + this.item.nombreTarea + ". Foto cargada desde el movil";
        var tphoto = 1;
        var evi_id = 0;
        this.AvaEvi = "Avance";
        /* Datos para la imagen Fin*/
        this.geolocation.getCurrentPosition().then(function (geoposition) {
            var options = {
                quality: 100,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
                targetWidth: 1024,
                targetHeight: 768,
                saveToPhotoAlbum: true,
                correctOrientation: true
            };
            _this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                console.log('imageData: ' + imageData);
                if (imageData == 1) {
                    console.log("Se tomo la foto");
                }
                else {
                    console.log("No se tomo la foto");
                }
                _this.base64Image.push('data:image/jpeg;base64,' + imageData);
                _this.Image.push({ image: 'data:image/jpeg;base64,' + imageData, latitude: geoposition.coords.latitude.toString(), longitude: geoposition.coords.longitude.toString() });
                // this.Image.push(imageData)
                /* enviar imagen al servidor */
                var reg = {
                    task_id: _this.item.tareaId,
                    project_id: IdProject,
                    photo_clasification_id: "1",
                    geo_latitude: _this.Image[0].latitude,
                    geo_longitude: _this.Image[0].longitude,
                    photo_type_id: photoType,
                    task_evidence_id: evi_id,
                    task_note_id: "",
                    entities_id: entitiesId,
                    last_change_user_id: userId,
                    image: _this.Image[0].image,
                    photo_name: photoName,
                    description: photoDescription,
                };
                console.log(_this.Project);
                //console.log(this.Project.id);
                console.log(reg);
                //this.sqliteService.createRegistro2(reg);
                /* enviar imagen al servidor fin*/
                var headers2 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                headers2.append('Content-Type', 'application/json');
                headers2.append('Access-Control-Allow-Origin', '*');
                headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
                headers2.append('Content-Type', 'application/x-www-form-urlencoded');
                headers2.append('Authorization', 'Bearer ' + _this.token);
                //const requestOptions = new RequestOptions({ headers: headers2 });
                console.log(JSON.stringify(reg));
                //var dato = Array.of(registro);
                var id = reg["photo_type_id"];
                console.log("photo_type_id1: " + id);
                var url = _this.ip2 + '/uploadPhoto';
                /* `http://198.50.116.250/apinetwork/public/index.php/api/registros` */
                _this.http.post(url, JSON.stringify(reg), { headers: headers2 })
                    .subscribe(function (data) {
                    console.log("photo_type_id2: " + id);
                    var alert1 = _this.alertCtrl.create({
                        title: "Registro",
                        subTitle: "Imagen guardada con exito!",
                        buttons: [{
                                text: 'Ok',
                                handler: function () {
                                    _this.ionViewDidLoad();
                                }
                            }]
                    });
                    alert1.present();
                    if (alert1.present()) {
                        console.log("alert.present " + id);
                    }
                    //this.events.publish('handlePhotoOk', '');
                    //let nav = this.app.getActiveNav();
                    //this.app.getRootNav().setRoot(RegistroPage, { item: item });
                }, function (error) {
                    console.log(error);
                    var alert1 = _this.alertCtrl.create({
                        title: "Registro",
                        subTitle: "Error al guardar Foto!",
                        buttons: ['Ok']
                    });
                    alert1.present();
                });
            }, function (err) {
                // Handle error
            });
        });
    };
    RegistroPage.prototype.takePicturesGallerys = function () {
        //this.geolocationNative();
        var _this = this;
        /* Datos para la imagen */
        var userId = this.sqliteService.GerUserId();
        var IdProject = this.sqliteService.GerProjectId();
        var photoType = '1';
        var entitiesId = this.sqliteService.GetEntitiesId();
        var photoName = "Foto de avance de la Tarea: " + this.item.nombreTarea;
        var photoDescription = "Foto de Avance de la Tarea: " + this.item.nombreTarea + ". Foto cargada desde el movil";
        var tphoto = 1;
        var evi_id = 0;
        this.AvaEvi = "Avance";
        /* Datos para la imagen Fin*/
        this.geolocation.getCurrentPosition().then(function (geoposition) {
            var options = {
                quality: 100,
                destinationType: _this.camera.DestinationType.DATA_URL,
                sourceType: _this.camera.PictureSourceType.PHOTOLIBRARY,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
                targetWidth: 1024,
                targetHeight: 768,
                saveToPhotoAlbum: true,
                correctOrientation: true
            };
            _this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                console.log('imageData: ' + imageData);
                if (imageData == 1) {
                    console.log("Se tomo la foto");
                }
                else {
                    console.log("No se tomo la foto");
                }
                _this.base64Image.push('data:image/jpeg;base64,' + imageData);
                _this.Image.push({ image: 'data:image/jpeg;base64,' + imageData, latitude: geoposition.coords.latitude.toString(), longitude: geoposition.coords.longitude.toString() });
                // this.Image.push(imageData)
                /* enviar imagen al servidor */
                var reg = {
                    task_id: _this.item.tareaId,
                    project_id: IdProject,
                    photo_clasification_id: "1",
                    geo_latitude: _this.Image[0].latitude,
                    geo_longitude: _this.Image[0].longitude,
                    photo_type_id: photoType,
                    task_evidence_id: evi_id,
                    task_note_id: "",
                    entities_id: entitiesId,
                    last_change_user_id: userId,
                    image: _this.Image[0].image,
                    photo_name: photoName,
                    description: photoDescription,
                };
                console.log(_this.Project);
                //console.log(this.Project.id);
                console.log(reg);
                //this.sqliteService.createRegistro2(reg);
                /* enviar imagen al servidor fin*/
                var headers2 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                headers2.append('Content-Type', 'application/json');
                headers2.append('Access-Control-Allow-Origin', '*');
                headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
                headers2.append('Content-Type', 'application/x-www-form-urlencoded');
                headers2.append('Authorization', 'Bearer ' + _this.token);
                //const requestOptions = new RequestOptions({ headers: headers2 });
                console.log(JSON.stringify(reg));
                //var dato = Array.of(registro);
                var id = reg["photo_type_id"];
                console.log("photo_type_id1: " + id);
                var url = _this.ip2 + '/uploadPhoto';
                /* `http://198.50.116.250/apinetwork/public/index.php/api/registros` */
                _this.http.post(url, JSON.stringify(reg), { headers: headers2 })
                    .subscribe(function (data) {
                    console.log("photo_type_id2: " + id);
                    var alert1 = _this.alertCtrl.create({
                        title: "Registro",
                        subTitle: "Imagen guardada con exito!",
                        buttons: [{
                                text: 'Ok',
                                handler: function () {
                                    _this.ionViewDidLoad();
                                }
                            }]
                    });
                    alert1.present();
                    if (alert1.present()) {
                        console.log("alert.present " + id);
                    }
                    //this.events.publish('handlePhotoOk', '');
                    //let nav = this.app.getActiveNav();
                    //this.app.getRootNav().setRoot(RegistroPage, { item: item });
                }, function (error) {
                    console.log(error);
                    var alert1 = _this.alertCtrl.create({
                        title: "Registro",
                        subTitle: "Error al guardar Foto!",
                        buttons: ['Ok']
                    });
                    alert1.present();
                });
            }, function (err) {
                // Handle error
            });
        });
    };
    RegistroPage.prototype.Open = function (page, registro) {
        var item = this.navParams.data.item;
        console.log("Selected Item", item);
        console.log(page);
        console.log("Registro: " + registro);
        switch (page) {
            case "photo": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__nuevoregistro_nuevoregistro__["a" /* NuevoregistroPage */], { item: item });
                break;
            }
            case "photoGallery": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_nuevoregistro2_nuevoregistro2__["a" /* Nuevoregistro2Page */], { item: item });
                break;
            }
            case "D": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__registro_detalle_registro_detalle__["a" /* RegistroDetallePage */], { registro: registro, item: item });
                break;
            }
        }
    };
    /*
    registroSelected( registro: string) {
      console.log("Selected Ticket", registro);
      this.navCtrl.push(RegistroDetallePage, { registro: registro });
    }
  
    NuevoRegistro(){
      let item = this.navParams.data.item;
      console.log("Selected Item", item);
      this.navCtrl.push(NuevoregistroPage, { item: item } );
    }
    */
    RegistroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroPage');
        var taskId = this.sqliteService.GetTareaId();
        this.collection = this.firestore.collection("fotosAvance/" + taskId + "/fotos");
        this.todo = this.collection.valueChanges();
    };
    RegistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registro',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/registro/registro.html"*/'<!--\nGenerated template for the RegistroPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<!--ion-title><img src="assets/imgs/icon.png" width="20%"/> REGISTROS-->\n		<ion-title style="width: 100%;\n		height: 100%;\n		text-align: center;\n		padding: unset">\n			<!-- <ion-icon style="font-size: 2.0em; margin-left:80%;" ios="ios-attach" md="md-add" (click)="Open(\'photo\')"></ion-icon> -->\n			<ion-icon style="font-size: 2.0em; margin-left:80%;" ios="ios-attach" md="md-add" (click)="takePicturesCamera()"></ion-icon>\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n		\n	<ion-list>\n		<ion-item *ngIf="registros == 0">\n			<div class="sec2">\n				<p class="fontPrimaria" style="padding:20px;margin: 0px;">\n					Aun no hay fotos de Avance que mostrar\n				</p>\n			</div>\n		</ion-item>\n\n		<ion-item style="padding: 20px;" *ngFor="let item of todo | async" >\n			<!-- <div *ngIf="FBcode == item.identificador"> -->\n				<ion-item >\n			<ion-avatar item-start style="border-radius: 0;" (click)="Open(\'D\', registro)">\n				<img style="width: 200px; height: 150px; border: #FDC938 3px solid; border-radius: 0;" [src]="item.url">\n			</ion-avatar>\n			<ion-note item-end>\n				<!-- <h3 style="font-size: 20px; color: #404040;"><b>Nombre:</b> {{ registro.photoName }}</h3>\n				<h3 style="font-size: 12px; color: #404040;"><b>Descripción:</b> {{ registro.description }}</h3>\n				<h3 style="font-size: 12px; color: #404040;"><b>Latitud:</b> {{ registro.geoLatitude }}</h3>\n				<h3 style="font-size: 12px; color: #404040;"><b>Longitud:</b> {{ registro.geoLongitude }}</h3> -->\n				<h3 style="font-size: 12px; color: #404040;"><b>¿Quién la subió?:</b> {{ item.nombre }}</h3>\n				<!-- <h3 style="font-size: 12px; color: #404040;"><b>Fecha - Hora:</b> {{ registro.creationDate }}</h3> -->\n			</ion-note>\n				</ion-item>\n		<!-- </div> -->\n		\n		</ion-item>\n	</ion-list>\n	\n</ion-content>\n\n<ion-footer>\n		<ion-grid>\n		  <ion-row>\n			<ion-col size="12">\n			  <ion-col size="6">\n				<ion-icon class="icon-action-buttons" name="camera" (click)="takePicturesCamera()" style="font-size: 30px;"></ion-icon>\n			  </ion-col>\n			  <ion-col size="6">\n				<ion-icon class="icon-action-buttons" name="images" (click)="takePicturesGallery()" style="font-size: 30px;"></ion-icon>\n			  </ion-col>\n			</ion-col>\n		  </ion-row>\n		</ion-grid>\n	  </ion-footer>'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/registro/registro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_sqlite_sqlite__["a" /* SqliteProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_11__angular_fire_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_12_angularfire2_firestore__["AngularFirestore"]])
    ], RegistroPage);
    return RegistroPage;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoregistroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_proveedor1_proveedor1__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var NuevoregistroPage = /** @class */ (function () {
    function NuevoregistroPage(events, alertCtrl, navCtrl, navParams, camera, geolocation, sqliteService, http, proveedor) {
        var _this = this;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.geolocation = geolocation;
        this.sqliteService = sqliteService;
        this.http = http;
        this.proveedor = proveedor;
        this.Image = [];
        this.base64Image = [];
        this.Position = [];
        this.registro = {};
        this.inputDisabled = false;
        this.item = navParams.data.item;
        this.evidencia = navParams.data.evidencia;
        {
            this.events.subscribe('handlePhotoOk', function (statsData) {
                //this.ionViewDidLoad();
                //this.navCtrl.push(RegistroPage, { item: this.item });
                _this.events.publish('handleReloadListPhoto', '');
                //this.navCtrl.pop();
            });
        }
    }
    NuevoregistroPage.prototype.ionViewDidLoad = function () {
        console.log('inicio LoginPage');
        this.takePicture();
        this.AvaEvi = "";
        this.nombre = "";
        this.description = "";
        this.photoType = "";
        this.Image = [];
        this.base64Image = [];
        this.Position = [];
        this.registro = {};
        this.latitude = "";
        this.longitude = "";
    };
    NuevoregistroPage.prototype.takePicture = function () {
        //this.geolocationNative();
        var _this = this;
        /* Datos para la imagen */
        var userId = this.sqliteService.GerUserId();
        var IdProject = this.sqliteService.GerProjectId();
        var photoType = '1';
        var entitiesId = this.sqliteService.GetEntitiesId();
        var photoName = "Foto de avance de la Tarea: " + this.item.nombreTarea;
        var photoDescription = "Foto de Avance de la Tarea: " + this.item.nombreTarea + ". Foto cargada desde el movil";
        var tphoto = 1;
        var evi_id = 0;
        this.AvaEvi = "Avance";
        /* Datos para la imagen Fin*/
        this.geolocation.getCurrentPosition().then(function (geoposition) {
            var options = {
                quality: 100,
                destinationType: _this.camera.DestinationType.DATA_URL,
                encodingType: _this.camera.EncodingType.JPEG,
                mediaType: _this.camera.MediaType.PICTURE,
                targetWidth: 1024,
                targetHeight: 768,
                saveToPhotoAlbum: true,
                correctOrientation: true
            };
            _this.camera.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                console.log('imageData: ' + imageData);
                if (imageData == 1) {
                    console.log("Se tomo la foto");
                }
                else {
                    console.log("No se tomo la foto");
                }
                _this.base64Image.push('data:image/jpeg;base64,' + imageData);
                _this.Image.push({ image: 'data:image/jpeg;base64,' + imageData, latitude: geoposition.coords.latitude.toString(), longitude: geoposition.coords.longitude.toString() });
                // this.Image.push(imageData)
                /* enviar imagen al servidor */
                var reg = {
                    task_id: _this.item.tareaId,
                    project_id: IdProject,
                    photo_clasification_id: "1",
                    geo_latitude: _this.Image[0].latitude,
                    geo_longitude: _this.Image[0].longitude,
                    photo_type_id: photoType,
                    task_evidence_id: evi_id,
                    task_note_id: "",
                    entities_id: entitiesId,
                    last_change_user_id: userId,
                    image: _this.Image[0].image,
                    photo_name: photoName,
                    description: photoDescription,
                };
                console.log(_this.Project);
                //console.log(this.Project.id);
                console.log(reg);
                _this.sqliteService.createRegistro2(reg);
                /* enviar imagen al servidor fin*/
            }, function (err) {
                // Handle error
            });
        });
    };
    NuevoregistroPage.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    NuevoregistroPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    NuevoregistroPage.prototype.registroSubmit = function (registro) {
        //this.Image = [{"image":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAj//2Q==","latitude":"25.6588239","longitude":"-100.2604567"}];
        // console.log("Muestra Objeto Imagen");
        // console.log(this.Image);
        // if (this.AvaEvi == ""){
        //   let alert1 = this.alertCtrl.create({
        //     title: "Alerta",
        //     subTitle: "Favor de seleccionar Tipo !",
        //     buttons: ['Ok']
        //   });
        //   alert1.present();
        //   return ;
        // }
        // if (this.nombre == ""){
        //   let alert1 = this.alertCtrl.create({
        //     title: "Alerta",
        //     subTitle: "Favor capturar el Nombre !",
        //     buttons: ['Ok']
        //   });
        //   alert1.present();
        //   return ;
        // }
        var elementBtnUploadPhoto = document.getElementById("btn-upload-photo");
        this.inputDisabled = true;
        elementBtnUploadPhoto.disabled = true;
        var userId = this.sqliteService.GerUserId();
        var IdProject = this.sqliteService.GerProjectId();
        var photoType = '1';
        var entitiesId = this.sqliteService.GetEntitiesId();
        var photoName = "Foto de avance de la Tarea: " + this.item.nombreTarea;
        var photoDescription = "Foto de Avance de la Tarea: " + this.item.nombreTarea + ". Foto cargada desde el movil";
        var tphoto = 1;
        var evi_id = 0;
        this.AvaEvi = "Avance";
        if (this.Image.length == 0) {
            this.inputDisabled = false;
            elementBtnUploadPhoto.disabled = false;
            var alert1 = this.alertCtrl.create({
                title: "Alerta",
                subTitle: "No se ha capturado la Foto.",
                buttons: ['Ok']
            });
            alert1.present();
            return;
        }
        /* if (photoName == ""){
            this.inputDisabled = false;
            elementBtnUploadPhoto.disabled = false;

            let alert1 = this.alertCtrl.create({
                title: "Error",
                subTitle: "Debe ingresar un nombre para la Foto.",
                buttons: ['Ok']
            });
            alert1.present();

            return;
        }

        if (photoDescription == ""){
            this.inputDisabled = false;
            elementBtnUploadPhoto.disabled = false;

            let alert1 = this.alertCtrl.create({
                title: "Error",
                subTitle: "Debe ingresar una descripcion para la Foto.",
                buttons: ['Ok']
            });
            alert1.present();

            return;
        }

        if (photoType == ""){
            this.inputDisabled = false;
            elementBtnUploadPhoto.disabled = false;

            let alert1 = this.alertCtrl.create({
                title: "Error",
                subTitle: "Debe seleccionar el tipo de foto",
                buttons: ['Ok']
            });
            alert1.present();

            return;
        }

        if (typeof this.evidencia !== "undefined") {
            tphoto = 2;
            evi_id = this.evidencia.evidence_id;
            this.AvaEvi = "Evidencia";
        }*/
        console.log("Nuevos parametros");
        console.log("TypePtoho", tphoto);
        console.log("Evidencia_ID", evi_id);
        var reg = {
            task_id: this.item.tareaId,
            project_id: IdProject,
            photo_clasification_id: "1",
            geo_latitude: this.Image[0].latitude,
            geo_longitude: this.Image[0].longitude,
            photo_type_id: photoType,
            task_evidence_id: evi_id,
            task_note_id: "",
            entities_id: entitiesId,
            last_change_user_id: userId,
            image: this.Image[0].image,
            photo_name: photoName,
            description: photoDescription,
        };
        console.log(this.Project);
        //console.log(this.Project.id);
        console.log(reg);
        //this.sqliteService.createRegistro(reg, this.navParams.data.item.id, this.item);
        //this.createRegistro(reg, this.navParams.data.item.id, this.item);
        //this.ionViewDidLoad();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], NuevoregistroPage.prototype, "slides", void 0);
    NuevoregistroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-nuevoregistro',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/nuevoregistro/nuevoregistro.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<!--ion-title> <img src="assets/imgs/icon.png" style="width:20%;"/> REGISTRO   </ion-title-->\n\n		<ion-title>Registrar Foto</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<!--ion-content padding class="no-scroll"-->\n\n<ion-content padding class="">\n\n	<!--ion-card>\n\n		<ion-card-content>\n\n			<button ion-button color="danger" icon-right block (click)="takePicture();">\n\n				Tomar Foto\n\n				<ion-icon name="camera"></ion-icon>\n\n			</button>\n\n		</ion-card-content>\n\n	</ion-card>\n\n\n\n	<ion-list radio-group [(ngModel)]="relationship">\n\n		<ion-item style="padding:0 45px 0 45px;">\n\n			<ion-label>Tipo de Foto</ion-label>\n\n		</ion-item>\n\n		<ion-item style="padding:0 45px 0 45px;">\n\n			<ion-label>Avances</ion-label>\n\n			<ion-radio value="avances" checked (ionSelect)="TipoFoto(1)"></ion-radio>\n\n		</ion-item>\n\n		<ion-item style="padding:0 45px 0 45px;">\n\n			<ion-label>Evidencias</ion-label>\n\n			<ion-radio value="evidencias" (ionSelect)="TipoFoto(2)"></ion-radio>\n\n		</ion-item>\n\n	</ion-list-->\n\n\n\n	<form (ngSubmit)="registroSubmit()" style="padding:10px;">\n\n		<ion-item>\n\n			<ion-slides>\n\n				<ion-slide *ngFor="let image of base64Image" (ionSlideDidChange)="slideChanged()">\n\n					<img [src]="image">\n\n				</ion-slide>\n\n			</ion-slides>\n\n		</ion-item>\n\n		<div class="list">\n\n			<!-- <ion-item>\n\n				<ion-label>Nombre</ion-label>\n\n				<ion-input id="photo-name" disabled="{{inputDisabled}}" type="text" [(ngModel)]="nombre" name="nombre"></ion-input>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-textarea id="description" disabled="{{inputDisabled}}" class="Ts" placeholder="Descripcion" [(ngModel)]="description"\n\n					name="description"></ion-textarea>\n\n			</ion-item>\n\n			<ion-item>\n\n				<ion-label>Tipo de foto</ion-label>\n\n				<ion-select id="photo-type" disabled="{{inputDisabled}}" [(ngModel)]="photoType" name="photoType">\n\n					<ion-option value="1">Avance</ion-option>\n\n					<ion-option value="2">Evidencia</ion-option>\n\n				</ion-select>\n\n			</ion-item> -->\n\n			<button ion-button id="btn-upload-photo" type="submit" block class="Ts">Crear Registro</button>\n\n		</div>\n\n	</form>\n\n</ion-content>'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/nuevoregistro/nuevoregistro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__["a" /* SqliteProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__providers_proveedor1_proveedor1__["a" /* Proveedor1Provider */]])
    ], NuevoregistroPage);
    return NuevoregistroPage;
}());

//# sourceMappingURL=nuevoregistro.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroDetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_firestore__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_storage__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegistroDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistroDetallePage = /** @class */ (function () {
    function RegistroDetallePage(navCtrl, navParams, storage, firestore) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.firestore = firestore;
        this.items = [];
        this.registro = navParams.data.registro;
        console.log("Detalle de la foto: " + JSON.stringify(this.registro));
    }
    RegistroDetallePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RegistroDetallePage');
        this.firestore.collection("ServiceNetwork").snapshotChanges().subscribe(function (data) {
            _this.items = [];
            console.log("data" + data);
            data.forEach(function (element) {
                var item = element.payload.doc.data();
                item.id = element.payload.doc.id;
                _this.items.push(item);
                console.log("item.id: " + item.id);
            });
        });
    };
    RegistroDetallePage.prototype.vistaPanoramica = function (item) {
        this.firestore.doc("ServiceNetwork/" + item.id).delete();
        this.firestore.collection('ServiceNetwork').add({ url: this.registro.url });
    };
    RegistroDetallePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-registro-detalle',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/registro-detalle/registro-detalle.html"*/'<!--\n  Generated template for the RegistroDetallePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n		<!-- <ion-title> Nombre: {{ registro.photoName }} </ion-title> -->\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div style="padding: 20px;">\n		<ion-item>\n			<ion-slides>\n				<ion-slide (ionSlideDidChange)="slideChanged()">\n					<img [src]="registro.url">\n				</ion-slide>\n			</ion-slides>\n		</ion-item>\n	</div>\n\n	<ion-grid>\n		<ion-row justify-content-start>\n			<ion-col col-12>\n				<ion-card>\n					<h2 style=" font-size: 30px; text-transform: uppercase; text-align: left; border-bottom: 1px solid;">Detalles:</h2>\n				</ion-card>\n			</ion-col>\n			<ion-col col-12 style="margin-left: auto; margin-right: auto">\n				<div *ngFor="let item of items">\n					<button class="actions-detail-button-width" ion-button icon-right round (click)="vistaPanoramica(item)">\n							Enviar a Supervisor\n							<ion-icon name="md-exit"></ion-icon>\n						</button>\n					</div>\n				<!-- <p style="text-align: justify;"> <b>Descripción:</b> {{ registro.description }}</p>\n				<p style="text-align: justify;"> <b>Latitud:</b> {{ registro.geoLatitude }}</p>\n				<p style="text-align: justify;"> <b>Longitud:</b> {{ registro.geoLongitude }}</p>\n				<p style="text-align: justify;"> <b>¿Quién la subió?:</b> {{ registro.completeName }}</p>\n				<p style="text-align: justify;"> <b>Fecha-Hora:</b> {{ registro.creationDate }}</p> -->\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/registro-detalle/registro-detalle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_storage__["a" /* AngularFireStorage */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["AngularFirestore"]])
    ], RegistroDetallePage);
    return RegistroDetallePage;
}());

//# sourceMappingURL=registro-detalle.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskevidencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nuevoregistro_nuevoregistro__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registro_detalle_registro_detalle__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__detail2_detail2__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TaskevidencePage = /** @class */ (function () {
    function TaskevidencePage(events, navCtrl, sqliteService, http, navParams, _DomSanitizer) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.sqliteService = sqliteService;
        this.http = http;
        this.navParams = navParams;
        this._DomSanitizer = _DomSanitizer;
        this.zonasArr = [];
        this.Proyecto = 14;
        this.item = navParams.data.item;
        this.evidencia = navParams.data.evidencia;
        /* this.sqliteService.ProjectId = this.Project.id;
        this.Project = navParams.data.proyecto;*/
        this.ip = this.sqliteService.ip;
        this.ip2 = this.sqliteService.ip2;
        this.token = this.sqliteService.token;
        this.NombreTarea = this.sqliteService.NombreTarea;
        this.entitiesId = this.sqliteService.entitiesId;
        this.LoadData();
        {
            this.events.subscribe('handleReloadListPhoto', function (statsData) {
                _this.LoadData();
            });
        }
        var idTipoNorma = this.sqliteService.GeridTipoNorma();
        var idNorma = this.sqliteService.GeridNorma();
        var specificacionNorma = this.sqliteService.GerspecificacionNorma();
        var taskId = this.sqliteService.GetTareaId();
        console.log("tipo de norma: " + idTipoNorma + " Id Norma: " + idNorma + " especificacion de norma " + specificacionNorma + " taskId " + taskId);
        var headers2 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers2.append('Accept', 'application/json');
        headers2.append('content-type', 'application/json');
        headers2.append('Authorization', 'Bearer ' + this.token);
        /* let url = this.ip2 + "/zoneListTaskByProject?project_id=" + this.Proyecto;
    
    this.http.post(url, {headers: headers2} ).subscribe(data => {
      this.zonesObj = data.json();
      
      let i = 0;

      for (let objJson in this.zonesObj){
        let j = 0;
        
        this.zonasArr[i] = {
          zonaId: this.zonesObj[objJson].id_zone,
          nombreZona: this.zonesObj[objJson].zone,
          listasTareasItem: [],
          show: false
        };

        this.listaTareasObj = this.zonesObj[objJson].listasTareas;

        for (let objJson2 in this.listaTareasObj){
          this.zonasArr[i].listasTareasItem.push({
              listaTareaId: this.listaTareasObj[objJson2].task_list_id,
              nombreListaTarea: this.listaTareasObj[objJson2].task_list,
              tareaItem: [],
              show: false
          });

          this.tareasObj = this.listaTareasObj[objJson2].tareas;

          for (var objJson3 in this.tareasObj){
            //console.log('Tarea: ' + this.tareasObj[objJson3].idTarea + '-' + this.tareasObj[objJson3].tarea);
            this.zonasArr[i].listasTareasItem[j].tareaItem.push({
              tareaId: this.tareasObj[objJson3].task_id,
              nombreTarea: this.tareasObj[objJson3].defTarea,
              description: this.tareasObj[objJson3].task_comments,
              completion_percent: this.tareasObj[objJson3].task_completed_percentage,
              categoria: this.tareasObj[objJson3].categorieDescription,
              subcategoria: this.tareasObj[objJson3].subCategorieDescription,
              unidad: this.tareasObj[objJson3].unitDescription,
              cantidad: this.tareasObj[objJson3].quantity_to_install,
              instalado: this.tareasObj[objJson3].installed,
              subcontrata: this.tareasObj[objJson3].subcontractor_name,
              empleado: this.tareasObj[objJson3].employee_name,
              fechaInicio: this.tareasObj[objJson3].start_date,
              fechaFin: this.tareasObj[objJson3].end_date,
              estatus: this.tareasObj[objJson3].task_status,
              show: false
              
            });
          }

          j++;
        }

        i++;
      }
      
        }); */
        var url = this.ip2 + "/policyByProjectPhotos";
        var ProjectId = this.sqliteService.GerProjectId();
        var task_id = this.sqliteService.GetTareaId();
        var data = {
            entities_id: this.entitiesId,
            task_id: task_id,
            project_id: ProjectId,
            checked: 1
        };
        console.log("url: " + url);
        console.log("data: " + JSON.stringify(data));
        this.http.post(url, JSON.stringify(data), { headers: headers2 }).subscribe(function (Response) {
            _this.normaTipoObj = Response.json();
            _this.normaTipoArr = Array.of(_this.normaTipoObj);
            console.log("normas: " + JSON.stringify(_this.normaTipoArr));
            var i = 0;
            for (var objJson in _this.normaTipoObj) {
                var j = 0;
                _this.normaTipoArr[i] = {
                    policy_type_id: _this.normaTipoObj[objJson].policy_type_id,
                    policy_type_description: _this.normaTipoObj[objJson].policy_type_description,
                    policy_type_comments: _this.normaTipoObj[objJson].policy_type_comments,
                    policy_type_checked: "checkpolicytype" + _this.normaTipoObj[objJson].policy_type_id,
                    NormaItem: [],
                    show: true
                };
                _this.normaObj = _this.normaTipoObj[objJson].policy;
                //console.log(this.listaTareasObj);
                for (var objJson2 in _this.normaObj) {
                    _this.normaTipoArr[i].NormaItem.push({
                        policy_id: _this.normaObj[objJson2].policy_id,
                        policy_description: _this.normaObj[objJson2].policy_description,
                        policy_comments: _this.normaObj[objJson2].policy_comments,
                        policy_policy_type_id: _this.normaObj[objJson2].policy_policy_type_id,
                        policy_checked: "checkpolicy" + _this.normaObj[objJson2].policy_id,
                        NormaEspecItem: [],
                        show: true
                    });
                    _this.normaEspec = _this.normaObj[objJson2].policy_spec;
                    for (var objJson3 in _this.normaEspec) {
                        //console.log('Tarea: ' + this.tareasObj[objJson3].idTarea + '-' + this.tareasObj[objJson3].tarea);
                        _this.normaTipoArr[i].NormaItem[j].NormaEspecItem.push({
                            policy_id: _this.normaEspec[objJson3].policy_id,
                            policy_type_id: _this.normaEspec[objJson3].policy_type_id,
                            policy_specification_id: _this.normaEspec[objJson3].policy_specification_id,
                            policy_specification_description: _this.normaEspec[objJson3].policy_specification_description,
                            policy_specification_comments: _this.normaEspec[objJson3].policy_specification_comments,
                            policy_spec_policy_id: _this.normaEspec[objJson3].policy_spec_policy_id,
                            policy_spec_policy_type_id: _this.normaEspec[objJson3].policy_spec_policy_type_id,
                            policy_spec_checked: "checkpolicyspec" + _this.normaEspec[objJson3].policy_specification_id,
                            firebaseCode: _this.normaEspec[objJson3].FirebaseCode,
                            show: true
                        });
                    }
                    j++;
                }
                i++;
            }
            console.log(_this.normaTipoArr);
        });
    }
    TaskevidencePage.prototype.swipeEvent = function (e) {
        if (e.direction == 4) {
            //console.log("izquierda");
            this.navCtrl.pop();
        }
    };
    TaskevidencePage.prototype.isGroupShown = function (elemento) {
        return elemento.show;
    };
    ;
    TaskevidencePage.prototype.isGroupShown2 = function (elemento1, elemento2) {
        var isShow = false;
        if ((elemento1.show) && (elemento2.show))
            isShow = true;
        return isShow;
    };
    ;
    /* toggleGroup(elemento) {
    elemento.show = !elemento.show;
    }; */
    TaskevidencePage.prototype.toggleGroup = function (elemento) {
        elemento.show = !elemento.show;
    };
    ;
    TaskevidencePage.prototype.taskSelected = function (task, codefb) {
        var item = this.navParams.data.item;
        console.log("id enviado: " + item.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__detail2_detail2__["a" /* Detail2Page */], { task: task, norma: this.normaTipoArr, item: codefb, items: item });
    };
    TaskevidencePage.prototype.LoadData = function () {
        var _this = this;
        this.ip = this.sqliteService.ip;
        this.token = this.sqliteService.token;
        //let url = "";
        //if (typeof this.evidencia !== "undefined")  {
        //url = this.ip + `/evidence_photo`;
        //url = this.ip + `/evidenceTask`;
        //let url = "http://198.50.116.250/service_network_API/public/index.php/api/getPhotosByPojectId";
        var url = this.ip2 + "/photosByPolicy";
        var headers2 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers2.append('Content-Type', 'application/json');
        headers2.append('Access-Control-Allow-Origin', '*');
        headers2.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers2.append('Content-Type', 'application/x-www-form-urlencoded');
        headers2.append('Authorization', 'Bearer ' + this.token);
        // let data = {
        //   idEvidence: this.evidencia.evidence_id,
        //   idTask: this.item.id
        // };
        var ProjectId = this.sqliteService.GerProjectId();
        var tipoFoto = this.sqliteService.GerTipoFoto();
        var idTipoNorma = this.sqliteService.GeridTipoNorma();
        var idNorma = this.sqliteService.GeridNorma();
        var specificacionNorma = this.sqliteService.GerspecificacionNorma();
        var taskId = this.sqliteService.GetTareaId();
        var data = {
            policy_types_id: idTipoNorma,
            policy_id: idNorma,
            policy_specification_id: specificacionNorma,
            task_id: taskId
        };
        console.log("data fotos: " + JSON.stringify(data));
        this.http.post(url, JSON.stringify(data), { headers: headers2 }).subscribe(function (data) {
            _this.registros = data.json();
            console.log("Registros_1: " + JSON.stringify(_this.registros));
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
    };
    TaskevidencePage.prototype.Open = function (page, registro) {
        var item = this.navParams.data.item;
        console.log("Selected Item", item);
        console.log(page);
        console.log("Registro: " + registro);
        switch (page) {
            case "D": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__registro_detalle_registro_detalle__["a" /* RegistroDetallePage */], { registro: registro, item: item });
                break;
            }
            case "N": {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__nuevoregistro_nuevoregistro__["a" /* NuevoregistroPage */], { item: item, evidencia: this.evidencia });
                break;
            }
        }
    };
    /*
    registroSelected( registro: string) {
      console.log("Selected Ticket", registro);
      this.navCtrl.push(RegistroDetallePage, { registro: registro });
    }
  
    NuevoRegistro(){
      let item = this.navParams.data.item;
      console.log("Selected Item", item);
      this.navCtrl.push(NuevoregistroPage, { item: item } );
    }
    */
    TaskevidencePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistroPage');
    };
    TaskevidencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-taskevidence',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/taskevidence/taskevidence.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      <!--img class=\'logo-navbar\' src="assets/imgs/logos/SN_logo_single_754x754.png" width="10%"/-->\n			<span class="toolbar-text-style" style="text-transform: uppercase;"><!-- {{ Project.description }} \n      Proyecto--></span>\n      <div *ngFor="let normas of normaTipoArr">\n          <div *ngFor="let listanormas of normas.NormaItem">\n              <span>{{ listanormas.policy_description }}</span><br>\n              <span style="font-size: 15px;">{{normas.policy_type_description}}</span>  \n          </div>\n      </div>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div (swipe)="swipeEvent($event)">\n  <!--div class="sec2"><p class="fontPrimaria" style="padding:20px;margin: 0px;"> Lista de Tareas</p></div\n  <div class="div-sub-tittles">\n    <ion-icon class="icon-sub-tittles" item-left name="list"></ion-icon>\n    <span class="sub-tittles">Tareas</span>\n  </div>--> \n\n  <ion-list inset>\n    <div *ngFor="let normas of normaTipoArr">\n     <!--  <ion-item  class="item-stable" >\n        <button class="button-stable">\n          <ion-icon [name]="isGroupShown(normas) ? \'remove\' : \'add\'" class="action-icon-list"></ion-icon>\n        </button>\n        &nbsp;\n        <span class="list-tittle">{{normas.policy_type_description}}</span>\n        <button class="button-stable button-map" (click)="showZone()">\n          <ion-icon name="map" class="action-icon-list"></ion-icon>\n        </button>\n      </ion-item> -->\n      <div *ngFor="let listanormas of normas.NormaItem">\n      <!--   <button ion-item class="item-accordion"*ngIf="isGroupShown(normas)" style="margin-left: 10px;">\n            <ion-icon [name]="isGroupShown(listanormas) ? \'remove\' : \'add\'"></ion-icon>\n            &nbsp;\n            {{ listanormas.policy_description }}\n        </button> -->\n        <div *ngFor="let specNorma of listanormas.NormaEspecItem">\n          <button ion-item class="item-accordion" (click)="taskSelected(specNorma, specNorma.firebaseCode)" *ngIf="isGroupShown2(normas, listanormas)" style="margin-left: 40px;">\n             {{ specNorma.policy_specification_description }}\n             <!-- {{ specNorma.firebaseCode }} -->\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <!--button ion-item *ngFor="let zonas of item" (click)="zoneColapse()">\n      <div>\n        <ion-icon class="icon-item-list" item-left name="folder-open"></ion-icon>\n        {{zonas.nombreZona}}\n        <ion-list inset style="margin-left: 10px;">\n          <button ion-item *ngFor="let listaTareas of zonas.listasTareas" (click)="taskListColapse()">\n            <div>\n              <ion-icon class="icon-item-list" item-left name="folder-open"></ion-icon>\n              {{listaTareas.listaTarea}}\n              <ion-list inset style="margin-left: 10px;">\n                <button ion-item *ngFor="let tareas of listaTareas.tareas" (click)="taskSelected(tarea)">\n                  <div>\n                    <ion-icon class="icon-item-list" item-left name="square-outline"></ion-icon>\n                    {{tareas.tarea}}\n                  </div>\n                </button>\n              </ion-list>\n            </div>\n          </button>\n        </ion-list>\n      </div>\n    </button-->\n  </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/taskevidence/taskevidence.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_sqlite_sqlite__["a" /* SqliteProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], TaskevidencePage);
    return TaskevidencePage;
}());

//# sourceMappingURL=taskevidence.js.map

/***/ })

},[564]);
//# sourceMappingURL=main.js.map