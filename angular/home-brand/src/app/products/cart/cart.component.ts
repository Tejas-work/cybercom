import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';


export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
  imageUrl: string;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items :CartItem[]=[];
  total:number=0;

  constructor(private cartService : CartService){}

  ngOnInit () {
    this.items = this.cartService.getItems();
    this.total=this.cartService.getTotal();
  }


}
