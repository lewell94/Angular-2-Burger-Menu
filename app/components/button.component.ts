import { Component, Input } from '@angular/core';

@Component({
	selector: 'menu-button',
	template: '<button class="menu__button">{{text}}</button>'
})
export class ButtonComponent {

	textOptions = {
		default : 'Next Step',
		final   : 'Finish'
	}
	
	text = this.textOptions.default;

	@Input() stage : string;
}