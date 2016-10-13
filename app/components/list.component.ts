import { Component } from '@angular/core';

@Component({
	selector: 'menu-list',
	template: `
	<ul class="menu__list">
		<li *ngFor="let item of items">
			{{item}}
		</li>
	</ul>
    `
})
export class ListComponent {

	lists = {
		size  : ['Quarter Pound', 'Half Pound', 'Full Pound'],
		patty : ['Beef', 'Chicken', 'Vegetable'],
		salad : ['Lettuce', 'Tomato', 'Gherkin'],
		sauce : ['Mayonnaise', 'Ketchup', 'BBQ Sauce']
	}
	
	items = this.lists.size;
}