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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-9\">\r\n           <div class=\"card card-outline mb-3\">\r\n\r\n                    <div class=\"card-header card-primary\" style=\"font-size:15px;font-weight:bolder\">Available Products</div>\r\n\r\n                    <!--div class=\"input-group input-group-lg inner-addon left-addon\" style=\"width:100%\"><input type=\"search\" class=\"form-control input-lg\" (keyup)=\"filter()\" style=\"border-radius:0px\" name=\"\" placeholder=\"search\" [(ngModel)]=\"SearchTerm\" /><i style=\"z-index:55;\" class=\"fa fa-search searchIcon fa-lg\"></i><span *ngIf=\"SearchTerm.length>0\" (click)=\"clearSearch();\" class=\"fa fa-window-close fa-2x searchClear\"> </span></div-->\r\n                      <div *ngFor=\"let product of Products; let i = index\">\r\n                          <div class=\"card-block card-secondary\" style=\"padding:0;padding-left:10px;font-weight:strong;font-size:larger;\">{{product.Category}}</div>\r\n                    <div class=\"card-block\" style=\"padding:0\">\r\n                        <ul  [dragula]='\"fourth-bag\"' class=\"list-group list-group-flush\" [dragulaModel]='product.Items'>\r\n                            <li *ngFor=\"let item of product.Items; let j = index\" style=\"margin:5px;padding:14px;\" class=\"list-group-item item\">\r\n<button class=\"btn pull-right\" style=\"background-color:#1ab394;color:white;\" (click)=\"add(item,i,j)\">ADD</button>\r\n                               <strong style=\"font-size:larger\">{{item.Name}} _ {{item.Price}}$</strong>\r\n                            </li>\r\n                            </ul>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n       <div class=\"affix\">\r\n          <div class=\"card card-outline mb-4\">\r\n                    <div class=\"card-header card-primary\" style=\"font-size:15px;font-weight:larger\">Your Order</div>\r\n<input type=\"text\" class=\"form-control input-lg\" placeholder=\"Pickup Time\"/>\r\n                     <div class=\"card-block\" style=\"padding:0\">\r\n                        <ul [dragula]='\"fourth-bag\"' class=\"list-group list-group-flush\" [dragulaModel]='OrderItems' style=\"height:400px;overflow-y:auto;\">\r\n                            <li  style=\"margin:5px;\" *ngFor=\"let item of OrderItems\" class=\"list-group-item item\">\r\n<div class=\"row\">\r\n                              <div class=\"input-group col col-4\">\r\n                                <span class=\"input-group-btn\">\r\n                                  <button class=\"btn btn-secondary\" type=\"button\" (click)=\"item.Count=+item.Count-1;updatePrice();\"><i class=\"fa fa-minus\"></i></button>\r\n                                </span>\r\n                                <input type=\"text\" class=\"form-control\" style=\"padding:3px 4px\" (change)=\"updatePrice();\" [(ngModel)]=\"item.Count\">\r\n                                <span class=\"input-group-btn\">\r\n                                  <button class=\"btn btn-secondary\" type=\"button\" (click)=\"item.Count=+item.Count+1;updatePrice();\"><i class=\" fa fa-plus\"></i></button>\r\n                                </span>\r\n                              </div>\r\n       <strong>{{item.Name}}</strong><strong class=\"pull-right\">{{item.Price}}$</strong>\r\n     </div>\r\n                            </li>\r\n                              </ul>\r\n                              <strong style=\"font-size:larger\">Total Price:{{TotalPrice}}</strong>\r\n                    </div>\r\n                    <button class=\"btn btn-primary\">Confirm Order</button>\r\n                </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm2015/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { HttpService } from './sendOrder.service';

let AppComponent = class AppComponent {
    constructor(dragulaService, http) {
        this.dragulaService = dragulaService;
        this.http = http;
        this.OrderItems = [];
        this.Products = [];
        this.TotalPrice = 0;
        this.getProducts().subscribe((data) => {
            this.Categories = [...new Set(data.map(item => item.fields.Category))];
            this.Categories.forEach((cat) => {
                this.Products.push({ Category: cat, Items: data.filter(x => x.fields.Category == cat).map(item => new Product(item.pk, item.fields.Name, item.fields.Price, item.fields.Description)) });
            });
            //data.filter(p => p.fields.Category==cat).map(x=>new Product(x.pk,x.fields.Name,x.fields.Price,x.fields.Description)))});
        });
        dragulaService.setOptions('fourth-bag', {
            revertOnSpill: true
        });
        dragulaService.dropModel.subscribe((value) => {
            this.updatePrice();
        });
    }
    getProducts() {
        return this.http.get("./getAllProducts")
            .map((res) => res.json())
            .catch((err, caught) => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(caught); });
    }
    add(item, CategoryIndex, ItemIndex) {
        this.Products[CategoryIndex].Items.splice(ItemIndex, 1);
        item.Count = 1;
        this.OrderItems.push(item);
        this.TotalPrice = this.TotalPrice + item.Price;
    }
    updatePrice() {
        this.TotalPrice = this.OrderItems.reduce((a, b) => (a + (b.Count * b.Price)), 0);
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-order',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__["DragulaService"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AppComponent);

class Product {
    constructor(ID, Name, Price, Description) {
        this.ID = ID;
        this.Name = Name;
        this.Price = Price;
        this.Description = Description;
        this.Count = 1;
    }
}
/* unused harmony export Product */



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);



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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map