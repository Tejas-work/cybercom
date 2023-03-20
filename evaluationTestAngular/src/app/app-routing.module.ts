import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaculatorComponent } from './caculator/caculator.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path:'loan-calculator/:page',
    component:CaculatorComponent
  },
  {
    path:"contact-us/:page",
    component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
