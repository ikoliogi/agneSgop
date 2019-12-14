import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-loop-product',
  templateUrl: './loop-product.component.html',
  styleUrls: ['./loop-product.component.scss']
})
export class LoopProductComponent implements OnInit {

  @Input('product') singleProduct: Product;

  constructor(
    public cart: CartService
  ) { }

  ngOnInit() {
  }

}
