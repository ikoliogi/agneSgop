import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'app-loop-product',
  templateUrl: './loop-product.component.html',
  styleUrls: ['./loop-product.component.scss']
})
export class LoopProductComponent implements OnInit {

  @Input('product') singleProduct: IProduct;

  constructor(
    public cs: CartService
  ) { }

  ngOnInit() {
  }

}
