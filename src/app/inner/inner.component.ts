import { Component } from '@angular/core';

@Component({
  template: `<div>This is inner</div>
  <div><a [routerLink]='[{ outlets: {"innerOutlet": [ "outletContent"] } }]'>Open Content</a></div>
  <router-outlet name="innerOutlet"><router-outlet>`
})
export class InnerComponent  {
}
