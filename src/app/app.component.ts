import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<span i18n>Welcome</span><div>Hello {{value}}. Message: {{message}}</div>`,
})
export class AppComponent {
  value = 'World';
  message = '';

  constructor(private http: HttpClient) {
    this.http.get('/api/message')
      .subscribe((resp: any) => this.message = resp.text);
  }
}
