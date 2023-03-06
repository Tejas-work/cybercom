import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { TestComponent } from './test/test.component';
import { UnknowComponent } from './unknow/unknow.component';
import { NoComponent } from './no/no.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    TestComponent,
    UnknowComponent,
    NoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
