import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  public response = {};

  constructor(
    private http: HttpClient,
    public cart: CartService
  ) { }

  ngOnInit() {

    this.http.get('https://simple-api.develobird.gr/products')
    .subscribe(r => {
      this.response = r;
    });

  }

}

// sthn html, *ngIf={ r: main } : tsekarei an uparxei key main sto r
