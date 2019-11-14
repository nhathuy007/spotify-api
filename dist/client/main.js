(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_artist_page_artist_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/artist-page/artist-page.component */ "./src/app/pages/artist-page/artist-page.component.ts");
/* harmony import */ var _pages_track_page_track_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/track-page/track-page.component */ "./src/app/pages/track-page/track-page.component.ts");
/* harmony import */ var _pages_album_page_album_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/album-page/album-page.component */ "./src/app/pages/album-page/album-page.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'artist/:id', component: _pages_artist_page_artist_page_component__WEBPACK_IMPORTED_MODULE_2__["ArtistPageComponent"] },
    { path: 'track/:id', component: _pages_track_page_track_page_component__WEBPACK_IMPORTED_MODULE_3__["TrackPageComponent"] },
    { path: 'album/:id', component: _pages_album_page_album_page_component__WEBPACK_IMPORTED_MODULE_4__["AlbumPageComponent"] },
    { path: '', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n\tmargin-bottom: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxvQkFBb0I7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg sticky-top navbar-light bg-light\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item navbar-brand\">\r\n        <a class=\"navbar-brand\" href=\"/\">\r\n          Browsing spotify\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav navbar-right mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"btn btn-dark\" role=\"button\" href=\"https://spotify-webapi.herokuapp.com/login\">Log in</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n<main class=\"container-fluid\">\r\n\t<router-outlet></router-outlet>\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_carousel_card_carousel_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/carousel-card/carousel-card.component */ "./src/app/components/carousel-card/carousel-card.component.ts");
/* harmony import */ var _pages_artist_page_artist_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/artist-page/artist-page.component */ "./src/app/pages/artist-page/artist-page.component.ts");
/* harmony import */ var _pages_album_page_album_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/album-page/album-page.component */ "./src/app/pages/album-page/album-page.component.ts");
/* harmony import */ var _pages_track_page_track_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/track-page/track-page.component */ "./src/app/pages/track-page/track-page.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_track_list_track_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/track-list/track-list.component */ "./src/app/components/track-list/track-list.component.ts");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _components_thermometer_thermometer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/thermometer/thermometer.component */ "./src/app/components/thermometer/thermometer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _components_carousel_card_carousel_card_component__WEBPACK_IMPORTED_MODULE_6__["CarouselCardComponent"],
                _pages_artist_page_artist_page_component__WEBPACK_IMPORTED_MODULE_7__["ArtistPageComponent"],
                _pages_album_page_album_page_component__WEBPACK_IMPORTED_MODULE_8__["AlbumPageComponent"],
                _pages_track_page_track_page_component__WEBPACK_IMPORTED_MODULE_9__["TrackPageComponent"],
                _components_track_list_track_list_component__WEBPACK_IMPORTED_MODULE_11__["TrackListComponent"],
                _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__["CarouselComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_14__["HomePageComponent"],
                _components_thermometer_thermometer_component__WEBPACK_IMPORTED_MODULE_15__["ThermometerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n\tmax-width: 400px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuXHRtYXgtd2lkdGg6IDQwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--TODO: Define click callback to load about me information-->\r\n<button class=\"btn btn-light\" (click)=\"onProfile()\">Load info about me</button>\r\n<!--TODO: replace ??? to bind to name-->\r\n<h3>Logged in user: {{name}}</h3>\r\n<!--TODO: bind img src's to profile_pic-->\r\n<img [src]=\"profile_pic\">\r\n<p>\r\n\t<!--TODO: bind link's href to profile_link-->\r\n\t<a [href]=\"profile_link\" class=\"btn btn-light\" target=\"_blank\">Open profile on Spotify</a>\t\r\n</p>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/spotify.service */ "./src/app/services/spotify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    //TODO: inject the Spotify service
    function AboutComponent(spotifyService) {
        this.spotifyService = spotifyService;
        this.name = null;
        this.profile_pic = "../../../assets/unknown.jpg";
        this.profile_link = null;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
    In that function, update the name, profile_pic, and profile_link fields */
    AboutComponent.prototype.onProfile = function () {
        var _this = this;
        this.spotifyService.aboutMe().then(function (profile) {
            _this.name = profile.name;
            _this.profile_pic = profile.imageURL;
            _this.profile_link = profile.spotifyProfile;
        });
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_1__["SpotifyService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/carousel-card/carousel-card.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/carousel-card/carousel-card.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2Fyb3VzZWwtY2FyZC9jYXJvdXNlbC1jYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/carousel-card/carousel-card.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/carousel-card/carousel-card.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container [ngSwitch]=\"resource.category\">\r\n<!--TODO: bind href to the appropriate local URL for the album/artist/song.-->\r\n<a *ngSwitchCase=\"'artist'\" [routerLink]=\"['/artist', resource.id]\">\t\r\n<!--TODO bind src with the album/artist/song image URL-->\r\n<img class=\"d-block w-100\" src={{resource.imageURL}}>\r\n<div class=\"carousel-caption d-none d-md-block\">\r\n\t<!--TODO: populate h5 with the album/artist/song name-->\r\n\t<h5>{{resource.name}}</h5>\r\n</div>\r\n</a>\r\n<a *ngSwitchCase=\"'album'\" [routerLink]=\"['/album', resource.id]\">\t\r\n\t<!--TODO bind src with the album/artist/song image URL-->\r\n\t<img class=\"d-block w-100\" src={{resource.imageURL}}>\r\n\t<div class=\"carousel-caption d-none d-md-block\">\r\n\t\t<!--TODO: populate h5 with the album/artist/song name-->\r\n\t\t<h5>{{resource.name}}</h5>\r\n\t</div>\r\n\t</a>\r\n</ng-container>"

/***/ }),

/***/ "./src/app/components/carousel-card/carousel-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/carousel-card/carousel-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: CarouselCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselCardComponent", function() { return CarouselCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_resource_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/resource-data */ "./src/app/data/resource-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselCardComponent = /** @class */ (function () {
    function CarouselCardComponent() {
    }
    CarouselCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _data_resource_data__WEBPACK_IMPORTED_MODULE_1__["ResourceData"])
    ], CarouselCardComponent.prototype, "resource", void 0);
    CarouselCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel-card',
            template: __webpack_require__(/*! ./carousel-card.component.html */ "./src/app/components/carousel-card/carousel-card.component.html"),
            styles: [__webpack_require__(/*! ./carousel-card.component.css */ "./src/app/components/carousel-card/carousel-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselCardComponent);
    return CarouselCardComponent;
}());



/***/ }),

