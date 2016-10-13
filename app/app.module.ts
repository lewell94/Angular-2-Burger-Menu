import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SubtitleComponent } from './components/subtitle.component';
import { ListComponent }     from './components/list.component';
import { ButtonComponent }   from './components/button.component';

@NgModule({
	imports      : [ BrowserModule ],
	declarations : [
		SubtitleComponent,
		ListComponent,
		ButtonComponent
	],
	bootstrap    : [
		SubtitleComponent,
		ListComponent,
		ButtonComponent
	]
})
export class AppModule {}