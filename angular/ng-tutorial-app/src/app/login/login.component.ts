import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  isLogin: boolean = false;
  show = true;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
  login(): void {
    if (this.validateForm.valid) {
      this.authService.login().subscribe(() => {
        if (this.authService.isLoggedIn) {
          // Usually you would use the redirect URL from the auth service.
          // However to keep the example simple, we will always redirect to `/admin`.
          const redirectUrl = this.authService.redirectUrl || '';
          // Redirect the user
          this.router.navigate([redirectUrl]);
          this.authService.isLoggedIn = true;
        }
      });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  logout() {
    this.authService.logout();
  }
}
