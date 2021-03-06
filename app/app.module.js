"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_1 = require("./_directives/index");
var index_2 = require("./_guards/index");
var index_3 = require("./_services/index");
var index_4 = require("./home/index");
var index_5 = require("./login/index");
var index_6 = require("./register/index");
var userheader_component_1 = require("./home/userheader/userheader.component");
var leftpanel_component_1 = require("./home/leftpanel/leftpanel.component");
var middlepanel_component_1 = require("./home/middlepanel/middlepanel.component");
var userdir_component_1 = require("./home/leftpanel/userDirectory/userdir.component");
var groupdir_component_1 = require("./home/leftpanel/groupDirectory/groupdir.component");
var postbox_component_1 = require("./home/middlepanel/postbox/postbox.component");
var comments_component_1 = require("./home/middlepanel/comments/comments.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            index_1.AlertComponent,
            index_4.HomeComponent,
            index_5.LoginComponent,
            index_6.RegisterComponent,
            userheader_component_1.UserHeaderComponent,
            leftpanel_component_1.LeftPanelComponent,
            middlepanel_component_1.MiddlePanelComponent,
            userdir_component_1.UserDirComponent,
            groupdir_component_1.GroupDirComponent,
            postbox_component_1.PostBoxComponent,
            comments_component_1.CommentsComponent
        ],
        providers: [
            index_2.AuthGuard,
            index_3.AlertService,
            index_3.AuthenticationService,
            index_3.UserService,
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map