import { Injectable } from '@angular/core';

@Injectable()
export class StagesService {
	currentStage = 'size';

	updateStage(): void {
		
		const CURRENT = this.currentStage;

		let update = '';

		switch ( CURRENT ) {

			case 'size' :
				update = 'patty';
				break;

			case 'patty' :
				update = 'salad';
				break;

			case 'salad' :
				update = 'sauce';
				break;

			case 'sauce' :
				update = 'finish';
				break;
		}

		this.currentStage = update;
	}
}