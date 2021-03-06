import { Component } from '@angular/core';

import { StagesService } from '../services/stages.service';

@Component({
	selector: 'burger-menu',
	template: `
	<h1>Burger Menu</h1>
	<menu-subtitle [stage]="stage"></menu-subtitle>
	<menu-list *ngIf="stage !== 'final'" [stage]="stage" (choiceSelected)="saveChoice($event)"></menu-list>
	<menu-button *ngIf="stage !== 'final'" [stage]="stage" [choices]="choices" (nextStage)="updateStage($event)"></menu-button>
	<burger *ngIf="stage === 'final'" [choices]="choices"></burger>
	`,
	providers: [ StagesService ]
})
export class MenuComponent {

	constructor(private StagesService: StagesService) {}

	updateStage(e): void {
		this.stage = e.value;
	}

	saveChoice(e): void {
		this.choices[this.stage] = e.value;
	}

	stage: string = this.StagesService.currentStage;

	choices = {
		size  : '',
		patty : '',
		salad : '',
		sauce : ''
	}
}