import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InnerComponent } from './inner.component';
import { OutletComponent } from './outlet.component';

const InnerRoutes: Routes = [
  {
    path: "main",
    component: InnerComponent,
    children: [
      { path: "outletContent", outlet: "innerOutlet", component: OutletComponent }
    ]
  }
]

@NgModule({
  imports:      [ RouterModule.forChild(InnerRoutes) ],
  declarations: [ InnerComponent, OutletComponent ]
})
export class InnerModule { }