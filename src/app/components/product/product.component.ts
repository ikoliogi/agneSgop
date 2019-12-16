import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { IProduct } from '../../interfaces/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public response: IProduct;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    public cs: CartService
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.http.get('https://simple-api.develobird.gr/products/' + params.productID)
        .subscribe((r: any ) => {
          this.response = r;
        });
    });

  }

}
