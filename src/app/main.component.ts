import { Component } from '@angular/core';

@Component({
  template: `<h1>Hello, main!</h1><div><a [routerLink]="['/inner/main' ]">Inner</a></div>`
})
export class MainComponent  {
}
