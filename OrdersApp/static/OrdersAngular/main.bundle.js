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

/***/ "./src/app3/app3.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app3/app3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div style=\"margin: auto;  margin-top:50px\">\r\n    <data-table id=\"orders-grid\"\r\n        [items]=\"ordersdata\"\r\n        [itemCount]=\"ordersCount\"\r\n        (reload)=\"reloadFilms($event)\"\r\n\r\n        [limit]=\"8\"\r\n        [sortBy]=\"'id'\"\r\n        [sortAsc]=\"false\"\r\n\r\n        [selectColumn]=\"true\"\r\n        [multiSelect]=\"false\"\r\n        [substituteRows]=\"false\"\r\n        [expandableRows]=\"true\"\r\n        [translations]=\"translations\"\r\n        [indexColumnHeader]=\"'#'\"\r\n        [selectOnRowClick]=\"true\"\r\n        >\r\n        <ng-template #dataTableExpand let-item=\"item\">\r\n        <div [textContent]=\"item.Description\" style=\"padding: 5px; color: gray\"></div>\r\n        </ng-template>\r\n        <data-table-column\r\n            [property]=\"'id'\"\r\n            [header]=\"'ID'\"\r\n            [sortable]=\"true\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'PickupTime'\"\r\n            [header]=\"'Pickup Time'\"\r\n            [sortable]=\"true\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'PaymentMethod'\"\r\n            [header]=\"'Payment'\"\r\n            [sortable]=\"false\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'Branch'\"\r\n            [header]=\"'Branch'\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'TotalPrice'\"\r\n            [header]=\"'Total Price'\">\r\n        </data-table-column>\r\n        <data-table-column\r\n            [property]=\"'OrderStatus'\"\r\n            [header]=\"'Order Status'\">\r\n            <ng-template #dataTableCell let-item=\"item\">\r\n              <select class=\"form-control\" id=\"ok1\" [(ngModel)]=\"item.OrderStatus\" (change)=\"updateStatus(item.id,item.OrderStatus)\">\r\n                <option *ngFor=\"let status of orderStatus\" [ngValue]=\"status.ID\">{{status.Name}}</option>\r\n\r\n              </select>\r\n       <!-- <input type=\"number\" [(ngModel)]=\"item.year\" class=\"form-control input-sm\" style=\"width: 75px\"/> -->\r\n     </ng-template>\r\n        </data-table-column>\r\n        <data-table-column\r\n            [header]=\"'Actions'\">\r\n        <ng-template #dataTableHeader let-item=\"item\">\r\n        <i>Actions</i>\r\n      </ng-template>\r\n      <ng-template #dataTableCell let-item=\"item\">\r\n        <a [href]=\"'orders/edit?id='+item.id\" class=\"btn btn-sm btn-primary\">Edit</a>\r\n        <a [href]=\"'orders/delete?id='+item.id\" class=\"btn btn-sm btn-warning\">Delete</a>\r\n      </ng-template>\r\n          </data-table-column>\r\n    </data-table>\r\n\r\n</div>\r\n</div>\r\n<link href=\"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n"

/***/ }),

/***/ "./src/app3/app3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular5_data_table__ = __webpack_require__("./node_modules/angular5-data-table/esm2015/angular5-data-table.js");
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




let App3Component = class App3Component {
    constructor(http) {
        this.http = http;
        this.orderStatus = [{ ID: 0, Name: 'Received' }, { ID: 1, Name: 'Cooking' }, { ID: 2, Name: 'Ready' }];
        this.ordersCount = 0;
        // special params:
        this.translations = {
            indexColumn: 'Index column',
            expandColumn: 'Expand column',
            selectColumn: 'Select column',
            paginationLimit: 'Max results',
            paginationRange: 'Result range'
        };
        this.getOrders().subscribe((data) => {
            this.ordersdata = data.map(x => { return { id: x.id, PickupTime: x.PickupTime.substring(0, 10), PaymentMethod: x.PaymentMethod, Branch: x.Branch_Name, TotalPrice: x.TotalPrice, Description: 'Items: ' + x.items.reduce((a, b) => (a + (b.Product_Name + ':' + b.Quantity) + '|'), '') + 'Additional Notes:' + x.Description, OrderStatus: x.OrderStatus }; });
            this.ordersResource = new __WEBPACK_IMPORTED_MODULE_2_angular5_data_table__["c" /* DataTableResource */](this.ordersdata);
            this.ordersResource.count().then(count => this.ordersCount = count);
        });
    }
    reloadFilms(params) {
        //this.filmResource.query(params).then(films => this.films = films);
    }
    cellColor(car) {
        return 'rgb(255, 255,255)'; // + (155 + Math.floor(100 - ((car.rating - 8.7)/1.3)*100)) + ')';
    }
    ;
    // Categories:any[];
    // Products :{Category:string,Items:Product[]}[]=[];
    // ProductsIdQty:string;
    // TotalPrice:number=0;
    getOrders() {
        return this.http.get("./orders/getOrders")
            .map((res) => res.json())
            .catch((err, caught) => { });
    }
    changeStatus(id, status) {
        return this.http.get("./orders/changeStatus?id=" + id + "&status=" + status)
            .map((res) => res.json())
            .catch((err, caught) => { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(caught); });
    }
    updateStatus(id, status) {
        this.changeStatus(id, status).subscribe((data) => { console.log("Status changed"); });
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_angular5_data_table__["a" /* DataTable */]),
    __metadata("design:type", Object)
], App3Component.prototype, "ordersTable", void 0);
App3Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'view-orders',
        template: __webpack_require__("./src/app3/app3.component.html"),
        styles: [__webpack_require__("./src/app3/app3.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], App3Component);

// export class Product {
//   constructor(public ID: number,public Name: string,public Price: number,public Description:string,public Image:string){}
//   Count:number =1;
//   Selected:boolean = false;
// }


/***/ }),

/***/ "./src/app3/app3.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app3_component__ = __webpack_require__("./src/app3/app3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm2015/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular5_data_table__ = __webpack_require__("./node_modules/angular5-data-table/esm2015/angular5-data-table.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let App3Module = class App3Module {
};
App3Module = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app3_component__["a" /* App3Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular5_data_table__["b" /* DataTableModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app3_component__["a" /* App3Component */]]
    })
], App3Module);



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

/***/ "./src/main3.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app3_app3_module__ = __webpack_require__("./src/app3/app3.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app3_app3_module__["a" /* App3Module */])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main3.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map