import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title:any;
  constructor(private route:ActivatedRoute){}

  ngOnInit(){
  this.route.params.subscribe(param =>
    this.title = param['page']);
   console.log(this.title);

  }

}
