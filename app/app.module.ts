import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenuComponent }     from './components/menu.component';
import { SubtitleComponent } from './components/subtitle.component';
import { ListComponent }     from './components/list.component';
import { ButtonComponent }   from './components/button.component';
import { BurgerComponent }   from './components/burger.component';

@NgModule({
	imports      : [ BrowserModule ],
	declarations : [
		MenuComponent,
		SubtitleComponent,
		ListComponent,
		ButtonComponent,
		BurgerComponent
	],
	bootstrap    : [
		MenuComponent
	]
})
export class AppModule {}