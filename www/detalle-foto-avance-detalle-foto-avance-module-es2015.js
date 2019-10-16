(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalle-foto-avance-detalle-foto-avance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-foto-avance/detalle-foto-avance.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-foto-avance/detalle-foto-avance.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t\t<ion-toolbar color=\"primary\" mode=\"ios\">\n    <ion-buttons slot=\"start\">\n\t  <ion-menu-button ></ion-menu-button>\n\t  <ion-icon icon=\"../../assets/icon/arrow-left-solid.svg\" (click)=\"BotonRegresar()\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"padding: 20px;\">\n\t\t<ion-item>\n\t\t\t<ion-slides>\n\t\t\t\t<ion-slide (ionSlideDidChange)=\"slideChanged()\">\n\t\t\t\t\t<img [src]=\"registro.url\">\n\t\t\t\t</ion-slide>\n\t\t\t</ion-slides>\n\t\t</ion-item>\n\t</div>\n\n\t<ion-grid>\n\t\t<ion-row justify-content-start>\n\t\t\t<ion-col col-12>\n\t\t\t\t<ion-card>\n\t\t\t\t\t<h2 style=\" font-size: 30px; text-transform: uppercase; text-align: left; border-bottom: 1px solid;\">Detalles:</h2>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t\t<ion-col col-12 style=\"margin-left: auto; margin-right: auto\">\n\t\t\t\t<div *ngFor=\"let item of items\">\n\t\t\t\t\t<button class=\"actions-detail-button-width\" ion-button icon-right round (click)=\"vistaPanoramica(item)\">\n\t\t\t\t\t\t\tEnviar a Supervisor\n\t\t\t\t\t\t\t<ion-icon name=\"md-exit\"></ion-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t<!-- <p style=\"text-align: justify;\"> <b>Descripción:</b> {{ registro.description }}</p>\n\t\t\t\t<p style=\"text-align: justify;\"> <b>Latitud:</b> {{ registro.geoLatitude }}</p>\n\t\t\t\t<p style=\"text-align: justify;\"> <b>Longitud:</b> {{ registro.geoLongitude }}</p>\n\t\t\t\t<p style=\"text-align: justify;\"> <b>¿Quién la subió?:</b> {{ registro.completeName }}</p>\n\t\t\t\t<p style=\"text-align: justify;\"> <b>Fecha-Hora:</b> {{ registro.creationDate }}</p> -->\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFsbGUtZm90by1hdmFuY2UvZGV0YWxsZS1mb3RvLWF2YW5jZS5wYWdlLnNjc3MifQ== */");

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









let DetalleFotoAvancePage = class DetalleFotoAvancePage {
    constructor(http, route, router, sqliteService, firestore, navCtrl, _location) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.sqliteService = sqliteService;
        this.firestore = firestore;
        this.navCtrl = navCtrl;
        this._location = _location;
        this.items = [];
    }
    ngOnInit() {
        this.registro = this.route.snapshot.params;
        console.log(JSON.stringify(this.registro));
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
    BotonRegresar() {
        this._location.back();
        console.log("regresar");
    }
    vistaPanoramica(item) {
        this.firestore.doc(`ServiceNetwork/${item.id}`).delete();
        this.firestore.collection('ServiceNetwork').add({ url: this.registro.url });
    }
};
DetalleFotoAvancePage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_4__["SqliteProvider"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
];
DetalleFotoAvancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalle-foto-avance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detalle-foto-avance.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detalle-foto-avance/detalle-foto-avance.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detalle-foto-avance.page.scss */ "./src/app/pages/detalle-foto-avance/detalle-foto-avance.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_4__["SqliteProvider"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
], DetalleFotoAvancePage);



/***/ })

}]);
//# sourceMappingURL=detalle-foto-avance-detalle-foto-avance-module-es2015.js.map