import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(UserListComponent) comp!: UserListComponent;

  title = 'userCrud';
  data:any;

  ngAfterViewInit() {
    // comp is now guaranteed to be initialized
    this.data = this.comp.testView();
  }



}
