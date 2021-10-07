import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { StorybookComponent } from './storybook/storybook.component';



@NgModule({
  declarations: [HomeComponent, HeroComponent, StorybookComponent],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
