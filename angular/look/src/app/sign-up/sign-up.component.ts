import { Component } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user = new User('tejas','tejas@gamil.com','12345678',1234567890);


}
