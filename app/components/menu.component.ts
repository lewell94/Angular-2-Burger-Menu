import { Component } from '@angular/core';

import { StagesService } from '../services/stages.service';

@Component({
	selector: 'burger-menu',
	template: `
	<h1>Burger Menu</h1>
	<menu-subtitle [stage]="hello"></menu-subtitle>
	<menu-list [stage]="hello"></menu-list>
	<menu-button [stage]="hello"></menu-button>
	`,
	providers: [ StagesService ]
})
export class MenuComponent {

	constructor(private StagesService: StagesService) {}

	nextStage(): void {

		this.StagesService.updateStage();
	}

	hello : string = this.StagesService.currentStage;
}