/***/ "./src/app/components/carousel/carousel.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel {\r\n\twidth: 400px;\r\n}\r\n\r\napp-artist {\r\n\tvertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiOztBQUVEO0NBQ0MsdUJBQXVCO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsIHtcclxuXHR3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbmFwcC1hcnRpc3Qge1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"resources\" id=\"{{carouselId}}\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\" data-pause=\"false\" data-interval=\"3000\">\r\n  <div class=\"carousel-inner\">\r\n    <!--TODO: edit *ngFor to populate carousel with carousel-card components.-->\r\n    <!--carousel-card can bind a single resource as an Input.-->\r\n    <!--\"let first=first\" sets the \"first\" variable to be true for the first card in the carousel. The [ngClass] assigns the active property to it-->\r\n    <!--https://stackoverflow.com/questions/44288434/angular-2-ngfor-first-last-index-loop-->\r\n    <app-carousel-card *ngFor=\"let resource of resources; let first=first\" class=\"carousel-item\" [ngClass]=\"{'active': first}\" [resource]=\"resource\"></app-carousel-card>\r\n  </div>\r\n  <a class=\"carousel-control-prev\" href=\"#{{carouselId}}\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#{{carouselId}}\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CarouselComponent.prototype, "carouselId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CarouselComponent.prototype, "resources", void 0);
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/components/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/components/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n\tmargin: 10px;\r\n}\r\n\r\nselect {\r\n\tmargin: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2I7O0FBRUQ7Q0FDQyxhQUFhO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuXHRtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcblx0bWFyZ2luOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Search Spotify</h1>\r\n<!--TODO: bind input's model to searchString-->\r\n<input [(ngModel)]=\"searchString\" >\r\n<!--TODO: bind select's model to searchCategory-->\r\n<select id=\"cateList\">\r\n\t<!--TODO: loop over searchCategories to create dropdown options-->\r\n\t<!--populate body and text value https://www.w3schools.com/tags/att_option_selected.asp-->\r\n</select>\r\n<!--TODO: Call search function when the button is clicked-->\r\n<button class=\"btn btn-light\" (click)=\"search()\">Search</button>\r\n<!--TODO: Display a carousel component if searching for an artist or album. Bind carousel's resources and give it a static carouselId.-->\r\n<p *ngIf=\"(searchCategory == 'artist' || searchCategory == 'album') && resources?.length\" >\r\n\t<app-carousel [resources]=\"resources\" [carouselId]=\"carouselId\"></app-carousel>\r\n</p>\r\n<!--TODO: Display a track-list component if searching for a track. Bind track-list's tracks.-->\r\n<div *ngIf=\"searchCategory == 'track' && resources?.length\">\r\n\t<app-track-list [tracks]=\"resources\" [hideAlbum]=\"hideAlbum\" [hideArtist]=\"hideArtist\"></app-track-list>\r\n</div>"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/spotify.service */ "./src/app/services/spotify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(spotifyService) {
        this.spotifyService = spotifyService;
        this.searchCategory = 'artist';
        this.searchCategories = ['artist', 'album', 'track'];
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.carouselId = "carouselMain";
        this.searchCategories.forEach(function (e) {
            $("#cateList").append(new Option(e, e));
        });
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        //TODO: call search function in spotifyService and parse response
        this.searchCategory = $("#cateList :selected").text();
        var searchText = this.searchString;
        this.spotifyService.searchFor(this.searchCategory, searchText).then(function (result) {
            _this.resources = result;
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")],
            providers: [_services_spotify_service__WEBPACK_IMPORTED_MODULE_1__["SpotifyService"]]
        }),
        __metadata("design:paramtypes", [_services_spotify_service__WEBPACK_IMPORTED_MODULE_1__["SpotifyService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/thermometer/thermometer.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/thermometer/thermometer.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress {\r\n\tmargin: 10px;\r\n\theight: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aGVybW9tZXRlci90aGVybW9tZXRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGhlcm1vbWV0ZXIvdGhlcm1vbWV0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcyB7XHJcblx0bWFyZ2luOiAxMHB4O1xyXG5cdGhlaWdodDogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/thermometer/thermometer.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/thermometer/thermometer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress\">\r\n  <!--TODO: set style.background-color based on the audio feature's\r\n     color and style.width via the audio feature's percent. \r\n     Display feature name and percent.-->\r\n  <div class=\"progress-bar\" role=\"progressbar\" [style.background-color]=\"feature.color\" [style.width]=\"feature.percentageString\">{{feature.name}}: {{feature.percentageString}}</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/thermometer/thermometer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/thermometer/thermometer.component.ts ***!
  \*****************************************************************/
/*! exports provided: ThermometerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThermometerComponent", function() { return ThermometerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_track_feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/track-feature */ "./src/app/data/track-feature.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { TrackData } from '../../data/track-data';

var ThermometerComponent = /** @class */ (function () {
    function ThermometerComponent() {
    }
    // console.log(this.feature);
    ThermometerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _data_track_feature__WEBPACK_IMPORTED_MODULE_1__["TrackFeature"])
    ], ThermometerComponent.prototype, "feature", void 0);
    ThermometerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thermometer',
            template: __webpack_require__(/*! ./thermometer.component.html */ "./src/app/components/thermometer/thermometer.component.html"),
            styles: [__webpack_require__(/*! ./thermometer.component.css */ "./src/app/components/thermometer/thermometer.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ThermometerComponent);
    return ThermometerComponent;
}());



/***/ }),

/***/ "./src/app/components/track-list/track-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/track-list/track-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n\tcolor: var(--dark);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmFjay1saXN0L3RyYWNrLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLG1CQUFtQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHJhY2stbGlzdC90cmFjay1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcblx0Y29sb3I6IHZhcigtLWRhcmspO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/track-list/track-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/track-list/track-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-sm table-light table-striped\" *ngIf=\"tracks\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th scope=\"col\">#</th>\r\n\t\t\t<th scope=\"col\">Track</th>\r\n\t\t\t<th scope=\"col\">Duration</th>\r\n\t\t\t<!--TODO: Use *ngIf to hide if hideArtist is true-->\r\n\t\t\t<th scope=\"col\" *ngIf=\"!hideArtist\">Primary Artist</th>\r\n\t\t\t<!--TODO: Use *ngIf to hide if hideAlbum is true-->\r\n\t\t\t<th scope=\"col\" *ngIf=\"!hideAlbum\">Album</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<!--TODO: Use *ngFor to loop over tracks-->\r\n\t\t<ng-container *ngFor=\"let track of tracks; index as i\">\r\n\t\t\t<tr>\r\n\t\t\t\t<!--TODO: Populate with row index (start with 1!)-->\r\n\t\t\t\t<td>{{i + 1}}</td>\r\n\t\t\t\t<td>\r\n\t\t\t\t\t<!--TODO: link to the endpoint for that track, display the track's name-->\r\n\t\t\t\t\t<a [routerLink]=\"['/track', track.id]\">{{track.name}}</a>\r\n\t\t\t\t</td>\r\n\t\t\t\t<!--TODO: display the track's duration-->\r\n\t\t\t\t<td>{{track.duration_ms | date:'mm:ss'}}</td>\r\n\t\t\t\t<!--TODO: Use *ngIf to hide if hideArtist is true; link to the first artist's endpoint and display the first artist's name-->\r\n\t\t\t\t<td *ngIf=\"!hideArtist\"><a [routerLink]=\"['/artist', track.primaryArtist.id]\">{{track.primaryArtist.name}}</a></td>\r\n\t\t\t\t<!--TODO: Use *ngIf to hide if hideAlbum is true; link to the album's endpoint and display the album's name-->\r\n\t\t\t\t<td *ngIf=\"!hideAlbum\"><a [routerLink]=\"['/album', track.album.id]\">{{track.album.name}}</a></td>\r\n\t\t\t</tr>\r\n\t\t</ng-container>\r\n\t</tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/components/track-list/track-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/track-list/track-list.component.ts ***!
  \***************************************************************/
/*! exports provided: TrackListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackListComponent", function() { return TrackListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrackListComponent = /** @class */ (function () {
    function TrackListComponent() {
        this.hideArtist = false;
        this.hideAlbum = false;
    }
    TrackListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TrackListComponent.prototype, "tracks", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TrackListComponent.prototype, "hideArtist", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TrackListComponent.prototype, "hideAlbum", void 0);
    TrackListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-track-list',
            template: __webpack_require__(/*! ./track-list.component.html */ "./src/app/components/track-list/track-list.component.html"),
            styles: [__webpack_require__(/*! ./track-list.component.css */ "./src/app/components/track-list/track-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrackListComponent);
    return TrackListComponent;
}());



/***/ }),

