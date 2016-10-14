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
var BurgerComponent = (function () {
    function BurgerComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BurgerComponent.prototype, "choices", void 0);
    BurgerComponent = __decorate([
        core_1.Component({
            selector: 'burger',
            template: "\n\t<ul class=\"burger__list\">\n\t\t<li *ngFor=\"let choice of choices | choice\" class=\"burger__option\">\n\t\t\t{{choice.key}}: {{choice.value}}\n\t\t</li>\n\t</ul>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], BurgerComponent);
    return BurgerComponent;
}());
exports.BurgerComponent = BurgerComponent;
//# sourceMappingURL=burger.component.js.map