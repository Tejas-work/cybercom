import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RegistrationComponent]
})
export class RegistrationModule { }
