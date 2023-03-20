import { Component } from '@angular/core';
import { OpService } from '../op.service';
@Component({
  selector: 'app-when',
  templateUrl: './when.component.html',
  styleUrls: ['./when.component.css']
})
export class WhenComponent {
user: any;

  constructor(private userService: OpService) {};



  onsubmit(){
    this.userService.throwUserName(this.user);
  }


}
