import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  email: string;
  password: string;

  constructor(private fb: FormBuilder, public authService: AuthService) { 
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }


  signup() {
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;

    this.authService.signup(email, password);
    this.email = this.password = '';
  }

}
