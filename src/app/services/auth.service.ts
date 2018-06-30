import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isSignedIn: boolean;


  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { 
    this.firebaseAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        console.log("user is signed as", user);
        this._isSignedIn = true;
      } else {
        console.log("user is not signed in");
        this._isSignedIn = false;
      }
    })
  }

  get isSignedIn(): boolean {
    return this._isSignedIn;
  }
   

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err =>  {
        console.log("Usuário Cadastrado", err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['/home']);
        console.log("Nice It's worked!");
      })
      .catch(err => {
        console.log("Senha Incorreta", err.message);
      })
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut().then(() => {
        this.router.navigate(['/']);
      });
  }

}
