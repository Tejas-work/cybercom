import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LetComponent } from './let/let.component';
import { UserComponent } from './user/user.component';
import { WhenComponent } from './when/when.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HowComponent } from './what/how/how.component';

@NgModule({
  declarations: [
    AppComponent,
    LetComponent,
    UserComponent,
    WhenComponent,
    SignUpComponent,
    HowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