/***/ "./src/app/data/album-data.ts":
/*!************************************!*\
  !*** ./src/app/data/album-data.ts ***!
  \************************************/
/*! exports provided: AlbumData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumData", function() { return AlbumData; });
/* harmony import */ var _resource_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-data */ "./src/app/data/resource-data.ts");
/* harmony import */ var _artist_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artist-data */ "./src/app/data/artist-data.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var AlbumData = /** @class */ (function (_super) {
    __extends(AlbumData, _super);
    function AlbumData(objectModel) {
        var _this = _super.call(this, objectModel) || this;
        _this.category = "album";
        _this.genres = objectModel['genres'];
        _this.artists = objectModel['artists'].map(function (artist) {
            return new _artist_data__WEBPACK_IMPORTED_MODULE_1__["ArtistData"](artist);
        });
        return _this;
    }
    return AlbumData;
}(_resource_data__WEBPACK_IMPORTED_MODULE_0__["ResourceData"]));



/***/ }),

/***/ "./src/app/data/artist-data.ts":
/*!*************************************!*\
  !*** ./src/app/data/artist-data.ts ***!
  \*************************************/
/*! exports provided: ArtistData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistData", function() { return ArtistData; });
/* harmony import */ var _resource_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-data */ "./src/app/data/resource-data.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ArtistData = /** @class */ (function (_super) {
    __extends(ArtistData, _super);
    function ArtistData(objectModel) {
        var _this = _super.call(this, objectModel) || this;
        _this.category = 'artist';
        _this.genres = objectModel['genres'];
        return _this;
    }
    return ArtistData;
}(_resource_data__WEBPACK_IMPORTED_MODULE_0__["ResourceData"]));



