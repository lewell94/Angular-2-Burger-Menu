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
var ButtonComponent = (function () {
    function ButtonComponent() {
        this.nextStage = new core_1.EventEmitter();
        this.textOptions = {
            default: 'Next Step',
            final: 'Finish'
        };
        this.text = this.textOptions.default;
    }
    ButtonComponent.prototype.ngOnChanges = function (change) {
        if (change.stage) {
            if (change.stage.currentValue === 'sauce') {
                this.text = this.textOptions.final;
            }
        }
    };
    ButtonComponent.prototype.updateStage = function () {
        var CURRENT = this.stage;
        if (this.choices[CURRENT] === '') {
            alert('Please select a choice');
            return;
        }
        switch (CURRENT) {
            case 'size':
                this.stage = 'patty';
                break;
            case 'patty':
                this.stage = 'salad';
                break;
            case 'salad':
                this.stage = 'sauce';
                break;
            case 'sauce':
                this.stage = 'final';
                break;
        }
        this.nextStage.emit({
            value: this.stage
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ButtonComponent.prototype, "stage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ButtonComponent.prototype, "choices", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ButtonComponent.prototype, "nextStage", void 0);
    ButtonComponent = __decorate([
        core_1.Component({
            selector: 'menu-button',
            template: '<button class="menu__button" (click)="updateStage()">{{text}}</button>'
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonComponent);
    return ButtonComponent;
}());
exports.ButtonComponent = ButtonComponent;
//# sourceMappingURL=button.component.js.map