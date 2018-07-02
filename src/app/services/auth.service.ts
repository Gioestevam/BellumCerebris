import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable,  } from 'rxjs';
import { Router } from '@angular/router';

interface User {
  uid: string;
  email?: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;

  _displayName: string;

  private _isSignedIn: boolean;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore) { 
    this.firebaseAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        console.log("user is signed as", user.uid);
        this._isSignedIn = true;
        return this.afs.doc<User>('users/${user.uid}').valueChanges();
      } else {
        console.log("user is not signed in");
        this._isSignedIn = false;
      }
    });
  }

  get isSignedIn(): boolean {
    return this._isSignedIn;
  }

  signup(email: string, password: string, displayName: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        const userRef: AngularFirestoreDocument<any> = this.afs.collection('users').doc(credential.user.uid);

        userRef.set({
          name: displayName,
          email: email
        }).then(res => {
          console.log('Success!', credential);
          this.router.navigate(['/login']);
        });
      })
      .catch(err =>  {
        console.log('Usuário Cadastrado', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    .then(credential => {
      this.router.navigate(['/home']);
      this.updateUserData(credential.user);
    });
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.collection('users').doc(user.uid);

    userRef
    .snapshotChanges()
    .subscribe(res => {
      console.log(res.payload.data());

      // const data: User = {
      //   uid: user.uid,
      //   email: user.email,
      //   displayName: this._displayName
      // };

      // userRef.set(data);
    });

  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut().then(() => {
        this.router.navigate(['/']);
      });
  }

}
