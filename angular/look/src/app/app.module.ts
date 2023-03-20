import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'bootstrap';
import { NguCarouselModule } from '@ngu/carousel';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LetComponent } from './let/let.component';
import { UserComponent } from './user/user.component';
import { WhenComponent } from './when/when.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CustomPipe } from './pipe/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LetComponent,
    UserComponent,
    WhenComponent,
    SignUpComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NguCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
