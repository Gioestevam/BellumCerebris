import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AuthService } from '../../../shared/services/firebase/auth.service';




@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  formTopic: FormGroup;
  name: string;


  constructor(private Auth: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  buildForm() {
    this.formTopic = this.fb.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(5)])]
    })
  }

}
