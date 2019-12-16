import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ICartProduct } from '../../interfaces/ICart-product';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {

  @Input('cartProduct') cartProduct: ICartProduct;

  public hidden: boolean = true;

  constructor(
    public cs: CartService
  ) { }

  ngOnInit() {

  }

}
