import { NgModule } from '@angular/core';

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
import { MatMenuModule } from '@angular/material/menu';

//FireStore
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Services
import { AuthGuard } from '../../modules/shared/guards/auth.guard';
import { AuthService } from '../shared/services/firebase/auth.service';

// Components
import { SignupComponent } from '../../components/signup/signup.component';
import { TopicComponent } from './components/topic/topic.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//Routings
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
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
    MatGridListModule,
    MainRoutingModule,
    MatMenuModule

  ],
  declarations: [
    SignupComponent,
    TopicComponent,
    HomeComponent,
    MainComponent,
    DashboardComponent
  ],
  providers: [AuthService, AuthGuard]
})
export class MainModule { }
