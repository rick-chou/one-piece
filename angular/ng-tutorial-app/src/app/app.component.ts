import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public authService: AuthService, public router: Router) {
    // TODO
    console.log(router);
  }
  isCollapsed = false;
  openMap: { [name: string]: boolean } = {
    'basic-syntax': true,
    form: false,
    chats: false,
    router: false,
    'http-client': false,
    rxjs: false,
  };
  ngOnInit() {
    console.log(this.router.url);
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
