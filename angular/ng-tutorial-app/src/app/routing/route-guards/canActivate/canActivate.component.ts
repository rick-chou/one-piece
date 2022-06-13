import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-guard-canActivate',
  templateUrl: './canActivate.component.html',
  styleUrls: ['./canActivate.component.scss'],
})
export class GuardCanActivateComponent implements OnInit {
  validateForm!: FormGroup;
  isLogin: boolean = false;
  show = true;
  login(): void {
    if (this.validateForm.valid) {
      sessionStorage.setItem('cantActivate', this.validateForm.value);
      this.isLogin = true;
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  clearCredentials() {
    sessionStorage.removeItem('cantActivate');
    this.isLogin = false;
  }
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.isLogin = !!sessionStorage.getItem('cantActivate');
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
}
