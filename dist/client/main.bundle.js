webpackJsonp([1,4],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SeoService = (function () {
    function SeoService(http, router, title, document) {
        var _this = this;
        this.title = title;
        this.document = document;
        this.seoSource = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.seo = this.seoSource.asObservable();
        router.events.subscribe(function () {
            http.get('/api/seo').subscribe(function (seo) {
                var newSeo = seo.json();
                _this.seoSource.next(newSeo);
                _this.createUpdateMeta('name', 'author', newSeo.author);
                _this.createUpdateMeta('name', 'description', newSeo.description);
                _this.createUpdateMeta('name', 'google-site-verification', newSeo.googleSiteVerification);
                _this.createUpdateMeta('name', 'keywords', newSeo.keywords);
                _this.createUpdateMeta('name', 'msvalidate.01', newSeo.msValidate);
                _this.createUpdateMeta('name', 'twitter:description', newSeo.description);
                _this.createUpdateMeta('name', 'twitter:image', newSeo.image);
                _this.createUpdateMeta('name', 'twitter:title', newSeo.title);
                _this.createUpdateMeta('name', 'twitter:url', newSeo.url);
                _this.createUpdateMeta('property', 'fb:app_id', newSeo.fbAppId);
                _this.createUpdateMeta('property', 'og:description', newSeo.description);
                _this.createUpdateMeta('property', 'og:image', newSeo.image);
                _this.createUpdateMeta('property', 'og:site_name', newSeo.siteName);
                _this.createUpdateMeta('property', 'og:title', newSeo.title);
                _this.createUpdateMeta('property', 'og:type', newSeo.type);
                _this.createUpdateMeta('property', 'og:url', newSeo.url);
                _this.updateTitle(newSeo.title);
            });
        });
    }
    SeoService.prototype.createUpdateMeta = function (attribute, attributeValue, contentValue) {
        var htmlElement = this.document.querySelector('meta[' + attribute + '=\'' + attributeValue + '\']');
        if (!htmlElement) {
            htmlElement = this.document.createElement('meta');
            htmlElement.setAttribute(attribute, attributeValue);
            htmlElement.setAttribute('content', contentValue);
            this.document.head.appendChild(htmlElement);
        }
        else {
            htmlElement.setAttribute('content', contentValue);
        }
    };
    SeoService.prototype.updateTitle = function (title) {
        this.title.setTitle(title);
        var htmlElement = this.document.querySelector('meta[title]');
        if (!htmlElement) {
            htmlElement = this.document.createElement('meta');
            htmlElement.setAttribute('title', title);
        }
        else {
            htmlElement.setAttribute('title', title);
        }
    };
    SeoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
        __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */]) === 'function' && _c) || Object, Object])
    ], SeoService);
    return SeoService;
    var _a, _b, _c;
}());
//# sourceMappingURL=seo.service.js.map

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 332;


/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(455);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__seo_shared_seo_service__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(seoService) {
        this.seoService = seoService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.seoService.seo.subscribe(function (seo) {
            _this.seo = seo;
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(511),
            styles: [__webpack_require__(509)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__seo_shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__seo_shared_seo_service__["a" /* SeoService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_one_page_one_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_two_page_two_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_three_page_three_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__seo_shared_seo_service__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var routes = [
    { path: 'page-one', component: __WEBPACK_IMPORTED_MODULE_6__page_one_page_one_component__["a" /* PageOneComponent */] },
    { path: 'page-two', component: __WEBPACK_IMPORTED_MODULE_7__page_two_page_two_component__["a" /* PageTwoComponent */] },
    { path: 'page-three', component: __WEBPACK_IMPORTED_MODULE_8__page_three_page_three_component__["a" /* PageThreeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__page_one_page_one_component__["a" /* PageOneComponent */],
                __WEBPACK_IMPORTED_MODULE_7__page_two_page_two_component__["a" /* PageTwoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__page_three_page_three_component__["a" /* PageThreeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__seo_shared_seo_service__["a" /* SeoService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageOneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageOneComponent = (function () {
    function PageOneComponent() {
    }
    PageOneComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-page-one',
            template: ''
        }), 
        __metadata('design:paramtypes', [])
    ], PageOneComponent);
    return PageOneComponent;
}());
//# sourceMappingURL=page-one.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageThreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageThreeComponent = (function () {
    function PageThreeComponent() {
    }
    PageThreeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-page-three',
            template: ''
        }), 
        __metadata('design:paramtypes', [])
    ], PageThreeComponent);
    return PageThreeComponent;
}());
//# sourceMappingURL=page-three.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTwoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageTwoComponent = (function () {
    function PageTwoComponent() {
    }
    PageTwoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-page-two',
            template: ''
        }), 
        __metadata('design:paramtypes', [])
    ], PageTwoComponent);
    return PageTwoComponent;
}());
//# sourceMappingURL=page-two.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(205)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 511:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron mt-3\">\n  <h1 class=\"display-4\">SPA SEO Example</h1>\n  <div class=\"lead\">\n    A pattern for adding SEO features to SPA based applications like Angular, React, Vue, etc. Search engines like Google and Bing and social media sites like Facebook, Twitter,\n    and LinkedIn typically expect server side rendering to read meta tags. You also need to update the meta tags when routing\n    changes on the client side since some social sharing components rely on them.\n  </div>\n  <hr />\n  <p class=\"lead float-right\">\n    <a class=\"btn btn-success\" href=\"//github.com/jmlivingston/angular-cli-seo\" target=\"new\">GitHub</a>\n    <a class=\"btn btn-success\" href=\"//johnlivingston.io\" target=\"new\">johnlivingston.io</a>\n  </p>\n</div>\n<h3>Technologies</h3>\n<ul>\n  <li>Angular (Same approach for WebPack enabled frameworks like React and Vue.)</li>\n  <li>Node</li>\n  <li>ExpressJS</li>\n  <li>Handlebars</li>\n  <li>WebPack</li>\n</ul>\n<hr />\n<h4>Demo</h4>\n<p>Open browser dev tools, refresh or click a link to see changes in &lt;head&gt; &lt;meta&gt; tags</p>\n<ul>\n  <li>\n    <a routerLink=\"/\">/ - default</a>\n  </li>\n  <li>\n    <a routerLink=\"/page-one\">/page1</a>\n  </li>\n  <li>\n    <a routerLink=\"/page-two\">/page2</a>\n  </li>\n  <li>\n    <a routerLink=\"/page-three\">/page3 - no SEO data, reverts to default</a>\n  </li>\n</ul>\n<hr />\n<h4>Client</h4>\n<p>Changes during client side routing change. Calls api/seo API</p>\n<pre><code>{{seo?.title}}</code></pre>\n<router-outlet></router-outlet>\n<hr />\n<h4>Server</h4>\n<p>Populates on intial load or refresh</p>\n<!-- See index.html to see data-binding in Handlebars -->"

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(333);


/***/ })

},[529]);
//# sourceMappingURL=main.bundle.js.map