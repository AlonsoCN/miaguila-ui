import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { WelcomeComponent } from './views/welcome.view';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [{ path: 'welcome', component: WelcomeComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
  constructor() {
    console.log('HomeRoutingModule');
  }
}
