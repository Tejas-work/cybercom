import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetComponent } from './let/let.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path : 'user',
    component : UserComponent
  },
{
  path : 'user/:id/:name',
  component : UserComponent
},
{
  path : 'lets',
  component : LetComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
