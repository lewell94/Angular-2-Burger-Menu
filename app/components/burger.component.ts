import { Component, Input } from '@angular/core';

@Component({
	selector: 'burger',
	template: `
	<ul class="burger__list">
		
	</ul>
	`
})
export class BurgerComponent {

	@Input() choices;
}