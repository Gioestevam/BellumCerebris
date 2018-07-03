import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* 
  * Material Design
*/
import { MatCardModule } from '@angular/material/card';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
/* 
  * Firestore
*/
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

/* 
  * Services
*/
import { AuthService } from '../../services/auth.service';
import { AuthGuard } from '../../services/auth.guard';


import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { HomeComponent } from '../../components/home/home.component';
import { AppRoutingModule } from '../../app-routing.module';
import { TopicComponent } from '../../components/topic/topic.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    MatGridListModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    HomeComponent,
    TopicComponent
  ],
  providers: [AuthService, AuthGuard]
})
export class MainModule { }
