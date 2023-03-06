import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  title = 'look';
  forChild = "from parent";
  message = '';

  users:any = [
    {
      id :1,
      name : 'tejas'
    },
    {
      id :2,
      name : 'yug'
    },
    {
      id :3,
      name : 'rutvik'
    },
    {
      id :4,
      name : 'param'
    }
  ]
}
