import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { LoginComponent } from './components/login/login.component';

//Guard
import { AuthGuard } from './modules/shared/guards/auth.guard';

const routes: Routes = [
  { path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  }, { 
    path: 'login', 
    component: LoginComponent 
  }, { 
    path: 'main', 
    loadChildren: './modules/main/main.module#MainModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
