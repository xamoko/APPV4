(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["avance-tarea-avance-tarea-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avance-tarea/avance-tarea.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avance-tarea/avance-tarea.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t\t<ion-toolbar color=\"primary\" mode=\"ios\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t\t<ion-menu-button></ion-menu-button>\n\t\t\t\t<ion-icon icon=\"../../assets/icon/arrow-left-solid.svg\" (click)=\"BotonRegresar()\"></ion-icon>\n\t\t\t  </ion-buttons>\n    <ion-title style=\"width: 100%;\n\t\theight: 100%;\n\t\ttext-align: center;\n\t\tpadding: unset\">\n\t\t\t<!-- <ion-icon style=\"font-size: 2.0em; margin-left:80%;\" ios=\"ios-attach\" md=\"md-add\" (click)=\"Open('photo')\"></ion-icon> -->\n\t\t\t<ion-icon style=\"font-size: 2.0em; margin-left:80%;\" ios=\"ios-attach\" md=\"md-add\" (click)=\"takePicturesCamera()\"></ion-icon>\n\t\t</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list class=\"list-md\" lines=\"full\">\n\t\t<ion-item *ngIf=\"registros == 0\">\n\t\t\t<div class=\"sec2\">\n\t\t\t\t<p class=\"fontPrimaria\" style=\"padding:20px;margin: 0px;\">\n\t\t\t\t\tAun no hay fotos de Avance que mostrar\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</ion-item>\n\n\t\t<ion-item class=\"item-padding\" *ngFor=\"let item of todo | async\" style=\"margin-left: -30px;\">\n\t\t\t<!-- <div *ngIf=\"FBcode == item.identificador\"> -->\n\t\t\t\t<ion-item class=\"item-md item-block\">\n\t\t\t<ion-avatar item-start (click)=\"Open('D', item.url, item.latitud, item.longitud)\" class=\"estilo-img\">\n\t\t\t\t<img [src]=\"item.url\" class=\"ion-avatar\">\n\t\t\t</ion-avatar>\n\t\t\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-note>\n\t\t\t\t<!-- <h3 style=\"font-size: 20px; color: #404040;\"><b>Nombre:</b> {{ registro.photoName }}</h3>\n\t\t\t\t<h3 style=\"font-size: 12px; color: #404040;\"><b>Descripción:</b> {{ registro.description }}</h3>\n\t\t\t\t<h3 style=\"font-size: 12px; color: #404040;\"><b>Latitud:</b> {{ registro.geoLatitude }}</h3>\n\t\t\t\t<h3 style=\"font-size: 12px; color: #404040;\"><b>Longitud:</b> {{ registro.geoLongitude }}</h3> -->\n\t\t\t\t<h3 style=\"font-size: 12px; color: #404040;\"><b>¿Quién la subió?:</b>{{ item.nombre }}</h3>\n\t\t\t\t<!-- <h3 style=\"font-size: 12px; color: #404040;\"><b>Fecha - Hora:</b> {{ registro.creationDate }}</h3> -->\n\t\t\t</ion-note>\n\t\t\t\t</ion-item>\n\t\t<!-- </div> -->\n\t\t\n\t\t</ion-item>\n\t</ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n    <ion-col size=\"12\">\n      <ion-col size=\"6\">\n      <ion-icon class=\"icon-action-buttons\" name=\"camera\" (click)=\"takePicturesCamera()\" style=\"font-size: 30px;\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"6\">\n      <ion-icon class=\"icon-action-buttons\" name=\"images\" (click)=\"takePicturesGallery()\" style=\"font-size: 30px;\"></ion-icon>\n      </ion-col>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-footer>");

/***/ }),

/***/ "./src/app/pages/avance-tarea/avance-tarea.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/avance-tarea/avance-tarea.module.ts ***!
  \***********************************************************/
/*! exports provided: AvanceTareaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvanceTareaPageModule", function() { return AvanceTareaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _avance_tarea_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avance-tarea.page */ "./src/app/pages/avance-tarea/avance-tarea.page.ts");







const routes = [
    {
        path: '',
        component: _avance_tarea_page__WEBPACK_IMPORTED_MODULE_6__["AvanceTareaPage"]
    }
];
let AvanceTareaPageModule = class AvanceTareaPageModule {
};
AvanceTareaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_avance_tarea_page__WEBPACK_IMPORTED_MODULE_6__["AvanceTareaPage"]]
    })
], AvanceTareaPageModule);



/***/ }),

