import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  addForm!: FormGroup;
  userId:String ='';

  constructor(private fb: FormBuilder,private route:ActivatedRoute, private userService: UserService,private router:Router) {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.route.params.subscribe((param)=>{
      this.userId= param['id']
    });

    if (this.userId) {
      this.getUser(this.userId);
    }
  }




  getUser(userId:any){
    this.userService.getUser(userId).subscribe({
      next:(res) =>{
        console.log(res);
        this.addForm = this.fb.group(
          {
            name: [res.name, Validators.required],
            email: [res.email, Validators.required]
          }
        )
      },error:(error)=>{
        console.error(error);
      }
    });

  }

  onSubmit() {
    let formValues = this.addForm.getRawValue();
    console.log(formValues);

    const userBody:User = {
      name: formValues.name || '',
      email: formValues.email || ''
    }

    this.userService.addUser(userBody).subscribe(
      {
        next: (res) => {
          this.router.navigate(['user-list']);
          console.log(res);

        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  update(id:String){
    let formValues = this.addForm.getRawValue();
    console.log(formValues);

    const userBody:User = {
      name: formValues.name || '',
      email: formValues.email || ''
    }

    this.userService.updateUser(id,userBody).subscribe(
      {
        next: (res) => {
          this.router.navigate(['user-list']);
          console.log(res);

        },
        error: (error) => {
          console.log(error);
        }
      });

  }

}