/***/ }),

/***/ "./src/app/data/profile-data.ts":
/*!**************************************!*\
  !*** ./src/app/data/profile-data.ts ***!
  \**************************************/
/*! exports provided: ProfileData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileData", function() { return ProfileData; });
var ProfileData = /** @class */ (function () {
    function ProfileData(objectModel) {
        this.name = objectModel['display_name'];
        this.spotifyProfile = objectModel['external_urls']['spotify'];
        if (objectModel['images'].length > 0) {
            this.imageURL = objectModel['images'][0].url;
        }
        else {
            this.imageURL = '../../assets/unknown.jpg';
        }
    }
    return ProfileData;
}());



/***/ }),

/***/ "./src/app/data/resource-data.ts":
/*!***************************************!*\
  !*** ./src/app/data/resource-data.ts ***!
  \***************************************/
/*! exports provided: ResourceData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceData", function() { return ResourceData; });
var ResourceData = /** @class */ (function () {
    function ResourceData(objectModel) {
        this.category = "unknown";
        this.name = objectModel['name'];
        this.id = objectModel['id'];
        if (objectModel['images'] && objectModel['images'].length > 0) {
            this.imageURL = objectModel['images'][0].url;
        }
        else if (objectModel['album'] && objectModel['album']['images'] && objectModel['album']['images'].length > 0) {
            this.imageURL = objectModel['album']['images'][0].url;
        }
        else {
            this.imageURL = '../../assets/unknown.jpg';
        }
        if ('spotify' in objectModel['external_urls']) {
            this.url = objectModel['external_urls']['spotify'];
        }
    }
    return ResourceData;
}());



/***/ }),

/***/ "./src/app/data/track-data.ts":
/*!************************************!*\
  !*** ./src/app/data/track-data.ts ***!
  \************************************/
