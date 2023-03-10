import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginForm = new FormGroup({
    email:new FormControl("",[Validators.required]),
    password:new FormControl('password')
  })

  get email(){
    return this.loginForm.get('email');
  }
}
