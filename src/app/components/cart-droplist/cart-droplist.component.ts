import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartProduct } from '../../interfaces/cart-product';

@Component({
  selector: 'app-cart-droplist',
  templateUrl: './cart-droplist.component.html',
  styleUrls: ['./cart-droplist.component.scss']
})
export class CartDroplistComponent implements OnInit {

  @Input('cartProduct') cartProduct: CartProduct;

  constructor(
    public cs: CartService
  ) { }

  ngOnInit() {
  }

}