/*! exports provided: TrackData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackData", function() { return TrackData; });
/* harmony import */ var _resource_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-data */ "./src/app/data/resource-data.ts");
/* harmony import */ var _artist_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./artist-data */ "./src/app/data/artist-data.ts");
/* harmony import */ var _album_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./album-data */ "./src/app/data/album-data.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var TrackData = /** @class */ (function (_super) {
    __extends(TrackData, _super);
    function TrackData(objectModel) {
        var _this = _super.call(this, objectModel) || this;
        _this.category = "track";
        _this.artists = objectModel['artists'].map(function (artist) {
            return new _artist_data__WEBPACK_IMPORTED_MODULE_1__["ArtistData"](artist);
        });
        if (objectModel['album']) {
            _this.album = new _album_data__WEBPACK_IMPORTED_MODULE_2__["AlbumData"](objectModel['album']);
        }
        _this.duration_ms = objectModel['duration_ms'];
        return _this;
    }
    Object.defineProperty(TrackData.prototype, "durationStr", {
        //Return duration_ms in X:XX form (and drop ms component)
        get: function () {
            var minutes = this.duration_ms / 60000; //60 sec/min * 100ms/sec
            var seconds = (this.duration_ms) / 1000 % 60; // 100ms/sec, get remainder
            return minutes.toFixed(0) + ':' + seconds.toFixed(0).padStart(2, '0');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackData.prototype, "primaryArtist", {
        get: function () {
            return this.artists[0];
        },
        enumerable: true,
        configurable: true
    });
    return TrackData;
}(_resource_data__WEBPACK_IMPORTED_MODULE_0__["ResourceData"]));



/***/ }),

/***/ "./src/app/data/track-feature.ts":
/*!***************************************!*\
  !*** ./src/app/data/track-feature.ts ***!
  \***************************************/
/*! exports provided: TrackFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackFeature", function() { return TrackFeature; });
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);

var TrackFeature = /** @class */ (function () {
    function TrackFeature(feature, percent) {
        this.name = feature;
        this.percent = percent;
    }
    Object.defineProperty(TrackFeature.prototype, "percentageString", {
        get: function () {
            return (this.percent * 100).toFixed() + '%';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackFeature.prototype, "color", {
        get: function () {
            return chroma_js__WEBPACK_IMPORTED_MODULE_0__["mix"]('red', 'green', this.percent, 'hsl').hex();
        },
        enumerable: true,
        configurable: true
    });
    TrackFeature.FeatureTypes = ['danceability', 'energy', 'speechiness', 'acousticness', 'instrumentalness', 'liveness', 'valence'];
    return TrackFeature;
}());



/***/ }),

/***/ "./src/app/pages/album-page/album-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/album-page/album-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#albumImg {\r\n\tmax-width: 100%;\r\n\tmax-height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxidW0tcGFnZS9hbGJ1bS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWxidW0tcGFnZS9hbGJ1bS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYWxidW1JbWcge1xyXG5cdG1heC13aWR0aDogMTAwJTtcclxuXHRtYXgtaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/album-page/album-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/album-page/album-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"album\" class=\"row\">\r\n\t<div class=\"col-6\">\r\n\t\t<!--TODO: populate with album name-->\r\n\t\t<h1>{{album.name}}</h1>\r\n\t\t<!--TODO: set src to album image URL-->\r\n\t\t<img id=\"albumImg\" src={{album.imageURL}}>\r\n\t\t<!--TODO: loop over album artists-->\r\n\t\t<p *ngFor=\"let artist of album.artists\">\r\n\t\t\t<!--TODO: link to artist page, display artist name-->\r\n\t\t\tArtist: <a [routerLink]=\"['/artist', artist.id]\">{{artist.name}}</a>\t\r\n\t\t</p>\r\n\t\t<p>\r\n\t\t\t<!--TODO: link to artist page on spotify, display artist name-->\r\n\t\t\t<a href={{album.url}} class=\"btn btn-light\" role=\"button\" target=\"_blank\" >Open {{album.name}} on Spotify</a>\r\n\t\t</p>\r\n\t</div>\r\n\t<div class=\"col-6\">\r\n\t\t<h3>Album Tracks</h3>\r\n\t\t<!--TODO: display the track list for the album. Hide the artist and album columns because they are redundant on this page.-->\r\n\t\t<app-track-list [tracks]=\"tracks\" [hideAlbum]=\"hideData\" [hideArtist]=\"hideData\"></app-track-list>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/album-page/album-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/album-page/album-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AlbumPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumPageComponent", function() { return AlbumPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/spotify.service */ "./src/app/services/spotify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlbumPageComponent = /** @class */ (function () {
    function AlbumPageComponent(route, spotifyService) {
        this.route = route;
        this.spotifyService = spotifyService;
        this.hideData = true;
    }
    AlbumPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.albumId = this.route.snapshot.paramMap.get('id');
        //TODO: inject spotifyService and use it to get the album data and the tracks for the album
        this.spotifyService.getAlbum(this.albumId).then(function (result) {
            _this.album = result;
        });
        this.spotifyService.getTracksForAlbum(this.albumId).then(function (result) {
            _this.tracks = result;
        });
    };
    AlbumPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-album-page',
            template: __webpack_require__(/*! ./album-page.component.html */ "./src/app/pages/album-page/album-page.component.html"),
            styles: [__webpack_require__(/*! ./album-page.component.css */ "./src/app/pages/album-page/album-page.component.css")],
            providers: [src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"]])
    ], AlbumPageComponent);
    return AlbumPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/artist-page/artist-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/artist-page/artist-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#artistImg {\r\n\tmax-width: 100%;\r\n\tmax-height: 100%;\r\n}\r\n\r\napp-artist {\r\n\tvertical-align: middle;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXJ0aXN0LXBhZ2UvYXJ0aXN0LXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyx1QkFBdUI7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hcnRpc3QtcGFnZS9hcnRpc3QtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FydGlzdEltZyB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cdG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmFwcC1hcnRpc3Qge1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/artist-page/artist-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/artist-page/artist-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"artist\" class=\"row\">\r\n\t<div class=\"col-6\">\r\n\t\t<!--TODO: populate with artist name-->\r\n\t\t<h1>{{artist.name}}</h1>\r\n\t\t<!--TODO: populate with artist image URL-->\r\n\t\t<img id=\"artistImg\" src={{artist.imageURL}}>\r\n\t\t<p>\r\n\t\t\t<!--TODO: link to artist page on spotify, display artist name-->\r\n\t\t\t<a href={{artist.url}} class=\"btn btn-light\" role=\"button\" target=\"_blank\">Open {{artist.name}} on Spotify</a>\r\n\t\t</p>\r\n\t</div>\r\n\t<div class=\"col-2\">\r\n\t\t<h3>Genres</h3>\r\n\t\t<ul *ngFor=\"let genre of artist.genres\">\r\n\t\t\t<!--TODO: loop over artist's genres and display them-->\r\n\t\t\t<li>{{genre}}</li>\r\n\t\t</ul>\r\n\t\t<p>\r\n\t\t</p>\r\n\t</div>\r\n\t<div class=\"col-4\">\r\n\t\t<!--TODO: display artist name-->\r\n\t\t<h3>{{artist.name}}'s Top Tracks</h3>\r\n\t\t<!--TODO: display the track list for the album-->\r\n\t\t<app-track-list [tracks]=\"topTracks\"></app-track-list>\r\n\t</div>\r\n</div>\r\n\r\n<div *ngIf=\"artist\" class=\"row\">\r\n\t<div class=\"col-6\">\r\n\t\t<!--TODO: display artist name-->\r\n\t\t<h3>{{artist.name}}'s Albums</h3>\r\n\t\t<!--TODO: Display a carousel component for the artist's albums. Bind carousel's resources and give it a static carouselId.-->\r\n\t\t<app-carousel [resources]=\"albums\" [carouselId]=\"albumCarou\"></app-carousel>\r\n\t</div>\r\n\t<div class=\"col-6\">\r\n\t\t<h3>Similar Artists</h3>\r\n\t\t<!--TODO: Display a carousel component for similar artists. Bind carousel's resources and give it a static carouselId.-->\r\n\t\t<app-carousel [resources]=\"relatedArtists\" [carouselId]=\"artistCarou\"></app-carousel>\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/artist-page/artist-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/artist-page/artist-page.component.ts ***!
  \************************************************************/
