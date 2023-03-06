import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  task = '';
  cate = '';
  fullTask = '';

   priority = ['hard','medium','easy']
  taskArr: {
    task: string;
    category: string;
  }[] = [

    ];



  getTask(v1: string, v2: string) {


   if(v1 && v2){
    this.taskArr.push({
      task: v1,
      category: v2
    });
   }

  };

  public imageUrl = "https://picsum.photos/id/237/200/300";

  check(e: KeyboardEvent) {
    this.imageUrl = (e.target as HTMLInputElement).value;
  }

}
