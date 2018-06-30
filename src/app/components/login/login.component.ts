import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  email: string;
  password: string;

  constructor(private fb: FormBuilder, public authService: AuthService) { 
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {

  }

  login() {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;

    this.authService.login(email, password);
    this.email = this.password = '';
  }
}