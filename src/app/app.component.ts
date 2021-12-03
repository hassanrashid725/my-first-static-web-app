import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<span i18n>Welcome</span><div>Hello {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
