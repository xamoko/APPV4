(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fotos-evidencia-tarea-fotos-evidencia-tarea-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  popover works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fotos-evidencia-tarea/fotos-evidencia-tarea.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fotos-evidencia-tarea/fotos-evidencia-tarea.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t\t<ion-toolbar color=\"primary\" mode=\"ios\">\n      <ion-buttons slot=\"start\">\n\t\t  <ion-menu-button ></ion-menu-button>\n\t\t  <ion-icon icon=\"../../assets/icon/arrow-left-solid.svg\" (click)=\"BotonRegresar()\"></ion-icon>\n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\t\t<!-- <ion-item *ngIf=\"registros == 0; else elseBlock\">\n\t\t\t<div class=\"sec2\">\n\t\t\t\t<p class=\"fontPrimaria\" style=\"padding:20px;margin: 0px;\">\n\t\t\t\t\tAun no hay fotos de Evidencia que mostrar\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</ion-item> -->\n\n\t\t<!-- <ng-template #elseBlock> -->\n\t\t<ion-item style=\"padding: 20px;\" *ngFor=\"let item of todo | async\" >\n\t\t\t<div *ngIf=\"FBcode == item.identificador\">\n\t\t\t\t<ion-item >\n\t\t\t<ion-avatar item-start style=\"border-radius: 0;\" (click)=\"Open('D', item.url)\">\n\t\t\t\t<img style=\"width: 200px; height: 150px; border: #FDC938 3px solid; border-radius: 0;\" [src]=\"item.url\">\n\t\t\t</ion-avatar>\n\t\t\t<ion-note item-end>\n\t\t\t\t<!-- <h3 style=\"font-size: 20px; color: #404040;\"><b>Nombre:</b> {{ registro.photoName }}</h3>\n\t\t\t\t<h3 style=\"font-size: 12px; color: #404040;\"><b>Descripción:</b> {{ registro.description }}</h3>\n\t\t\t\t<h3 style=\"font-size: 12px; color: #404040;\"><b>Latitud:</b> {{ registro.geoLatitude }}</h3>\n\t\t\t\t<h3 style=\"font-size: 12px; color: #404040;\"><b>Longitud:</b> {{ registro.geoLongitude }}</h3> -->\n\t\t\t\t<h3 style=\"font-size: 12px; color: #404040;\"><b>¿Quién la subió?:</b> {{ item.nombre }}</h3>\n\t\t\t\t<!-- <h3 style=\"font-size: 12px; color: #404040;\"><b>Fecha - Hora:</b> {{ registro.creationDate }}</h3> -->\n\t\t\t</ion-note>\n\t\t\t\t</ion-item>\n\t\t</div>\n\t\t\n\t\t</ion-item>\n\t\t<!-- </ng-template> -->\n\t</ion-list>\n</ion-content>\n\n<ion-footer>\n\t<ion-grid>\n\t  <ion-row>\n\t\t<ion-col size=\"12\">\n\t\t  <ion-col size=\"6\">\n\t\t\t<ion-icon class=\"icon-action-buttons\" name=\"camera\" (click)=\"takePicturesCamera()\" style=\"font-size: 30px;\"></ion-icon>\n\t\t  </ion-col>\n\t\t  <ion-col size=\"6\">\n\t\t\t<ion-icon class=\"icon-action-buttons\" name=\"images\" (click)=\"takePicturesGallery()\" style=\"font-size: 30px;\"></ion-icon>\n\t\t  </ion-col>\n\t\t</ion-col>\n\t  </ion-row>\n\t</ion-grid>\n  </ion-footer>\n");

/***/ }),

/***/ "./src/app/components/popover/popover.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popover/popover.component.ts ***!
  \*********************************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PopoverComponent = class PopoverComponent {
    constructor() { }
    ngOnInit() { }
};
PopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PopoverComponent);



/***/ }),

