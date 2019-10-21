(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalle-foto-avance-detalle-foto-avance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-foto-avance/detalle-foto-avance.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-foto-avance/detalle-foto-avance.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t\t<ion-toolbar color=\"primary\" mode=\"ios\">\n    <ion-buttons slot=\"start\">\n\t  <ion-menu-button ></ion-menu-button>\n\t  <ion-icon icon=\"../../assets/icon/arrow-left-solid.svg\" (click)=\"BotonRegresar()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"padding: 20px;\">\n\t\t<ion-item>\n\t\t\t<ion-slides>\n\t\t\t\t<ion-slide (ionSlideDidChange)=\"slideChanged()\">\n\t\t\t\t\t<img [src]=\"registros\">\n\t\t\t\t</ion-slide>\n\t\t\t</ion-slides>\n\t\t</ion-item>\n\t</div>\n\n\t<ion-grid clas=\"grid\">\n\t\t<ion-row justify-content-start>\n\t\t\t<ion-col size=\"12\">\n\t\t\t\t<ion-card class=\"card-md\">\n\t\t\t\t\t<h2 style=\" font-size: 30px; text-transform: uppercase; text-align: left; border-bottom: 1px solid; color: black;\">Detalles:</h2>\n\t\t\t\t\t<ion-item>\n\t\t\t\t\t\t<ion-label>Ubicación:</ion-label>\n\t\t\t\t\t\t<ion-label>{{ latitud }}{{ longitud }}</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"12\" style=\"margin-left: auto; margin-right: auto\">\n\t\t\t\t<div *ngFor=\"let item of items\">\n\t\t\t\t\t<button class=\"actions-detail-button-width button-round-md button-md \" ion-button icon-right round (click)=\"vistaPanoramica(item)\">\n\t\t\t\t\t\t\tEnviar a Supervisor\n\t\t\t\t\t\t\t<ion-icon name=\"md-exit\"></ion-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t<!-- <p style=\"text-align: justify;\"> <b>Descripción:</b> {{ registro.description }}</p>\n\t\t\t\t<p style=\"text-align: justify;\"> <b>Latitud:</b> {{ registro.geoLatitude }}</p>\n\t\t\t\t<p style=\"text-align: justify;\"> <b>Longitud:</b> {{ registro.geoLongitude }}</p>\n\t\t\t\t<p style=\"text-align: justify;\"> <b>¿Quién la subió?:</b> {{ registro.completeName }}</p>\n\t\t\t\t<p style=\"text-align: justify;\"> <b>Fecha-Hora:</b> {{ registro.creationDate }}</p> -->\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/detalle-foto-avance/detalle-foto-avance.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/detalle-foto-avance/detalle-foto-avance.module.ts ***!
  \*************************************************************************/
/*! exports provided: DetalleFotoAvancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleFotoAvancePageModule", function() { return DetalleFotoAvancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detalle_foto_avance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle-foto-avance.page */ "./src/app/pages/detalle-foto-avance/detalle-foto-avance.page.ts");







const routes = [
    {
        path: '',
        component: _detalle_foto_avance_page__WEBPACK_IMPORTED_MODULE_6__["DetalleFotoAvancePage"]
    }
];
let DetalleFotoAvancePageModule = class DetalleFotoAvancePageModule {
};
DetalleFotoAvancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_detalle_foto_avance_page__WEBPACK_IMPORTED_MODULE_6__["DetalleFotoAvancePage"]]
    })
], DetalleFotoAvancePageModule);



/***/ }),

