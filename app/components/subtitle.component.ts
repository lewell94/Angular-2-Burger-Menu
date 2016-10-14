import { Component, Input } from '@angular/core';

@Component({
	selector: 'menu-subtitle',
	template: '<h3>{{subtitle}}</h3>'
})
export class SubtitleComponent {

	ngOnChanges(change): void {

		if ( change.stage ) {
			this.subtitle = this.titles[this.stage];
		}
	}

	@Input() stage: string;

	titles = {
		size  : 'Select your burger size',
		patty : 'Select your patty',
		salad : 'Select your salad',
		sauce : 'Select your sauce',
		final : 'Your burger'
	};

	subtitle = this.titles.size;
}