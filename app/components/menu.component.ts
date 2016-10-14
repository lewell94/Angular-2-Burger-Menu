import { Component } from '@angular/core';

import { StagesService } from '../services/stages.service';

@Component({
	selector: 'burger-menu',
	template: `
	<h1>Burger Menu</h1>
	<menu-subtitle [stage]="stage"></menu-subtitle>
	<menu-list [stage]="stage"></menu-list>
	<menu-button [stage]="stage" (nextStage)="updateStage($event)"></menu-button>
	`,
	providers: [ StagesService ]
})
export class MenuComponent {

	constructor(private StagesService: StagesService) {}

	updateStage(e): void {
		this.stage = e.value;
	}

	stage: string = this.StagesService.currentStage;
}