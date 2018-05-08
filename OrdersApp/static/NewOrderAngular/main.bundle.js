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

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-7\">\r\n           <div *ngIf=\"view\" class=\"card card-outline mb-3\">\r\n\r\n                    <div class=\"card-header card-primary\" style=\"font-size:15px;font-weight:bolder\">Available Products</div>\r\n\r\n                    <!--div class=\"input-group input-group-lg inner-addon left-addon\" style=\"width:100%\"><input type=\"search\" class=\"form-control input-lg\" (keyup)=\"filter()\" style=\"border-radius:0px\" name=\"\" placeholder=\"search\" [(ngModel)]=\"SearchTerm\" /><i style=\"z-index:55;\" class=\"fa fa-search searchIcon fa-lg\"></i><span *ngIf=\"SearchTerm.length>0\" (click)=\"clearSearch();\" class=\"fa fa-window-close fa-2x searchClear\"> </span></div-->\r\n                      <div *ngFor=\"let product of Products; let i = index\">\r\n                          <div class=\"card-block card-secondary\" style=\"padding:0;padding-left:10px;font-weight:strong;font-size:larger;\">{{product.Category}}</div>\r\n                    <div class=\"card-block\" style=\"padding:0\">\r\n                        <ul  [dragula]='\"fourth-bag\"' class=\"list-group list-group-flush\" [dragulaModel]='product.Items'>\r\n                            <li *ngFor=\"let item of product.Items; let j = index\" style=\"margin:5px;padding:14px;\" class=\"list-group-item item\">\r\n<button class=\"btn pull-right\" style=\"background-color:#1ab394;color:white;\" (click)=\"add(item,i,j)\">ADD</button>\r\n                               <strong style=\"font-size:larger\">{{ item.Name }} <span class=\"text-muted\">($ {{ item.Price}} )</span></strong>\r\n                            </li>\r\n                            </ul>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n           <div *ngIf=\"!view\" class=\"card card-outline mb-3\">\r\n\r\n                    <div class=\"card-header card-primary\" style=\"font-size:15px;font-weight:bolder\">Order Items</div>\r\n\r\n                    <!--div class=\"input-group input-group-lg inner-addon left-addon\" style=\"width:100%\"><input type=\"search\" class=\"form-control input-lg\" (keyup)=\"filter()\" style=\"border-radius:0px\" name=\"\" placeholder=\"search\" [(ngModel)]=\"SearchTerm\" /><i style=\"z-index:55;\" class=\"fa fa-search searchIcon fa-lg\"></i><span *ngIf=\"SearchTerm.length>0\" (click)=\"clearSearch();\" class=\"fa fa-window-close fa-2x searchClear\"> </span></div-->\r\n\r\n\r\n                     <ul  class=\"list-group list-group-flush\" style=\"height:130px;overflow-y:auto;\">\r\n                         <li  style=\"margin:5px;\" *ngFor=\"let item of OrderItems\" class=\"list-group-item item\">\r\n <div class=\"row\">\r\n <div class=\"col col-8\">{{ item.Name }} <span class=\"text-muted\">($ {{ item.Price}} )</span>\r\n </div>                      <div class=\"input-group col col-3\">\r\n                             <span class=\"input-group-btn\">\r\n                               <button *ngIf=\"item.Count>1\" class=\"btn btn-secondary\" type=\"button\" (click)=\"item.Count=+item.Count-1;updatePrice();\"><i class=\"fa fa-minus\"></i></button>\r\n                               <button *ngIf=\"item.Count==1\" class=\"btn btn-secondary\" type=\"button\" (click)=\"removeItem(item);\"><i class=\"fa fa-trash\"></i></button>\r\n                             </span>\r\n                             <input type=\"text\" class=\"form-control\" style=\"padding:3px 4px\" (change)=\"updatePrice();\" [(ngModel)]=\"item.Count\" (change)=\"item.Count=(item.Count>item.Quantity)?item.Quantity:item.Count;updatePrice();\">\r\n                             <span class=\"input-group-btn\">\r\n                               <button class=\"btn btn-secondary\" [title]=\"((item.Unlimited)||item.Count<item.Quantity)?'add':'no more items to buy'\" [disabled]=\"!((item.Unlimited)||item.Count<item.Quantity)\" type=\"button\" (click)=\"item.Count=+item.Count+1;updatePrice();\"><i class=\" fa fa-plus\"></i></button>\r\n                             </span>\r\n                           </div>\r\n\r\n  </div>\r\n                         </li>\r\n                       </ul>\r\n                       <button (click)=\"view=true\" class=\"btn btn-primary\">Add more Items</button>\r\n              </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"col-lg-5\" >\r\n       <!--div class=\"affix\"-->\r\n          <div class=\"card card-outline mb-4\"style=\"padding:10px;\">\r\n                    <div class=\"card-header card-primary\" style=\"font-size:15px;font-weight:larger\">Your Order</div>\r\n<div class=\"form-group\">\r\n  <p for=\"exampleFormControlSelect1\">Branch</p>\r\n  <select class=\"form-control\" id=\"exampleFormControlSelect1\" [(ngModel)]=\"SelectedBranch\">\r\n    <option *ngFor=\"let branch of Branches\" [ngValue]=\"branch.ID\">{{branch.Name}}</option>\r\n\r\n  </select>\r\n</div>\r\n<p>pickup date and time</p>\r\n                    <datetime [datepicker]=\"datepickerOpts\" [(ngModel)]=\"date\"></datetime>\r\n                    <p>Payment Method</p>\r\n                    <!-- <div class=\"custom-control custom-checkbox\">\r\n  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n  <label class=\"custom-control-label\" for=\"customCheck1\">On pickup</label>\r\n</div>\r\n<div class=\"custom-control custom-checkbox\">\r\n  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck2\">\r\n  <label class=\"custom-control-label\" for=\"customCheck2\">Credit card</label>\r\n</div>\r\n<div class=\"custom-control custom-checkbox\">\r\n<input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck3\">\r\n<label class=\"custom-control-label\" for=\"customCheck3\">From Walet</label>\r\n</div> -->\r\n<div class=\"radio radio-danger\">\r\n   <input type=\"radio\" name=\"radio1\" id=\"radio1\" value=\"Wallet\" [(ngModel)]=\"PaymentMethod\" checked>\r\n    <label for=\"radio1\" style=\"font-size:smaller\">\r\n        From Wallet\r\n    </label>\r\n</div>\r\n<div class=\"radio radio-danger\">\r\n                                <input type=\"radio\" name=\"radio2\" id=\"radio2\" value=\"CreditCard\" [(ngModel)]=\"PaymentMethod\">\r\n                                <label for=\"radio2\" style=\"font-size:smaller\">\r\n                                    By Credit Card\r\n                                </label>\r\n</div>\r\n<div class=\"radio radio-danger\">\r\n                                <input type=\"radio\" name=\"radio3\" id=\"radio3\" value=\"OnPickup\" [(ngModel)]=\"PaymentMethod\">\r\n                                <label for=\"radio3\" style=\"font-size:smaller\">\r\n                                  On Pickup\r\n                                </label>\r\n</div>\r\n                     <div class=\"card-block\" style=\"padding:0\">\r\n                       <div *ngIf=\"view\">\r\n                       <p>Order Items</p>\r\n                        <ul [dragula]='\"fourth-bag\"' class=\"list-group list-group-flush\" [dragulaModel]='OrderItems' style=\"height:130px;overflow-y:auto;\">\r\n                            <li  style=\"margin:5px;\" *ngFor=\"let item of OrderItems\" class=\"list-group-item item\">\r\n<div class=\"row\">\r\n  <div class=\"col col-8\">{{ item.Name }} <span class=\"text-muted\">($ {{ item.Price}} )</span>\r\n  </div>                      <div class=\"input-group col col-3\">\r\n                                <span class=\"input-group-btn\">\r\n                                  <button *ngIf=\"item.Count>1\" class=\"btn btn-secondary\" type=\"button\" (click)=\"item.Count=+item.Count-1;updatePrice();\"><i class=\"fa fa-minus\"></i></button>\r\n                                  <button *ngIf=\"item.Count==1\" class=\"btn btn-secondary\" type=\"button\" (click)=\"removeItem(item);\"><i class=\"fa fa-trash\"></i></button>\r\n                                </span>\r\n                                <input type=\"text\" class=\"form-control\" style=\"padding:3px 4px\" (change)=\"updatePrice();\" [(ngModel)]=\"item.Count\" (change)=\"item.Count=(item.Count>item.Quantity)?item.Quantity:item.Count;updatePrice();\">\r\n                                <span class=\"input-group-btn\">\r\n                                  <button class=\"btn btn-secondary\" [title]=\"((item.Unlimited)||item.Count<item.Quantity)?'add':'no more items to buy'\" [disabled]=\"!((item.Unlimited)||item.Count<item.Quantity)\" type=\"button\" (click)=\"item.Count=+item.Count+1;updatePrice();\"><i class=\" fa fa-plus\"></i></button>\r\n                                </span>\r\n                              </div>\r\n\r\n     </div>\r\n                            </li>\r\n                          </ul></div>\r\n                              <input class=\"form-control\" id=\"desc\" name=\"desc\" placeholder=\"Additional order notes\" [(ngModel)]=\"Description\" type=\"text\" value=\"\" /><br/>\r\n                              <div class=\"row\">\r\n                              <strong class=\"col col-9\">Total Price:{{TotalPrice}}</strong>\r\n                              <button (click)=\"sendOrder()\" class=\"btn btn-primary col col-2 col-\">Confirm Order</button>\r\n                            </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <!--/div-->\r\n    </div>\r\n\r\n</div>\r\n<link href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n"

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




