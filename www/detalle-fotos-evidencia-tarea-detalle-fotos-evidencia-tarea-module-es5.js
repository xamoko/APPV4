(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["detalle-fotos-evidencia-tarea-detalle-fotos-evidencia-tarea-module"],{/***/"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-fotos-evidencia-tarea/detalle-fotos-evidencia-tarea.page.html":/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-fotos-evidencia-tarea/detalle-fotos-evidencia-tarea.page.html ***!
  \***********************************************************************************************************************************/ /*! exports provided: default */ /***/function node_modulesRawLoaderDistCjsJsSrcAppPagesDetalleFotosEvidenciaTareaDetalleFotosEvidenciaTareaPageHtml(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]="<ion-header>\n\t\t<ion-toolbar color=\"primary\" mode=\"ios\">\n      <ion-buttons slot=\"start\">\n\t\t  <ion-menu-button ></ion-menu-button>\n\t\t  <ion-icon icon=\"../../assets/icon/arrow-left-solid.svg\" (click)=\"BotonRegresar()\"></ion-icon>\n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"padding\">\n\t<div style=\"padding: 20px;\">\n\t\t<ion-item>\n\t\t\t<ion-slides>\n\t\t\t\t<ion-slide (ionSlideDidChange)=\"slideChanged()\">\n\t\t\t\t\t<img [src]=\"registro\">\n\t\t\t\t</ion-slide>\n\t\t\t</ion-slides>\n\t\t</ion-item>\n\t</div>\n\n\t<ion-grid>\n\t\t<ion-row justify-content-start>\n\t\t\t<ion-col col-12>\n\t\t\t\t<ion-card>\n\t\t\t\t\t<h2 style=\" font-size: 30px; text-transform: uppercase; text-align: left; border-bottom: 1px solid;\">Detalles:</h2>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t\t<ion-col col-12 style=\"margin-left: auto; margin-right: auto\">\n\t\t\t\t<div *ngFor=\"let item of items\">\n\t\t\t\t\t<button class=\"actions-detail-button-width\" ion-button icon-right round (click)=\"vistaPanoramica(item)\">\n\t\t\t\t\t\t\tEnviar a Supervisor\n\t\t\t\t\t\t\t<ion-icon name=\"md-exit\"></ion-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t<!-- <p style=\"text-align: justify;\"> <b>Descripci\xF3n:</b> {{ registro.description }}</p>\n\t\t\t\t<p style=\"text-align: justify;\"> <b>Latitud:</b> {{ registro.geoLatitude }}</p>\n\t\t\t\t<p style=\"text-align: justify;\"> <b>Longitud:</b> {{ registro.geoLongitude }}</p>\n\t\t\t\t<p style=\"text-align: justify;\"> <b>\xBFQui\xE9n la subi\xF3?:</b> {{ registro.completeName }}</p>\n\t\t\t\t<p style=\"text-align: justify;\"> <b>Fecha-Hora:</b> {{ registro.creationDate }}</p> -->\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n";/***/},/***/"./src/app/pages/detalle-fotos-evidencia-tarea/detalle-fotos-evidencia-tarea.module.ts":/*!*********************************************************************************************!*\
  !*** ./src/app/pages/detalle-fotos-evidencia-tarea/detalle-fotos-evidencia-tarea.module.ts ***!
  \*********************************************************************************************/ /*! exports provided: DetalleFotosEvidenciaTareaPageModule */ /***/function srcAppPagesDetalleFotosEvidenciaTareaDetalleFotosEvidenciaTareaModuleTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DetalleFotosEvidenciaTareaPageModule",function(){return DetalleFotosEvidenciaTareaPageModule});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");/* harmony import */var _angular_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/forms */"./node_modules/@angular/forms/fesm2015/forms.js");/* harmony import */var _angular_router__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");/* harmony import */var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @ionic/angular */"./node_modules/@ionic/angular/dist/fesm5.js");/* harmony import */var _detalle_fotos_evidencia_tarea_page__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! ./detalle-fotos-evidencia-tarea.page */"./src/app/pages/detalle-fotos-evidencia-tarea/detalle-fotos-evidencia-tarea.page.ts");var routes=[{path:"",component:_detalle_fotos_evidencia_tarea_page__WEBPACK_IMPORTED_MODULE_6__["DetalleFotosEvidenciaTareaPage"]}];var DetalleFotosEvidenciaTareaPageModule=function DetalleFotosEvidenciaTareaPageModule(){};DetalleFotosEvidenciaTareaPageModule=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],declarations:[_detalle_fotos_evidencia_tarea_page__WEBPACK_IMPORTED_MODULE_6__["DetalleFotosEvidenciaTareaPage"]]})],DetalleFotosEvidenciaTareaPageModule);/***/},/***/"./src/app/pages/detalle-fotos-evidencia-tarea/detalle-fotos-evidencia-tarea.page.scss":/*!*********************************************************************************************!*\
  !*** ./src/app/pages/detalle-fotos-evidencia-tarea/detalle-fotos-evidencia-tarea.page.scss ***!
  \*********************************************************************************************/ /*! exports provided: default */ /***/function srcAppPagesDetalleFotosEvidenciaTareaDetalleFotosEvidenciaTareaPageScss(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony default export */__webpack_exports__["default"]="\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFsbGUtZm90b3MtZXZpZGVuY2lhLXRhcmVhL2RldGFsbGUtZm90b3MtZXZpZGVuY2lhLXRhcmVhLnBhZ2Uuc2NzcyJ9 */";/***/},/***/"./src/app/pages/detalle-fotos-evidencia-tarea/detalle-fotos-evidencia-tarea.page.ts":/*!*******************************************************************************************!*\
  !*** ./src/app/pages/detalle-fotos-evidencia-tarea/detalle-fotos-evidencia-tarea.page.ts ***!
  \*******************************************************************************************/ /*! exports provided: DetalleFotosEvidenciaTareaPage */ /***/function srcAppPagesDetalleFotosEvidenciaTareaDetalleFotosEvidenciaTareaPageTs(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DetalleFotosEvidenciaTareaPage",function(){return DetalleFotosEvidenciaTareaPage});/* harmony import */var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(/*! tslib */"./node_modules/tslib/tslib.es6.js");/* harmony import */var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(/*! @angular/core */"./node_modules/@angular/core/fesm2015/core.js");/* harmony import */var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(/*! @ionic/angular */"./node_modules/@ionic/angular/dist/fesm5.js");/* harmony import */var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(/*! @angular/fire/storage */"./node_modules/@angular/fire/storage/es2015/index.js");/* harmony import */var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(/*! angularfire2/firestore */"./node_modules/angularfire2/firestore/index.js");/* harmony import */var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default=/*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);/* harmony import */var _angular_router__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(/*! @angular/router */"./node_modules/@angular/router/fesm2015/router.js");/* harmony import */var _angular_common__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(/*! @angular/common */"./node_modules/@angular/common/fesm2015/common.js");var DetalleFotosEvidenciaTareaPage=/*#__PURE__*/function(){function DetalleFotosEvidenciaTareaPage(navCtrl,storage,firestore,route,_location){this.navCtrl=navCtrl;this.storage=storage;this.firestore=firestore;this.route=route;this._location=_location;this.items=[]}var _proto=DetalleFotosEvidenciaTareaPage.prototype;_proto.ngOnInit=function ngOnInit(){var _this=this;console.log("urls ",this.route.snapshot.paramMap.get("item"));this.registro=this.route.snapshot.paramMap.getAll("registro");console.log("registro",this.registro);this.firestore.collection("ServiceNetwork").snapshotChanges().subscribe(function(data){_this.items=[];console.log("data"+data);data.forEach(function(element){var item=element.payload.doc.data();item.id=element.payload.doc.id;_this.items.push(item);console.log("item.id: "+item.id)})})};_proto.vistaPanoramica=function vistaPanoramica(item){this.firestore.doc("ServiceNetwork/"+item.id).delete();this.firestore.collection("ServiceNetwork").add({url:this.registro})};_proto.BotonRegresar=function BotonRegresar(){this._location.back();console.log("regresar")};return DetalleFotosEvidenciaTareaPage}();DetalleFotosEvidenciaTareaPage.ctorParameters=function(){return[{type:_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]},{type:_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]},{type:angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]},{type:_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]},{type:_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]}]};DetalleFotosEvidenciaTareaPage=tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({selector:"app-detalle-fotos-evidencia-tarea",template:tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-fotos-evidencia-tarea.page.html */"./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-fotos-evidencia-tarea/detalle-fotos-evidencia-tarea.page.html")).default,styles:[tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalle-fotos-evidencia-tarea.page.scss */"./src/app/pages/detalle-fotos-evidencia-tarea/detalle-fotos-evidencia-tarea.page.scss")).default]}),tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes",[_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"],angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])],DetalleFotosEvidenciaTareaPage);/***/}}]);//# sourceMappingURL=detalle-fotos-evidencia-tarea-detalle-fotos-evidencia-tarea-module-es2015.js.map
//# sourceMappingURL=detalle-fotos-evidencia-tarea-detalle-fotos-evidencia-tarea-module-es5.js.map