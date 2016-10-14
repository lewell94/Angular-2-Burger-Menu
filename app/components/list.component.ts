import { Component, Input } from '@angular/core';

import { StagesService } from '../services/stages.service';

@Component({
	selector: 'menu-list',
	template: `
	<ul class="menu__list">
		<li *ngFor="let item of items">
			{{item}}
		</li>
	</ul>
    `,
    providers: [ StagesService ]
})
export class ListComponent {

	ngOnChanges(change) {

		if ( change.stage ) {
			this.items = this.lists[this.stage];
		}
	}

	@Input() stage: string;

	lists = {
		size  : ['Quarter Pound', 'Half Pound', 'Full Pound'],
		patty : ['Beef', 'Chicken', 'Vegetable'],
		salad : ['Lettuce', 'Tomato', 'Gherkin'],
		sauce : ['Mayonnaise', 'Ketchup', 'BBQ Sauce']
	}
	
	items = this.lists.size;

	
}