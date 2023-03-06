import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = [
    {
      name:"yug",
      age:21
    
    },
    {
      name:"rutvik",
      age:21
     
    }
  ]
  color = "color: blue;border:1px solid black";
  hii="hjhjhj";

}