/***/ "./src/app/pages/fotos-evidencia-tarea/fotos-evidencia-tarea.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/fotos-evidencia-tarea/fotos-evidencia-tarea.module.ts ***!
  \*****************************************************************************/
/*! exports provided: FotosEvidenciaTareaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosEvidenciaTareaPageModule", function() { return FotosEvidenciaTareaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fotos_evidencia_tarea_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fotos-evidencia-tarea.page */ "./src/app/pages/fotos-evidencia-tarea/fotos-evidencia-tarea.page.ts");







const routes = [
    {
        path: '',
        component: _fotos_evidencia_tarea_page__WEBPACK_IMPORTED_MODULE_6__["FotosEvidenciaTareaPage"]
    }
];
let FotosEvidenciaTareaPageModule = class FotosEvidenciaTareaPageModule {
};
FotosEvidenciaTareaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_fotos_evidencia_tarea_page__WEBPACK_IMPORTED_MODULE_6__["FotosEvidenciaTareaPage"]]
    })
], FotosEvidenciaTareaPageModule);



/***/ }),

/***/ "./src/app/pages/fotos-evidencia-tarea/fotos-evidencia-tarea.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/fotos-evidencia-tarea/fotos-evidencia-tarea.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvdG9zLWV2aWRlbmNpYS10YXJlYS9mb3Rvcy1ldmlkZW5jaWEtdGFyZWEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/fotos-evidencia-tarea/fotos-evidencia-tarea.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/fotos-evidencia-tarea/fotos-evidencia-tarea.page.ts ***!
  \***************************************************************************/
/*! exports provided: FotosEvidenciaTareaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosEvidenciaTareaPage", function() { return FotosEvidenciaTareaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sqlite/sqlite */ "./src/app/services/sqlite/sqlite.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/popover/popover.component */ "./src/app/components/popover/popover.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");














