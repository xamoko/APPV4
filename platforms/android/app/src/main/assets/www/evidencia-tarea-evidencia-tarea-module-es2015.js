(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["evidencia-tarea-evidencia-tarea-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/evidencia-tarea/evidencia-tarea.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/evidencia-tarea/evidencia-tarea.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\" mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button ></ion-menu-button>\n      <ion-icon icon=\"../../assets/icon/arrow-left-solid.svg\" (click)=\"BotonRegresar()\"></ion-icon>\n    </ion-buttons>\n    <ion-title>\n      <div *ngFor=\"let normas of normaTipoArr\">\n        <div *ngFor=\"let listanormas of normas.NormaItem\">\n            <span>{{ listanormas.policy_description }}</span><br>\n            <span style=\"font-size: 15px;\">{{normas.policy_type_description}}</span>  \n        </div>\n    </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list inset>\n    <div *ngFor=\"let normas of normaTipoArr\">\n     <!--  <ion-item  class=\"item-stable\" >\n        <button class=\"button-stable\">\n          <ion-icon [name]=\"isGroupShown(normas) ? 'remove' : 'add'\" class=\"action-icon-list\"></ion-icon>\n        </button>\n        &nbsp;\n        <span class=\"list-tittle\">{{normas.policy_type_description}}</span>\n        <button class=\"button-stable button-map\" (click)=\"showZone()\">\n          <ion-icon name=\"map\" class=\"action-icon-list\"></ion-icon>\n        </button>\n      </ion-item> -->\n      <div *ngFor=\"let listanormas of normas.NormaItem\">\n      <!--   <button ion-item class=\"item-accordion\"*ngIf=\"isGroupShown(normas)\" style=\"margin-left: 10px;\">\n            <ion-icon [name]=\"isGroupShown(listanormas) ? 'remove' : 'add'\"></ion-icon>\n            &nbsp;\n            {{ listanormas.policy_description }}\n        </button> -->\n        <div *ngFor=\"let specNorma of listanormas.NormaEspecItem\">\n          <!-- <button ion-item class=\"item-accordion\" (click)=\"taskSelected(specNorma, specNorma.firebaseCode)\" *ngIf=\"isGroupShown2(normas, listanormas)\" style=\"margin-left: 40px;\">\n             {{ specNorma.policy_specification_description }}\n             \n          </button> -->\n          <ion-item>\n              <ion-label (click)=\"taskSelected(specNorma, specNorma.firebaseCode)\" *ngIf=\"isGroupShown2(normas, listanormas)\" style=\"margin-left: 40px; color: gray\" class=\"ion-activatable\">\n                  {{ specNorma.policy_specification_description }}\n                  <ion-ripple-effect></ion-ripple-effect>\n              </ion-label>\n            </ion-item>\n        </div>\n      </div>\n    </div>\n\n    <!--button ion-item *ngFor=\"let zonas of item\" (click)=\"zoneColapse()\">\n      <div>\n        <ion-icon class=\"icon-item-list\" item-left name=\"folder-open\"></ion-icon>\n        {{zonas.nombreZona}}\n        <ion-list inset style=\"margin-left: 10px;\">\n          <button ion-item *ngFor=\"let listaTareas of zonas.listasTareas\" (click)=\"taskListColapse()\">\n            <div>\n              <ion-icon class=\"icon-item-list\" item-left name=\"folder-open\"></ion-icon>\n              {{listaTareas.listaTarea}}\n              <ion-list inset style=\"margin-left: 10px;\">\n                <button ion-item *ngFor=\"let tareas of listaTareas.tareas\" (click)=\"taskSelected(tarea)\">\n                  <div>\n                    <ion-icon class=\"icon-item-list\" item-left name=\"square-outline\"></ion-icon>\n                    {{tareas.tarea}}\n                  </div>\n                </button>\n              </ion-list>\n            </div>\n          </button>\n        </ion-list>\n      </div>\n    </button-->\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/evidencia-tarea/evidencia-tarea.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/evidencia-tarea/evidencia-tarea.module.ts ***!
  \*****************************************************************/
/*! exports provided: EvidenciaTareaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenciaTareaPageModule", function() { return EvidenciaTareaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _evidencia_tarea_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./evidencia-tarea.page */ "./src/app/pages/evidencia-tarea/evidencia-tarea.page.ts");







const routes = [
    {
        path: '',
        component: _evidencia_tarea_page__WEBPACK_IMPORTED_MODULE_6__["EvidenciaTareaPage"]
    }
];
let EvidenciaTareaPageModule = class EvidenciaTareaPageModule {
};
EvidenciaTareaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_evidencia_tarea_page__WEBPACK_IMPORTED_MODULE_6__["EvidenciaTareaPage"]]
    })
], EvidenciaTareaPageModule);



