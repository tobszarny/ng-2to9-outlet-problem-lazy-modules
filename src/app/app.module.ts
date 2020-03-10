import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';

import { InnerModule } from './inner/inner.module';

const AppRoutes: Routes = [
  { path: "main", component: MainComponent },
  { path: "inner", loadChildren: "inner/inner.module#InnerModule" }
]

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [ AppComponent, MainComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
