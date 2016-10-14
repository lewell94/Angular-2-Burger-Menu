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
var SubtitleComponent = (function () {
    function SubtitleComponent() {
        this.titles = {
            size: 'Select your burger size',
            patty: 'Select your patty',
            salad: 'Select your salad',
            sauce: 'Select your sauce'
        };
        this.subtitle = this.titles.size;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SubtitleComponent.prototype, "stage", void 0);
    SubtitleComponent = __decorate([
        core_1.Component({
            selector: 'menu-subtitle',
            template: '<h3>{{subtitle}}</h3>'
        }), 
        __metadata('design:paramtypes', [])
    ], SubtitleComponent);
    return SubtitleComponent;
}());
exports.SubtitleComponent = SubtitleComponent;
//# sourceMappingURL=subtitle.component.js.map