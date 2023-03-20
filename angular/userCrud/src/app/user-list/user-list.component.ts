import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  usersData:any;

  constructor(private userService:UserService){
  }

  ngOnInit(){
    this.getUserData();

  }


  getUserData(){
    this.userService.getUsers().subscribe({
      next:(res) =>{
        this.usersData = res
      },error:(error)=>{
        console.error(error);

      }
    });
  }
  deleteUser(id:any){

    this.userService.deleteUser(id).subscribe({
      next:(res) =>{

      console.log(res);
      this.getUserData()
      },error:(error)=>{
        console.error(error);

      }
    });


  }

}


