import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'menu-button',
	template: '<button class="menu__button" (click)="updateStage()">{{text}}</button>'
})
export class ButtonComponent {

	@Input() stage : string;

	@Output() nextStage: EventEmitter<any> = new EventEmitter();

	updateStage(): void {

		this.stage = 'patty';
		this.nextStage.emit({
			value: this.stage
		})
	}

	textOptions = {
		default : 'Next Step',
		final   : 'Finish'
	}
	
	text = this.textOptions.default;
}