import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrentUserService } from './currentUser.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CurrentUserService] //register the service here
})
export class AppComponent {
  title = 'fifa-24';
}
