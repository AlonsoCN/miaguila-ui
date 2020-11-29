import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './views/welcome.view';

@NgModule({
  declarations: [HomeComponent, WelcomeComponent],
  imports: [CommonModule, HomeRoutingModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {
  constructor() {
    console.log('Home Module');
  }
}
