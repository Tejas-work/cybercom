import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  usersData: User[] = [];

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
    this.getUserData();

  }


 getUserData() {
    this.userService.getUsers().subscribe({
      next: (res) => {
        this.usersData = res;
        return res;
      }, error: (error) => {
        console.error(error);

      }
    });
  }
  deleteUser(id: string) {

    this.userService.deleteUser(id).subscribe({
      next: (res) => {
        let index = this.usersData.findIndex((user: User) => {
          return user.id === id;
        });

        this.usersData.splice(index, 1);

        console.log(res);


      }, error: (error) => {
        console.error(error);

      }
    });
  }

  addForm(){
    this.router.navigate(['/add']);

  }

  editUser(id:string){
    this.router.navigate(['/add',id]);

  }

  testView(){
    console.log("component users list");
    return "component users list";
  }

}


