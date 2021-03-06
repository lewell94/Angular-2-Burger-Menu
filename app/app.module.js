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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var menu_component_1 = require('./components/menu.component');
var subtitle_component_1 = require('./components/subtitle.component');
var list_component_1 = require('./components/list.component');
var button_component_1 = require('./components/button.component');
var burger_component_1 = require('./components/burger.component');
var choice_pipe_1 = require('./pipes/choice.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [
                menu_component_1.MenuComponent,
                subtitle_component_1.SubtitleComponent,
                list_component_1.ListComponent,
                button_component_1.ButtonComponent,
                burger_component_1.BurgerComponent,
                choice_pipe_1.ChoicePipe
            ],
            bootstrap: [
                menu_component_1.MenuComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map