/*! exports provided: ArtistPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistPageComponent", function() { return ArtistPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/spotify.service */ "./src/app/services/spotify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArtistPageComponent = /** @class */ (function () {
    function ArtistPageComponent(route, spotifyService) {
        var _this = this;
        this.route = route;
        this.spotifyService = spotifyService;
        this.albumCarou = "albumCarou";
        this.artistCarou = "artistCarou";
        this.route.params.subscribe(function (val) {
            _this.artistId = _this.route.snapshot.paramMap.get('id');
            //TODO: Inject the spotifyService and use it to get the artist data, related artists, top tracks for the artist, and the artist's albums
            _this.spotifyService.getArtist(_this.artistId).then(function (result) {
                _this.artist = result;
            });
            _this.spotifyService.getRelatedArtists(_this.artistId).then(function (result) {
                _this.relatedArtists = result;
            });
            _this.spotifyService.getTopTracksForArtist(_this.artistId).then(function (result) {
                _this.topTracks = result;
            });
            _this.spotifyService.getAlbumsForArtist(_this.artistId).then(function (result) {
                _this.albums = result;
            });
        });
    }
    ArtistPageComponent.prototype.ngOnInit = function () {
    };
    ArtistPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-artist-page',
            template: __webpack_require__(/*! ./artist-page.component.html */ "./src/app/pages/artist-page/artist-page.component.html"),
            styles: [__webpack_require__(/*! ./artist-page.component.css */ "./src/app/pages/artist-page/artist-page.component.css")],
            providers: [src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"]])
    ], ArtistPageComponent);
    return ArtistPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<app-about class=\"col-6\"></app-about>\r\n\t<app-search class=\"col-6\"></app-search>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/pages/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/track-page/track-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/track-page/track-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYWNrLXBhZ2UvdHJhY2stcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/track-page/track-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/track-page/track-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div *ngIf=\"track\" class=\"col-6\">\r\n\t\t<!--TODO: populate with track name-->\r\n\t\t<h1>{{track.name}}</h1>\r\n\t\t<p>\r\n\t\t\t<!--TODO: link to album page, display album name-->\r\n\t\t\tTrack on <a [routerLink]=\"['/album', track.album.id]\">{{track.album.name}}</a>\r\n\t\t</p>\r\n\t\t<div>\r\n\t\t\t<!--TODO: loop over album's artists-->\r\n\t\t\t<p *ngFor=\"let artist of track.artists\">\r\n\t\t\t\t<!--TODO: link to artist page, display artist name-->\r\n\t\t\t\tArtist: <a [routerLink]=\"['/artist', artist.id]\">{{artist.name}}</a>\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<p>\r\n\t\t\t<!--TODO: populate with track duration-->\r\n\t\t\tDuration: {{track.duration_ms | date:'mm:ss' }}\r\n\t\t</p>\r\n\t\t<p>\r\n\t\t\t<!--TODO: link to track page on spotify, display track name-->\r\n\t\t\t<a href={{track.url}} class=\"btn btn-light\" role=\"button\" target=\"_blank\">Open {{track.name}} on Spotify</a>\r\n\t\t</p>\r\n\t</div>\r\n\t<div *ngIf=\"audioFeatures\" class=\"col-6\">\r\n\t\t<!--TODO: loop over types of features and create a thermometer component for each-->\r\n\t\t<ng-container *ngFor=\"let feature of audioFeatures\">\r\n\t\t\t\t<app-thermometer [feature]=feature></app-thermometer>\r\n\t\t</ng-container>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/track-page/track-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/track-page/track-page.component.ts ***!
  \**********************************************************/