/***/ "./src/app/pages/avance-tarea/avance-tarea.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/avance-tarea/avance-tarea.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  left: 0;\n  top: 0;\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  contain: layout size style; }\n\n.item-md {\n  padding-left: 16px;\n  padding-right: 0;\n  position: relative;\n  font-size: 1.6rem;\n  font-weight: normal;\n  text-transform: none;\n  color: #000;\n  background-color: #fff;\n  box-shadow: none;\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1); }\n\n.item-block {\n  margin: 0;\n  padding: 0;\n  text-align: initial;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 4.4rem;\n  border: 0;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  color: inherit; }\n\nion-list {\n  margin: 0;\n  padding: 0;\n  display: block;\n  list-style-type: none; }\n\n.list-md {\n  margin: -1px 0 16px; }\n\nion-chip ion-avatar {\n  border-radius: 50%;\n  width: 32px;\n  min-width: 32px;\n  height: 32px;\n  min-height: 32px; }\n\nion-chip ion-avatar img {\n  border-radius: 50%;\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%; }\n\nimg {\n  max-width: 100%;\n  border: 0; }\n\nion-label {\n  margin: 0;\n  display: block;\n  overflow: hidden;\n  flex: 1;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.label-md {\n  margin: 13px 8px 13px 0; }\n\n.estilo-img {\n  width: 200px;\n  height: 150px;\n  border: #FDC938 3px solid;\n  border-radius: 0; }\n\n.item-padding {\n  padding: 20px; }\n\npage-registro .list-avatar-page ion-note {\n  font-size: 12px;\n  align-self: flex-start;\n  margin-top: 14px; }\n\n.ion-avatar {\n  width: 200px;\n  border-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94YXZpZXJtb3JhbGVzL0RvY3VtZW50cy94aW5ldC9zZXJ2aWNlX25ldHdvcmtfQXBwVjQvc3JjL2FwcC9wYWdlcy9hdmFuY2UtdGFyZWEvYXZhbmNlLXRhcmVhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDBCQUEwQixFQUFBOztBQUc1QjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxzQkFBc0I7RUFFdEIsZ0JBQWdCO0VBRWhCLCtEQUErRCxFQUFBOztBQUdqRTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0VBSW5CLGFBQWE7RUFDYixnQkFBZ0I7RUFJaEIsbUJBQW1CO0VBSW5CLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBZTtFQUNmLFNBQVMsRUFBQTs7QUFJYjtFQUNJLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZ0JBQWdCO0VBSWhCLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNBLGVBQWU7RUFHZixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXZhbmNlLXRhcmVhL2F2YW5jZS10YXJlYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb250YWluOiBsYXlvdXQgc2l6ZSBzdHlsZTtcbiAgfVxuXG4gIC5pdGVtLW1kIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgfVxuXG4gIC5pdGVtLWJsb2NrIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogNC40cmVtO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbmlvbi1saXN0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cblxuICAubGlzdC1tZCB7XG4gICAgbWFyZ2luOiAtMXB4IDAgMTZweDtcbiAgfVxuXG4gIGlvbi1jaGlwIGlvbi1hdmF0YXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMzJweDtcbiAgICBtaW4td2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG1pbi1oZWlnaHQ6IDMycHg7XG4gIH1cbiAgXG4gIGlvbi1jaGlwIGlvbi1hdmF0YXIgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cblxuaW9uLWxhYmVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAtbXMtZmxleDogMTtcbiAgICBmbGV4OiAxO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLmxhYmVsLW1kIHtcbiAgICBtYXJnaW46IDEzcHggOHB4IDEzcHggMDtcbiAgfVxuICBcbiAgLmVzdGlsby1pbWd7XG4gICAgd2lkdGg6IDIwMHB4OyBcbiAgICBoZWlnaHQ6IDE1MHB4OyBcbiAgICBib3JkZXI6ICNGREM5MzggM3B4IHNvbGlkOyBcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICB9XG5cbiAgLml0ZW0tcGFkZGluZ3tcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgcGFnZS1yZWdpc3RybyAubGlzdC1hdmF0YXItcGFnZSBpb24tbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgLXdlYmtpdC1hbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAtbXMtZmxleC1pdGVtLWFsaWduOiBzdGFydDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuICAuaW9uLWF2YXRhcntcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/avance-tarea/avance-tarea.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/avance-tarea/avance-tarea.page.ts ***!
  \*********************************************************/
/*! exports provided: AvanceTareaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvanceTareaPage", function() { return AvanceTareaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/sqlite/sqlite */ "./src/app/services/sqlite/sqlite.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");













