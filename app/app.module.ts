import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SubtitleComponent } from './components/subtitle.component';
import { ListComponent }     from './components/list.component';

@NgModule({
	imports      : [ BrowserModule ],
	declarations : [
		SubtitleComponent,
		ListComponent
	],
	bootstrap    : [
		SubtitleComponent,
		ListComponent
	]
})
export class AppModule {}