/*! exports provided: TrackPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackPageComponent", function() { return TrackPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/spotify.service */ "./src/app/services/spotify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrackPageComponent = /** @class */ (function () {
    function TrackPageComponent(route, spotifyService) {
        var _this = this;
        this.route = route;
        this.spotifyService = spotifyService;
        this.route.params.subscribe(function (val) {
            _this.trackId = _this.route.snapshot.paramMap.get('id');
            console.log(_this.track);
            //TODO: Inject the spotifyService and use it to get the track data and it's audio features
            _this.spotifyService.getTrack(_this.trackId).then(function (result) {
                _this.track = result;
                console.log(_this.track);
            });
            _this.spotifyService.getAudioFeaturesForTrack(_this.trackId).then(function (result) {
                _this.audioFeatures = result;
            });
        });
    }
    TrackPageComponent.prototype.ngOnInit = function () {
    };
    TrackPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-track-page',
            template: __webpack_require__(/*! ./track-page.component.html */ "./src/app/pages/track-page/track-page.component.html"),
            styles: [__webpack_require__(/*! ./track-page.component.css */ "./src/app/pages/track-page/track-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"]])
    ], TrackPageComponent);
    return TrackPageComponent;
}());



/***/ }),

/***/ "./src/app/services/spotify.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/spotify.service.ts ***!
  \*********************************************/