/***/ "./src/app/pages/detalle-foto-avance/detalle-foto-avance.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/detalle-foto-avance/detalle-foto-avance.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid {\n  padding: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.card-md {\n  box-shadow: none;\n  background: #0000 !important; }\n\n.button-round-md {\n  border-radius: 64px;\n  padding: 0 2.6rem; }\n\n.button-md {\n  /* border-radius: 2px; */\n  overflow: hidden;\n  height: 2.6rem;\n  /* font-size: 1.4rem; */\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #fff;\n  background-color: #488aff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  margin: 0.4rem 0.2rem;\n  padding: 0 1.1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94YXZpZXJtb3JhbGVzL0RvY3VtZW50cy94aW5ldC9zZXJ2aWNlX25ldHdvcmtfQXBwVjQvc3JjL2FwcC9wYWdlcy9kZXRhbGxlLWZvdG8tYXZhbmNlL2RldGFsbGUtZm90by1hdmFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUlYLGFBQWE7RUFLYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFFRSxnQkFBZ0I7RUFDaEIsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHdCQUFBO0VBQ0EsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx1QkFBQTtFQUNBLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLHlCQUF5QjtFQUV6QiwrR0FBK0c7RUFHL0csd0pBQXdKO0VBRXhKLHFCQUFxQjtFQUNyQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFsbGUtZm90by1hdmFuY2UvZGV0YWxsZS1mb3RvLWF2YW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmNhcmQtbWR7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzAwMDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5idXR0b24tcm91bmQtbWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDY0cHg7XG4gICAgcGFkZGluZzogMCAyLjZyZW07XG59XG5cbi5idXR0b24tbWQge1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDJweDsgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMi42cmVtO1xuICAgIC8qIGZvbnQtc2l6ZTogMS40cmVtOyAqL1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg4YWZmO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgLXdlYmtpdC1ib3gtc2hhZG93IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBjb2xvciAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCAtd2Via2l0LWJveC1zaGFkb3cgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgLXdlYmtpdC1ib3gtc2hhZG93IDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgbWFyZ2luOiAwLjRyZW0gMC4ycmVtO1xuICAgIHBhZGRpbmc6IDAgMS4xZW07XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/detalle-foto-avance/detalle-foto-avance.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/detalle-foto-avance/detalle-foto-avance.page.ts ***!
  \***********************************************************************/
/*! exports provided: DetalleFotoAvancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleFotoAvancePage", function() { return DetalleFotoAvancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sqlite/sqlite */ "./src/app/services/sqlite/sqlite.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");










let DetalleFotoAvancePage = class DetalleFotoAvancePage {
    constructor(http, route, router, sqliteService, firestore, navCtrl, _location, sanitizer) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.sqliteService = sqliteService;
        this.firestore = firestore;
        this.navCtrl = navCtrl;
        this._location = _location;
        this.sanitizer = sanitizer;
        this.items = [];
    }
    ngOnInit() {
        this.registro = this.route.snapshot.paramMap.get("registro");
        this.item = this.route.snapshot.paramMap.get("item");
        this.latitud = this.route.snapshot.paramMap.get("lat");
        this.longitud = this.route.snapshot.paramMap.get("lon");
        var img = this.registro;
        this.registros = this.sanitizer.bypassSecurityTrustUrl(img.substring(1));
        console.log("registro", this.registro);
        console.log("items", this.item);
        console.log("latitud: ", this.latitud);
        console.log("longitud: ", this.longitud);
        this.firestore.collection("ServiceNetwork").snapshotChanges().subscribe(data => {
            this.items = [];
            console.log("data" + data);
            data.forEach(element => {
                let item = element.payload.doc.data();
                item.id = element.payload.doc.id;
                this.items.push(item);
                console.log("item.id: " + item.id);
            });
        });
    }
    getImgContent() {
        return this.registros;
    }
    BotonRegresar() {
        this._location.back();
        console.log("regresar");
    }
    vistaPanoramica(item) {
        this.firestore.doc(`ServiceNetwork/${item.id}`).delete();
        this.firestore.collection('ServiceNetwork').add({ url: this.registro });
    }
};
DetalleFotoAvancePage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_4__["SqliteProvider"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] }
];
DetalleFotoAvancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-foto-avance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-foto-avance.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-foto-avance/detalle-foto-avance.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalle-foto-avance.page.scss */ "./src/app/pages/detalle-foto-avance/detalle-foto-avance.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_4__["SqliteProvider"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]])
], DetalleFotoAvancePage);



/***/ })

}]);
//# sourceMappingURL=detalle-foto-avance-detalle-foto-avance-module-es2015.js.map