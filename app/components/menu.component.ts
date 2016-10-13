import { Component } from '@angular/core';

import { StagesService } from '../services/stages.service';

@Component({
	selector: 'burger-menu',
	template: `
	<h1>Burger Menu</h1>
	<menu-subtitle></menu-subtitle>
	<menu-list></menu-list>
	<menu-button></menu-button>
	`,
	providers: [ StagesService ]
})
export class MenuComponent {

	constructor(private StagesService: StagesService) {}

	nextStage(): void {

		this.StagesService.updateStage();

		if ( this.StagesService.currentStage === 'sauce' ) {
			this.text = this.textOptions.final;
		}
	}
}