/***/ }),

/***/ "./src/app/pages/evidencia-tarea/evidencia-tarea.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/evidencia-tarea/evidencia-tarea.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2aWRlbmNpYS10YXJlYS9ldmlkZW5jaWEtdGFyZWEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/evidencia-tarea/evidencia-tarea.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/evidencia-tarea/evidencia-tarea.page.ts ***!
  \***************************************************************/
/*! exports provided: EvidenciaTareaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvidenciaTareaPage", function() { return EvidenciaTareaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sqlite/sqlite */ "./src/app/services/sqlite/sqlite.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");








let EvidenciaTareaPage = class EvidenciaTareaPage {
    constructor(http, sqliteService, route, router, navCtrl, _location) {
        this.http = http;
        this.sqliteService = sqliteService;
        this.route = route;
        this.router = router;
        this.navCtrl = navCtrl;
        this._location = _location;
        this.zonasArr = [];
        this.Proyecto = 14;
    }
    ngOnInit() {
        this.item = this.route.snapshot.params;
        this.url = this.item;
        console.log("this.items " + this.route.snapshot.params);
        this.ip = this.sqliteService.ip;
        this.ip2 = this.sqliteService.ip2;
        this.token = this.sqliteService.token;
        this.NombreTarea = this.sqliteService.NombreTarea;
        this.entitiesId = this.sqliteService.entitiesId;
        this.LoadData();
        let idTipoNorma = this.sqliteService.GeridTipoNorma();
        let idNorma = this.sqliteService.GeridNorma();
        let specificacionNorma = this.sqliteService.GerspecificacionNorma();
        let taskId = this.sqliteService.GetTareaId();
        console.log("tipo de norma: " + idTipoNorma + " Id Norma: " + idNorma + " especificacion de norma " + specificacionNorma + " taskId " + taskId);
        let headers2 = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers2.append('Accept', 'application/json');
        headers2.append('content-type', 'application/json');
        headers2.append('Authorization', 'Bearer ' + this.token);
        let url = this.ip2 + "/policyByProjectPhotos";
        let ProjectId = this.sqliteService.GerProjectId();
        let task_id = this.sqliteService.GetTareaId();
        let data = {
            entities_id: this.entitiesId,
            task_id: task_id,
            project_id: ProjectId,
            checked: 1
        };
        console.log("url: " + url);
        console.log("data: " + JSON.stringify(data));
        this.http.post(url, JSON.stringify(data), { headers: headers2 }).subscribe(Response => {
            this.normaTipoObj = Response.json();
            this.normaTipoArr = Array.of(this.normaTipoObj);
            console.log("normas: " + JSON.stringify(this.normaTipoArr));
            let i = 0;
            for (let objJson in this.normaTipoObj) {
                let j = 0;
                this.normaTipoArr[i] = {
                    policy_type_id: this.normaTipoObj[objJson].policy_type_id,
                    policy_type_description: this.normaTipoObj[objJson].policy_type_description,
                    policy_type_comments: this.normaTipoObj[objJson].policy_type_comments,
                    policy_type_checked: "checkpolicytype" + this.normaTipoObj[objJson].policy_type_id,
                    NormaItem: [],
                    show: true
                };
                this.normaObj = this.normaTipoObj[objJson].policy;
                //console.log(this.listaTareasObj);
                for (let objJson2 in this.normaObj) {
                    this.normaTipoArr[i].NormaItem.push({
                        policy_id: this.normaObj[objJson2].policy_id,
                        policy_description: this.normaObj[objJson2].policy_description,
                        policy_comments: this.normaObj[objJson2].policy_comments,
                        policy_policy_type_id: this.normaObj[objJson2].policy_policy_type_id,
                        policy_checked: "checkpolicy" + this.normaObj[objJson2].policy_id,
                        NormaEspecItem: [],
                        show: true
                    });
                    this.normaEspec = this.normaObj[objJson2].policy_spec;
                    for (let objJson3 in this.normaEspec) {
                        //console.log('Tarea: ' + this.tareasObj[objJson3].idTarea + '-' + this.tareasObj[objJson3].tarea);
                        this.normaTipoArr[i].NormaItem[j].NormaEspecItem.push({
                            policy_id: this.normaEspec[objJson3].policy_id,
                            policy_type_id: this.normaEspec[objJson3].policy_type_id,
                            policy_specification_id: this.normaEspec[objJson3].policy_specification_id,
                            policy_specification_description: this.normaEspec[objJson3].policy_specification_description,
                            policy_specification_comments: this.normaEspec[objJson3].policy_specification_comments,
                            policy_spec_policy_id: this.normaEspec[objJson3].policy_spec_policy_id,
                            policy_spec_policy_type_id: this.normaEspec[objJson3].policy_spec_policy_type_id,
                            policy_spec_checked: "checkpolicyspec" + this.normaEspec[objJson3].policy_specification_id,
                            firebaseCode: this.normaEspec[objJson3].FirebaseCode,
                            show: true
                        });
                    }
                    j++;
                }
                i++;
            }
            console.log(this.normaTipoArr);
        });
    }
    LoadData() {
        this.ip = this.sqliteService.ip;
        this.token = this.sqliteService.token;
        //let url = "";
        //if (typeof this.evidencia !== "undefined")  {
        //url = this.ip + `/evidence_photo`;
        //url = this.ip + `/evidenceTask`;
        //let url = "http://198.50.116.250/service_network_API/public/index.php/api/getPhotosByPojectId";
        let url = this.ip2 + "/photosByPolicy";
        let headers2 = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
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
        let idTipoNorma = this.sqliteService.GeridTipoNorma();
        let idNorma = this.sqliteService.GeridNorma();
        let specificacionNorma = this.sqliteService.GerspecificacionNorma();
        let taskId = this.sqliteService.GetTareaId();
        let data = {
            policy_types_id: idTipoNorma,
            policy_id: idNorma,
            policy_specification_id: specificacionNorma,
            task_id: taskId
        };
        console.log("data fotos: " + JSON.stringify(data));
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
    isGroupShown2(elemento1, elemento2) {
        let isShow = false;
        if ((elemento1.show) && (elemento2.show))
            isShow = true;
        return isShow;
    }
    ;
    BotonRegresar() {
        this._location.back();
        console.log("regresar");
    }
    taskSelected(task, codefb) {
        let item = this.item;
        console.log("id: " + JSON.stringify(task));
        console.log("id enviado: " + task.id);
        console.log("Elemento enviado" + JSON.stringify(item.tareaId));
        this.router.navigate(['/menu/first/fotos-evidencia-tarea', { task: JSON.stringify(task), norma: this.normaTipoArr, item: codefb, items: JSON.stringify(item), policyid: task.policy_id, policy_type_id: task.policy_type_id, policy_specification_id: task.policy_specification_id, url: this.url }]);
        /* let navigationExtras: NavigationExtras = {
    
          queryParams:{
            task: JSON.stringify(task),
            norma: this.normaTipoArr,
            item: codefb,
            items: item,
            hola:"algo"
           }
        }
        this.router.navigate(['/menu/first/fotos-evidencia-tarea'], navigationExtras);  */
    }
};
EvidenciaTareaPage.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_3__["SqliteProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }
];
EvidenciaTareaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-evidencia-tarea',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./evidencia-tarea.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/evidencia-tarea/evidencia-tarea.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./evidencia-tarea.page.scss */ "./src/app/pages/evidencia-tarea/evidencia-tarea.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_3__["SqliteProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
], EvidenciaTareaPage);



/***/ })

}]);
//# sourceMappingURL=evidencia-tarea-evidencia-tarea-module-es2015.js.map