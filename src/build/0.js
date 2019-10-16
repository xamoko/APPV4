webpackJsonp([0],{

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonePlanePageModule", function() { return ZonePlanePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zone_plane__ = __webpack_require__(890);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ZonePlanePageModule = /** @class */ (function () {
    function ZonePlanePageModule() {
    }
    ZonePlanePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zone_plane__["a" /* ZonePlanePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zone_plane__["a" /* ZonePlanePage */]),
            ],
        })
    ], ZonePlanePageModule);
    return ZonePlanePageModule;
}());

//# sourceMappingURL=zone-plane.module.js.map

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZonePlanePage; });
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
 * Generated class for the ZonePlanePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZonePlanePage = /** @class */ (function () {
    function ZonePlanePage(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    ZonePlanePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ZonePlanePage');
    };
    ZonePlanePage.prototype.closeZonePlane = function () {
        console.log("Cerrar Modal");
        this.view.dismiss();
    };
    ZonePlanePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-zone-plane',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/zone-plane/zone-plane.html"*/'<!--\n  Generated template for the ZonePlanePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Plano de Zona</ion-title>\n    <ion-buttons end>\n    	<button ion-button (click)="closeZonePlane()">Cerrar</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<span style="margin: 10px 10px 10px 10px">Aquí se mostrará el Plano de la zona</span>\n</ion-content>'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/zone-plane/zone-plane.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ZonePlanePage);
    return ZonePlanePage;
}());

//# sourceMappingURL=zone-plane.js.map

/***/ })

});
//# sourceMappingURL=0.js.map