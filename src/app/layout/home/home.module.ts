import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomepageComponent } from '../../homepage/homepage.component';
import { ComponentsModule } from '../../components/components.module';
import { HomeRoutes } from './home.routing';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HomepageComponent,
    ComponentsModule,
    RouterModule.forChild(HomeRoutes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