let AppComponent = class AppComponent {
    constructor(dragulaService, http, elm) {
        this.dragulaService = dragulaService;
        this.http = http;
        this.view = true;
        this.id = -1;
        this.Description = "";
        this.date = null;
        this.datepickerOpts = {
            startDate: new Date(2016, 5, 10),
            autoclose: true,
            todayBtn: 'linked',
            todayHighlight: true,
            assumeNearbyYear: true,
            format: 'D, d MM yyyy'
        };
        this.PaymentMethod = 'Wallet';
        this.OrderItems = [];
        this.Products = [];
        this.Branches = [];
        this.TotalPrice = 0;
        if (elm.nativeElement.getAttribute('id')) {
            this.id = elm.nativeElement.getAttribute('id');
            this.getOrder().subscribe((data) => {
                this.date = new Date(data[0].PickupTime);
                this.PaymentMethod = data[0].PaymentMethod;
                this.SelectedBranch = data[0].Branch;
                this.TotalPrice = data[0].TotalPrice;
                this.Description = data[0].Description;
                this.selected = data[0].items.reduce((a, b) => (a + (b.Product + ':' + b.Quantity + ',')), '');
            });
        }
        else {
            this.selected = elm.nativeElement.getAttribute('selected');
        }
        this.getProducts().subscribe((data) => {
            this.Categories = [...new Set(data.map(item => item.fields.Category))];
            this.Categories.forEach((cat) => {
                this.Products.push({ Category: cat, Items: data.filter(x => x.fields.Category == cat).map(item => new Product(item.pk, item.fields.Name, item.fields.Price, item.fields.Description, cat, item.fields.Stock, item.fields.unlimited)) });
            });
            if (this.selected) {
                this.view = false;
                let selectedItems = this.selected.split(',');
                selectedItems.forEach(s => {
                    if (s.split(':').length == 2) {
                        let ID = parseInt(s.split(':')[0]);
                        let count = parseInt(s.split(':')[1]);
                        var i = 0;
                        this.Products.forEach(product => {
                            if (this.Products[i].Items.filter(x => x.ID == ID).length > 0) {
                                let itemIndex = this.Products[i].Items.indexOf(this.Products[i].Items.filter(x => x.ID == ID)[0]);
                                this.add(this.Products[i].Items.filter(x => x.ID == ID)[0], i, itemIndex, count);
                            }
                            i++;
                        });
                    }
                });
            }
            //data.filter(p => p.fields.Category==cat).map(x=>new Product(x.pk,x.fields.Name,x.fields.Price,x.fields.Description)))});
        });
        this.getBranches().subscribe((data) => {
            this.SelectedBranch = data[0].pk;
            this.Branches = data.map(branch => { return { ID: branch.pk, Name: branch.fields.Name }; });
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
    getOrder() {
        return this.http.get("./getOrder?id=" + this.id)
            .map((res) => res.json())
            .catch((err, caught) => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(caught); });
    }
    getBranches() {
        return this.http.get("./getBranches")
            .map((res) => res.json())
            .catch((err, caught) => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(caught); });
    }
    add(item, CategoryIndex, ItemIndex, count = 1) {
        this.Products[CategoryIndex].Items.splice(ItemIndex, 1);
        item.Count = count < item.Quantity ? count : item.Quantity;
        this.OrderItems.push(item);
        this.updatePrice();
    }
    removeItem(item) {
        let ItemIndex = this.OrderItems.indexOf(item);
        this.Products.filter(p => p.Category == item.Category)[0].Items.push(item);
        // this.Products[CategoryIndex].Items.push(item);
        this.OrderItems.splice(ItemIndex, 1);
        this.updatePrice();
    }
    updatePrice() {
        this.TotalPrice = this.OrderItems.reduce((a, b) => (a + (b.Count * b.Price)), 0);
    }
    sendOrder() {
        this.sendOrderMethod().subscribe((data) => window.location.replace("../ordersttt"));
    }
    sendOrderMethod() {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        let options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        let order = { Branch: this.SelectedBranch, PaymentMethod: this.PaymentMethod, PickupTime: this.date, OrderItems: this.OrderItems, Description: this.Description, Price: this.TotalPrice };
        console.log(order);
        let body = JSON.stringify(order);
        return this.http.post('./sendOrder?id=' + this.id, body, options).map((res) => res.json());
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-order',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng2_dragula_ng2_dragula__["DragulaService"], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], AppComponent);

class Product {
    constructor(ID, Name, Price, Description, Category, Quantity, Unlimited) {
        this.ID = ID;
        this.Name = Name;
        this.Price = Price;
        this.Description = Description;
        this.Category = Category;
        this.Quantity = Quantity;
        this.Unlimited = Unlimited;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bootstrap_datepicker_dist_js_bootstrap_datepicker_min_js__ = __webpack_require__("./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_bootstrap_datepicker_dist_js_bootstrap_datepicker_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_bootstrap_datepicker_dist_js_bootstrap_datepicker_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bootstrap_timepicker_js_bootstrap_timepicker_js__ = __webpack_require__("./node_modules/bootstrap-timepicker/js/bootstrap-timepicker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_bootstrap_timepicker_js_bootstrap_timepicker_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_bootstrap_timepicker_js_bootstrap_timepicker_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_datetime_ng2_datetime_js__ = __webpack_require__("./node_modules/ng2-datetime/ng2-datetime.js");
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
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__["DragulaModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_datetime_ng2_datetime_js__["a" /* NKDatetimeModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */]],
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