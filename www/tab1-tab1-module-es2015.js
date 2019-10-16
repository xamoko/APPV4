(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>tab1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n -->\n\n <ion-header>\n    <ion-toolbar color=\"primary\" mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Proyectos</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n  My first tab content\n\n  <!-- <ion-button expand=\"block\" routerLink=\"/menu/first/tabs/tab1/details\" routerDirection=\"forward\">\n    Details forward\n  </ion-button> -->\n\n  <ion-list>\n      <button ion-item *ngFor=\"let proyecto of proyectos\" (click)=\"itemSelected(proyecto)\">\n        <div>\n          <ion-icon class=\"icon-item-list\" item-left name=\"folder\"></ion-icon>\n          <!--{{proyecto.id}} - {{proyecto.comments}}-->\n          {{proyecto.description}}\n        </div>\n      </button>\n    </ion-list>\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/tab1/tab1.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.module.ts ***!
  \*******************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/pages/tab1/tab1.page.ts");







const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
    }
];
let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-proyects {\n  position: relative;\n  top: 7px;\n  color: #595959;\n  font-size: 20px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94YXZpZXJtb3JhbGVzL0RvY3VtZW50cy94aW5ldC9zZXJ2aWNlX25ldHdvcmtfQXBwVjQvc3JjL2FwcC9wYWdlcy90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixjQUFjO0VBQ2QsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tcHJveWVjdHN7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogN3B4O1xuICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.ts ***!
  \*****************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sqlite/sqlite */ "./src/app/services/sqlite/sqlite.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let Tab1Page = class Tab1Page {
    constructor(navCtrl, http, sqliteService, router) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.sqliteService = sqliteService;
        this.router = router;
        this.items = [];
        this.proyectos = [];
    }
    ngOnInit() {
        this.getProjects();
    }
    getProjects() {
        this.ip = this.sqliteService.ip;
        this.ip2 = this.sqliteService.ip2;
        this.token = this.sqliteService.token;
        //let url = this.ip + "/projects/" + this.sqliteService.GerUserId();
        let url = this.ip2 + "/getProjectsAdminId?project_admin_user_id=" + this.sqliteService.GerUserId();
        console.log(this.sqliteService.GerUserId());
        let headers2 = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers2.append('Accept', 'application/json');
        headers2.append('content-type', 'application/json');
        headers2.append('Authorization', 'Bearer ' + this.token);
        //console.log(this.token + "homepage");
        //console.log(headers2);
        this.http.post(url, { headers: headers2 }).subscribe(data => {
            this.proyectos = data.json();
            console.log("proyectos: " + JSON.stringify(this.proyectos));
        });
    }
    itemSelected(proyecto) {
        //this.navCtrl.push(TaskPage, { proyecto: proyecto });
        this.router.navigate(['/menu/first/tab3', proyecto]);
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
    { type: _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_3__["SqliteProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/pages/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _services_sqlite_sqlite__WEBPACK_IMPORTED_MODULE_3__["SqliteProvider"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map