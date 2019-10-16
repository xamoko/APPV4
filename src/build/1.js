webpackJsonp([1],{

/***/ 886:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(889);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
            ],
        })
    ], ModalPageModule);
    return ModalPageModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 889:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_sqlite__ = __webpack_require__(19);
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






var ModalPage = /** @class */ (function () {
    function ModalPage(navParams, view, alertCtrl, sqliteService, http) {
        this.navParams = navParams;
        this.view = view;
        this.alertCtrl = alertCtrl;
        this.sqliteService = sqliteService;
        this.http = http;
        this.ip2 = this.sqliteService.ip2;
        this.token = this.sqliteService.token;
        this.item = navParams.data.item;
        console.log("item: " + this.item.cantidad);
    }
    ModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalPage');
        this.cantidad = this.item.cantidad;
        this.iniciarInstalado();
    };
    ModalPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    ModalPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Agregar',
            message: 'Desea agregar el avance: ' + this.dato,
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Saved clicked' + JSON.stringify(data));
                        _this.closeModal();
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Guardar',
                    handler: function (data) {
                        console.log('Saved clicked' + JSON.stringify(data));
                        var url = __WEBPACK_IMPORTED_MODULE_2__api_component__["a" /* enlace */] + "agregarInstalado";
                        var datas = {
                            descripcion: null,
                            cantidad: null,
                            unidad_medida: null,
                            total: _this.dato,
                            tarea: _this.sqliteService.GetTareaId(),
                            usuario: _this.sqliteService.GerUserId(),
                            proyecto: _this.sqliteService.GerProjectId(),
                            latitud: null,
                            longitud: null
                        };
                        _this.http.post(url, JSON.stringify(datas), { headers: __WEBPACK_IMPORTED_MODULE_2__api_component__["b" /* headers2 */] }).subscribe(function (Response) {
                            var retorno = Response.json();
                            _this.closeModal();
                            _this.iniciarInstalado();
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    ModalPage.prototype.iniciarInstalado = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_2__api_component__["a" /* enlace */] + "sumaInstalado";
        var data = {
            tarea: this.sqliteService.GetTareaId(),
            proyecto: this.sqliteService.GerProjectId(),
        };
        this.http.post(url, JSON.stringify(data), { headers: __WEBPACK_IMPORTED_MODULE_2__api_component__["b" /* headers2 */] }).subscribe(function (Response) {
            var respuesta = Response.json();
            respuesta.forEach(function (element) {
                element.TotalInstalado;
                _this.avanceActual = element.TotalInstalado;
                console.log("Avance Actual: " + _this.avanceActual);
            });
        });
    };
    ModalPage.prototype.onChangeUserValue = function () {
        var userAux = this.dato;
        var element = document.getElementById("btn-login");
        if ((userAux != undefined) && (userAux != "")) {
            element.disabled = false;
        }
        else {
            element.disabled = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalPage.prototype, "avanceActual", void 0);
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal',template:/*ion-inline-start:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/modal/modal.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Instalado</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">Cerrar</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n\n  <ion-card >\n    <div style="margin-left: 20%">\n    <ion-item>\n      <ion-label>Cantidad Total de la Tarea</ion-label>\n      <ion-label style="font-weight: bold;">{{ cantidad}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Avance Actual</ion-label>\n      <ion-label style="font-weight: bold;">{{ avanceActual }}</ion-label>\n    </ion-item>\n\n      <ion-item>\n        <ion-label>Agregar Avance</ion-label><br/>\n        <ion-input placeholder="Escriba Aqui" [(ngModel)]="dato" (ionChange)=\'onChangeUserValue()\'></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <button ion-button color="danger" style="border-radius: 10px;" (click)="closeModal()">Cancelar</button>\n        <button ion-button style="border-radius: 10px;" (click)="showPrompt()"  id="btn-login" disabled>Aceptar</button>\n      </ion-item>\n\n    </div>\n</ion-card>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/xaviermorales/Documents/xinet/service-network-app/src/pages/modal/modal.html"*/,
            styles: ['modal.css']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_sqlite_sqlite__["a" /* SqliteProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ })

});
//# sourceMappingURL=1.js.map