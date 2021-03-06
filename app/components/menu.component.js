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
var stages_service_1 = require('../services/stages.service');
var MenuComponent = (function () {
    function MenuComponent(StagesService) {
        this.StagesService = StagesService;
        this.stage = this.StagesService.currentStage;
        this.choices = {
            size: '',
            patty: '',
            salad: '',
            sauce: ''
        };
    }
    MenuComponent.prototype.updateStage = function (e) {
        this.stage = e.value;
    };
    MenuComponent.prototype.saveChoice = function (e) {
        this.choices[this.stage] = e.value;
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'burger-menu',
            template: "\n\t<h1>Burger Menu</h1>\n\t<menu-subtitle [stage]=\"stage\"></menu-subtitle>\n\t<menu-list *ngIf=\"stage !== 'final'\" [stage]=\"stage\" (choiceSelected)=\"saveChoice($event)\"></menu-list>\n\t<menu-button *ngIf=\"stage !== 'final'\" [stage]=\"stage\" [choices]=\"choices\" (nextStage)=\"updateStage($event)\"></menu-button>\n\t<burger *ngIf=\"stage === 'final'\" [choices]=\"choices\"></burger>\n\t",
            providers: [stages_service_1.StagesService]
        }), 
        __metadata('design:paramtypes', [stages_service_1.StagesService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map