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
var ListComponent = (function () {
    function ListComponent() {
        this.choiceSelected = new core_1.EventEmitter();
        this.lists = {
            size: ['Quarter Pound', 'Half Pound', 'Full Pound'],
            patty: ['Beef', 'Chicken', 'Vegetable'],
            salad: ['Lettuce', 'Tomato', 'Gherkin'],
            sauce: ['Mayonnaise', 'Ketchup', 'BBQ Sauce']
        };
        this.items = this.lists.size;
    }
    ListComponent.prototype.ngOnChanges = function (change) {
        if (change.stage) {
            this.items = this.lists[this.stage];
        }
    };
    ListComponent.prototype.selectItem = function (e) {
        var CLICKED = document.querySelectorAll('li.clicked');
        if (CLICKED.length > 0) {
            for (var i = 0; i < CLICKED.length; i++) {
                CLICKED[i].classList.remove('clicked');
            }
        }
        e.target.classList.add('clicked');
        this.choiceSelected.emit({
            value: e.target.innerText
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ListComponent.prototype, "stage", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ListComponent.prototype, "choiceSelected", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: 'menu-list',
            template: "\n\t<ul class=\"menu__list\">\n\t\t<li *ngFor=\"let item of items\" (click)=\"selectItem($event)\">\n\t\t\t{{item}}\n\t\t</li>\n\t</ul>\n    ",
            providers: [stages_service_1.StagesService]
        }), 
        __metadata('design:paramtypes', [])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map