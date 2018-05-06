webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app2/app2.component.css":
/***/ (function(module, exports) {

module.exports = "#order_summary {\r\n  position: fixed;\r\n  bottom: 45px;\r\n  right: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app2/app2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngFor=\"let product of Products; let i = index\">\r\n  <h1 class=\"mt-4\">{{product.Category}}</h1>\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let item of product.Items; let j = index\" class=\"col-3 pb-4\" style=\"padding:3px;\" ><!--style=\"width: 18rem;\"-->\r\n\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top\" [src]=\"'/OrdersApp/media/'+item.Image\">\r\n                <div class=\"card-block\">\r\n                    <p class=\"card-title\">\r\n                        {{ item.Name }} <span class=\"text-muted\">($ {{ item.Price}} )</span>\r\n                    </p>\r\n                    <div class=\"card-text\">\r\n\r\n                      <div class=\"checkbox checkbox-lg checkbox-success pull-right\">\r\n                             <input [(ngModel)]=\"item.Selected\" (change)=\"UpdateProductsList()\" [id]=\"item.ID\" type=\"checkbox\">\r\n          <label [for]=\"item.ID\">\r\n          </label>\r\n                           </div>\r\n            </div>\r\n                </div>\r\n            </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"order_summary\" *ngIf=\"TotalPrice!=0\" class=\"card card-secondary\">\r\n  <p>Total Price: ${{TotalPrice}}</p>\r\n  <a class=\"btn btn-primary\" [href]=\"'./orders/new?selected='+ProductsIdQty\">\r\n  Confirm Order\r\n</a>\r\n</div>\r\n<link href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n"

/***/ }),

/***/ "./src/app2/app2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm2015/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let App2Component = class App2Component {
    constructor(http) {
        this.http = http;
        this.name = "mickel";
        this.Products = [];
        this.TotalPrice = 0;
        this.getProducts().subscribe((data) => {
            console.log(data);
            this.Categories = [...new Set(data.map(item => item.fields.Category))];
            this.Categories.forEach((cat) => {
                this.Products.push({ Category: cat, Items: data.filter(x => x.fields.Category == cat).map(item => new Product(item.pk, item.fields.Name, item.fields.Price, item.fields.Description, item.fields.Image)) });
            });
        });
    }
    getProducts() {
        return this.http.get("./orders/getAllProducts")
            .map((res) => res.json())
            .catch((err, caught) => { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(caught); });
    }
    UpdateProductsList() {
        this.TotalPrice = 0;
        this.ProductsIdQty = '';
        this.Products.forEach((set) => {
            this.TotalPrice = this.TotalPrice + set.Items.reduce((a, b) => (a + (b.Selected ? (b.Count * b.Price) : 0)), 0);
            this.ProductsIdQty = this.ProductsIdQty + set.Items.reduce((a, b) => (a + (b.Selected ? (b.ID + ':' + b.Count + ',') : '')), '');
        });
    }
};
App2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'view-menu',
        template: __webpack_require__("./src/app2/app2.component.html"),
        styles: [__webpack_require__("./src/app2/app2.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], App2Component);

class Product {
    constructor(ID, Name, Price, Description, Image) {
        this.ID = ID;
        this.Name = Name;
        this.Price = Price;
        this.Description = Description;
        this.Image = Image;
        this.Count = 1;
        this.Selected = false;
    }
}
/* unused harmony export Product */



/***/ }),

/***/ "./src/app2/app2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app2_component__ = __webpack_require__("./src/app2/app2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let App2Module = class App2Module {
};
App2Module = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app2_component__["a" /* App2Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app2_component__["a" /* App2Component */]]
    })
], App2Module);



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "./src/main2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app2_app2_module__ = __webpack_require__("./src/app2/app2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app2_app2_module__["a" /* App2Module */])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main2.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map