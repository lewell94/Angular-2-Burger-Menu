import { Component } from '@angular/core';

import { StagesService } from '../services/stages.service';

@Component({
	selector: 'menu-button',
	template: '<button class="menu__button" (click)="nextStage()">{{text}}</button>',
	providers: [ StagesService ]
})
export class ButtonComponent {

	constructor(private StagesService: StagesService) {}

	textOptions = {
		default : 'Next Step',
		final   : 'Finish'
	}
	
	text = this.textOptions.default;

	nextStage(): void {

		this.StagesService.updateStage();

		if ( this.StagesService.currentStage === 'sauce' ) {
			this.text = this.textOptions.final;
		}
	}
}