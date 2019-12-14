import { Injectable } from '@angular/core';
import {Product} from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart = [];
  public cartTotalPrice: number = 0;

  constructor() { }

  public addToCart(p: Product) {

    const exists = this.cart.find(a => a.prod._id === p._id);
    if (!exists) {

      const added = {
        prod: p,
        quantity: 1,
        totalPrice: p.price
      };
      this.cart.push(added);

    } else {

      exists.quantity++;
      exists.totalPrice = exists.totalPrice + p.price;

    }

    this.cartTotalPrice += p.price;

  }

  public removeFromCart(p: Product) {

    const cartProduct = this.cart.find(a => a.prod._id === p._id);
    if (cartProduct.quantity > 1) {

      cartProduct.quantity--;
      cartProduct.totalPrice = cartProduct.totalPrice - p.price;

    } else {

      const index = this.cart.indexOf(cartProduct);
      console.log(index);
      this.cart.splice(index, 1);

    }

    this.cartTotalPrice -= p.price;

  }

}
