import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `Super power boost: {{2 | exponentialStrength: 10}}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  birthday = new Date(1987,2,25);
}
