import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from 'src/modules/blog/blog.module';
import { LandingModule } from 'src/modules/landing/landing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BlogModule, LandingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
