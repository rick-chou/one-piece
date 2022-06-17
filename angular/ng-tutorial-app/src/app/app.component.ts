import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}
  isCollapsed = false;
  openMap: { [name: string]: boolean } = {
    'basic-syntax': false,
    form: false,
    charts: false,
    routing: false,
    http: false,
    rxjs: false,
  };
  ngOnInit() {
    const activatedRouter = location.pathname.split('/')[1];
    for (const key in this.openMap) {
      if (key === activatedRouter) {
        this.openMap[key] = true;
      } else {
        this.openMap[key] = false;
      }
    }
  }

  isLoggedIn = this.authService.isLoggedIn;
  login(): void {
    this.router.navigate(['/login']);
  }
  logout = this.authService.logout;
  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }
}