/*! exports provided: SpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyService", function() { return SpotifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_artist_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/artist-data */ "./src/app/data/artist-data.ts");
/* harmony import */ var _data_album_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/album-data */ "./src/app/data/album-data.ts");
/* harmony import */ var _data_track_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/track-data */ "./src/app/data/track-data.ts");
/* harmony import */ var _data_profile_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/profile-data */ "./src/app/data/profile-data.ts");
/* harmony import */ var _data_track_feature__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/track-feature */ "./src/app/data/track-feature.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SpotifyService = /** @class */ (function () {
    function SpotifyService(http) {
        this.http = http;
        this.expressBaseUrl = 'http://localhost:8888';
    }
    SpotifyService.prototype.sendRequestToExpress = function (endpoint) {
        //TODO: use the injected http Service to make a get request to the Express endpoint and return the response.
        //the http service works similarly to fetch(). It may be useful to call .toPromise() on any responses.
        //update the return to instead return a Promise with the data from the Express server
        return this.http.get(this.expressBaseUrl + endpoint).toPromise();
    };
    SpotifyService.prototype.aboutMe = function () {
        //This line is sending a request to express, which returns a promise with some data. We're then parsing the data 
        return this.sendRequestToExpress('/me').then(function (data) {
            return new _data_profile_data__WEBPACK_IMPORTED_MODULE_5__["ProfileData"](data);
        });
    };
    SpotifyService.prototype.searchFor = function (category, resource) {
        //TODO: identify the search endpoint in the express webserver (routes/index.js) and send the request to express.
        //Make sure you're encoding the resource with encodeURIComponent().
        //Depending on the category (artist, track, album), return an array of that type of data.
        //JavaScript's "map" function might be useful for this, but there are other ways of building the array.
        var requestStr = '/search/' + category + '/' + resource;
        encodeURIComponent(requestStr);
        return this.sendRequestToExpress(requestStr).then(function (data) {
            switch (category) {
                case "artist":
                    var artistData_1 = [];
                    data["artists"]["items"].forEach(function (e) {
                        artistData_1.push(new _data_artist_data__WEBPACK_IMPORTED_MODULE_2__["ArtistData"](e));
                    });
                    return artistData_1;
                case "album":
                    var albumData_1 = [];
                    data["albums"]["items"].forEach(function (e) {
                        albumData_1.push(new _data_album_data__WEBPACK_IMPORTED_MODULE_3__["AlbumData"](e));
                    });
                    return albumData_1;
                case "track":
                    var trackData_1 = [];
                    data["tracks"]["items"].forEach(function (e) {
                        trackData_1.push(new _data_track_data__WEBPACK_IMPORTED_MODULE_4__["TrackData"](e));
                    });
                    return trackData_1;
            }
        });
    };
    SpotifyService.prototype.getArtist = function (artistId) {
        //TODO: use the artist endpoint to make a request to express.
        //Again, you may need to encode the artistId.
        var requestStr = '/artist/' + artistId;
        encodeURIComponent(requestStr);
        return this.sendRequestToExpress(requestStr).then(function (data) {
            return new _data_artist_data__WEBPACK_IMPORTED_MODULE_2__["ArtistData"](data);
        });
    };
    SpotifyService.prototype.getRelatedArtists = function (artistId) {
        //TODO: use the related artist endpoint to make a request to express and return an array of artist data.
        var requestStr = '/artist-related-artists/' + artistId;
        encodeURIComponent(requestStr);
        return this.sendRequestToExpress(requestStr).then(function (data) {
            var artistData = [];
            data['artists'].forEach(function (artist) {
                artistData.push(new _data_artist_data__WEBPACK_IMPORTED_MODULE_2__["ArtistData"](artist));
            });
            return artistData;
        });
    };
    SpotifyService.prototype.getTopTracksForArtist = function (artistId) {
        //TODO: use the top tracks endpoint to make a request to express.
        var requestStr = '/artist-top-tracks/' + artistId;
        encodeURIComponent(requestStr);
        return this.sendRequestToExpress(requestStr).then(function (data) {
            var topTrackData = [];
            data['tracks'].forEach(function (track) {
                topTrackData.push(new _data_track_data__WEBPACK_IMPORTED_MODULE_4__["TrackData"](track));
            });
            return topTrackData;
        });
    };
    SpotifyService.prototype.getAlbumsForArtist = function (artistId) {
        //TODO: use the albums for an artist endpoint to make a request to express.
        var requestStr = '/artist-albums/' + artistId;
        encodeURIComponent(requestStr);
        return this.sendRequestToExpress(requestStr).then(function (data) {
            var albumData = [];
            data['items'].forEach(function (e) {
                albumData.push(new _data_album_data__WEBPACK_IMPORTED_MODULE_3__["AlbumData"](e));
            });
            return albumData;
        });
    };
    SpotifyService.prototype.getAlbum = function (albumId) {
        //TODO: use the album endpoint to make a request to express.
        var requestStr = '/album/' + albumId;
        encodeURIComponent(requestStr);
        return this.sendRequestToExpress(requestStr).then(function (data) {
            return new _data_album_data__WEBPACK_IMPORTED_MODULE_3__["AlbumData"](data);
        });
    };
    SpotifyService.prototype.getTracksForAlbum = function (albumId) {
        //TODO: use the tracks for album endpoint to make a request to express.
        var requestStr = '/album-tracks/' + albumId;
        encodeURIComponent(requestStr);
        return this.sendRequestToExpress(requestStr).then(function (data) {
            var trackData = [];
            data['items'].forEach(function (track) {
                trackData.push(new _data_track_data__WEBPACK_IMPORTED_MODULE_4__["TrackData"](track));
            });
            return trackData;
        });
    };
    SpotifyService.prototype.getTrack = function (trackId) {
        //TODO: use the track endpoint to make a request to express.
        var requestStr = '/track/' + trackId;
        encodeURIComponent(requestStr);
        return this.sendRequestToExpress(requestStr).then(function (data) {
            return new _data_track_data__WEBPACK_IMPORTED_MODULE_4__["TrackData"](data);
        });
    };
    SpotifyService.prototype.getAudioFeaturesForTrack = function (trackId) {
        //TODO: use the audio features for track endpoint to make a request to express.
        var requestStr = '/track-audio-features/' + trackId;
        encodeURIComponent(requestStr);
        var features = [];
        return this.sendRequestToExpress(requestStr).then(function (data) {
            _data_track_feature__WEBPACK_IMPORTED_MODULE_6__["TrackFeature"].FeatureTypes.forEach(function (e) {
                features.push(new _data_track_feature__WEBPACK_IMPORTED_MODULE_6__["TrackFeature"](e, data[e]));
            });
            return features;
        });
    };
    SpotifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SpotifyService);
    return SpotifyService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\source\repos\assignment-3-a3-group-3\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
