import { Component, AfterViewInit, OnInit } from '@angular/core';

import { NguCarouselConfig } from '@ngu/carousel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private modalService: NgbModal) {
  }


  public carouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 5, all: 0 },
    slide: 1,
    speed: 400,
    interval: 4000,
    point: {
      visible: true
    },
    load: 2,
    touch: true,
    loop: true,
    custom: 'banner'
  };

  public products = [
    {
      name: 'Product 1',
      quantity: 5,
      image: '../assets/image1.png'
    },
    {
      name: 'Product 2',
      quantity: 5,
      image: '../assets/image2.png'
    },
    {
      name: 'Product 3',
      quantity: 5,
      image: '../assets/image3.png'
    },
    {
      name: 'Product 4',
      quantity: 5,
      image: '../assets/image4.png'
    },
    {
      name: 'Product 5',
      quantity: 5,
      image: '../assets/image5.png'
    }
  ];
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
