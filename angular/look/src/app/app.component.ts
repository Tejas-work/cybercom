import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private modalService: NgbModal) {
  }

  ngAfterViewInit() {
    const mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      slidesPerView: 6,
      spaceBetween: 30,
      loop: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // Pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
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
