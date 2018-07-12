import { Component, OnInit } from '@angular/core';

//Authentication
import { AuthService } from '../../../shared/services/firebase/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public Auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.Auth.logout();
  }

}
