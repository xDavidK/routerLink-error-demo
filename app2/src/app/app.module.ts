import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { NextChildComponent } from './next-child/next-child.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ChildComponent,
      NextChildComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [
      {provide: APP_BASE_HREF, useValue: '/app2'}
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
