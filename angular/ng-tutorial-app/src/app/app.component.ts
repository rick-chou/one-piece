import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public authService: AuthService, public router: Router) {}
  isCollapsed = false;
  isLoggedIn = this.authService.isLoggedIn;
  login(): void {
    this.router.navigate(['/login']);
  }
  logout = this.authService.logout;
}
