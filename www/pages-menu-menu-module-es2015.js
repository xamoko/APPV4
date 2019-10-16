(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>menu</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n -->\n\n <ion-split-pane>\n  <ion-menu contentId=\"content\">\n \n    <ion-header>\n      <ion-toolbar color=\"primary\">\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n \n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\n          <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath.startsWith(p.url)\">\n            <ion-label>\n              {{ p.title }}\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-item tappable routerLink=\"/login\" routerDirection=\"root\">\n          <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n          Logout\n        </ion-item>\n\n      </ion-list>\n \n    </ion-content>\n \n  </ion-menu>\n \n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n \n</ion-split-pane>");

/***/ }),

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");







const routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
        children: [
            {
                path: 'first',
                loadChildren: '../first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule'
            },
            {
                path: 'second',
                loadChildren: '../second/second.module#SecondPageModule'
            },
            {
                path: 'second/details',
                loadChildren: '../details/details.module#DetailsPageModule'
            }
        ]
    }
];
let MenuPageModule = class MenuPageModule {
};
MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".active-item {\n  border-left: 8px solid var(--ion-color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94YXZpZXJtb3JhbGVzL0RvY3VtZW50cy94aW5ldC9zZXJ2aWNlX25ldHdvcmtfQXBwVjQvc3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQStDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1pdGVtIHtcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuPage = class MenuPage {
    constructor(router) {
        this.router = router;
        this.selectedPath = '';
        this.pages = [
            {
                title: 'First Page with Tabs',
                //url: '/menu/first'
                url: '/menu/first/tab1'
            },
            {
                title: 'Second Page blank',
                url: '/menu/first/tab2'
            } /* ,
            {
              title: 'Tercera',
              url: '/menu/first/tab3'
            } */
        ];
        this.router.events.subscribe((event) => {
            if (event && event.url) {
                this.selectedPath = event.url;
            }
        });
    }
    ngOnInit() {
    }
};
MenuPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MenuPage);



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module-es2015.js.map