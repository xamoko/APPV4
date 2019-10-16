(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["first-with-tabs-first-with-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-with-tabs/first-with-tabs.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-with-tabs/first-with-tabs.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>firstWithTabs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n -->\n\n <ion-tabs>\n \n  <ion-tab-bar slot=\"bottom\">\n \n    <ion-tab-button tab=\"tab1\">\n        <ion-icon icon=\"../../../assets/icon/dice-d6-solid.svg\"></ion-icon>\n      <ion-label>Projectos</ion-label>\n    </ion-tab-button>\n \n    <ion-tab-button tab=\"tab2\">\n        <ion-icon icon=\"../../../assets/icon/dice-d6-solid.svg\"></ion-icon>\n      <ion-label>Tab 2</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n \n</ion-tabs>");

/***/ }),

/***/ "./src/app/pages/first-with-tabs/first-with-tabs.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/first-with-tabs/first-with-tabs.module.ts ***!
  \*****************************************************************/
/*! exports provided: FirstWithTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstWithTabsPageModule", function() { return FirstWithTabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _first_with_tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./first-with-tabs.page */ "./src/app/pages/first-with-tabs/first-with-tabs.page.ts");








const routes = [
    {
        path: '',
        component: _first_with_tabs_page__WEBPACK_IMPORTED_MODULE_7__["FirstWithTabsPage"],
        children: [
            {
                path: 'tab1',
                loadChildren: '../tab1/tab1.module#Tab1PageModule'
            },
            {
                path: 'tab1/details',
                loadChildren: '../details/details.module#DetailsPageModule'
            },
            {
                path: 'tab2',
                loadChildren: '../tab2/tab2.module#Tab2PageModule'
            },
            {
                path: 'tab3',
                loadChildren: '../tab3/tab3.module#Tab3PageModule'
            },
            {
                path: 'descripcion-tarea',
                loadChildren: '../descripcion-tarea/descripcion-tarea.module#DescripcionTareaPageModule'
            },
            {
                path: 'avance-tarea',
                loadChildren: '../avance-tarea/avance-tarea.module#AvanceTareaPageModule'
            },
            {
                path: 'detalle-foto-avance',
                loadChildren: '../detalle-foto-avance/detalle-foto-avance.module#DetalleFotoAvancePageModule'
            },
            {
                path: 'evidencia-tarea',
                loadChildren: '../evidencia-tarea/evidencia-tarea.module#EvidenciaTareaPageModule'
            },
            {
                path: 'fotos-evidencia-tarea',
                loadChildren: '../fotos-evidencia-tarea/fotos-evidencia-tarea.module#FotosEvidenciaTareaPageModule'
            },
            {
                path: 'detalle-fotos-evidencia-tarea',
                loadChildren: '../detalle-fotos-evidencia-tarea/detalle-fotos-evidencia-tarea.module#DetalleFotosEvidenciaTareaPageModule'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
    }
];
let FirstWithTabsPageModule = class FirstWithTabsPageModule {
};
FirstWithTabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_first_with_tabs_page__WEBPACK_IMPORTED_MODULE_7__["FirstWithTabsPage"]]
    })
], FirstWithTabsPageModule);



/***/ }),

/***/ "./src/app/pages/first-with-tabs/first-with-tabs.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/first-with-tabs/first-with-tabs.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcnN0LXdpdGgtdGFicy9maXJzdC13aXRoLXRhYnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/first-with-tabs/first-with-tabs.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/first-with-tabs/first-with-tabs.page.ts ***!
  \***************************************************************/
/*! exports provided: FirstWithTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstWithTabsPage", function() { return FirstWithTabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



let FirstWithTabsPage = class FirstWithTabsPage {
    constructor() {
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCoffee"];
    }
    ngOnInit() {
    }
};
FirstWithTabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-first-with-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./first-with-tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/first-with-tabs/first-with-tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./first-with-tabs.page.scss */ "./src/app/pages/first-with-tabs/first-with-tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FirstWithTabsPage);



/***/ })

}]);
//# sourceMappingURL=first-with-tabs-first-with-tabs-module-es2015.js.map