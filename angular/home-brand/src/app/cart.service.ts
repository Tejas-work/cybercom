import { Injectable } from '@angular/core';


export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
  imageUrl: string;
}
export interface Product {
  id: number;
  name: string;
  gender: string;
  accessory: boolean;
  price: number;
  description : string;
  available: boolean;
  colors: string[];
  src:string;
};

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[] = [];

  constructor() { }



  addItem(product: Product, quantity: number) {
    let item: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      subtotal: product.price * quantity,
      imageUrl: product.src
    };

    let existingItem = this.items.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.subtotal += item.subtotal;
    } else {
      this.items.push(item);
    }
  }

  removeItem(itemId: number) {
    let index = this.items.findIndex(item => item.id === itemId);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.subtotal, 0);
  }

  clearCart() {
    this.items = [];
  }
}


