(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>tab1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n -->\n <ion-app>\n\n <ion-header>\n    <ion-toolbar color=\"primary\" mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Proyectos</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content class=\"padding\">\n\n\n  <!-- <ion-button expand=\"block\" routerLink=\"/menu/first/tabs/tab1/details\" routerDirection=\"forward\">\n    Details forward\n  </ion-button> -->\n\n  <ion-list class=\"list-md\">\n    \n     <!--  <button class=\"ion-activatable item-block item-md\" *ngFor=\"let proyecto of proyectos\" (click)=\"itemSelected(proyecto)\">\n          <ion-item class=\"item-md \">\n            <ion-label class=\"label-md item-md2\">\n              <div class=\"item-inner\">\n                <ion-icon class=\"icon-item-list item-left\" name=\"folder\"></ion-icon>\n                  {{proyecto.description}}\n            </div>\n            </ion-label>\n      </ion-item>\n      <ion-ripple-effect></ion-ripple-effect>\n      </button> -->\n\n      <ion-item class=\"\" *ngFor=\"let proyecto of proyectos\" (click)=\"itemSelected(proyecto)\" style=\"width: 95%;\">\n        <ion-label style=\"font-size: 16px; color: #808080;\">\n            <ion-icon slot=\"start\" name=\"folder\" style=\"font-size: 15px; color: #808080;\"></ion-icon>\n            {{proyecto.description}}\n        </ion-label>\n      </ion-item>\n    \n  </ion-list>\n  \n</ion-content>\n</ion-app>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  left: 0;\n  top: 0;\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  contain: layout size style; }\n\n.icon-proyects {\n  position: relative;\n  top: 7px;\n  color: #595959;\n  font-size: 20px !important; }\n\n.icon-item-list {\n  position: relative;\n  top: 1px;\n  color: #595959;\n  font-size: 20px !important; }\n\nion-list {\n  margin: 0;\n  padding: 0;\n  display: block;\n  list-style-type: none; }\n\n.list-md[inset] {\n  margin: 16px;\n  border-radius: 2px; }\n\n.list-md[inset] .item:first-child {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  border-top-width: 0; }\n\n.item-md {\n  padding-left: 16px;\n  padding-right: 0;\n  position: relative;\n  font-size: 1.6rem;\n  font-weight: normal;\n  text-transform: none;\n  --color: #000;\n  background-color: #fff;\n  box-shadow: none;\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1); }\n\n.item-md2 {\n  padding-left: 0px;\n  padding-right: 0;\n  position: relative;\n  font-size: 1.1rem;\n  font-weight: normal;\n  text-transform: none;\n  --color: #000;\n  background-color: #fff;\n  box-shadow: none;\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1); }\n\n.item-left {\n  margin: 5px 12px 0px 0; }\n\n.icon-left {\n  font-size: 1.4em;\n  line-height: .67;\n  pointer-events: none;\n  padding-right: 0.3em; }\n\n.item {\n  contain: content; }\n\n.item-block {\n  margin: 0;\n  padding: 0;\n  text-align: initial;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 3.4rem;\n  border: 0;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  color: inherit; }\n\n.item-inner {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  overflow: hidden;\n  flex: 1;\n  flex-direction: inherit;\n  align-items: inherit;\n  align-self: stretch;\n  min-height: inherit;\n  border: 0; }\n\nion-label {\n  margin: 0;\n  display: block;\n  overflow: hidden;\n  flex: 1;\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.label-md {\n  margin: 13px 8px 13px 0;\n  color: #595959 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy94YXZpZXJtb3JhbGVzL0RvY3VtZW50cy94aW5ldC9zZXJ2aWNlX25ldHdvcmtfQXBwVjQvc3JjL2FwcC9wYWdlcy90YWIxL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksT0FBTztFQUNQLE1BQU07RUFDTixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixjQUFjO0VBQ2QsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixjQUFjO0VBQ2QsMEJBQTBCLEVBQUE7O0FBRzVCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsYUFBUTtFQUNSLHNCQUFzQjtFQUV0QixnQkFBZ0I7RUFFaEIsK0RBQStELEVBQUE7O0FBR2pFO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsYUFBUTtFQUNSLHNCQUFzQjtFQUV0QixnQkFBZ0I7RUFFaEIsK0RBQStELEVBQUE7O0FBR2xFO0VBQ0Msc0JBQXNCLEVBQUE7O0FBR3RCO0VBQ0EsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFJbkIsYUFBYTtFQUNiLGdCQUFnQjtFQUloQixtQkFBbUI7RUFJbkIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUlWLGFBQWE7RUFDYixnQkFBZ0I7RUFJaEIsT0FBTztFQUtQLHVCQUF1QjtFQUl2QixvQkFBb0I7RUFHcEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixTQUFTLEVBQUE7O0FBR1g7RUFDRSxTQUFTO0VBQ1QsY0FBYztFQUNkLGdCQUFnQjtFQUloQixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx1QkFBdUI7RUFDdkIseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29udGFpbjogbGF5b3V0IHNpemUgc3R5bGU7XG4gIH1cblxuLmljb24tcHJveWVjdHN7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogN3B4O1xuICAgIGNvbG9yOiAjNTk1OTU5O1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbi1pdGVtLWxpc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDFweDtcbiAgICBjb2xvcjogIzU5NTk1OTtcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIGlvbi1saXN0IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cblxuICAubGlzdC1tZFtpbnNldF0ge1xuICAgIG1hcmdpbjogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cbiAgXG4gIC5saXN0LW1kW2luc2V0XSAuaXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMDtcbiAgfVxuXG4gIC5pdGVtLW1kIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAtLWNvbG9yOiAjMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICB9XG5cbiAgLml0ZW0tbWQyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIC0tY29sb3I6ICMwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIH1cblxuIC5pdGVtLWxlZnR7XG4gIG1hcmdpbjogNXB4IDEycHggMHB4IDA7XG59XG5cbiAgLmljb24tbGVmdCB7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGxpbmUtaGVpZ2h0OiAuNjc7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjNlbTtcbn1cblxuLml0ZW0ge1xuICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gIH1cblxuLml0ZW0tYmxvY2sge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGluaXRpYWw7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAzLjRyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAuaXRlbS1pbm5lciB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAtbXMtZmxleDogMTtcbiAgICBmbGV4OiAxO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogaW5oZXJpdDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IGluaGVyaXQ7XG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogaW5oZXJpdDtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGluaGVyaXQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGluaGVyaXQ7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGluaGVyaXQ7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogaW5oZXJpdDtcbiAgICAtbXMtZmxleC1hbGlnbjogaW5oZXJpdDtcbiAgICBhbGlnbi1pdGVtczogaW5oZXJpdDtcbiAgICAtd2Via2l0LWFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogc3RyZXRjaDtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbiAgaW9uLWxhYmVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAtbXMtZmxleDogMTtcbiAgICBmbGV4OiAxO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLmxhYmVsLW1kIHtcbiAgICBtYXJnaW46IDEzcHggOHB4IDEzcHggMDtcbiAgICBjb2xvcjogIzU5NTk1OSAhaW1wb3J0YW50O1xuICB9Il19 */");

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