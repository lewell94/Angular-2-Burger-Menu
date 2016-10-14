import { Component, Input, Pipe, PipeTransform } from '@angular/core';

@Component({
	selector: 'burger',
	template: `
	<ul class="burger__list">
		<li *ngFor="let choice of choices | choice" class="burger__option">
			{{choice.key}}: {{choice.value}}
		</li>
	</ul>
	`
})
export class BurgerComponent {

	@Input() choices;
}