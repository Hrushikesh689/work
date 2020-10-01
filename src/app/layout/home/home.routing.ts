import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';

import { HomepageComponent } from '../../homepage/homepage.component';

export const HomeRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'homepage', component: HomepageComponent },
];
