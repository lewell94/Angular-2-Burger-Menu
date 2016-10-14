import { Component, Input, Output, EventEmitter } from '@angular/core';

import { StagesService } from '../services/stages.service';

@Component({
	selector: 'menu-list',
	template: `
	<ul class="menu__list">
		<li *ngFor="let item of items" (click)="selectItem($event)">
			{{item}}
		</li>
	</ul>
    `,
    providers: [ StagesService ]
})
export class ListComponent {

	ngOnChanges(change): void {

		if ( change.stage ) {
			this.items = this.lists[this.stage];
		}
	}

	@Input() stage: string;

	@Output() choiceSelected: EventEmitter<any> = new EventEmitter();

	selectItem(e): void {

		const CLICKED = document.querySelectorAll('li.clicked');

		if ( CLICKED.length > 0 ) {

			for ( let i = 0; i < CLICKED.length; i++ ) {
				CLICKED[i].classList.remove('clicked');
			}
		}

		e.target.classList.add('clicked');

		this.choiceSelected.emit({
			value: e.target.innerText
		})
	}

	lists = {
		size  : ['Quarter Pound', 'Half Pound', 'Full Pound'],
		patty : ['Beef', 'Chicken', 'Vegetable'],
		salad : ['Lettuce', 'Tomato', 'Gherkin'],
		sauce : ['Mayonnaise', 'Ketchup', 'BBQ Sauce']
	}
	
	items = this.lists.size;

	
}