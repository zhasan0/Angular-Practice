import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


export interface User {
  username: string,
  password: string
}

export interface Person{
  firstname: string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() {
    this.user = {} as User;
    this.person = {} as Person;
  }

  ngOnInit(): void {
  }

  user: User = {
    username: '',
    password: ''
  }

  person: Person = {
    firstname: ''
  }
  // reactive form
  myForm = new FormGroup({
    username: new FormControl(this.user.username, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40)
    ]),
    password: new FormControl(''),
  });

  get username(){
    return this.myForm.get('username');
  }

  onSubmit() {
    console.warn(this.myForm.value)
  }

  // template driven form
  name = '';

}
