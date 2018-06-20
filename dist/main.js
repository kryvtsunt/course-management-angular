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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"admin\" class=\"container\">\n  <br/>\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <h4>Course List</h4>\n      <div *ngFor=\"let course of courses\">\n        <ul class=\"list-group\">\n          <button class=\"list-group-item list-group-item-action\"\n                  (click)=\"this.findAllSectionsForCourse(course.id, course.title)\">\n            {{course.title}}\n          </button>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-md-9\">\n      <h4>List of Sections for {{courseTitle}}</h4>\n      <table class=\"table table-responsive table-bordred table-striped\">\n        <thead>\n        <th>Section name</th>\n        <th>Number of Seats</th>\n        <th></th>\n        <th></th>\n        </thead>\n        <tbody>\n        <tr>\n          <td><input [(ngModel)]=\"sectionName\"\n                     placeholder=\"Section name\"\n                     class=\"form-control\"/></td>\n          <td><input [(ngModel)]=\"seats\"\n                     placeholder=\"Number of Seats\"\n                     class=\"form-control\"/></td>\n          <td>\n            <p *ngIf=\"!editMode\" data-placement=\"top\" data-toggle=\"tooltip\" title=\"Add\">\n              <button (click)=\"createSection()\"\n                      class=\"btn btn-success btn-xs fa fa-plus\"></button>\n            </p>\n            <p *ngIf=\"editMode\" data-placement=\"top\" data-toggle=\"tooltip\" title=\"Add\">\n              <button (click)=\"updateSection()\"\n                      class=\"btn btn-success btn-xs fa fa-upload\"></button>\n            </p>\n          </td>\n          <td>\n            <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Clean\">\n              <button (click)=\"cleanData()\"\n                      class=\"btn btn-danger btn-xs fa fa-times\"></button>\n            </p>\n          </td>\n        </tr>\n        <tr *ngFor=\"let section of sections\">\n          <td>{{section.name}}</td>\n          <td>{{section.seats}}</td>\n          <td>\n            <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Edit\">\n              <button (click)=\"editSection(section.name, section.seats, section._id)\"\n                      class=\"btn btn-primary btn-xs fa fa-edit\"></button>\n            </p>\n          </td>\n          <td>\n            <p data-placement=\"top\" data-toggle=\"tooltip\" title=\"Delete\">\n              <button\n                (click)=\"deleteSection(section._id)\"\n                class=\"btn btn-danger btn-xs fa fa-trash\"></button>\n            </p>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!admin\" class=\"container-fluid text-center\" style=\"color:white; background-color:red\">\n  <br/>\n  <h4> ERROR: You are not authorized to be here !</h4>\n  <br/>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(sectionService, courseService, userService, route) {
        this.sectionService = sectionService;
        this.courseService = courseService;
        this.userService = userService;
        this.route = route;
        this.courses = [];
        this.sectionName = '';
        this.seats = '';
        this.courseId = '';
        this.courseTitle = '';
        this.sectionId = '';
        this.editMode = false;
        this.sections = [];
    }
    AdminComponent.prototype.createSection = function () {
        var _this = this;
        if (this.sectionName === '') {
            this.sectionName = (this.courseTitle + ' Section' + this.index);
        }
        if (this.seats === '') {
            this.seats = '42';
        }
        if (this.courseId !== '') {
            this
                .sectionService
                .createSection(this.courseId, this.sectionName, this.seats)
                .then(function () {
                _this.findAllSectionsForCourse(_this.courseId, _this.courseTitle);
                _this.cleanData();
            });
        }
        else {
            alert('Choose the course first');
        }
    };
    AdminComponent.prototype.updateSection = function () {
        var _this = this;
        this.sectionService.updateSection(this.sectionId, this.sectionName, this.seats)
            .then(function () {
            _this.findAllSectionsForCourse(_this.courseId, _this.courseTitle);
            _this.cleanData();
        });
    };
    AdminComponent.prototype.deleteSection = function (sectionId) {
        var _this = this;
        this.sectionService.deleteSection(sectionId)
            .then(function () {
            _this.findAllSectionsForCourse(_this.courseId, _this.courseTitle);
            _this.cleanData();
        });
    };
    AdminComponent.prototype.cleanData = function () {
        this.sectionName = '';
        this.seats = '';
        this.editMode = false;
    };
    AdminComponent.prototype.editSection = function (name, seats, id) {
        this.editMode = true;
        this.sectionName = name;
        this.sectionId = id;
        this.seats = seats;
    };
    AdminComponent.prototype.findAllSectionsForCourse = function (courseId, courseTitle) {
        var _this = this;
        this.courseId = courseId;
        this.courseTitle = courseTitle;
        this.sectionService.findSectionsForCourse(courseId)
            .then(function (sections) { _this.sections = sections; _this.index = sections.length + 1; });
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .profile()
            .then(function (user) {
            if (user.role === 'admin') {
                _this.admin = true;
            }
            else {
                _this.admin = false;
            }
        });
        this.courseService.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_1__["SectionServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-grid/course-grid.component */ "./src/app/course-grid/course-grid.component.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module-list/module-list.component */ "./src/app/module-list/module-list.component.ts");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/module.service.client */ "./src/app/services/module.service.client.ts");