let FotosEvidenciaTareaPage = class FotosEvidenciaTareaPage {
    constructor(camera, http, route, router, sqliteService, firestore, navCtrl, geolocation, storage, popoverController, _location) {
        /*  this.item = this.route.queryParams.subscribe(params =>{
           console.log("params",params);
         }); */
        this.camera = camera;
        this.http = http;
        this.route = route;
        this.router = router;
        this.sqliteService = sqliteService;
        this.firestore = firestore;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.storage = storage;
        this.popoverController = popoverController;
        this._location = _location;
        this.base64Image = [];
        this.Image = [];
    }
    ngOnInit() {
        this.item = this.route.snapshot.paramMap.getAll('task');
        this.norma = this.route.snapshot.paramMap.get('norma');
        this.FBcode = this.route.snapshot.paramMap.get('item');
        this.tareas = this.route.snapshot.paramMap.get('items');
        this.evidencia = this.route.snapshot.paramMap.get('evidencia');
        var policy_type_id = this.route.snapshot.paramMap.get('policy_type_id');
        var policy_id = this.route.snapshot.paramMap.get('policy_id');
        this.url = this.route.snapshot.paramMap.get('url');
        var policy_specification_id = this.route.snapshot.paramMap.get('policy_specification_id');
        this.sqliteService.idTipoNorma = this.item.policy_type_id;
        this.sqliteService.idNorma = this.item.policy_id;
        this.sqliteService.specificacionNorma = this.item.policy_specification_id;
        console.log("id tipo de norma " + policy_type_id);
        console.log("id norma " + policy_id);
        console.log("id de especificacion de norma " + policy_specification_id);
        console.log("id de especificacion de norma " + this.item);
        console.log("desconocido " + this.FBcode);
        console.log("desconocido " + this.tareas);
        this.LoadData();
    }
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_10__["PopoverComponent"],
                event: ev,
                translucent: true
            });
            return yield popover.present();
        });
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
        this.collection = this.firestore.collection(`fotosEvidencia/${taskId}/fotos`, ref => ref.where("identificador", "==", this.FBcode)) /* .doc(`${this.idTarea}`).collection(`${this.firebaseId}`) */;
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
    takePicturesCamera() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = {
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
            this.geolocation.getCurrentPosition().then((resp) => {
                console.log("Coordenadas 1: " + resp.coords.latitude, resp.coords.longitude);
                this.latitud = resp.coords.latitude;
                this.longitud = resp.coords.longitude;
                console.log(this.latitud, this.longitud);
            }).catch((error) => {
                console.log('Error getting location', error);
            });
            const result = yield this.camera.getPicture(options);
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
            pictures.getDownloadURL().subscribe(ur => {
                console.log("nueva funcion: " + ur);
            });
            console.log("a punto de entrar");
            var tar = parseFloat(tareaid);
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => pictures.getDownloadURL().subscribe(url => {
                this.datas = {
                    key: idd,
                    identificador: this.FBcode,
                    nombre: "Foto de evidencia de la tarea: " + this.tareas.nombreTarea + ". Foto desde la cámara",
                    url: url,
                    idTarea: tar,
                    latitud: this.latitud,
                    longitud: this.longitud
                };
                console.log(JSON.stringify(this.datas));
                this.firestore.collection('fotosEvidencia').doc(`${tar}`).collection('fotos').add(this.datas);
            }))).subscribe();
        });
    }
    takePicturesGallery() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = {
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
            this.geolocation.getCurrentPosition().then((resp) => {
                console.log("Coordenadas 1: " + resp.coords.latitude, resp.coords.longitude);
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
            const result = yield this.camera.getPicture(options);
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
            pictures.getDownloadURL().subscribe(ur => {
                console.log("nueva funcion: " + ur);
            });
            console.log("a punto de entrar");
            var tar = parseFloat(tareaid);
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["finalize"])(() => pictures.getDownloadURL().subscribe(url => {
                this.datas = {
                    key: idd,
                    identificador: this.FBcode,
                    nombre: "Foto de evidencia de la tarea: " + this.tareas.nombreTarea + ". Foto desde la galería",
                    url: url,
                    idTarea: tar,
                    latitud: this.latitud,
                    longitud: this.longitud
                };
                console.log(JSON.stringify(this.datas));
                this.firestore.collection('fotosEvidencia').doc(`${tar}`).collection('fotos').add(this.datas);
            }))).subscribe();
        });
    }
    BotonRegresar() {
        this._location.back();
        console.log("regresar");
    }
    Open(page, registro) {
        let item = this.item;
        console.log("Selected Item", registro);
        console.log(page);
        switch (page) {
            /* case "photo": {
              this.navCtrl.push(NuevoregistroevidenciaPage, { item: item });
              break;
            }
            case "photoGallery": {
              this.navCtrl.push(Nuevoregistroevidencia2Page, { item: item });
              break;
            } */
            case "D": {
                this.router.navigate(['/menu/first/detalle-fotos-evidencia-tarea', { registro: registro, url: this.url, item: this.item }]);
                /* this.navCtrl.navigateForward(['/menu/first/detalle-fotos-evidencia-tarea',{registro: registro, url: this.url, item:this.item}]); */
                break;
            }
        }
    }
};
FotosEvidenciaTareaPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_7__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_2__["SqliteProvider"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"] }
];
FotosEvidenciaTareaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fotos-evidencia-tarea',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fotos-evidencia-tarea.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fotos-evidencia-tarea/fotos-evidencia-tarea.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fotos-evidencia-tarea.page.scss */ "./src/app/pages/fotos-evidencia-tarea/fotos-evidencia-tarea.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _angular_http__WEBPACK_IMPORTED_MODULE_7__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_2__["SqliteProvider"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["PopoverController"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["Location"]])
], FotosEvidenciaTareaPage);



/***/ })

}]);
//# sourceMappingURL=fotos-evidencia-tarea-fotos-evidencia-tarea-module-es2015.js.map