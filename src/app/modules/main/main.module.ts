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
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

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
import { ControlpanelComponent } from './components/controlpanel/controlpanel.component';
import { MenuToolbarComponent } from './components/menu-toolbar/menu-toolbar.component';

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
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  declarations: [
    SignupComponent,
    TopicComponent,
    HomeComponent,
    MainComponent,
    DashboardComponent,
    ControlpanelComponent,
    MenuToolbarComponent
  ],
  providers: [AuthService, AuthGuard]
})
export class MainModule { }
