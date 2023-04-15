import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    component:AddUserComponent

  },
  {
    path:'add',
    component:AddUserComponent,
    pathMatch:'prefix'
  },{
    path:'add/:id',
    component:AddUserComponent

  },
  {
    path:'user-list',
    component:UserListComponent
  },
  {
    path:'**',
    component:AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