/* harmony import */ var _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lesson-tabs/lesson-tabs.component */ "./src/app/lesson-tabs/lesson-tabs.component.ts");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
/* harmony import */ var _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widget-list/widget-list.component */ "./src/app/widget-list/widget-list.component.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _topic_pills_topic_pills_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./topic-pills/topic-pills.component */ "./src/app/topic-pills/topic-pills.component.ts");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/topic.service.client */ "./src/app/services/topic.service.client.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _navbar_navbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./navbar/navbar */ "./src/app/navbar/navbar.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_4__["CourseGridComponent"],
                _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_7__["CourseViewerComponent"],
                _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_8__["ModuleListComponent"],
                _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_10__["LessonTabsComponent"],
                _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
                _topic_pills_topic_pills_component__WEBPACK_IMPORTED_MODULE_17__["TopicPillsComponent"],
                _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_21__["SectionListComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__["AdminComponent"],
                _navbar_navbar__WEBPACK_IMPORTED_MODULE_24__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["routing"]
            ],
            providers: [
                _services_course_service_client__WEBPACK_IMPORTED_MODULE_5__["CourseServiceClient"],
                _services_module_service_client__WEBPACK_IMPORTED_MODULE_9__["ModuleServiceClient"],
                _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_11__["LessonServiceClient"],
                _services_widget_service_client__WEBPACK_IMPORTED_MODULE_13__["WidgetServiceClient"],
                _services_topic_service_client__WEBPACK_IMPORTED_MODULE_18__["TopicServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_22__["UserServiceClient"],
                _services_section_service_client__WEBPACK_IMPORTED_MODULE_20__["SectionServiceClient"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./course-grid/course-grid.component */ "./src/app/course-grid/course-grid.component.ts");








var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_7__["CourseGridComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'course/:courseId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_1__["CourseViewerComponent"] },
    { path: 'course/:courseId/section', component: _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_5__["SectionListComponent"] },
    { path: 'course/:courseId/module/:moduleId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_1__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_1__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_1__["CourseViewerComponent"] },
    { path: '**', component: _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_7__["CourseGridComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/course-grid/course-grid.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin-bottom: 15px;\n}\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"status\">\n  <h2> My Courses:</h2>\n  <div class=\"row\">\n    <div *ngFor=\"let course of myCourses\" class=\"col-md-4 col-lg-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{course.title}}</h5>\n          <img class=\"card-img-top\"\n               src=\"http://i0.wp.com/lukeangel.co/wp-content/uploads/2017/11/courseCover-AgileProductOwnership-From-Beginner-to-ProfessionalimagescourseCover.jpg?fit=750%2C422\">\n          <p class=\"card-text\">Description will be here soon</p>\n          <p *ngIf=\"course.status !== null\" class=\"card-text\"><strong>Status:</strong> {{course.status}}</p>\n          <p *ngIf=\"course.status === null\"class=\"card-text\"><strong>Status:</strong> public</p>\n          <a routerLink=\"/course/{{course.id}}\"\n             class=\"btn btn-primary btn-block\">View Content</a>\n        </div>\n      </div>\n    </div>\n  </div>\n<br/>\n</div>\n<h2> All Courses:</h2>\n<div class=\"row\">\n  <div *ngFor=\"let course of courses\" class=\"col-md-4 col-lg-3\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{course.title}}</h5>\n        <img class=\"card-img-top\"\n             src=\"https://www.virtual-college.co.uk/-/media/images/dev/online-courses-cover.ashx\">\n        <p class=\"card-text\">Description will be here soon</p>\n        <p *ngIf=\"course.status !== null\" class=\"card-text\"><strong>Status:</strong> {{course.status}}</p>\n        <p *ngIf=\"course.status === null\"class=\"card-text\"><strong>Status:</strong> public</p>\n        <a *ngIf=\"course.status !== 'private'\" routerLink=\"/course/{{course.id}}\"\n           class=\"btn btn-primary btn-block\">View Content</a>\n        <a routerLink=\"/course/{{course.id}}/section\"\n           class=\"btn btn-info btn-block\">Enrollment</a>\n      </div>\n    </div>\n  </div>\n</div>\n<br/>\n<br/>\n<br/>\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.ts ***!
  \******************************************************/
/*! exports provided: CourseGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseGridComponent", function() { return CourseGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CourseGridComponent = /** @class */ (function () {
    function CourseGridComponent(sectionService, courseService, userService) {
        this.sectionService = sectionService;
        this.courseService = courseService;
        this.userService = userService;
        this.courses = [];
        this.myCourses = [];
        this.courseIds = [];
    }
    CourseGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.checkStatus().then(function (st) { return _this.status = st; }).then(function () {
            if (_this.status) {
                _this.sectionService.findSectionsForStudent()
                    .then(function (sections) { return __awaiter(_this, void 0, void 0, function () {
                    var _i, sections_1, en, _a, _b;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _i = 0, sections_1 = sections;
                                _c.label = 1;
                            case 1:
                                if (!(_i < sections_1.length)) return [3 /*break*/, 4];
                                en = sections_1[_i];
                                _a = this.myCourses;
                                _b = this.myCourses.length;
                                return [4 /*yield*/, this.courseService.findCourseById(en.section.courseId)];
                            case 2:
                                _a[_b] = _c.sent();
                                _c.label = 3;
                            case 3:
                                _i++;
                                return [3 /*break*/, 1];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); });
            }
        });
        this.courseService.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    CourseGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-grid',
            template: __webpack_require__(/*! ./course-grid.component.html */ "./src/app/course-grid/course-grid.component.html"),
            styles: [__webpack_require__(/*! ./course-grid.component.css */ "./src/app/course-grid/course-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_3__["SectionServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], CourseGridComponent);
    return CourseGridComponent;
}());



/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<div class=\"container-fluid\">\n  <h2> <strong> Course  {{course.title}}</strong></h2>\n  <app-module-list></app-module-list>\n</div>\n"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewerComponent", function() { return CourseViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _models_coruse_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/coruse.model.client */ "./src/app/models/coruse.model.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseViewerComponent = /** @class */ (function () {
    function CourseViewerComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.course = new _models_coruse_model_client__WEBPACK_IMPORTED_MODULE_3__["Course"]();
        this.route.params.subscribe(function (params) { return _this.loadCourse(params['courseId']); });
    }
    CourseViewerComponent.prototype.loadCourse = function (courseId) {
        var _this = this;
        this.service.findCourseById(courseId)
            .then(function (course) { return _this.course = course; });
    };
    CourseViewerComponent.prototype.ngOnInit = function () {
    };
    CourseViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-viewer',
            template: __webpack_require__(/*! ./course-viewer.component.html */ "./src/app/course-viewer/course-viewer.component.html"),
            styles: [__webpack_require__(/*! ./course-viewer.component.css */ "./src/app/course-viewer/course-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CourseViewerComponent);
    return CourseViewerComponent;
}());



/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.html":
/*!********************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li *ngFor=\"let lesson of lessons\"\n      class=\"nav-item\">\n    <button class=\" nav-link\" style=\"color: white\"\n       [ngClass]=\"{'bg-dark': lesson.id == lessonId}\"\n       routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lesson.id}}\">\n      {{lesson.title}}\n    </button>\n  </li>\n</ul>\n\n<app-topic-pills></app-topic-pills>\n"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.ts ***!
  \******************************************************/
/*! exports provided: LessonTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTabsComponent", function() { return LessonTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LessonTabsComponent = /** @class */ (function () {
    function LessonTabsComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.lessons = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    LessonTabsComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.loadLessons(this.courseId, this.moduleId);
    };
    LessonTabsComponent.prototype.loadLessons = function (courseId, moduleId) {
        var _this = this;
        this.moduleId = moduleId;
        console.log(moduleId);
        this.service.findLessonsForModule(courseId, moduleId)
            .then(function (lessons) { return _this.lessons = lessons; });
    };
    LessonTabsComponent.prototype.ngOnInit = function () {
    };
    LessonTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson-tabs',
            template: __webpack_require__(/*! ./lesson-tabs.component.html */ "./src/app/lesson-tabs/lesson-tabs.component.html"),
            styles: [__webpack_require__(/*! ./lesson-tabs.component.css */ "./src/app/lesson-tabs/lesson-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lesson_service_client__WEBPACK_IMPORTED_MODULE_2__["LessonServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], LessonTabsComponent);
    return LessonTabsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Form */\r\n\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 400px;\r\n  margin: 0 auto 100px;\r\n  padding: 30px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  text-align: center;\r\n}\r\n\r\n.form .thumbnail {\r\n  background: #EF3B3A;\r\n  width: 150px;\r\n  height: 150px;\r\n  margin: 0 auto 30px;\r\n  padding: 50px 30px;\r\n  border-top-left-radius: 100%;\r\n  border-top-right-radius: 100%;\r\n  border-bottom-left-radius: 100%;\r\n  border-bottom-right-radius: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.form .thumbnail img {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.form .errors {\r\n  color: white;\r\n  background: #EF3B3A;\r\n}\r\n\r\n.form input {\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n\r\n.form button {\r\n  outline: 0;\r\n  background: #EF3B3A;\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.form .message {\r\n  margin: 15px 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 12px;\r\n}\r\n\r\n.form .message a {\r\n  color: #EF3B3A;\r\n  text-decoration: none;\r\n}\r\n\r\n.form .register-form {\r\n  display: none;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container:before, .container:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n\r\n.container .info {\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n\r\n.container .info h1 {\r\n  margin: 0 0 15px;\r\n  padding: 0;\r\n  font-size: 36px;\r\n  font-weight: 300;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.container .info span {\r\n  color: #4d4d4d;\r\n  font-size: 12px;\r\n}\r\n\r\n.container .info span a {\r\n  color: #000000;\r\n  text-decoration: none;\r\n}\r\n\r\n.container .info span .fa {\r\n  color: #EF3B3A;\r\n}\r\n\r\n/* END Form */\r\n\r\n/* Demo Purposes */\r\n\r\nbody {\r\n  background: #ccc;\r\n  font-family: \"Roboto\", sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nbody:before {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n#video {\r\n  z-index: -99;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  width: auto;\r\n  height: auto;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n  transform: translateX(-50%) translateY(-50%);\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n  <div class=\"thumbnail\"><img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg\"/></div>\n  <div class=\"errors\">\n    <div *ngIf=\"noUsernameError\">\n      <p> Username field is empty </p>\n    </div>\n    <div *ngIf=\"noPasswordError\" >\n      <p> Password field is empty </p>\n    </div>\n    <div *ngIf=\"credentialsError\">\n      <p> Wrong Credentials </p>\n    </div>\n  </div>\n  <div>\n  <div>\n    <input type=\"text\" [(ngModel)]=\"username\"\n           placeholder=\"Username\"\n           class=\"form-control\"/>\n    <input type=\"password\" [(ngModel)]=\"password\"\n           placeholder=\"Password\"\n           class=\"form-control\"/>\n    <button (click)=\"login()\">Login</button>\n    <p class=\"message\">Not registered? <a routerLink=\"/register\">Sign up</a></p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    LoginComponent.prototype.resetErrors = function () {
        this.credentialsError = false;
        this.noUsernameError = false;
        this.noPasswordError = false;
    };
    LoginComponent.prototype.reset = function () {
        this.username = '';
        this.password = '';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.resetErrors();
        if (this.username === '') {
            this.noUsernameError = true;
        }
        else {
            if (this.password === '') {
                this.noPasswordError = true;
            }
            else {
                this.service.login(this.username, this.password)
                    .then(function (response) {
                    if (response !== null) {
                        console.log(response);
                        _this.router.navigate(['profile']);
                    }
                    else {
                        _this.credentialsError = true;
                    }
                });
            }
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.reset();
        this.resetErrors();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/coruse.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/coruse.model.client.ts ***!
  \***********************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/module-list/module-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/module-list/module-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/module-list/module-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/module-list/module-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-3\">\n    <div class=\"list-group text-center rounded\" style=\"border: 2px solid black\">\n      <div class=\"bg-dark\" style=\"color:white; padding:10px;\"><h4>Modules</h4></div>\n      <button [ngClass]=\"{'btn-dark active': module.id == moduleId}\" *ngFor=\"let module of modules\"\n          class=\"list-group-item list-group-item-action\"\n          routerLink=\"/course/{{courseId}}/module/{{module.id}}\">\n        <h5>{{module.title}}</h5>\n      </button>\n    </div>\n  </div>\n  <div class=\"col-9\">\n    <app-lesson-tabs></app-lesson-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/module-list/module-list.component.ts ***!
  \******************************************************/
/*! exports provided: ModuleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleListComponent", function() { return ModuleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/module.service.client */ "./src/app/services/module.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModuleListComponent = /** @class */ (function () {
    function ModuleListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.modules = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    ModuleListComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.loadModules(this.courseId);
    };
    ModuleListComponent.prototype.loadModules = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.service.findModulesForCourse(courseId)
            .then(function (modules) { return _this.modules = modules; });
    };
    ModuleListComponent.prototype.ngOnInit = function () {
    };
    ModuleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-module-list',
            template: __webpack_require__(/*! ./module-list.component.html */ "./src/app/module-list/module-list.component.html"),
            styles: [__webpack_require__(/*! ./module-list.component.css */ "./src/app/module-list/module-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_module_service_client__WEBPACK_IMPORTED_MODULE_2__["ModuleServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ModuleListComponent);
    return ModuleListComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.css":
/*!***********************************!*\
  !*** ./src/app/navbar/navbar.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.html":
/*!************************************!*\
  !*** ./src/app/navbar/navbar.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" routerLink=\"./home\">WhiteBoard</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n            aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"./home\" routerLinkActive=\"active\"> Home </a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav my-2 my-lg-0\">\n\n        <li *ngIf=\"!loggedIn\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"./login\" routerLinkActive=\"active\"> Sign In </a>\n        </li>\n        <li *ngIf=\"!loggedIn\" class=\"nav-link disabled\"> | </li>\n        <li *ngIf=\"!loggedIn\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"./register\" routerLinkActive=\"active\"> Sign Up </a>\n        </li>\n        <li *ngIf=\"loggedIn\" class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"./profile\" routerLinkActive=\"active\"> Profile </a>\n        </li>\n        <li *ngIf=\"loggedIn\" class=\"nav-item\">\n          <button class=\"btn bg-transparent nav-link\" (click)=\"logout()\"> Log Out </button>\n        </li>\n\n      </ul>\n    </div>\n  </nav>\n  <div class=\"container-fluid\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.ts":
/*!**********************************!*\
  !*** ./src/app/navbar/navbar.ts ***!
  \**********************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    NavbarComponent.prototype.checkStatus = function () {
        var _this = this;
        this.userService.checkStatus().then(function (response) { return _this.loggedIn = response; });
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .then(function () {
            return _this.router.navigate(['tk/home']);
        });
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function () {
            _this.checkStatus();
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.html */ "./src/app/navbar/navbar.html"),
            styles: [__webpack_require__(/*! ./navbar.css */ "./src/app/navbar/navbar.css")],
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Profile</h1>\n  <i *ngIf=\"!edit\" class=\"btn btn-info float-left fas fa-toggle-off\" (click)=\"toggleEdit()\" style=\"margin-bottom: 10px\">\n    Edit</i>\n  <i *ngIf=\"edit\" class=\"btn btn-info float-left fas fa-toggle-on\" (click)=\"toggleEdit()\" style=\"margin-bottom: 10px\">\n    Edit</i>\n  <br/>\n\n  <div *ngIf=\"edit\" class=\"container\">\n    <input [(ngModel)]=\"user.username\"\n           placeholder=\"username\"\n           class=\"form-control\"/>\n    <input [(ngModel)]=\"user.password\"\n           placeholder=\"password\"\n           class=\"form-control\"\n           type=\"password\"/>\n    <input [(ngModel)]=\"user.firstName\"\n           placeholder=\"first name\"\n           class=\"form-control\"/>\n    <input [(ngModel)]=\"user.lastName\"\n           placeholder=\"last name\"\n           class=\"form-control\"/>\n    <input [(ngModel)]=\"user.email\"\n           placeholder=\"email\"\n           class=\"form-control\"/>\n    <input [(ngModel)]=\"user.phone\"\n           placeholder=\"Phone\"\n           class=\"form-control\"/>\n    <input [(ngModel)]=\"user.address\"\n           placeholder=\"Address\"\n           class=\"form-control\"/>\n    <input [(ngModel)]=\"user.img_path\"\n           placeholder=\"Image url\"\n           class=\"form-control\"/>\n    <button (click)=\"update(user)\"\n            class=\"btn btn-primary btn-block \"\n            style=\"margin-top: 10px\">\n\n\n      Update\n    </button>\n  </div>\n\n  <div *ngIf=\"!edit\" class=\"text-center container row\">\n    <div class=\"col-md-6 col-lg6\">\n      <img src=\"{{user.img_path}}\" alt=\"Smiley face\" width=\"400px\" class=\"rounded img-fluid mx-auto d-block\" style=\"border: 2px solid white;\"/>\n    </div>\n    <div class=\"col-md-6 col-lg6\">\n      <!--<div class=\"row\">-->\n        <!--<div class=\"col-6\">-->\n        <!--<ul class=\"list-group list-group-flush\">-->\n          <!--<li class=\"list-group-item\"> <strong>Username: </strong></li>-->\n          <!--<li class=\"list-group-item\"> <strong>First Name:</strong> </li>-->\n          <!--<li class=\"list-group-item\"> <strong>Last Name: </strong></li>-->\n          <!--<li class=\"list-group-item\"> <strong>Email: </strong></li>-->\n          <!--<li class=\"list-group-item\"> <strong>Phone: </strong></li>-->\n          <!--<li class=\"list-group-item\"> <strong>Address: </strong></li>-->\n        <!--</ul>-->\n        <!--</div>-->\n        <!--<div class=\"col-6 \">-->\n        <!--<ul class=\"list-group list-group-flush\">-->\n          <!--<li class=\"list-group-item\"> {{user.username}}</li>-->\n          <!--<li class=\"list-group-item\"> {{user.firstName}}</li>-->\n          <!--<li class=\"list-group-item\">{{user.lastName}} </li>-->\n          <!--<li class=\"list-group-item\"> {{user.email}} </li>-->\n          <!--<li class=\"list-group-item\"> {{user.phone}} </li>-->\n          <!--<li class=\"list-group-item\">{{user.address}} </li>-->\n        <!--</ul>-->\n        <!--</div>-->\n      <!--</div>-->\n\n      <div class=\"container bg-light\">\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item bg-light\"><h3 class=\"float-left\"><strong>Username:</strong> </h3> <h5 style=\"padding-top:8px\" class=\"float-right \"><em>{{user.username}}</em></h5></li>\n          <li class=\"list-group-item bg-light\"><h3 class=\"float-left\"><strong>First Name:</strong> </h3> <h5 style=\"padding-top:8px\" class=\"float-right\"><em>{{user.firstName}}</em></h5></li>\n          <li class=\"list-group-item bg-light\"><h3 class=\"float-left\"><strong>Last Name:</strong> </h3> <h5 style=\"padding-top:8px\" class=\"float-right\"><em>{{user.lastName}}</em></h5></li>\n          <li class=\"list-group-item bg-light\"><h3 class=\"float-left\"><strong>Email:</strong> </h3> <h5 style=\"padding-top:8px\" class=\"float-right\"><em>{{user.email}}</em></h5></li>\n          <li class=\"list-group-item bg-light\"><h3 class=\"float-left\"><strong>Phone:</strong> </h3> <h5 style=\"padding-top:8px\" class=\"float-right\"><em>{{user.phone}}</em></h5></li>\n          <li class=\"list-group-item bg-light\"><h3 class=\"float-left\"><strong>Address:</strong> </h3> <h5 style=\"padding-top:8px\" class=\"float-right\"><em>{{user.address}}</em></h5></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div style=\"margin-top: 10px\" class=\"container\">\n    <button *ngIf=\"!admin\" class=\"btn btn-block btn-secondary\" routerLink=\"\">Home</button>\n    <button *ngIf=\"admin\" class=\"btn btn-block btn-secondary\" routerLink=\"/admin\">Administration</button>\n    <button class=\"btn btn-block btn-danger\" (click)=\"logout()\">Logout</button>\n  </div>\n\n  <div *ngIf=\"!edit && myCourses.length !== 0\" class=\"container text-center\">\n    <br/>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <h3> Course</h3>\n        <ul class=\"list-group list-group-flush\">\n          <li *ngFor=\"let course of myCourses\" routerLink=\"/course/{{course.id}}\"\n              class=\"list-group-item list-group-item-action\">\n            <h5>{{course.title}} </h5>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-6\" >\n        <h3> Section</h3>\n        <ul class=\"list-group list-group-flush\">\n          <li *ngFor=\"let section of sections\" class=\"list-group-item list-group-item-light\">\n            <h5>{{section.name}}</h5>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, service, sectionService, courseService) {
        this.router = router;
        this.service = service;
        this.sectionService = sectionService;
        this.courseService = courseService;
        this.user = new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.admin = false;
        this.sections = [];
        this.myCourses = [];
    }
    ProfileComponent.prototype.toggleEdit = function () {
        this.edit = !this.edit;
    };
    ProfileComponent.prototype.update = function (u) {
        var _this = this;
        if (u.img_path === '') {
            u.img_path = 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100';
        }
        this.service.updateUser(u).then(function (resp) {
            _this.service
                .profile()
                .then(function (user) {
                _this.user = user;
                console.log(user);
            });
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.service.logout()
            .then(function () {
            return _this.router.navigate(['tk/home']);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.edit = false;
        this.service
            .profile()
            .then(function (user) {
            _this.user = user;
            if (user.role === 'admin') {
                _this.admin = true;
            }
        });
        this.sectionService.findSectionsForStudent()
            .then(function (sections) { return __awaiter(_this, void 0, void 0, function () {
            var _i, sections_1, en, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _i = 0, sections_1 = sections;
                        _c.label = 1;
                    case 1:
                        if (!(_i < sections_1.length)) return [3 /*break*/, 4];
                        en = sections_1[_i];
                        this.sections.push(en.section);
                        _a = this.myCourses;
                        _b = this.myCourses.length;
                        return [4 /*yield*/, this.courseService.findCourseById(en.section.courseId)];
                    case 2:
                        _a[_b] = _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log(this.sections);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"], _services_section_service_client__WEBPACK_IMPORTED_MODULE_4__["SectionServiceClient"], _services_course_service_client__WEBPACK_IMPORTED_MODULE_5__["CourseServiceClient"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Form */\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 400px;\r\n  margin: 0 auto 100px;\r\n  padding: 30px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  text-align: center;\r\n}\r\n.form .thumbnail {\r\n  background: rgb(85, 85, 181);\r\n  width: 150px;\r\n  height: 150px;\r\n  margin: 0 auto 30px;\r\n  padding: 50px 30px;\r\n  border-top-left-radius: 100%;\r\n  border-top-right-radius: 100%;\r\n  border-bottom-left-radius: 100%;\r\n  border-bottom-right-radius: 100%;\r\n  box-sizing: border-box;\r\n}\r\n.form .thumbnail img {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.form .errors {\r\n  color: white;\r\n  background: #EF3B3A;\r\n}\r\n.form input {\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  border: 0;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n.form button {\r\n  outline: 0;\r\n  background: rgb(85, 85, 181);\r\n  width: 100%;\r\n  border: 0;\r\n  padding: 15px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  border-bottom-right-radius: 3px;\r\n  color: #FFFFFF;\r\n  font-size: 14px;\r\n  transition: all 0.3 ease;\r\n  cursor: pointer;\r\n}\r\n.form .message {\r\n  margin: 15px 0 0;\r\n  color: #b3b3b3;\r\n  font-size: 12px;\r\n}\r\n.form .message a {\r\n  color: rgb(85, 85, 181);\r\n  text-decoration: none;\r\n}\r\n.form .register-form {\r\n  display: none;\r\n}\r\n.container {\r\n  position: relative;\r\n  z-index: 1;\r\n  max-width: 300px;\r\n  margin: 0 auto;\r\n}\r\n.container:before, .container:after {\r\n  content: \"\";\r\n  display: block;\r\n  clear: both;\r\n}\r\n.container .info {\r\n  margin: 50px auto;\r\n  text-align: center;\r\n}\r\n.container .info h1 {\r\n  margin: 0 0 15px;\r\n  padding: 0;\r\n  font-size: 36px;\r\n  font-weight: 300;\r\n  color: #1a1a1a;\r\n}\r\n.container .info span {\r\n  color: #4d4d4d;\r\n  font-size: 12px;\r\n}\r\n.container .info span a {\r\n  color: #000000;\r\n  text-decoration: none;\r\n}\r\n.container .info span .fa {\r\n  color: rgb(85, 85, 181);\r\n}\r\n/* END Form */\r\n/* Demo Purposes */\r\nbody {\r\n  background: #ccc;\r\n  font-family: \"Roboto\", sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\nbody:before {\r\n  content: \"\";\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n#video {\r\n  z-index: -99;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  width: auto;\r\n  height: auto;\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n  transform: translateX(-50%) translateY(-50%);\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<br/>-->\n<!--<div class=\"container text-center\">-->\n  <!--<h1>Register</h1>-->\n  <!--<div class=\"container\">-->\n\n  <!--</div>-->\n  <!--<br/>-->\n\n\n  <!--<button (click)=\"register(username, password, password2)\"-->\n          <!--class=\"btn btn-primary btn-block container\">-->\n    <!--Register-->\n  <!--</button>-->\n  <!--<div class=\"row\">-->\n    <!--<div class=\"col-md-6 \">-->\n    <!--<button class=\"btn btn-block\" routerLink=\"/home\">Home</button>-->\n    <!--</div>-->\n    <!--<div class=\"col-md-6\">-->\n    <!--<button class=\"btn btn-block\" routerLink=\"/login\">Login</button>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n\n<div class=\"form\">\n  <div class=\"thumbnail\"><img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg\"/></div>\n  <div class=\"errors\">\n    <div *ngIf=\"noUsernameError\">\n      <p> Username field is empty </p>\n    </div>\n    <div *ngIf=\"noPasswordError\" >\n      <p> Password field is empty </p>\n    </div>\n    <div *ngIf=\"noPassword2Error\">\n      <p> Verification password field is empty </p>\n    </div>\n    <div *ngIf=\"usernameError\">\n      <p> Username is already taken </p>\n    </div>\n    <div *ngIf=\"passwordError\">\n      <p> Passwords do not match </p>\n    </div>\n  </div>\n  <div>\n    <input type=\"text\" [(ngModel)]=\"username\"\n    placeholder=\"Username\"\n    class=\"form-control\"/>\n    <input type=\"password\"  [(ngModel)]=\"password\"\n    placeholder=\"Password\"\n    class=\"form-control\"/>\n    <input type=\"password\" [(ngModel)]=\"password2\"\n    placeholder=\"Verify password\"\n    class=\"form-control\"/>\n    <button (click)=\"register()\"\n    class=\"btn\">\n    Register\n    </button>\n    <p class=\"message\">Already registered? <a routerLink=\"/login\">Sign In</a></p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
        this.img_path = 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100';
    }
    RegisterComponent.prototype.resetErrors = function () {
        this.usernameError = false;
        this.passwordError = false;
        this.noUsernameError = false;
        this.noPasswordError = false;
        this.noPassword2Error = false;
    };
    RegisterComponent.prototype.reset = function () {
        this.username = '';
        this.password = '';
        this.password2 = '';
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.resetErrors();
        if (this.username === '') {
            this.noUsernameError = true;
        }
        else {
            if (this.password === '') {
                this.noPasswordError = true;
            }
            else {
                if (this.password2 === '') {
                    this.noPassword2Error = true;
                }
                else {
                    if (this.password === this.password2) {
                        this.service.findUserByUsername(this.username)
                            .then(function (response) {
                            console.log(response);
                            if (response === null) {
                                _this.service
                                    .createUser(_this.username, _this.password, _this.img_path)
                                    .then(function () { return _this.router.navigate(['profile']); });
                            }
                            else {
                                _this.usernameError = true;
                                // alert('Username is already taken');
                            }
                        });
                    }
                    else {
                        this.passwordError = true;
                        // alert('Passwords do not match');
                    }
                }
            }
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
        this.reset();
        this.resetErrors();
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/section-list/section-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/section-list/section-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section-list/section-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/section-list/section-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container-fluid\">-->\n  <h1> All sections for the course {{course.title}} </h1>\n\n    <table class=\"table table-light table-hover\">\n      <thead class=\"thead-dark\">\n      <th>Section name</th>\n      <th>Number of Seats</th>\n      <th>Action</th>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let section of sections\">\n        <td> {{section.name}}</td>\n        <td> {{section.seats}}</td>\n        <td>\n          <div *ngIf=\"section.seats <= 0\" style=\"color: red\"> Section is full</div>\n          <button *ngIf=\"status && enrollment.section === 0 && section.seats>0\" (click)=\"enroll(section._id)\"\n                  class=\"btn btn-primary\">Enroll\n          </button>\n          <button *ngIf=\"status && enrollment.section === section._id\" (click)=\"drop(section._id)\"\n                  class=\"btn btn-danger\">Drop section\n          </button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n\n    <!--<ul class=\"list-group\">-->\n      <!--<li *ngFor=\"let section of sections\" class=\"list-group-item list-group-item-action\">-->\n        <!--{{section.name}}-->\n        <!--{{section.seats}}-->\n        <!--<div *ngIf=\"section.seats <= 0\" style=\"color: red\" class=\"float-right\"> Section is full</div>-->\n        <!--<button *ngIf=\"status && enrollment.section === 0 && section.seats>0\" (click)=\"enroll(section._id)\"-->\n                <!--class=\"float-right btn btn-primary\">Enroll-->\n        <!--</button>-->\n        <!--<button *ngIf=\"status && enrollment.section === section._id\" (click)=\"drop(section._id)\"-->\n                <!--class=\"float-right btn btn-danger\">Drop section-->\n        <!--</button>-->\n      <!--</li>-->\n    <!--</ul>-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/section-list/section-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/section-list/section-list.component.ts ***!
  \********************************************************/
/*! exports provided: SectionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionListComponent", function() { return SectionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SectionListComponent = /** @class */ (function () {
    function SectionListComponent(courseService, userService, service, router, route) {
        var _this = this;
        this.courseService = courseService;
        this.userService = userService;
        this.service = service;
        this.router = router;
        this.route = route;
        this.sectionName = '';
        this.seats = '';
        this.courseId = '';
        this.sections = [];
        this.route.params.subscribe(function (params) { return _this.loadSections(params['courseId']); });
    }
    SectionListComponent.prototype.loadSections = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.service
            .findSectionsForCourse(courseId)
            .then(function (sections) { return _this.sections = sections; });
        this.courseService.findCourseById(courseId)
            .then(function (course) { return _this.course = course; });
    };
    SectionListComponent.prototype.checkEnrollment = function (courseId) {
        var _this = this;
        this.userService.checkStatus().then(function (st) { return _this.status = st; }).then(function () {
            if (_this.status) {
                _this.service.checkSectionEnrollment(courseId)
                    .then(function (response) {
                    _this.enrollment = response;
                });
            }
        });
    };
    SectionListComponent.prototype.enroll = function (sectionId) {
        var _this = this;
        // alert(section._id);
        this.service
            .enrollStudentInSection(this.courseId, sectionId)
            .then(function () { return _this.loadSections(_this.courseId); })
            .then(function () { return _this.checkEnrollment(_this.courseId); });
    };
    SectionListComponent.prototype.drop = function (sectionId) {
        var _this = this;
        this.service
            .dropStudentInSection(sectionId)
            .then(function () { return _this.loadSections(_this.courseId); })
            .then(function () { return _this.checkEnrollment(_this.courseId); });
    };
    SectionListComponent.prototype.ngOnInit = function () {
        this.checkEnrollment(this.courseId);
    };
    SectionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-list',
            template: __webpack_require__(/*! ./section-list.component.html */ "./src/app/section-list/section-list.component.html"),
            styles: [__webpack_require__(/*! ./section-list.component.css */ "./src/app/section-list/section-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_4__["CourseServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SectionListComponent);
    return SectionListComponent;
}());



/***/ }),

/***/ "./src/app/services/course.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course.service.client.ts ***!
  \***************************************************/
/*! exports provided: CourseServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseServiceClient", function() { return CourseServiceClient; });
var HOST = 'https://tk-course-management.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var COURSE_URL = HOST + 'api/course';
var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
    }
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch(COURSE_URL)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.findCourseById = function (courseId) {
        return fetch(COURSE_URL + '/' + courseId)
            .then(function (response) { return response.json(); });
    };
    return CourseServiceClient;
}());



/***/ }),

/***/ "./src/app/services/lesson.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/lesson.service.client.ts ***!
  \***************************************************/
/*! exports provided: LessonServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonServiceClient", function() { return LessonServiceClient; });
var HOST = 'https://tk-course-management.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var LessonServiceClient = /** @class */ (function () {
    function LessonServiceClient() {
    }
    LessonServiceClient.prototype.findLessonsForModule = function (courseId, moduleId) {
        return fetch(HOST + 'api/course/' + courseId + '/module/' + moduleId + '/lesson')
            .then(function (response) { return response.json(); });
    };
    return LessonServiceClient;
}());



/***/ }),

/***/ "./src/app/services/module.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/module.service.client.ts ***!
  \***************************************************/
/*! exports provided: ModuleServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleServiceClient", function() { return ModuleServiceClient; });
var HOST = 'https://tk-course-management.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var MODULE_URL = HOST + 'api/course/COURSE_ID/module';
var ModuleServiceClient = /** @class */ (function () {
    function ModuleServiceClient() {
    }
    ModuleServiceClient.prototype.findModulesForCourse = function (courseId) {
        return fetch(MODULE_URL.replace('COURSE_ID', courseId))
            .then(function (response) { return response.json(); });
    };
    return ModuleServiceClient;
}());



/***/ }),

/***/ "./src/app/services/section.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/section.service.client.ts ***!
  \****************************************************/
/*! exports provided: SectionServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionServiceClient", function() { return SectionServiceClient; });
var HOST = 'https://tk-course-management-nodejs.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var SECTION_URL = HOST + 'api/course/COURSEID/section';
var SectionServiceClient = /** @class */ (function () {
    function SectionServiceClient() {
    }
    SectionServiceClient.prototype.findSectionsForStudent = function () {
        var url = HOST + 'api/student/section';
        return fetch(url, {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.enrollStudentInSection = function (courseId, sectionId) {
        var url = HOST + 'api/course/' + courseId + '/section/' + sectionId + '/enrollment';
        return fetch(url, {
            method: 'post',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.dropStudentInSection = function (sectionId) {
        var url = HOST + 'api/section/' + sectionId + '/drop';
        return fetch(url, {
            method: 'delete',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.checkSectionEnrollment = function (courseId) {
        return fetch(HOST + 'api/course/' + courseId + '/enrollment/check', {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.findSectionsForCourse = function (courseId) {
        return fetch(SECTION_URL.replace('COURSEID', courseId))
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.createSection = function (courseId, name, seats) {
        var section = { courseId: courseId, name: name, seats: seats };
        return fetch(SECTION_URL.replace('COURSEID', courseId), {
            method: 'post',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SectionServiceClient.prototype.updateSection = function (sectionId, name, seats) {
        var url = HOST + 'api/section/' + sectionId + '/update';
        var section = { name: name, seats: seats };
        return fetch(url, {
            method: 'put',
            body: JSON.stringify(section),
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SectionServiceClient.prototype.deleteSection = function (sectionId) {
        var url = HOST + 'api/section/' + sectionId + '/delete';
        return fetch(url, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return SectionServiceClient;
}());



/***/ }),

/***/ "./src/app/services/topic.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/topic.service.client.ts ***!
  \**************************************************/
/*! exports provided: TopicServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicServiceClient", function() { return TopicServiceClient; });
var HOST = 'https://tk-course-management.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var TopicServiceClient = /** @class */ (function () {
    function TopicServiceClient() {
    }
    TopicServiceClient.prototype.findTopicsForLesson = function (courseId, moduleId, lessonId) {
        return fetch(HOST + 'api/course/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic')
            .then(function (response) { return response.json(); });
    };
    return TopicServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
var HOST = 'https://tk-course-management-nodejs.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
    }
    UserServiceClient.prototype.findUserById = function (userId) {
        return fetch(HOST + 'api/user/' + userId)
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.findUserByUsername = function (username) {
        return fetch(HOST + 'api/user/username/' + username)
            .then(function (response) { return response.json(); });
    };
    // findUserByCredentials(username, password) {
    //   return fetch('http://localhost:4000/api/user/username/' + username + '/password/' + password)
    //     .then(response => response.json());
    // }
    UserServiceClient.prototype.checkStatus = function () {
        return fetch(HOST + 'api/status', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.updateUser = function (user) {
        return fetch(HOST + 'api/user/update', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'put',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch(HOST + 'api/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch(HOST + 'api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch(HOST + 'api/profile', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.isAdmin = function () {
        return fetch(HOST + 'api/admin/status', {
            credentials: 'include',
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.createUser = function (username, password, path) {
        var user = {
            username: username,
            password: password,
            img_path: path
        };
        return fetch(HOST + 'api/user', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetServiceClient", function() { return WidgetServiceClient; });
var HOST = 'https://tk-course-management.herokuapp.com/';
// const HOST = 'http://localhost:4000/';
var WidgetServiceClient = /** @class */ (function () {
    function WidgetServiceClient() {
    }
    WidgetServiceClient.prototype.findWidgetsForTopic = function (topicId) {
        return fetch(HOST + 'api/topic/' + topicId + '/widget')
            .then(function (response) { return response.json(); });
    };
    return WidgetServiceClient;
}());



/***/ }),

/***/ "./src/app/topic-pills/topic-pills.component.css":
/*!*******************************************************!*\
  !*** ./src/app/topic-pills/topic-pills.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/topic-pills/topic-pills.component.html":
/*!********************************************************!*\
  !*** ./src/app/topic-pills/topic-pills.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills\">\n  <li *ngFor=\"let topic of topics\"\n      class=\"nav-item\">\n    <button class=\"btn-sm list-group-item list-group-item-action\"\n       [ngClass]=\"{'btn-dark active': topic.id == topicId}\"\n       routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topic.id}}\">\n      {{topic.title}}\n    </button>\n  </li>\n</ul>\n\n<app-widget-list></app-widget-list>\n"

/***/ }),

/***/ "./src/app/topic-pills/topic-pills.component.ts":
/*!******************************************************!*\
  !*** ./src/app/topic-pills/topic-pills.component.ts ***!
  \******************************************************/
/*! exports provided: TopicPillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPillsComponent", function() { return TopicPillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/topic.service.client */ "./src/app/services/topic.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicPillsComponent = /** @class */ (function () {
    function TopicPillsComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.topics = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    TopicPillsComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.topicId = params['topicId'];
        this.loadTopics(this.courseId, this.moduleId, this.lessonId);
    };
    TopicPillsComponent.prototype.loadTopics = function (courseId, moduleId, lessonId) {
        var _this = this;
        this.moduleId = moduleId;
        console.log(moduleId);
        this.service.findTopicsForLesson(courseId, moduleId, lessonId)
            .then(function (topics) { return _this.topics = topics; });
    };
    TopicPillsComponent.prototype.ngOnInit = function () {
    };
    TopicPillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-pills',
            template: __webpack_require__(/*! ./topic-pills.component.html */ "./src/app/topic-pills/topic-pills.component.html"),
            styles: [__webpack_require__(/*! ./topic-pills.component.css */ "./src/app/topic-pills/topic-pills.component.css")]
        }),
        __metadata("design:paramtypes", [_services_topic_service_client__WEBPACK_IMPORTED_MODULE_2__["TopicServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TopicPillsComponent);
    return TopicPillsComponent;
}());



/***/ }),

/***/ "./src/app/widget-list/widget-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br/>\n<div *ngFor=\"let widget of widgets\" class=\"text-center\">\n  <div [ngSwitch]=\"widget.widgetType\">\n    <div *ngSwitchCase=\"'Heading'\">\n      <div [ngSwitch]=\"widget.size\">\n        <h1 *ngSwitchCase=\"'1'\">{{widget.text}}</h1>\n        <h2 *ngSwitchCase=\"'2'\">{{widget.text}}</h2>\n        <h3 *ngSwitchCase=\"'3'\">{{widget.text}}</h3>\n        <h4 *ngSwitchCase=\"'4'\">{{widget.text}}</h4>\n        <h5 *ngSwitchCase=\"'5'\">{{widget.text}}</h5>\n        <h6 *ngSwitchCase=\"'6'\">{{widget.text}}</h6>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'Paragraph'\">\n      <div [ngSwitch]=\"widget.size\">\n        {{widget.text}}\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'List'\">\n      <div [ngSwitch]=\"widget.listType\">\n        <div *ngSwitchCase=\"'Ordered'\">\n          <ol class=\"text-left\">\n            <li class=\"\"\n                *ngFor=\"let item of widget.text.split('\\n')\">\n              {{item}}\n            </li>\n          </ol>\n        </div>\n        <div *ngSwitchCase=\"'Unordered'\">\n          <ul class=\"text-left\">\n            <li class=\"\"\n                *ngFor=\"let item of widget.text.split('\\n')\">\n              {{item}}\n            </li>\n          </ul>\n        </div>\n      </div>\n\n    </div>\n    <div *ngSwitchCase=\"'Link'\">\n      <a href=\"{{widget.href}}\">{{widget.text}}</a>\n    </div>\n    <div *ngSwitchCase=\"'Image'\">\n      <img src=\"{{widget.src}}\" width=\"{{widget.width}}\"/>\n    </div>\n\n    <div *ngSwitchCase=\"'Exam'\">\n      <h1>Exam Widget</h1>\n    </div>\n    <div *ngSwitchCase=\"'Assignment'\">\n      <h1>Assignment Widget</h1>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.ts ***!
  \******************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.widgets = [];
        this.route.params.subscribe(function (params) { return _this.setContext(params); });
    }
    WidgetListComponent.prototype.setContext = function (params) {
        this.context = params;
        this.loadWidgets(params.topicId);
    };
    WidgetListComponent.prototype.loadWidgets = function (topicId) {
        var _this = this;
        console.log(topicId);
        this.service.findWidgetsForTopic(topicId)
            .then(function (widgets) {
            console.log(widgets);
            _this.widgets = widgets;
            _this.widgets.sort(function (a, b) { return a.widgetOrder - b.widgetOrder; });
        });
    };
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    WidgetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], WidgetListComponent);
    return WidgetListComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tim\Documents\WebDev\tk-course-management-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map