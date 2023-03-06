import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-let',
  templateUrl: './let.component.html',
  styleUrls: ['./let.component.css']
})
export class LetComponent {
  @Input() item = '';
  @Output() forParent = new EventEmitter();
  public imageUrl = "https://picsum.photos/id/237/200/300";

  check(e: KeyboardEvent) {
    this.imageUrl = (e.target as HTMLInputElement).value;
  }
  childEvent(){
    this.forParent.emit('from child');
  }
  constructor(){
    console.log('this is constructor',this.imageUrl);
  }
  ngOnInit(){
    console.log('this is ngOnit',this.imageUrl);
  }
  ngOnChanges(){
    console.log('this is ngOnChanges',this.imageUrl);
  }
  ngDoCheck(){
    console.log('this is ngDoCheck',this.imageUrl);
  }
  ngAfterContentInit(): void {
    console.log('this is ngAfterContentInit',this.imageUrl);
  }
  ngAfterContentChecked(): void {
    console.log('this is ngAfterContentChecked',this.imageUrl);
  }
  ngAfterViewInit(): void {
    console.log('this is ngAfterViewInit',this.imageUrl);
  }
  ngAfterViewChecked(): void {
    console.log('this is ngAfterViewChecked',this.imageUrl);
  }
}
