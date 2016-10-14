import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'menu-button',
	template: '<button class="menu__button" (click)="updateStage()">{{text}}</button>'
})
export class ButtonComponent {

	ngOnChanges(change): void {

		if ( change.stage ) {
			if ( change.stage.currentValue === 'sauce' ) {
				this.text = this.textOptions.final;
			}
		}
	}

	@Input() stage: string;

	@Input() choices;

	@Output() nextStage: EventEmitter<any> = new EventEmitter();

	updateStage(): void {

		const CURRENT = this.stage;

		if ( this.choices[CURRENT] === '' ) {
			alert('Please select a choice');
			return;
		}

		switch ( CURRENT ) {

			case 'size' :
				this.stage = 'patty';
				break;

			case 'patty' :
				this.stage = 'salad';
				break;

			case 'salad' :
				this.stage = 'sauce';
				break;

			case 'sauce' :
				this.stage = 'final';
				break;
		}

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