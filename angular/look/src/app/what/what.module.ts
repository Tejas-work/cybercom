import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowComponent } from './how/how.component';
import { LetComponent } from '../let/let.component';


@NgModule({
  declarations: [
    HowComponent,
    LetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WhatModule { }
