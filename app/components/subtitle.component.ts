import { Component, Input } from '@angular/core';

@Component({
	selector: 'menu-subtitle',
	template: '<h3>{{subtitle}}</h3>'
})
export class SubtitleComponent {

	@Input() stage: string;

	titles = {
		size  : 'Select your burger size',
		patty : 'Select your patty',
		salad : 'Select your salad',
		sauce : 'Select your sauce'
	};

	subtitle = this.titles.size;
}