let AvanceTareaPage = class AvanceTareaPage {
    constructor(camera, http, route, router, sqliteService, firestore, navCtrl, geolocation, storage, _location) {
        this.camera = camera;
        this.http = http;
        this.route = route;
        this.router = router;
        this.sqliteService = sqliteService;
        this.firestore = firestore;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.storage = storage;
        this._location = _location;
        this.ip2 = "http://198.50.116.250/service_network_API/public/index.php/api";
        this.Image = [];
        this.base64Image = [];
    }
    ngOnInit() {
        this.items = this.route.snapshot.params;
        /* this.item = this.items.data.item;
            this.evidencia = this.items.data.evidencia;
        this.FBcode = this.items.data.item; */
        let taskId = this.sqliteService.GetTareaId();
        this.collection = this.firestore.collection(`fotosAvance/${taskId}/fotos`);
        this.todo = this.collection.valueChanges();
    }
    LoadDatas() {
        this.ip = this.sqliteService.ip;
        this.token = this.sqliteService.token;
        //let url = "";
        //if (typeof this.evidencia !== "undefined")  {
        //url = this.ip + `/evidence_photo`;
        //url = this.ip + `/evidenceTask`;
        let url = "http://198.50.116.250/service_network_API/public/index.php/api/getPhotosByPojectId";
        let headers2 = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
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
        let data = {
            project_id: ProjectId,
            task_id: this.items.tareaId,
            photo_type_id: tipoFoto
        };
        console.log("data: " + JSON.stringify(data));
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
                correctOrientation: true,
                allowEdit: true,
            };
            this.geolocation.getCurrentPosition().then((resp) => {
                console.log("Coordenadas 1: " + resp.coords.latitude, resp.coords.longitude);
                this.latitud = resp.coords.latitude,
                    this.longitud = resp.coords.longitude;
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
            const filePath = `fotosAvance/${tareaid}/${idd}`;
            /* const ref = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file); */
            const pictures = this.storage.ref(filePath);
            var task = pictures.putString(image, 'data_url');
            pictures.getDownloadURL().subscribe(ur => {
                console.log("nueva funcion: " + ur);
            });
            console.log("a punto de entrar");
            var tar = parseFloat(tareaid);
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => pictures.getDownloadURL().subscribe(url => {
                this.datas = {
                    key: idd,
                    nombre: "Foto de avance de la tarea: " + this.items.nombreTarea + ". Foto desde la cámara",
                    url: url,
                    idTarea: tar,
                    latitud: this.latitud,
                    longitud: this.longitud
                };
                console.log(JSON.stringify(this.datas));
                this.firestore.collection('fotosAvance').doc(`${tar}`).collection('fotos').add(this.datas);
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
                this.latitud = resp.coords.latitude,
                    this.longitud = resp.coords.longitude;
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
            const filePath = `fotosAvance/${tareaid}/${idd}`;
            /* const ref = this.storage.ref(filePath);
        const task = this.storage.upload(filePath, file); */
            const pictures = this.storage.ref(filePath);
            var task = pictures.putString(image, 'data_url');
            pictures.getDownloadURL().subscribe(ur => {
                console.log("nueva funcion: " + ur);
            });
            console.log("a punto de entrar");
            var tar = parseFloat(tareaid);
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => pictures.getDownloadURL().subscribe(url => {
                this.datas = {
                    key: idd,
                    nombre: "Foto de avance de la tarea: " + this.items.nombreTarea + ". Foto desde la galería",
                    url: url,
                    idTarea: tar,
                    latitud: this.latitud,
                    longitud: this.longitud
                };
                console.log(JSON.stringify(this.datas));
                this.firestore.collection('fotosAvance').doc(`${tar}`).collection('fotos').add(this.datas);
            }))).subscribe();
        });
    }
    BotonRegresar() {
        this._location.back();
        console.log("regresar");
    }
    Open(page, registro, latitud, longitud) {
        let item = this.todo;
        console.log("latitud: ", latitud);
        console.log("longitud: ", longitud);
        console.log("todo: ", JSON.stringify(item));
        switch (page) {
            case "photo": {
                /* this.navCtrl.push(NuevoregistroPage, { item: item }); */
                break;
            }
            case "photoGallery": {
                /* this.navCtrl.push(Nuevoregistro2Page, { item: item }); */
                break;
            }
            case "D": {
                this.navCtrl.navigateForward(['/menu/first/detalle-foto-avance', { registro: JSON.stringify(registro), item: JSON.stringify(item), lat: latitud, lon: longitud }]);
                //this.router.navigate(['/menu/first/detalle-foto-avance' ,registro]);
                break;
            }
        }
    }
};
AvanceTareaPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_9__["SqliteProvider"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"] }
];
AvanceTareaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-avance-tarea',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./avance-tarea.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/avance-tarea/avance-tarea.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./avance-tarea.page.scss */ "./src/app/pages/avance-tarea/avance-tarea.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_9__["SqliteProvider"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]])
], AvanceTareaPage);



/***/ })

}]);
//# sourceMappingURL=avance-tarea-avance-tarea-module-es2015.js.map