import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//Authentication
import { AuthService } from '../../modules/shared/services/firebase/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public disabled: boolean;

  public loginForm: FormGroup; 

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.disabled = false;

    this.loginForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

  onLoginSubmit = () => {
    this.disabled = true;

    let params = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }
  }

}