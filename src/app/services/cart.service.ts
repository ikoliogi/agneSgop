import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart = [];
  public cartTotalPrice: number = 0;

  constructor() { }

  public addToCart(p: IProduct) {

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
      exists.totalPrice += p.price;

    }

    this.cartTotalPrice += p.price;

  }

  public removeFromCart(p: IProduct) {

    const cartProduct = this.cart.find(a => a.prod._id === p._id);

    if (!cartProduct) {
      return; // if product not found
    }

    if (cartProduct.quantity > 1) {

      cartProduct.quantity--;
      cartProduct.totalPrice -= p.price;
      this.cartTotalPrice -= p.price;

    } else {

      return;
      // this.cartHide(p._id);

    }

  }

  public deleteFromCart(p: IProduct) {

    const cartProduct = this.cart.find(a => a.prod._id === p._id);
    if (!cartProduct) {
      return; // if product not found
    }

    const index = this.cart.indexOf(cartProduct);
    this.cart.splice(index, 1);
    this.cartTotalPrice -= cartProduct.totalPrice;

  }

  public cartHide(id: string): boolean {

    const cartProduct = this.cart.find(a => a.prod._id === id);
    if (cartProduct.quantity == 1) {
        return false;
    } else {
      return true;
    }

  }

}
